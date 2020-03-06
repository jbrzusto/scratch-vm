const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const log = require('../../util/log');
const cast = require('../../util/cast');
const formatMessage = require('format-message');
const BLE = require('../../io/ble');
const Base64Util = require('../../util/base64-util');

/**
 * Icon png to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAIAAAAzjQvQAAADvElEQVRo3u2Zz0sUYRjHHwM9SEhePMR2aIkQ6yQseBFEWJYQo4sdRFACIyIkuqQnxbyI0D9QomchFdn8RRnVDm2tJw/bBmaLiiu2uyWbbc3rzLfL0rOzjI6tsyD2vMzhO/t+3/eZz7wzPM+8Wwb6v9oZEmABFmABFmABFmABFmABFmABFmABFmABFmABFmABFuDTCHzzJq2ukq5TIkF9fSeIGCU6Vlbwt6XTKF2gfzxKtsLnz7OurqbGxtP+SCcSrL9/p7dvTzvwo0f0+TMpRdvbNDJycl7hMvkzTYBHR+ndO4rHKZmkvT3a36ffvymZpEiEHj4sNKdSBNgcw8POgTo7aXGR4nHKZEgpMgzKZimRIE2jgYFCc3c3hUL09SvpOuk6pVIUDlNPjxtpyTRxSHvzBjU1bE6l7G3Dw4eFqKtDKATDODDK5KTFPz2N/X0bm2liYeFwnGMDA1haOhaw14u1NYcQt26xf2rKwTw/7xKwUmhthdeLjg6Ew5b7eu+ezcBY7EjAS0uWqT58wOAg/H54PAgEMDRkWd6uLsvaPn+OlhY0N2Nigh8Q00RPjxvAum75/csXDqxpRQL7/dB1to2PO1yMprF5ednSFQpxVyRSgkprYYH1pUvFl9zl5Tm9uUldXQ7+2lrW09OWrpkZ1pcvlyAtaRrrc+eKnMTrZR2PO5hraqi62p6QiIJB1lVVVF/vNvCrV6wrKoqcpLKSdTLpYL56lcrKclrXaWXF0huNklJ8evGi28BXrrDOj8QZ7whVXDbL+uxZB3MkwnNWVFBdnaXX5+O3g4g+fnQbOP+Z2d21MeTfhfxLyW8bG/bvp23LZCid5tPWVktvS4vlcyUadRs4EGC9vm5jyL8LFy7YTxIMkmHktMdDT586BI3FWF+/bum6cYP1p09uVFqGgfFxtLWhvh6jo1CK08DjxzYDx8YsewB9ffD58OABXr7E7CzbClJ6OIzBQQQC8Hjg9+PuXYyNobc3Z+7s5DxsGJiYQHMzrl3D3BxPYhi4c6eUldb6uv3ApiZks/ZDYjG2+XzY2nII8fo1+589czAHg6UsLdNptLcfOPbJE/vhBZs+DQ1YXj4s0NqaxT85eWAtPTfnXi2tFGZmsLmJX7+gFHZ2sLiIhgaH4f39iEbx4wcMAz9/Ynsb4TAGBmyct2/jxQvE48hkoBRME7qOb9+wuoqpqUJzdzc0DckkdB1KIZ3G+/e4f98R5wgbAKaZy35KFZ9vZQNAgAVYgGXXUlZYgAVYgAVYgAVYgAX4JLU/Eka+jvDhxh8AAAAASUVORK5CYII=';

/**
 * Enum for picoboard BLE command protocol.
 * @readonly
 * @enum {number}
 */
const BLECommand = {
    CMD_SEND_DATA: 0x01
};


/**
 * A time interval to wait (in milliseconds) before reporting to the BLE socket
 * that data has stopped coming from the peripheral.
 */
const BLETimeout = 8000;

/**
 * A time interval to wait (in milliseconds) while a block that sends a BLE message is running.
 * @type {number}
 */
const BLESendInterval = 3000;

/**
 * A string to report to the BLE socket when the micro:bit has stopped receiving data.
 * @type {string}
 */
const BLEDataStoppedError = 'PicoBoard extension stopped receiving data';

/**
 * Enum for picoboard protocol.
 * https://github.com/LLK/scratch-picoboard-firmware/blob/master/protocol.md
 * @readonly
 * @enum {string}
 */
const BLEUUID = {
    service: 0xf005,
    rxChar: '9dfdc434-5bfb-11ea-af5e-074c022b8311',
    txChar: '9eb6187c-5bfb-11ea-9bf6-73236440cf10'
};

/**
 * Manage communication with a Picoboard peripheral over a Scrath Link client socket.
 */
class Picoboard {

    /**
     * Construct a Picoboard communication object.
     * @param {Runtime} runtime - the Scratch 3.0 runtime
     * @param {string} extensionId - the id of the extension
     */
    constructor (runtime, extensionId) {

        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;

        /**
         * The BluetoothLowEnergy connection socket for reading/writing peripheral data.
         * @type {BLE}
         * @private
         */
        this._ble = null;
        this._runtime.registerPeripheralExtension(extensionId, this);

        /**
         * The id of the extension this peripheral belongs to.
         */
        this._extensionId = extensionId;

        /**
         * The most recently received value for each sensor.
         * @type {Object.<string, number>}
         * @private
         */
        this._sensors = {
            slider: 0,
            light: 0,
            sound: 0,
            button: 0,
            resistanceA: 0,
            resistanceB: 0,
            resistanceC: 0,
            resistanceD: 0
        };

        /**
         * Most recent channel # received from serial port.
         * @type {number}
         * @private
         */
        this._channel = null;

        /**
         * Most recent high 3-bits of sensor reading received from serial port.
         * (Stored already shifted).
         * @type {number}
         * @private
         */
        this._highbits = null;

        /**
         * Interval ID for data reading timeout.
         * @type {number}
         * @private
         */
        this._timeoutID = null;

        /**
         * A flag that is true while we are busy sending data to the BLE socket.
         * @type {boolean}
         * @private
         */
        this._busy = false;

        /**
         * ID for a timeout which is used to clear the busy flag if it has been
         * true for a long time.
         */
        this._busyTimeoutID = null;

        this.reset = this.reset.bind(this);
        this._onConnect = this._onConnect.bind(this);
        this._onMessage = this._onMessage.bind(this);
    }

    /**
     * @return {number} - the latest value received for the slider.
     */
    get slider () {
        return Math.round(this._sensors.slider / 1.023) / 10.0;
    }

    /**
     * @return {number} - the latest value received for the light sensor.
     */
    get light () {
        return 100.0 - Math.round(this._sensors.light / 1.023) / 10.0;
    }

    /**
     * @return {number} - the latest value received for the sound sensor.
     */
    get sound () {
        return Math.round(this._sensors.sound / 1.023) / 10.0;
    }

    /**
     * @return {boolean} - the latest value received for the button.
     */
    get button () {
        return this._sensors.button;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE A.
     */
    get resistanceA () {
        return Math.round(this._sensors.resistanceA / 1.023) / 10.0;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE B.
     */
    get resistanceB () {
        return Math.round(this._sensors.resistanceB / 1.023) / 10.0;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE C.
     */
    get resistanceC () {
        return Math.round(this._sensors.resistanceC / 1.023) / 10.0;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE D.
     */
    get resistanceD () {
        return Math.round(this._sensors.resistanceD / 1.023) / 10.0;
    }

    /**
     * Called by the runtime when user wants to scan for a peripheral.
     */
    scan () {
        if (this._ble) {
            this._ble.disconnect();
        }
        this._ble = new BLE(this._runtime, this._extensionId, {
            filters: [
                {services: [BLEUUID.service]}
            ]
        }, this._onConnect, this.reset);
    }

    /**
     * Called by the runtime when user wants to connect to a certain peripheral.
     * @param {number} id - the id of the peripheral to connect to.
     */
    connect (id) {
        if (this._ble) {
            this._ble.connectPeripheral(id);
        }
    }

    /**
     * Disconnect from the picoboard.
     */
    disconnect () {
        if (this._ble) {
            this._ble.disconnect();
        }

        this.reset();
    }

    /**
     * Reset all the state and timeout/interval ids.
     */
    reset () {
        if (this._timeoutID) {
            window.clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    }

    /**
     * Return true if connected to the picoboard.
     * @return {boolean} - whether the picoboard is connected.
     */
    isConnected () {
        let connected = false;
        if (this._ble) {
            connected = this._ble.isConnected();
        }
        return connected;
    }

    /**
     * Send a message to the peripheral BLE socket.
     * @param {number} command - the BLE command hex.
     * @param {Uint8Array} message - the message to write
     * params are ignored; the only message is '0x01' to start a read.
     */
    send (command, message) {
        if (!this.isConnected()) return;
        if (this._busy) return;

        // Set a busy flag so that while we are sending a message and waiting for
        // the response, additional messages are ignored.
        this._busy = true;

        // Set a timeout after which to reset the busy flag. This is used in case
        // a BLE message was sent for which we never received a response, because
        // e.g. the peripheral was turned off after the message was sent. We reset
        // the busy flag after a while so that it is possible to try again later.
        this._busyTimeoutID = window.setTimeout(() => {
            this._busy = false;
        }, 5000);

        const output = new Uint8Array(message.length + 1);
        output[0] = command; // attach command to beginning of message
        for (let i = 0; i < message.length; i++) {
            output[i + 1] = message[i];
        }
        const data = Base64Util.uint8ArrayToBase64(output);

        this._ble.write(BLEUUID.service, BLEUUID.txChar, data, 'base64', true).then(
            () => {
                this._busy = false;
                window.clearTimeout(this._busyTimeoutID);
            }
        );
    }

    /**
     * Starts reading data from peripheral after BLE has connected to it.
     * @private
     */
    _onConnect () {
        this._ble.read(BLEUUID.service, BLEUUID.rxChar, true, this._onMessage);
        this._timeoutID = window.setTimeout(
            () => this._ble.handleDisconnectError(BLEDataStoppedError),
            BLETimeout
        );
        this.send(BLECommand.CMD_SEND_DATA, null);
    }

    /**
     * Process bytes received.  Bit format of data items from picoboard is:
     * [1, C3, C2, C1, C0, D9, D8, D7], [0, D6, D5, D4, D3, D2, D1, D0]
     * where
     *   - [C3, C2, C1, C0] is a 4-bit channel #
     *   - [D9, D8, D7, D6, D5, D4, D3, D2, D1, D0] is a 10-bit sensor value
     *
     * Channel #s:
     *
     * 15 - ID channel; data value must be 0x004
     * 0 - resistance D
     * 1 - resistance C
     * 2 - resistance B
     * 3 - button
     * 4 - resistance A
     * 5 - light
     * 6 - sound
     * 7 - slider
     *
     * @param {object} base64 - the incoming Serial data.
     * @private
     */
    _onMessage (base64) {
//        console.log("Got message: " + base64 + "\n");
        // parse data
        const data = Base64Util.base64ToUint8Array(base64);
        // read and parse as many bytes as are available,
        // one at a time
        for (i=0; i < data.length; ++i) {
            var b = data[i];
            if (b & 0x80) {
                // channel byte; save channel and high 3 bits of sensor reading, pre-shifted
                this._channel = (b & 0x7f) >> 3;
                this._highbits = (b & 0x07) << 7;
            } else {
                // if no channel received, drop this byte
                if (this._channel !== null) {
                    // have channel and upper 3 data bits, so combine with 7 low bits from this byte
                    var val = this._highbits | b;
                    switch (this._channel) {
                    case 0:
                        this._sensors.resistanceD = val;
                        break;
                    case 1:
                        this._sensors.resistanceC = val;
                        break;
                    case 2:
                        this._sensors.resistanceB = val;
                        break;
                    case 3:
                        this._sensors.button = (0 == val);
                        break;
                    case 4:
                        this._sensors.resistanceA = val;
                        break;
                    case 5:
                        this._sensors.light = val;
                        break;
                    case 6:
                        this._sensors.sound = val;
                        break;
                    case 7:
                        this._sensors.slider = val;
                        output = new Uint8Array(1);
                        // last channel value received; send command to
                        // restart transmit of current sensor readings.
                        this._ble.read(BLEUUID.service, BLEUUID.rxChar, true, this._onMessage);
//                        this.send(BLECommand.CMD_SEND_DATA, null);
                        break;
                    case 15:
                        if (val != 4) {
                            // invalid byte!  FIXME: what do we do?
                        }
                        break;
                    default:
                    }
                    // data item has been consumed; reset channel
                    this._channel = null;
                }
            }
        }
        // cancel disconnect timeout and start a new one
        window.clearTimeout(this._timeoutID);
        this._timeoutID = window.setTimeout(
            () => this._ble.handleDisconnectError(BLEDataStoppedError),
            BLETimeout
        );
    }

    /**
     * @param {number} pin - the pin to check touch state.
     * @return {number} - the latest value received for the touch pin states.
     * @private
     */
    _serialDataStoped () {
        this._reset();
        // Try send the "send us data" command.
        // FIXME: do something better here
        output = new Uint8Array(1);
        // last channel value received; write constant
        // byte 0x01 which tells picoboard firmware to
        // transmit current sensor readings.
        output[0] = 0x01;
        this._serial.write(output);
    }
};

/**
 * Enum for picoboard pin states (really, just the button).
 * @readonly
 * @enum {string}
 */
const PicoboardPinState = {
    ON: 'on',
    OFF: 'off'
};

/**
 * Scratch 3.0 blocks to interact with a Picoboard peripheral.
 */
class Scratch3PicoboardBlocks {

    /**
     * @return {string} - the name of this extension.
     */
    static get EXTENSION_NAME () {
        return 'PicoBoard';
    }

    /**
     * @return {string} - the ID of this extension.
     */
    static get EXTENSION_ID () {
        return 'picoboard';
    }

    /**
     * @return {array} - text and values for each pin state menu element
     */
    get PIN_STATE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'picoboard.pinStateMenu.on',
                    default: 'on',
                    description: 'label for on element in button state picker for picoboard extension'
                }),
                value: PicoboardPinState.ON
            },
            {
                text: formatMessage({
                    id: 'picoboard.pinStateMenu.off',
                    default: 'off',
                    description: 'label for off element in button state picker for picoboard extension'
                }),
                value: PicoboardPinState.OFF
            }
        ];
    }


    /**
     * Construct a set of Picoboard blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        // Create a new Picoboard peripheral instance
        this._peripheral = new Picoboard(this.runtime, Scratch3PicoboardBlocks.EXTENSION_ID);
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: Scratch3PicoboardBlocks.EXTENSION_ID,
            name: Scratch3PicoboardBlocks.EXTENSION_NAME,
            blockIconURI: blockIconURI,
            showStatusButton: true,
            blocks: [
                {
                    opcode: 'whenButtonPressed',
                    text: formatMessage({
                        id: 'picoboard.whenButtonPressed',
                        default: 'when button pressed',
                        description: 'when the button on the PicoBoard is pressed'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                    }
                },
                {
                    opcode: 'isButtonPressed',
                    text: formatMessage({
                        id: 'picoboard.isButtonPressed',
                        default: 'button pressed?',
                        description: 'is the button on the PicoBoard pressed?'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                    }
                },
                '---',
                {
                    opcode: 'getSlider',
                    text: formatMessage({
                        id: 'picoboard.slider',
                        default: 'slider position',
                        description: 'where is the slider positioned? (0 = left end; 100 = right end)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
                {
                    opcode: 'getLight',
                    text: formatMessage({
                        id: 'picoboard.light',
                        default: 'illumination',
                        description: 'what is the light level? (0 = dark; 100 = very bright)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
                {
                    opcode: 'getSound',
                    text: formatMessage({
                        id: 'picoboard.sound',
                        default: 'sound level',
                        description: 'what is the sound level? (0 = quiet; 100 = very loud)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
                {
                    opcode: 'getResistanceA',
                    text: formatMessage({
                        id: 'picoboard.resistanceA',
                        default: 'input A resistance',
                        description: 'how much resistance across input A? (0 = none; 100 = high)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
                {
                    opcode: 'getResistanceB',
                    text: formatMessage({
                        id: 'picoboard.resistanceB',
                        default: 'input B resistance',
                        description: 'how much resistance across input B? (0 = none; 100 = high)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
                {
                    opcode: 'getResistanceC',
                    text: formatMessage({
                        id: 'picoboard.resistanceC',
                        default: 'input C resistance',
                        description: 'how much resistance across input C? (0 = none; 100 = high)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
                {
                    opcode: 'getResistanceD',
                    text: formatMessage({
                        id: 'picoboard.resistanceD',
                        default: 'input D resistance',
                        description: 'how much resistance across input D? (0 = none; 100 = high)'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                    }
                },
            ],
            menus: {
            }
        };
    }

    /**
     * Test whether the button is pressed
     * @param {object} args - ignored
     * @return {boolean} - true if the button is pressed.
     */
    whenButtonPressed (args) {
        return this._peripheral.button;
    }

    /**
     * Test whether the button is pressed
     * @param {object} args - ignored
     * @return {boolean} - true if the button is pressed.
     */
    isButtonPressed (args) {
        return this._peripheral.button;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the slider position
     */
    getSlider (args) {
        return this._peripheral.slider;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the light level
     */
    getLight (args) {
        return this._peripheral.light;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the sound level
     */
    getSound (args) {
        return this._peripheral.sound;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input A
     */
    getResistanceA (args) {
        return this._peripheral.resistanceA;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input B
     */
    getResistanceB (args) {
        return this._peripheral.resistanceB;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input C
     */
    getResistanceC (args) {
        return this._peripheral.resistanceC;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input D
     */
    getResistanceD (args) {
        return this._peripheral.resistanceD;
    }

};

module.exports = Scratch3PicoboardBlocks;
