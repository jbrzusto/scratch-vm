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
const blockIconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQFSURBVFiF7ZbbS5tnHMc/eU3iMTOvxnpo0yzZokPqed2qUtAxtYyytYqydmUXpVTESb3oXf+EikWYtYHuphe7GIOtO7hlAw8tlm0MTFCqjk1rmYeK85QmRn3Ns4toPC0andtFyQee93153t/v93yf3+/hxwNhwoQJEybMC41q+4Q4f76QwcG3cbsTD2sRn0YjzaWmxkV5vSveqCiN5vlzRTcz49lipNV6SU7u5dq1L1Q1Ncs7BAohVGRntzAwUD+v1UpPY2IOSx8Tx4/z8dGjnMvN5UuHg0xJ4oOeni02cT4f5pkZSE39hbKyStW9e2MA6oDFqVN19PU1AHTo9VROTx+aQKss8xrwx+oqAP2KQva2+O8aDNwHmJh4g+5uG3AWQApYjI5+eGiK/i1jY++I+vp02JxBn8+y/pm/vMynBsOhrefS6fgGOBYRQR9gUat3xE+WNnKFoqh4/NgK/KYGaG5uzvrk1q1YtSxTuryMaWEB0ybnycxMXLKMddu52czA6dNM+3wA5E5Poxsa2ljP5eLc5CRqp5MqRUG7soJ+7yOkDjwcDkf1A7c7WgWkxcZy3O3eYvnEaOTPuDisu0Trzsig7u5dAH6/cmWLQPXSEkfGx/cSFBybzab51WJZ6JVlMRcVJQTse8xlZYmp4mIxVVwsVhMSQveVpH+eLy19L5BBp9PZWjs8rAP42mDgrNe7703G9/XtPzNGI1it4HDAzAwAfRcuMGE2I4zGOjo770sAJSUldSP5+QujZjNveTy7xgzGVzU1tFZU8GNlZehOKSmgUkF8vP8NPDObeWIyMRcZmQlrbcZut9+09Pa+ZBoZofOADfrnpSU+sttxrvW6kBgchLExGBnxFxawPnrE6z09GGdnv4e1Eufk5DR/ZjRe1bhcsfkHzOAraWlcrajgWFJS6E4ul1/kJkxdXf4OUlr6bUBgf39/tV2rjYqQZZLcblIPIPJyWxuX9+21N2oAn8/nzPN4FPXiYoS8nxKFiMtgYCk2FklRSBgfD5RzX4ikpLG9WsIPubni/cJC0Z6XF3IbWdTphK2tTTQ2NoqWlhYxHKrvmTMVWwUajd/t5qBoNOJVi0UA4mWTSaxERvr/pacL0dEhRFfXxrh9O+C3YDCIhoYGAYjy8nIxVFQUXFRtrT9edLRHXL9+BDZfFqzWm2i1ywRBUhRS9XoAUvR6pJUV/4/5eXA6/b1sfWw/+CYTRUVFFBQU7F7ejAxITASzuVXV1DS1s8yFhdUiIeFpsB3OJiaKz0+eFH8ZDCGX2CdJ4qeqKvHg0iXx8OJF4ZLl4PbR0R5x4kSTsNk065p23qjb2yO5c+dNJicTgm/1PyAmxktZWa/qxo1n/+u6YcKECRPmBedvVh5E5pPNg1EAAAAASUVORK5CYII=';

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
 * @readonly
 * @enum {string}
 */
const BLEUUID = {
    service: 0xf005,
    rxChar: '9dfdc434-5bfb-11ea-af5e-074c022b8311',
};

/**
 * Manage communication with a PicoBoard peripheral over a Scrath Link client socket.
 */
class PicoBoard {

    /**
     * Construct a PicoBoard communication object.
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
            A: 0,
            B: 0,
            C: 0,
            D: 0
        };

        /**
         * Most recent channel # received from PicoBoard
         * @type {number}
         * @private
         */
        this._channel = null;

        /**
         * Most recent high 3-bits of sensor reading received from PicoBoard
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
     * Calculation as done in Scratch 2.0's picoExtension.js
     */
    get light () {
        var v = this._sensors.light;
        return (v < 25) ? 100 - v : Math.round((1023 - v) * (75 / 998));
    }

    /**
     * @return {number} - the latest value received for the sound sensor.
     * Calculation as done in Scratch 2.0's picoExtension.js
     */
    get sound () {
        var v = this._sensors.sound;
        v = Math.max(0, v - 18);
        return (v < 50) ? v / 2 :
            //noise ceiling
        25 + Math.min(75, Math.round((v - 50) * (75 / 580)));
    }

    /**
     * @return {boolean} - the latest value received for the button.
     */
    get button () {
        return this._sensors.button;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE A.
     * Calculation as done in Scratch 2.0's picoExtension.js
     */
    get A () {
        return this._sensors.A / 10.23;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE B.
     * Calculation as done in Scratch 2.0's picoExtension.js
     */
    get B () {
        return this._sensors.B / 10.23;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE C.
     * Calculation as done in Scratch 2.0's picoExtension.js
     */
    get C () {
        return this._sensors.C / 10.23;
    }

    /**
     * @return {number} - the latest value received for RESISTANCE D.
     * Calculation as done in Scratch 2.0's picoExtension.js
     */
    get D () {
        return this._sensors.D / 10.23;
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
     * Disconnect from the PicoBoard.
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
     * Return true if connected to the PicoBoard.
     * @return {boolean} - whether the PicoBoard is connected.
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
    }

    /**
     * Process bytes received.  Bit format of data items from PicoBoard is:
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
     * @param {object} base64 - the incoming bytes from the PicoBoard
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
                        this._sensors.D = val;
                        break;
                    case 1:
                        this._sensors.C = val;
                        break;
                    case 2:
                        this._sensors.B = val;
                        break;
                    case 3:
                        this._sensors.button = val;
                        break;
                    case 4:
                        this._sensors.A = val;
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
                        break;
                    case 15:
                        if (val != 4) {
                            // invalid byte!  FIXME: what do we do?  means it's not a PicoBoard!
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
};

/**
 * Scratch 3.0 blocks to interact with a PicoBoard peripheral.
 */
class Scratch3PicoBoardBlocks {

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
        return 'PicoBoard';
    }

    /**
     * Construct a set of PicoBoard blocks.
     * @param {Runtime} runtime - the Scratch 3.0 runtime.
     */
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime.
         * @type {Runtime}
         */
        this.runtime = runtime;

        // Create a new PicoBoard peripheral instance
        this._peripheral = new PicoBoard(this.runtime, Scratch3PicoBoardBlocks.EXTENSION_ID);

        this._sensorNameMap = {
            'button pressed': "button",
            'A connected': "A",
            'B connected': "B",
            'C connected': "C",
            'D connected': "D",
            'slider' : "slider",
            'light' : "light",
            'sound' : "sound",
            'resistance-A': "A",
            'resistance-B': "B",
            'resistance-C': "C",
            'resistance-D': "D"
        };

    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: Scratch3PicoBoardBlocks.EXTENSION_ID,
            name: Scratch3PicoBoardBlocks.EXTENSION_NAME,
            blockIconURI: blockIconURI,
            showStatusButton: true,
            blocks: [
                {
                    opcode: 'whenSensorConnected',
                    text: formatMessage({
                        id: 'PicoBoard.whenSensorConnected',
                        default: 'when [booleanSensor]',
                        description: 'when button pressed or sensor connected'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        booleanSensor: {
                            type: ArgumentType.STRING,
                            menu: 'booleanSensor',
                            defaultValue: 'button pressed'
                        },
                    }
                },
                {
                    opcode: 'whenSensorPass',
                    text: formatMessage({
                        id: 'PicoBoard.whenSensorPass',
                        default: 'when [sensor] [lessMore] [reference]',
                        description: 'check for when sensor value is < or > than reference'
                    }),
                    blockType: BlockType.HAT,
                    arguments: {
                        sensor: {
                            type: ArgumentType.STRING,
                            menu: 'sensor',
                            defaultValue: 'slider'
                        },
                        lessMore: {
                            type: ArgumentType.STRING,
                            menu: 'lessMore',
                            defaultValue: '<'
                        },
                        reference: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: 'sensorPressed',
                    text: formatMessage({
                        id: 'PicoBoard.sensorPressed',
                        default: 'is [booleanSensor]?',
                        description: 'is the button pressed or the sensor connected?'
                    }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        booleanSensor: {
                            type: ArgumentType.STRING,
                            menu: 'booleanSensor',
                            defaultValue: 'button pressed'
                        }
                    }
                },
                {
                    opcode: 'sensor',
                    text: formatMessage({
                        id: 'PicoBoard.sensor',
                        default: '[sensor] value',
                        description: 'value of the sensor'
                    }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        sensor: {
                            type: ArgumentType.STRING,
                            menu: 'sensor',
                            defaultValue: 'slider'
                        }
                    }
                },
            ],
            menus: {
                booleanSensor: {
                    items: ['button pressed', 'A connected', 'B connected', 'C connected', 'D connected']
                },
                sensor: {
                    items: ['slider', 'light', 'sound', 'resistance-A', 'resistance-B', 'resistance-C', 'resistance-D']
                },
                lessMore: {
                    acceptReporters: true,
                    items: ['>', '<']
                }
            }
        }
    }

    /**
     * Test whether the button is pressed or a sensor is connected.
     * Criterion for the latter taken directly from the Scratch 2.0 picoExtension.js
     * @param {object} args - the block's arguments.
     * @property {string} booleanSensor - the boolean sensor: 'button pressed', 'A connected', 'B connected', 'C connected', 'D connected'
     * @return {boolean} - true if the button is pressed.
     */
    whenSensorConnected (args) {
        console.log(JSON.stringify(args));
        return this._peripheral[this._sensorNameMap[args.booleanSensor]] < 10
    }

    /**
     * Compare a sensor's level to a reference.
     * @param {object} args - the block's arguments.
     * @property {string} sensor - the sensor: 'slider', 'light', 'sound', 'resistance-A', 'resistance-B', 'resistance-C', 'resistance-D'
     * @property {string} lessMore - the comparison operation: '<' or '>'.
     * @property {number} reference - the value to compare against.
     * @return {boolean} - the result of the comparison, or false on error.
     */
    whenSensorPass (args) {
        val = this._peripheral[this._sensorNameMap[args.sensor]];
        switch (args.OP) {
        case '<':
            return val < cast.toNumber(args.REFERENCE);
        case '>':
            return val > cast.toNumber(args.REFERENCE);
        default:
            log.warn(`Unknown comparison operator in whenSensor: ${args.OP}`);
            return false;
        }
    }

    /**
     * Test whether the button is pressed or the sensor connected
     * @param {object} args - the block's arguments.
     * @property {string} booleanSensor - the boolean sensor: 'button pressed', 'A connected', 'B connected', 'C connected', 'D connected'
     * @return {boolean} - true if the button is pressed.
     */
    sensorPressed (args) {
        return this._peripheral[this._sensorNameMap[args.booleanSensor]] < 10;
    }

    /**
     * Get a sensor's level
     * @param {object} args - the block's arguments.
     * @property {string} SENSOR - the sensor 'slider', 'light', 'sound', 'resistance-A', 'resistance-B', 'resistance-C', 'resistance-D'
     * @return {number} - the sensor's latest value
     */
    sensor (args) {
        return this._peripheral[this._sensorNameMap[args.sensor]];
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
    getA (args) {
        return this._peripheral.A;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input B
     */
    getB (args) {
        return this._peripheral.B;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input C
     */
    getC (args) {
        return this._peripheral.C;
    }

    /**
     * @param {object} args - the block's arguments - ignored
     * @return {number} - the resistance on input D
     */
    getD (args) {
        return this._peripheral.D;
    }

};

module.exports = Scratch3PicoBoardBlocks;
