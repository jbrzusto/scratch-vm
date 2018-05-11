(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ScratchRender"] = factory();
	else
		root["ScratchRender"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license twgl.js 4.4.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.copyExistingProperties = copyExistingProperties;
exports.copyNamedProperties = copyNamedProperties;
exports.isBuffer = isBuffer;
exports.isRenderbuffer = isRenderbuffer;
exports.isShader = isShader;
exports.isTexture = isTexture;
exports.isSampler = isSampler;
exports.warn = exports.error = void 0;

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 */
function copyNamedProperties(names, src, dst) {
  names.forEach(function (name) {
    var value = src[name];

    if (value !== undefined) {
      dst[name] = value;
    }
  });
}
/**
 * Copies properties from source to dest only if a matching key is in dest
 *
 * @param {Object.<string, ?>} src the source
 * @param {Object.<string, ?>} dst the dest
 */


function copyExistingProperties(src, dst) {
  Object.keys(dst).forEach(function (key) {
    if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      dst[key] = src[key];
    }
  });
}

var error = _globalObject.default.console && _globalObject.default.console.error && typeof _globalObject.default.console.error === "function" ? _globalObject.default.console.error.bind(_globalObject.default.console) : function () {};
exports.error = error;
var warn = _globalObject.default.console && _globalObject.default.console.warn && typeof _globalObject.default.console.warn === "function" ? _globalObject.default.console.warn.bind(_globalObject.default.console) : function () {};
exports.warn = warn;
var repBuffer;

function isBuffer(gl, t) {
  if (!repBuffer) {
    repBuffer = gl.createBuffer();
  }

  return t instanceof repBuffer.constructor;
}

var repRenderbuffer;

function isRenderbuffer(gl, t) {
  if (!repRenderbuffer) {
    repRenderbuffer = gl.createRenderbuffer();
  }

  return t instanceof repRenderbuffer.constructor;
}

var repShader;

function isShader(gl, t) {
  if (!repShader) {
    repShader = gl.createShader(gl.VERTEX_SHADER);
  }

  return t instanceof repShader.constructor;
}

var repTexture;

function isTexture(gl, t) {
  if (!repTexture) {
    repTexture = gl.createTexture();
  }

  return t instanceof repTexture.constructor;
}

var repSampler;

function isSampler(gl, t) {
  if (!repSampler) {
    if (gl.createSampler) {
      repSampler = gl.createSampler();
    } else {
      return false; // it can't be a sampler if this is not WebGL2
    }
  }

  return t instanceof repSampler.constructor;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getGLTypeForTypedArray = getGLTypeForTypedArray;
exports.getGLTypeForTypedArrayType = getGLTypeForTypedArrayType;
exports.getTypedArrayTypeForGLType = getTypedArrayTypeForGLType;
exports.isArrayBuffer = void 0;

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level shader typed array related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.typedArray` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/typedArray
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var glTypeToTypedArray = {};
{
  var tt = glTypeToTypedArray;
  tt[BYTE] = Int8Array;
  tt[UNSIGNED_BYTE] = Uint8Array;
  tt[SHORT] = Int16Array;
  tt[UNSIGNED_SHORT] = Uint16Array;
  tt[INT] = Int32Array;
  tt[UNSIGNED_INT] = Uint32Array;
  tt[FLOAT] = Float32Array;
  tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
  tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
  tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
  tt[HALF_FLOAT] = Uint16Array;
  tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
  tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
  tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
  tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
  tt[UNSIGNED_INT_24_8] = Uint32Array;
}
/**
 * Get the GL type for a typedArray
 * @param {ArrayBuffer|ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */

function getGLTypeForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArray instanceof Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArray instanceof Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw "unsupported typed array type";
}
/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferViewType} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */


function getGLTypeForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArrayType === Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArrayType === Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArrayType === Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArrayType === Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw "unsupported typed array type";
}
/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */


function getTypedArrayTypeForGLType(type) {
  var CTOR = glTypeToTypedArray[type];

  if (!CTOR) {
    throw "unknown gl type";
  }

  return CTOR;
}

var isArrayBuffer = _globalObject.default.SharedArrayBuffer ? function isArrayBufferOrSharedArrayBuffer(a) {
  return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof _globalObject.default.SharedArrayBuffer);
} : function isArrayBuffer(a) {
  return a && a.buffer && a.buffer instanceof ArrayBuffer;
};
exports.isArrayBuffer = isArrayBuffer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var global = typeof global !== 'undefined' // eslint-disable-line
? global // eslint-disable-line
: typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
exports.default = global;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.add = add;
exports.copy = copy;
exports.create = create;
exports.cross = cross;
exports.distance = distance;
exports.distanceSq = distanceSq;
exports.divide = divide;
exports.divScalar = divScalar;
exports.dot = dot;
exports.lerp = lerp;
exports.length = length;
exports.lengthSq = lengthSq;
exports.mulScalar = mulScalar;
exports.multiply = multiply;
exports.negate = negate;
exports.normalize = normalize;
exports.setDefaultType = setDefaultType;
exports.subtract = subtract;

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v3 = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */
var VecType = Float32Array;
/**
 * A JavaScript array with 3 values or a Float32Array with 3 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/v3.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Vec3
 * @memberOf module:twgl/v3
 */

/**
 * Sets the type this library creates for a Vec3
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Vec3
 */

function setDefaultType(ctor) {
  var oldType = VecType;
  VecType = ctor;
  return oldType;
}
/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @return {Vec3} the created vector
 * @memberOf module:twgl/v3
 */


function create(x, y, z) {
  var dst = new VecType(3);

  if (x) {
    dst[0] = x;
  }

  if (y) {
    dst[1] = y;
  }

  if (z) {
    dst[2] = z;
  }

  return dst;
}
/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */


function add(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];
  dst[2] = a[2] + b[2];
  return dst;
}
/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */


function subtract(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];
  dst[2] = a[2] - b[2];
  return dst;
}
/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * (1 - t) * a + t * b.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {number} t Interpolation coefficient.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */


function lerp(a, b, t, dst) {
  dst = dst || new VecType(3);
  dst[0] = (1 - t) * a[0] + t * b[0];
  dst[1] = (1 - t) * a[1] + t * b[1];
  dst[2] = (1 - t) * a[2] + t * b[2];
  return dst;
}
/**
 * Mutiplies a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} dst.
 * @memberOf module:twgl/v3
 */


function mulScalar(v, k, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0] * k;
  dst[1] = v[1] * k;
  dst[2] = v[2] * k;
  return dst;
}
/**
 * Divides a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} dst.
 * @memberOf module:twgl/v3
 */


function divScalar(v, k, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0] / k;
  dst[1] = v[1] / k;
  dst[2] = v[2] / k;
  return dst;
}
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector a cross b.
 * @memberOf module:twgl/v3
 */


function cross(a, b, dst) {
  dst = dst || new VecType(3);
  var t1 = a[2] * b[0] - a[0] * b[2];
  var t2 = a[0] * b[1] - a[1] * b[0];
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = t1;
  dst[2] = t2;
  return dst;
}
/**
 * Computes the dot product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @return {number} dot product
 * @memberOf module:twgl/v3
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} length of vector.
 * @memberOf module:twgl/v3
 */


function length(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}
/**
 * Computes the square of the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} square of the length of vector.
 * @memberOf module:twgl/v3
 */


function lengthSq(v) {
  return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}
/**
 * Computes the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} distance between a and b
 * @memberOf module:twgl/v3
 */


function distance(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
/**
 * Computes the square of the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} square of the distance between a and b
 * @memberOf module:twgl/v3
 */


function distanceSq(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return dx * dx + dy * dy + dz * dz;
}
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */


function normalize(a, dst) {
  dst = dst || new VecType(3);
  var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
  var len = Math.sqrt(lenSq);

  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
    dst[2] = a[2] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
  }

  return dst;
}
/**
 * Negates a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} -v.
 * @memberOf module:twgl/v3
 */


function negate(v, dst) {
  dst = dst || new VecType(3);
  dst[0] = -v[0];
  dst[1] = -v[1];
  dst[2] = -v[2];
  return dst;
}
/**
 * Copies a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} A copy of v.
 * @memberOf module:twgl/v3
 */


function copy(v, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0];
  dst[1] = v[1];
  dst[2] = v[2];
  return dst;
}
/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function multiply(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];
  dst[2] = a[2] * b[2];
  return dst;
}
/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function divide(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] / b[0];
  dst[1] = a[1] / b[1];
  dst[2] = a[2] / b[2];
  return dst;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isWebGL1 = isWebGL1;
exports.isWebGL2 = isWebGL2;
exports.glEnumToString = void 0;

/*
 * Copyright 2017, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 */
//function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}

/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */
function isWebGL2(gl) {
  // This is the correct check but it's slow
  //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGL2RenderingContext;
  return !!gl.texStorage2D;
}
/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */


function isWebGL1(gl) {
  // This is the correct check but it's slow
  // const version = getVersionAsNumber(gl);
  // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGLRenderingContext;
  return !gl.texStorage2D;
}
/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc`);
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext|Extension} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @memberOf module:twgl
 */


var glEnumToString = function () {
  var haveEnumsForType = {};
  var enums = {};

  function addEnums(gl) {
    var type = gl.constructor.name;

    if (!haveEnumsForType[type]) {
      for (var key in gl) {
        if (typeof gl[key] === 'number') {
          var existing = enums[gl[key]];
          enums[gl[key]] = existing ? "".concat(existing, " | ").concat(key) : key;
        }
      }

      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || "0x" + value.toString(16);
  };
}();

exports.glEnumToString = glEnumToString;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createAttributeSetters = createAttributeSetters;
exports.createProgram = createProgram;
exports.createProgramFromScripts = createProgramFromScripts;
exports.createProgramFromSources = createProgramFromSources;
exports.createProgramInfo = createProgramInfo;
exports.createProgramInfoFromProgram = createProgramInfoFromProgram;
exports.createUniformSetters = createUniformSetters;
exports.createUniformBlockSpecFromProgram = createUniformBlockSpecFromProgram;
exports.createUniformBlockInfoFromProgram = createUniformBlockInfoFromProgram;
exports.createUniformBlockInfo = createUniformBlockInfo;
exports.createTransformFeedback = createTransformFeedback;
exports.createTransformFeedbackInfo = createTransformFeedbackInfo;
exports.bindTransformFeedbackInfo = bindTransformFeedbackInfo;
exports.setAttributes = setAttributes;
exports.setBuffersAndAttributes = setBuffersAndAttributes;
exports.setUniforms = setUniforms;
exports.setUniformBlock = setUniformBlock;
exports.setBlockUniforms = setBlockUniforms;
exports.bindUniformBlock = bindUniformBlock;

var utils = _interopRequireWildcard(__webpack_require__(4));

var helper = _interopRequireWildcard(__webpack_require__(0));

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */
var error = helper.error;
var warn = helper.warn;
var getElementById = _globalObject.default && _globalObject.default.document && _globalObject.default.document.getElementById ? _globalObject.default.document.getElementById.bind(_globalObject.default.document) : function () {
  return null;
};
var FLOAT = 0x1406;
var FLOAT_VEC2 = 0x8B50;
var FLOAT_VEC3 = 0x8B51;
var FLOAT_VEC4 = 0x8B52;
var INT = 0x1404;
var INT_VEC2 = 0x8B53;
var INT_VEC3 = 0x8B54;
var INT_VEC4 = 0x8B55;
var BOOL = 0x8B56;
var BOOL_VEC2 = 0x8B57;
var BOOL_VEC3 = 0x8B58;
var BOOL_VEC4 = 0x8B59;
var FLOAT_MAT2 = 0x8B5A;
var FLOAT_MAT3 = 0x8B5B;
var FLOAT_MAT4 = 0x8B5C;
var SAMPLER_2D = 0x8B5E;
var SAMPLER_CUBE = 0x8B60;
var SAMPLER_3D = 0x8B5F;
var SAMPLER_2D_SHADOW = 0x8B62;
var FLOAT_MAT2x3 = 0x8B65;
var FLOAT_MAT2x4 = 0x8B66;
var FLOAT_MAT3x2 = 0x8B67;
var FLOAT_MAT3x4 = 0x8B68;
var FLOAT_MAT4x2 = 0x8B69;
var FLOAT_MAT4x3 = 0x8B6A;
var SAMPLER_2D_ARRAY = 0x8DC1;
var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
var SAMPLER_CUBE_SHADOW = 0x8DC5;
var UNSIGNED_INT = 0x1405;
var UNSIGNED_INT_VEC2 = 0x8DC6;
var UNSIGNED_INT_VEC3 = 0x8DC7;
var UNSIGNED_INT_VEC4 = 0x8DC8;
var INT_SAMPLER_2D = 0x8DCA;
var INT_SAMPLER_3D = 0x8DCB;
var INT_SAMPLER_CUBE = 0x8DCC;
var INT_SAMPLER_2D_ARRAY = 0x8DCF;
var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
var TEXTURE_2D = 0x0DE1;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_3D = 0x806F;
var TEXTURE_2D_ARRAY = 0x8C1A;
var typeMap = {};
/**
 * Returns the corresponding bind point for a given sampler type
 */

function getBindPointForSamplerType(gl, type) {
  return typeMap[type].bindPoint;
} // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)


function floatSetter(gl, location) {
  return function (v) {
    gl.uniform1f(location, v);
  };
}

function floatArraySetter(gl, location) {
  return function (v) {
    gl.uniform1fv(location, v);
  };
}

function floatVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2fv(location, v);
  };
}

function floatVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3fv(location, v);
  };
}

function floatVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4fv(location, v);
  };
}

function intSetter(gl, location) {
  return function (v) {
    gl.uniform1i(location, v);
  };
}

function intArraySetter(gl, location) {
  return function (v) {
    gl.uniform1iv(location, v);
  };
}

function intVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2iv(location, v);
  };
}

function intVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3iv(location, v);
  };
}

function intVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4iv(location, v);
  };
}

function uintSetter(gl, location) {
  return function (v) {
    gl.uniform1ui(location, v);
  };
}

function uintArraySetter(gl, location) {
  return function (v) {
    gl.uniform1uiv(location, v);
  };
}

function uintVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2uiv(location, v);
  };
}

function uintVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3uiv(location, v);
  };
}

function uintVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4uiv(location, v);
  };
}

function floatMat2Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2fv(location, false, v);
  };
}

function floatMat3Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3fv(location, false, v);
  };
}

function floatMat4Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4fv(location, false, v);
  };
}

function floatMat23Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x3fv(location, false, v);
  };
}

function floatMat32Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x2fv(location, false, v);
  };
}

function floatMat24Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x4fv(location, false, v);
  };
}

function floatMat42Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x2fv(location, false, v);
  };
}

function floatMat34Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x4fv(location, false, v);
  };
}

function floatMat43Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x3fv(location, false, v);
  };
}

function samplerSetter(gl, type, unit, location) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  return utils.isWebGL2(gl) ? function (textureOrPair) {
    var texture;
    var sampler;

    if (helper.isTexture(gl, textureOrPair)) {
      texture = textureOrPair;
      sampler = null;
    } else {
      texture = textureOrPair.texture;
      sampler = textureOrPair.sampler;
    }

    gl.uniform1i(location, unit);
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
    gl.bindSampler(unit, sampler);
  } : function (texture) {
    gl.uniform1i(location, unit);
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
  };
}

function samplerArraySetter(gl, type, unit, location, size) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  var units = new Int32Array(size);

  for (var ii = 0; ii < size; ++ii) {
    units[ii] = unit + ii;
  }

  return utils.isWebGL2(gl) ? function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (textureOrPair, index) {
      gl.activeTexture(gl.TEXTURE0 + units[index]);
      var texture;
      var sampler;

      if (helper.isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }

      gl.bindSampler(unit, sampler);
      gl.bindTexture(bindPoint, texture);
    });
  } : function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (texture, index) {
      gl.activeTexture(gl.TEXTURE0 + units[index]);
      gl.bindTexture(bindPoint, texture);
    });
  };
}

typeMap[FLOAT] = {
  Type: Float32Array,
  size: 4,
  setter: floatSetter,
  arraySetter: floatArraySetter
};
typeMap[FLOAT_VEC2] = {
  Type: Float32Array,
  size: 8,
  setter: floatVec2Setter
};
typeMap[FLOAT_VEC3] = {
  Type: Float32Array,
  size: 12,
  setter: floatVec3Setter
};
typeMap[FLOAT_VEC4] = {
  Type: Float32Array,
  size: 16,
  setter: floatVec4Setter
};
typeMap[INT] = {
  Type: Int32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[INT_VEC2] = {
  Type: Int32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[INT_VEC3] = {
  Type: Int32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[INT_VEC4] = {
  Type: Int32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[UNSIGNED_INT] = {
  Type: Uint32Array,
  size: 4,
  setter: uintSetter,
  arraySetter: uintArraySetter
};
typeMap[UNSIGNED_INT_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: uintVec2Setter
};
typeMap[UNSIGNED_INT_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: uintVec3Setter
};
typeMap[UNSIGNED_INT_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: uintVec4Setter
};
typeMap[BOOL] = {
  Type: Uint32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[BOOL_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[BOOL_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[BOOL_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[FLOAT_MAT2] = {
  Type: Float32Array,
  size: 16,
  setter: floatMat2Setter
};
typeMap[FLOAT_MAT3] = {
  Type: Float32Array,
  size: 36,
  setter: floatMat3Setter
};
typeMap[FLOAT_MAT4] = {
  Type: Float32Array,
  size: 64,
  setter: floatMat4Setter
};
typeMap[FLOAT_MAT2x3] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat23Setter
};
typeMap[FLOAT_MAT2x4] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat24Setter
};
typeMap[FLOAT_MAT3x2] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat32Setter
};
typeMap[FLOAT_MAT3x4] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat34Setter
};
typeMap[FLOAT_MAT4x2] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat42Setter
};
typeMap[FLOAT_MAT4x3] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat43Setter
};
typeMap[SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[SAMPLER_2D_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[SAMPLER_2D_ARRAY_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[SAMPLER_CUBE_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[UNSIGNED_INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[UNSIGNED_INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};

function floatAttribSetter(gl, index) {
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);

    if (b.divisor !== undefined) {
      gl.vertexAttribDivisor(index, b.divisor);
    }
  };
}

function intAttribSetter(gl, index) {
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || gl.INT, b.stride || 0, b.offset || 0);

    if (b.divisor !== undefined) {
      gl.vertexAttribDivisor(index, b.divisor);
    }
  };
}

function matAttribSetter(gl, index, typeInfo) {
  var defaultSize = typeInfo.size;
  var count = typeInfo.count;
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    var numComponents = b.size || b.numComponents || defaultSize;
    var size = numComponents / count;
    var type = b.type || gl.FLOAT;
    var typeInfo = typeMap[type];
    var stride = typeInfo.size * numComponents;
    var normalize = b.normalize || false;
    var offset = b.offset || 0;
    var rowOffset = stride / count;

    for (var i = 0; i < count; ++i) {
      gl.enableVertexAttribArray(index + i);
      gl.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index + i, b.divisor);
      }
    }
  };
}

var attrTypeMap = {};
attrTypeMap[FLOAT] = {
  size: 4,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC2] = {
  size: 8,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC3] = {
  size: 12,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC4] = {
  size: 16,
  setter: floatAttribSetter
};
attrTypeMap[INT] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[BOOL] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[FLOAT_MAT2] = {
  size: 4,
  setter: matAttribSetter,
  count: 2
};
attrTypeMap[FLOAT_MAT3] = {
  size: 9,
  setter: matAttribSetter,
  count: 3
};
attrTypeMap[FLOAT_MAT4] = {
  size: 16,
  setter: matAttribSetter,
  count: 4
}; // make sure we don't see a global gl

var gl = undefined; // eslint-disable-line

/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */

function addLineNumbers(src, lineOffset) {
  lineOffset = lineOffset || 0;
  ++lineOffset;
  return src.split("\n").map(function (line, ndx) {
    return ndx + lineOffset + ": " + line;
  }).join("\n");
}

var spaceRE = /^[ \t]*\n/;
/**
 * Loads a shader.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
 * @return {WebGLShader} The created shader.
 */

function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
  var errFn = opt_errorCallback || error; // Create the shader object

  var shader = gl.createShader(shaderType); // Remove the first end of line because WebGL 2.0 requires
  // #version 300 es
  // as the first line. No whitespace allowed before that line
  // so
  //
  // <script>
  // #version 300 es
  // </script>
  //
  // Has one line before it which is invalid according to GLSL ES 3.00
  //

  var lineOffset = 0;

  if (spaceRE.test(shaderSource)) {
    lineOffset = 1;
    shaderSource = shaderSource.replace(spaceRE, '');
  } // Load the shader source


  gl.shaderSource(shader, shaderSource); // Compile the shader

  gl.compileShader(shader); // Check the compile status

  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader);
    errFn(addLineNumbers(shaderSource, lineOffset) + "\n*** Error compiling shader: " + lastError);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>} [attribLocations] a attribute name to location map
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @memberOf module:twgl
 */

/**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments pased on
 */


function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
  var transformFeedbackVaryings;

  if (typeof opt_locations === 'function') {
    opt_errorCallback = opt_locations;
    opt_locations = undefined;
  }

  if (typeof opt_attribs === 'function') {
    opt_errorCallback = opt_attribs;
    opt_attribs = undefined;
  } else if (opt_attribs && !Array.isArray(opt_attribs)) {
    // If we have an errorCallback we can just return this object
    // Otherwise we need to construct one with default errorCallback
    if (opt_attribs.errorCallback) {
      return opt_attribs;
    }

    var opt = opt_attribs;
    opt_errorCallback = opt.errorCallback;
    opt_attribs = opt.attribLocations;
    transformFeedbackVaryings = opt.transformFeedbackVaryings;
  }

  var options = {
    errorCallback: opt_errorCallback || error,
    transformFeedbackVaryings: transformFeedbackVaryings
  };

  if (opt_attribs) {
    var attribLocations = {};

    if (Array.isArray(opt_attribs)) {
      opt_attribs.forEach(function (attrib, ndx) {
        attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
      });
    } else {
      attribLocations = opt_attribs;
    }

    options.attribLocations = attribLocations;
  }

  return options;
}

var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

function getShaderTypeFromScriptType(scriptType) {
  if (scriptType.indexOf("frag") >= 0) {
    return gl.FRAGMENT_SHADER;
  } else if (scriptType.indexOf("vert") >= 0) {
    return gl.VERTEX_SHADER;
  }

  return undefined;
}

function deleteShaders(gl, shaders) {
  shaders.forEach(function (shader) {
    gl.deleteShader(shader);
  });
}
/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program and calls useProgram.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var realShaders = [];
  var newShaders = [];

  for (var ndx = 0; ndx < shaders.length; ++ndx) {
    var shader = shaders[ndx];

    if (typeof shader === 'string') {
      var elem = getElementById(shader);
      var src = elem ? elem.text : shader;
      var type = gl[defaultShaderType[ndx]];

      if (elem && elem.type) {
        type = getShaderTypeFromScriptType(elem.type) || type;
      }

      shader = loadShader(gl, src, type, progOptions.errorCallback);
      newShaders.push(shader);
    }

    if (helper.isShader(gl, shader)) {
      realShaders.push(shader);
    }
  }

  if (realShaders.length !== shaders.length) {
    progOptions.errorCallback("not enough shaders for program");
    deleteShaders(gl, newShaders);
    return null;
  }

  var program = gl.createProgram();
  realShaders.forEach(function (shader) {
    gl.attachShader(program, shader);
  });

  if (progOptions.attribLocations) {
    Object.keys(progOptions.attribLocations).forEach(function (attrib) {
      gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
    });
  }

  var varyings = progOptions.transformFeedbackVaryings;

  if (varyings) {
    if (varyings.attribs) {
      varyings = varyings.attribs;
    }

    if (!Array.isArray(varyings)) {
      varyings = Object.keys(varyings);
    }

    gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || gl.SEPARATE_ATTRIBS);
  }

  gl.linkProgram(program); // Check the link status

  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
    // something went wrong with the link
    var lastError = gl.getProgramInfoLog(program);
    progOptions.errorCallback("Error in program linking:" + lastError);
    gl.deleteProgram(program);
    deleteShaders(gl, newShaders);
    return null;
  }

  return program;
}
/**
 * Loads a shader from a script tag.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} scriptId The id of the script tag.
 * @param {number} [opt_shaderType] The type of shader. If not passed in it will
 *     be derived from the type of the script tag.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors.
 * @return {WebGLShader?} The created shader or null if error.
 */


function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
  var shaderSource = "";
  var shaderScript = getElementById(scriptId);

  if (!shaderScript) {
    throw "*** Error: unknown script element" + scriptId;
  }

  shaderSource = shaderScript.text;
  var shaderType = opt_shaderType || getShaderTypeFromScriptType(shaderScript.type);

  if (!shaderType) {
    throw "*** Error: unknown shader type";
  }

  return loadShader(gl, shaderSource, shaderType, opt_errorCallback);
}
/**
 * Creates a program from 2 script tags.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderScriptIds Array of ids of the script
 *        tags for the shaders. The first is assumed to be the
 *        vertex shader, the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:twgl/programs
 */


function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
    var shader = createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:twgl/programs
 */


function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderSources.length; ++ii) {
    var shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 */


function isBuiltIn(info) {
  var name = info.name;
  return name.startsWith("gl_") || name.startsWith("webgl_");
}
/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */


function createUniformSetters(gl, program) {
  var textureUnit = 0;
  /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */

  function createUniformSetter(program, uniformInfo) {
    var location = gl.getUniformLocation(program, uniformInfo.name);
    var isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";
    var type = uniformInfo.type;
    var typeInfo = typeMap[type];

    if (!typeInfo) {
      throw "unknown type: 0x" + type.toString(16); // we should never get here.
    }

    var setter;

    if (typeInfo.bindPoint) {
      // it's a sampler
      var unit = textureUnit;
      textureUnit += uniformInfo.size;

      if (isArray) {
        setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
      } else {
        setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
      }
    } else {
      if (typeInfo.arraySetter && isArray) {
        setter = typeInfo.arraySetter(gl, location);
      } else {
        setter = typeInfo.setter(gl, location);
      }
    }

    setter.location = location;
    return setter;
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

  for (var ii = 0; ii < numUniforms; ++ii) {
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      continue;
    }

    var name = uniformInfo.name; // remove the array suffix.

    if (name.substr(-3) === "[0]") {
      name = name.substr(0, name.length - 3);
    }

    var setter = createUniformSetter(program, uniformInfo);
    uniformSetters[name] = setter;
  }

  return uniformSetters;
}
/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */

/**
 * Create TransformFeedbackInfo for passing to bind/unbindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */


function createTransformFeedbackInfo(gl, program) {
  var info = {};
  var numVaryings = gl.getProgramParameter(program, gl.TRANSFORM_FEEDBACK_VARYINGS);

  for (var ii = 0; ii < numVaryings; ++ii) {
    var varying = gl.getTransformFeedbackVarying(program, ii);
    info[varying.name] = {
      index: ii,
      type: varying.type,
      size: varying.size
    };
  }

  return info;
}
/**
 * Binds buffers for transform feedback.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @memberOf module:twgl
 */


function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }

  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }

  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];

    if (varying) {
      var buf = bufferInfo[name];

      if (buf.offset) {
        gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
      } else {
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
      }
    }
  }
}
/**
 * Unbinds buffers afetr transform feedback.
 *
 * Buffers can not be bound to 2 bind points so if you try to bind a buffer used
 * in a transform feedback as an ARRAY_BUFFER for an attribute it will fail.
 *
 * This function unbinds all buffers that were bound with {@link module:twgl.bindTransformFeedbackInfo}.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 */


function unbindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }

  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }

  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];

    if (varying) {
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, null);
    }
  }
}
/**
 * Creates a transform feedback and sets the buffers
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @return {WebGLTransformFeedback} the created transform feedback
 * @memberOf module:twgl
 */


function createTransformFeedback(gl, programInfo, bufferInfo) {
  var tf = gl.createTransformFeedback();
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
  gl.useProgram(programInfo.program);
  bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null); // This is only needed because of a bug in Chrome 56. Will remove
  // when chrome fixes it.

  unbindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  return tf;
}
/**
 * @typedef {Object} UniformData
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */

/**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanitory
 * @property {bool} usedByFragmentShader Self explanitory
 * @property {bool} used Self explanitory
 * @memberOf module:twgl
 */

/**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */

/**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */


function createUniformBlockSpecFromProgram(gl, program) {
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  var uniformData = [];
  var uniformIndices = [];

  for (var ii = 0; ii < numUniforms; ++ii) {
    uniformIndices.push(ii);
    uniformData.push({});
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      break;
    } // REMOVE [0]?


    uniformData[ii].name = uniformInfo.name;
  }

  [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], // num elements
  ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (pair) {
    var pname = pair[0];
    var key = pair[1];
    gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function (value, ndx) {
      uniformData[ndx][key] = value;
    });
  });
  var blockSpecs = {};
  var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);

  for (var _ii = 0; _ii < numUniformBlocks; ++_ii) {
    var name = gl.getActiveUniformBlockName(program, _ii);
    var blockSpec = {
      index: _ii,
      usedByVertexShader: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
      usedByFragmentShader: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
      size: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_DATA_SIZE),
      uniformIndices: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
    };
    blockSpec.used = blockSpec.usedByVertexSahder || blockSpec.usedByFragmentShader;
    blockSpecs[name] = blockSpec;
  }

  return {
    blockSpecs: blockSpecs,
    uniformData: uniformData
  };
}

var arraySuffixRE = /\[\d+\]\.$/; // better way to check?

/**
 * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
 * and a corresponding WebGLBuffer to hold those values on the GPU
 *
 * @typedef {Object} UniformBlockInfo
 * @property {string} name The name of the block
 * @property {ArrayBuffer} array The array buffer that contains the uniform values
 * @property {Float32Array} asFloat A float view on the array buffer. This is useful
 *    inspecting the contents of the buffer in the debugger.
 * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
 * @property {number} [offset] offset into buffer
 * @property {Object.<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
 *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
 *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
 *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
 *   `Int32Array` view, etc.
 * @memberOf module:twgl
 */

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {WebGLProgram} program A WebGLProgram
 * @param {module:twgl.UniformBlockSpec} uinformBlockSpec. A UniformBlockSpec as returned
 *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */

function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
  var blockSpecs = uniformBlockSpec.blockSpecs;
  var uniformData = uniformBlockSpec.uniformData;
  var blockSpec = blockSpecs[blockName];

  if (!blockSpec) {
    warn("no uniform block object named:", blockName);
    return {
      name: blockName,
      uniforms: {}
    };
  }

  var array = new ArrayBuffer(blockSpec.size);
  var buffer = gl.createBuffer();
  var uniformBufferIndex = blockSpec.index;
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);
  var prefix = blockName + ".";

  if (arraySuffixRE.test(prefix)) {
    prefix = prefix.replace(arraySuffixRE, ".");
  }

  var uniforms = {};
  blockSpec.uniformIndices.forEach(function (uniformNdx) {
    var data = uniformData[uniformNdx];
    var typeInfo = typeMap[data.type];
    var Type = typeInfo.Type;
    var length = data.size * typeInfo.size;
    var name = data.name;

    if (name.substr(0, prefix.length) === prefix) {
      name = name.substr(prefix.length);
    }

    uniforms[name] = new Type(array, data.offset, length / Type.BYTES_PER_ELEMENT);
  });
  return {
    name: blockName,
    array: array,
    asFloat: new Float32Array(array),
    // for debugging
    buffer: buffer,
    uniforms: uniforms
  };
}
/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo}
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */


function createUniformBlockInfo(gl, programInfo, blockName) {
  return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
}
/**
 * Binds a unform block to the matching uniform block point.
 * Matches by blocks by name so blocks must have the same name not just the same
 * structure.
 *
 * If you have changed any values and you upload the valus into the corresponding WebGLBuffer
 * call {@link module:twgl.setUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
 *     no buffer is bound.
 * @memberOf module:twgl/programs
 */


function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
  var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
  var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];

  if (blockSpec) {
    var bufferBindIndex = blockSpec.index;
    gl.bindBufferRange(gl.UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
    return true;
  }

  return false;
}
/**
 * Uploads the current uniform values to the corresponding WebGLBuffer
 * and binds that buffer to the program's corresponding bind point for the uniform block object.
 *
 * If you haven't changed any values and you only need to bind the uniform block object
 * call {@link module:twgl.bindUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @memberOf module:twgl/programs
 */


function setUniformBlock(gl, programInfo, uniformBlockInfo) {
  if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
    gl.bufferData(gl.UNIFORM_BUFFER, uniformBlockInfo.array, gl.DYNAMIC_DRAW);
  }
}
/**
 * Sets values of a uniform block object
 *
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
 * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
 *    type of uniform. So for example given a block like
 *
 *       uniform SomeBlock {
 *         float someFloat;
 *         vec2 someVec2;
 *         vec3 someVec3Array[2];
 *         int someInt;
 *       }
 *
 *  You can set the values of the uniform block with
 *
 *       twgl.setBlockUniforms(someBlockInfo, {
 *          someFloat: 12.3,
 *          someVec2: [1, 2],
 *          someVec3Array: [1, 2, 3, 4, 5, 6],
 *          someInt: 5,
 *       }
 *
 *  Arrays can be JavaScript arrays or typed arrays
 *
 *  Any name that doesn't match will be ignored
 * @memberOf module:twgl/programs
 */


function setBlockUniforms(uniformBlockInfo, values) {
  var uniforms = uniformBlockInfo.uniforms;

  for (var name in values) {
    var array = uniforms[name];

    if (array) {
      var value = values[name];

      if (value.length) {
        array.set(value);
      } else {
        array[0] = value;
      }
    }
  }
}
/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     var texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 * @memberOf module:twgl/programs
 */


function setUniforms(setters, values) {
  // eslint-disable-line
  var actualSetters = setters.uniformSetters || setters;
  var numArgs = arguments.length;

  for (var andx = 1; andx < numArgs; ++andx) {
    var vals = arguments[andx];

    if (Array.isArray(vals)) {
      var numValues = vals.length;

      for (var ii = 0; ii < numValues; ++ii) {
        setUniforms(actualSetters, vals[ii]);
      }
    } else {
      for (var name in vals) {
        var setter = actualSetters[name];

        if (setter) {
          setter(vals[name]);
        }
      }
    }
  }
}
/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */


function createAttributeSetters(gl, program) {
  var attribSetters = {};
  var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

  for (var ii = 0; ii < numAttribs; ++ii) {
    var attribInfo = gl.getActiveAttrib(program, ii);

    if (isBuiltIn(attribInfo)) {
      continue;
    }

    var index = gl.getAttribLocation(program, attribInfo.name);
    var typeInfo = attrTypeMap[attribInfo.type];
    var setter = typeInfo.setter(gl, index, typeInfo);
    setter.location = index;
    attribSetters[attribInfo.name] = setter;
  }

  return attribSetters;
}
/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 */


function setAttributes(setters, buffers) {
  for (var name in buffers) {
    var setter = setters[name];

    if (setter) {
      setter(buffers[name]);
    }
  }
}
/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivilent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgrmaInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.vertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */


function setBuffersAndAttributes(gl, programInfo, buffers) {
  if (buffers.vertexArrayObject) {
    gl.bindVertexArray(buffers.vertexArrayObject);
  } else {
    setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);

    if (buffers.indices) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
  }
}
/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @propetty {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */

/**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */


function createProgramInfoFromProgram(gl, program) {
  var uniformSetters = createUniformSetters(gl, program);
  var attribSetters = createAttributeSetters(gl, program);
  var programInfo = {
    program: program,
    uniformSetters: uniformSetters,
    attribSetters: attribSetters
  };

  if (utils.isWebGL2(gl)) {
    programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
    programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
  }

  return programInfo;
}
/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the attributes. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */


function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var good = true;
  shaderSources = shaderSources.map(function (source) {
    // Lets assume if there is no \n it's an id
    if (source.indexOf("\n") < 0) {
      var script = getElementById(source);

      if (!script) {
        progOptions.errorCallback("no element with id: " + source);
        good = false;
      } else {
        source = script.text;
      }
    }

    return source;
  });

  if (!good) {
    return null;
  }

  var program = createProgramFromSources(gl, shaderSources, progOptions);

  if (!program) {
    return null;
  }

  return createProgramInfoFromProgram(gl, program);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.axisRotate = axisRotate;
exports.axisRotation = axisRotation;
exports.copy = copy;
exports.frustum = frustum;
exports.getAxis = getAxis;
exports.getTranslation = getTranslation;
exports.identity = identity;
exports.inverse = inverse;
exports.lookAt = lookAt;
exports.multiply = multiply;
exports.negate = negate;
exports.ortho = ortho;
exports.perspective = perspective;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotationX = rotationX;
exports.rotationY = rotationY;
exports.rotationZ = rotationZ;
exports.scale = scale;
exports.scaling = scaling;
exports.setAxis = setAxis;
exports.setDefaultType = setDefaultType;
exports.setTranslation = setTranslation;
exports.transformDirection = transformDirection;
exports.transformNormal = transformNormal;
exports.transformPoint = transformPoint;
exports.translate = translate;
exports.translation = translation;
exports.transpose = transpose;

var v3 = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */
var MatType = Float32Array;
var tempV3a = v3.create();
var tempV3b = v3.create();
var tempV3c = v3.create();
/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */

/**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 */

function setDefaultType(ctor) {
  var oldType = MatType;
  MatType = ctor;
  return oldType;
}
/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */


function negate(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = -m[0];
  dst[1] = -m[1];
  dst[2] = -m[2];
  dst[3] = -m[3];
  dst[4] = -m[4];
  dst[5] = -m[5];
  dst[6] = -m[6];
  dst[7] = -m[7];
  dst[8] = -m[8];
  dst[9] = -m[9];
  dst[10] = -m[10];
  dst[11] = -m[11];
  dst[12] = -m[12];
  dst[13] = -m[13];
  dst[14] = -m[14];
  dst[15] = -m[15];
  return dst;
}
/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */


function copy(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = m[0];
  dst[1] = m[1];
  dst[2] = m[2];
  dst[3] = m[3];
  dst[4] = m[4];
  dst[5] = m[5];
  dst[6] = m[6];
  dst[7] = m[7];
  dst[8] = m[8];
  dst[9] = m[9];
  dst[10] = m[10];
  dst[11] = m[11];
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[15] = m[15];
  return dst;
}
/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */


function identity(dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */


function transpose(m, dst) {
  dst = dst || new MatType(16);

  if (dst === m) {
    var t;
    t = m[1];
    m[1] = m[4];
    m[4] = t;
    t = m[2];
    m[2] = m[8];
    m[8] = t;
    t = m[3];
    m[3] = m[12];
    m[12] = t;
    t = m[6];
    m[6] = m[9];
    m[9] = t;
    t = m[7];
    m[7] = m[13];
    m[13] = t;
    t = m[11];
    m[11] = m[14];
    m[14] = t;
    return dst;
  }

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  dst[0] = m00;
  dst[1] = m10;
  dst[2] = m20;
  dst[3] = m30;
  dst[4] = m01;
  dst[5] = m11;
  dst[6] = m21;
  dst[7] = m31;
  dst[8] = m02;
  dst[9] = m12;
  dst[10] = m22;
  dst[11] = m32;
  dst[12] = m03;
  dst[13] = m13;
  dst[14] = m23;
  dst[15] = m33;
  return dst;
}
/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */


function inverse(m, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  var tmp_0 = m22 * m33;
  var tmp_1 = m32 * m23;
  var tmp_2 = m12 * m33;
  var tmp_3 = m32 * m13;
  var tmp_4 = m12 * m23;
  var tmp_5 = m22 * m13;
  var tmp_6 = m02 * m33;
  var tmp_7 = m32 * m03;
  var tmp_8 = m02 * m23;
  var tmp_9 = m22 * m03;
  var tmp_10 = m02 * m13;
  var tmp_11 = m12 * m03;
  var tmp_12 = m20 * m31;
  var tmp_13 = m30 * m21;
  var tmp_14 = m10 * m31;
  var tmp_15 = m30 * m11;
  var tmp_16 = m10 * m21;
  var tmp_17 = m20 * m11;
  var tmp_18 = m00 * m31;
  var tmp_19 = m30 * m01;
  var tmp_20 = m00 * m21;
  var tmp_21 = m20 * m01;
  var tmp_22 = m00 * m11;
  var tmp_23 = m10 * m01;
  var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
  var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
  dst[0] = d * t0;
  dst[1] = d * t1;
  dst[2] = d * t2;
  dst[3] = d * t3;
  dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
  return dst;
}
/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */


function multiply(a, b, dst) {
  dst = dst || new MatType(16);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4 + 0];
  var a11 = a[4 + 1];
  var a12 = a[4 + 2];
  var a13 = a[4 + 3];
  var a20 = a[8 + 0];
  var a21 = a[8 + 1];
  var a22 = a[8 + 2];
  var a23 = a[8 + 3];
  var a30 = a[12 + 0];
  var a31 = a[12 + 1];
  var a32 = a[12 + 2];
  var a33 = a[12 + 3];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b03 = b[3];
  var b10 = b[4 + 0];
  var b11 = b[4 + 1];
  var b12 = b[4 + 2];
  var b13 = b[4 + 3];
  var b20 = b[8 + 0];
  var b21 = b[8 + 1];
  var b22 = b[8 + 2];
  var b23 = b[8 + 3];
  var b30 = b[12 + 0];
  var b31 = b[12 + 1];
  var b32 = b[12 + 2];
  var b33 = b[12 + 3];
  dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
  dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
  dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
  dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
  dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
  dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
  dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
  dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
  dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
  dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
  dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
  dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
  dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
  dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
  dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
  dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
  return dst;
}
/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} a once modified.
 * @memberOf module:twgl/m4
 */


function setTranslation(a, v, dst) {
  dst = dst || identity();

  if (a !== dst) {
    dst[0] = a[0];
    dst[1] = a[1];
    dst[2] = a[2];
    dst[3] = a[3];
    dst[4] = a[4];
    dst[5] = a[5];
    dst[6] = a[6];
    dst[7] = a[7];
    dst[8] = a[8];
    dst[9] = a[9];
    dst[10] = a[10];
    dst[11] = a[11];
  }

  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} [dst] vector..
 * @return {Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */


function getTranslation(m, dst) {
  dst = dst || v3.create();
  dst[0] = m[12];
  dst[1] = m[13];
  dst[2] = m[14];
  return dst;
}
/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {Vec3} [dst] vector.
 * @return {Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */


function getAxis(m, axis, dst) {
  dst = dst || v3.create();
  var off = axis * 4;
  dst[0] = m[off + 0];
  dst[1] = m[off + 1];
  dst[2] = m[off + 2];
  return dst;
}
/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If none a new one is created
 * @return {module:twgl/m4.Mat4} dst
 * @memberOf module:twgl/m4
 */


function setAxis(a, v, axis, dst) {
  if (dst !== a) {
    dst = copy(a, dst);
  }

  var off = axis * 4;
  dst[off + 0] = v[0];
  dst[off + 1] = v[1];
  dst[off + 2] = v[2];
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new MatType(16);
  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  var rangeInv = 1.0 / (zNear - zFar);
  dst[0] = f / aspect;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = f;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;
  return dst;
}
/**
 * Computes a 4-by-4 othogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function ortho(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  dst[0] = 2 / (right - left);
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 / (top - bottom);
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 2 / (near - far);
  dst[11] = 0;
  dst[12] = (right + left) / (left - right);
  dst[13] = (top + bottom) / (bottom - top);
  dst[14] = (far + near) / (near - far);
  dst[15] = 1;
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */


function frustum(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  var dx = right - left;
  var dy = top - bottom;
  var dz = near - far;
  dst[0] = 2 * near / dx;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 * near / dy;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = (left + right) / dx;
  dst[9] = (top + bottom) / dy;
  dst[10] = far / dz;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = near * far / dz;
  dst[15] = 0;
  return dst;
}
/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {Vec3} eye The position of the eye.
 * @param {Vec3} target The position meant to be viewed.
 * @param {Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */


function lookAt(eye, target, up, dst) {
  dst = dst || new MatType(16);
  var xAxis = tempV3a;
  var yAxis = tempV3b;
  var zAxis = tempV3c;
  v3.normalize(v3.subtract(eye, target, zAxis), zAxis);
  v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
  v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);
  dst[0] = xAxis[0];
  dst[1] = xAxis[1];
  dst[2] = xAxis[2];
  dst[3] = 0;
  dst[4] = yAxis[0];
  dst[5] = yAxis[1];
  dst[6] = yAxis[2];
  dst[7] = 0;
  dst[8] = zAxis[0];
  dst[9] = zAxis[1];
  dst[10] = zAxis[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */


function translation(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by translation by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function translate(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];

  if (m !== dst) {
    dst[0] = m00;
    dst[1] = m01;
    dst[2] = m02;
    dst[3] = m03;
    dst[4] = m10;
    dst[5] = m11;
    dst[6] = m12;
    dst[7] = m13;
    dst[8] = m20;
    dst[9] = m21;
    dst[10] = m22;
    dst[11] = m23;
  }

  dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
  dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
  dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
  dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationX(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = c;
  dst[6] = s;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = -s;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by a rotation around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function rotateX(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[4] = c * m10 + s * m20;
  dst[5] = c * m11 + s * m21;
  dst[6] = c * m12 + s * m22;
  dst[7] = c * m13 + s * m23;
  dst[8] = c * m20 - s * m10;
  dst[9] = c * m21 - s * m11;
  dst[10] = c * m22 - s * m12;
  dst[11] = c * m23 - s * m13;

  if (m !== dst) {
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationY(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = 0;
  dst[2] = -s;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = s;
  dst[9] = 0;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by a rotation around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function rotateY(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 - s * m20;
  dst[1] = c * m01 - s * m21;
  dst[2] = c * m02 - s * m22;
  dst[3] = c * m03 - s * m23;
  dst[8] = c * m20 + s * m00;
  dst[9] = c * m21 + s * m01;
  dst[10] = c * m22 + s * m02;
  dst[11] = c * m23 + s * m03;

  if (m !== dst) {
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationZ(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = s;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = -s;
  dst[5] = c;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by a rotation around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function rotateZ(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 + s * m10;
  dst[1] = c * m01 + s * m11;
  dst[2] = c * m02 + s * m12;
  dst[3] = c * m03 + s * m13;
  dst[4] = c * m10 - s * m00;
  dst[5] = c * m11 - s * m01;
  dst[6] = c * m12 - s * m02;
  dst[7] = c * m13 - s * m03;

  if (m !== dst) {
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */


function axisRotation(axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  dst[0] = xx + (1 - xx) * c;
  dst[1] = x * y * oneMinusCosine + z * s;
  dst[2] = x * z * oneMinusCosine - y * s;
  dst[3] = 0;
  dst[4] = x * y * oneMinusCosine - z * s;
  dst[5] = yy + (1 - yy) * c;
  dst[6] = y * z * oneMinusCosine + x * s;
  dst[7] = 0;
  dst[8] = x * z * oneMinusCosine + y * s;
  dst[9] = y * z * oneMinusCosine - x * s;
  dst[10] = zz + (1 - zz) * c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by rotation around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function axisRotate(m, axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  var r00 = xx + (1 - xx) * c;
  var r01 = x * y * oneMinusCosine + z * s;
  var r02 = x * z * oneMinusCosine - y * s;
  var r10 = x * y * oneMinusCosine - z * s;
  var r11 = yy + (1 - yy) * c;
  var r12 = y * z * oneMinusCosine + x * s;
  var r20 = x * z * oneMinusCosine + y * s;
  var r21 = y * z * oneMinusCosine - x * s;
  var r22 = zz + (1 - zz) * c;
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
  dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
  dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
  dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
  dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
  dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
  dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
  dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
  dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
  dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
  dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
  dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */


function scaling(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = v[0];
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = v[1];
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = v[2];
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix, scaling in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function scale(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2];
  dst[3] = v0 * m[0 * 4 + 3];
  dst[4] = v1 * m[1 * 4 + 0];
  dst[5] = v1 * m[1 * 4 + 1];
  dst[6] = v1 * m[1 * 4 + 2];
  dst[7] = v1 * m[1 * 4 + 3];
  dst[8] = v2 * m[2 * 4 + 0];
  dst[9] = v2 * m[2 * 4 + 1];
  dst[10] = v2 * m[2 * 4 + 2];
  dst[11] = v2 * m[2 * 4 + 3];

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The point.
 * @param {Vec3} dst optional vec3 to store result
 * @return {Vec3} dst or new vec3 if not provided
 * @memberOf module:twgl/m4
 */


function transformPoint(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
  dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
  dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
  dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The direction.
 * @param {Vec3} dst optional Vec3 to store result
 * @return {Vec3} dst or new Vec3 if not provided
 * @memberOf module:twgl/m4
 */


function transformDirection(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
  return dst;
}
/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The normal.
 * @param {Vec3} [dst] The direction.
 * @return {Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */


function transformNormal(m, v, dst) {
  dst = dst || v3.create();
  var mi = inverse(m);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createAttribsFromArrays = createAttribsFromArrays;
exports.createBuffersFromArrays = createBuffersFromArrays;
exports.createBufferFromArray = createBufferFromArray;
exports.createBufferFromTypedArray = createBufferFromTypedArray;
exports.createBufferInfoFromArrays = createBufferInfoFromArrays;
exports.setAttribInfoBufferFromArray = setAttribInfoBufferFromArray;
exports.setAttributePrefix = setAttributePrefix;
exports.setAttributeDefaults_ = setDefaults;
exports.getNumComponents_ = getNumComponents;
exports.getArray_ = getArray;

var typedArrays = _interopRequireWildcard(__webpack_require__(1));

var helper = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level attribute and buffer related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/attributes
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var defaults = {
  attribPrefix: ""
};
/**
 * Sets the default attrib prefix
 *
 * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 * as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
 *
 * In otherwords I'll create arrays of geometry like this
 *
 *     var arrays = {
 *       position: ...
 *       normal: ...
 *       texcoord: ...
 *     };
 *
 * But need those mapped to attributes and my attributes start with `a_`.
 *
 * @deprecated see {@link module:twgl.setDefaults}
 * @param {string} prefix prefix for attribs
 * @memberOf module:twgl/attributes
 */

function setAttributePrefix(prefix) {
  defaults.attribPrefix = prefix;
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
}

function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
}
/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */


function createBufferFromTypedArray(gl, typedArray, type, drawType) {
  if (helper.isBuffer(gl, typedArray)) {
    return typedArray;
  }

  type = type || gl.ARRAY_BUFFER;
  var buffer = gl.createBuffer();
  setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
  return buffer;
}

function isIndices(name) {
  return name === "indices";
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
}

function getArray(array) {
  return array.length ? array : array.data;
}

var texcoordRE = /coord|texture/i;
var colorRE = /color|colour/i;

function guessNumComponentsFromName(name, length) {
  var numComponents;

  if (texcoordRE.test(name)) {
    numComponents = 2;
  } else if (colorRE.test(name)) {
    numComponents = 4;
  } else {
    numComponents = 3; // position, normals, indices ...
  }

  if (length % numComponents > 0) {
    throw "Can not guess numComponents for attribute '" + name + "'. Tried " + numComponents + " but " + length + " values is not evenly divisible by " + numComponents + ". You should specify it.";
  }

  return numComponents;
}

function getNumComponents(array, arrayName) {
  return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
}

function makeTypedArray(array, name) {
  if (typedArrays.isArrayBuffer(array)) {
    return array;
  }

  if (typedArrays.isArrayBuffer(array.data)) {
    return array.data;
  }

  if (Array.isArray(array)) {
    array = {
      data: array
    };
  }

  var Type = array.type;

  if (!Type) {
    if (isIndices(name)) {
      Type = Uint16Array;
    } else {
      Type = Float32Array;
    }
  }

  return new Type(array.data);
}
/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * Use this type of array spec when TWGL can't guess the type or number of compoments of an array
 * @typedef {Object} FullArraySpec
 * @property {(number|number[]|ArrayBufferView)} data The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {constructor} type The type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
 * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @memberOf module:twgl
 */

/**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */

/**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */

/**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */


function createAttribsFromArrays(gl, arrays) {
  var attribs = {};
  Object.keys(arrays).forEach(function (arrayName) {
    if (!isIndices(arrayName)) {
      var array = arrays[arrayName];
      var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
      var buffer;
      var type;
      var normalization;
      var numComponents;
      var numValues;

      if (typeof array === "number" || typeof array.data === "number") {
        numValues = array.data || array;
        var arrayType = array.type || Float32Array;
        var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
        type = typedArrays.getGLTypeForTypedArrayType(arrayType);
        normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
        numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, numBytes, array.drawType || gl.STATIC_DRAW);
      } else {
        var typedArray = makeTypedArray(array, arrayName);
        buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
        type = typedArrays.getGLTypeForTypedArray(typedArray);
        normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
        numComponents = getNumComponents(array, arrayName);
        numValues = typedArray.length;
      }

      attribs[attribName] = {
        buffer: buffer,
        numComponents: numComponents,
        type: type,
        normalize: normalization,
        stride: array.stride || 0,
        offset: array.offset || 0,
        divisor: array.divisor === undefined ? undefined : array.divisor,
        drawType: array.drawType
      };
    }
  });
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return attribs;
}
/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically upate the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably ineffient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */


function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
  array = makeTypedArray(array);

  if (offset !== undefined) {
    gl.bindBuffer(gl.ARRAY_BUFFER, attribInfo.buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, offset, array);
  } else {
    setBufferFromTypedArray(gl, gl.ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
  }
}

function getBytesPerValueForGLType(gl, type) {
  if (type === gl.BYTE) return 1; // eslint-disable-line

  if (type === gl.UNSIGNED_BYTE) return 1; // eslint-disable-line

  if (type === gl.SHORT) return 2; // eslint-disable-line

  if (type === gl.UNSIGNED_SHORT) return 2; // eslint-disable-line

  if (type === gl.INT) return 4; // eslint-disable-line

  if (type === gl.UNSIGNED_INT) return 4; // eslint-disable-line

  if (type === gl.FLOAT) return 4; // eslint-disable-line

  return 0;
}
/**
 * tries to get the number of elements from a set of arrays.
 */


var positionKeys = ['position', 'positions', 'a_position'];

function getNumElementsFromNonIndexedArrays(arrays) {
  var key;

  for (var _ii = 0; _ii < positionKeys.length; ++_ii) {
    key = positionKeys[_ii];

    if (key in arrays) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(arrays)[0];
  }

  var array = arrays[key];
  var length = getArray(array).length;
  var numComponents = getNumComponents(array, key);
  var numElements = length / numComponents;

  if (length % numComponents > 0) {
    throw "numComponents " + numComponents + " not correct for length " + length;
  }

  return numElements;
}

function getNumElementsFromAttributes(gl, attribs) {
  var key;
  var ii;

  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];

    if (key in attribs) {
      break;
    }

    key = defaults.attribPrefix + key;

    if (key in attribs) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(attribs)[0];
  }

  var attrib = attribs[key];
  gl.bindBuffer(gl.ARRAY_BUFFER, attrib.buffer);
  var numBytes = gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  var bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
  var totalElements = numBytes / bytesPerValue;
  var numComponents = attrib.numComponents || attrib.size; // TODO: check stride

  var numElements = totalElements / numComponents;

  if (numElements % 1 !== 0) {
    throw "numComponents " + numComponents + " not correct for length " + length;
  }

  return numElements;
}
/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs approriate to call `setAttributes`
 * @memberOf module:twgl
 */

/**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
 *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also by TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or augmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
 *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */


function createBufferInfoFromArrays(gl, arrays) {
  var bufferInfo = {
    attribs: createAttribsFromArrays(gl, arrays)
  };
  var indices = arrays.indices;

  if (indices) {
    var newIndices = makeTypedArray(indices, "indices");
    bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, gl.ELEMENT_ARRAY_BUFFER);
    bufferInfo.numElements = newIndices.length;
    bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(newIndices);
  } else {
    bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
  }

  return bufferInfo;
}
/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that constains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be dervied other wise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */


function createBufferFromArray(gl, array, arrayName) {
  var type = arrayName === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
  var typedArray = makeTypedArray(array, arrayName);
  return createBufferFromTypedArray(gl, typedArray, type);
}
/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */


function createBuffersFromArrays(gl, arrays) {
  var buffers = {};
  Object.keys(arrays).forEach(function (key) {
    buffers[key] = createBufferFromArray(gl, arrays[key], key);
  }); // Ugh!

  if (arrays.indices) {
    buffers.numElements = arrays.indices.length;
    buffers.elementType = typedArrays.getGLTypeForTypedArray(makeTypedArray(arrays.indices), 'indices');
  } else {
    buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
  }

  return buffers;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setTextureDefaults_ = setDefaults;
exports.createSampler = createSampler;
exports.createSamplers = createSamplers;
exports.setSamplerParameters = setSamplerParameters;
exports.createTexture = createTexture;
exports.setEmptyTexture = setEmptyTexture;
exports.setTextureFromArray = setTextureFromArray;
exports.loadTextureFromUrl = loadTextureFromUrl;
exports.setTextureFromElement = setTextureFromElement;
exports.setTextureFilteringForSize = setTextureFilteringForSize;
exports.setTextureParameters = setTextureParameters;
exports.setDefaultTextureColor = setDefaultTextureColor;
exports.createTextures = createTextures;
exports.resizeTexture = resizeTexture;
exports.getNumComponentsForFormat = getNumComponentsForFormat;
exports.getBytesPerElementForInternalFormat = getBytesPerElementForInternalFormat;

var utils = _interopRequireWildcard(__webpack_require__(4));

var typedArrays = _interopRequireWildcard(__webpack_require__(1));

var helper = _interopRequireWildcard(__webpack_require__(0));

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level texture related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.textures` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/textures
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var defaults = {
  textureColor: new Uint8Array([128, 192, 255, 255]),
  textureOptions: {},
  crossOrigin: undefined
};
var isArrayBuffer = typedArrays.isArrayBuffer; // Should we make this on demand?

var ctx = _globalObject.default.document && _globalObject.default.document.createElement ? _globalObject.default.document.createElement("canvas").getContext("2d") : null; // NOTE: Chrome supports 2D canvas in a Worker (behind flag as of v64 but
//       not only does Firefox NOT support it but Firefox freezes immediately
//       if you try to create one instead of just returning null and continuing.
//  : (global.OffscreenCanvas && (new global.OffscreenCanvas(1, 1)).getContext("2d"));  // OffscreenCanvas may not support 2d
// NOTE: We can maybe remove some of the need for the 2d canvas. In WebGL2
// we can use the various unpack settings. Otherwise we could try using
// the ability of an imagebitmap to be cut. Unfortunately cutting an imagebitmap
// is async and the current TWGL code expects a non-Async result though that
// might not be a problem. ImageBitmap though is not available in Edge or Safari
// as of 2018-01-02

/* PixelFormat */

var ALPHA = 0x1906;
var RGB = 0x1907;
var RGBA = 0x1908;
var LUMINANCE = 0x1909;
var LUMINANCE_ALPHA = 0x190A;
var DEPTH_COMPONENT = 0x1902;
var DEPTH_STENCIL = 0x84F9;
/* TextureWrapMode */

var REPEAT = 0x2901; // eslint-disable-line

var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

/* TextureMagFilter */

var NEAREST = 0x2600; // eslint-disable-line

/* TextureMinFilter */

var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line

var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line

var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line

var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

var R8 = 0x8229;
var R8_SNORM = 0x8F94;
var R16F = 0x822D;
var R32F = 0x822E;
var R8UI = 0x8232;
var R8I = 0x8231;
var RG16UI = 0x823A;
var RG16I = 0x8239;
var RG32UI = 0x823C;
var RG32I = 0x823B;
var RG8 = 0x822B;
var RG8_SNORM = 0x8F95;
var RG16F = 0x822F;
var RG32F = 0x8230;
var RG8UI = 0x8238;
var RG8I = 0x8237;
var R16UI = 0x8234;
var R16I = 0x8233;
var R32UI = 0x8236;
var R32I = 0x8235;
var RGB8 = 0x8051;
var SRGB8 = 0x8C41;
var RGB565 = 0x8D62;
var RGB8_SNORM = 0x8F96;
var R11F_G11F_B10F = 0x8C3A;
var RGB9_E5 = 0x8C3D;
var RGB16F = 0x881B;
var RGB32F = 0x8815;
var RGB8UI = 0x8D7D;
var RGB8I = 0x8D8F;
var RGB16UI = 0x8D77;
var RGB16I = 0x8D89;
var RGB32UI = 0x8D71;
var RGB32I = 0x8D83;
var RGBA8 = 0x8058;
var SRGB8_ALPHA8 = 0x8C43;
var RGBA8_SNORM = 0x8F97;
var RGB5_A1 = 0x8057;
var RGBA4 = 0x8056;
var RGB10_A2 = 0x8059;
var RGBA16F = 0x881A;
var RGBA32F = 0x8814;
var RGBA8UI = 0x8D7C;
var RGBA8I = 0x8D8E;
var RGB10_A2UI = 0x906F;
var RGBA16UI = 0x8D76;
var RGBA16I = 0x8D88;
var RGBA32I = 0x8D82;
var RGBA32UI = 0x8D70;
var DEPTH_COMPONENT16 = 0x81A5;
var DEPTH_COMPONENT24 = 0x81A6;
var DEPTH_COMPONENT32F = 0x8CAC;
var DEPTH32F_STENCIL8 = 0x8CAD;
var DEPTH24_STENCIL8 = 0x88F0;
/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(

var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var RG = 0x8227;
var RG_INTEGER = 0x8228;
var RED = 0x1903;
var RED_INTEGER = 0x8D94;
var RGB_INTEGER = 0x8D98;
var RGBA_INTEGER = 0x8D99;
var formatInfo = {};
{
  // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
  // the name.
  var f = formatInfo;
  f[ALPHA] = {
    numColorComponents: 1
  };
  f[LUMINANCE] = {
    numColorComponents: 1
  };
  f[LUMINANCE_ALPHA] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RED] = {
    numColorComponents: 1
  };
  f[RED_INTEGER] = {
    numColorComponents: 1
  };
  f[RG] = {
    numColorComponents: 2
  };
  f[RG_INTEGER] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGB_INTEGER] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RGBA_INTEGER] = {
    numColorComponents: 4
  };
  f[DEPTH_COMPONENT] = {
    numColorComponents: 1
  };
  f[DEPTH_STENCIL] = {
    numColorComponents: 2
  };
}
var textureInternalFormatInfo = {};
{
  // NOTE: these properties need unique names so we can let Uglify mangle the name.
  var t = textureInternalFormatInfo; // unsized formats

  t[ALPHA] = {
    textureFormat: ALPHA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [1, 2, 2, 4],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
  };
  t[LUMINANCE] = {
    textureFormat: LUMINANCE,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [1, 2, 2, 4],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
  };
  t[LUMINANCE_ALPHA] = {
    textureFormat: LUMINANCE_ALPHA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [2, 4, 4, 8],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
  };
  t[RGB] = {
    textureFormat: RGB,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [3, 6, 6, 12, 2],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_5_6_5]
  };
  t[RGBA] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [4, 8, 8, 16, 2, 2],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1]
  }; // sized formats

  t[R8] = {
    textureFormat: RED,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 1,
    type: UNSIGNED_BYTE
  };
  t[R8_SNORM] = {
    textureFormat: RED,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 1,
    type: BYTE
  };
  t[R16F] = {
    textureFormat: RED,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [4, 2],
    type: [FLOAT, HALF_FLOAT]
  };
  t[R32F] = {
    textureFormat: RED,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 4,
    type: FLOAT
  };
  t[R8UI] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 1,
    type: UNSIGNED_BYTE
  };
  t[R8I] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 1,
    type: BYTE
  };
  t[R16UI] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: UNSIGNED_SHORT
  };
  t[R16I] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: SHORT
  };
  t[R32UI] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT
  };
  t[R32I] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: INT
  };
  t[RG8] = {
    textureFormat: RG,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 2,
    type: UNSIGNED_BYTE
  };
  t[RG8_SNORM] = {
    textureFormat: RG,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 2,
    type: BYTE
  };
  t[RG16F] = {
    textureFormat: RG,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [8, 4],
    type: [FLOAT, HALF_FLOAT]
  };
  t[RG32F] = {
    textureFormat: RG,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 8,
    type: FLOAT
  };
  t[RG8UI] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: UNSIGNED_BYTE
  };
  t[RG8I] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: BYTE
  };
  t[RG16UI] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_SHORT
  };
  t[RG16I] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: SHORT
  };
  t[RG32UI] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: UNSIGNED_INT
  };
  t[RG32I] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: INT
  };
  t[RGB8] = {
    textureFormat: RGB,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 3,
    type: UNSIGNED_BYTE
  };
  t[SRGB8] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 3,
    type: UNSIGNED_BYTE
  };
  t[RGB565] = {
    textureFormat: RGB,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [3, 2],
    type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5]
  };
  t[RGB8_SNORM] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 3,
    type: BYTE
  };
  t[R11F_G11F_B10F] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [12, 6, 4],
    type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV]
  };
  t[RGB9_E5] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [12, 6, 4],
    type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV]
  };
  t[RGB16F] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [12, 6],
    type: [FLOAT, HALF_FLOAT]
  };
  t[RGB32F] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 12,
    type: FLOAT
  };
  t[RGB8UI] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 3,
    type: UNSIGNED_BYTE
  };
  t[RGB8I] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 3,
    type: BYTE
  };
  t[RGB16UI] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 6,
    type: UNSIGNED_SHORT
  };
  t[RGB16I] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 6,
    type: SHORT
  };
  t[RGB32UI] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 12,
    type: UNSIGNED_INT
  };
  t[RGB32I] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 12,
    type: INT
  };
  t[RGBA8] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 4,
    type: UNSIGNED_BYTE
  };
  t[SRGB8_ALPHA8] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 4,
    type: UNSIGNED_BYTE
  };
  t[RGBA8_SNORM] = {
    textureFormat: RGBA,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 4,
    type: BYTE
  };
  t[RGB5_A1] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [4, 2, 4],
    type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV]
  };
  t[RGBA4] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [4, 2],
    type: [UNSIGNED_BYTE, UNSIGNED_SHORT_4_4_4_4]
  };
  t[RGB10_A2] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 4,
    type: UNSIGNED_INT_2_10_10_10_REV
  };
  t[RGBA16F] = {
    textureFormat: RGBA,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [16, 8],
    type: [FLOAT, HALF_FLOAT]
  };
  t[RGBA32F] = {
    textureFormat: RGBA,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 16,
    type: FLOAT
  };
  t[RGBA8UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_BYTE
  };
  t[RGBA8I] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: BYTE
  };
  t[RGB10_A2UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT_2_10_10_10_REV
  };
  t[RGBA16UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: UNSIGNED_SHORT
  };
  t[RGBA16I] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: SHORT
  };
  t[RGBA32I] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 16,
    type: INT
  };
  t[RGBA32UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 16,
    type: UNSIGNED_INT
  }; // Sized Internal

  t[DEPTH_COMPONENT16] = {
    textureFormat: DEPTH_COMPONENT,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: [2, 4],
    type: [UNSIGNED_SHORT, UNSIGNED_INT]
  };
  t[DEPTH_COMPONENT24] = {
    textureFormat: DEPTH_COMPONENT,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT
  };
  t[DEPTH_COMPONENT32F] = {
    textureFormat: DEPTH_COMPONENT,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: FLOAT
  };
  t[DEPTH24_STENCIL8] = {
    textureFormat: DEPTH_STENCIL,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT_24_8
  };
  t[DEPTH32F_STENCIL8] = {
    textureFormat: DEPTH_STENCIL,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: FLOAT_32_UNSIGNED_INT_24_8_REV
  };
  Object.keys(t).forEach(function (internalFormat) {
    var info = t[internalFormat];
    info.bytesPerElementMap = {};

    if (Array.isArray(info.bytesPerElement)) {
      info.bytesPerElement.forEach(function (bytesPerElement, ndx) {
        var type = info.type[ndx];
        info.bytesPerElementMap[type] = bytesPerElement;
      });
    } else {
      var type = info.type;
      info.bytesPerElementMap[type] = info.bytesPerElement;
    }
  });
}
/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */

function getBytesPerElementForInternalFormat(internalFormat, type) {
  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  var bytesPerElement = info.bytesPerElementMap[type];

  if (bytesPerElement === undefined) {
    throw "unknown internal format";
  }

  return bytesPerElement;
}
/**
 * Gets the format for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {{format:number, type:number}} the corresponding format and type
 */


function getFormatAndTypeForInternalFormat(internalFormat) {
  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  return {
    format: info.textureFormat,
    type: Array.isArray(info.type) ? info.type[0] : info.type
  };
}
/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 */


function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {boolean} true if we can generate mips
 */


function canGenerateMipmap(gl, width, height, internalFormat
/*, type */
) {
  if (!utils.isWebGL2(gl)) {
    return isPowerOf2(width) && isPowerOf2(height);
  }

  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  return info.colorRenderable && info.textureFilterable;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {boolean} true if we can generate mips
 */


function canFilter(internalFormat
/*, type */
) {
  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  return info.textureFilterable;
}
/**
 * Gets the number of compontents for a given image format.
 * @param {number} format the format.
 * @return {number} the number of components for the format.
 * @memberOf module:twgl/textures
 */


function getNumComponentsForFormat(format) {
  var info = formatInfo[format];

  if (!info) {
    throw "unknown format: " + format;
  }

  return info.numColorComponents;
}
/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 */


function getTextureTypeForArrayType(gl, src, defaultType) {
  if (isArrayBuffer(src)) {
    return typedArrays.getGLTypeForTypedArray(src);
  }

  return defaultType || gl.UNSIGNED_BYTE;
}

function guessDimensions(gl, target, width, height, numElements) {
  if (numElements % 1 !== 0) {
    throw "can't guess dimensions";
  }

  if (!width && !height) {
    var size = Math.sqrt(numElements / (target === gl.TEXTURE_CUBE_MAP ? 6 : 1));

    if (size % 1 === 0) {
      width = size;
      height = size;
    } else {
      width = numElements;
      height = 1;
    }
  } else if (!height) {
    height = numElements / width;

    if (height % 1) {
      throw "can't guess dimensions";
    }
  } else if (!width) {
    width = numElements / height;

    if (width % 1) {
      throw "can't guess dimensions";
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * Sets the default texture color.
 *
 * The default texture color is used when loading textures from
 * urls. Because the URL will be loaded async we'd like to be
 * able to use the texture immediately. By putting a 1x1 pixel
 * color in the texture we can start using the texture before
 * the URL has loaded.
 *
 * @param {number[]} color Array of 4 values in the range 0 to 1
 * @deprecated see {@link module:twgl.setDefaults}
 * @memberOf module:twgl/textures
 */


function setDefaultTextureColor(color) {
  defaults.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);

  if (newDefaults.textureColor) {
    setDefaultTextureColor(newDefaults.textureColor);
  }
}
/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documentented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */

/**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * Note: A `TexImageSource` is defined in the WebGL spec as a `HTMLImageElement`, `HTMLVideoElement`,
 * `HTMLCanvasElement`, `ImageBitmap`, or `ImageData`.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {(number[]|ArrayBufferView)} color color used as temporary 1x1 pixel color for textures loaded async when src is a string.
 *    If it's a JavaScript array assumes color is 0 to 1 like most GL colors as in `[1, 0, 0, 1] = red=1, green=0, blue=0, alpha=0`.
 *    Defaults to `[0.5, 0.75, 1, 1]`. See {@link module:twgl.setDefaultTextureColor}. If `false` texture is set. Can be used to re-load a texture
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|TexImageSource|TexImageSource[]|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediatley. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_CUBE_MAP` then it must have 6 entries, one for each face of a cube map.
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_2D_ARRAY` then eact entry is a slice of the a 2d array texture
 *    and will be scaled to the specified width and height OR to the size of the first image that loads.
 *
 *    If `TexImageSource` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */
// NOTE: While querying GL is considered slow it's not remotely as slow
// as uploading a texture. On top of that you're unlikely to call this in
// a perf critical loop. Even if upload a texture every frame that's unlikely
// to be more than 1 or 2 textures a frame. In other words, the benefits of
// making the API easy to use outweigh any supposed perf benefits
//
// Also note I get that having one global of these is bad practice.
// As long as it's used correctly it means no garbage which probably
// doesn't matter when dealing with textures but old habits die hard.


var lastPackState = {};
/**
 * Saves any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */

function savePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    lastPackState.colorspaceConversion = gl.getParameter(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    lastPackState.premultiplyAlpha = gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    lastPackState.flipY = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flipY);
  }
}
/**
 * Restores any packing state that was set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */


function restorePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, lastPackState.flipY);
  }
}
/**
 * Saves state related to data size
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */


function saveSkipState(gl) {
  lastPackState.unpackAlignment = gl.getParameter(gl.UNPACK_ALIGNMENT);

  if (utils.isWebGL2(gl)) {
    lastPackState.unpackRowLength = gl.getParameter(gl.UNPACK_ROW_LENGTH);
    lastPackState.unpackImageHeight = gl.getParameter(gl.UNPACK_IMAGE_HEIGHT);
    lastPackState.unpackSkipPixels = gl.getParameter(gl.UNPACK_SKIP_PIXELS);
    lastPackState.unpackSkipRows = gl.getParameter(gl.UNPACK_SKIP_ROWS);
    lastPackState.unpackSkipImages = gl.getParameter(gl.UNPACK_SKIP_IMAGES);
  }
}
/**
 * Restores state related to data size
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */


function restoreSkipState(gl) {
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, lastPackState.unpackAlignment);

  if (utils.isWebGL2(gl)) {
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, lastPackState.unpackRowLength);
    gl.pixelStorei(gl.UNPACK_IMAGE_HEIGHT, lastPackState.unpackImageHeight);
    gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, lastPackState.unpackSkipPixels);
    gl.pixelStorei(gl.UNPACK_SKIP_ROWS, lastPackState.unpackSkipRows);
    gl.pixelStorei(gl.UNPACK_SKIP_IMAGES, lastPackState.unpackSkipImages);
  }
}
/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParamteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 */


function setTextureSamplerParameters(gl, target, parameteriFn, options) {
  if (options.minMag) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.minMag);
    parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.minMag);
  }

  if (options.min) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.min);
  }

  if (options.mag) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.mag);
  }

  if (options.wrap) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrap);
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrap);

    if (target === gl.TEXTURE_3D || helper.isSampler(gl, target)) {
      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrap);
    }
  }

  if (options.wrapR) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrapR);
  }

  if (options.wrapS) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrapS);
  }

  if (options.wrapT) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrapT);
  }

  if (options.minLod) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_LOD, options.minLod);
  }

  if (options.maxLod) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAX_LOD, options.maxLod);
  }

  if (options.baseLevel) {
    parameteriFn.call(gl, target, gl.TEXTURE_BASE_LEVEL, options.baseLevel);
  }

  if (options.maxLevel) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAX_LEVEL, options.maxLevel);
  }
}
/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureParameters(gl, tex, options) {
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}
/**
 * Sets the sampler parameters of a sampler.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setSamplerParameters(gl, sampler, options) {
  setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
}
/**
 * Creates a new sampler object and sets parameters.
 *
 * Example:
 *
 *      const sampler = twgl.createSampler(gl, {
 *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
 *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
 * @return {Object.<string,WebGLSampler>} the created samplers by name
 */


function createSampler(gl, options) {
  var sampler = gl.createSampler();
  setSamplerParameters(gl, sampler, options);
  return sampler;
}
/**
 * Creates a multiple sampler objects and sets parameters on each.
 *
 * Example:
 *
 *      const samplers = twgl.createSamplers(gl, {
 *        nearest: {
 *          minMag: gl.NEAREST,
 *        },
 *        nearestClampS: {
 *          minMag: gl.NEAREST,
 *          wrapS: gl.CLAMP_TO_NEAREST,
 *        },
 *        linear: {
 *          minMag: gl.LINEAR,
 *        },
 *        nearestClamp: {
 *          minMag: gl.NEAREST,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClamp: {
 *          minMag: gl.LINEAR,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClampT: {
 *          minMag: gl.LINEAR,
 *          wrapT: gl.CLAMP_TO_EDGE,
 *        },
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
 */


function createSamplers(gl, samplerOptions) {
  var samplers = {};
  Object.keys(samplerOptions).forEach(function (name) {
    samplers[name] = createSampler(gl, samplerOptions[name]);
  });
  return samplers;
}
/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 */


function make1Pixel(color) {
  color = color || defaults.textureColor;

  if (isArrayBuffer(color)) {
    return color;
  }

  return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}
/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @param {number} [type] The type parameter for texImage2D etc..
 * @memberOf module:twgl/textures
 */


function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type) {
  options = options || defaults.textureOptions;
  internalFormat = internalFormat || gl.RGBA;
  type = type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D;
  width = width || options.width;
  height = height || options.height;
  gl.bindTexture(target, tex);

  if (canGenerateMipmap(gl, width, height, internalFormat, type)) {
    gl.generateMipmap(target);
  } else {
    var filtering = canFilter(internalFormat, type) ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
}

function shouldAutomaticallySetTextureFilteringForSize(options) {
  return options.auto === true || options.auto === undefined && options.level === undefined;
}
/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 */


function getCubeFaceOrder(gl, options) {
  options = options || {};
  return options.cubeFaceOrder || [gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];
}
/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */

/**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundent but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 */


function getCubeFacesWithNdx(gl, options) {
  var faces = getCubeFaceOrder(gl, options); // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(

  var facesWithNdx = faces.map(function (face, ndx) {
    return {
      face: face,
      ndx: ndx
    };
  });
  facesWithNdx.sort(function (a, b) {
    return a.face - b.face;
  });
  return facesWithNdx;
}
/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */


function setTextureFromElement(gl, tex, element, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  var level = options.level || 0;
  var width = element.width;
  var height = element.height;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);
  gl.bindTexture(target, tex);

  if (target === gl.TEXTURE_CUBE_MAP) {
    // guess the parts
    var imgWidth = element.width;
    var imgHeight = element.height;
    var size;
    var slices;

    if (imgWidth / 6 === imgHeight) {
      // It's 6x1
      size = imgHeight;
      slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
    } else if (imgHeight / 6 === imgWidth) {
      // It's 1x6
      size = imgWidth;
      slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
    } else if (imgWidth / 3 === imgHeight / 2) {
      // It's 3x2
      size = imgWidth / 3;
      slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
    } else if (imgWidth / 2 === imgHeight / 3) {
      // It's 2x3
      size = imgWidth / 2;
      slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
    } else {
      throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
    }

    if (ctx) {
      ctx.canvas.width = size;
      ctx.canvas.height = size;
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size;
        ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
        gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
      }); // Free up the canvas memory

      ctx.canvas.width = 1;
      ctx.canvas.height = 1;
    } else if (_globalObject.default.createImageBitmap) {
      // NOTE: It seems like we should prefer ImageBitmap because unlike canvas it's
      // note lossy? (alpha is not premultiplied? although I'm not sure what
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size; // We can't easily use a default texture color here as it would have to match
        // the type across all faces where as with a 2D one there's only one face
        // so we're replacing everything all at once. It also has to be the correct size.
        // On the other hand we need all faces to be the same size so as one face loads
        // the rest match else the texture will be unrenderable.

        gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);

        _globalObject.default.createImageBitmap(element, xOffset, yOffset, size, size, {
          premultiplyAlpha: 'none',
          colorSpaceConversion: 'none'
        }).then(function (imageBitmap) {
          savePackState(gl, options);
          gl.bindTexture(target, tex);
          gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
          restorePackState(gl, options);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
          }
        });
      });
    }
  } else if (target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY) {
    var smallest = Math.min(element.width, element.height);
    var largest = Math.max(element.width, element.height);
    var depth = largest / smallest;

    if (depth % 1 !== 0) {
      throw "can not compute 3D dimensions of element";
    }

    var xMult = element.width === largest ? 1 : 0;
    var yMult = element.height === largest ? 1 : 0;
    saveSkipState(gl);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, element.width);
    gl.pixelStorei(gl.UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(gl.UNPACK_SKIP_IMAGES, 0);
    gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);

    for (var d = 0; d < depth; ++d) {
      var srcX = d * smallest * xMult;
      var srcY = d * smallest * yMult;
      gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, srcX);
      gl.pixelStorei(gl.UNPACK_SKIP_ROWS, srcY);
      gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
    }

    restoreSkipState(gl);
  } else {
    gl.texImage2D(target, level, internalFormat, format, type, element);
  }

  restorePackState(gl, options);

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
  }

  setTextureParameters(gl, tex, options);
}

function noop() {}
/**
 * Loads an image
 * @param {string} url url to image
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 */


function loadImage(url, crossOrigin, callback) {
  callback = callback || noop;
  var img;

  if (_globalObject.default.Image) {
    img = new _globalObject.default.Image();
    crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;

    if (crossOrigin !== undefined) {
      img.crossOrigin = crossOrigin;
    }

    var clearEventHandlers = function clearEventHandlers() {
      img.removeEventListener('error', onError); // eslint-disable-line

      img.removeEventListener('load', onLoad); // eslint-disable-line

      img = null;
    };

    var onError = function onError() {
      var msg = "couldn't load image: " + url;
      helper.error(msg);
      callback(msg, img);
      clearEventHandlers();
    };

    var onLoad = function onLoad() {
      callback(null, img);
      clearEventHandlers();
    };

    img.addEventListener('error', onError);
    img.addEventListener('load', onLoad);
    img.src = url;
    return img;
  } else if (_globalObject.default.ImageBitmap) {
    var err;
    var bm;

    var cb = function cb() {
      callback(err, bm);
    };

    var options = {};

    if (crossOrigin) {
      options.mode = 'cors'; // TODO: not sure how to translate image.crossOrigin
    }

    fetch(url, options).then(function (response) {
      if (!response.ok) {
        throw response;
      }

      return response.blob();
    }).then(function (blob) {
      return _globalObject.default.createImageBitmap(blob, {
        premultiplyAlpha: 'none',
        colorSpaceConversion: 'none'
      });
    }).then(function (bitmap) {
      // not sure if this works. We don't want
      // to catch the user's error. So, call
      // the callback in a timeout so we're
      // not in this scope inside the promise.
      bm = bitmap;
      setTimeout(cb);
    }).catch(function (e) {
      err = e;
      setTimeout(cb);
    });
    img = null;
  }

  return img;
}
/**
 * check if object is a TexImageSource
 *
 * @param {Object} obj Object to test
 * @return {boolean} true if object is a TexImageSource
 */


function isTexImageSource(obj) {
  return _globalObject.default.ImageBitmap && obj instanceof _globalObject.default.ImageBitmap || _globalObject.default.ImageData && obj instanceof _globalObject.default.ImageData || _globalObject.default.HTMLElement && obj instanceof _globalObject.default.HTMLElement;
}
/**
 * if obj is an TexImageSource then just
 * uses it otherwise if obj is a string
 * then load it first.
 *
 * @param {string|TexImageSource} obj
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 */


function loadAndUseImage(obj, crossOrigin, callback) {
  if (isTexImageSource(obj)) {
    setTimeout(function () {
      callback(null, obj);
    });
    return obj;
  }

  return loadImage(obj, crossOrigin, callback);
}
/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureTo1PixelColor(gl, tex, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);

  if (options.color === false) {
    return;
  } // Assume it's a URL
  // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.


  var color = make1Pixel(options.color);

  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
    }
  } else if (target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
  } else {
    gl.texImage2D(target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
  }
}
/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} souce image(s) used to as the src for the texture
 * @memberOf module:twgl
 */

/**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */

/**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as approriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */


function loadTextureFromUrl(gl, tex, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var img = loadAndUseImage(options.src, options.crossOrigin, function (err, img) {
    if (err) {
      callback(err, tex, img);
    } else {
      setTextureFromElement(gl, tex, img, options);
      callback(null, tex, img);
    }
  });
  return img;
}
/**
 * Loads a cubemap from 6 urls or TexImageSources as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadCubemapFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;

  if (urls.length !== 6) {
    throw "there must be 6 urls for a cubemap";
  }

  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D;

  if (target !== gl.TEXTURE_CUBE_MAP) {
    throw "target must be TEXTURE_CUBE_MAP";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = 6;
  var errors = [];
  var faces = getCubeFaceOrder(gl, options);
  var imgs; // eslint-disable-line

  function uploadImg(faceTarget) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        if (img.width !== img.height) {
          errors.push("cubemap face img is not a square: " + img.src);
        } else {
          savePackState(gl, options);
          gl.bindTexture(target, tex); // So assuming this is the first image we now have one face that's img sized
          // and 5 faces that are 1x1 pixel so size the other faces

          if (numToLoad === 5) {
            // use the default order
            getCubeFaceOrder(gl).forEach(function (otherTarget) {
              // Should we re-use the same face or a color?
              gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
            });
          } else {
            gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
          }

          restorePackState(gl, options);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
  });
}
/**
 * Loads a 2d array or 3d texture from urls OR TexImageSources as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadSlicesFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D_ARRAY;

  if (target !== gl.TEXTURE_3D && target !== gl.TEXTURE_2D_ARRAY) {
    throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = urls.length;
  var errors = [];
  var imgs; // eslint-disable-line

  var level = options.level || 0;
  var width = options.width;
  var height = options.height;
  var depth = urls.length;
  var firstImage = true;

  function uploadImg(slice) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        savePackState(gl, options);
        gl.bindTexture(target, tex);

        if (firstImage) {
          firstImage = false;
          width = options.width || img.width;
          height = options.height || img.height;
          gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null); // put it in every slice otherwise some slices will be 0,0,0,0

          for (var s = 0; s < depth; ++s) {
            gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
          }
        } else {
          var src = img;

          if (img.width !== width || img.height !== height) {
            // Size the image to fix
            src = ctx.canvas;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          }

          gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src); // free the canvas memory

          if (src === ctx.canvas) {
            ctx.canvas.width = 0;
            ctx.canvas.height = 0;
          }
        }

        restorePackState(gl, options);

        if (shouldAutomaticallySetTextureFilteringForSize(options)) {
          gl.generateMipmap(target);
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
  });
}
/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureFromArray(gl, tex, src, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var width = options.width;
  var height = options.height;
  var depth = options.depth;
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);

  if (!isArrayBuffer(src)) {
    var Type = typedArrays.getTypedArrayTypeForGLType(type);
    src = new Type(src);
  } else if (src instanceof Uint8ClampedArray) {
    src = new Uint8Array(src.buffer);
  }

  var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
  var numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?

  if (numElements % 1) {
    throw "length wrong size for format: " + utils.glEnumToString(gl, format);
  }

  var dimensions;

  if (target === gl.TEXTURE_3D) {
    if (!width && !height && !depth) {
      var size = Math.cbrt(numElements);

      if (size % 1 !== 0) {
        throw "can't guess cube size of array of numElements: " + numElements;
      }

      width = size;
      height = size;
      depth = size;
    } else if (width && (!height || !depth)) {
      dimensions = guessDimensions(gl, target, height, depth, numElements / width);
      height = dimensions.width;
      depth = dimensions.height;
    } else if (height && (!width || !depth)) {
      dimensions = guessDimensions(gl, target, width, depth, numElements / height);
      width = dimensions.width;
      depth = dimensions.height;
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements / depth);
      width = dimensions.width;
      height = dimensions.height;
    }
  } else {
    dimensions = guessDimensions(gl, target, width, height, numElements);
    width = dimensions.width;
    height = dimensions.height;
  }

  saveSkipState(gl);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, options.unpackAlignment || 1);
  savePackState(gl, options);

  if (target === gl.TEXTURE_CUBE_MAP) {
    var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
    var faceSize = numElements / 6 * elementsPerElement;
    getCubeFacesWithNdx(gl, options).forEach(function (f) {
      var offset = faceSize * f.ndx;
      var data = src.subarray(offset, offset + faceSize);
      gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
    });
  } else if (target === gl.TEXTURE_3D) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
  }

  restorePackState(gl, options);
  restoreSkipState(gl);
  return {
    width: width,
    height: height,
    depth: depth,
    type: type
  };
}
/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setEmptyTexture(gl, tex, options) {
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);

  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  } else if (target === gl.TEXTURE_3D) {
    gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
  }

  restorePackState(gl, options);
}
/**
 * Creates a texture based on the options passed in.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */


function createTexture(gl, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  var tex = gl.createTexture();
  var target = options.target || gl.TEXTURE_2D;
  var width = options.width || 1;
  var height = options.height || 1;
  var internalFormat = options.internalFormat || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var type = options.type || formatType.type;
  gl.bindTexture(target, tex);

  if (target === gl.TEXTURE_CUBE_MAP) {
    // this should have been the default for CUBEMAPS :(
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  var src = options.src;

  if (src) {
    if (typeof src === "function") {
      src = src(gl, options);
    }

    if (typeof src === "string") {
      loadTextureFromUrl(gl, tex, options, callback);
    } else if (isArrayBuffer(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer(src[0]))) {
      var dimensions = setTextureFromArray(gl, tex, src, options);
      width = dimensions.width;
      height = dimensions.height;
      type = dimensions.type;
    } else if (Array.isArray(src) && (typeof src[0] === 'string' || isTexImageSource(src[0]))) {
      if (target === gl.TEXTURE_CUBE_MAP) {
        loadCubemapFromUrls(gl, tex, options, callback);
      } else {
        loadSlicesFromUrls(gl, tex, options, callback);
      }
    } else if (isTexImageSource(src)) {
      setTextureFromElement(gl, tex, src, options);
      width = src.width;
      height = src.height;
    } else {
      throw "unsupported src type";
    }
  } else {
    setEmptyTexture(gl, tex, options);
  }

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
  }

  setTextureParameters(gl, tex, options);
  return tex;
}
/**
 * Resizes a texture based on the options passed in.
 *
 * Note: This is not a generic resize anything function.
 * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
 * It will use `options.src` if it exists to try to determine a `type`
 * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
 * for the texture. Texture parameters will be set accordingly
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the texture to resize
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {number} [width] the new width. If not passed in will use `options.width`
 * @param {number} [height] the new height. If not passed in will use `options.height`
 * @memberOf module:twgl/textures
 */


function resizeTexture(gl, tex, options, width, height) {
  width = width || options.width;
  height = height || options.height;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type;
  var src = options.src;

  if (!src) {
    type = options.type || formatType.type;
  } else if (isArrayBuffer(src) || Array.isArray(src) && typeof src[0] === 'number') {
    type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  } else {
    type = options.type || formatType.type;
  }

  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
    }
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
  }
}
/**
 * Check if a src is an async request.
 * if src is a string we're going to download an image
 * if src is an array of strings we're going to download cubemap images
 * @param {*} src The src from a TextureOptions
 * @returns {bool} true if src is async.
 */


function isAsyncSrc(src) {
  return typeof src === 'string' || Array.isArray(src) && typeof src[0] === 'string';
}
/**
 * Creates a bunch of textures based on the passed in options.
 *
 * Example:
 *
 *     const textures = twgl.createTextures(gl, {
 *       // a power of 2 image
 *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
 *       // a non-power of 2 image
 *       clover: { src: "images/clover.jpg" },
 *       // From a canvas
 *       fromCanvas: { src: ctx.canvas },
 *       // A cubemap from 6 images
 *       yokohama: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: [
 *           'images/yokohama/posx.jpg',
 *           'images/yokohama/negx.jpg',
 *           'images/yokohama/posy.jpg',
 *           'images/yokohama/negy.jpg',
 *           'images/yokohama/posz.jpg',
 *           'images/yokohama/negz.jpg',
 *         ],
 *       },
 *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
 *       goldengate: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: 'images/goldengate.jpg',
 *       },
 *       // A 2x2 pixel texture from a JavaScript array
 *       checker: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         src: [
 *           255,255,255,255,
 *           192,192,192,255,
 *           192,192,192,255,
 *           255,255,255,255,
 *         ],
 *       },
 *       // a 1x2 pixel texture from a typed array.
 *       stripe: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         format: gl.LUMINANCE,
 *         src: new Uint8Array([
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *         ]),
 *         width: 1,
 *       },
 *     });
 *
 * Now
 *
 * *   `textures.hftIcon` will be a 2d texture
 * *   `textures.clover` will be a 2d texture
 * *   `textures.fromCanvas` will be a 2d texture
 * *   `textures.yohohama` will be a cubemap texture
 * *   `textures.goldengate` will be a cubemap texture
 * *   `textures.checker` will be a 2d texture
 * *   `textures.stripe` will be a 2d texture
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
 * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
 * @return {Object.<string,WebGLTexture>} the created textures by name
 * @memberOf module:twgl/textures
 */


function createTextures(gl, textureOptions, callback) {
  callback = callback || noop;
  var numDownloading = 0;
  var errors = [];
  var textures = {};
  var images = {};

  function callCallbackIfReady() {
    if (numDownloading === 0) {
      setTimeout(function () {
        callback(errors.length ? errors : undefined, textures, images);
      }, 0);
    }
  }

  Object.keys(textureOptions).forEach(function (name) {
    var options = textureOptions[name];
    var onLoadFn;

    if (isAsyncSrc(options.src)) {
      onLoadFn = function onLoadFn(err, tex, img) {
        images[name] = img;
        --numDownloading;

        if (err) {
          errors.push(err);
        }

        callCallbackIfReady();
      };

      ++numDownloading;
    }

    textures[name] = createTexture(gl, options, onLoadFn);
  }); // queue the callback if there are no images to download.
  // We do this because if your code is structured to wait for
  // images to download but then you comment out all the async
  // images your code would break.

  callCallbackIfReady();
  return textures;
} // Using quotes prevents Uglify from changing the names.
// No speed diff AFAICT.

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  m4: true,
  v3: true,
  primitives: true
};
exports.primitives = exports.v3 = exports.m4 = void 0;

var m4 = _interopRequireWildcard(__webpack_require__(6));

exports.m4 = m4;

var v3 = _interopRequireWildcard(__webpack_require__(3));

exports.v3 = v3;

var primitives = _interopRequireWildcard(__webpack_require__(10));

exports.primitives = primitives;

var _twgl = __webpack_require__(11);

Object.keys(_twgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _twgl[key];
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.create3DFVertices = create3DFVertices;
exports.createAugmentedTypedArray = createAugmentedTypedArray;
exports.createCubeVertices = createCubeVertices;
exports.createPlaneVertices = createPlaneVertices;
exports.createSphereVertices = createSphereVertices;
exports.createTruncatedConeVertices = createTruncatedConeVertices;
exports.createXYQuadVertices = createXYQuadVertices;
exports.createCresentVertices = createCresentVertices;
exports.createCylinderVertices = createCylinderVertices;
exports.createTorusVertices = createTorusVertices;
exports.createDiscVertices = createDiscVertices;
exports.deindexVertices = deindexVertices;
exports.flattenNormals = flattenNormals;
exports.makeRandomVertexColors = makeRandomVertexColors;
exports.reorientDirections = reorientDirections;
exports.reorientNormals = reorientNormals;
exports.reorientPositions = reorientPositions;
exports.reorientVertices = reorientVertices;
exports.concatVertices = concatVertices;
exports.duplicateVertices = duplicateVertices;
exports.createDiscBuffers = exports.createDiscBufferInfo = exports.createTorusBuffers = exports.createTorusBufferInfo = exports.createCylinderBuffers = exports.createCylinderBufferInfo = exports.createCresentBuffers = exports.createCresentBufferInfo = exports.createXYQuadBuffers = exports.createXYQuadBufferInfo = exports.createTruncatedConeBuffers = exports.createTruncatedConeBufferInfo = exports.createSphereBuffers = exports.createSphereBufferInfo = exports.createPlaneBuffers = exports.createPlaneBufferInfo = exports.createCubeBuffers = exports.createCubeBufferInfo = exports.create3DFBuffers = exports.create3DFBufferInfo = void 0;

var attributes = _interopRequireWildcard(__webpack_require__(7));

var helper = _interopRequireWildcard(__webpack_require__(0));

var typedArrays = _interopRequireWildcard(__webpack_require__(1));

var m4 = _interopRequireWildcard(__webpack_require__(6));

var v3 = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Various functions to make simple primitives
 *
 * note: Most primitive functions come in 3 styles
 *
 * *  `createSomeShapeBufferInfo`
 *
 *    These functions are almost always the functions you want to call. They
 *    create vertices then make WebGLBuffers and create {@link module:twgl.AttribInfo}s
 *    returing a {@link module:twgl.BufferInfo} you can pass to {@link module:twgl.setBuffersAndAttributes}
 *    and {@link module:twgl.drawBufferInfo} etc...
 *
 * *  `createSomeShapeBuffers`
 *
 *    These create WebGLBuffers and put your data in them but nothing else.
 *    It's a shortcut to doing it yourself if you don't want to use
 *    the higher level functions.
 *
 * *  `createSomeShapeVertices`
 *
 *    These just create vertices, no buffers. This allows you to manipulate the vertices
 *    or add more data before generating a {@link module:twgl.BufferInfo}. Once you're finished
 *    manipulating the vertices call {@link module:twgl.createBufferInfoFromArrays}.
 *
 *    example:
 *
 *        const arrays = twgl.primitives.createPlaneArrays(1);
 *        twgl.primitives.reorientVertices(arrays, m4.rotationX(Math.PI * 0.5));
 *        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 * @module twgl/primitives
 */
var getArray = attributes.getArray_; // eslint-disable-line

var getNumComponents = attributes.getNumComponents_; // eslint-disable-line

/**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 */

function augmentTypedArray(typedArray, numComponents) {
  var cursor = 0;

  typedArray.push = function () {
    for (var ii = 0; ii < arguments.length; ++ii) {
      var value = arguments[ii];

      if (value instanceof Array || typedArrays.isArrayBuffer(value)) {
        for (var jj = 0; jj < value.length; ++jj) {
          typedArray[cursor++] = value[jj];
        }
      } else {
        typedArray[cursor++] = value;
      }
    }
  };

  typedArray.reset = function (opt_index) {
    cursor = opt_index || 0;
  };

  typedArray.numComponents = numComponents;
  Object.defineProperty(typedArray, 'numElements', {
    get: function get() {
      return this.length / this.numComponents | 0;
    }
  });
  return typedArray;
}
/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */


function createAugmentedTypedArray(numComponents, numElements, opt_type) {
  var Type = opt_type || Float32Array;
  return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}

function allButIndices(name) {
  return name !== "indices";
}
/**
 * Given indexed vertices creates a new set of vertices unindexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */


function deindexVertices(vertices) {
  var indices = vertices.indices;
  var newVertices = {};
  var numElements = indices.length;

  function expandToUnindexed(channel) {
    var srcBuffer = vertices[channel];
    var numComponents = srcBuffer.numComponents;
    var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);

    for (var ii = 0; ii < numElements; ++ii) {
      var ndx = indices[ii];
      var offset = ndx * numComponents;

      for (var jj = 0; jj < numComponents; ++jj) {
        dstBuffer.push(srcBuffer[offset + jj]);
      }
    }

    newVertices[channel] = dstBuffer;
  }

  Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
  return newVertices;
}
/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */


function flattenNormals(vertices) {
  if (vertices.indices) {
    throw "can't flatten normals of indexed vertices. deindex them first";
  }

  var normals = vertices.normal;
  var numNormals = normals.length;

  for (var ii = 0; ii < numNormals; ii += 9) {
    // pull out the 3 normals for this triangle
    var nax = normals[ii + 0];
    var nay = normals[ii + 1];
    var naz = normals[ii + 2];
    var nbx = normals[ii + 3];
    var nby = normals[ii + 4];
    var nbz = normals[ii + 5];
    var ncx = normals[ii + 6];
    var ncy = normals[ii + 7];
    var ncz = normals[ii + 8]; // add them

    var nx = nax + nbx + ncx;
    var ny = nay + nby + ncy;
    var nz = naz + nbz + ncz; // normalize them

    var length = Math.sqrt(nx * nx + ny * ny + nz * nz);
    nx /= length;
    ny /= length;
    nz /= length; // copy them back in

    normals[ii + 0] = nx;
    normals[ii + 1] = ny;
    normals[ii + 2] = nz;
    normals[ii + 3] = nx;
    normals[ii + 4] = ny;
    normals[ii + 5] = nz;
    normals[ii + 6] = nx;
    normals[ii + 7] = ny;
    normals[ii + 8] = nz;
  }

  return vertices;
}

function applyFuncToV3Array(array, matrix, fn) {
  var len = array.length;
  var tmp = new Float32Array(3);

  for (var ii = 0; ii < len; ii += 3) {
    fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
    array[ii] = tmp[0];
    array[ii + 1] = tmp[1];
    array[ii + 2] = tmp[2];
  }
}

function transformNormal(mi, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}
/**
 * Reorients directions by the given matrix..
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientDirections(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformDirection);
  return array;
}
/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientNormals(array, matrix) {
  applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
  return array;
}
/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientPositions(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformPoint);
  return array;
}
/**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, (number[]|TypedArray)>} arrays The vertices to reorient
 * @param {Matrix} matrix matrix to reorient by.
 * @return {Object.<string, (number[]|TypedArray)>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */


function reorientVertices(arrays, matrix) {
  Object.keys(arrays).forEach(function (name) {
    var array = arrays[name];

    if (name.indexOf("pos") >= 0) {
      reorientPositions(array, matrix);
    } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
      reorientDirections(array, matrix);
    } else if (name.indexOf("norm") >= 0) {
      reorientNormals(array, matrix);
    }
  });
  return arrays;
}
/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */

/**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */

/**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray> the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */


function createXYQuadVertices(size, xOffset, yOffset) {
  size = size || 2;
  xOffset = xOffset || 0;
  yOffset = yOffset || 0;
  size *= 0.5;
  return {
    position: {
      numComponents: 2,
      data: [xOffset + -1 * size, yOffset + -1 * size, xOffset + 1 * size, yOffset + -1 * size, xOffset + -1 * size, yOffset + 1 * size, xOffset + 1 * size, yOffset + 1 * size]
    },
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
    indices: [0, 1, 2, 2, 1, 3]
  };
}
/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {@module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */

/**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */

/**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */


function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
  width = width || 1;
  depth = depth || 1;
  subdivisionsWidth = subdivisionsWidth || 1;
  subdivisionsDepth = subdivisionsDepth || 1;
  matrix = matrix || m4.identity();
  var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  for (var z = 0; z <= subdivisionsDepth; z++) {
    for (var x = 0; x <= subdivisionsWidth; x++) {
      var u = x / subdivisionsWidth;
      var v = z / subdivisionsDepth;
      positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
      normals.push(0, 1, 0);
      texcoords.push(u, v);
    }
  }

  var numVertsAcross = subdivisionsWidth + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

  for (var _z = 0; _z < subdivisionsDepth; _z++) {
    // eslint-disable-line
    for (var _x = 0; _x < subdivisionsWidth; _x++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_z + 0) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x, (_z + 0) * numVertsAcross + _x + 1); // Make triangle 2 of quad.

      indices.push((_z + 1) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x + 1, (_z + 0) * numVertsAcross + _x + 1);
    }
  }

  var arrays = reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  }, matrix);
  return arrays;
}
/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */

/**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */

/**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */


function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw Error('subdivisionAxis and subdivisionHeight must be > 0');
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
  var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians; // We are going to generate our sphere by iterating through its
  // spherical coordinates and generating 2 triangles for each quad on a
  // ring of the sphere.

  var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices); // Generate the individual vertices in our vertex buffer.

  for (var y = 0; y <= subdivisionsHeight; y++) {
    for (var x = 0; x <= subdivisionsAxis; x++) {
      // Generate a vertex based on its spherical coordinates
      var u = x / subdivisionsAxis;
      var v = y / subdivisionsHeight;
      var theta = longRange * u;
      var phi = latRange * v;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);
      var ux = cosTheta * sinPhi;
      var uy = cosPhi;
      var uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  var numVertsAround = subdivisionsAxis + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);

  for (var _x2 = 0; _x2 < subdivisionsAxis; _x2++) {
    // eslint-disable-line
    for (var _y = 0; _y < subdivisionsHeight; _y++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_y + 0) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2); // Make triangle 2 of quad.

      indices.push((_y + 1) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2 + 1);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 */


var CUBE_FACE_INDICES = [[3, 7, 5, 1], // right
[6, 2, 0, 4], // left
[6, 7, 3, 2], // ??
[0, 1, 5, 4], // ??
[7, 6, 4, 5], // front
[2, 3, 1, 0]];
/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */

/**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */

/**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */

function createCubeVertices(size) {
  size = size || 1;
  var k = size / 2;
  var cornerVertices = [[-k, -k, -k], [+k, -k, -k], [-k, +k, -k], [+k, +k, -k], [-k, -k, +k], [+k, -k, +k], [-k, +k, +k], [+k, +k, +k]];
  var faceNormals = [[+1, +0, +0], [-1, +0, +0], [+0, +1, +0], [+0, -1, +0], [+0, +0, +1], [+0, +0, -1]];
  var uvCoords = [[1, 0], [0, 0], [0, 1], [1, 1]];
  var numVertices = 6 * 4;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

  for (var f = 0; f < 6; ++f) {
    var faceIndices = CUBE_FACE_INDICES[f];

    for (var v = 0; v < 4; ++v) {
      var position = cornerVertices[faceIndices[v]];
      var normal = faceNormals[f];
      var uv = uvCoords[v]; // Each face needs all four vertices because the normals and texture
      // coordinates are not all the same.

      positions.push(position);
      normals.push(normal);
      texcoords.push(uv);
    } // Two triangles make a square face.


    var offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */

/**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */

/**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */


function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
  if (radialSubdivisions < 3) {
    throw Error('radialSubdivisions must be 3 or greater');
  }

  if (verticalSubdivisions < 1) {
    throw Error('verticalSubdivisions must be 1 or greater');
  }

  var topCap = opt_topCap === undefined ? true : opt_topCap;
  var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;
  var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
  var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra) * 2, Uint16Array);
  var vertsAroundEdge = radialSubdivisions + 1; // The slant of the cone is constant across its surface

  var slant = Math.atan2(bottomRadius - topRadius, height);
  var cosSlant = Math.cos(slant);
  var sinSlant = Math.sin(slant);
  var start = topCap ? -2 : 0;
  var end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (var yy = start; yy <= end; ++yy) {
    var v = yy / verticalSubdivisions;
    var y = height * v;
    var ringRadius = void 0;

    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }

    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }

    y -= height / 2;

    for (var ii = 0; ii < vertsAroundEdge; ++ii) {
      var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
      var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);
      normals.push(yy < 0 || yy > verticalSubdivisions ? 0 : sin * cosSlant, yy < 0 ? -1 : yy > verticalSubdivisions ? 1 : sinSlant, yy < 0 || yy > verticalSubdivisions ? 0 : cos * cosSlant);
      texcoords.push(ii / radialSubdivisions, 1 - v);
    }
  }

  for (var _yy = 0; _yy < verticalSubdivisions + extra; ++_yy) {
    // eslint-disable-line
    for (var _ii = 0; _ii < radialSubdivisions; ++_ii) {
      // eslint-disable-line
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 0) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii);
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 0 + _ii);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 */


function expandRLEData(rleData, padding) {
  padding = padding || [];
  var data = [];

  for (var ii = 0; ii < rleData.length; ii += 4) {
    var runLength = rleData[ii];
    var element = rleData.slice(ii + 1, ii + 4);
    element.push.apply(element, padding);

    for (var jj = 0; jj < runLength; ++jj) {
      data.push.apply(data, element);
    }
  }

  return data;
}
/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */

/**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */

/**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function create3DFVertices() {
  var positions = [// left column front
  0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, // top rung front
  30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, // middle rung front
  30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, // left column back
  0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, // top rung back
  30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, // middle rung back
  30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, // top
  0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, // top rung front
  100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, // under top rung
  30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, // between top rung and middle
  30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, // top of middle rung
  30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, // front of middle rung
  67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, // bottom of middle rung.
  30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, // front of bottom
  30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, // bottom
  0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, // left side
  0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0];
  var texcoords = [// left column front
  0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34, 0.19, // top rung front
  0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31, 0.62, 0.19, // middle rung front
  0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49, 0.55, 0.49, 0.43, // left column back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // middle rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // top rung front
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // under top rung
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // between top rung and middle
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // top of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // front of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom of middle rung.
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // front of bottom
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // left side
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0];
  var normals = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 0, 0, 1, // left column back
  // top rung back
  // middle rung back
  18, 0, 0, -1, // top
  6, 0, 1, 0, // top rung front
  6, 1, 0, 0, // under top rung
  6, 0, -1, 0, // between top rung and middle
  6, 1, 0, 0, // top of middle rung
  6, 0, 1, 0, // front of middle rung
  6, 1, 0, 0, // bottom of middle rung.
  6, 0, -1, 0, // front of bottom
  6, 1, 0, 0, // bottom
  6, 0, -1, 0, // left side
  6, -1, 0, 0]);
  var colors = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 200, 70, 120, // left column back
  // top rung back
  // middle rung back
  18, 80, 70, 200, // top
  6, 70, 200, 210, // top rung front
  6, 200, 200, 70, // under top rung
  6, 210, 100, 70, // between top rung and middle
  6, 210, 160, 70, // top of middle rung
  6, 70, 180, 210, // front of middle rung
  6, 100, 70, 210, // bottom of middle rung.
  6, 76, 210, 100, // front of bottom
  6, 140, 210, 80, // bottom
  6, 90, 130, 110, // left side
  6, 160, 160, 220], [255]);
  var numVerts = positions.length / 3;
  var arrays = {
    position: createAugmentedTypedArray(3, numVerts),
    texcoord: createAugmentedTypedArray(2, numVerts),
    normal: createAugmentedTypedArray(3, numVerts),
    color: createAugmentedTypedArray(4, numVerts, Uint8Array),
    indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
  };
  arrays.position.push(positions);
  arrays.texcoord.push(texcoords);
  arrays.normal.push(normals);
  arrays.color.push(colors);

  for (var ii = 0; ii < numVerts; ++ii) {
    arrays.indices.push(ii);
  }

  return arrays;
}
/**
 * Creates cresent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */

/**
 * Creates cresent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates cresent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCresentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
  if (subdivisionsDown <= 0) {
    throw Error('subdivisionDown must be > 0');
  }

  startOffset = startOffset || 0;
  endOffset = endOffset || 1;
  var subdivisionsThick = 2;
  var offsetRange = endOffset - startOffset;
  var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  function lerp(a, b, s) {
    return a + (b - a) * s;
  }

  function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
    for (var z = 0; z <= subdivisionsDown; z++) {
      var uBack = x / (subdivisionsThick - 1);
      var v = z / subdivisionsDown;
      var xBack = (uBack - 0.5) * 2;
      var angle = (startOffset + v * offsetRange) * Math.PI;
      var s = Math.sin(angle);
      var c = Math.cos(angle);
      var radius = lerp(verticalRadius, arcRadius, s);
      var px = xBack * thickness;
      var py = c * verticalRadius;
      var pz = s * radius;
      positions.push(px, py, pz);
      var n = v3.add(v3.multiply([0, s, c], normalMult), normalAdd);
      normals.push(n);
      texcoords.push(uBack * uMult + uAdd, v);
    }
  } // Generate the individual vertices in our vertex buffer.


  for (var x = 0; x < subdivisionsThick; x++) {
    var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
    createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
    createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
  } // Do outer surface.


  var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);

  function createSurface(leftArcOffset, rightArcOffset) {
    for (var z = 0; z < subdivisionsDown; ++z) {
      // Make triangle 1 of quad.
      indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0); // Make triangle 2 of quad.

      indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
    }
  }

  var numVerticesDown = subdivisionsDown + 1; // front

  createSurface(numVerticesDown * 0, numVerticesDown * 4); // right

  createSurface(numVerticesDown * 5, numVerticesDown * 7); // back

  createSurface(numVerticesDown * 6, numVerticesDown * 2); // left

  createSurface(numVerticesDown * 3, numVerticesDown * 1);
  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */

/**
 * Creates cylinder buffers. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCylinderBuffers
 */

/**
 * Creates cylinder vertices. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
  return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
}
/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */

/**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */

/**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
  if (radialSubdivisions < 3) {
    throw Error('radialSubdivisions must be 3 or greater');
  }

  if (bodySubdivisions < 3) {
    throw Error('verticalSubdivisions must be 3 or greater');
  }

  startAngle = startAngle || 0;
  endAngle = endAngle || Math.PI * 2;
  var range = endAngle - startAngle;
  var radialParts = radialSubdivisions + 1;
  var bodyParts = bodySubdivisions + 1;
  var numVertices = radialParts * bodyParts;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);

  for (var slice = 0; slice < bodyParts; ++slice) {
    var v = slice / bodySubdivisions;
    var sliceAngle = v * Math.PI * 2;
    var sliceSin = Math.sin(sliceAngle);
    var ringRadius = radius + sliceSin * thickness;
    var ny = Math.cos(sliceAngle);
    var y = ny * thickness;

    for (var ring = 0; ring < radialParts; ++ring) {
      var u = ring / radialSubdivisions;
      var ringAngle = startAngle + u * range;
      var xSin = Math.sin(ringAngle);
      var zCos = Math.cos(ringAngle);
      var x = xSin * ringRadius;
      var z = zCos * ringRadius;
      var nx = xSin * sliceSin;
      var nz = zCos * sliceSin;
      positions.push(x, y, z);
      normals.push(nx, ny, nz);
      texcoords.push(u, 1 - v);
    }
  }

  for (var _slice = 0; _slice < bodySubdivisions; ++_slice) {
    // eslint-disable-line
    for (var _ring = 0; _ring < radialSubdivisions; ++_ring) {
      // eslint-disable-line
      var nextRingIndex = 1 + _ring;
      var nextSliceIndex = 1 + _slice;
      indices.push(radialParts * _slice + _ring, radialParts * nextSliceIndex + _ring, radialParts * _slice + nextRingIndex);
      indices.push(radialParts * nextSliceIndex + _ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * _slice + nextRingIndex);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */

/**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */

/**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
  if (divisions < 3) {
    throw Error('divisions must be at least 3');
  }

  stacks = stacks ? stacks : 1;
  stackPower = stackPower ? stackPower : 1;
  innerRadius = innerRadius ? innerRadius : 0; // Note: We don't share the center vertex because that would
  // mess up texture coordinates.

  var numVertices = (divisions + 1) * (stacks + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
  var firstIndex = 0;
  var radiusSpan = radius - innerRadius;
  var pointsPerStack = divisions + 1; // Build the disk one stack at a time.

  for (var stack = 0; stack <= stacks; ++stack) {
    var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

    for (var i = 0; i <= divisions; ++i) {
      var theta = 2.0 * Math.PI * i / divisions;
      var x = stackRadius * Math.cos(theta);
      var z = stackRadius * Math.sin(theta);
      positions.push(x, 0, z);
      normals.push(0, 1, 0);
      texcoords.push(1 - i / divisions, stack / stacks);

      if (stack > 0 && i !== divisions) {
        // a, b, c and d are the indices of the vertices of a quad.  unless
        // the current stack is the one closest to the center, in which case
        // the vertices a and b connect to the center vertex.
        var a = firstIndex + (i + 1);
        var b = firstIndex + i;
        var c = firstIndex + i - pointsPerStack;
        var d = firstIndex + (i + 1) - pointsPerStack; // Make a quad of the vertices a, b, c, d.

        indices.push(a, b, c);
        indices.push(a, c, d);
      }
    }

    firstIndex += divisions + 1;
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 */


function randInt(range) {
  return Math.random() * range | 0;
}
/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */

/**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */

/**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, augmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, augmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */


function makeRandomVertexColors(vertices, options) {
  options = options || {};
  var numElements = vertices.position.numElements;
  var vcolors = createAugmentedTypedArray(4, numElements, Uint8Array);

  var rand = options.rand || function (ndx, channel) {
    return channel < 3 ? randInt(256) : 255;
  };

  vertices.color = vcolors;

  if (vertices.indices) {
    // just make random colors if index
    for (var ii = 0; ii < numElements; ++ii) {
      vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    }
  } else {
    // make random colors per triangle
    var numVertsPerColor = options.vertsPerColor || 3;
    var numSets = numElements / numVertsPerColor;

    for (var _ii2 = 0; _ii2 < numSets; ++_ii2) {
      // eslint-disable-line
      var color = [rand(_ii2, 0), rand(_ii2, 1), rand(_ii2, 2), rand(_ii2, 3)];

      for (var jj = 0; jj < numVertsPerColor; ++jj) {
        vcolors.push(color);
      }
    }
  }

  return vertices;
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 */


function createBufferFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
    return attributes.createBuffersFromArrays(gl, arrays);
  };
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 */


function createBufferInfoFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    return attributes.createBufferInfoFromArrays(gl, arrays);
  };
}

var arraySpecPropertyNames = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];
/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 */

function copyElements(src, dst, dstNdx, offset) {
  offset = offset || 0;
  var length = src.length;

  for (var ii = 0; ii < length; ++ii) {
    dst[dstNdx + ii] = src[ii] + offset;
  }
}
/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 */


function createArrayOfSameType(srcArray, length) {
  var arraySrc = getArray(srcArray);
  var newArray = new arraySrc.constructor(length);
  var newArraySpec = newArray; // If it appears to have been augmented make new one augemented

  if (arraySrc.numComponents && arraySrc.numElements) {
    augmentTypedArray(newArray, arraySrc.numComponents);
  } // If it was a fullspec make new one a fullspec


  if (srcArray.data) {
    newArraySpec = {
      data: newArray
    };
    helper.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
  }

  return newArraySpec;
}
/**
 * Concatinates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primtiives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatinated vertices.
 * @memberOf module:twgl/primitives
 */


function concatVertices(arrayOfArrays) {
  var names = {};
  var baseName; // get names of all arrays.
  // and numElements for each set of vertices

  var _loop = function _loop(ii) {
    var arrays = arrayOfArrays[ii];
    Object.keys(arrays).forEach(function (name) {
      // eslint-disable-line
      if (!names[name]) {
        names[name] = [];
      }

      if (!baseName && name !== 'indices') {
        baseName = name;
      }

      var arrayInfo = arrays[name];
      var numComponents = getNumComponents(arrayInfo, name);
      var array = getArray(arrayInfo);
      var numElements = array.length / numComponents;
      names[name].push(numElements);
    });
  };

  for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
    _loop(ii);
  } // compute length of combined array
  // and return one for reference


  function getLengthOfCombinedArrays(name) {
    var length = 0;
    var arraySpec;

    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
      var arrays = arrayOfArrays[ii];
      var arrayInfo = arrays[name];
      var array = getArray(arrayInfo);
      length += array.length;

      if (!arraySpec || arrayInfo.data) {
        arraySpec = arrayInfo;
      }
    }

    return {
      length: length,
      spec: arraySpec
    };
  }

  function copyArraysToNewArray(name, base, newArray) {
    var baseIndex = 0;
    var offset = 0;

    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
      var arrays = arrayOfArrays[ii];
      var arrayInfo = arrays[name];
      var array = getArray(arrayInfo);

      if (name === 'indices') {
        copyElements(array, newArray, offset, baseIndex);
        baseIndex += base[ii];
      } else {
        copyElements(array, newArray, offset);
      }

      offset += array.length;
    }
  }

  var base = names[baseName];
  var newArrays = {};
  Object.keys(names).forEach(function (name) {
    var info = getLengthOfCombinedArrays(name);
    var newArraySpec = createArrayOfSameType(info.spec, info.length);
    copyArraysToNewArray(name, base, getArray(newArraySpec));
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}
/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The dupilicated vertices.
 * @memberOf module:twgl/primitives
 */


function duplicateVertices(arrays) {
  var newArrays = {};
  Object.keys(arrays).forEach(function (name) {
    var arraySpec = arrays[name];
    var srcArray = getArray(arraySpec);
    var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
    copyElements(srcArray, getArray(newArraySpec), 0);
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
exports.create3DFBufferInfo = create3DFBufferInfo;
var create3DFBuffers = createBufferFunc(create3DFVertices);
exports.create3DFBuffers = create3DFBuffers;
var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
exports.createCubeBufferInfo = createCubeBufferInfo;
var createCubeBuffers = createBufferFunc(createCubeVertices);
exports.createCubeBuffers = createCubeBuffers;
var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
exports.createPlaneBufferInfo = createPlaneBufferInfo;
var createPlaneBuffers = createBufferFunc(createPlaneVertices);
exports.createPlaneBuffers = createPlaneBuffers;
var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
exports.createSphereBufferInfo = createSphereBufferInfo;
var createSphereBuffers = createBufferFunc(createSphereVertices);
exports.createSphereBuffers = createSphereBuffers;
var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
exports.createTruncatedConeBufferInfo = createTruncatedConeBufferInfo;
var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
exports.createTruncatedConeBuffers = createTruncatedConeBuffers;
var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
exports.createXYQuadBufferInfo = createXYQuadBufferInfo;
var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
exports.createXYQuadBuffers = createXYQuadBuffers;
var createCresentBufferInfo = createBufferInfoFunc(createCresentVertices);
exports.createCresentBufferInfo = createCresentBufferInfo;
var createCresentBuffers = createBufferFunc(createCresentVertices);
exports.createCresentBuffers = createCresentBuffers;
var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
exports.createCylinderBufferInfo = createCylinderBufferInfo;
var createCylinderBuffers = createBufferFunc(createCylinderVertices);
exports.createCylinderBuffers = createCylinderBuffers;
var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
exports.createTorusBufferInfo = createTorusBufferInfo;
var createTorusBuffers = createBufferFunc(createTorusVertices);
exports.createTorusBuffers = createTorusBuffers;
var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
exports.createDiscBufferInfo = createDiscBufferInfo;
var createDiscBuffers = createBufferFunc(createDiscVertices);
exports.createDiscBuffers = createDiscBuffers;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  addExtensionsToContext: true,
  getContext: true,
  getWebGLContext: true,
  resizeCanvasToDisplaySize: true,
  setDefaults: true
};
exports.addExtensionsToContext = addExtensionsToContext;
exports.getContext = getContext;
exports.getWebGLContext = getWebGLContext;
exports.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;
exports.setDefaults = setDefaults;

var attributes = _interopRequireWildcard(__webpack_require__(7));

Object.keys(attributes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = attributes[key];
});

var textures = _interopRequireWildcard(__webpack_require__(8));

Object.keys(textures).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = textures[key];
});

var helper = _interopRequireWildcard(__webpack_require__(0));

var utils = _interopRequireWildcard(__webpack_require__(4));

Object.keys(utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = utils[key];
});

var _draw = __webpack_require__(12);

Object.keys(_draw).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _draw[key];
});

var _framebuffers = __webpack_require__(13);

Object.keys(_framebuffers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _framebuffers[key];
});

var _programs = __webpack_require__(5);

Object.keys(_programs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _programs[key];
});

var _typedarrays = __webpack_require__(1);

Object.keys(_typedarrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _typedarrays[key];
});

var _vertexArrays = __webpack_require__(14);

Object.keys(_vertexArrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _vertexArrays[key];
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * The main TWGL module.
 *
 * For most use cases you shouldn't need anything outside this module.
 * Exceptions between the stuff added to twgl-full (v3, m4, primitives)
 *
 * @module twgl
 * @borrows module:twgl/attributes.setAttribInfoBufferFromArray as setAttribInfoBufferFromArray
 * @borrows module:twgl/attributes.createBufferInfoFromArrays as createBufferInfoFromArrays
 * @borrows module:twgl/attributes.createVertexArrayInfo as createVertexArrayInfo
 * @borrows module:twgl/draw.drawBufferInfo as drawBufferInfo
 * @borrows module:twgl/draw.drawObjectList as drawObjectList
 * @borrows module:twgl/framebuffers.createFramebufferInfo as createFramebufferInfo
 * @borrows module:twgl/framebuffers.resizeFramebufferInfo as resizeFramebufferInfo
 * @borrows module:twgl/framebuffers.bindFramebufferInfo as bindFramebufferInfo
 * @borrows module:twgl/programs.createProgramInfo as createProgramInfo
 * @borrows module:twgl/programs.createUniformBlockInfo as createUniformBlockInfo
 * @borrows module:twgl/programs.bindUniformBlock as bindUniformBlock
 * @borrows module:twgl/programs.setUniformBlock as setUniformBlock
 * @borrows module:twgl/programs.setBlockUniforms as setBlockUniforms
 * @borrows module:twgl/programs.setUniforms as setUniforms
 * @borrows module:twgl/programs.setBuffersAndAttributes as setBuffersAndAttributes
 * @borrows module:twgl/textures.setTextureFromArray as setTextureFromArray
 * @borrows module:twgl/textures.createTexture as createTexture
 * @borrows module:twgl/textures.resizeTexture as resizeTexture
 * @borrows module:twgl/textures.createTextures as createTextures
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var defaults = {
  addExtensionsToContext: true
};
/**
 * Various default settings for twgl.
 *
 * Note: You can call this any number of times. Example:
 *
 *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
 *     twgl.setDefaults({ attribPrefix: 'a_' });
 *
 * is equivalent to
 *
 *     twgl.setDefaults({
 *       textureColor: [1, 0, 0, 1],
 *       attribPrefix: 'a_',
 *     });
 *
 * @typedef {Object} Defaults
 * @property {string} attribPrefix The prefix to stick on attributes
 *
 *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 *   as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
 *
 *   In otherwords I'll create arrays of geometry like this
 *
 *       const arrays = {
 *         position: ...
 *         normal: ...
 *         texcoord: ...
 *       };
 *
 *   But need those mapped to attributes and my attributes start with `a_`.
 *
 *   Default: `""`
 *
 * @property {number[]} textureColor Array of 4 values in the range 0 to 1
 *
 *   The default texture color is used when loading textures from
 *   urls. Because the URL will be loaded async we'd like to be
 *   able to use the texture immediately. By putting a 1x1 pixel
 *   color in the texture we can start using the texture before
 *   the URL has loaded.
 *
 *   Default: `[0.5, 0.75, 1, 1]`
 *
 * @property {string} crossOrigin
 *
 *   If not undefined sets the crossOrigin attribute on images
 *   that twgl creates when downloading images for textures.
 *
 *   Also see {@link module:twgl.TextureOptions}.
 *
 * @property {bool} addExtensionsToContext
 *
 *   If true, then, when twgl will try to add any supported WebGL extensions
 *   directly to the context under their normal GL names. For example
 *   if ANGLE_instances_arrays exists then twgl would enable it,
 *   add the functions `vertexAttribDivisor`, `drawArraysInstanced`,
 *   `drawElementsInstanced`, and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR`
 *   to the `WebGLRenderingContext`.
 *
 * @memberOf module:twgl
 */

/**
 * Sets various defaults for twgl.
 *
 * In the interest of terseness which is kind of the point
 * of twgl I've integrated a few of the older functions here
 *
 * @param {module:twgl.Defaults} newDefaults The default settings.
 * @memberOf module:twgl
 */

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
  attributes.setAttributeDefaults_(newDefaults); // eslint-disable-line

  textures.setTextureDefaults_(newDefaults); // eslint-disable-line
}

var prefixRE = /^(.*?)_/;

function addExtensionToContext(gl, extensionName) {
  utils.glEnumToString(gl, 0);
  var ext = gl.getExtension(extensionName);

  if (ext) {
    var enums = {};
    var fnSuffix = prefixRE.exec(extensionName)[1];
    var enumSuffix = '_' + fnSuffix;

    for (var key in ext) {
      var value = ext[key];
      var isFunc = typeof value === 'function';
      var suffix = isFunc ? fnSuffix : enumSuffix;
      var name = key; // examples of where this is not true are WEBGL_compressed_texture_s3tc
      // and WEBGL_compressed_texture_pvrtc

      if (key.endsWith(suffix)) {
        name = key.substring(0, key.length - suffix.length);
      }

      if (gl[name] !== undefined) {
        if (!isFunc && gl[name] !== value) {
          helper.warn(name, gl[name], value, key);
        }
      } else {
        if (isFunc) {
          gl[name] = function (origFn) {
            return function () {
              return origFn.apply(ext, arguments);
            };
          }(value);
        } else {
          gl[name] = value;
          enums[name] = value;
        }
      }
    } // pass the modified enums to glEnumToString


    enums.constructor = {
      name: ext.constructor.name
    };
    utils.glEnumToString(enums, 0);
  }

  return ext;
}
/*
 * If you're wondering why the code doesn't just iterate
 * over all extensions using `gl.getExtensions` is that it's possible
 * some future extension is incompatible with this code. Rather than
 * have thing suddenly break it seems better to manually add to this
 * list.
 *
 */


var supportedExtensions = ['ANGLE_instanced_arrays', 'EXT_blend_minmax', 'EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2', 'EXT_frag_depth', 'EXT_sRGB', 'EXT_shader_texture_lod', 'EXT_texture_filter_anisotropic', 'OES_element_index_uint', 'OES_standard_derivatives', 'OES_texture_float', 'OES_texture_float_linear', 'OES_texture_half_float', 'OES_texture_half_float_linear', 'OES_vertex_array_object', 'WEBGL_color_buffer_float', 'WEBGL_compressed_texture_atc', 'WEBGL_compressed_texture_etc1', 'WEBGL_compressed_texture_pvrtc', 'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_depth_texture', 'WEBGL_draw_buffers'];
/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existance of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */

function addExtensionsToContext(gl) {
  for (var ii = 0; ii < supportedExtensions.length; ++ii) {
    addExtensionToContext(gl, supportedExtensions[ii]);
  }
}
/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */


function create3DContext(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
 * @memberOf module:twgl
 */


function getWebGLContext(canvas, opt_attribs) {
  var gl = create3DContext(canvas, opt_attribs);
  return gl;
}
/**
 * Creates a webgl context.
 *
 * Will return a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *     twgl.isWebGL2(gl);
 *
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */


function createContext(canvas, opt_attribs) {
  var names = ["webgl2", "webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL context.  Will create a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *    function isWebGL2(gl) {
 *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
 *    }
 *
 * Note: For a WebGL1 context will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */


function getContext(canvas, opt_attribs) {
  var gl = createContext(canvas, opt_attribs);
  return gl;
}
/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */


function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  multiplier = Math.max(0, multiplier);
  var width = canvas.clientWidth * multiplier | 0;
  var height = canvas.clientHeight * multiplier | 0;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.drawBufferInfo = drawBufferInfo;
exports.drawObjectList = drawObjectList;

var programs = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Drawing related functions
 *
 * For backward compatibily they are available at both `twgl.draw` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/draw
 */

/**
 * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
 *
 * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
 * but calling this means if you switch from indexed data to non-indexed
 * data you don't have to remember to update your draw call.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
 *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @param {enum} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
 * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
 * @param {number} [offset] An optional offset. Defaults to 0.
 * @param {number} [instanceCount] An optional instanceCount. if set then `drawArraysInstanced` or `drawElementsInstanced` will be called
 * @memberOf module:twgl/draw
 */
function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
  type = type === undefined ? gl.TRIANGLES : type;
  var indices = bufferInfo.indices;
  var elementType = bufferInfo.elementType;
  var numElements = count === undefined ? bufferInfo.numElements : count;
  offset = offset === undefined ? 0 : offset;

  if (elementType || indices) {
    if (instanceCount !== undefined) {
      gl.drawElementsInstanced(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
    } else {
      gl.drawElements(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset);
    }
  } else {
    if (instanceCount !== undefined) {
      gl.drawArraysInstanced(type, offset, numElements, instanceCount);
    } else {
      gl.drawArrays(type, offset, numElements);
    }
  }
}
/**
 * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
 *
 * You need either a `BufferInfo` or a `VertexArrayInfo`.
 *
 * @typedef {Object} DrawObject
 * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In otherwords `undefined` = `true`
 * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
 * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
 * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @property {Object<string, ?>} uniforms The values for the uniforms.
 *   You can pass multiple objects by putting them in an array. For example
 *
 *     var sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     var localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     var drawObj = {
 *       ...
 *       uniforms: [sharedUniforms, localUniforms],
 *     };
 *
 * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
 * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElemnts`. Defaults to bufferInfo.numElements.
 * @property {number} [instanceCount] the number of instances. Defaults to undefined.
 * @memberOf module:twgl
 */

/**
 * Draws a list of objects
 * @param {DrawObject[]} objectsToDraw an array of objects to draw.
 * @memberOf module:twgl/draw
 */


function drawObjectList(gl, objectsToDraw) {
  var lastUsedProgramInfo = null;
  var lastUsedBufferInfo = null;
  objectsToDraw.forEach(function (object) {
    if (object.active === false) {
      return;
    }

    var programInfo = object.programInfo;
    var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
    var bindBuffers = false;
    var type = object.type === undefined ? gl.TRIANGLES : object.type;

    if (programInfo !== lastUsedProgramInfo) {
      lastUsedProgramInfo = programInfo;
      gl.useProgram(programInfo.program); // We have to rebind buffers when changing programs because we
      // only bind buffers the program uses. So if 2 programs use the same
      // bufferInfo but the 1st one uses only positions the when the
      // we switch to the 2nd one some of the attributes will not be on.

      bindBuffers = true;
    } // Setup all the needed attributes.


    if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
      if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
        gl.bindVertexArray(null);
      }

      lastUsedBufferInfo = bufferInfo;
      programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    } // Set the uniforms.


    programs.setUniforms(programInfo, object.uniforms); // Draw

    drawBufferInfo(gl, bufferInfo, type, object.count, object.offset, object.instanceCount);
  });

  if (lastUsedBufferInfo.vertexArrayObject) {
    gl.bindVertexArray(null);
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bindFramebufferInfo = bindFramebufferInfo;
exports.createFramebufferInfo = createFramebufferInfo;
exports.resizeFramebufferInfo = resizeFramebufferInfo;

var textures = _interopRequireWildcard(__webpack_require__(8));

var helper = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Framebuffer related functions
 *
 * For backward compatibily they are available at both `twgl.framebuffer` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/framebuffers
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var UNSIGNED_BYTE = 0x1401;
/* PixelFormat */

var DEPTH_COMPONENT = 0x1902;
var RGBA = 0x1908;
/* Framebuffer Object. */

var RGBA4 = 0x8056;
var RGB5_A1 = 0x8057;
var RGB565 = 0x8D62;
var DEPTH_COMPONENT16 = 0x81A5;
var STENCIL_INDEX = 0x1901;
var STENCIL_INDEX8 = 0x8D48;
var DEPTH_STENCIL = 0x84F9;
var COLOR_ATTACHMENT0 = 0x8CE0;
var DEPTH_ATTACHMENT = 0x8D00;
var STENCIL_ATTACHMENT = 0x8D20;
var DEPTH_STENCIL_ATTACHMENT = 0x821A;
/* TextureWrapMode */

var REPEAT = 0x2901; // eslint-disable-line

var CLAMP_TO_EDGE = 0x812F;
var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

/* TextureMagFilter */

var NEAREST = 0x2600; // eslint-disable-line

var LINEAR = 0x2601;
/* TextureMinFilter */

var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line

var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line

var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line

var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

/**
 * The options for a framebuffer attachment.
 *
 * Note: For a `format` that is a texture include all the texture
 * options from {@link module:twgl.TextureOptions} for example
 * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
 * `auto` defaults to `false` for attachment textures but `min` and `mag` default
 * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
 *
 * @typedef {Object} AttachmentOptions
 * @property {number} [attach] The attachment point. Defaults
 *   to `gl.COLOR_ATTACTMENT0 + ndx` unless type is a depth or stencil type
 *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
 *   on the format or attachment type.
 * @property {number} [format] The format. If one of `gl.RGBA4`,
 *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
 *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
 *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
 * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
 * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
 *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
 * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
 * @property {WebGLObject} [attachment] An existing renderbuffer or texture.
 *    If provided will attach this Object. This allows you to share
 *    attachemnts across framebuffers.
 * @memberOf module:twgl
 */

var defaultAttachments = [{
  format: RGBA,
  type: UNSIGNED_BYTE,
  min: LINEAR,
  wrap: CLAMP_TO_EDGE
}, {
  format: DEPTH_STENCIL
}];
var attachmentsByFormat = {};
attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;

function getAttachmentPointForFormat(format) {
  return attachmentsByFormat[format];
}

var renderbufferFormats = {};
renderbufferFormats[RGBA4] = true;
renderbufferFormats[RGB5_A1] = true;
renderbufferFormats[RGB565] = true;
renderbufferFormats[DEPTH_STENCIL] = true;
renderbufferFormats[DEPTH_COMPONENT16] = true;
renderbufferFormats[STENCIL_INDEX] = true;
renderbufferFormats[STENCIL_INDEX8] = true;

function isRenderbufferFormat(format) {
  return renderbufferFormats[format];
}
/**
 * @typedef {Object} FramebufferInfo
 * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
 * @property {WebGLObject[]} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
 * @memberOf module:twgl
 */

/**
 * Creates a framebuffer and attachments.
 *
 * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 * Passing in a specific size
 *
 *     const width = 256;
 *     const height = 256;
 *     const fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
 *
 * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
 * [WebGL only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
 *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
 * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
 * @memberOf module:twgl/framebuffers
 */


function createFramebufferInfo(gl, attachments, width, height) {
  var target = gl.FRAMEBUFFER;
  var fb = gl.createFramebuffer();
  gl.bindFramebuffer(target, fb);
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  attachments = attachments || defaultAttachments;
  var colorAttachmentCount = 0;
  var framebufferInfo = {
    framebuffer: fb,
    attachments: [],
    width: width,
    height: height
  };
  attachments.forEach(function (attachmentOptions) {
    var attachment = attachmentOptions.attachment;
    var format = attachmentOptions.format;
    var attachmentPoint = getAttachmentPointForFormat(format);

    if (!attachmentPoint) {
      attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
    }

    if (!attachment) {
      if (isRenderbufferFormat(format)) {
        attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
      } else {
        var textureOptions = Object.assign({}, attachmentOptions);
        textureOptions.width = width;
        textureOptions.height = height;

        if (textureOptions.auto === undefined) {
          textureOptions.auto = false;
          textureOptions.min = textureOptions.min || textureOptions.minMag || gl.LINEAR;
          textureOptions.mag = textureOptions.mag || textureOptions.minMag || gl.LINEAR;
          textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || gl.CLAMP_TO_EDGE;
          textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || gl.CLAMP_TO_EDGE;
        }

        attachment = textures.createTexture(gl, textureOptions);
      }
    }

    if (helper.isRenderbuffer(gl, attachment)) {
      gl.framebufferRenderbuffer(target, attachmentPoint, gl.RENDERBUFFER, attachment);
    } else if (helper.isTexture(gl, attachment)) {
      gl.framebufferTexture2D(target, attachmentPoint, attachmentOptions.texTarget || gl.TEXTURE_2D, attachment, attachmentOptions.level || 0);
    } else {
      throw "unknown attachment type";
    }

    framebufferInfo.attachments.push(attachment);
  });
  return framebufferInfo;
}
/**
 * Resizes the attachments of a framebuffer.
 *
 * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
 * because TWGL has no idea the format/type of each attachment.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments
 *         twgl.resizeFramebufferInfo(gl, fbi);
 *       }
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments to match
 *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
 *       }
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
 * @memberOf module:twgl/framebuffers
 */


function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  framebufferInfo.width = width;
  framebufferInfo.height = height;
  attachments = attachments || defaultAttachments;
  attachments.forEach(function (attachmentOptions, ndx) {
    var attachment = framebufferInfo.attachments[ndx];
    var format = attachmentOptions.format;

    if (helper.isRenderbuffer(gl, attachment)) {
      gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
      gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
    } else if (helper.isTexture(gl, attachment)) {
      textures.resizeTexture(gl, attachment, attachmentOptions, width, height);
    } else {
      throw "unknown attachment type";
    }
  });
}
/**
 * Binds a framebuffer
 *
 * This function pretty much soley exists because I spent hours
 * trying to figure out why something I wrote wasn't working only
 * to realize I forget to set the viewport dimensions.
 * My hope is this function will fix that.
 *
 * It is effectively the same as
 *
 *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
 *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 *   If not passed will bind the canvas.
 * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
 * @memberOf module:twgl/framebuffers
 */


function bindFramebufferInfo(gl, framebufferInfo, target) {
  target = target || gl.FRAMEBUFFER;

  if (framebufferInfo) {
    gl.bindFramebuffer(target, framebufferInfo.framebuffer);
    gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
  } else {
    gl.bindFramebuffer(target, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createVertexArrayInfo = createVertexArrayInfo;
exports.createVAOAndSetAttributes = createVAOAndSetAttributes;
exports.createVAOFromBufferInfo = createVAOFromBufferInfo;

var programs = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * vertex array object related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/vertexArrays
 */

/**
 * @typedef {Object} VertexArrayInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
 * @memberOf module:twgl
 */

/**
 * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
 *   assign buffers to specific attributes at creation time. That means they can only be used with programs
 *   who's attributes use the same attribute locations for the same purposes.
 *
 * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
 *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
 *
 * also
 *
 * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
 *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
 *   will affect the Vertex Array Object state.
 *
 * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 *
 *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
 *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
 *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
 *    now attribute D's location.
 *
 *    So, you can pass in both shader 1 and shader 2's programInfo
 *
 * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
 *
 * @memberOf module:twgl/vertexArrays
 */
function createVertexArrayInfo(gl, programInfos, bufferInfo) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  if (!programInfos.length) {
    programInfos = [programInfos];
  }

  programInfos.forEach(function (programInfo) {
    programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  });
  gl.bindVertexArray(null);
  return {
    numElements: bufferInfo.numElements,
    elementType: bufferInfo.elementType,
    vertexArrayObject: vao
  };
}
/**
 * Creates a vertex array object and then sets the attributes on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */


function createVAOAndSetAttributes(gl, setters, attribs, indices) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  programs.setAttributes(setters, attribs);

  if (indices) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
  } // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
  // like when creating buffers for other stuff will mess up this VAO's binding


  gl.bindVertexArray(null);
  return vao;
}
/**
 * Creates a vertex array object and then sets the attributes
 * on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */


function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
  return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
}

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** @module RenderConstants */

/**
 * Various constants meant for use throughout the renderer.
 * @enum
 */
module.exports = {
  /**
   * The ID value to use for "no item" or when an object has been disposed.
   * @const {int}
   */
  ID_NONE: -1,

  /**
   * Optimize for fewer than this number of Drawables sharing the same Skin.
   * Going above this may cause middleware warnings or a performance penalty but should otherwise behave correctly.
   * @const {int}
   */
  SKIN_SHARE_SOFT_LIMIT: 301,

  /**
   * @enum {string}
   */
  Events: {
    /**
     * NativeSizeChanged event
     *
     * @event RenderWebGL#event:NativeSizeChanged
     * @type {object}
     * @property {Array<int>} newSize - the new size of the renderer
     */
    NativeSizeChanged: 'NativeSizeChanged'
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(8);

var twgl = __webpack_require__(0);

var RenderConstants = __webpack_require__(1);
var Silhouette = __webpack_require__(30);

/**
 * Truncate a number into what could be stored in a 32 bit floating point value.
 * @param {number} num Number to truncate.
 * @return {number} Truncated value.
 */
var toFloat32 = function () {
  var memory = new Float32Array(1);
  return function (num) {
    memory[0] = num;
    return memory[0];
  };
}();

var Skin = function (_EventEmitter) {
  _inherits(Skin, _EventEmitter);

  /**
   * Create a Skin, which stores and/or generates textures for use in rendering.
   * @param {int} id - The unique ID for this Skin.
   * @constructor
   */
  function Skin(id) {
    _classCallCheck(this, Skin);

    /** @type {int} */
    var _this = _possibleConstructorReturn(this, (Skin.__proto__ || Object.getPrototypeOf(Skin)).call(this));

    _this._id = id;

    /** @type {Vec3} */
    _this._rotationCenter = twgl.v3.create(0, 0);

    /**
     * The uniforms to be used by the vertex and pixel shaders.
     * Some of these are used by other parts of the renderer as well.
     * @type {Object.<string,*>}
     * @private
     */
    _this._uniforms = {
      /**
       * The nominal (not necessarily current) size of the current skin.
       * @type {Array<number>}
       */
      u_skinSize: [0, 0],

      /**
       * The actual WebGL texture object for the skin.
       * @type {WebGLTexture}
       */
      u_skin: null
    };

    /**
     * A silhouette to store touching data, skins are responsible for keeping it up to date.
     * @private
     */
    _this._silhouette = new Silhouette();

    _this.setMaxListeners(RenderConstants.SKIN_SHARE_SOFT_LIMIT);
    return _this;
  }

  /**
   * Dispose of this object. Do not use it after calling this method.
   */


  _createClass(Skin, [{
    key: 'dispose',
    value: function dispose() {
      this._id = RenderConstants.ID_NONE;
    }

    /**
     * @returns {boolean} true for a raster-style skin (like a BitmapSkin), false for vector-style (like SVGSkin).
     */

  }, {
    key: 'setRotationCenter',


    /**
     * Set the origin, in object space, about which this Skin should rotate.
     * @param {number} x - The x coordinate of the new rotation center.
     * @param {number} y - The y coordinate of the new rotation center.
     * @fires Skin.event:WasAltered
     */
    value: function setRotationCenter(x, y) {
      var emptySkin = this.size[0] === 0 && this.size[1] === 0;
      // Compare a 32 bit x and y value against the stored 32 bit center
      // values.
      var changed = toFloat32(x) !== this._rotationCenter[0] || toFloat32(y) !== this._rotationCenter[1];
      if (!emptySkin && changed) {
        this._rotationCenter[0] = x;
        this._rotationCenter[1] = y;
        this.emit(Skin.Events.WasAltered);
      }
    }

    /**
     * Get the center of the current bounding box
     * @return {Array<number>} the center of the current bounding box
     */

  }, {
    key: 'calculateRotationCenter',
    value: function calculateRotationCenter() {
      return [this.size[0] / 2, this.size[1] / 2];
    }

    /**
     * @abstract
     * @param {Array<number>} scale - The scaling factors to be used.
     * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'getTexture',
    value: function getTexture(scale) {
      return null;
    }

    /**
     * Update and returns the uniforms for this skin.
     * @param {Array<number>} scale - The scaling factors to be used.
     * @returns {object.<string, *>} the shader uniforms to be used when rendering with this Skin.
     */

  }, {
    key: 'getUniforms',
    value: function getUniforms(scale) {
      this._uniforms.u_skin = this.getTexture(scale);
      this._uniforms.u_skinSize = this.size;
      return this._uniforms;
    }

    /**
     * If the skin defers silhouette operations until the last possible minute,
     * this will be called before isTouching uses the silhouette.
     * @abstract
     */

  }, {
    key: 'updateSilhouette',
    value: function updateSilhouette() {}

    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Nearest Neighbor version
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */

  }, {
    key: 'isTouchingNearest',
    value: function isTouchingNearest(vec) {
      this.updateSilhouette();
      return this._silhouette.isTouchingNearest(vec);
    }

    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Linear Interpolation version
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */

  }, {
    key: 'isTouchingLinear',
    value: function isTouchingLinear(vec) {
      this.updateSilhouette();
      return this._silhouette.isTouchingLinear(vec);
    }
  }, {
    key: 'isRaster',
    get: function get() {
      return false;
    }

    /**
     * @return {int} the unique ID for this Skin.
     */

  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /**
     * @returns {Vec3} the origin, in object space, about which this Skin should rotate.
     */

  }, {
    key: 'rotationCenter',
    get: function get() {
      return this._rotationCenter;
    }

    /**
     * @abstract
     * @return {Array<number>} the "native" size, in texels, of this skin.
     */

  }, {
    key: 'size',
    get: function get() {
      return [0, 0];
    }
  }]);

  return Skin;
}(EventEmitter);

/**
 * These are the events which can be emitted by instances of this class.
 * @enum {string}
 */


Skin.Events = {
  /**
   * Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
   * @event Skin.event:WasAltered
   */
  WasAltered: 'WasAltered'
};

module.exports = Skin;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(0);

var ShaderManager = function () {
    /**
     * @param {WebGLRenderingContext} gl WebGL rendering context to create shaders for
     * @constructor
     */
    function ShaderManager(gl) {
        _classCallCheck(this, ShaderManager);

        this._gl = gl;

        /**
         * The cache of all shaders compiled so far, filled on demand.
         * @type {Object<ShaderManager.DRAW_MODE, Array<ProgramInfo>>}
         * @private
         */
        this._shaderCache = {};
        for (var modeName in ShaderManager.DRAW_MODE) {
            if (ShaderManager.DRAW_MODE.hasOwnProperty(modeName)) {
                this._shaderCache[modeName] = [];
            }
        }
    }

    /**
     * Fetch the shader for a particular set of active effects.
     * Build the shader if necessary.
     * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
     * @param {int} effectBits Bitmask representing the enabled effects.
     * @returns {ProgramInfo} The shader's program info.
     */


    _createClass(ShaderManager, [{
        key: 'getShader',
        value: function getShader(drawMode, effectBits) {
            var cache = this._shaderCache[drawMode];
            if (drawMode === ShaderManager.DRAW_MODE.silhouette) {
                // Silhouette mode isn't affected by these effects.
                effectBits &= ~(ShaderManager.EFFECT_INFO.color.mask | ShaderManager.EFFECT_INFO.brightness.mask);
            }
            var shader = cache[effectBits];
            if (!shader) {
                shader = cache[effectBits] = this._buildShader(drawMode, effectBits);
            }
            return shader;
        }

        /**
         * Build the shader for a particular set of active effects.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {int} effectBits Bitmask representing the enabled effects.
         * @returns {ProgramInfo} The new shader's program info.
         * @private
         */

    }, {
        key: '_buildShader',
        value: function _buildShader(drawMode, effectBits) {
            var numEffects = ShaderManager.EFFECTS.length;

            var defines = ['#define DRAW_MODE_' + drawMode];
            for (var index = 0; index < numEffects; ++index) {
                if ((effectBits & 1 << index) !== 0) {
                    defines.push('#define ENABLE_' + ShaderManager.EFFECTS[index]);
                }
            }

            var definesText = defines.join('\n') + '\n';

            /* eslint-disable global-require */
            var vsFullText = definesText + __webpack_require__(28);
            var fsFullText = definesText + __webpack_require__(27);
            /* eslint-enable global-require */

            return twgl.createProgramInfo(this._gl, [vsFullText, fsFullText]);
        }
    }]);

    return ShaderManager;
}();

/**
 * @typedef {object} ShaderManager.Effect
 * @prop {int} mask - The bit in 'effectBits' representing the effect.
 * @prop {function} converter - A conversion function which takes a Scratch value (generally in the range
 *   0..100 or -100..100) and maps it to a value useful to the shader. This
 *   mapping may not be reversible.
 * @prop {boolean} shapeChanges - Whether the effect could change the drawn shape.
 */

/**
 * Mapping of each effect name to info about that effect.
 * @enum {ShaderManager.Effect}
 */


ShaderManager.EFFECT_INFO = {
    /** Color effect */
    color: {
        mask: 1 << 0,
        converter: function converter(x) {
            return x / 200 % 1;
        },
        shapeChanges: false
    },
    /** Fisheye effect */
    fisheye: {
        mask: 1 << 1,
        converter: function converter(x) {
            return Math.max(0, (x + 100) / 100);
        },
        shapeChanges: true
    },
    /** Whirl effect */
    whirl: {
        mask: 1 << 2,
        converter: function converter(x) {
            return -x * Math.PI / 180;
        },
        shapeChanges: true
    },
    /** Pixelate effect */
    pixelate: {
        mask: 1 << 3,
        converter: function converter(x) {
            return Math.abs(x) / 10;
        },
        shapeChanges: true
    },
    /** Mosaic effect */
    mosaic: {
        mask: 1 << 4,
        converter: function converter(x) {
            x = Math.round((Math.abs(x) + 10) / 10);
            /** @todo cap by Math.min(srcWidth, srcHeight) */
            return Math.max(1, Math.min(x, 512));
        },
        shapeChanges: true
    },
    /** Brightness effect */
    brightness: {
        mask: 1 << 5,
        converter: function converter(x) {
            return Math.max(-100, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    },
    /** Ghost effect */
    ghost: {
        mask: 1 << 6,
        converter: function converter(x) {
            return 1 - Math.max(0, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    }
};

/**
 * The name of each supported effect.
 * @type {Array}
 */
ShaderManager.EFFECTS = Object.keys(ShaderManager.EFFECT_INFO);

/**
 * The available draw modes.
 * @readonly
 * @enum {string}
 */
ShaderManager.DRAW_MODE = {
    /**
     * Draw normally.
     */
    default: 'default',

    /**
     * Draw a silhouette using a solid color.
     */
    silhouette: 'silhouette',

    /**
     * Draw only the parts of the drawable which match a particular color.
     */
    colorMask: 'colorMask'
};

module.exports = ShaderManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.7.1
var UnicodeTrie, inflate;

inflate = __webpack_require__(20);

UnicodeTrie = (function() {
  var DATA_BLOCK_LENGTH, DATA_GRANULARITY, DATA_MASK, INDEX_1_OFFSET, INDEX_2_BLOCK_LENGTH, INDEX_2_BMP_LENGTH, INDEX_2_MASK, INDEX_SHIFT, LSCP_INDEX_2_LENGTH, LSCP_INDEX_2_OFFSET, OMITTED_BMP_INDEX_1_LENGTH, SHIFT_1, SHIFT_1_2, SHIFT_2, UTF8_2B_INDEX_2_LENGTH, UTF8_2B_INDEX_2_OFFSET;

  SHIFT_1 = 6 + 5;

  SHIFT_2 = 5;

  SHIFT_1_2 = SHIFT_1 - SHIFT_2;

  OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;

  INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;

  INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;

  INDEX_SHIFT = 2;

  DATA_BLOCK_LENGTH = 1 << SHIFT_2;

  DATA_MASK = DATA_BLOCK_LENGTH - 1;

  LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;

  LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;

  INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;

  UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;

  UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;

  INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;

  DATA_GRANULARITY = 1 << INDEX_SHIFT;

  function UnicodeTrie(data) {
    var isBuffer, uncompressedLength, view;
    isBuffer = typeof data.readUInt32BE === 'function' && typeof data.slice === 'function';
    if (isBuffer || data instanceof Uint8Array) {
      if (isBuffer) {
        this.highStart = data.readUInt32BE(0);
        this.errorValue = data.readUInt32BE(4);
        uncompressedLength = data.readUInt32BE(8);
        data = data.slice(12);
      } else {
        view = new DataView(data.buffer);
        this.highStart = view.getUint32(0);
        this.errorValue = view.getUint32(4);
        uncompressedLength = view.getUint32(8);
        data = data.subarray(12);
      }
      data = inflate(data, new Uint8Array(uncompressedLength));
      data = inflate(data, new Uint8Array(uncompressedLength));
      this.data = new Uint32Array(data.buffer);
    } else {
      this.data = data.data, this.highStart = data.highStart, this.errorValue = data.errorValue;
    }
  }

  UnicodeTrie.prototype.get = function(codePoint) {
    var index;
    if (codePoint < 0 || codePoint > 0x10ffff) {
      return this.errorValue;
    }
    if (codePoint < 0xd800 || (codePoint > 0xdbff && codePoint <= 0xffff)) {
      index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint <= 0xffff) {
      index = (this.data[LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint < this.highStart) {
      index = this.data[(INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH) + (codePoint >> SHIFT_1)];
      index = this.data[index + ((codePoint >> SHIFT_2) & INDEX_2_MASK)];
      index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    return this.data[this.data.length - DATA_GRANULARITY];
  };

  return UnicodeTrie;

})();

module.exports = UnicodeTrie;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var g=Q(30),E=Q(29),C=Q(28);function w(){return Y.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function I(A,B){if(w()<B)throw new RangeError("Invalid typed array length");return Y.TYPED_ARRAY_SUPPORT?(A=new Uint8Array(B)).__proto__=Y.prototype:(null===A&&(A=new Y(B)),A.length=B),A}function Y(A,B,Q){if(!(Y.TYPED_ARRAY_SUPPORT||this instanceof Y))return new Y(A,B,Q);if("number"==typeof A){if("string"==typeof B)throw new Error("If encoding is specified then the first argument must be a string");return D(this,A)}return M(this,A,B,Q)}function M(A,B,Q,g){if("number"==typeof B)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&B instanceof ArrayBuffer?function(A,B,Q,g){if(B.byteLength,Q<0||B.byteLength<Q)throw new RangeError("'offset' is out of bounds");if(B.byteLength<Q+(g||0))throw new RangeError("'length' is out of bounds");B=void 0===Q&&void 0===g?new Uint8Array(B):void 0===g?new Uint8Array(B,Q):new Uint8Array(B,Q,g);Y.TYPED_ARRAY_SUPPORT?(A=B).__proto__=Y.prototype:A=c(A,B);return A}(A,B,Q,g):"string"==typeof B?function(A,B,Q){"string"==typeof Q&&""!==Q||(Q="utf8");if(!Y.isEncoding(Q))throw new TypeError('"encoding" must be a valid string encoding');var g=0|i(B,Q),E=(A=I(A,g)).write(B,Q);E!==g&&(A=A.slice(0,E));return A}(A,B,Q):function(A,B){if(Y.isBuffer(B)){var Q=0|U(B.length);return 0===(A=I(A,Q)).length?A:(B.copy(A,0,0,Q),A)}if(B){if("undefined"!=typeof ArrayBuffer&&B.buffer instanceof ArrayBuffer||"length"in B)return"number"!=typeof B.length||(g=B.length)!=g?I(A,0):c(A,B);if("Buffer"===B.type&&C(B.data))return c(A,B.data)}var g;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(A,B)}function F(A){if("number"!=typeof A)throw new TypeError('"size" argument must be a number');if(A<0)throw new RangeError('"size" argument must not be negative')}function D(A,B){if(F(B),A=I(A,B<0?0:0|U(B)),!Y.TYPED_ARRAY_SUPPORT)for(var Q=0;Q<B;++Q)A[Q]=0;return A}function c(A,B){var Q=B.length<0?0:0|U(B.length);A=I(A,Q);for(var g=0;g<Q;g+=1)A[g]=255&B[g];return A}function U(A){if(A>=w())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w().toString(16)+" bytes");return 0|A}function i(A,B){if(Y.isBuffer(A))return A.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(A)||A instanceof ArrayBuffer))return A.byteLength;"string"!=typeof A&&(A=""+A);var Q=A.length;if(0===Q)return 0;for(var g=!1;;)switch(B){case"ascii":case"latin1":case"binary":return Q;case"utf8":case"utf-8":case void 0:return W(A).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*Q;case"hex":return Q>>>1;case"base64":return u(A).length;default:if(g)return W(A).length;B=(""+B).toLowerCase(),g=!0}}function G(A,B,Q){var g=A[B];A[B]=A[Q],A[Q]=g}function s(A,B,Q,g,E){if(0===A.length)return-1;if("string"==typeof Q?(g=Q,Q=0):Q>2147483647?Q=2147483647:Q<-2147483648&&(Q=-2147483648),Q=+Q,isNaN(Q)&&(Q=E?0:A.length-1),Q<0&&(Q=A.length+Q),Q>=A.length){if(E)return-1;Q=A.length-1}else if(Q<0){if(!E)return-1;Q=0}if("string"==typeof B&&(B=Y.from(B,g)),Y.isBuffer(B))return 0===B.length?-1:N(A,B,Q,g,E);if("number"==typeof B)return B&=255,Y.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?E?Uint8Array.prototype.indexOf.call(A,B,Q):Uint8Array.prototype.lastIndexOf.call(A,B,Q):N(A,[B],Q,g,E);throw new TypeError("val must be string, number or Buffer")}function N(A,B,Q,g,E){var C,w=1,I=A.length,Y=B.length;if(void 0!==g&&("ucs2"===(g=String(g).toLowerCase())||"ucs-2"===g||"utf16le"===g||"utf-16le"===g)){if(A.length<2||B.length<2)return-1;w=2,I/=2,Y/=2,Q/=2}function M(A,B){return 1===w?A[B]:A.readUInt16BE(B*w)}if(E){var F=-1;for(C=Q;C<I;C++)if(M(A,C)===M(B,-1===F?0:C-F)){if(-1===F&&(F=C),C-F+1===Y)return F*w}else-1!==F&&(C-=C-F),F=-1}else for(Q+Y>I&&(Q=I-Y),C=Q;C>=0;C--){for(var D=!0,c=0;c<Y;c++)if(M(A,C+c)!==M(B,c)){D=!1;break}if(D)return C}return-1}function h(A,B,Q,g){Q=Number(Q)||0;var E=A.length-Q;g?(g=Number(g))>E&&(g=E):g=E;var C=B.length;if(C%2!=0)throw new TypeError("Invalid hex string");g>C/2&&(g=C/2);for(var w=0;w<g;++w){var I=parseInt(B.substr(2*w,2),16);if(isNaN(I))return w;A[Q+w]=I}return w}function H(A,B,Q,g){return V(W(B,A.length-Q),A,Q,g)}function o(A,B,Q,g){return V(function(A){for(var B=[],Q=0;Q<A.length;++Q)B.push(255&A.charCodeAt(Q));return B}(B),A,Q,g)}function J(A,B,Q,g){return o(A,B,Q,g)}function t(A,B,Q,g){return V(u(B),A,Q,g)}function R(A,B,Q,g){return V(function(A,B){for(var Q,g,E,C=[],w=0;w<A.length&&!((B-=2)<0);++w)Q=A.charCodeAt(w),g=Q>>8,E=Q%256,C.push(E),C.push(g);return C}(B,A.length-Q),A,Q,g)}function e(A,B,Q){return 0===B&&Q===A.length?g.fromByteArray(A):g.fromByteArray(A.slice(B,Q))}function n(A,B,Q){Q=Math.min(A.length,Q);for(var g=[],E=B;E<Q;){var C,w,I,Y,M=A[E],F=null,D=M>239?4:M>223?3:M>191?2:1;if(E+D<=Q)switch(D){case 1:M<128&&(F=M);break;case 2:128==(192&(C=A[E+1]))&&(Y=(31&M)<<6|63&C)>127&&(F=Y);break;case 3:C=A[E+1],w=A[E+2],128==(192&C)&&128==(192&w)&&(Y=(15&M)<<12|(63&C)<<6|63&w)>2047&&(Y<55296||Y>57343)&&(F=Y);break;case 4:C=A[E+1],w=A[E+2],I=A[E+3],128==(192&C)&&128==(192&w)&&128==(192&I)&&(Y=(15&M)<<18|(63&C)<<12|(63&w)<<6|63&I)>65535&&Y<1114112&&(F=Y)}null===F?(F=65533,D=1):F>65535&&(F-=65536,g.push(F>>>10&1023|55296),F=56320|1023&F),g.push(F),E+=D}return function(A){var B=A.length;if(B<=r)return String.fromCharCode.apply(String,A);var Q="",g=0;for(;g<B;)Q+=String.fromCharCode.apply(String,A.slice(g,g+=r));return Q}(g)}B.Buffer=Y,B.SlowBuffer=function(A){+A!=A&&(A=0);return Y.alloc(+A)},B.INSPECT_MAX_BYTES=50,Y.TYPED_ARRAY_SUPPORT=void 0!==A.TYPED_ARRAY_SUPPORT?A.TYPED_ARRAY_SUPPORT:function(){try{var A=new Uint8Array(1);return A.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===A.foo()&&"function"==typeof A.subarray&&0===A.subarray(1,1).byteLength}catch(A){return!1}}(),B.kMaxLength=w(),Y.poolSize=8192,Y._augment=function(A){return A.__proto__=Y.prototype,A},Y.from=function(A,B,Q){return M(null,A,B,Q)},Y.TYPED_ARRAY_SUPPORT&&(Y.prototype.__proto__=Uint8Array.prototype,Y.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Y[Symbol.species]===Y&&Object.defineProperty(Y,Symbol.species,{value:null,configurable:!0})),Y.alloc=function(A,B,Q){return function(A,B,Q,g){return F(B),B<=0?I(A,B):void 0!==Q?"string"==typeof g?I(A,B).fill(Q,g):I(A,B).fill(Q):I(A,B)}(null,A,B,Q)},Y.allocUnsafe=function(A){return D(null,A)},Y.allocUnsafeSlow=function(A){return D(null,A)},Y.isBuffer=function(A){return!(null==A||!A._isBuffer)},Y.compare=function(A,B){if(!Y.isBuffer(A)||!Y.isBuffer(B))throw new TypeError("Arguments must be Buffers");if(A===B)return 0;for(var Q=A.length,g=B.length,E=0,C=Math.min(Q,g);E<C;++E)if(A[E]!==B[E]){Q=A[E],g=B[E];break}return Q<g?-1:g<Q?1:0},Y.isEncoding=function(A){switch(String(A).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Y.concat=function(A,B){if(!C(A))throw new TypeError('"list" argument must be an Array of Buffers');if(0===A.length)return Y.alloc(0);var Q;if(void 0===B)for(B=0,Q=0;Q<A.length;++Q)B+=A[Q].length;var g=Y.allocUnsafe(B),E=0;for(Q=0;Q<A.length;++Q){var w=A[Q];if(!Y.isBuffer(w))throw new TypeError('"list" argument must be an Array of Buffers');w.copy(g,E),E+=w.length}return g},Y.byteLength=i,Y.prototype._isBuffer=!0,Y.prototype.swap16=function(){var A=this.length;if(A%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var B=0;B<A;B+=2)G(this,B,B+1);return this},Y.prototype.swap32=function(){var A=this.length;if(A%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var B=0;B<A;B+=4)G(this,B,B+3),G(this,B+1,B+2);return this},Y.prototype.swap64=function(){var A=this.length;if(A%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var B=0;B<A;B+=8)G(this,B,B+7),G(this,B+1,B+6),G(this,B+2,B+5),G(this,B+3,B+4);return this},Y.prototype.toString=function(){var A=0|this.length;return 0===A?"":0===arguments.length?n(this,0,A):function(A,B,Q){var g=!1;if((void 0===B||B<0)&&(B=0),B>this.length)return"";if((void 0===Q||Q>this.length)&&(Q=this.length),Q<=0)return"";if((Q>>>=0)<=(B>>>=0))return"";for(A||(A="utf8");;)switch(A){case"hex":return j(this,B,Q);case"utf8":case"utf-8":return n(this,B,Q);case"ascii":return a(this,B,Q);case"latin1":case"binary":return f(this,B,Q);case"base64":return e(this,B,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,B,Q);default:if(g)throw new TypeError("Unknown encoding: "+A);A=(A+"").toLowerCase(),g=!0}}.apply(this,arguments)},Y.prototype.equals=function(A){if(!Y.isBuffer(A))throw new TypeError("Argument must be a Buffer");return this===A||0===Y.compare(this,A)},Y.prototype.inspect=function(){var A="",Q=B.INSPECT_MAX_BYTES;return this.length>0&&(A=this.toString("hex",0,Q).match(/.{2}/g).join(" "),this.length>Q&&(A+=" ... ")),"<Buffer "+A+">"},Y.prototype.compare=function(A,B,Q,g,E){if(!Y.isBuffer(A))throw new TypeError("Argument must be a Buffer");if(void 0===B&&(B=0),void 0===Q&&(Q=A?A.length:0),void 0===g&&(g=0),void 0===E&&(E=this.length),B<0||Q>A.length||g<0||E>this.length)throw new RangeError("out of range index");if(g>=E&&B>=Q)return 0;if(g>=E)return-1;if(B>=Q)return 1;if(B>>>=0,Q>>>=0,g>>>=0,E>>>=0,this===A)return 0;for(var C=E-g,w=Q-B,I=Math.min(C,w),M=this.slice(g,E),F=A.slice(B,Q),D=0;D<I;++D)if(M[D]!==F[D]){C=M[D],w=F[D];break}return C<w?-1:w<C?1:0},Y.prototype.includes=function(A,B,Q){return-1!==this.indexOf(A,B,Q)},Y.prototype.indexOf=function(A,B,Q){return s(this,A,B,Q,!0)},Y.prototype.lastIndexOf=function(A,B,Q){return s(this,A,B,Q,!1)},Y.prototype.write=function(A,B,Q,g){if(void 0===B)g="utf8",Q=this.length,B=0;else if(void 0===Q&&"string"==typeof B)g=B,Q=this.length,B=0;else{if(!isFinite(B))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");B|=0,isFinite(Q)?(Q|=0,void 0===g&&(g="utf8")):(g=Q,Q=void 0)}var E=this.length-B;if((void 0===Q||Q>E)&&(Q=E),A.length>0&&(Q<0||B<0)||B>this.length)throw new RangeError("Attempt to write outside buffer bounds");g||(g="utf8");for(var C=!1;;)switch(g){case"hex":return h(this,A,B,Q);case"utf8":case"utf-8":return H(this,A,B,Q);case"ascii":return o(this,A,B,Q);case"latin1":case"binary":return J(this,A,B,Q);case"base64":return t(this,A,B,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,A,B,Q);default:if(C)throw new TypeError("Unknown encoding: "+g);g=(""+g).toLowerCase(),C=!0}},Y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var r=4096;function a(A,B,Q){var g="";Q=Math.min(A.length,Q);for(var E=B;E<Q;++E)g+=String.fromCharCode(127&A[E]);return g}function f(A,B,Q){var g="";Q=Math.min(A.length,Q);for(var E=B;E<Q;++E)g+=String.fromCharCode(A[E]);return g}function j(A,B,Q){var g=A.length;(!B||B<0)&&(B=0),(!Q||Q<0||Q>g)&&(Q=g);for(var E="",C=B;C<Q;++C)E+=l(A[C]);return E}function x(A,B,Q){for(var g=A.slice(B,Q),E="",C=0;C<g.length;C+=2)E+=String.fromCharCode(g[C]+256*g[C+1]);return E}function k(A,B,Q){if(A%1!=0||A<0)throw new RangeError("offset is not uint");if(A+B>Q)throw new RangeError("Trying to access beyond buffer length")}function y(A,B,Q,g,E,C){if(!Y.isBuffer(A))throw new TypeError('"buffer" argument must be a Buffer instance');if(B>E||B<C)throw new RangeError('"value" argument is out of bounds');if(Q+g>A.length)throw new RangeError("Index out of range")}function T(A,B,Q,g){B<0&&(B=65535+B+1);for(var E=0,C=Math.min(A.length-Q,2);E<C;++E)A[Q+E]=(B&255<<8*(g?E:1-E))>>>8*(g?E:1-E)}function z(A,B,Q,g){B<0&&(B=4294967295+B+1);for(var E=0,C=Math.min(A.length-Q,4);E<C;++E)A[Q+E]=B>>>8*(g?E:3-E)&255}function d(A,B,Q,g,E,C){if(Q+g>A.length)throw new RangeError("Index out of range");if(Q<0)throw new RangeError("Index out of range")}function m(A,B,Q,g,C){return C||d(A,0,Q,4),E.write(A,B,Q,g,23,4),Q+4}function L(A,B,Q,g,C){return C||d(A,0,Q,8),E.write(A,B,Q,g,52,8),Q+8}Y.prototype.slice=function(A,B){var Q,g=this.length;if(A=~~A,B=void 0===B?g:~~B,A<0?(A+=g)<0&&(A=0):A>g&&(A=g),B<0?(B+=g)<0&&(B=0):B>g&&(B=g),B<A&&(B=A),Y.TYPED_ARRAY_SUPPORT)(Q=this.subarray(A,B)).__proto__=Y.prototype;else{var E=B-A;Q=new Y(E,void 0);for(var C=0;C<E;++C)Q[C]=this[C+A]}return Q},Y.prototype.readUIntLE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=this[A],E=1,C=0;++C<B&&(E*=256);)g+=this[A+C]*E;return g},Y.prototype.readUIntBE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=this[A+--B],E=1;B>0&&(E*=256);)g+=this[A+--B]*E;return g},Y.prototype.readUInt8=function(A,B){return B||k(A,1,this.length),this[A]},Y.prototype.readUInt16LE=function(A,B){return B||k(A,2,this.length),this[A]|this[A+1]<<8},Y.prototype.readUInt16BE=function(A,B){return B||k(A,2,this.length),this[A]<<8|this[A+1]},Y.prototype.readUInt32LE=function(A,B){return B||k(A,4,this.length),(this[A]|this[A+1]<<8|this[A+2]<<16)+16777216*this[A+3]},Y.prototype.readUInt32BE=function(A,B){return B||k(A,4,this.length),16777216*this[A]+(this[A+1]<<16|this[A+2]<<8|this[A+3])},Y.prototype.readIntLE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=this[A],E=1,C=0;++C<B&&(E*=256);)g+=this[A+C]*E;return g>=(E*=128)&&(g-=Math.pow(2,8*B)),g},Y.prototype.readIntBE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=B,E=1,C=this[A+--g];g>0&&(E*=256);)C+=this[A+--g]*E;return C>=(E*=128)&&(C-=Math.pow(2,8*B)),C},Y.prototype.readInt8=function(A,B){return B||k(A,1,this.length),128&this[A]?-1*(255-this[A]+1):this[A]},Y.prototype.readInt16LE=function(A,B){B||k(A,2,this.length);var Q=this[A]|this[A+1]<<8;return 32768&Q?4294901760|Q:Q},Y.prototype.readInt16BE=function(A,B){B||k(A,2,this.length);var Q=this[A+1]|this[A]<<8;return 32768&Q?4294901760|Q:Q},Y.prototype.readInt32LE=function(A,B){return B||k(A,4,this.length),this[A]|this[A+1]<<8|this[A+2]<<16|this[A+3]<<24},Y.prototype.readInt32BE=function(A,B){return B||k(A,4,this.length),this[A]<<24|this[A+1]<<16|this[A+2]<<8|this[A+3]},Y.prototype.readFloatLE=function(A,B){return B||k(A,4,this.length),E.read(this,A,!0,23,4)},Y.prototype.readFloatBE=function(A,B){return B||k(A,4,this.length),E.read(this,A,!1,23,4)},Y.prototype.readDoubleLE=function(A,B){return B||k(A,8,this.length),E.read(this,A,!0,52,8)},Y.prototype.readDoubleBE=function(A,B){return B||k(A,8,this.length),E.read(this,A,!1,52,8)},Y.prototype.writeUIntLE=function(A,B,Q,g){(A=+A,B|=0,Q|=0,g)||y(this,A,B,Q,Math.pow(2,8*Q)-1,0);var E=1,C=0;for(this[B]=255&A;++C<Q&&(E*=256);)this[B+C]=A/E&255;return B+Q},Y.prototype.writeUIntBE=function(A,B,Q,g){(A=+A,B|=0,Q|=0,g)||y(this,A,B,Q,Math.pow(2,8*Q)-1,0);var E=Q-1,C=1;for(this[B+E]=255&A;--E>=0&&(C*=256);)this[B+E]=A/C&255;return B+Q},Y.prototype.writeUInt8=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,1,255,0),Y.TYPED_ARRAY_SUPPORT||(A=Math.floor(A)),this[B]=255&A,B+1},Y.prototype.writeUInt16LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,65535,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8):T(this,A,B,!0),B+2},Y.prototype.writeUInt16BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,65535,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>8,this[B+1]=255&A):T(this,A,B,!1),B+2},Y.prototype.writeUInt32LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,4294967295,0),Y.TYPED_ARRAY_SUPPORT?(this[B+3]=A>>>24,this[B+2]=A>>>16,this[B+1]=A>>>8,this[B]=255&A):z(this,A,B,!0),B+4},Y.prototype.writeUInt32BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,4294967295,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>24,this[B+1]=A>>>16,this[B+2]=A>>>8,this[B+3]=255&A):z(this,A,B,!1),B+4},Y.prototype.writeIntLE=function(A,B,Q,g){if(A=+A,B|=0,!g){var E=Math.pow(2,8*Q-1);y(this,A,B,Q,E-1,-E)}var C=0,w=1,I=0;for(this[B]=255&A;++C<Q&&(w*=256);)A<0&&0===I&&0!==this[B+C-1]&&(I=1),this[B+C]=(A/w>>0)-I&255;return B+Q},Y.prototype.writeIntBE=function(A,B,Q,g){if(A=+A,B|=0,!g){var E=Math.pow(2,8*Q-1);y(this,A,B,Q,E-1,-E)}var C=Q-1,w=1,I=0;for(this[B+C]=255&A;--C>=0&&(w*=256);)A<0&&0===I&&0!==this[B+C+1]&&(I=1),this[B+C]=(A/w>>0)-I&255;return B+Q},Y.prototype.writeInt8=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,1,127,-128),Y.TYPED_ARRAY_SUPPORT||(A=Math.floor(A)),A<0&&(A=255+A+1),this[B]=255&A,B+1},Y.prototype.writeInt16LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,32767,-32768),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8):T(this,A,B,!0),B+2},Y.prototype.writeInt16BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,32767,-32768),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>8,this[B+1]=255&A):T(this,A,B,!1),B+2},Y.prototype.writeInt32LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,2147483647,-2147483648),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8,this[B+2]=A>>>16,this[B+3]=A>>>24):z(this,A,B,!0),B+4},Y.prototype.writeInt32BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,2147483647,-2147483648),A<0&&(A=4294967295+A+1),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>24,this[B+1]=A>>>16,this[B+2]=A>>>8,this[B+3]=255&A):z(this,A,B,!1),B+4},Y.prototype.writeFloatLE=function(A,B,Q){return m(this,A,B,!0,Q)},Y.prototype.writeFloatBE=function(A,B,Q){return m(this,A,B,!1,Q)},Y.prototype.writeDoubleLE=function(A,B,Q){return L(this,A,B,!0,Q)},Y.prototype.writeDoubleBE=function(A,B,Q){return L(this,A,B,!1,Q)},Y.prototype.copy=function(A,B,Q,g){if(Q||(Q=0),g||0===g||(g=this.length),B>=A.length&&(B=A.length),B||(B=0),g>0&&g<Q&&(g=Q),g===Q)return 0;if(0===A.length||0===this.length)return 0;if(B<0)throw new RangeError("targetStart out of bounds");if(Q<0||Q>=this.length)throw new RangeError("sourceStart out of bounds");if(g<0)throw new RangeError("sourceEnd out of bounds");g>this.length&&(g=this.length),A.length-B<g-Q&&(g=A.length-B+Q);var E,C=g-Q;if(this===A&&Q<B&&B<g)for(E=C-1;E>=0;--E)A[E+B]=this[E+Q];else if(C<1e3||!Y.TYPED_ARRAY_SUPPORT)for(E=0;E<C;++E)A[E+B]=this[E+Q];else Uint8Array.prototype.set.call(A,this.subarray(Q,Q+C),B);return C},Y.prototype.fill=function(A,B,Q,g){if("string"==typeof A){if("string"==typeof B?(g=B,B=0,Q=this.length):"string"==typeof Q&&(g=Q,Q=this.length),1===A.length){var E=A.charCodeAt(0);E<256&&(A=E)}if(void 0!==g&&"string"!=typeof g)throw new TypeError("encoding must be a string");if("string"==typeof g&&!Y.isEncoding(g))throw new TypeError("Unknown encoding: "+g)}else"number"==typeof A&&(A&=255);if(B<0||this.length<B||this.length<Q)throw new RangeError("Out of range index");if(Q<=B)return this;var C;if(B>>>=0,Q=void 0===Q?this.length:Q>>>0,A||(A=0),"number"==typeof A)for(C=B;C<Q;++C)this[C]=A;else{var w=Y.isBuffer(A)?A:W(new Y(A,g).toString()),I=w.length;for(C=0;C<Q-B;++C)this[C+B]=w[C%I]}return this};var S=/[^+\/0-9A-Za-z-_]/g;function l(A){return A<16?"0"+A.toString(16):A.toString(16)}function W(A,B){var Q;B=B||1/0;for(var g=A.length,E=null,C=[],w=0;w<g;++w){if((Q=A.charCodeAt(w))>55295&&Q<57344){if(!E){if(Q>56319){(B-=3)>-1&&C.push(239,191,189);continue}if(w+1===g){(B-=3)>-1&&C.push(239,191,189);continue}E=Q;continue}if(Q<56320){(B-=3)>-1&&C.push(239,191,189),E=Q;continue}Q=65536+(E-55296<<10|Q-56320)}else E&&(B-=3)>-1&&C.push(239,191,189);if(E=null,Q<128){if((B-=1)<0)break;C.push(Q)}else if(Q<2048){if((B-=2)<0)break;C.push(Q>>6|192,63&Q|128)}else if(Q<65536){if((B-=3)<0)break;C.push(Q>>12|224,Q>>6&63|128,63&Q|128)}else{if(!(Q<1114112))throw new Error("Invalid code point");if((B-=4)<0)break;C.push(Q>>18|240,Q>>12&63|128,Q>>6&63|128,63&Q|128)}}return C}function u(A){return g.toByteArray(function(A){if((A=function(A){return A.trim?A.trim():A.replace(/^\s+|\s+$/g,"")}(A).replace(S,"")).length<2)return"";for(;A.length%4!=0;)A+="=";return A}(A))}function V(A,B,Q,g){for(var E=0;E<g&&!(E+Q>=B.length||E>=A.length);++E)B[E+Q]=A[E];return E}}).call(this,Q(1))},function(A,B){var Q,g,E=A.exports={};function C(){throw new Error("setTimeout has not been defined")}function w(){throw new Error("clearTimeout has not been defined")}function I(A){if(Q===setTimeout)return setTimeout(A,0);if((Q===C||!Q)&&setTimeout)return Q=setTimeout,setTimeout(A,0);try{return Q(A,0)}catch(B){try{return Q.call(null,A,0)}catch(B){return Q.call(this,A,0)}}}!function(){try{Q="function"==typeof setTimeout?setTimeout:C}catch(A){Q=C}try{g="function"==typeof clearTimeout?clearTimeout:w}catch(A){g=w}}();var Y,M=[],F=!1,D=-1;function c(){F&&Y&&(F=!1,Y.length?M=Y.concat(M):D=-1,M.length&&U())}function U(){if(!F){var A=I(c);F=!0;for(var B=M.length;B;){for(Y=M,M=[];++D<B;)Y&&Y[D].run();D=-1,B=M.length}Y=null,F=!1,function(A){if(g===clearTimeout)return clearTimeout(A);if((g===w||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(A);try{g(A)}catch(B){try{return g.call(null,A)}catch(B){return g.call(this,A)}}}(A)}}function i(A,B){this.fun=A,this.array=B}function G(){}E.nextTick=function(A){var B=new Array(arguments.length-1);if(arguments.length>1)for(var Q=1;Q<arguments.length;Q++)B[Q-1]=arguments[Q];M.push(new i(A,B)),1!==M.length||F||I(U)},i.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={},E.on=G,E.addListener=G,E.once=G,E.off=G,E.removeListener=G,E.removeAllListeners=G,E.emit=G,E.prependListener=G,E.prependOnceListener=G,E.listeners=function(A){return[]},E.binding=function(A){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(A){throw new Error("process.chdir is not supported")},E.umask=function(){return 0}},function(A,B,Q){(function(A,B){!function(A,Q){"use strict";if(!A.setImmediate){var g,E,C,w,I,Y=1,M={},F=!1,D=A.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(A);c=c&&c.setTimeout?c:A,"[object process]"==={}.toString.call(A.process)?g=function(A){B.nextTick(function(){i(A)})}:!function(){if(A.postMessage&&!A.importScripts){var B=!0,Q=A.onmessage;return A.onmessage=function(){B=!1},A.postMessage("","*"),A.onmessage=Q,B}}()?A.MessageChannel?((C=new MessageChannel).port1.onmessage=function(A){i(A.data)},g=function(A){C.port2.postMessage(A)}):D&&"onreadystatechange"in D.createElement("script")?(E=D.documentElement,g=function(A){var B=D.createElement("script");B.onreadystatechange=function(){i(A),B.onreadystatechange=null,E.removeChild(B),B=null},E.appendChild(B)}):g=function(A){setTimeout(i,0,A)}:(w="setImmediate$"+Math.random()+"$",I=function(B){B.source===A&&"string"==typeof B.data&&0===B.data.indexOf(w)&&i(+B.data.slice(w.length))},A.addEventListener?A.addEventListener("message",I,!1):A.attachEvent("onmessage",I),g=function(B){A.postMessage(w+B,"*")}),c.setImmediate=function(A){"function"!=typeof A&&(A=new Function(""+A));for(var B=new Array(arguments.length-1),Q=0;Q<B.length;Q++)B[Q]=arguments[Q+1];var E={callback:A,args:B};return M[Y]=E,g(Y),Y++},c.clearImmediate=U}function U(A){delete M[A]}function i(A){if(F)setTimeout(i,0,A);else{var B=M[A];if(B){F=!0;try{!function(A){var B=A.callback,g=A.args;switch(g.length){case 0:B();break;case 1:B(g[0]);break;case 2:B(g[0],g[1]);break;case 3:B(g[0],g[1],g[2]);break;default:B.apply(Q,g)}}(B)}finally{U(A),F=!1}}}}}("undefined"==typeof self?void 0===A?this:A:self)}).call(this,Q(1),Q(32))},function(A,B,Q){(function(A){var g=void 0!==A&&A||"undefined"!=typeof self&&self||window,E=Function.prototype.apply;function C(A,B){this._id=A,this._clearFn=B}B.setTimeout=function(){return new C(E.call(setTimeout,g,arguments),clearTimeout)},B.setInterval=function(){return new C(E.call(setInterval,g,arguments),clearInterval)},B.clearTimeout=B.clearInterval=function(A){A&&A.close()},C.prototype.unref=C.prototype.ref=function(){},C.prototype.close=function(){this._clearFn.call(g,this._id)},B.enroll=function(A,B){clearTimeout(A._idleTimeoutId),A._idleTimeout=B},B.unenroll=function(A){clearTimeout(A._idleTimeoutId),A._idleTimeout=-1},B._unrefActive=B.active=function(A){clearTimeout(A._idleTimeoutId);var B=A._idleTimeout;B>=0&&(A._idleTimeoutId=setTimeout(function(){A._onTimeout&&A._onTimeout()},B))},Q(33),B.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==A&&A.setImmediate||this&&this.setImmediate,B.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==A&&A.clearImmediate||this&&this.clearImmediate}).call(this,Q(1))},function(A,B,Q){(function(A,B,g){var E,C,w=w||self,I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol?"symbol":typeof A};if(function A(B,Q,g){function C(I,Y){if(!Q[I]){if(!B[I]){if(!Y&&("function"==typeof E&&E))return E(I,!0);if(w)return w(I,!0);var M=new Error("Cannot find module '"+I+"'");throw M.code="MODULE_NOT_FOUND",M}var F=Q[I]={exports:{}};B[I][0].call(F.exports,function(A){var Q=B[I][1][A];return C(Q||A)},F,F.exports,A,B,Q,g)}return Q[I].exports}for(var w="function"==typeof E&&E,I=0;I<g.length;I++)C(g[I]);return C}({1:[function(B,Q,g){(function(A,Q,g,E,C,Y,M,F){function D(B){U(),A.stdout.write(B),K=B.length}function U(){for(;K-- >0;)A.stdout.write("\b")}function i(){}function G(A){if(void 0===A)return!1;if("function"!=typeof A)throw new Error("Callback must be a function");return!0}function s(A,B){if("string"==typeof A&&(A=new Error(A)),"function"==typeof B)return B.call(this,A);throw A}function N(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var A=arguments[0],B=arguments[1],Q=arguments[2];if("number"==typeof arguments[2]){this._background=arguments[2];Q=arguments[3]}if(void 0===Q&&(Q=i),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);this.bitmap={data:new g(A*B*4),width:A,height:B};for(var E=0;E<this.bitmap.data.length;E+=4)this.bitmap.data.writeUInt32BE(this._background,E);Q.call(this,null,this)}else if("object"==I(arguments[0])&&arguments[0].constructor==N){var C=arguments[0];if(void 0===(Q=arguments[1])&&(Q=i),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);var w=new g(C.bitmap.data.length);C.scan(0,0,C.bitmap.width,C.bitmap.height,function(A,B,Q){var g=C.bitmap.data.readUInt32BE(Q,!0);w.writeUInt32BE(g,Q,!0)}),this.bitmap={data:w,width:C.bitmap.width,height:C.bitmap.height},this._quality=C._quality,this._deflateLevel=C._deflateLevel,this._deflateStrategy=C._deflateStrategy,this._filterType=C._filterType,this._rgba=C._rgba,this._background=C._background,Q.call(this,null,this)}else if(l({exact:!0}).test(arguments[0])){var Y=arguments[0];if(void 0===(Q=arguments[1])&&(Q=i),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);var M=this;e(Y,function(A,B,E){if(A)return s.call(M,A,Q);if("object"!=(void 0===E?"undefined":I(E))||!g.isBuffer(E))return s.call(M,"Could not load Buffer from URL <"+Y+"> (HTTP: "+B.statusCode+")",Q);var C=h(E);return"string"!=typeof C?s.call(M,"Could not find MIME for Buffer <"+Y+"> (HTTP: "+B.statusCode+")",Q):void H.call(M,E,C,Q)})}else if("string"==typeof arguments[0]){var F=arguments[0];if(void 0===(Q=arguments[1])&&(Q=i),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);M=this;!function(A,B){T(A,0,262,function(A,Q){if(!A){var g=z(Q);return B&&B(null,g&&g.mime||"")}B(null,"")})}(F,function(A,B){R.readFile(F,function(A,g){return A?s.call(M,A,Q):void H.call(M,g,B,Q)})})}else{if("object"!=I(arguments[0]))return s.call(this,"No matching constructor overloading was found. Please see the docs for how to call the Jimp constructor.",Q);var D=arguments[0],c=h(D);Q=arguments[1];if(!g.isBuffer(D))return s.call(this,"data must be a Buffer",Q);if("string"!=typeof c)return s.call(this,"mime must be a string",Q);if("function"!=typeof Q)return s.call(this,"cb must be a function",Q);H.call(this,D,c,Q)}}function h(A,B){var Q=z(A);return Q?Q.mime:B?f.lookup(B):null}function H(A,B,Q){var E=this;switch(this._originalMime=B,B.toLowerCase()){case N.MIME_PNG:(new n).parse(A,function(A,B){return A?s.call(E,A,Q):(E.bitmap={data:new g(B.data),width:B.width,height:B.height},Q.call(E,null,E))});break;case N.MIME_JPEG:try{return this.bitmap=r.decode(A),function(A,B){var Q;try{Q=m.create(B).parse()}catch(A){return}if(Q&&Q.tags&&Q.tags.Orientation)switch(Q.tags.Orientation){case 1:break;case 2:A.mirror(!0,!1);break;case 3:A.rotate(180);break;case 4:A.mirror(!1,!0);break;case 5:A.mirror(!0,!1).rotate(270);break;case 6:A.rotate(90);break;case 7:A.mirror(!0,!1).rotate(90);break;case 8:A.rotate(270)}}(this,A),Q.call(this,null,this)}catch(A){return Q.call(this,A,this)}case N.MIME_BMP:return this.bitmap=a.decode(A),Q.call(this,null,this);default:return s.call(this,"Unsupported MIME type: "+B,Q)}}function o(A){return new N(A.bitmap.width,A.bitmap.height,A._background).composite(A,0,0).bitmap}function J(A,B,Q,g,E){if(E.width>0&&E.height>0){var C=B.pages[E.page].clone().crop(E.x,E.y,E.width,E.height);return A.composite(C,Q+E.xoffset,g+E.yoffset)}return A}function t(A,B){for(var Q=0,g=0;g<B.length;g++)A.chars[B[g]]&&(Q+=A.chars[B[g]].xoffset+(A.kernings[B[g]]&&A.kernings[B[g]][B[g+1]]?A.kernings[B[g]][B[g+1]]:0)+(A.chars[B[g]].xadvance||0));return Q}var R,e,n=B("pngjs").PNG,r=B("jpeg-js"),a=B("bmp-js"),f=B("mime"),j=B("tinycolor2"),x=B("./resize.js"),k=B("./resize2.js"),y=B("stream-to-buffer"),T=B("read-chunk"),z=B("file-type"),d=B("pixelmatch"),m=B("exif-parser"),L=B("./phash.js"),S=B("bignumber.js"),l=B("url-regex"),W=B("load-bmfont"),u=B("path"),V=Q.Promise||B("es6-promise").Promise,K=0;A.on("exit",U),N.read=function(A,B){return new V(function(Q,E){if(B=B||function(A,B){A?E(A):Q(B)},"string"!=typeof A&&("object"!=(void 0===A?"undefined":I(A))||!g.isBuffer(A)))return s.call(this,"src must be a string or a Buffer",B);new N(A,B)})},N.AUTO=-1,N.MIME_PNG="image/png",N.MIME_JPEG="image/jpeg",N.MIME_BMP="image/bmp",N.PNG_FILTER_AUTO=-1,N.PNG_FILTER_NONE=0,N.PNG_FILTER_SUB=1,N.PNG_FILTER_UP=2,N.PNG_FILTER_AVERAGE=3,N.PNG_FILTER_PAETH=4,N.RESIZE_NEAREST_NEIGHBOR="nearestNeighbor",N.RESIZE_BILINEAR="bilinearInterpolation",N.RESIZE_BICUBIC="bicubicInterpolation",N.RESIZE_HERMITE="hermiteInterpolation",N.RESIZE_BEZIER="bezierInterpolation",N.HORIZONTAL_ALIGN_LEFT=1,N.HORIZONTAL_ALIGN_CENTER=2,N.HORIZONTAL_ALIGN_RIGHT=4,N.VERTICAL_ALIGN_TOP=8,N.VERTICAL_ALIGN_MIDDLE=16,N.VERTICAL_ALIGN_BOTTOM=32,N.FONT_SANS_8_BLACK=u.join(F,"fonts/open-sans/open-sans-8-black/open-sans-8-black.fnt"),N.FONT_SANS_16_BLACK=u.join(F,"fonts/open-sans/open-sans-16-black/open-sans-16-black.fnt"),N.FONT_SANS_32_BLACK=u.join(F,"fonts/open-sans/open-sans-32-black/open-sans-32-black.fnt"),N.FONT_SANS_64_BLACK=u.join(F,"fonts/open-sans/open-sans-64-black/open-sans-64-black.fnt"),N.FONT_SANS_128_BLACK=u.join(F,"fonts/open-sans/open-sans-128-black/open-sans-128-black.fnt"),N.FONT_SANS_8_WHITE=u.join(F,"fonts/open-sans/open-sans-8-white/open-sans-8-white.fnt"),N.FONT_SANS_16_WHITE=u.join(F,"fonts/open-sans/open-sans-16-white/open-sans-16-white.fnt"),N.FONT_SANS_32_WHITE=u.join(F,"fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt"),N.FONT_SANS_64_WHITE=u.join(F,"fonts/open-sans/open-sans-64-white/open-sans-64-white.fnt"),N.FONT_SANS_128_WHITE=u.join(F,"fonts/open-sans/open-sans-128-white/open-sans-128-white.fnt"),N.rgbaToInt=function(A,B,Q,g,E){if("number"!=typeof A||"number"!=typeof B||"number"!=typeof Q||"number"!=typeof g)return s.call(this,"r, g, b and a must be numbers",E);if(A<0||A>255)return s.call(this,"r must be between 0 and 255",E);if((B<0||B>255)&&s.call(this,"g must be between 0 and 255",E),Q<0||Q>255)return s.call(this,"b must be between 0 and 255",E);if(g<0||g>255)return s.call(this,"a must be between 0 and 255",E);var C=A*Math.pow(256,3)+B*Math.pow(256,2)+Q*Math.pow(256,1)+g*Math.pow(256,0);return G(E)?E.call(this,null,C):C},N.intToRGBA=function(A,B){if("number"!=typeof A)return s.call(this,"i must be a number",B);var Q={};return Q.r=Math.floor(A/Math.pow(256,3)),Q.g=Math.floor((A-Q.r*Math.pow(256,3))/Math.pow(256,2)),Q.b=Math.floor((A-Q.r*Math.pow(256,3)-Q.g*Math.pow(256,2))/Math.pow(256,1)),Q.a=Math.floor((A-Q.r*Math.pow(256,3)-Q.g*Math.pow(256,2)-Q.b*Math.pow(256,1))/Math.pow(256,0)),G(B)?B.call(this,null,Q):Q},N.limit255=function(A){return A=Math.max(A,0),Math.min(A,255)},N.diff=function(A,B,Q){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=N||"object"!=(void 0===B?"undefined":I(B))||B.constructor!=N)return s.call(this,"img1 and img2 must be an Jimp images");if(A.bitmap.width!=B.bitmap.width||A.bitmap.height!=B.bitmap.height)switch(A.bitmap.width*A.bitmap.height>B.bitmap.width*B.bitmap.height){case!0:A=A.clone().resize(B.bitmap.width,B.bitmap.height);break;default:B=B.clone().resize(A.bitmap.width,A.bitmap.height)}if("number"!=typeof(Q=Q||.1)||Q<0||Q>1)return s.call(this,"threshold must be a number between 0 and 1");var g=new N(A.bitmap.width,A.bitmap.height,4294967295);return{percent:d(A.bitmap.data,B.bitmap.data,g.bitmap.data,g.bitmap.width,g.bitmap.height,{threshold:Q})/(g.bitmap.width*g.bitmap.height),image:g}},N.distance=function(A,B){var Q=new L,g=Q.getHash(A),E=Q.getHash(B);return Q.distance(g,E)},N.prototype.bitmap={data:null,width:null,height:null},N.prototype._quality=100,N.prototype._deflateLevel=9,N.prototype._deflateStrategy=3,N.prototype._filterType=N.PNG_FILTER_AUTO,N.prototype._rgba=!0,N.prototype._background=0,N.prototype.clone=function(A){var B=new N(this);return G(A)?A.call(B,null,B):B},N.prototype.quality=function(A,B){return"number"!=typeof A?s.call(this,"n must be a number",B):A<0||A>100?s.call(this,"n must be a number 0 - 100",B):(this._quality=Math.round(A),G(B)?B.call(this,null,this):this)},N.prototype.deflateLevel=function(A,B){return"number"!=typeof A?s.call(this,"l must be a number",B):A<0||A>9?s.call(this,"l must be a number 0 - 9",B):(this._deflateLevel=Math.round(A),G(B)?B.call(this,null,this):this)},N.prototype.deflateStrategy=function(A,B){return"number"!=typeof A?s.call(this,"s must be a number",B):A<0||A>3?s.call(this,"s must be a number 0 - 3",B):(this._deflateStrategy=Math.round(A),G(B)?B.call(this,null,this):this)},N.prototype.filterType=function(A,B){return"number"!=typeof A?s.call(this,"n must be a number",B):A<-1||A>4?s.call(this,"n must be -1 (auto) or a number 0 - 4",B):(this._filterType=Math.round(A),G(B)?B.call(this,null,this):this)},N.prototype.rgba=function(A,B){return"boolean"!=typeof A?s.call(this,"bool must be a boolean, true for RGBA or false for RGB",B):(this._rgba=A,G(B)?B.call(this,null,this):this)},N.prototype.background=function(A,B){return"number"!=typeof A?s.call(this,"hex must be a hexadecimal rgba value",B):(this._background=A,G(B)?B.call(this,null,this):this)},N.prototype.scan=function(A,B,Q,g,E,C){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",C);if("number"!=typeof Q||"number"!=typeof g)return s.call(this,"w and h must be numbers",C);if("function"!=typeof E)return s.call(this,"f must be a function",C);A=Math.round(A),B=Math.round(B),Q=Math.round(Q),g=Math.round(g);for(var w=B;w<B+g;w++)for(var I=A;I<A+Q;I++){var Y=this.bitmap.width*w+I<<2;E.call(this,I,w,Y)}return G(C)?C.call(this,null,this):this},N.prototype.getPixelIndex=function(A,B,Q){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",Q);A=Math.round(A),B=Math.round(B);var g=this.bitmap.width*B+A<<2;return(A<0||A>this.bitmap.width)&&(g=-1),(B<0||B>this.bitmap.height)&&(g=-1),G(Q)?Q.call(this,null,g):g},N.prototype.getPixelColor=N.prototype.getPixelColour=function(A,B,Q){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",Q);A=Math.round(A),B=Math.round(B);var g=this.getPixelIndex(A,B),E=this.bitmap.data.readUInt32BE(g);return G(Q)?Q.call(this,null,E):E},N.prototype.setPixelColor=N.prototype.setPixelColour=function(A,B,Q,g){if("number"!=typeof A||"number"!=typeof B||"number"!=typeof Q)return s.call(this,"hex, x and y must be numbers",g);B=Math.round(B),Q=Math.round(Q);var E=this.getPixelIndex(B,Q);return this.bitmap.data.writeUInt32BE(A,E,!0),G(g)?g.call(this,null,this):this};for(var P=[],X=0;X<65;X++){var p=X>1?new S(Array(65).join("1"),2).toString(X):NaN;P.push(p.length)}N.prototype.hash=function(A,B){if("function"==typeof(A=A||64)&&(B=A,A=64),"number"!=typeof A)return s.call(this,"base must be a number",B);if(A<2||A>64)return s.call(this,"base must be a number between 2 and 64",B);var Q=(new L).getHash(this);for(Q=new S(Q,2).toString(A);Q.length<P[A];)Q="0"+Q;return G(B)?B.call(this,null,Q):Q},N.prototype.crop=function(A,B,Q,E,C){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",C);if("number"!=typeof Q||"number"!=typeof E)return s.call(this,"w and h must be numbers",C);A=Math.round(A),B=Math.round(B),Q=Math.round(Q),E=Math.round(E);var w=new g(this.bitmap.data.length),I=0;return this.scan(A,B,Q,E,function(A,B,Q){var g=this.bitmap.data.readUInt32BE(Q,!0);w.writeUInt32BE(g,I,!0),I+=4}),this.bitmap.data=new g(w),this.bitmap.width=Q,this.bitmap.height=E,G(C)?C.call(this,null,this):this},N.prototype.autocrop=function(){for(var A,B=this.bitmap.width,Q=this.bitmap.height,g=2e-4,E=!0,C=0,w=arguments.length;C<w;C++)"number"==typeof arguments[C]&&(g=arguments[C]),"boolean"==typeof arguments[C]&&(E=arguments[C]),"function"==typeof arguments[C]&&(A=arguments[C]);var I=this.getPixelColor(0,0),Y=0,M=0,F=0,D=0,c=N.intToRGBA(I);A:for(var U=0;U<Q-1;U++){for(var i=0;i<B;i++){var s=this.getPixelColor(i,U),h=N.intToRGBA(s);if(Math.abs(Math.max(c.r-h.r^2,c.r-h.r-c.a+h.a^2)+Math.max(c.g-h.g^2,c.g-h.g-c.a+h.a^2)+Math.max(c.b-h.b^2,c.b-h.b-c.a+h.a^2))/196608>g)break A}Y++}A:for(i=0;i<B-1;i++){for(U=0+Y;U<Q;U++){s=this.getPixelColor(i,U),h=N.intToRGBA(s);if(Math.abs(Math.max(c.r-h.r^2,c.r-h.r-c.a+h.a^2)+Math.max(c.g-h.g^2,c.g-h.g-c.a+h.a^2)+Math.max(c.b-h.b^2,c.b-h.b-c.a+h.a^2))/196608>g)break A}M++}I=this.getPixelColor(B-1,Q-1);A:for(U=Q-1;U>=0+Y+1;U--){for(i=B-M-1;i>=0;i--){s=this.getPixelColor(i,U),h=N.intToRGBA(s);if(Math.abs(Math.max(c.r-h.r^2,c.r-h.r-c.a+h.a^2)+Math.max(c.g-h.g^2,c.g-h.g-c.a+h.a^2)+Math.max(c.b-h.b^2,c.b-h.b-c.a+h.a^2))/196608>g)break A}F++}A:for(i=B-1;i>=0+M+1;i--){for(U=Q-1;U>=0+Y;U--){s=this.getPixelColor(i,U),h=N.intToRGBA(s);if(Math.abs(Math.max(c.r-h.r^2,c.r-h.r-c.a+h.a^2)+Math.max(c.g-h.g^2,c.g-h.g-c.a+h.a^2)+Math.max(c.b-h.b^2,c.b-h.b-c.a+h.a^2))/196608>g)break A}D++}var H=B-(D+M),o=Q-(F+Y);return(E?0!==M&&0!==Y&&0!==D&&0!==F:0!==M||0!==Y||0!==D||0!==F)&&this.crop(M,Y,H,o),G(A)?A.call(this,null,this):this},N.prototype.blit=function(A,B,Q,g,E,C,w,Y){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=N)return s.call(this,"The source must be a Jimp image",Y);if("number"!=typeof B||"number"!=typeof Q)return s.call(this,"x and y must be numbers",Y);if("function"==typeof g)Y=g,g=0,E=0,C=A.bitmap.width,w=A.bitmap.height;else{if((void 0===g?"undefined":I(g))!=(void 0===E?"undefined":I(E))||(void 0===E?"undefined":I(E))!=(void 0===C?"undefined":I(C))||(void 0===C?"undefined":I(C))!=(void 0===w?"undefined":I(w)))return s.call(this,"srcx, srcy, srcw, srch must be numbers",Y);g=g||0,E=E||0,C=C||A.bitmap.width,w=w||A.bitmap.height}B=Math.round(B),Q=Math.round(Q),g=Math.round(g),E=Math.round(E),C=Math.round(C),w=Math.round(w);var M=this;return A.scan(g,E,C,w,function(A,C,w){var I=M.getPixelIndex(B+A-g,Q+C-E);M.bitmap.data[I]=this.bitmap.data[w],M.bitmap.data[I+1]=this.bitmap.data[w+1],M.bitmap.data[I+2]=this.bitmap.data[w+2],M.bitmap.data[I+3]=this.bitmap.data[w+3]}),G(Y)?Y.call(this,null,this):this},N.prototype.mask=function(A,B,Q,g){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=N)return s.call(this,"The source must be a Jimp image",g);if("number"!=typeof B||"number"!=typeof Q)return s.call(this,"x and y must be numbers",g);B=Math.round(B),Q=Math.round(Q);var E=this;return A.scan(0,0,A.bitmap.width,A.bitmap.height,function(A,g,C){var w=E.getPixelIndex(B+A,Q+g),I=(this.bitmap.data[C+0]+this.bitmap.data[C+1]+this.bitmap.data[C+2])/3;E.bitmap.data[w+3]*=I/255}),G(g)?g.call(this,null,this):this},N.prototype.composite=function(A,B,Q,g){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=N)return s.call(this,"The source must be a Jimp image",g);if("number"!=typeof B||"number"!=typeof Q)return s.call(this,"x and y must be numbers",g);B=Math.round(B),Q=Math.round(Q);var E=this;return A.scan(0,0,A.bitmap.width,A.bitmap.height,function(A,g,C){var w=E.getPixelIndex(B+A,Q+g),I=this.bitmap.data[C+0]/255,Y=this.bitmap.data[C+1]/255,M=this.bitmap.data[C+2]/255,F=this.bitmap.data[C+3]/255,D=E.bitmap.data[w+0]/255,c=E.bitmap.data[w+1]/255,U=E.bitmap.data[w+2]/255,i=E.bitmap.data[w+3]/255,G=i+F-i*F,s=(I*F+D*i*(1-F))/G,h=(Y*F+c*i*(1-F))/G,H=(M*F+U*i*(1-F))/G;E.bitmap.data[w+0]=N.limit255(255*s),E.bitmap.data[w+1]=N.limit255(255*h),E.bitmap.data[w+2]=N.limit255(255*H),E.bitmap.data[w+3]=N.limit255(255*G)}),G(g)?g.call(this,null,this):this},N.prototype.brightness=function(A,B){return"number"!=typeof A?s.call(this,"val must be numbers",B):A<-1||A>1?s.call(this,"val must be a number between -1 and +1",B):(this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){A<0?(this.bitmap.data[g]=this.bitmap.data[g]*(1+A),this.bitmap.data[g+1]=this.bitmap.data[g+1]*(1+A),this.bitmap.data[g+2]=this.bitmap.data[g+2]*(1+A)):(this.bitmap.data[g]=this.bitmap.data[g]+(255-this.bitmap.data[g])*A,this.bitmap.data[g+1]=this.bitmap.data[g+1]+(255-this.bitmap.data[g+1])*A,this.bitmap.data[g+2]=this.bitmap.data[g+2]+(255-this.bitmap.data[g+2])*A)}),G(B)?B.call(this,null,this):this)},N.prototype.contrast=function(A,B){function Q(B){var Q;return A<0?((Q=B>127?1-B/255:B/255)<0&&(Q=0),Q=.5*Math.pow(2*Q,1+A),B>127?255*(1-Q):255*Q):((Q=B>127?1-B/255:B/255)<0&&(Q=0),Q=.5*Math.pow(2*Q,1==A?127:1/(1-A)),B>127?255*(1-Q):255*Q)}return"number"!=typeof A?s.call(this,"val must be numbers",B):A<-1||A>1?s.call(this,"val must be a number between -1 and +1",B):(this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,g){this.bitmap.data[g]=Q(this.bitmap.data[g]),this.bitmap.data[g+1]=Q(this.bitmap.data[g+1]),this.bitmap.data[g+2]=Q(this.bitmap.data[g+2])}),G(B)?B.call(this,null,this):this)},N.prototype.posterize=function(A,B){return"number"!=typeof A?s.call(this,"n must be numbers",B):(A<2&&(A=2),this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){this.bitmap.data[g]=Math.floor(this.bitmap.data[g]/255*(A-1))/(A-1)*255,this.bitmap.data[g+1]=Math.floor(this.bitmap.data[g+1]/255*(A-1))/(A-1)*255,this.bitmap.data[g+2]=Math.floor(this.bitmap.data[g+2]/255*(A-1))/(A-1)*255}),G(B)?B.call(this,null,this):this)},N.prototype.normalize=function(A){var B=function(){var A={r:new Array(256).fill(0),g:new Array(256).fill(0),b:new Array(256).fill(0)};return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){A.r[this.bitmap.data[g+0]]++,A.g[this.bitmap.data[g+1]]++,A.b[this.bitmap.data[g+2]]++}),A}.call(this),Q=function(A,B,Q){return 255*(A-B)/(Q-B)},g=function(A){return[A.findIndex(function(A){return A>0}),255-A.slice().reverse().findIndex(function(A){return A>0})]},E={r:g(B.r),g:g(B.g),b:g(B.b)};return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,g){var C=this.bitmap.data[g+0],w=this.bitmap.data[g+1],I=this.bitmap.data[g+2];this.bitmap.data[g+0]=Q(C,E.r[0],E.r[1]),this.bitmap.data[g+1]=Q(w,E.g[0],E.g[1]),this.bitmap.data[g+2]=Q(I,E.b[0],E.b[1])}),G(A)?A.call(this,null,this):this},N.prototype.invert=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data[Q]=255-this.bitmap.data[Q],this.bitmap.data[Q+1]=255-this.bitmap.data[Q+1],this.bitmap.data[Q+2]=255-this.bitmap.data[Q+2]}),G(A)?A.call(this,null,this):this},N.prototype.mirror=N.prototype.flip=function(A,B,Q){if("boolean"!=typeof A||"boolean"!=typeof B)return s.call(this,"horizontal and vertical must be Booleans",Q);var E=new g(this.bitmap.data.length);return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(Q,g,C){var w=A?this.bitmap.width-1-Q:Q,I=B?this.bitmap.height-1-g:g,Y=this.bitmap.width*I+w<<2,M=this.bitmap.data.readUInt32BE(C,!0);E.writeUInt32BE(M,Y,!0)}),this.bitmap.data=new g(E),G(Q)?Q.call(this,null,this):this},N.prototype.gaussian=function(A,B){if("number"!=typeof A)return s.call(this,"r must be a number",B);if(A<1)return s.call(this,"r must be greater than 0",B);for(var Q=Math.ceil(2.57*A),g=0;g<this.bitmap.height;g++){D("Gaussian: "+Math.round(g/this.bitmap.height*100)+"%");for(var E=0;E<this.bitmap.width;E++)for(var C=0,w=0,I=0,Y=0,M=0,F=g-Q;F<g+Q+1;F++){for(var c=E-Q;c<E+Q+1;c++){var i=Math.min(this.bitmap.width-1,Math.max(0,c)),N=Math.min(this.bitmap.height-1,Math.max(0,F)),h=(c-E)*(c-E)+(F-g)*(F-g),H=Math.exp(-h/(2*A*A))/(2*Math.PI*A*A),o=N*this.bitmap.width+i<<2;C+=this.bitmap.data[o]*H,w+=this.bitmap.data[o+1]*H,I+=this.bitmap.data[o+2]*H,Y+=this.bitmap.data[o+3]*H,M+=H}o=g*this.bitmap.width+E<<2;this.bitmap.data[o]=Math.round(C/M),this.bitmap.data[o+1]=Math.round(w/M),this.bitmap.data[o+2]=Math.round(I/M),this.bitmap.data[o+3]=Math.round(Y/M)}}return U(),G(B)?B.call(this,null,this):this};var b,v=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],Z=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];N.prototype.blur=function(A,B){if("number"!=typeof A)return s.call(this,"r must be a number",B);if(A<1)return s.call(this,"r must be greater than 0",B);for(var Q,g,E,C,w,I,Y,M,F,D,c,U,i,N,h=this.bitmap.width-1,H=this.bitmap.height-1,o=(this.bitmap.width,this.bitmap.height,A+1),J=v[A],t=Z[A],R=[],e=[],n=[],r=[],a=[],f=[],j=2;j-- >0;){for(i=U=0,I=0;I<this.bitmap.height;I++){for(Q=this.bitmap.data[i]*o,g=this.bitmap.data[i+1]*o,E=this.bitmap.data[i+2]*o,C=this.bitmap.data[i+3]*o,Y=1;Y<=A;Y++)M=i+((Y>h?h:Y)<<2),Q+=this.bitmap.data[M++],g+=this.bitmap.data[M++],E+=this.bitmap.data[M++],C+=this.bitmap.data[M];for(w=0;w<this.bitmap.width;w++)R[U]=Q,e[U]=g,n[U]=E,r[U]=C,0==I&&(a[w]=((M=w+o)<h?M:h)<<2,f[w]=(M=w-A)>0?M<<2:0),F=i+a[w],D=i+f[w],Q+=this.bitmap.data[F++]-this.bitmap.data[D++],g+=this.bitmap.data[F++]-this.bitmap.data[D++],E+=this.bitmap.data[F++]-this.bitmap.data[D++],C+=this.bitmap.data[F]-this.bitmap.data[D],U++;i+=this.bitmap.width<<2}for(w=0;w<this.bitmap.width;w++){for(Q=R[c=w]*o,g=e[c]*o,E=n[c]*o,C=r[c]*o,Y=1;Y<=A;Y++)Q+=R[c+=Y>H?0:this.bitmap.width],g+=e[c],E+=n[c],C+=r[c];for(U=w<<2,I=0;I<this.bitmap.height;I++)this.bitmap.data[U+3]=N=C*J>>>t,N>255&&(this.bitmap.data[U+3]=255),N>0?(N=255/N,this.bitmap.data[U]=(Q*J>>>t)*N,this.bitmap.data[U+1]=(g*J>>>t)*N,this.bitmap.data[U+2]=(E*J>>>t)*N):this.bitmap.data[U]=this.bitmap.data[U+1]=this.bitmap.data[U+2]=0,0==w&&(a[I]=((M=I+o)<H?M:H)*this.bitmap.width,f[I]=(M=I-A)>0?M*this.bitmap.width:0),F=w+a[I],D=w+f[I],Q+=R[F]-R[D],g+=e[F]-e[D],E+=n[F]-n[D],C+=r[F]-r[D],U+=this.bitmap.width<<2}}return G(B)?B.call(this,null,this):this},N.prototype.greyscale=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){var g=parseInt(.2126*this.bitmap.data[Q]+.7152*this.bitmap.data[Q+1]+.0722*this.bitmap.data[Q+2],10);this.bitmap.data[Q]=g,this.bitmap.data[Q+1]=g,this.bitmap.data[Q+2]=g}),G(A)?A.call(this,null,this):this},N.prototype.grayscale=N.prototype.greyscale,N.prototype.sepia=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){var g=this.bitmap.data[Q],E=this.bitmap.data[Q+1],C=this.bitmap.data[Q+2];C=.272*(g=.393*g+.769*E+.189*C)+.534*(E=.349*g+.686*E+.168*C)+.131*C,this.bitmap.data[Q]=g<255?g:255,this.bitmap.data[Q+1]=E<255?E:255,this.bitmap.data[Q+2]=C<255?C:255}),G(A)?A.call(this,null,this):this},N.prototype.opacity=function(A,B){return"number"!=typeof A?s.call(this,"f must be a number",B):A<0||A>1?s.call(this,"f must be a number from 0 to 1",B):(this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){var E=this.bitmap.data[g+3]*A;this.bitmap.data[g+3]=E}),G(B)?B.call(this,null,this):this)},N.prototype.fade=function(A,B){return"number"!=typeof A?s.call(this,"f must be a number",B):A<0||A>1?s.call(this,"f must be a number from 0 to 1",B):(this.opacity(1-A),G(B)?B.call(this,null,this):this)},N.prototype.opaque=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data[Q+3]=255}),G(A)?A.call(this,null,this):this},N.prototype.resize=function(A,B,Q,E){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",E);if("function"==typeof Q&&void 0===E&&(E=Q,Q=null),A==N.AUTO&&B==N.AUTO)return s.call(this,"w and h cannot both the set to auto",E);if(A==N.AUTO&&(A=this.bitmap.width*(B/this.bitmap.height)),B==N.AUTO&&(B=this.bitmap.height*(A/this.bitmap.width)),A=Math.round(A),B=Math.round(B),"function"==typeof k[Q]){var C={data:new g(A*B*4),width:A,height:B};k[Q](this.bitmap,C),this.bitmap=C}else{var w=this;new x(this.bitmap.width,this.bitmap.height,A,B,!0,!0,function(Q){w.bitmap.data=new g(Q),w.bitmap.width=A,w.bitmap.height=B}).resize(this.bitmap.data)}return G(E)?E.call(this,null,this):this},N.prototype.cover=function(A,B,Q,g,E){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",E);Q&&"function"==typeof Q&&void 0===E?(E=Q,Q=null,g=null):"function"==typeof g&&void 0===E&&(E=g,g=null);var C=7&(Q=Q||N.HORIZONTAL_ALIGN_CENTER|N.VERTICAL_ALIGN_MIDDLE),w=Q>>3;if((0==C||C&C-1)&&(0==w||w&w-1))return s.call(this,"only use one flag per alignment direction",E);var I=C>>1,Y=w>>1,M=A/B>this.bitmap.width/this.bitmap.height?A/this.bitmap.width:B/this.bitmap.height;return this.scale(M,g),this.crop((this.bitmap.width-A)/2*I,(this.bitmap.height-B)/2*Y,A,B),G(E)?E.call(this,null,this):this},N.prototype.contain=function(A,B,Q,g,E){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",E);switch(void 0===Q?"undefined":I(Q)){case"string":"function"==typeof g&&void 0===E&&(E=g),g=Q,Q=null;case"function":void 0===E&&(E=Q),g=null,Q=null;default:"function"==typeof g&&void 0===E&&(E=g,g=null)}var C=7&(Q=Q||N.HORIZONTAL_ALIGN_CENTER|N.VERTICAL_ALIGN_MIDDLE),w=Q>>3;if((0==C||C&C-1)&&(0==w||w&w-1))return s.call(this,"only use one flag per alignment direction",E);var Y=C>>1,M=w>>1,F=A/B>this.bitmap.width/this.bitmap.height?B/this.bitmap.height:A/this.bitmap.width,D=this.clone().scale(F,g);return this.resize(A,B,g),this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data.writeUInt32BE(this._background,Q)}),this.blit(D,(this.bitmap.width-D.bitmap.width)/2*Y,(this.bitmap.height-D.bitmap.height)/2*M),G(E)?E.call(this,null,this):this},N.prototype.scale=function(A,B,Q){if("number"!=typeof A)return s.call(this,"f must be a number",Q);if(A<0)return s.call(this,"f must be a positive number",Q);"function"==typeof B&&void 0===Q&&(Q=B,B=null);var g=this.bitmap.width*A,E=this.bitmap.height*A;return this.resize(g,E,B),G(Q)?Q.call(this,null,this):this},N.prototype.scaleToFit=function(A,B,Q,g){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",g);"function"==typeof Q&&void 0===g&&(g=Q,Q=null);var E=A/B>this.bitmap.width/this.bitmap.height?B/this.bitmap.height:A/this.bitmap.width;return this.scale(E,Q),G(g)?g.call(this,null,this):this},N.prototype.rotate=function(A,B,Q){return void 0!==B&&null!==B||(B=!0),"function"==typeof B&&void 0===Q&&(Q=B,B=!0),"number"!=typeof A?s.call(this,"deg must be a number",Q):"boolean"!=typeof B&&"string"!=typeof B?s.call(this,"mode must be a boolean or a string",Q):(A%90==0&&!1!==B?function(A){for(var B=Math.round(A/90)%4;B<0;)B+=4;for(;B>0;){for(var Q=new g(this.bitmap.data.length),E=0,C=0;C<this.bitmap.width;C++)for(var w=this.bitmap.height-1;w>=0;w--){var I=this.bitmap.width*w+C<<2,Y=this.bitmap.data.readUInt32BE(I,!0);Q.writeUInt32BE(Y,E,!0),E+=4}this.bitmap.data=new g(Q);var M=this.bitmap.width;this.bitmap.width=this.bitmap.height,this.bitmap.height=M,B--}}.call(this,A,Q):function(A,B){function Q(A,B){return function(Q,g){return{x:Q+A,y:g+B}}}var E,C,w=A%360*Math.PI/180,I=Math.cos(w),Y=Math.sin(w);if(1==B||"string"==typeof B){E=Math.round(Math.abs(this.bitmap.width*I)+Math.abs(this.bitmap.height*Y)),C=Math.round(Math.abs(this.bitmap.width*Y)+Math.abs(this.bitmap.height*I));var M=this.clone();this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data.writeUInt32BE(this._background,Q)});var F=Math.max(E,C,this.bitmap.width,this.bitmap.height);this.resize(F,F,B),this.blit(M,this.bitmap.width/2-M.bitmap.width/2,this.bitmap.height/2-M.bitmap.height/2)}for(var D=new g(this.bitmap.data.length),c=Q(-this.bitmap.width/2,-this.bitmap.height/2),U=Q(this.bitmap.width/2,this.bitmap.height/2),i=0;i<this.bitmap.height;i++)for(var G=0;G<this.bitmap.width;G++){var s=c(G,this.bitmap.height-i),N=U(I*s.x-Y*s.y,I*s.y+Y*s.x);if(N.x>=0&&N.x<this.bitmap.width&&N.y>=0&&N.y<this.bitmap.height){var h=(this.bitmap.width*(this.bitmap.height-N.y|0)+N.x|0)<<2,H=this.bitmap.data.readUInt32BE(h,!0),o=this.bitmap.width*i+G<<2;D.writeUInt32BE(H,o)}else o=this.bitmap.width*i+G<<2,D.writeUInt32BE(this._background,o)}this.bitmap.data=D,(1==B||"string"==typeof B)&&(G=this.bitmap.width/2-E/2,i=this.bitmap.height/2-C/2,this.crop(G,i,E,C))}.call(this,A,B,Q),G(Q)?Q.call(this,null,this):this)},N.prototype.getBuffer=function(A,B){if(A==N.AUTO&&(A=this._originalMime||N.MIME_PNG),"string"!=typeof A)return s.call(this,"mime must be a string",B);if("function"!=typeof B)return s.call(this,"cb must be a function",B);switch(A.toLowerCase()){case N.MIME_PNG:var Q=this,E=new n({width:this.bitmap.width,height:this.bitmap.height,bitDepth:8,deflateLevel:this._deflateLevel,deflateStrategy:this._deflateStrategy,filterType:this._filterType,colorType:this._rgba?6:2,inputHasAlpha:!0});this._rgba?E.data=new g(this.bitmap.data):E.data=o(this).data,y(E.pack(),function(A,g){return B.call(Q,null,g)});break;case N.MIME_JPEG:var C=r.encode(o(this),this._quality);return B.call(this,null,C.data);case N.MIME_BMP:var w=a.encode(o(this));return B.call(this,null,w.data);default:return B.call(this,"Unsupported MIME type: "+A)}return this},N.prototype.getBase64=function(A,B){return A==N.AUTO&&(A=this._originalMime||N.MIME_PNG),"string"!=typeof A?s.call(this,"mime must be a string",B):"function"!=typeof B?s.call(this,"cb must be a function",B):(this.getBuffer(A,function(Q,g){var E="data:"+A+";base64,"+g.toString("base64");return B.call(this,null,E)}),this)},N.prototype.dither565=function(A){var B=[1,9,3,11,13,5,15,7,4,12,2,10,16,8,14,6];return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,Q,g){var E=B[((3&Q)<<2)+A%4];this.bitmap.data[g]=Math.min(this.bitmap.data[g]+E,255),this.bitmap.data[g+1]=Math.min(this.bitmap.data[g+1]+E,255),this.bitmap.data[g+2]=Math.min(this.bitmap.data[g+2]+E,255)}),G(A)?A.call(this,null,this):this},N.prototype.dither16=N.prototype.dither565,N.prototype.color=N.prototype.colour=function(A,B){if(!A||!Array.isArray(A))return s.call(this,"actions must be an array",B);var Q=this;return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(g,E,C){var w=j({r:this.bitmap.data[C],g:this.bitmap.data[C+1],b:this.bitmap.data[C+2]}),I=function(A,B){return c=w.toRgb(),c[A]=Math.max(0,Math.min(c[A]+B,255)),j(c)};A.forEach(function(A){if("mix"===A.apply)w=j.mix(w,A.params[0],A.params[1]);else if("tint"===A.apply)w=j.mix(w,"white",A.params[0]);else if("shade"===A.apply)w=j.mix(w,"black",A.params[0]);else if("xor"===A.apply){var g=j(A.params[0]).toRgb();w=w.toRgb(),w=j({r:w.r^g.r,g:w.g^g.g,b:w.b^g.b})}else if("red"===A.apply)w=I("r",A.params[0]);else if("green"===A.apply)w=I("g",A.params[0]);else if("blue"===A.apply)w=I("b",A.params[0]);else{"hue"===A.apply&&(A.apply="spin");var E=w[A.apply];if(!E)return s.call(Q,"action "+A.apply+" not supported",B);w=E.apply(w,A.params)}}),w=w.toRgb(),this.bitmap.data[C]=w.r,this.bitmap.data[C+1]=w.g,this.bitmap.data[C+2]=w.b}),G(B)?B.call(this,null,this):this},N.loadFont=function(A,B){if("string"!=typeof A)return s.call(this,"file must be a string",B);var Q=this;return new V(function(g,E){B=B||function(A,B){A?E(A):g(B)},W(A,function(g,E){var C={},w={};if(g)return s.call(Q,g,B);for(var I=0;I<E.chars.length;I++)C[String.fromCharCode(E.chars[I].id)]=E.chars[I];for(I=0;I<E.kernings.length;I++){var Y=String.fromCharCode(E.kernings[I].first);w[Y]=w[Y]||{},w[Y][String.fromCharCode(E.kernings[I].second)]=E.kernings[I].amount}(function(A,B){var Q=B.map(function(B){return N.read(A+"/"+B)});return V.all(Q)})(u.dirname(A),E.pages).then(function(A){B(null,{chars:C,kernings:w,pages:A,common:E.common,info:E.info})})})})},N.prototype.print=function(A,B,Q,g,E,C){if("function"==typeof E&&void 0===C&&(C=E,E=1/0),void 0===E&&(E=1/0),"object"!=(void 0===A?"undefined":I(A)))return s.call(this,"font must be a Jimp loadFont",C);if("number"!=typeof B||"number"!=typeof Q||"number"!=typeof E)return s.call(this,"x, y and maxWidth must be numbers",C);if("string"!=typeof g)return s.call(this,"text must be a string",C);if("number"!=typeof E)return s.call(this,"maxWidth must be a number",C);for(var w=this,Y=g.split(" "),M="",F=0;F<Y.length;F++){var D=M+Y[F]+" ";t(A,D)>E&&F>0?(w=w.print(A,B,Q,M),M=Y[F]+" ",Q+=A.common.lineHeight):M=D}return function(A,B,Q,g){for(var E=0;E<g.length;E++)A.chars[g[E]]&&(J(this,A,B,Q,A.chars[g[E]]),B+=(A.kernings[g[E]]&&A.kernings[g[E]][g[E+1]]?A.kernings[g[E]][g[E+1]]:0)+(A.chars[g[E]].xadvance||0))}.call(this,A,B,Q,M),G(C)?C.call(this,null,w):w},N.prototype.write=function(A,B){if("string"!=typeof A)return s.call(this,"path must be a string",B);if(void 0===B&&(B=function(){}),"function"!=typeof B)return s.call(this,"cb must be a function",B);var Q=this,g=f.lookup(A);return this.getBuffer(g,function(g,E){if(g)return s.call(Q,g,B);var C=R.createWriteStream(A);C.on("open",function(A){C.write(E),C.end()}).on("error",function(A){return s.call(Q,A,B)}),C.on("finish",function(A){return B.call(Q,null,Q)})}),this},"object"==(void 0===w?"undefined":I(w))&&(b=w),"object"==("undefined"==typeof self?"undefined":I(self))&&(b=self),b.Jimp=N,b.Buffer=g}).call(this,B("_process"),void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{},B("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..")},{"./phash.js":107,"./resize.js":108,"./resize2.js":109,_process:12,"bignumber.js":4,"bmp-js":5,buffer:14,"es6-promise":16,"exif-parser":18,"file-type":27,"jpeg-js":36,"load-bmfont":39,mime:41,path:59,pixelmatch:60,pngjs:80,"read-chunk":83,"stream-to-buffer":95,tinycolor2:98,"url-regex":100}],2:[function(A,B,Q){var g=A("util/"),E=Array.prototype.slice,C=Object.prototype.hasOwnProperty,w=B.exports=F;function I(A,B){return g.isUndefined(B)?""+B:g.isNumber(B)&&!isFinite(B)?B.toString():g.isFunction(B)||g.isRegExp(B)?B.toString():B}function Y(A,B){return g.isString(A)?A.length<B?A:A.slice(0,B):A}function M(A,B,Q,g,E){throw new w.AssertionError({message:Q,actual:A,expected:B,operator:g,stackStartFunction:E})}function F(A,B){A||M(A,!0,B,"==",w.ok)}function D(A,B){if(A===B)return!0;if(g.isBuffer(A)&&g.isBuffer(B)){if(A.length!=B.length)return!1;for(var Q=0;Q<A.length;Q++)if(A[Q]!==B[Q])return!1;return!0}return g.isDate(A)&&g.isDate(B)?A.getTime()===B.getTime():g.isRegExp(A)&&g.isRegExp(B)?A.source===B.source&&A.global===B.global&&A.multiline===B.multiline&&A.lastIndex===B.lastIndex&&A.ignoreCase===B.ignoreCase:g.isObject(A)||g.isObject(B)?function(A,B){if(g.isNullOrUndefined(A)||g.isNullOrUndefined(B))return!1;if(A.prototype!==B.prototype)return!1;if(g.isPrimitive(A)||g.isPrimitive(B))return A===B;var Q=c(A),C=c(B);if(Q&&!C||!Q&&C)return!1;if(Q)return A=E.call(A),B=E.call(B),D(A,B);var w,I,Y=G(A),M=G(B);if(Y.length!=M.length)return!1;for(Y.sort(),M.sort(),I=Y.length-1;I>=0;I--)if(Y[I]!=M[I])return!1;for(I=Y.length-1;I>=0;I--)if(w=Y[I],!D(A[w],B[w]))return!1;return!0}(A,B):A==B}function c(A){return"[object Arguments]"==Object.prototype.toString.call(A)}function U(A,B){return!(!A||!B)&&("[object RegExp]"==Object.prototype.toString.call(B)?B.test(A):A instanceof B||!0===B.call({},A))}function i(A,B,Q,E){var C;g.isString(Q)&&(E=Q,Q=null);try{B()}catch(A){C=A}if(E=(Q&&Q.name?" ("+Q.name+").":".")+(E?" "+E:"."),A&&!C&&M(C,Q,"Missing expected exception"+E),!A&&U(C,Q)&&M(C,Q,"Got unwanted exception"+E),A&&C&&Q&&!U(C,Q)||!A&&C)throw C}w.AssertionError=function(A){var B;this.name="AssertionError",this.actual=A.actual,this.expected=A.expected,this.operator=A.operator,A.message?(this.message=A.message,this.generatedMessage=!1):(this.message=(B=this,Y(JSON.stringify(B.actual,I),128)+" "+B.operator+" "+Y(JSON.stringify(B.expected,I),128)),this.generatedMessage=!0);var Q=A.stackStartFunction||M;if(Error.captureStackTrace)Error.captureStackTrace(this,Q);else{var g=new Error;if(g.stack){var E=g.stack,C=Q.name,w=E.indexOf("\n"+C);if(w>=0){var F=E.indexOf("\n",w+1);E=E.substring(F+1)}this.stack=E}}},g.inherits(w.AssertionError,Error),w.fail=M,w.ok=F,w.equal=function(A,B,Q){A!=B&&M(A,B,Q,"==",w.equal)},w.notEqual=function(A,B,Q){A==B&&M(A,B,Q,"!=",w.notEqual)},w.deepEqual=function(A,B,Q){D(A,B)||M(A,B,Q,"deepEqual",w.deepEqual)},w.notDeepEqual=function(A,B,Q){D(A,B)&&M(A,B,Q,"notDeepEqual",w.notDeepEqual)},w.strictEqual=function(A,B,Q){A!==B&&M(A,B,Q,"===",w.strictEqual)},w.notStrictEqual=function(A,B,Q){A===B&&M(A,B,Q,"!==",w.notStrictEqual)},w.throws=function(A,B,Q){i.apply(this,[!0].concat(E.call(arguments)))},w.doesNotThrow=function(A,B){i.apply(this,[!1].concat(E.call(arguments)))},w.ifError=function(A){if(A)throw A};var G=Object.keys||function(A){var B=[];for(var Q in A)C.call(A,Q)&&B.push(Q);return B}},{"util/":103}],3:[function(A,B,Q){"use strict";Q.toByteArray=function(A){var B,Q,g,w,I,Y,M=A.length;if(M%4>0)throw new Error("Invalid string. Length must be a multiple of 4");I="="===A[M-2]?2:"="===A[M-1]?1:0,Y=new C(3*M/4-I),g=I>0?M-4:M;var F=0;for(B=0,Q=0;B<g;B+=4,Q+=3)w=E[A.charCodeAt(B)]<<18|E[A.charCodeAt(B+1)]<<12|E[A.charCodeAt(B+2)]<<6|E[A.charCodeAt(B+3)],Y[F++]=w>>16&255,Y[F++]=w>>8&255,Y[F++]=255&w;2===I?(w=E[A.charCodeAt(B)]<<2|E[A.charCodeAt(B+1)]>>4,Y[F++]=255&w):1===I&&(w=E[A.charCodeAt(B)]<<10|E[A.charCodeAt(B+1)]<<4|E[A.charCodeAt(B+2)]>>2,Y[F++]=w>>8&255,Y[F++]=255&w);return Y},Q.fromByteArray=function(A){for(var B,Q=A.length,E=Q%3,C="",I=[],Y=0,M=Q-E;Y<M;Y+=16383)I.push(w(A,Y,Y+16383>M?M:Y+16383));1===E?(B=A[Q-1],C+=g[B>>2],C+=g[B<<4&63],C+="=="):2===E&&(B=(A[Q-2]<<8)+A[Q-1],C+=g[B>>10],C+=g[B>>4&63],C+=g[B<<2&63],C+="=");return I.push(C),I.join("")};var g=[],E=[],C="undefined"!=typeof Uint8Array?Uint8Array:Array;function w(A,B,Q){for(var E,C,w=[],I=B;I<Q;I+=3)E=(A[I]<<16)+(A[I+1]<<8)+A[I+2],w.push(g[(C=E)>>18&63]+g[C>>12&63]+g[C>>6&63]+g[63&C]);return w.join("")}!function(){for(var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B=0,Q=A.length;B<Q;++B)g[B]=A[B],E[A.charCodeAt(B)]=B;E["-".charCodeAt(0)]=62,E["_".charCodeAt(0)]=63}()},{}],4:[function(A,B,g){!function(A){"use strict";var E,w,Y,M=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,F=Math.ceil,D=Math.floor,c=" not a boolean or binary digit",U="rounding mode",i="number type has more than 15 significant digits",G="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",s=1e14,N=14,h=9007199254740991,H=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],o=1e7,J=1e9;function t(A){var B=0|A;return A>0||A===B?B:B-1}function R(A){for(var B,Q,g=1,E=A.length,C=A[0]+"";g<E;){for(B=A[g++]+"",Q=N-B.length;Q--;B="0"+B);C+=B}for(E=C.length;48===C.charCodeAt(--E););return C.slice(0,E+1||1)}function e(A,B){var Q,g,E=A.c,C=B.c,w=A.s,I=B.s,Y=A.e,M=B.e;if(!w||!I)return null;if(Q=E&&!E[0],g=C&&!C[0],Q||g)return Q?g?0:-I:w;if(w!=I)return w;if(Q=w<0,g=Y==M,!E||!C)return g?0:!E^Q?1:-1;if(!g)return Y>M^Q?1:-1;for(I=(Y=E.length)<(M=C.length)?Y:M,w=0;w<I;w++)if(E[w]!=C[w])return E[w]>C[w]^Q?1:-1;return Y==M?0:Y>M^Q?1:-1}function n(A,B,Q){return(A=x(A))>=B&&A<=Q}function r(A){return"[object Array]"==Object.prototype.toString.call(A)}function a(A,B,Q){for(var g,E,C=[0],w=0,I=A.length;w<I;){for(E=C.length;E--;C[E]*=B);for(C[g=0]+=G.indexOf(A.charAt(w++));g<C.length;g++)C[g]>Q-1&&(null==C[g+1]&&(C[g+1]=0),C[g+1]+=C[g]/Q|0,C[g]%=Q)}return C.reverse()}function f(A,B){return(A.length>1?A.charAt(0)+"."+A.slice(1):A)+(B<0?"e":"e+")+B}function j(A,B){var Q,g;if(B<0){for(g="0.";++B;g+="0");A=g+A}else if(++B>(Q=A.length)){for(g="0",B-=Q;--B;g+="0");A+=g}else B<Q&&(A=A.slice(0,B)+"."+A.slice(B));return A}function x(A){return(A=parseFloat(A))<0?F(A):D(A)}"undefined"!=typeof crypto&&(w=crypto),(E=function A(B){var Q,g,E,C,k,y,T,z=0,d=Z.prototype,m=new Z(1),L=20,S=4,l=-7,W=21,u=-1e7,V=1e7,K=!0,P=$,X=!1,p=1,b=100,v={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};function Z(A,B){var Q,g,E,C,w,I,F=this;if(!(F instanceof Z))return K&&BA(26,"constructor call without new",A),new Z(A,B);if(null!=B&&P(B,2,64,z,"base")){if(I=A+"",10==(B|=0))return QA(F=new Z(A instanceof Z?A:I),L+F.e+1,S);if((C="number"==typeof A)&&0*A!=0||!new RegExp("^-?"+(Q="["+G.slice(0,B)+"]+")+"(?:\\."+Q+")?$",B<37?"i":"").test(I))return Y(F,I,C,B);C?(F.s=1/A<0?(I=I.slice(1),-1):1,K&&I.replace(/^0\.0*|\./,"").length>15&&BA(z,i,A),C=!1):F.s=45===I.charCodeAt(0)?(I=I.slice(1),-1):1,I=O(I,10,B,F.s)}else{if(A instanceof Z)return F.s=A.s,F.e=A.e,F.c=(A=A.c)?A.slice():A,void(z=0);if((C="number"==typeof A)&&0*A==0){if(F.s=1/A<0?(A=-A,-1):1,A===~~A){for(g=0,E=A;E>=10;E/=10,g++);return F.e=g,F.c=[A],void(z=0)}I=A+""}else{if(!M.test(I=A+""))return Y(F,I,C);F.s=45===I.charCodeAt(0)?(I=I.slice(1),-1):1}}for((g=I.indexOf("."))>-1&&(I=I.replace(".","")),(E=I.search(/e/i))>0?(g<0&&(g=E),g+=+I.slice(E+1),I=I.substring(0,E)):g<0&&(g=I.length),E=0;48===I.charCodeAt(E);E++);for(w=I.length;48===I.charCodeAt(--w););if(I=I.slice(E,w+1))if(w=I.length,C&&K&&w>15&&(A>h||A!==D(A))&&BA(z,i,F.s*A),(g=g-E-1)>V)F.c=F.e=null;else if(g<u)F.c=[F.e=0];else{if(F.e=g,F.c=[],E=(g+1)%N,g<0&&(E+=N),E<w){for(E&&F.c.push(+I.slice(0,E)),w-=N;E<w;)F.c.push(+I.slice(E,E+=N));I=I.slice(E),E=N-I.length}else E-=w;for(;E--;I+="0");F.c.push(+I)}else F.c=[F.e=0];z=0}function O(A,B,g,E){var C,w,I,Y,M,F,D,c=A.indexOf("."),U=L,i=S;for(g<37&&(A=A.toLowerCase()),c>=0&&(I=b,b=0,A=A.replace(".",""),M=(D=new Z(g)).pow(A.length-c),b=I,D.c=a(j(R(M.c),M.e),10,B),D.e=D.c.length),w=I=(F=a(A,g,B)).length;0==F[--I];F.pop());if(!F[0])return"0";if(c<0?--w:(M.c=F,M.e=w,M.s=E,F=(M=Q(M,D,U,i,B)).c,Y=M.r,w=M.e),c=F[C=w+U+1],I=B/2,Y=Y||C<0||null!=F[C+1],Y=i<4?(null!=c||Y)&&(0==i||i==(M.s<0?3:2)):c>I||c==I&&(4==i||Y||6==i&&1&F[C-1]||i==(M.s<0?8:7)),C<1||!F[0])A=Y?j("1",-U):"0";else{if(F.length=C,Y)for(--B;++F[--C]>B;)F[C]=0,C||(++w,F.unshift(1));for(I=F.length;!F[--I];);for(c=0,A="";c<=I;A+=G.charAt(F[c++]));A=j(A,w)}return A}function q(A,B,Q,g){var E,C,w,I,Y;if(Q=null!=Q&&P(Q,0,8,g,U)?0|Q:S,!A.c)return A.toString();if(E=A.c[0],w=A.e,null==B)Y=R(A.c),Y=19==g||24==g&&w<=l?f(Y,w):j(Y,w);else if(C=(A=QA(new Z(A),B,Q)).e,I=(Y=R(A.c)).length,19==g||24==g&&(B<=C||C<=l)){for(;I<B;Y+="0",I++);Y=f(Y,C)}else if(B-=w,Y=j(Y,C),C+1>I){if(--B>0)for(Y+=".";B--;Y+="0");}else if((B+=C-I)>0)for(C+1==I&&(Y+=".");B--;Y+="0");return A.s<0&&E?"-"+Y:Y}function _(A,B){var Q,g,E=0;for(r(A[0])&&(A=A[0]),Q=new Z(A[0]);++E<A.length;){if(!(g=new Z(A[E])).s){Q=g;break}B.call(Q,g)&&(Q=g)}return Q}function $(A,B,Q,g,E){return(A<B||A>Q||A!=x(A))&&BA(g,(E||"decimal places")+(A<B||A>Q?" out of range":" not an integer"),A),!0}function AA(A,B,Q){for(var g=1,E=B.length;!B[--E];B.pop());for(E=B[0];E>=10;E/=10,g++);return(Q=g+Q*N-1)>V?A.c=A.e=null:Q<u?A.c=[A.e=0]:(A.e=Q,A.c=B),A}function BA(A,B,Q){var g=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][A]+"() "+B+": "+Q);throw g.name="BigNumber Error",z=0,g}function QA(A,B,Q,g){var E,C,w,I,Y,M,c,U=A.c,i=H;if(U){A:{for(E=1,I=U[0];I>=10;I/=10,E++);if((C=B-E)<0)C+=N,w=B,c=(Y=U[M=0])/i[E-w-1]%10|0;else if((M=F((C+1)/N))>=U.length){if(!g)break A;for(;U.length<=M;U.push(0));Y=c=0,E=1,w=(C%=N)-N+1}else{for(Y=I=U[M],E=1;I>=10;I/=10,E++);c=(w=(C%=N)-N+E)<0?0:Y/i[E-w-1]%10|0}if(g=g||B<0||null!=U[M+1]||(w<0?Y:Y%i[E-w-1]),g=Q<4?(c||g)&&(0==Q||Q==(A.s<0?3:2)):c>5||5==c&&(4==Q||g||6==Q&&(C>0?w>0?Y/i[E-w]:0:U[M-1])%10&1||Q==(A.s<0?8:7)),B<1||!U[0])return U.length=0,g?(B-=A.e+1,U[0]=i[(N-B%N)%N],A.e=-B||0):U[0]=A.e=0,A;if(0==C?(U.length=M,I=1,M--):(U.length=M+1,I=i[N-C],U[M]=w>0?D(Y/i[E-w]%i[w])*I:0),g)for(;;){if(0==M){for(C=1,w=U[0];w>=10;w/=10,C++);for(w=U[0]+=I,I=1;w>=10;w/=10,I++);C!=I&&(A.e++,U[0]==s&&(U[0]=1));break}if(U[M]+=I,U[M]!=s)break;U[M--]=0,I=1}for(C=U.length;0===U[--C];U.pop());}A.e>V?A.c=A.e=null:A.e<u&&(A.c=[A.e=0])}return A}return Z.another=A,Z.ROUND_UP=0,Z.ROUND_DOWN=1,Z.ROUND_CEIL=2,Z.ROUND_FLOOR=3,Z.ROUND_HALF_UP=4,Z.ROUND_HALF_DOWN=5,Z.ROUND_HALF_EVEN=6,Z.ROUND_HALF_CEIL=7,Z.ROUND_HALF_FLOOR=8,Z.EUCLID=9,Z.config=function(){var A,B,Q=0,g={},E=arguments,C=E[0],Y=C&&"object"==(void 0===C?"undefined":I(C))?function(){if(C.hasOwnProperty(B))return null!=(A=C[B])}:function(){if(E.length>Q)return null!=(A=E[Q++])};return Y(B="DECIMAL_PLACES")&&P(A,0,J,2,B)&&(L=0|A),g[B]=L,Y(B="ROUNDING_MODE")&&P(A,0,8,2,B)&&(S=0|A),g[B]=S,Y(B="EXPONENTIAL_AT")&&(r(A)?P(A[0],-J,0,2,B)&&P(A[1],0,J,2,B)&&(l=0|A[0],W=0|A[1]):P(A,-J,J,2,B)&&(l=-(W=0|(A<0?-A:A)))),g[B]=[l,W],Y(B="RANGE")&&(r(A)?P(A[0],-J,-1,2,B)&&P(A[1],1,J,2,B)&&(u=0|A[0],V=0|A[1]):P(A,-J,J,2,B)&&(0|A?u=-(V=0|(A<0?-A:A)):K&&BA(2,B+" cannot be zero",A))),g[B]=[u,V],Y(B="ERRORS")&&(A===!!A||1===A||0===A?(z=0,P=(K=!!A)?$:n):K&&BA(2,B+c,A)),g[B]=K,Y(B="CRYPTO")&&(A===!!A||1===A||0===A?(X=!(!A||!w),A&&!X&&K&&BA(2,"crypto unavailable",w)):K&&BA(2,B+c,A)),g[B]=X,Y(B="MODULO_MODE")&&P(A,0,9,2,B)&&(p=0|A),g[B]=p,Y(B="POW_PRECISION")&&P(A,0,J,2,B)&&(b=0|A),g[B]=b,Y(B="FORMAT")&&("object"==(void 0===A?"undefined":I(A))?v=A:K&&BA(2,B+" not an object",A)),g[B]=v,g},Z.max=function(){return _(arguments,d.lt)},Z.min=function(){return _(arguments,d.gt)},Z.random=(g=9007199254740992*Math.random()&2097151?function(){return D(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(A){var B,Q,E,C,I,Y=0,M=[],c=new Z(m);if(A=null!=A&&P(A,0,J,14)?0|A:L,C=F(A/N),X)if(w&&w.getRandomValues){for(B=w.getRandomValues(new Uint32Array(C*=2));Y<C;)(I=131072*B[Y]+(B[Y+1]>>>11))>=9e15?(Q=w.getRandomValues(new Uint32Array(2)),B[Y]=Q[0],B[Y+1]=Q[1]):(M.push(I%1e14),Y+=2);Y=C/2}else if(w&&w.randomBytes){for(B=w.randomBytes(C*=7);Y<C;)(I=281474976710656*(31&B[Y])+1099511627776*B[Y+1]+4294967296*B[Y+2]+16777216*B[Y+3]+(B[Y+4]<<16)+(B[Y+5]<<8)+B[Y+6])>=9e15?w.randomBytes(7).copy(B,Y):(M.push(I%1e14),Y+=7);Y=C/7}else K&&BA(14,"crypto unavailable",w);if(!Y)for(;Y<C;)(I=g())<9e15&&(M[Y++]=I%1e14);for(C=M[--Y],A%=N,C&&A&&(I=H[N-A],M[Y]=D(C/I)*I);0===M[Y];M.pop(),Y--);if(Y<0)M=[E=0];else{for(E=-1;0===M[0];M.shift(),E-=N);for(Y=1,I=M[0];I>=10;I/=10,Y++);Y<N&&(E-=N-Y)}return c.e=E,c.c=M,c}),Q=function(){function A(A,B,Q){var g,E,C,w,I=0,Y=A.length,M=B%o,F=B/o|0;for(A=A.slice();Y--;)I=((E=M*(C=A[Y]%o)+(g=F*C+(w=A[Y]/o|0)*M)%o*o+I)/Q|0)+(g/o|0)+F*w,A[Y]=E%Q;return I&&A.unshift(I),A}function B(A,B,Q,g){var E,C;if(Q!=g)C=Q>g?1:-1;else for(E=C=0;E<Q;E++)if(A[E]!=B[E]){C=A[E]>B[E]?1:-1;break}return C}function Q(A,B,Q,g){for(var E=0;Q--;)A[Q]-=E,E=A[Q]<B[Q]?1:0,A[Q]=E*g+A[Q]-B[Q];for(;!A[0]&&A.length>1;A.shift());}return function(g,E,C,w,I){var Y,M,F,c,U,i,G,h,H,o,J,R,e,n,r,a,f,j=g.s==E.s?1:-1,x=g.c,k=E.c;if(!(x&&x[0]&&k&&k[0]))return new Z(g.s&&E.s&&(x?!k||x[0]!=k[0]:k)?x&&0==x[0]||!k?0*j:j/0:NaN);for(H=(h=new Z(j)).c=[],j=C+(M=g.e-E.e)+1,I||(I=s,M=t(g.e/N)-t(E.e/N),j=j/N|0),F=0;k[F]==(x[F]||0);F++);if(k[F]>(x[F]||0)&&M--,j<0)H.push(1),c=!0;else{for(n=x.length,a=k.length,F=0,j+=2,(U=D(I/(k[0]+1)))>1&&(k=A(k,U,I),x=A(x,U,I),a=k.length,n=x.length),e=a,J=(o=x.slice(0,a)).length;J<a;o[J++]=0);(f=k.slice()).unshift(0),r=k[0],k[1]>=I/2&&r++;do{if(U=0,(Y=B(k,o,a,J))<0){if(R=o[0],a!=J&&(R=R*I+(o[1]||0)),(U=D(R/r))>1)for(U>=I&&(U=I-1),G=(i=A(k,U,I)).length,J=o.length;1==B(i,o,G,J);)U--,Q(i,a<G?f:k,G,I),G=i.length,Y=1;else 0==U&&(Y=U=1),G=(i=k.slice()).length;if(G<J&&i.unshift(0),Q(o,i,J,I),J=o.length,-1==Y)for(;B(k,o,a,J)<1;)U++,Q(o,a<J?f:k,J,I),J=o.length}else 0===Y&&(U++,o=[0]);H[F++]=U,o[0]?o[J++]=x[e]||0:(o=[x[e]],J=1)}while((e++<n||null!=o[0])&&j--);c=null!=o[0],H[0]||H.shift()}if(I==s){for(F=1,j=H[0];j>=10;j/=10,F++);QA(h,C+(h.e=F+M*N-1)+1,w,c)}else h.e=M,h.r=+c;return h}}(),E=/^(-?)0([xbo])(?=\w[\w.]*$)/i,C=/^([^.]+)\.$/,k=/^\.([^.]+)$/,y=/^-?(Infinity|NaN)$/,T=/^\s*\+(?=[\w.])|^\s+|\s+$/g,Y=function(A,B,Q,g){var w,I=Q?B:B.replace(T,"");if(y.test(I))A.s=isNaN(I)?null:I<0?-1:1;else{if(!Q&&(I=I.replace(E,function(A,B,Q){return w="x"==(Q=Q.toLowerCase())?16:"b"==Q?2:8,g&&g!=w?A:B}),g&&(w=g,I=I.replace(C,"$1").replace(k,"0.$1")),B!=I))return new Z(I,w);K&&BA(z,"not a"+(g?" base "+g:"")+" number",B),A.s=null}A.c=A.e=null,z=0},d.absoluteValue=d.abs=function(){var A=new Z(this);return A.s<0&&(A.s=1),A},d.ceil=function(){return QA(new Z(this),this.e+1,2)},d.comparedTo=d.cmp=function(A,B){return z=1,e(this,new Z(A,B))},d.decimalPlaces=d.dp=function(){var A,B,Q=this.c;if(!Q)return null;if(A=((B=Q.length-1)-t(this.e/N))*N,B=Q[B])for(;B%10==0;B/=10,A--);return A<0&&(A=0),A},d.dividedBy=d.div=function(A,B){return z=3,Q(this,new Z(A,B),L,S)},d.dividedToIntegerBy=d.divToInt=function(A,B){return z=4,Q(this,new Z(A,B),0,1)},d.equals=d.eq=function(A,B){return z=5,0===e(this,new Z(A,B))},d.floor=function(){return QA(new Z(this),this.e+1,3)},d.greaterThan=d.gt=function(A,B){return z=6,e(this,new Z(A,B))>0},d.greaterThanOrEqualTo=d.gte=function(A,B){return z=7,1===(B=e(this,new Z(A,B)))||0===B},d.isFinite=function(){return!!this.c},d.isInteger=d.isInt=function(){return!!this.c&&t(this.e/N)>this.c.length-2},d.isNaN=function(){return!this.s},d.isNegative=d.isNeg=function(){return this.s<0},d.isZero=function(){return!!this.c&&0==this.c[0]},d.lessThan=d.lt=function(A,B){return z=8,e(this,new Z(A,B))<0},d.lessThanOrEqualTo=d.lte=function(A,B){return z=9,-1===(B=e(this,new Z(A,B)))||0===B},d.minus=d.sub=function(A,B){var Q,g,E,C,w=this,I=w.s;if(z=10,B=(A=new Z(A,B)).s,!I||!B)return new Z(NaN);if(I!=B)return A.s=-B,w.plus(A);var Y=w.e/N,M=A.e/N,F=w.c,D=A.c;if(!Y||!M){if(!F||!D)return F?(A.s=-B,A):new Z(D?w:NaN);if(!F[0]||!D[0])return D[0]?(A.s=-B,A):new Z(F[0]?w:3==S?-0:0)}if(Y=t(Y),M=t(M),F=F.slice(),I=Y-M){for((C=I<0)?(I=-I,E=F):(M=Y,E=D),E.reverse(),B=I;B--;E.push(0));E.reverse()}else for(g=(C=(I=F.length)<(B=D.length))?I:B,I=B=0;B<g;B++)if(F[B]!=D[B]){C=F[B]<D[B];break}if(C&&(E=F,F=D,D=E,A.s=-A.s),(B=(g=D.length)-(Q=F.length))>0)for(;B--;F[Q++]=0);for(B=s-1;g>I;){if(F[--g]<D[g]){for(Q=g;Q&&!F[--Q];F[Q]=B);--F[Q],F[g]+=s}F[g]-=D[g]}for(;0==F[0];F.shift(),--M);return F[0]?AA(A,F,M):(A.s=3==S?-1:1,A.c=[A.e=0],A)},d.modulo=d.mod=function(A,B){var g,E,C=this;return z=11,A=new Z(A,B),!C.c||!A.s||A.c&&!A.c[0]?new Z(NaN):!A.c||C.c&&!C.c[0]?new Z(C):(9==p?(E=A.s,A.s=1,g=Q(C,A,0,3),A.s=E,g.s*=E):g=Q(C,A,0,p),C.minus(g.times(A)))},d.negated=d.neg=function(){var A=new Z(this);return A.s=-A.s||null,A},d.plus=d.add=function(A,B){var Q,g=this,E=g.s;if(z=12,B=(A=new Z(A,B)).s,!E||!B)return new Z(NaN);if(E!=B)return A.s=-B,g.minus(A);var C=g.e/N,w=A.e/N,I=g.c,Y=A.c;if(!C||!w){if(!I||!Y)return new Z(E/0);if(!I[0]||!Y[0])return Y[0]?A:new Z(I[0]?g:0*E)}if(C=t(C),w=t(w),I=I.slice(),E=C-w){for(E>0?(w=C,Q=Y):(E=-E,Q=I),Q.reverse();E--;Q.push(0));Q.reverse()}for((E=I.length)-(B=Y.length)<0&&(Q=Y,Y=I,I=Q,B=E),E=0;B;)E=(I[--B]=I[B]+Y[B]+E)/s|0,I[B]%=s;return E&&(I.unshift(E),++w),AA(A,I,w)},d.precision=d.sd=function(A){var B,Q,g=this,E=g.c;if(null!=A&&A!==!!A&&1!==A&&0!==A&&(K&&BA(13,"argument"+c,A),A!=!!A&&(A=null)),!E)return null;if(B=(Q=E.length-1)*N+1,Q=E[Q]){for(;Q%10==0;Q/=10,B--);for(Q=E[0];Q>=10;Q/=10,B++);}return A&&g.e+1>B&&(B=g.e+1),B},d.round=function(A,B){var Q=new Z(this);return(null==A||P(A,0,J,15))&&QA(Q,~~A+this.e+1,null!=B&&P(B,0,8,15,U)?0|B:S),Q},d.shift=function(A){var B=this;return P(A,-h,h,16,"argument")?B.times("1e"+x(A)):new Z(B.c&&B.c[0]&&(A<-h||A>h)?B.s*(A<0?0:1/0):B)},d.squareRoot=d.sqrt=function(){var A,B,g,E,C,w=this,I=w.c,Y=w.s,M=w.e,F=L+4,D=new Z("0.5");if(1!==Y||!I||!I[0])return new Z(!Y||Y<0&&(!I||I[0])?NaN:I?w:1/0);if(0==(Y=Math.sqrt(+w))||Y==1/0?(((B=R(I)).length+M)%2==0&&(B+="0"),Y=Math.sqrt(B),M=t((M+1)/2)-(M<0||M%2),g=new Z(B=Y==1/0?"1e"+M:(B=Y.toExponential()).slice(0,B.indexOf("e")+1)+M)):g=new Z(Y+""),g.c[0])for((Y=(M=g.e)+F)<3&&(Y=0);;)if(C=g,g=D.times(C.plus(Q(w,C,F,1))),R(C.c).slice(0,Y)===(B=R(g.c)).slice(0,Y)){if(g.e<M&&--Y,"9999"!=(B=B.slice(Y-3,Y+1))&&(E||"4999"!=B)){+B&&(+B.slice(1)||"5"!=B.charAt(0))||(QA(g,g.e+L+2,1),A=!g.times(g).eq(w));break}if(!E&&(QA(C,C.e+L+2,0),C.times(C).eq(w))){g=C;break}F+=4,Y+=4,E=1}return QA(g,g.e+L+1,S,A)},d.times=d.mul=function(A,B){var Q,g,E,C,w,I,Y,M,F,D,c,U,i,G,h,H=this,J=H.c,R=(z=17,A=new Z(A,B)).c;if(!(J&&R&&J[0]&&R[0]))return!H.s||!A.s||J&&!J[0]&&!R||R&&!R[0]&&!J?A.c=A.e=A.s=null:(A.s*=H.s,J&&R?(A.c=[0],A.e=0):A.c=A.e=null),A;for(g=t(H.e/N)+t(A.e/N),A.s*=H.s,(Y=J.length)<(D=R.length)&&(i=J,J=R,R=i,E=Y,Y=D,D=E),E=Y+D,i=[];E--;i.push(0));for(G=s,h=o,E=D;--E>=0;){for(Q=0,c=R[E]%h,U=R[E]/h|0,C=E+(w=Y);C>E;)Q=((M=c*(M=J[--w]%h)+(I=U*M+(F=J[w]/h|0)*c)%h*h+i[C]+Q)/G|0)+(I/h|0)+U*F,i[C--]=M%G;i[C]=Q}return Q?++g:i.shift(),AA(A,i,g)},d.toDigits=function(A,B){var Q=new Z(this);return A=null!=A&&P(A,1,J,18,"precision")?0|A:null,B=null!=B&&P(B,0,8,18,U)?0|B:S,A?QA(Q,A,B):Q},d.toExponential=function(A,B){return q(this,null!=A&&P(A,0,J,19)?1+~~A:null,B,19)},d.toFixed=function(A,B){return q(this,null!=A&&P(A,0,J,20)?~~A+this.e+1:null,B,20)},d.toFormat=function(A,B){var Q=q(this,null!=A&&P(A,0,J,21)?~~A+this.e+1:null,B,21);if(this.c){var g,E=Q.split("."),C=+v.groupSize,w=+v.secondaryGroupSize,I=v.groupSeparator,Y=E[0],M=E[1],F=this.s<0,D=F?Y.slice(1):Y,c=D.length;if(w&&(g=C,C=w,w=g,c-=g),C>0&&c>0){for(g=c%C||C,Y=D.substr(0,g);g<c;g+=C)Y+=I+D.substr(g,C);w>0&&(Y+=I+D.slice(g)),F&&(Y="-"+Y)}Q=M?Y+v.decimalSeparator+((w=+v.fractionGroupSize)?M.replace(new RegExp("\\d{"+w+"}\\B","g"),"$&"+v.fractionGroupSeparator):M):Y}return Q},d.toFraction=function(A){var B,g,E,C,w,I,Y,M,F,D=K,c=this,U=c.c,i=new Z(m),G=g=new Z(m),s=Y=new Z(m);if(null!=A&&(K=!1,I=new Z(A),K=D,(D=I.isInt())&&!I.lt(m)||(K&&BA(22,"max denominator "+(D?"out of range":"not an integer"),A),A=!D&&I.c&&QA(I,I.e+1,1).gte(m)?I:null)),!U)return c.toString();for(F=R(U),C=i.e=F.length-c.e-1,i.c[0]=H[(w=C%N)<0?N+w:w],A=!A||I.cmp(i)>0?C>0?i:G:I,w=V,V=1/0,I=new Z(F),Y.c[0]=0;M=Q(I,i,0,1),1!=(E=g.plus(M.times(s))).cmp(A);)g=s,s=E,G=Y.plus(M.times(E=G)),Y=E,i=I.minus(M.times(E=i)),I=E;return E=Q(A.minus(g),s,0,1),Y=Y.plus(E.times(G)),g=g.plus(E.times(s)),Y.s=G.s=c.s,B=Q(G,s,C*=2,S).minus(c).abs().cmp(Q(Y,g,C,S).minus(c).abs())<1?[G.toString(),s.toString()]:[Y.toString(),g.toString()],V=w,B},d.toNumber=function(){return+this},d.toPower=d.pow=function(A,B){var Q,g,E,C=D(A<0?-A:+A),w=this;if(null!=B&&(z=23,B=new Z(B)),!P(A,-h,h,23,"exponent")&&(!isFinite(A)||C>h&&(A/=0)||parseFloat(A)!=A&&!(A=NaN))||0==A)return Q=Math.pow(+w,A),new Z(B?Q%B:Q);for(B?A>1&&w.gt(m)&&w.isInt()&&B.gt(m)&&B.isInt()?w=w.mod(B):(E=B,B=null):b&&(Q=F(b/N+2)),g=new Z(m);;){if(C%2){if(!(g=g.times(w)).c)break;Q?g.c.length>Q&&(g.c.length=Q):B&&(g=g.mod(B))}if(!(C=D(C/2)))break;w=w.times(w),Q?w.c&&w.c.length>Q&&(w.c.length=Q):B&&(w=w.mod(B))}return B?g:(A<0&&(g=m.div(g)),E?g.mod(E):Q?QA(g,b,S):g)},d.toPrecision=function(A,B){return q(this,null!=A&&P(A,1,J,24,"precision")?0|A:null,B,24)},d.toString=function(A){var B,Q=this,g=Q.s,E=Q.e;return null===E?g?(B="Infinity",g<0&&(B="-"+B)):B="NaN":(B=R(Q.c),B=null!=A&&P(A,2,64,25,"base")?O(j(B,E),0|A,10,g):E<=l||E>=W?f(B,E):j(B,E),g<0&&Q.c[0]&&(B="-"+B)),B},d.truncated=d.trunc=function(){return QA(new Z(this),this.e+1,1)},d.valueOf=d.toJSON=function(){var A,B=this,Q=B.e;return null===Q?B.toString():(A=R(B.c),A=Q<=l||Q>=W?f(A,Q):j(A,Q),B.s<0?"-"+A:A)},null!=B&&Z.config(B),Z}()).default=E.BigNumber=E,void 0===(C=function(){return E}.call(g,Q,g,B))||(B.exports=C)}()},{}],5:[function(A,B,Q){var g=A("./lib/encoder"),E=A("./lib/decoder");B.exports={encode:g,decode:E}},{"./lib/decoder":6,"./lib/encoder":7}],6:[function(A,B,Q){(function(A){function Q(A){if(this.pos=0,this.buffer=A,this.flag=this.buffer.toString("utf-8",0,this.pos+=2),"BM"!=this.flag)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}Q.prototype.parseHeader=function(){if(this.fileSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.reserved=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.offset=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.headerSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.width=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.height=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.planes=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.bitPP=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.compress=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.rawSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.hr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.vr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.colors=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.importantColors=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.bitPP<24){var A=1<<this.bitPP;this.palette=new Array(A);for(var B=0;B<A;B++){var Q=this.buffer.readUInt8(this.pos++),g=this.buffer.readUInt8(this.pos++),E=this.buffer.readUInt8(this.pos++),C=this.buffer.readUInt8(this.pos++);this.palette[B]={red:E,green:g,blue:Q,quad:C}}}},Q.prototype.parseBGR=function(){this.pos=this.offset;try{var B="bit"+this.bitPP,Q=this.width*this.height*4;this.data=new A(Q),this[B]()}catch(A){console.log("bit decode error:"+A)}},Q.prototype.bit1=function(){for(var A=Math.ceil(this.width/8),B=A%4,Q=this.height-1;Q>=0;Q--){for(var g=0;g<A;g++)for(var E=this.buffer.readUInt8(this.pos++),C=Q*this.width*4+8*g*4,w=0;w<8&&8*g+w<this.width;w++){var I=this.palette[E>>7-w&1];this.data[C+4*w]=I.blue,this.data[C+4*w+1]=I.green,this.data[C+4*w+2]=I.red,this.data[C+4*w+3]=255}0!=B&&(this.pos+=4-B)}},Q.prototype.bit4=function(){for(var A=Math.ceil(this.width/2),B=A%4,Q=this.height-1;Q>=0;Q--){for(var g=0;g<A;g++){var E=this.buffer.readUInt8(this.pos++),C=Q*this.width*4+2*g*4,w=E>>4,I=15&E,Y=this.palette[w];if(this.data[C]=Y.blue,this.data[C+1]=Y.green,this.data[C+2]=Y.red,this.data[C+3]=255,2*g+1>=this.width)break;Y=this.palette[I],this.data[C+4]=Y.blue,this.data[C+4+1]=Y.green,this.data[C+4+2]=Y.red,this.data[C+4+3]=255}0!=B&&(this.pos+=4-B)}},Q.prototype.bit8=function(){for(var A=this.width%4,B=this.height-1;B>=0;B--){for(var Q=0;Q<this.width;Q++){var g=this.buffer.readUInt8(this.pos++),E=B*this.width*4+4*Q,C=this.palette[g];this.data[E]=C.blue,this.data[E+1]=C.green,this.data[E+2]=C.red,this.data[E+3]=255}0!=A&&(this.pos+=4-A)}},Q.prototype.bit24=function(){for(var A=this.height-1;A>=0;A--){for(var B=0;B<this.width;B++){var Q=this.buffer.readUInt8(this.pos++),g=this.buffer.readUInt8(this.pos++),E=this.buffer.readUInt8(this.pos++),C=A*this.width*4+4*B;this.data[C]=E,this.data[C+1]=g,this.data[C+2]=Q,this.data[C+3]=255}this.pos+=this.width%4}},Q.prototype.getData=function(){return this.data},B.exports=decode=function(A){var B=new Q(A);return{data:B.getData(),width:B.width,height:B.height}}}).call(this,A("buffer").Buffer)},{buffer:14}],7:[function(A,B,Q){(function(A){function Q(A){this.buffer=A.data,this.width=A.width,this.height=A.height,this.extraBytes=this.width%4,this.rgbSize=this.height*(3*this.width+this.extraBytes),this.headerInfoSize=40,this.data=[],this.flag="BM",this.reserved=0,this.offset=54,this.fileSize=this.rgbSize+this.offset,this.planes=1,this.bitPP=24,this.compress=0,this.hr=0,this.vr=0,this.colors=0,this.importantColors=0}Q.prototype.encode=function(){var B=new A(this.offset+this.rgbSize);this.pos=0,B.write(this.flag,this.pos,2),this.pos+=2,B.writeUInt32LE(this.fileSize,this.pos),this.pos+=4,B.writeUInt32LE(this.reserved,this.pos),this.pos+=4,B.writeUInt32LE(this.offset,this.pos),this.pos+=4,B.writeUInt32LE(this.headerInfoSize,this.pos),this.pos+=4,B.writeUInt32LE(this.width,this.pos),this.pos+=4,B.writeUInt32LE(this.height,this.pos),this.pos+=4,B.writeUInt16LE(this.planes,this.pos),this.pos+=2,B.writeUInt16LE(this.bitPP,this.pos),this.pos+=2,B.writeUInt32LE(this.compress,this.pos),this.pos+=4,B.writeUInt32LE(this.rgbSize,this.pos),this.pos+=4,B.writeUInt32LE(this.hr,this.pos),this.pos+=4,B.writeUInt32LE(this.vr,this.pos),this.pos+=4,B.writeUInt32LE(this.colors,this.pos),this.pos+=4,B.writeUInt32LE(this.importantColors,this.pos),this.pos+=4;for(var Q=0,g=3*this.width+this.extraBytes,E=this.height-1;E>=0;E--){for(var C=0;C<this.width;C++){var w=this.pos+E*g+3*C;B[w+2]=this.buffer[Q++],B[w+1]=this.buffer[Q++],B[w]=this.buffer[Q++],Q++}if(this.extraBytes>0){var I=this.pos+E*g+3*this.width;B.fill(0,I,I+this.extraBytes)}}return B},B.exports=encode=function(A,B){return void 0===B&&(B=100),{data:new Q(A).encode(),width:A.width,height:A.height}}}).call(this,A("buffer").Buffer)},{buffer:14}],8:[function(A,B,Q){},{}],9:[function(A,B,Q){(function(B,g){var E=A("pako/lib/zlib/messages"),C=A("pako/lib/zlib/zstream"),w=A("pako/lib/zlib/deflate.js"),I=A("pako/lib/zlib/inflate.js"),Y=A("pako/lib/zlib/constants");for(var M in Y)Q[M]=Y[M];function F(A){if(A<Q.DEFLATE||A>Q.UNZIP)throw new TypeError("Bad argument");this.mode=A,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function D(A,B){for(var Q=0;Q<A.length;Q++)this[B+Q]=A[Q]}Q.NONE=0,Q.DEFLATE=1,Q.INFLATE=2,Q.GZIP=3,Q.GUNZIP=4,Q.DEFLATERAW=5,Q.INFLATERAW=6,Q.UNZIP=7,F.prototype.init=function(A,B,g,E,Y){switch(this.windowBits=A,this.level=B,this.memLevel=g,this.strategy=E,this.mode!==Q.GZIP&&this.mode!==Q.GUNZIP||(this.windowBits+=16),this.mode===Q.UNZIP&&(this.windowBits+=32),this.mode!==Q.DEFLATERAW&&this.mode!==Q.INFLATERAW||(this.windowBits=-this.windowBits),this.strm=new C,this.mode){case Q.DEFLATE:case Q.GZIP:case Q.DEFLATERAW:var M=w.deflateInit2(this.strm,this.level,Q.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case Q.INFLATE:case Q.GUNZIP:case Q.INFLATERAW:case Q.UNZIP:M=I.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}M===Q.Z_OK?(this.write_in_progress=!1,this.init_done=!0):this._error(M)},F.prototype.params=function(){throw new Error("deflateParams Not supported")},F.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init");if(this.mode===Q.NONE)throw new Error("already finalized");if(this.write_in_progress)throw new Error("write already in progress");if(this.pending_close)throw new Error("close is pending")},F.prototype.write=function(A,Q,g,E,C,w,I){this._writeCheck(),this.write_in_progress=!0;var Y=this;return B.nextTick(function(){Y.write_in_progress=!1;var B=Y._write(A,Q,g,E,C,w,I);Y.callback(B[0],B[1]),Y.pending_close&&Y.close()}),this},F.prototype.writeSync=function(A,B,Q,g,E,C,w){return this._writeCheck(),this._write(A,B,Q,g,E,C,w)},F.prototype._write=function(A,B,E,C,Y,M,F){if(this.write_in_progress=!0,A!==Q.Z_NO_FLUSH&&A!==Q.Z_PARTIAL_FLUSH&&A!==Q.Z_SYNC_FLUSH&&A!==Q.Z_FULL_FLUSH&&A!==Q.Z_FINISH&&A!==Q.Z_BLOCK)throw new Error("Invalid flush value");null==B&&(B=new g(0),C=0,E=0),Y._set?Y.set=Y._set:Y.set=D;var c=this.strm;switch(c.avail_in=C,c.input=B,c.next_in=E,c.avail_out=F,c.output=Y,c.next_out=M,this.mode){case Q.DEFLATE:case Q.GZIP:case Q.DEFLATERAW:var U=w.deflate(c,A);break;case Q.UNZIP:case Q.INFLATE:case Q.GUNZIP:case Q.INFLATERAW:U=I.inflate(c,A);break;default:throw new Error("Unknown mode "+this.mode)}return U!==Q.Z_STREAM_END&&U!==Q.Z_OK&&this._error(U),this.write_in_progress=!1,[c.avail_in,c.avail_out]},F.prototype.close=function(){this.write_in_progress?this.pending_close=!0:(this.pending_close=!1,this.mode===Q.DEFLATE||this.mode===Q.GZIP||this.mode===Q.DEFLATERAW?w.deflateEnd(this.strm):I.inflateEnd(this.strm),this.mode=Q.NONE)},F.prototype.reset=function(){switch(this.mode){case Q.DEFLATE:case Q.DEFLATERAW:var A=w.deflateReset(this.strm);break;case Q.INFLATE:case Q.INFLATERAW:A=I.inflateReset(this.strm)}A!==Q.Z_OK&&this._error(A)},F.prototype._error=function(A){this.onerror(E[A]+": "+this.strm.msg,A),this.write_in_progress=!1,this.pending_close&&this.close()},Q.Zlib=F}).call(this,A("_process"),A("buffer").Buffer)},{_process:12,buffer:14,"pako/lib/zlib/constants":45,"pako/lib/zlib/deflate.js":47,"pako/lib/zlib/inflate.js":49,"pako/lib/zlib/messages":51,"pako/lib/zlib/zstream":53}],10:[function(A,B,Q){(function(B,g){var E=A("_stream_transform"),C=A("./binding"),w=A("util"),I=A("assert").ok;function Y(A,B,Q){var E=[],C=0;function w(){for(var B;null!==(B=A.read());)E.push(B),C+=B.length;A.once("readable",w)}function I(){var B=g.concat(E,C);E=[],Q(null,B),A.close()}A.on("error",function(B){A.removeListener("end",I),A.removeListener("readable",w),Q(B)}),A.on("end",I),A.end(B),w()}function M(A,B){if("string"==typeof B&&(B=new g(B)),!g.isBuffer(B))throw new TypeError("Not a string or buffer");var Q=C.Z_FINISH;return A._processChunk(B,Q)}function F(A){if(!(this instanceof F))return new F(A);N.call(this,A,C.DEFLATE)}function D(A){if(!(this instanceof D))return new D(A);N.call(this,A,C.INFLATE)}function c(A){if(!(this instanceof c))return new c(A);N.call(this,A,C.GZIP)}function U(A){if(!(this instanceof U))return new U(A);N.call(this,A,C.GUNZIP)}function i(A){if(!(this instanceof i))return new i(A);N.call(this,A,C.DEFLATERAW)}function G(A){if(!(this instanceof G))return new G(A);N.call(this,A,C.INFLATERAW)}function s(A){if(!(this instanceof s))return new s(A);N.call(this,A,C.UNZIP)}function N(A,B){if(this._opts=A=A||{},this._chunkSize=A.chunkSize||Q.Z_DEFAULT_CHUNK,E.call(this,A),A.flush&&A.flush!==C.Z_NO_FLUSH&&A.flush!==C.Z_PARTIAL_FLUSH&&A.flush!==C.Z_SYNC_FLUSH&&A.flush!==C.Z_FULL_FLUSH&&A.flush!==C.Z_FINISH&&A.flush!==C.Z_BLOCK)throw new Error("Invalid flush flag: "+A.flush);if(this._flushFlag=A.flush||C.Z_NO_FLUSH,A.chunkSize&&(A.chunkSize<Q.Z_MIN_CHUNK||A.chunkSize>Q.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+A.chunkSize);if(A.windowBits&&(A.windowBits<Q.Z_MIN_WINDOWBITS||A.windowBits>Q.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+A.windowBits);if(A.level&&(A.level<Q.Z_MIN_LEVEL||A.level>Q.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+A.level);if(A.memLevel&&(A.memLevel<Q.Z_MIN_MEMLEVEL||A.memLevel>Q.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+A.memLevel);if(A.strategy&&A.strategy!=Q.Z_FILTERED&&A.strategy!=Q.Z_HUFFMAN_ONLY&&A.strategy!=Q.Z_RLE&&A.strategy!=Q.Z_FIXED&&A.strategy!=Q.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+A.strategy);if(A.dictionary&&!g.isBuffer(A.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._binding=new C.Zlib(B);var w=this;this._hadError=!1,this._binding.onerror=function(A,B){w._binding=null,w._hadError=!0;var g=new Error(A);g.errno=B,g.code=Q.codes[B],w.emit("error",g)};var I=Q.Z_DEFAULT_COMPRESSION;"number"==typeof A.level&&(I=A.level);var Y=Q.Z_DEFAULT_STRATEGY;"number"==typeof A.strategy&&(Y=A.strategy),this._binding.init(A.windowBits||Q.Z_DEFAULT_WINDOWBITS,I,A.memLevel||Q.Z_DEFAULT_MEMLEVEL,Y,A.dictionary),this._buffer=new g(this._chunkSize),this._offset=0,this._closed=!1,this._level=I,this._strategy=Y,this.once("end",this.close)}C.Z_MIN_WINDOWBITS=8,C.Z_MAX_WINDOWBITS=15,C.Z_DEFAULT_WINDOWBITS=15,C.Z_MIN_CHUNK=64,C.Z_MAX_CHUNK=1/0,C.Z_DEFAULT_CHUNK=16384,C.Z_MIN_MEMLEVEL=1,C.Z_MAX_MEMLEVEL=9,C.Z_DEFAULT_MEMLEVEL=8,C.Z_MIN_LEVEL=-1,C.Z_MAX_LEVEL=9,C.Z_DEFAULT_LEVEL=C.Z_DEFAULT_COMPRESSION,Object.keys(C).forEach(function(A){A.match(/^Z/)&&(Q[A]=C[A])}),Q.codes={Z_OK:C.Z_OK,Z_STREAM_END:C.Z_STREAM_END,Z_NEED_DICT:C.Z_NEED_DICT,Z_ERRNO:C.Z_ERRNO,Z_STREAM_ERROR:C.Z_STREAM_ERROR,Z_DATA_ERROR:C.Z_DATA_ERROR,Z_MEM_ERROR:C.Z_MEM_ERROR,Z_BUF_ERROR:C.Z_BUF_ERROR,Z_VERSION_ERROR:C.Z_VERSION_ERROR},Object.keys(Q.codes).forEach(function(A){Q.codes[Q.codes[A]]=A}),Q.Deflate=F,Q.Inflate=D,Q.Gzip=c,Q.Gunzip=U,Q.DeflateRaw=i,Q.InflateRaw=G,Q.Unzip=s,Q.createDeflate=function(A){return new F(A)},Q.createInflate=function(A){return new D(A)},Q.createDeflateRaw=function(A){return new i(A)},Q.createInflateRaw=function(A){return new G(A)},Q.createGzip=function(A){return new c(A)},Q.createGunzip=function(A){return new U(A)},Q.createUnzip=function(A){return new s(A)},Q.deflate=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new F(B),A,Q)},Q.deflateSync=function(A,B){return M(new F(B),A)},Q.gzip=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new c(B),A,Q)},Q.gzipSync=function(A,B){return M(new c(B),A)},Q.deflateRaw=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new i(B),A,Q)},Q.deflateRawSync=function(A,B){return M(new i(B),A)},Q.unzip=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new s(B),A,Q)},Q.unzipSync=function(A,B){return M(new s(B),A)},Q.inflate=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new D(B),A,Q)},Q.inflateSync=function(A,B){return M(new D(B),A)},Q.gunzip=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new U(B),A,Q)},Q.gunzipSync=function(A,B){return M(new U(B),A)},Q.inflateRaw=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new G(B),A,Q)},Q.inflateRawSync=function(A,B){return M(new G(B),A)},w.inherits(N,E),N.prototype.params=function(A,g,E){if(A<Q.Z_MIN_LEVEL||A>Q.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+A);if(g!=Q.Z_FILTERED&&g!=Q.Z_HUFFMAN_ONLY&&g!=Q.Z_RLE&&g!=Q.Z_FIXED&&g!=Q.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+g);if(this._level!==A||this._strategy!==g){var w=this;this.flush(C.Z_SYNC_FLUSH,function(){w._binding.params(A,g),w._hadError||(w._level=A,w._strategy=g,E&&E())})}else B.nextTick(E)},N.prototype.reset=function(){return this._binding.reset()},N.prototype._flush=function(A){this._transform(new g(0),"",A)},N.prototype.flush=function(A,Q){var E=this._writableState;if(("function"==typeof A||void 0===A&&!Q)&&(Q=A,A=C.Z_FULL_FLUSH),E.ended)Q&&B.nextTick(Q);else if(E.ending)Q&&this.once("end",Q);else if(E.needDrain){var w=this;this.once("drain",function(){w.flush(Q)})}else this._flushFlag=A,this.write(new g(0),"",Q)},N.prototype.close=function(A){if(A&&B.nextTick(A),!this._closed){this._closed=!0,this._binding.close();var Q=this;B.nextTick(function(){Q.emit("close")})}},N.prototype._transform=function(A,B,Q){var E,w=this._writableState,I=(w.ending||w.ended)&&(!A||w.length===A.length);if(null===!A&&!g.isBuffer(A))return Q(new Error("invalid input"));I?E=C.Z_FINISH:(E=this._flushFlag,A.length>=w.length&&(this._flushFlag=this._opts.flush||C.Z_NO_FLUSH));this._processChunk(A,E,Q)},N.prototype._processChunk=function(A,B,Q){var E=A&&A.length,C=this._chunkSize-this._offset,w=0,Y=this,M="function"==typeof Q;if(!M){var F,D=[],c=0;this.on("error",function(A){F=A});do{var U=this._binding.writeSync(B,A,w,E,this._buffer,this._offset,C)}while(!this._hadError&&s(U[0],U[1]));if(this._hadError)throw F;var i=g.concat(D,c);return this.close(),i}var G=this._binding.write(B,A,w,E,this._buffer,this._offset,C);function s(F,U){if(!Y._hadError){var i=C-U;if(I(i>=0,"have should not go down"),i>0){var G=Y._buffer.slice(Y._offset,Y._offset+i);Y._offset+=i,M?Y.push(G):(D.push(G),c+=G.length)}if((0===U||Y._offset>=Y._chunkSize)&&(C=Y._chunkSize,Y._offset=0,Y._buffer=new g(Y._chunkSize)),0===U){if(w+=E-F,E=F,!M)return!0;var N=Y._binding.write(B,A,w,E,Y._buffer,Y._offset,Y._chunkSize);return N.callback=s,void(N.buffer=A)}if(!M)return!1;Q()}}G.buffer=A,G.callback=s},w.inherits(F,N),w.inherits(D,N),w.inherits(c,N),w.inherits(U,N),w.inherits(i,N),w.inherits(G,N),w.inherits(s,N)}).call(this,A("_process"),A("buffer").Buffer)},{"./binding":9,_process:12,_stream_transform:92,assert:2,buffer:14,util:103}],11:[function(A,B,Q){arguments[4][8][0].apply(Q,arguments)},{dup:8}],12:[function(A,B,Q){var g,E,C=B.exports={};function w(A){if(g===setTimeout)return setTimeout(A,0);try{return g(A,0)}catch(B){try{return g.call(null,A,0)}catch(B){return g.call(this,A,0)}}}!function(){try{g=setTimeout}catch(A){g=function(){throw new Error("setTimeout is not defined")}}try{E=clearTimeout}catch(A){E=function(){throw new Error("clearTimeout is not defined")}}}();var I,Y=[],M=!1,F=-1;function D(){M&&I&&(M=!1,I.length?Y=I.concat(Y):F=-1,Y.length&&c())}function c(){if(!M){var A=w(D);M=!0;for(var B=Y.length;B;){for(I=Y,Y=[];++F<B;)I&&I[F].run();F=-1,B=Y.length}I=null,M=!1,function(A){if(E===clearTimeout)return clearTimeout(A);try{E(A)}catch(B){try{return E.call(null,A)}catch(B){return E.call(this,A)}}}(A)}}function U(A,B){this.fun=A,this.array=B}function i(){}C.nextTick=function(A){var B=new Array(arguments.length-1);if(arguments.length>1)for(var Q=1;Q<arguments.length;Q++)B[Q-1]=arguments[Q];Y.push(new U(A,B)),1!==Y.length||M||w(c)},U.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=i,C.addListener=i,C.once=i,C.off=i,C.removeListener=i,C.removeAllListeners=i,C.emit=i,C.binding=function(A){throw new Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(A){throw new Error("process.chdir is not supported")},C.umask=function(){return 0}},{}],13:[function(A,B,Q){var g=A("buffer").Buffer;B.exports=function(A,B){if(g.isBuffer(A)&&g.isBuffer(B)){if("function"==typeof A.equals)return A.equals(B);if(A.length!==B.length)return!1;for(var Q=0;Q<A.length;Q++)if(A[Q]!==B[Q])return!1;return!0}}},{buffer:14}],14:[function(B,Q,g){(function(A){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */"use strict";var Q=B("base64-js"),E=B("ieee754"),C=B("isarray");function w(){return Y.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function I(A,B){if(w()<B)throw new RangeError("Invalid typed array length");return Y.TYPED_ARRAY_SUPPORT?(A=new Uint8Array(B)).__proto__=Y.prototype:(null===A&&(A=new Y(B)),A.length=B),A}function Y(A,B,Q){if(!(Y.TYPED_ARRAY_SUPPORT||this instanceof Y))return new Y(A,B,Q);if("number"==typeof A){if("string"==typeof B)throw new Error("If encoding is specified then the first argument must be a string");return D(this,A)}return M(this,A,B,Q)}function M(A,B,Q,g){if("number"==typeof B)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&B instanceof ArrayBuffer?function(A,B,Q,g){if(B.byteLength,Q<0||B.byteLength<Q)throw new RangeError("'offset' is out of bounds");if(B.byteLength<Q+(g||0))throw new RangeError("'length' is out of bounds");B=void 0===Q&&void 0===g?new Uint8Array(B):void 0===g?new Uint8Array(B,Q):new Uint8Array(B,Q,g);Y.TYPED_ARRAY_SUPPORT?(A=B).__proto__=Y.prototype:A=c(A,B);return A}(A,B,Q,g):"string"==typeof B?function(A,B,Q){"string"==typeof Q&&""!==Q||(Q="utf8");if(!Y.isEncoding(Q))throw new TypeError('"encoding" must be a valid string encoding');var g=0|i(B,Q),E=(A=I(A,g)).write(B,Q);E!==g&&(A=A.slice(0,E));return A}(A,B,Q):function(A,B){if(Y.isBuffer(B)){var Q=0|U(B.length);return 0===(A=I(A,Q)).length?A:(B.copy(A,0,0,Q),A)}if(B){if("undefined"!=typeof ArrayBuffer&&B.buffer instanceof ArrayBuffer||"length"in B)return"number"!=typeof B.length||(g=B.length)!=g?I(A,0):c(A,B);if("Buffer"===B.type&&C(B.data))return c(A,B.data)}var g;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(A,B)}function F(A){if("number"!=typeof A)throw new TypeError('"size" argument must be a number')}function D(A,B){if(F(B),A=I(A,B<0?0:0|U(B)),!Y.TYPED_ARRAY_SUPPORT)for(var Q=0;Q<B;++Q)A[Q]=0;return A}function c(A,B){var Q=0|U(B.length);A=I(A,Q);for(var g=0;g<Q;g+=1)A[g]=255&B[g];return A}function U(A){if(A>=w())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w().toString(16)+" bytes");return 0|A}function i(A,B){if(Y.isBuffer(A))return A.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(A)||A instanceof ArrayBuffer))return A.byteLength;"string"!=typeof A&&(A=""+A);var Q=A.length;if(0===Q)return 0;for(var g=!1;;)switch(B){case"ascii":case"latin1":case"binary":return Q;case"utf8":case"utf-8":case void 0:return W(A).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*Q;case"hex":return Q>>>1;case"base64":return u(A).length;default:if(g)return W(A).length;B=(""+B).toLowerCase(),g=!0}}function G(A,B,Q){var g=A[B];A[B]=A[Q],A[Q]=g}function s(A,B,Q,g,E){if(0===A.length)return-1;if("string"==typeof Q?(g=Q,Q=0):Q>2147483647?Q=2147483647:Q<-2147483648&&(Q=-2147483648),Q=+Q,isNaN(Q)&&(Q=E?0:A.length-1),Q<0&&(Q=A.length+Q),Q>=A.length){if(E)return-1;Q=A.length-1}else if(Q<0){if(!E)return-1;Q=0}if("string"==typeof B&&(B=Y.from(B,g)),Y.isBuffer(B))return 0===B.length?-1:N(A,B,Q,g,E);if("number"==typeof B)return B&=255,Y.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?E?Uint8Array.prototype.indexOf.call(A,B,Q):Uint8Array.prototype.lastIndexOf.call(A,B,Q):N(A,[B],Q,g,E);throw new TypeError("val must be string, number or Buffer")}function N(A,B,Q,g,E){var C,w=1,I=A.length,Y=B.length;if(void 0!==g&&("ucs2"===(g=String(g).toLowerCase())||"ucs-2"===g||"utf16le"===g||"utf-16le"===g)){if(A.length<2||B.length<2)return-1;w=2,I/=2,Y/=2,Q/=2}function M(A,B){return 1===w?A[B]:A.readUInt16BE(B*w)}if(E){var F=-1;for(C=Q;C<I;C++)if(M(A,C)===M(B,-1===F?0:C-F)){if(-1===F&&(F=C),C-F+1===Y)return F*w}else-1!==F&&(C-=C-F),F=-1}else for(Q+Y>I&&(Q=I-Y),C=Q;C>=0;C--){for(var D=!0,c=0;c<Y;c++)if(M(A,C+c)!==M(B,c)){D=!1;break}if(D)return C}return-1}function h(A,B,Q,g){Q=Number(Q)||0;var E=A.length-Q;g?(g=Number(g))>E&&(g=E):g=E;var C=B.length;if(C%2!=0)throw new TypeError("Invalid hex string");g>C/2&&(g=C/2);for(var w=0;w<g;++w){var I=parseInt(B.substr(2*w,2),16);if(isNaN(I))return w;A[Q+w]=I}return w}function H(A,B,Q,g){return V(W(B,A.length-Q),A,Q,g)}function o(A,B,Q,g){return V(function(A){for(var B=[],Q=0;Q<A.length;++Q)B.push(255&A.charCodeAt(Q));return B}(B),A,Q,g)}function J(A,B,Q,g){return o(A,B,Q,g)}function t(A,B,Q,g){return V(u(B),A,Q,g)}function R(A,B,Q,g){return V(function(A,B){for(var Q,g,E,C=[],w=0;w<A.length&&!((B-=2)<0);++w)Q=A.charCodeAt(w),g=Q>>8,E=Q%256,C.push(E),C.push(g);return C}(B,A.length-Q),A,Q,g)}function e(A,B,g){return 0===B&&g===A.length?Q.fromByteArray(A):Q.fromByteArray(A.slice(B,g))}function n(A,B,Q){Q=Math.min(A.length,Q);for(var g=[],E=B;E<Q;){var C,w,I,Y,M=A[E],F=null,D=M>239?4:M>223?3:M>191?2:1;if(E+D<=Q)switch(D){case 1:M<128&&(F=M);break;case 2:128==(192&(C=A[E+1]))&&(Y=(31&M)<<6|63&C)>127&&(F=Y);break;case 3:C=A[E+1],w=A[E+2],128==(192&C)&&128==(192&w)&&(Y=(15&M)<<12|(63&C)<<6|63&w)>2047&&(Y<55296||Y>57343)&&(F=Y);break;case 4:C=A[E+1],w=A[E+2],I=A[E+3],128==(192&C)&&128==(192&w)&&128==(192&I)&&(Y=(15&M)<<18|(63&C)<<12|(63&w)<<6|63&I)>65535&&Y<1114112&&(F=Y)}null===F?(F=65533,D=1):F>65535&&(F-=65536,g.push(F>>>10&1023|55296),F=56320|1023&F),g.push(F),E+=D}return function(A){var B=A.length;if(B<=r)return String.fromCharCode.apply(String,A);var Q="",g=0;for(;g<B;)Q+=String.fromCharCode.apply(String,A.slice(g,g+=r));return Q}(g)}g.Buffer=Y,g.SlowBuffer=function(A){+A!=A&&(A=0);return Y.alloc(+A)},g.INSPECT_MAX_BYTES=50,Y.TYPED_ARRAY_SUPPORT=void 0!==A.TYPED_ARRAY_SUPPORT?A.TYPED_ARRAY_SUPPORT:function(){try{var A=new Uint8Array(1);return A.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===A.foo()&&"function"==typeof A.subarray&&0===A.subarray(1,1).byteLength}catch(A){return!1}}(),g.kMaxLength=w(),Y.poolSize=8192,Y._augment=function(A){return A.__proto__=Y.prototype,A},Y.from=function(A,B,Q){return M(null,A,B,Q)},Y.TYPED_ARRAY_SUPPORT&&(Y.prototype.__proto__=Uint8Array.prototype,Y.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Y[Symbol.species]===Y&&Object.defineProperty(Y,Symbol.species,{value:null,configurable:!0})),Y.alloc=function(A,B,Q){return function(A,B,Q,g){return F(B),B<=0?I(A,B):void 0!==Q?"string"==typeof g?I(A,B).fill(Q,g):I(A,B).fill(Q):I(A,B)}(null,A,B,Q)},Y.allocUnsafe=function(A){return D(null,A)},Y.allocUnsafeSlow=function(A){return D(null,A)},Y.isBuffer=function(A){return!(null==A||!A._isBuffer)},Y.compare=function(A,B){if(!Y.isBuffer(A)||!Y.isBuffer(B))throw new TypeError("Arguments must be Buffers");if(A===B)return 0;for(var Q=A.length,g=B.length,E=0,C=Math.min(Q,g);E<C;++E)if(A[E]!==B[E]){Q=A[E],g=B[E];break}return Q<g?-1:g<Q?1:0},Y.isEncoding=function(A){switch(String(A).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Y.concat=function(A,B){if(!C(A))throw new TypeError('"list" argument must be an Array of Buffers');if(0===A.length)return Y.alloc(0);var Q;if(void 0===B)for(B=0,Q=0;Q<A.length;++Q)B+=A[Q].length;var g=Y.allocUnsafe(B),E=0;for(Q=0;Q<A.length;++Q){var w=A[Q];if(!Y.isBuffer(w))throw new TypeError('"list" argument must be an Array of Buffers');w.copy(g,E),E+=w.length}return g},Y.byteLength=i,Y.prototype._isBuffer=!0,Y.prototype.swap16=function(){var A=this.length;if(A%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var B=0;B<A;B+=2)G(this,B,B+1);return this},Y.prototype.swap32=function(){var A=this.length;if(A%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var B=0;B<A;B+=4)G(this,B,B+3),G(this,B+1,B+2);return this},Y.prototype.swap64=function(){var A=this.length;if(A%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var B=0;B<A;B+=8)G(this,B,B+7),G(this,B+1,B+6),G(this,B+2,B+5),G(this,B+3,B+4);return this},Y.prototype.toString=function(){var A=0|this.length;return 0===A?"":0===arguments.length?n(this,0,A):function(A,B,Q){var g=!1;if((void 0===B||B<0)&&(B=0),B>this.length)return"";if((void 0===Q||Q>this.length)&&(Q=this.length),Q<=0)return"";if((Q>>>=0)<=(B>>>=0))return"";for(A||(A="utf8");;)switch(A){case"hex":return j(this,B,Q);case"utf8":case"utf-8":return n(this,B,Q);case"ascii":return a(this,B,Q);case"latin1":case"binary":return f(this,B,Q);case"base64":return e(this,B,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,B,Q);default:if(g)throw new TypeError("Unknown encoding: "+A);A=(A+"").toLowerCase(),g=!0}}.apply(this,arguments)},Y.prototype.equals=function(A){if(!Y.isBuffer(A))throw new TypeError("Argument must be a Buffer");return this===A||0===Y.compare(this,A)},Y.prototype.inspect=function(){var A="",B=g.INSPECT_MAX_BYTES;return this.length>0&&(A=this.toString("hex",0,B).match(/.{2}/g).join(" "),this.length>B&&(A+=" ... ")),"<Buffer "+A+">"},Y.prototype.compare=function(A,B,Q,g,E){if(!Y.isBuffer(A))throw new TypeError("Argument must be a Buffer");if(void 0===B&&(B=0),void 0===Q&&(Q=A?A.length:0),void 0===g&&(g=0),void 0===E&&(E=this.length),B<0||Q>A.length||g<0||E>this.length)throw new RangeError("out of range index");if(g>=E&&B>=Q)return 0;if(g>=E)return-1;if(B>=Q)return 1;if(B>>>=0,Q>>>=0,g>>>=0,E>>>=0,this===A)return 0;for(var C=E-g,w=Q-B,I=Math.min(C,w),M=this.slice(g,E),F=A.slice(B,Q),D=0;D<I;++D)if(M[D]!==F[D]){C=M[D],w=F[D];break}return C<w?-1:w<C?1:0},Y.prototype.includes=function(A,B,Q){return-1!==this.indexOf(A,B,Q)},Y.prototype.indexOf=function(A,B,Q){return s(this,A,B,Q,!0)},Y.prototype.lastIndexOf=function(A,B,Q){return s(this,A,B,Q,!1)},Y.prototype.write=function(A,B,Q,g){if(void 0===B)g="utf8",Q=this.length,B=0;else if(void 0===Q&&"string"==typeof B)g=B,Q=this.length,B=0;else{if(!isFinite(B))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");B|=0,isFinite(Q)?(Q|=0,void 0===g&&(g="utf8")):(g=Q,Q=void 0)}var E=this.length-B;if((void 0===Q||Q>E)&&(Q=E),A.length>0&&(Q<0||B<0)||B>this.length)throw new RangeError("Attempt to write outside buffer bounds");g||(g="utf8");for(var C=!1;;)switch(g){case"hex":return h(this,A,B,Q);case"utf8":case"utf-8":return H(this,A,B,Q);case"ascii":return o(this,A,B,Q);case"latin1":case"binary":return J(this,A,B,Q);case"base64":return t(this,A,B,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,A,B,Q);default:if(C)throw new TypeError("Unknown encoding: "+g);g=(""+g).toLowerCase(),C=!0}},Y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var r=4096;function a(A,B,Q){var g="";Q=Math.min(A.length,Q);for(var E=B;E<Q;++E)g+=String.fromCharCode(127&A[E]);return g}function f(A,B,Q){var g="";Q=Math.min(A.length,Q);for(var E=B;E<Q;++E)g+=String.fromCharCode(A[E]);return g}function j(A,B,Q){var g=A.length;(!B||B<0)&&(B=0),(!Q||Q<0||Q>g)&&(Q=g);for(var E="",C=B;C<Q;++C)E+=l(A[C]);return E}function x(A,B,Q){for(var g=A.slice(B,Q),E="",C=0;C<g.length;C+=2)E+=String.fromCharCode(g[C]+256*g[C+1]);return E}function k(A,B,Q){if(A%1!=0||A<0)throw new RangeError("offset is not uint");if(A+B>Q)throw new RangeError("Trying to access beyond buffer length")}function y(A,B,Q,g,E,C){if(!Y.isBuffer(A))throw new TypeError('"buffer" argument must be a Buffer instance');if(B>E||B<C)throw new RangeError('"value" argument is out of bounds');if(Q+g>A.length)throw new RangeError("Index out of range")}function T(A,B,Q,g){B<0&&(B=65535+B+1);for(var E=0,C=Math.min(A.length-Q,2);E<C;++E)A[Q+E]=(B&255<<8*(g?E:1-E))>>>8*(g?E:1-E)}function z(A,B,Q,g){B<0&&(B=4294967295+B+1);for(var E=0,C=Math.min(A.length-Q,4);E<C;++E)A[Q+E]=B>>>8*(g?E:3-E)&255}function d(A,B,Q,g,E,C){if(Q+g>A.length)throw new RangeError("Index out of range");if(Q<0)throw new RangeError("Index out of range")}function m(A,B,Q,g,C){return C||d(A,0,Q,4),E.write(A,B,Q,g,23,4),Q+4}function L(A,B,Q,g,C){return C||d(A,0,Q,8),E.write(A,B,Q,g,52,8),Q+8}Y.prototype.slice=function(A,B){var Q,g=this.length;if(A=~~A,B=void 0===B?g:~~B,A<0?(A+=g)<0&&(A=0):A>g&&(A=g),B<0?(B+=g)<0&&(B=0):B>g&&(B=g),B<A&&(B=A),Y.TYPED_ARRAY_SUPPORT)(Q=this.subarray(A,B)).__proto__=Y.prototype;else{var E=B-A;Q=new Y(E,void 0);for(var C=0;C<E;++C)Q[C]=this[C+A]}return Q},Y.prototype.readUIntLE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=this[A],E=1,C=0;++C<B&&(E*=256);)g+=this[A+C]*E;return g},Y.prototype.readUIntBE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=this[A+--B],E=1;B>0&&(E*=256);)g+=this[A+--B]*E;return g},Y.prototype.readUInt8=function(A,B){return B||k(A,1,this.length),this[A]},Y.prototype.readUInt16LE=function(A,B){return B||k(A,2,this.length),this[A]|this[A+1]<<8},Y.prototype.readUInt16BE=function(A,B){return B||k(A,2,this.length),this[A]<<8|this[A+1]},Y.prototype.readUInt32LE=function(A,B){return B||k(A,4,this.length),(this[A]|this[A+1]<<8|this[A+2]<<16)+16777216*this[A+3]},Y.prototype.readUInt32BE=function(A,B){return B||k(A,4,this.length),16777216*this[A]+(this[A+1]<<16|this[A+2]<<8|this[A+3])},Y.prototype.readIntLE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=this[A],E=1,C=0;++C<B&&(E*=256);)g+=this[A+C]*E;return g>=(E*=128)&&(g-=Math.pow(2,8*B)),g},Y.prototype.readIntBE=function(A,B,Q){A|=0,B|=0,Q||k(A,B,this.length);for(var g=B,E=1,C=this[A+--g];g>0&&(E*=256);)C+=this[A+--g]*E;return C>=(E*=128)&&(C-=Math.pow(2,8*B)),C},Y.prototype.readInt8=function(A,B){return B||k(A,1,this.length),128&this[A]?-1*(255-this[A]+1):this[A]},Y.prototype.readInt16LE=function(A,B){B||k(A,2,this.length);var Q=this[A]|this[A+1]<<8;return 32768&Q?4294901760|Q:Q},Y.prototype.readInt16BE=function(A,B){B||k(A,2,this.length);var Q=this[A+1]|this[A]<<8;return 32768&Q?4294901760|Q:Q},Y.prototype.readInt32LE=function(A,B){return B||k(A,4,this.length),this[A]|this[A+1]<<8|this[A+2]<<16|this[A+3]<<24},Y.prototype.readInt32BE=function(A,B){return B||k(A,4,this.length),this[A]<<24|this[A+1]<<16|this[A+2]<<8|this[A+3]},Y.prototype.readFloatLE=function(A,B){return B||k(A,4,this.length),E.read(this,A,!0,23,4)},Y.prototype.readFloatBE=function(A,B){return B||k(A,4,this.length),E.read(this,A,!1,23,4)},Y.prototype.readDoubleLE=function(A,B){return B||k(A,8,this.length),E.read(this,A,!0,52,8)},Y.prototype.readDoubleBE=function(A,B){return B||k(A,8,this.length),E.read(this,A,!1,52,8)},Y.prototype.writeUIntLE=function(A,B,Q,g){(A=+A,B|=0,Q|=0,g)||y(this,A,B,Q,Math.pow(2,8*Q)-1,0);var E=1,C=0;for(this[B]=255&A;++C<Q&&(E*=256);)this[B+C]=A/E&255;return B+Q},Y.prototype.writeUIntBE=function(A,B,Q,g){(A=+A,B|=0,Q|=0,g)||y(this,A,B,Q,Math.pow(2,8*Q)-1,0);var E=Q-1,C=1;for(this[B+E]=255&A;--E>=0&&(C*=256);)this[B+E]=A/C&255;return B+Q},Y.prototype.writeUInt8=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,1,255,0),Y.TYPED_ARRAY_SUPPORT||(A=Math.floor(A)),this[B]=255&A,B+1},Y.prototype.writeUInt16LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,65535,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8):T(this,A,B,!0),B+2},Y.prototype.writeUInt16BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,65535,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>8,this[B+1]=255&A):T(this,A,B,!1),B+2},Y.prototype.writeUInt32LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,4294967295,0),Y.TYPED_ARRAY_SUPPORT?(this[B+3]=A>>>24,this[B+2]=A>>>16,this[B+1]=A>>>8,this[B]=255&A):z(this,A,B,!0),B+4},Y.prototype.writeUInt32BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,4294967295,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>24,this[B+1]=A>>>16,this[B+2]=A>>>8,this[B+3]=255&A):z(this,A,B,!1),B+4},Y.prototype.writeIntLE=function(A,B,Q,g){if(A=+A,B|=0,!g){var E=Math.pow(2,8*Q-1);y(this,A,B,Q,E-1,-E)}var C=0,w=1,I=0;for(this[B]=255&A;++C<Q&&(w*=256);)A<0&&0===I&&0!==this[B+C-1]&&(I=1),this[B+C]=(A/w>>0)-I&255;return B+Q},Y.prototype.writeIntBE=function(A,B,Q,g){if(A=+A,B|=0,!g){var E=Math.pow(2,8*Q-1);y(this,A,B,Q,E-1,-E)}var C=Q-1,w=1,I=0;for(this[B+C]=255&A;--C>=0&&(w*=256);)A<0&&0===I&&0!==this[B+C+1]&&(I=1),this[B+C]=(A/w>>0)-I&255;return B+Q},Y.prototype.writeInt8=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,1,127,-128),Y.TYPED_ARRAY_SUPPORT||(A=Math.floor(A)),A<0&&(A=255+A+1),this[B]=255&A,B+1},Y.prototype.writeInt16LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,32767,-32768),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8):T(this,A,B,!0),B+2},Y.prototype.writeInt16BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,2,32767,-32768),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>8,this[B+1]=255&A):T(this,A,B,!1),B+2},Y.prototype.writeInt32LE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,2147483647,-2147483648),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8,this[B+2]=A>>>16,this[B+3]=A>>>24):z(this,A,B,!0),B+4},Y.prototype.writeInt32BE=function(A,B,Q){return A=+A,B|=0,Q||y(this,A,B,4,2147483647,-2147483648),A<0&&(A=4294967295+A+1),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>24,this[B+1]=A>>>16,this[B+2]=A>>>8,this[B+3]=255&A):z(this,A,B,!1),B+4},Y.prototype.writeFloatLE=function(A,B,Q){return m(this,A,B,!0,Q)},Y.prototype.writeFloatBE=function(A,B,Q){return m(this,A,B,!1,Q)},Y.prototype.writeDoubleLE=function(A,B,Q){return L(this,A,B,!0,Q)},Y.prototype.writeDoubleBE=function(A,B,Q){return L(this,A,B,!1,Q)},Y.prototype.copy=function(A,B,Q,g){if(Q||(Q=0),g||0===g||(g=this.length),B>=A.length&&(B=A.length),B||(B=0),g>0&&g<Q&&(g=Q),g===Q)return 0;if(0===A.length||0===this.length)return 0;if(B<0)throw new RangeError("targetStart out of bounds");if(Q<0||Q>=this.length)throw new RangeError("sourceStart out of bounds");if(g<0)throw new RangeError("sourceEnd out of bounds");g>this.length&&(g=this.length),A.length-B<g-Q&&(g=A.length-B+Q);var E,C=g-Q;if(this===A&&Q<B&&B<g)for(E=C-1;E>=0;--E)A[E+B]=this[E+Q];else if(C<1e3||!Y.TYPED_ARRAY_SUPPORT)for(E=0;E<C;++E)A[E+B]=this[E+Q];else Uint8Array.prototype.set.call(A,this.subarray(Q,Q+C),B);return C},Y.prototype.fill=function(A,B,Q,g){if("string"==typeof A){if("string"==typeof B?(g=B,B=0,Q=this.length):"string"==typeof Q&&(g=Q,Q=this.length),1===A.length){var E=A.charCodeAt(0);E<256&&(A=E)}if(void 0!==g&&"string"!=typeof g)throw new TypeError("encoding must be a string");if("string"==typeof g&&!Y.isEncoding(g))throw new TypeError("Unknown encoding: "+g)}else"number"==typeof A&&(A&=255);if(B<0||this.length<B||this.length<Q)throw new RangeError("Out of range index");if(Q<=B)return this;var C;if(B>>>=0,Q=void 0===Q?this.length:Q>>>0,A||(A=0),"number"==typeof A)for(C=B;C<Q;++C)this[C]=A;else{var w=Y.isBuffer(A)?A:W(new Y(A,g).toString()),I=w.length;for(C=0;C<Q-B;++C)this[C+B]=w[C%I]}return this};var S=/[^+\/0-9A-Za-z-_]/g;function l(A){return A<16?"0"+A.toString(16):A.toString(16)}function W(A,B){var Q;B=B||1/0;for(var g=A.length,E=null,C=[],w=0;w<g;++w){if((Q=A.charCodeAt(w))>55295&&Q<57344){if(!E){if(Q>56319){(B-=3)>-1&&C.push(239,191,189);continue}if(w+1===g){(B-=3)>-1&&C.push(239,191,189);continue}E=Q;continue}if(Q<56320){(B-=3)>-1&&C.push(239,191,189),E=Q;continue}Q=65536+(E-55296<<10|Q-56320)}else E&&(B-=3)>-1&&C.push(239,191,189);if(E=null,Q<128){if((B-=1)<0)break;C.push(Q)}else if(Q<2048){if((B-=2)<0)break;C.push(Q>>6|192,63&Q|128)}else if(Q<65536){if((B-=3)<0)break;C.push(Q>>12|224,Q>>6&63|128,63&Q|128)}else{if(!(Q<1114112))throw new Error("Invalid code point");if((B-=4)<0)break;C.push(Q>>18|240,Q>>12&63|128,Q>>6&63|128,63&Q|128)}}return C}function u(A){return Q.toByteArray(function(A){if((A=function(A){return A.trim?A.trim():A.replace(/^\s+|\s+$/g,"")}(A).replace(S,"")).length<2)return"";for(;A.length%4!=0;)A+="=";return A}(A))}function V(A,B,Q,g){for(var E=0;E<g&&!(E+Q>=B.length||E>=A.length);++E)B[E+Q]=A[E];return E}}).call(this,void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{})},{"base64-js":3,ieee754:30,isarray:35}],15:[function(A,B,Q){(function(A){function B(A){return Object.prototype.toString.call(A)}Q.isArray=function(A){return Array.isArray?Array.isArray(A):"[object Array]"===B(A)},Q.isBoolean=function(A){return"boolean"==typeof A},Q.isNull=function(A){return null===A},Q.isNullOrUndefined=function(A){return null==A},Q.isNumber=function(A){return"number"==typeof A},Q.isString=function(A){return"string"==typeof A},Q.isSymbol=function(A){return"symbol"===(void 0===A?"undefined":I(A))},Q.isUndefined=function(A){return void 0===A},Q.isRegExp=function(A){return"[object RegExp]"===B(A)},Q.isObject=function(A){return"object"===(void 0===A?"undefined":I(A))&&null!==A},Q.isDate=function(A){return"[object Date]"===B(A)},Q.isError=function(A){return"[object Error]"===B(A)||A instanceof Error},Q.isFunction=function(A){return"function"==typeof A},Q.isPrimitive=function(A){return null===A||"boolean"==typeof A||"number"==typeof A||"string"==typeof A||"symbol"===(void 0===A?"undefined":I(A))||void 0===A},Q.isBuffer=A.isBuffer}).call(this,{isBuffer:A("../../is-buffer/index.js")})},{"../../is-buffer/index.js":33}],16:[function(B,g,E){(function(A,Y){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */
(function(){"use strict";function M(A){return"function"==typeof A}var F,D,c=Array.isArray?Array.isArray:function(A){return"[object Array]"===Object.prototype.toString.call(A)},U=0,i=function(A,B){r[U]=A,r[U+1]=B,2===(U+=2)&&(D?D(a):J())};var G=void 0!==w?w:void 0,s=G||{},N=s.MutationObserver||s.WebKitMutationObserver,h="undefined"==typeof self&&void 0!==A&&"[object process]"==={}.toString.call(A),H="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function o(){return function(){setTimeout(a,1)}}var J,t,R,e,n,r=new Array(1e3);function a(){for(var A=0;A<U;A+=2){(0,r[A])(r[A+1]),r[A]=void 0,r[A+1]=void 0}U=0}h?J=function(){A.nextTick(a)}:N?(R=0,e=new N(a),n=document.createTextNode(""),e.observe(n,{characterData:!0}),J=function(){n.data=R=++R%2}):H?((t=new MessageChannel).port1.onmessage=a,J=function(){t.port2.postMessage(0)}):J=void 0===G&&"function"==typeof B?function(){try{var A=B("vertx");return F=A.runOnLoop||A.runOnContext,function(){F(a)}}catch(A){return o()}}():o();var f=function(A,B){var Q=this,g=new this.constructor(k);void 0===g[x]&&v(g);var E=Q._state;if(E){var C=arguments[E-1];i(function(){p(E,g,C,Q._result)})}else V(Q,g,A,B);return g};var j=function(A){if(A&&"object"===(void 0===A?"undefined":I(A))&&A.constructor===this)return A;var B=new this(k);return S(B,A),B},x=Math.random().toString(36).substring(16);function k(){}var y=void 0,T=1,z=2,d=new P;function m(A){try{return A.then}catch(A){return d.error=A,d}}function L(A,B,Q){B.constructor===A.constructor&&Q===f&&constructor.resolve===j?function(A,B){B._state===T?W(A,B._result):B._state===z?u(A,B._result):V(B,void 0,function(B){S(A,B)},function(B){u(A,B)})}(A,B):Q===d?u(A,d.error):void 0===Q?W(A,B):M(Q)?function(A,B,Q){i(function(A){var g=!1,E=function(A,B,Q,g){try{A.call(B,Q,g)}catch(A){return A}}(Q,B,function(Q){g||(g=!0,B!==Q?S(A,Q):W(A,Q))},function(B){g||(g=!0,u(A,B))},A._label);!g&&E&&(g=!0,u(A,E))},A)}(A,B,Q):W(A,B)}function S(A,B){var Q;A===B?u(A,new TypeError("You cannot resolve a promise with itself")):"function"==typeof(Q=B)||"object"===(void 0===Q?"undefined":I(Q))&&null!==Q?L(A,B,m(B)):W(A,B)}function l(A){A._onerror&&A._onerror(A._result),K(A)}function W(A,B){A._state===y&&(A._result=B,A._state=T,0!==A._subscribers.length&&i(K,A))}function u(A,B){A._state===y&&(A._state=z,A._result=B,i(l,A))}function V(A,B,Q,g){var E=A._subscribers,C=E.length;A._onerror=null,E[C]=B,E[C+T]=Q,E[C+z]=g,0===C&&A._state&&i(K,A)}function K(A){var B=A._subscribers,Q=A._state;if(0!==B.length){for(var g,E,C=A._result,w=0;w<B.length;w+=3)g=B[w],E=B[w+Q],g?p(Q,g,E,C):E(C);A._subscribers.length=0}}function P(){this.error=null}var X=new P;function p(A,B,Q,g){var E,C,w,I,Y=M(Q);if(Y){if((E=function(A,B){try{return A(B)}catch(A){return X.error=A,X}}(Q,g))===X?(I=!0,C=E.error,E=null):w=!0,B===E)return void u(B,new TypeError("A promises callback cannot return that same promise."))}else E=g,w=!0;B._state!==y||(Y&&w?S(B,E):I?u(B,C):A===T?W(B,E):A===z&&u(B,E))}var b=0;function v(A){A[x]=b++,A._state=void 0,A._result=void 0,A._subscribers=[]}var Z=function(A){return new AA(this,A).promise};var O=function(A){var B=this;return c(A)?new B(function(Q,g){for(var E=A.length,C=0;C<E;C++)B.resolve(A[C]).then(Q,g)}):new B(function(A,B){B(new TypeError("You must pass an array to race."))})};var q=function(A){var B=new this(k);return u(B,A),B};var _=$;function $(A){this[x]=b++,this._result=this._state=void 0,this._subscribers=[],k!==A&&("function"!=typeof A&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof $?function(A,B){try{B(function(B){S(A,B)},function(B){u(A,B)})}catch(B){u(A,B)}}(this,A):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}$.all=Z,$.race=O,$.resolve=j,$.reject=q,$._setScheduler=function(A){D=A},$._setAsap=function(A){i=A},$._asap=i,$.prototype={constructor:$,then:f,catch:function(A){return this.then(null,A)}};var AA=BA;function BA(A,B){this._instanceConstructor=A,this.promise=new A(k),this.promise[x]||v(this.promise),c(B)?(this._input=B,this.length=B.length,this._remaining=B.length,this._result=new Array(this.length),0===this.length?W(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&W(this.promise,this._result))):u(this.promise,new Error("Array Methods must be provided an Array"))}BA.prototype._enumerate=function(){for(var A=this.length,B=this._input,Q=0;this._state===y&&Q<A;Q++)this._eachEntry(B[Q],Q)},BA.prototype._eachEntry=function(A,B){var Q=this._instanceConstructor,g=Q.resolve;if(g===j){var E=m(A);if(E===f&&A._state!==y)this._settledAt(A._state,B,A._result);else if("function"!=typeof E)this._remaining--,this._result[B]=A;else if(Q===_){var C=new Q(k);L(C,A,E),this._willSettleAt(C,B)}else this._willSettleAt(new Q(function(B){B(A)}),B)}else this._willSettleAt(g(A),B)},BA.prototype._settledAt=function(A,B,Q){var g=this.promise;g._state===y&&(this._remaining--,A===z?u(g,Q):this._result[B]=Q),0===this._remaining&&W(g,this._result)},BA.prototype._willSettleAt=function(A,B){var Q=this;V(A,void 0,function(A){Q._settledAt(T,B,A)},function(A){Q._settledAt(z,B,A)})};var QA=function(){var A;if(void 0!==Y)A=Y;else if("undefined"!=typeof self)A=self;else try{A=Function("return this")()}catch(A){throw new Error("polyfill failed because global object is unavailable in this environment")}var B=A.Promise;B&&"[object Promise]"===Object.prototype.toString.call(B.resolve())&&!B.cast||(A.Promise=_)},gA={Promise:_,polyfill:QA};void 0===(C=function(){return gA}.call(E,Q,E,g))||(g.exports=C),QA()}).call(this)}).call(this,B("_process"),void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{})},{_process:12}],17:[function(A,B,Q){function g(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function E(A){return"function"==typeof A}function C(A){return"object"===(void 0===A?"undefined":I(A))&&null!==A}function w(A){return void 0===A}B.exports=g,g.EventEmitter=g,g.prototype._events=void 0,g.prototype._maxListeners=void 0,g.defaultMaxListeners=10,g.prototype.setMaxListeners=function(A){if("number"!=typeof A||A<0||isNaN(A))throw TypeError("n must be a positive number");return this._maxListeners=A,this},g.prototype.emit=function(A){var B,Q,g,I,Y,M;if(this._events||(this._events={}),"error"===A&&(!this._events.error||C(this._events.error)&&!this._events.error.length)){if((B=arguments[1])instanceof Error)throw B;var F=new Error('Uncaught, unspecified "error" event. ('+B+")");throw F.context=B,F}if(w(Q=this._events[A]))return!1;if(E(Q))switch(arguments.length){case 1:Q.call(this);break;case 2:Q.call(this,arguments[1]);break;case 3:Q.call(this,arguments[1],arguments[2]);break;default:I=Array.prototype.slice.call(arguments,1),Q.apply(this,I)}else if(C(Q))for(I=Array.prototype.slice.call(arguments,1),g=(M=Q.slice()).length,Y=0;Y<g;Y++)M[Y].apply(this,I);return!0},g.prototype.addListener=function(A,B){var Q;if(!E(B))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",A,E(B.listener)?B.listener:B),this._events[A]?C(this._events[A])?this._events[A].push(B):this._events[A]=[this._events[A],B]:this._events[A]=B,C(this._events[A])&&!this._events[A].warned&&(Q=w(this._maxListeners)?g.defaultMaxListeners:this._maxListeners)&&Q>0&&this._events[A].length>Q&&(this._events[A].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[A].length),"function"==typeof console.trace&&console.trace()),this},g.prototype.on=g.prototype.addListener,g.prototype.once=function(A,B){if(!E(B))throw TypeError("listener must be a function");var Q=!1;function g(){this.removeListener(A,g),Q||(Q=!0,B.apply(this,arguments))}return g.listener=B,this.on(A,g),this},g.prototype.removeListener=function(A,B){var Q,g,w,I;if(!E(B))throw TypeError("listener must be a function");if(!this._events||!this._events[A])return this;if(w=(Q=this._events[A]).length,g=-1,Q===B||E(Q.listener)&&Q.listener===B)delete this._events[A],this._events.removeListener&&this.emit("removeListener",A,B);else if(C(Q)){for(I=w;I-- >0;)if(Q[I]===B||Q[I].listener&&Q[I].listener===B){g=I;break}if(g<0)return this;1===Q.length?(Q.length=0,delete this._events[A]):Q.splice(g,1),this._events.removeListener&&this.emit("removeListener",A,B)}return this},g.prototype.removeAllListeners=function(A){var B,Q;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[A]&&delete this._events[A],this;if(0===arguments.length){for(B in this._events)"removeListener"!==B&&this.removeAllListeners(B);return this.removeAllListeners("removeListener"),this._events={},this}if(E(Q=this._events[A]))this.removeListener(A,Q);else if(Q)for(;Q.length;)this.removeListener(A,Q[Q.length-1]);return delete this._events[A],this},g.prototype.listeners=function(A){return this._events&&this._events[A]?E(this._events[A])?[this._events[A]]:this._events[A].slice():[]},g.prototype.listenerCount=function(A){if(this._events){var B=this._events[A];if(E(B))return 1;if(B)return B.length}return 0},g.listenerCount=function(A,B){return A.listenerCount(B)}},{}],18:[function(A,B,Q){var g=A("./lib/parser");B.exports={create:function(B,Q){if(B instanceof(Q=Q||function(){return this}()).ArrayBuffer){var E=A("./lib/dom-bufferstream");return new g(new E(B,0,B.byteLength,!0,Q))}var C=A("./lib/bufferstream");return new g(new C(B,0,B.length,!0))}}},{"./lib/bufferstream":19,"./lib/dom-bufferstream":21,"./lib/parser":25}],19:[function(A,B,Q){function g(A,B,Q,g){this.buffer=A,this.offset=B||0,Q="number"==typeof Q?Q:A.length,this.endPosition=this.offset+Q,this.setBigEndian(g)}g.prototype={setBigEndian:function(A){this.bigEndian=!!A},nextUInt8:function(){var A=this.buffer.readUInt8(this.offset);return this.offset+=1,A},nextInt8:function(){var A=this.buffer.readInt8(this.offset);return this.offset+=1,A},nextUInt16:function(){var A=this.bigEndian?this.buffer.readUInt16BE(this.offset):this.buffer.readUInt16LE(this.offset);return this.offset+=2,A},nextUInt32:function(){var A=this.bigEndian?this.buffer.readUInt32BE(this.offset):this.buffer.readUInt32LE(this.offset);return this.offset+=4,A},nextInt16:function(){var A=this.bigEndian?this.buffer.readInt16BE(this.offset):this.buffer.readInt16LE(this.offset);return this.offset+=2,A},nextInt32:function(){var A=this.bigEndian?this.buffer.readInt32BE(this.offset):this.buffer.readInt32LE(this.offset);return this.offset+=4,A},nextFloat:function(){var A=this.bigEndian?this.buffer.readFloatBE(this.offset):this.buffer.readFloatLE(this.offset);return this.offset+=4,A},nextDouble:function(){var A=this.bigEndian?this.buffer.readDoubleBE(this.offset):this.buffer.readDoubleLE(this.offset);return this.offset+=8,A},nextBuffer:function(A){var B=this.buffer.slice(this.offset,this.offset+A);return this.offset+=A,B},remainingLength:function(){return this.endPosition-this.offset},nextString:function(A){var B=this.buffer.toString("ascii",this.offset,this.offset+A);return this.offset+=A,B},mark:function(){var A=this;return{openWithOffset:function(B){return B=(B||0)+this.offset,new g(A.buffer,B,A.endPosition-B,A.bigEndian)},offset:this.offset}},offsetFrom:function(A){return this.offset-A.offset},skip:function(A){this.offset+=A},branch:function(A,B){return B="number"==typeof B?B:this.endPosition-(this.offset+A),new g(this.buffer,this.offset+A,B,this.bigEndian)}},B.exports=g},{}],20:[function(A,B,Q){function g(A){return parseInt(A,10)}var E=3600,C=60;function w(A,B){A=A.map(g),B=B.map(g);var Q=new Date;return Q.setUTCFullYear(A[0]),Q.setUTCMonth(A[1]-1),Q.setUTCDate(A[2]),Q.setUTCHours(B[0]),Q.setUTCMinutes(B[1]),Q.setUTCSeconds(B[2]),Q.setUTCMilliseconds(0),Q.getTime()/1e3}function I(A){var B=A.substr(0,10).split("-"),Q=A.substr(11,8).split(":"),I=A.substr(19,6).split(":").map(g),Y=I[0]*E+I[1]*C,M=w(B,Q);if("number"==typeof(M-=Y)&&!isNaN(M))return M}function Y(A){var B=A.split(" "),Q=w(B[0].split(":"),B[1].split(":"));if("number"==typeof Q&&!isNaN(Q))return Q}B.exports={parseDateWithSpecFormat:Y,parseDateWithTimezoneFormat:I,parseExifDate:function(A){var B=19===A.length&&":"===A.charAt(4);return 25===A.length&&"T"===A.charAt(10)?I(A):B?Y(A):void 0}}},{}],21:[function(A,B,Q){function g(A,B,Q,g,E,C){this.global=E,B=B||0,Q=Q||A.byteLength-B,this.arrayBuffer=A.slice(B,B+Q),this.view=new E.DataView(this.arrayBuffer,0,this.arrayBuffer.byteLength),this.setBigEndian(g),this.offset=0,this.parentOffset=(C||0)+B}g.prototype={setBigEndian:function(A){this.littleEndian=!A},nextUInt8:function(){var A=this.view.getUint8(this.offset);return this.offset+=1,A},nextInt8:function(){var A=this.view.getInt8(this.offset);return this.offset+=1,A},nextUInt16:function(){var A=this.view.getUint16(this.offset,this.littleEndian);return this.offset+=2,A},nextUInt32:function(){var A=this.view.getUint32(this.offset,this.littleEndian);return this.offset+=4,A},nextInt16:function(){var A=this.view.getInt16(this.offset,this.littleEndian);return this.offset+=2,A},nextInt32:function(){var A=this.view.getInt32(this.offset,this.littleEndian);return this.offset+=4,A},nextFloat:function(){var A=this.view.getFloat32(this.offset,this.littleEndian);return this.offset+=4,A},nextDouble:function(){var A=this.view.getFloat64(this.offset,this.littleEndian);return this.offset+=8,A},nextBuffer:function(A){var B=this.arrayBuffer.slice(this.offset,this.offset+A);return this.offset+=A,B},remainingLength:function(){return this.arrayBuffer.byteLength-this.offset},nextString:function(A){var B=this.arrayBuffer.slice(this.offset,this.offset+A);return B=String.fromCharCode.apply(null,new this.global.Uint8Array(B)),this.offset+=A,B},mark:function(){var A=this;return{openWithOffset:function(B){return B=(B||0)+this.offset,new g(A.arrayBuffer,B,A.arrayBuffer.byteLength-B,!A.littleEndian,A.global,A.parentOffset)},offset:this.offset,getParentOffset:function(){return A.parentOffset}}},offsetFrom:function(A){return this.parentOffset+this.offset-(A.offset+A.getParentOffset())},skip:function(A){this.offset+=A},branch:function(A,B){return B="number"==typeof B?B:this.arrayBuffer.byteLength-(this.offset+A),new g(this.arrayBuffer,this.offset+A,B,!this.littleEndian,this.global,this.parentOffset)}},B.exports=g},{}],22:[function(A,B,Q){B.exports={exif:{1:"InteropIndex",2:"InteropVersion",11:"ProcessingSoftware",254:"SubfileType",255:"OldSubfileType",256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",263:"Thresholding",264:"CellWidth",265:"CellLength",266:"FillOrder",269:"DocumentName",270:"ImageDescription",271:"Make",272:"Model",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",280:"MinSampleValue",281:"MaxSampleValue",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",285:"PageName",286:"XPosition",287:"YPosition",288:"FreeOffsets",289:"FreeByteCounts",290:"GrayResponseUnit",291:"GrayResponseCurve",292:"T4Options",293:"T6Options",296:"ResolutionUnit",297:"PageNumber",300:"ColorResponseUnit",301:"TransferFunction",305:"Software",306:"ModifyDate",315:"Artist",316:"HostComputer",317:"Predictor",318:"WhitePoint",319:"PrimaryChromaticities",320:"ColorMap",321:"HalftoneHints",322:"TileWidth",323:"TileLength",324:"TileOffsets",325:"TileByteCounts",326:"BadFaxLines",327:"CleanFaxData",328:"ConsecutiveBadFaxLines",330:"SubIFD",332:"InkSet",333:"InkNames",334:"NumberofInks",336:"DotRange",337:"TargetPrinter",338:"ExtraSamples",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",342:"TransferRange",343:"ClipPath",344:"XClipPathUnits",345:"YClipPathUnits",346:"Indexed",347:"JPEGTables",351:"OPIProxy",400:"GlobalParametersIFD",401:"ProfileType",402:"FaxProfile",403:"CodingMethods",404:"VersionYear",405:"ModeNumber",433:"Decode",434:"DefaultImageColor",435:"T82Options",437:"JPEGTables",512:"JPEGProc",513:"ThumbnailOffset",514:"ThumbnailLength",515:"JPEGRestartInterval",517:"JPEGLosslessPredictors",518:"JPEGPointTransforms",519:"JPEGQTables",520:"JPEGDCTables",521:"JPEGACTables",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite",559:"StripRowCounts",700:"ApplicationNotes",999:"USPTOMiscellaneous",4096:"RelatedImageFileFormat",4097:"RelatedImageWidth",4098:"RelatedImageHeight",18246:"Rating",18247:"XP_DIP_XML",18248:"StitchInfo",18249:"RatingPercent",32781:"ImageID",32931:"WangTag1",32932:"WangAnnotation",32933:"WangTag3",32934:"WangTag4",32995:"Matteing",32996:"DataType",32997:"ImageDepth",32998:"TileDepth",33405:"Model2",33421:"CFARepeatPatternDim",33422:"CFAPattern2",33423:"BatteryLevel",33424:"KodakIFD",33432:"Copyright",33434:"ExposureTime",33437:"FNumber",33445:"MDFileTag",33446:"MDScalePixel",33447:"MDColorTable",33448:"MDLabName",33449:"MDSampleInfo",33450:"MDPrepDate",33451:"MDPrepTime",33452:"MDFileUnits",33550:"PixelScale",33589:"AdventScale",33590:"AdventRevision",33628:"UIC1Tag",33629:"UIC2Tag",33630:"UIC3Tag",33631:"UIC4Tag",33723:"IPTC-NAA",33918:"IntergraphPacketData",33919:"IntergraphFlagRegisters",33920:"IntergraphMatrix",33921:"INGRReserved",33922:"ModelTiePoint",34016:"Site",34017:"ColorSequence",34018:"IT8Header",34019:"RasterPadding",34020:"BitsPerRunLength",34021:"BitsPerExtendedRunLength",34022:"ColorTable",34023:"ImageColorIndicator",34024:"BackgroundColorIndicator",34025:"ImageColorValue",34026:"BackgroundColorValue",34027:"PixelIntensityRange",34028:"TransparencyIndicator",34029:"ColorCharacterization",34030:"HCUsage",34031:"TrapIndicator",34032:"CMYKEquivalent",34118:"SEMInfo",34152:"AFCP_IPTC",34232:"PixelMagicJBIGOptions",34264:"ModelTransform",34306:"WB_GRGBLevels",34310:"LeafData",34377:"PhotoshopSettings",34665:"ExifOffset",34675:"ICC_Profile",34687:"TIFF_FXExtensions",34688:"MultiProfiles",34689:"SharedData",34690:"T88Options",34732:"ImageLayer",34735:"GeoTiffDirectory",34736:"GeoTiffDoubleParams",34737:"GeoTiffAsciiParams",34850:"ExposureProgram",34852:"SpectralSensitivity",34853:"GPSInfo",34855:"ISO",34856:"Opto-ElectricConvFactor",34857:"Interlace",34858:"TimeZoneOffset",34859:"SelfTimerMode",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",34908:"FaxRecvParams",34909:"FaxSubAddress",34910:"FaxRecvTime",34954:"LeafSubIFD",36864:"ExifVersion",36867:"DateTimeOriginal",36868:"CreateDate",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureCompensation",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",37387:"FlashEnergy",37388:"SpatialFrequencyResponse",37389:"Noise",37390:"FocalPlaneXResolution",37391:"FocalPlaneYResolution",37392:"FocalPlaneResolutionUnit",37393:"ImageNumber",37394:"SecurityClassification",37395:"ImageHistory",37396:"SubjectArea",37397:"ExposureIndex",37398:"TIFF-EPStandardID",37399:"SensingMethod",37434:"CIP3DataFile",37435:"CIP3Sheet",37436:"CIP3Side",37439:"StoNits",37500:"MakerNote",37510:"UserComment",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",37679:"MSDocumentText",37680:"MSPropertySetStorage",37681:"MSDocumentTextPosition",37724:"ImageSourceData",40091:"XPTitle",40092:"XPComment",40093:"XPAuthor",40094:"XPKeywords",40095:"XPSubject",40960:"FlashpixVersion",40961:"ColorSpace",40962:"ExifImageWidth",40963:"ExifImageHeight",40964:"RelatedSoundFile",40965:"InteropOffset",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41485:"Noise",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41489:"ImageNumber",41490:"SecurityClassification",41491:"ImageHistory",41492:"SubjectLocation",41493:"ExposureIndex",41494:"TIFF-EPStandardID",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFormat",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"OwnerName",42033:"SerialNumber",42034:"LensInfo",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",42112:"GDALMetadata",42113:"GDALNoData",42240:"Gamma",44992:"ExpandSoftware",44993:"ExpandLens",44994:"ExpandFilm",44995:"ExpandFilterLens",44996:"ExpandScanner",44997:"ExpandFlashLamp",48129:"PixelFormat",48130:"Transformation",48131:"Uncompressed",48132:"ImageType",48256:"ImageWidth",48257:"ImageHeight",48258:"WidthResolution",48259:"HeightResolution",48320:"ImageOffset",48321:"ImageByteCount",48322:"AlphaOffset",48323:"AlphaByteCount",48324:"ImageDataDiscard",48325:"AlphaDataDiscard",50215:"OceScanjobDesc",50216:"OceApplicationSelector",50217:"OceIDNumber",50218:"OceImageLogic",50255:"Annotations",50341:"PrintIM",50560:"USPTOOriginalContentType",50706:"DNGVersion",50707:"DNGBackwardVersion",50708:"UniqueCameraModel",50709:"LocalizedCameraModel",50710:"CFAPlaneColor",50711:"CFALayout",50712:"LinearizationTable",50713:"BlackLevelRepeatDim",50714:"BlackLevel",50715:"BlackLevelDeltaH",50716:"BlackLevelDeltaV",50717:"WhiteLevel",50718:"DefaultScale",50719:"DefaultCropOrigin",50720:"DefaultCropSize",50721:"ColorMatrix1",50722:"ColorMatrix2",50723:"CameraCalibration1",50724:"CameraCalibration2",50725:"ReductionMatrix1",50726:"ReductionMatrix2",50727:"AnalogBalance",50728:"AsShotNeutral",50729:"AsShotWhiteXY",50730:"BaselineExposure",50731:"BaselineNoise",50732:"BaselineSharpness",50733:"BayerGreenSplit",50734:"LinearResponseLimit",50735:"CameraSerialNumber",50736:"DNGLensInfo",50737:"ChromaBlurRadius",50738:"AntiAliasStrength",50739:"ShadowScale",50740:"DNGPrivateData",50741:"MakerNoteSafety",50752:"RawImageSegmentation",50778:"CalibrationIlluminant1",50779:"CalibrationIlluminant2",50780:"BestQualityScale",50781:"RawDataUniqueID",50784:"AliasLayerMetadata",50827:"OriginalRawFileName",50828:"OriginalRawFileData",50829:"ActiveArea",50830:"MaskedAreas",50831:"AsShotICCProfile",50832:"AsShotPreProfileMatrix",50833:"CurrentICCProfile",50834:"CurrentPreProfileMatrix",50879:"ColorimetricReference",50898:"PanasonicTitle",50899:"PanasonicTitle2",50931:"CameraCalibrationSig",50932:"ProfileCalibrationSig",50933:"ProfileIFD",50934:"AsShotProfileName",50935:"NoiseReductionApplied",50936:"ProfileName",50937:"ProfileHueSatMapDims",50938:"ProfileHueSatMapData1",50939:"ProfileHueSatMapData2",50940:"ProfileToneCurve",50941:"ProfileEmbedPolicy",50942:"ProfileCopyright",50964:"ForwardMatrix1",50965:"ForwardMatrix2",50966:"PreviewApplicationName",50967:"PreviewApplicationVersion",50968:"PreviewSettingsName",50969:"PreviewSettingsDigest",50970:"PreviewColorSpace",50971:"PreviewDateTime",50972:"RawImageDigest",50973:"OriginalRawFileDigest",50974:"SubTileBlockSize",50975:"RowInterleaveFactor",50981:"ProfileLookTableDims",50982:"ProfileLookTableData",51008:"OpcodeList1",51009:"OpcodeList2",51022:"OpcodeList3",51041:"NoiseProfile",51043:"TimeCodes",51044:"FrameRate",51058:"TStop",51081:"ReelName",51089:"OriginalDefaultFinalSize",51090:"OriginalBestQualitySize",51091:"OriginalDefaultCropSize",51105:"CameraLabel",51107:"ProfileHueSatMapEncoding",51108:"ProfileLookTableEncoding",51109:"BaselineExposureOffset",51110:"DefaultBlackRender",51111:"NewRawImageDigest",51112:"RawToPreviewGain",51125:"DefaultUserCrop",59932:"Padding",59933:"OffsetSchema",65000:"OwnerName",65001:"SerialNumber",65002:"Lens",65024:"KDC_IFD",65100:"RawFile",65101:"Converter",65102:"WhiteBalance",65105:"Exposure",65106:"Shadows",65107:"Brightness",65108:"Contrast",65109:"Saturation",65110:"Sharpness",65111:"Smoothness",65112:"MoireFilter"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"}}},{}],23:[function(A,B,Q){function g(A,B){switch(A){case 1:return B.nextUInt8();case 3:return B.nextUInt16();case 4:return B.nextUInt32();case 5:return[B.nextUInt32(),B.nextUInt32()];case 6:return B.nextInt8();case 8:return B.nextUInt16();case 9:return B.nextUInt32();case 10:return[B.nextInt32(),B.nextInt32()];case 11:return B.nextFloat();case 12:return B.nextDouble();default:throw new Error("Invalid format while decoding: "+A)}}function E(A,B){var Q,E,C=B.nextUInt16(),w=B.nextUInt16(),I=function(A){switch(A){case 1:case 2:case 6:case 7:return 1;case 3:case 8:return 2;case 4:case 9:case 11:return 4;case 5:case 10:case 12:return 8;default:throw new Error("Invalid format: "+A)}}(w),Y=B.nextUInt32(),M=I*Y;if(M>4&&(B=A.openWithOffset(B.nextUInt32())),2===w){var F=(Q=B.nextString(Y)).indexOf("\0");-1!==F&&(Q=Q.substr(0,F))}else if(7===w)Q=B.nextBuffer(Y);else for(Q=[],E=0;E<Y;++E)Q.push(g(w,B));return M<4&&B.skip(4-M),[C,Q,w]}function C(A,B,Q){var g,C,w=B.nextUInt16();for(C=0;C<w;++C)Q((g=E(A,B))[0],g[1],g[2])}B.exports={IFD0:1,IFD1:2,GPSIFD:3,SubIFD:4,InteropIFD:5,parseTags:function(A,B){var Q,g,E,w;try{Q=function(A){if("Exif\0\0"!==A.nextString(6))throw new Error("Invalid EXIF header");var B=A.mark(),Q=A.nextUInt16();if(18761===Q)A.setBigEndian(!1);else{if(19789!==Q)throw new Error("Invalid TIFF header");A.setBigEndian(!0)}if(42!==A.nextUInt16())throw new Error("Invalid TIFF data");return B}(A)}catch(A){return!1}var I=Q.openWithOffset(A.nextUInt32()),Y=this.IFD0;C(Q,I,function(A,Q,C){switch(A){case 34853:E=Q[0];break;case 34665:g=Q[0];break;default:B(Y,A,Q,C)}});var M=I.nextUInt32();0!==M&&C(Q,Q.openWithOffset(M),B.bind(null,this.IFD1));E&&C(Q,Q.openWithOffset(E),B.bind(null,this.GPSIFD));if(g){var F=Q.openWithOffset(g),D=this.InteropIFD;C(Q,F,function(A,Q,g){40965===A?w=Q[0]:B(D,A,Q,g)})}w&&C(Q,Q.openWithOffset(w),B.bind(null,this.InteropIFD));return!0}}},{}],24:[function(A,B,Q){B.exports={parseSections:function(A,B){var Q,g;for(A.setBigEndian(!0);A.remainingLength()>0&&218!==g;){if(255!==A.nextUInt8())throw new Error("Invalid JPEG section offset");Q=(g=A.nextUInt8())>=208&&g<=217||218===g?0:A.nextUInt16()-2,B(g,A.branch(0,Q)),A.skip(Q)}},getSizeFromSOFSection:function(A){return A.skip(1),{height:A.nextUInt16(),width:A.nextUInt16()}},getSectionName:function(A){var B,Q;switch(A){case 216:B="SOI";break;case 196:B="DHT";break;case 219:B="DQT";break;case 221:B="DRI";break;case 218:B="SOS";break;case 254:B="COM";break;case 217:B="EOI";break;default:A>=224&&A<=239?(B="APP",Q=A-224):A>=192&&A<=207&&196!==A&&200!==A&&204!==A?(B="SOF",Q=A-192):A>=208&&A<=215&&(B="RST",Q=A-208)}var g={name:B};return"number"==typeof Q&&(g.index=Q),g}}},{}],25:[function(A,B,Q){var g=A("./jpeg"),E=A("./exif"),C=A("./simplify");function w(A,B,Q,g,E,C,w){this.startMarker=A,this.tags=B,this.imageSize=Q,this.thumbnailOffset=g,this.thumbnailLength=E,this.thumbnailType=C,this.app1Offset=w}function I(A){this.stream=A,this.flags={readBinaryTags:!1,resolveTagNames:!0,simplifyValues:!0,imageSize:!0,hidePointers:!0,returnTags:!0}}w.prototype={hasThumbnail:function(A){return!(!this.thumbnailOffset||!this.thumbnailLength)&&("string"!=typeof A||("image/jpeg"===A.toLowerCase().trim()?6===this.thumbnailType:"image/tiff"===A.toLowerCase().trim()&&1===this.thumbnailType))},getThumbnailOffset:function(){return this.app1Offset+6+this.thumbnailOffset},getThumbnailLength:function(){return this.thumbnailLength},getThumbnailBuffer:function(){return this._getThumbnailStream().nextBuffer(this.thumbnailLength)},_getThumbnailStream:function(){return this.startMarker.openWithOffset(this.getThumbnailOffset())},getImageSize:function(){return this.imageSize},getThumbnailSize:function(){var A,B=this._getThumbnailStream();return g.parseSections(B,function(B,Q){"SOF"===g.getSectionName(B).name&&(A=g.getSizeFromSOFSection(Q))}),A}},I.prototype={enableBinaryFields:function(A){return this.flags.readBinaryTags=!!A,this},enablePointers:function(A){return this.flags.hidePointers=!A,this},enableTagNames:function(A){return this.flags.resolveTagNames=!!A,this},enableImageSize:function(A){return this.flags.imageSize=!!A,this},enableReturnTags:function(A){return this.flags.returnTags=!!A,this},enableSimpleValues:function(A){return this.flags.simplifyValues=!!A,this},parse:function(){var B,Q,I,Y,M,F,D,c,U,i=this.stream.mark(),G=i.openWithOffset(0),s=this.flags;return s.resolveTagNames&&(D=A("./exif-tags")),s.resolveTagNames?(B={},c=function(A){return B[A.name]},U=function(A,Q){B[A.name]=Q}):(B=[],c=function(A){var Q;for(Q=0;Q<B.length;++Q)if(B[Q].type===A.type&&B[Q].section===A.section)return B.value},U=function(A,Q){var g;for(g=0;g<B.length;++g)if(B[g].type===A.type&&B[g].section===A.section)return void(B.value=Q)}),g.parseSections(G,function(A,w){var c=w.offsetFrom(i);225===A?E.parseTags(w,function(A,Q,g,w){if(s.readBinaryTags||7!==w){if(513===Q){if(I=g[0],s.hidePointers)return}else if(514===Q){if(Y=g[0],s.hidePointers)return}else if(259===Q&&(M=g[0],s.hidePointers))return;if(s.returnTags)if(s.simplifyValues&&(g=C.simplifyValue(g,w)),s.resolveTagNames){var F=(A===E.GPSIFD?D.gps:D.exif)[Q];F||(F=D.exif[Q]),B[F]=g}else B.push({section:A,type:Q,value:g})}})&&(F=c):s.imageSize&&"SOF"===g.getSectionName(A).name&&(Q=g.getSizeFromSOFSection(w))}),s.simplifyValues&&(C.castDegreeValues(c,U),C.castDateValues(c,U)),new w(i,B,Q,I,Y,M,F)}},B.exports=I},{"./exif":23,"./exif-tags":22,"./jpeg":24,"./simplify":26}],26:[function(A,B,Q){var g=A("./exif"),E=A("./date"),C=[{section:g.GPSIFD,type:2,name:"GPSLatitude",refType:1,refName:"GPSLatitudeRef",posVal:"N"},{section:g.GPSIFD,type:4,name:"GPSLongitude",refType:3,refName:"GPSLongitudeRef",posVal:"E"}],w=[{section:g.SubIFD,type:36867,name:"DateTimeOriginal"},{section:g.SubIFD,type:36868,name:"CreateDate"}];B.exports={castDegreeValues:function(A,B){C.forEach(function(Q){var g=A(Q);if(g){var E=A({section:Q.section,type:Q.refType,name:Q.refName})===Q.posVal?1:-1,C=(g[0]+g[1]/60+g[2]/3600)*E;B(Q,C)}})},castDateValues:function(A,B){w.forEach(function(Q){var g=A(Q);if(g){var C=E.parseExifDate(g);void 0!==C&&B(Q,C)}})},simplifyValue:function(A,B){return Array.isArray(A)&&1===(A=A.map(function(A){return 10===B||5===B?A[0]/A[1]:A})).length&&(A=A[0]),A}}},{"./date":20,"./exif":23}],27:[function(A,B,Q){"use strict";B.exports=function(A){return A&&A.length>1?255===A[0]&&216===A[1]&&255===A[2]?{ext:"jpg",mime:"image/jpeg"}:137===A[0]&&80===A[1]&&78===A[2]&&71===A[3]?{ext:"png",mime:"image/png"}:71===A[0]&&73===A[1]&&70===A[2]?{ext:"gif",mime:"image/gif"}:87===A[8]&&69===A[9]&&66===A[10]&&80===A[11]?{ext:"webp",mime:"image/webp"}:(73===A[0]&&73===A[1]&&42===A[2]&&0===A[3]||77===A[0]&&77===A[1]&&0===A[2]&&42===A[3])&&67===A[8]&&82===A[9]?{ext:"cr2",mime:"image/x-canon-cr2"}:73===A[0]&&73===A[1]&&42===A[2]&&0===A[3]||77===A[0]&&77===A[1]&&0===A[2]&&42===A[3]?{ext:"tif",mime:"image/tiff"}:66===A[0]&&77===A[1]?{ext:"bmp",mime:"image/bmp"}:73===A[0]&&73===A[1]&&188===A[2]?{ext:"jxr",mime:"image/vnd.ms-photo"}:56===A[0]&&66===A[1]&&80===A[2]&&83===A[3]?{ext:"psd",mime:"image/vnd.adobe.photoshop"}:80===A[0]&&75===A[1]&&3===A[2]&&4===A[3]&&109===A[30]&&105===A[31]&&109===A[32]&&101===A[33]&&116===A[34]&&121===A[35]&&112===A[36]&&101===A[37]&&97===A[38]&&112===A[39]&&112===A[40]&&108===A[41]&&105===A[42]&&99===A[43]&&97===A[44]&&116===A[45]&&105===A[46]&&111===A[47]&&110===A[48]&&47===A[49]&&101===A[50]&&112===A[51]&&117===A[52]&&98===A[53]&&43===A[54]&&122===A[55]&&105===A[56]&&112===A[57]?{ext:"epub",mime:"application/epub+zip"}:80===A[0]&&75===A[1]&&3===A[2]&&4===A[3]&&77===A[30]&&69===A[31]&&84===A[32]&&65===A[33]&&45===A[34]&&73===A[35]&&78===A[36]&&70===A[37]&&47===A[38]&&109===A[39]&&111===A[40]&&122===A[41]&&105===A[42]&&108===A[43]&&108===A[44]&&97===A[45]&&46===A[46]&&114===A[47]&&115===A[48]&&97===A[49]?{ext:"xpi",mime:"application/x-xpinstall"}:80!==A[0]||75!==A[1]||3!==A[2]&&5!==A[2]&&7!==A[2]||4!==A[3]&&6!==A[3]&&8!==A[3]?117===A[257]&&115===A[258]&&116===A[259]&&97===A[260]&&114===A[261]?{ext:"tar",mime:"application/x-tar"}:82!==A[0]||97!==A[1]||114!==A[2]||33!==A[3]||26!==A[4]||7!==A[5]||0!==A[6]&&1!==A[6]?31===A[0]&&139===A[1]&&8===A[2]?{ext:"gz",mime:"application/gzip"}:66===A[0]&&90===A[1]&&104===A[2]?{ext:"bz2",mime:"application/x-bzip2"}:55===A[0]&&122===A[1]&&188===A[2]&&175===A[3]&&39===A[4]&&28===A[5]?{ext:"7z",mime:"application/x-7z-compressed"}:120===A[0]&&1===A[1]?{ext:"dmg",mime:"application/x-apple-diskimage"}:0===A[0]&&0===A[1]&&0===A[2]&&(24===A[3]||32===A[3])&&102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]||51===A[0]&&103===A[1]&&112===A[2]&&53===A[3]||0===A[0]&&0===A[1]&&0===A[2]&&28===A[3]&&102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]&&109===A[8]&&112===A[9]&&52===A[10]&&50===A[11]&&109===A[16]&&112===A[17]&&52===A[18]&&49===A[19]&&109===A[20]&&112===A[21]&&52===A[22]&&50===A[23]&&105===A[24]&&115===A[25]&&111===A[26]&&109===A[27]||0===A[0]&&0===A[1]&&0===A[2]&&28===A[3]&&102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]&&105===A[8]&&115===A[9]&&111===A[10]&&109===A[11]||0===A[0]&&0===A[1]&&0===A[2]&&28===A[3]&&102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]&&109===A[8]&&112===A[9]&&52===A[10]&&50===A[11]&&0===A[12]&&0===A[13]&&0===A[14]&&0===A[15]?{ext:"mp4",mime:"video/mp4"}:0===A[0]&&0===A[1]&&0===A[2]&&28===A[3]&&102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]&&77===A[8]&&52===A[9]&&86===A[10]?{ext:"m4v",mime:"video/x-m4v"}:77===A[0]&&84===A[1]&&104===A[2]&&100===A[3]?{ext:"mid",mime:"audio/midi"}:109===A[31]&&97===A[32]&&116===A[33]&&114===A[34]&&111===A[35]&&115===A[36]&&107===A[37]&&97===A[38]?{ext:"mkv",mime:"video/x-matroska"}:26===A[0]&&69===A[1]&&223===A[2]&&163===A[3]?{ext:"webm",mime:"video/webm"}:0===A[0]&&0===A[1]&&0===A[2]&&20===A[3]&&102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]?{ext:"mov",mime:"video/quicktime"}:82===A[0]&&73===A[1]&&70===A[2]&&70===A[3]&&65===A[8]&&86===A[9]&&73===A[10]?{ext:"avi",mime:"video/x-msvideo"}:48===A[0]&&38===A[1]&&178===A[2]&&117===A[3]&&142===A[4]&&102===A[5]&&207===A[6]&&17===A[7]&&166===A[8]&&217===A[9]?{ext:"wmv",mime:"video/x-ms-wmv"}:0===A[0]&&0===A[1]&&1===A[2]&&"b"===A[3].toString(16)[0]?{ext:"mpg",mime:"video/mpeg"}:73===A[0]&&68===A[1]&&51===A[2]||255===A[0]&&251===A[1]?{ext:"mp3",mime:"audio/mpeg"}:102===A[4]&&116===A[5]&&121===A[6]&&112===A[7]&&77===A[8]&&52===A[9]&&65===A[10]||77===A[0]&&52===A[1]&&65===A[2]&&32===A[3]?{ext:"m4a",mime:"audio/m4a"}:79===A[28]&&112===A[29]&&117===A[30]&&115===A[31]&&72===A[32]&&101===A[33]&&97===A[34]&&100===A[35]?{ext:"opus",mime:"audio/opus"}:79===A[0]&&103===A[1]&&103===A[2]&&83===A[3]?{ext:"ogg",mime:"audio/ogg"}:102===A[0]&&76===A[1]&&97===A[2]&&67===A[3]?{ext:"flac",mime:"audio/x-flac"}:82===A[0]&&73===A[1]&&70===A[2]&&70===A[3]&&87===A[8]&&65===A[9]&&86===A[10]&&69===A[11]?{ext:"wav",mime:"audio/x-wav"}:35===A[0]&&33===A[1]&&65===A[2]&&77===A[3]&&82===A[4]&&10===A[5]?{ext:"amr",mime:"audio/amr"}:37===A[0]&&80===A[1]&&68===A[2]&&70===A[3]?{ext:"pdf",mime:"application/pdf"}:77===A[0]&&90===A[1]?{ext:"exe",mime:"application/x-msdownload"}:67!==A[0]&&70!==A[0]||87!==A[1]||83!==A[2]?123===A[0]&&92===A[1]&&114===A[2]&&116===A[3]&&102===A[4]?{ext:"rtf",mime:"application/rtf"}:119===A[0]&&79===A[1]&&70===A[2]&&70===A[3]&&(0===A[4]&&1===A[5]&&0===A[6]&&0===A[7]||79===A[4]&&84===A[5]&&84===A[6]&&79===A[7])?{ext:"woff",mime:"application/font-woff"}:119===A[0]&&79===A[1]&&70===A[2]&&50===A[3]&&(0===A[4]&&1===A[5]&&0===A[6]&&0===A[7]||79===A[4]&&84===A[5]&&84===A[6]&&79===A[7])?{ext:"woff2",mime:"application/font-woff"}:76===A[34]&&80===A[35]&&(0===A[8]&&0===A[9]&&1===A[10]||1===A[8]&&0===A[9]&&2===A[10]||2===A[8]&&0===A[9]&&2===A[10])?{ext:"eot",mime:"application/octet-stream"}:0===A[0]&&1===A[1]&&0===A[2]&&0===A[3]&&0===A[4]?{ext:"ttf",mime:"application/font-sfnt"}:79===A[0]&&84===A[1]&&84===A[2]&&79===A[3]&&0===A[4]?{ext:"otf",mime:"application/font-sfnt"}:0===A[0]&&0===A[1]&&1===A[2]&&0===A[3]?{ext:"ico",mime:"image/x-icon"}:70===A[0]&&76===A[1]&&86===A[2]&&1===A[3]?{ext:"flv",mime:"video/x-flv"}:37===A[0]&&33===A[1]?{ext:"ps",mime:"application/postscript"}:253===A[0]&&55===A[1]&&122===A[2]&&88===A[3]&&90===A[4]&&0===A[5]?{ext:"xz",mime:"application/x-xz"}:83===A[0]&&81===A[1]&&76===A[2]&&105===A[3]?{ext:"sqlite",mime:"application/x-sqlite3"}:78===A[0]&&69===A[1]&&83===A[2]&&26===A[3]?{ext:"nes",mime:"application/x-nintendo-nes-rom"}:67===A[0]&&114===A[1]&&50===A[2]&&52===A[3]?{ext:"crx",mime:"application/x-google-chrome-extension"}:77===A[0]&&83===A[1]&&67===A[2]&&70===A[3]||73===A[0]&&83===A[1]&&99===A[2]&&40===A[3]?{ext:"cab",mime:"application/vnd.ms-cab-compressed"}:33===A[0]&&60===A[1]&&97===A[2]&&114===A[3]&&99===A[4]&&104===A[5]&&62===A[6]&&10===A[7]&&100===A[8]&&101===A[9]&&98===A[10]&&105===A[11]&&97===A[12]&&110===A[13]&&45===A[14]&&98===A[15]&&105===A[16]&&110===A[17]&&97===A[18]&&114===A[19]&&121===A[20]?{ext:"deb",mime:"application/x-deb"}:33===A[0]&&60===A[1]&&97===A[2]&&114===A[3]&&99===A[4]&&104===A[5]&&62===A[6]?{ext:"ar",mime:"application/x-unix-archive"}:237===A[0]&&171===A[1]&&238===A[2]&&219===A[3]?{ext:"rpm",mime:"application/x-rpm"}:31===A[0]&&160===A[1]||31===A[0]&&157===A[1]?{ext:"Z",mime:"application/x-compress"}:76===A[0]&&90===A[1]&&73===A[2]&&80===A[3]?{ext:"lz",mime:"application/x-lzip"}:208===A[0]&&207===A[1]&&17===A[2]&&224===A[3]&&161===A[4]&&177===A[5]&&26===A[6]&&225===A[7]?{ext:"msi",mime:"application/x-msi"}:null:{ext:"swf",mime:"application/x-shockwave-flash"}:{ext:"rar",mime:"application/x-rar-compressed"}:{ext:"zip",mime:"application/zip"}:null}},{}],28:[function(A,B,Q){var g=A("is-function");B.exports=function(A,B,Q){if(!g(B))throw new TypeError("iterator must be a function");arguments.length<3&&(Q=this);"[object Array]"===E.call(A)?function(A,B,Q){for(var g=0,E=A.length;g<E;g++)C.call(A,g)&&B.call(Q,A[g],g,A)}(A,B,Q):"string"==typeof A?function(A,B,Q){for(var g=0,E=A.length;g<E;g++)B.call(Q,A.charAt(g),g,A)}(A,B,Q):function(A,B,Q){for(var g in A)C.call(A,g)&&B.call(Q,A[g],g,A)}(A,B,Q)};var E=Object.prototype.toString,C=Object.prototype.hasOwnProperty},{"is-function":34}],29:[function(B,Q,g){(function(A){void 0!==w?Q.exports=w:void 0!==A?Q.exports=A:"undefined"!=typeof self?Q.exports=self:Q.exports={}}).call(this,void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{})},{}],30:[function(A,B,Q){Q.read=function(A,B,Q,g,E){var C,w,I=8*E-g-1,Y=(1<<I)-1,M=Y>>1,F=-7,D=Q?E-1:0,c=Q?-1:1,U=A[B+D];for(D+=c,C=U&(1<<-F)-1,U>>=-F,F+=I;F>0;C=256*C+A[B+D],D+=c,F-=8);for(w=C&(1<<-F)-1,C>>=-F,F+=g;F>0;w=256*w+A[B+D],D+=c,F-=8);if(0===C)C=1-M;else{if(C===Y)return w?NaN:1/0*(U?-1:1);w+=Math.pow(2,g),C-=M}return(U?-1:1)*w*Math.pow(2,C-g)},Q.write=function(A,B,Q,g,E,C){var w,I,Y,M=8*C-E-1,F=(1<<M)-1,D=F>>1,c=23===E?Math.pow(2,-24)-Math.pow(2,-77):0,U=g?0:C-1,i=g?1:-1,G=B<0||0===B&&1/B<0?1:0;for(B=Math.abs(B),isNaN(B)||B===1/0?(I=isNaN(B)?1:0,w=F):(w=Math.floor(Math.log(B)/Math.LN2),B*(Y=Math.pow(2,-w))<1&&(w--,Y*=2),(B+=w+D>=1?c/Y:c*Math.pow(2,1-D))*Y>=2&&(w++,Y/=2),w+D>=F?(I=0,w=F):w+D>=1?(I=(B*Y-1)*Math.pow(2,E),w+=D):(I=B*Math.pow(2,D-1)*Math.pow(2,E),w=0));E>=8;A[Q+U]=255&I,U+=i,I/=256,E-=8);for(w=w<<E|I,M+=E;M>0;A[Q+U]=255&w,U+=i,w/=256,M-=8);A[Q+U-i]|=128*G}},{}],31:[function(A,B,Q){"function"==typeof Object.create?B.exports=function(A,B){A.super_=B,A.prototype=Object.create(B.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}})}:B.exports=function(A,B){A.super_=B;var Q=function(){};Q.prototype=B.prototype,A.prototype=new Q,A.prototype.constructor=A}},{}],32:[function(A,B,Q){"use strict";var g="(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}",E="(?:(?:[0-9a-fA-F:]){1,4}(?:(?::(?:[0-9a-fA-F]){1,4}|:)){2,7})+",C=B.exports=function(A){return(A=A||{}).exact?new RegExp("(?:^"+g+"$)|(?:^"+E+"$)"):new RegExp("(?:"+g+")|(?:"+E+")","g")};C.v4=function(A){return(A=A||{}).exact?new RegExp("^"+g+"$"):new RegExp(g,"g")},C.v6=function(A){return(A=A||{}).exact?new RegExp("^"+E+"$"):new RegExp(E,"g")}},{}],33:[function(A,B,Q){function g(A){return!!A.constructor&&"function"==typeof A.constructor.isBuffer&&A.constructor.isBuffer(A)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
B.exports=function(A){return null!=A&&(g(A)||function(A){return"function"==typeof A.readFloatLE&&"function"==typeof A.slice&&g(A.slice(0,0))}(A)||!!A._isBuffer)}},{}],34:[function(A,B,Q){B.exports=function(A){var B=g.call(A);return"[object Function]"===B||"function"==typeof A&&"[object RegExp]"!==B||void 0!==w&&(A===w.setTimeout||A===w.alert||A===w.confirm||A===w.prompt)};var g=Object.prototype.toString},{}],35:[function(A,B,Q){var g={}.toString;B.exports=Array.isArray||function(A){return"[object Array]"==g.call(A)}},{}],36:[function(A,B,Q){var g=A("./lib/encoder"),E=A("./lib/decoder");B.exports={encode:g,decode:E}},{"./lib/decoder":37,"./lib/encoder":38}],37:[function(A,B,Q){(function(A){var Q=function(){"use strict";var A=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),B=4017,Q=799,g=3406,E=2276,C=1567,w=3784,Y=5793,M=2896;function F(){}function D(A,B){for(var Q,g,E=0,C=[],w=16;w>0&&!A[w-1];)w--;C.push({children:[],index:0});var I,Y=C[0];for(Q=0;Q<w;Q++){for(g=0;g<A[Q];g++){for((Y=C.pop()).children[Y.index]=B[E];Y.index>0;)Y=C.pop();for(Y.index++,C.push(Y);C.length<=Q;)C.push(I={children:[],index:0}),Y.children[Y.index]=I.children,Y=I;E++}Q+1<w&&(C.push(I={children:[],index:0}),Y.children[Y.index]=I.children,Y=I)}return C[0].children}function c(B,Q,g,E,C,w,Y,M,F){g.precision,g.samplesPerLine,g.scanLines;var D=g.mcusPerLine,c=g.progressive,U=(g.maxH,g.maxV,Q),i=0,G=0;function s(){if(G>0)return i>>--G&1;if(255==(i=B[Q++])){var A=B[Q++];if(A)throw"unexpected marker: "+(i<<8|A).toString(16)}return G=7,i>>>7}function N(A){for(var B,Q=A;null!==(B=s());){if("number"==typeof(Q=Q[B]))return Q;if("object"!==(void 0===Q?"undefined":I(Q)))throw"invalid huffman sequence"}return null}function h(A){for(var B=0;A>0;){var Q=s();if(null===Q)return;B=B<<1|Q,A--}return B}function H(A){var B=h(A);return B>=1<<A-1?B:B+(-1<<A)+1}var o=0;var J,t=0;function R(A,B,Q,g,E){var C=Q%D,w=(Q/D|0)*A.v+g,I=C*A.h+E;B(A,A.blocks[w][I])}function e(A,B,Q){var g=Q/A.blocksPerLine|0,E=Q%A.blocksPerLine;B(A,A.blocks[g][E])}var n,r,a,f,j,x,k=E.length;x=c?0===w?0===M?function(A,B){var Q=N(A.huffmanTableDC),g=0===Q?0:H(Q)<<F;B[0]=A.pred+=g}:function(A,B){B[0]|=s()<<F}:0===M?function(B,Q){if(o>0)o--;else for(var g=w,E=Y;g<=E;){var C=N(B.huffmanTableAC),I=15&C,M=C>>4;if(0!==I)Q[A[g+=M]]=H(I)*(1<<F),g++;else{if(M<15){o=h(M)+(1<<M)-1;break}g+=16}}}:function(B,Q){for(var g=w,E=Y,C=0;g<=E;){var I=A[g];switch(t){case 0:var M=N(B.huffmanTableAC),D=15&M;if(C=M>>4,0===D)C<15?(o=h(C)+(1<<C),t=4):(C=16,t=1);else{if(1!==D)throw"invalid ACn encoding";J=H(D),t=C?2:3}continue;case 1:case 2:Q[I]?Q[I]+=s()<<F:0==--C&&(t=2==t?3:0);break;case 3:Q[I]?Q[I]+=s()<<F:(Q[I]=J<<F,t=0);break;case 4:Q[I]&&(Q[I]+=s()<<F)}g++}4===t&&0==--o&&(t=0)}:function(B,Q){var g=N(B.huffmanTableDC),E=0===g?0:H(g);Q[0]=B.pred+=E;for(var C=1;C<64;){var w=N(B.huffmanTableAC),I=15&w,Y=w>>4;if(0!==I)Q[A[C+=Y]]=H(I),C++;else{if(Y<15)break;C+=16}}};var y,T,z,d,m=0;for(T=1==k?E[0].blocksPerLine*E[0].blocksPerColumn:D*g.mcusPerColumn,C||(C=T);m<T;){for(r=0;r<k;r++)E[r].pred=0;if(o=0,1==k)for(n=E[0],j=0;j<C;j++)e(n,x,m),m++;else for(j=0;j<C;j++){for(r=0;r<k;r++)for(z=(n=E[r]).h,d=n.v,a=0;a<d;a++)for(f=0;f<z;f++)R(n,x,m,a,f);if(++m===T)break}if(G=0,(y=B[Q]<<8|B[Q+1])<65280)throw"marker was not found";if(!(y>=65488&&y<=65495))break;Q+=2}return Q-U}function U(A,I){var F,D,c=[],U=I.blocksPerLine,i=I.blocksPerColumn,G=U<<3,s=new Int32Array(64),N=new Uint8Array(64);function h(A,F,D){var c,U,i,G,s,N,h,H,o,J,t=I.quantizationTable,R=D;for(J=0;J<64;J++)R[J]=A[J]*t[J];for(J=0;J<8;++J){var e=8*J;0!=R[1+e]||0!=R[2+e]||0!=R[3+e]||0!=R[4+e]||0!=R[5+e]||0!=R[6+e]||0!=R[7+e]?(c=Y*R[0+e]+128>>8,U=Y*R[4+e]+128>>8,i=R[2+e],G=R[6+e],s=M*(R[1+e]-R[7+e])+128>>8,H=M*(R[1+e]+R[7+e])+128>>8,N=R[3+e]<<4,h=R[5+e]<<4,o=c-U+1>>1,c=c+U+1>>1,U=o,o=i*w+G*C+128>>8,i=i*C-G*w+128>>8,G=o,o=s-h+1>>1,s=s+h+1>>1,h=o,o=H+N+1>>1,N=H-N+1>>1,H=o,o=c-G+1>>1,c=c+G+1>>1,G=o,o=U-i+1>>1,U=U+i+1>>1,i=o,o=s*E+H*g+2048>>12,s=s*g-H*E+2048>>12,H=o,o=N*Q+h*B+2048>>12,N=N*B-h*Q+2048>>12,h=o,R[0+e]=c+H,R[7+e]=c-H,R[1+e]=U+h,R[6+e]=U-h,R[2+e]=i+N,R[5+e]=i-N,R[3+e]=G+s,R[4+e]=G-s):(o=Y*R[0+e]+512>>10,R[0+e]=o,R[1+e]=o,R[2+e]=o,R[3+e]=o,R[4+e]=o,R[5+e]=o,R[6+e]=o,R[7+e]=o)}for(J=0;J<8;++J){var n=J;0!=R[8+n]||0!=R[16+n]||0!=R[24+n]||0!=R[32+n]||0!=R[40+n]||0!=R[48+n]||0!=R[56+n]?(c=Y*R[0+n]+2048>>12,U=Y*R[32+n]+2048>>12,i=R[16+n],G=R[48+n],s=M*(R[8+n]-R[56+n])+2048>>12,H=M*(R[8+n]+R[56+n])+2048>>12,N=R[24+n],h=R[40+n],o=c-U+1>>1,c=c+U+1>>1,U=o,o=i*w+G*C+2048>>12,i=i*C-G*w+2048>>12,G=o,o=s-h+1>>1,s=s+h+1>>1,h=o,o=H+N+1>>1,N=H-N+1>>1,H=o,o=c-G+1>>1,c=c+G+1>>1,G=o,o=U-i+1>>1,U=U+i+1>>1,i=o,o=s*E+H*g+2048>>12,s=s*g-H*E+2048>>12,H=o,o=N*Q+h*B+2048>>12,N=N*B-h*Q+2048>>12,h=o,R[0+n]=c+H,R[56+n]=c-H,R[8+n]=U+h,R[48+n]=U-h,R[16+n]=i+N,R[40+n]=i-N,R[24+n]=G+s,R[32+n]=G-s):(o=Y*D[J+0]+8192>>14,R[0+n]=o,R[8+n]=o,R[16+n]=o,R[24+n]=o,R[32+n]=o,R[40+n]=o,R[48+n]=o,R[56+n]=o)}for(J=0;J<64;++J){var r=128+(R[J]+8>>4);F[J]=r<0?0:r>255?255:r}}for(var H=0;H<i;H++){var o=H<<3;for(F=0;F<8;F++)c.push(new Uint8Array(G));for(var J=0;J<U;J++){h(I.blocks[H][J],N,s);var t=0,R=J<<3;for(D=0;D<8;D++){var e=c[o+D];for(F=0;F<8;F++)e[R+F]=N[t++]}}}return c}function i(A){return A<0?0:A>255?255:A}return F.prototype={load:function(A){var B=new XMLHttpRequest;B.open("GET",A,!0),B.responseType="arraybuffer",B.onload=function(){var A=new Uint8Array(B.response||B.mozResponseArrayBuffer);this.parse(A),this.onload&&this.onload()}.bind(this),B.send(null)},parse:function(B){var Q=0;B.length;function g(){var A=B[Q]<<8|B[Q+1];return Q+=2,A}function E(){var A=g(),E=B.subarray(Q,Q+A-2);return Q+=E.length,E}function C(A){var B,Q,g=0,E=0;for(Q in A.components)A.components.hasOwnProperty(Q)&&(g<(B=A.components[Q]).h&&(g=B.h),E<B.v&&(E=B.v));var C=Math.ceil(A.samplesPerLine/8/g),w=Math.ceil(A.scanLines/8/E);for(Q in A.components)if(A.components.hasOwnProperty(Q)){B=A.components[Q];for(var I=Math.ceil(Math.ceil(A.samplesPerLine/8)*B.h/g),Y=Math.ceil(Math.ceil(A.scanLines/8)*B.v/E),M=C*B.h,F=w*B.v,D=[],c=0;c<F;c++){for(var U=[],i=0;i<M;i++)U.push(new Int32Array(64));D.push(U)}B.blocksPerLine=I,B.blocksPerColumn=Y,B.blocks=D}A.maxH=g,A.maxV=E,A.mcusPerLine=C,A.mcusPerColumn=w}var w,I,Y=null,M=null,F=[],i=[],G=[],s=[],N=g();if(65496!=N)throw"SOI not found";for(N=g();65497!=N;){switch(N){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var h=E();65504===N&&74===h[0]&&70===h[1]&&73===h[2]&&70===h[3]&&0===h[4]&&(Y={version:{major:h[5],minor:h[6]},densityUnits:h[7],xDensity:h[8]<<8|h[9],yDensity:h[10]<<8|h[11],thumbWidth:h[12],thumbHeight:h[13],thumbData:h.subarray(14,14+3*h[12]*h[13])}),65518===N&&65===h[0]&&100===h[1]&&111===h[2]&&98===h[3]&&101===h[4]&&0===h[5]&&(M={version:h[6],flags0:h[7]<<8|h[8],flags1:h[9]<<8|h[10],transformCode:h[11]});break;case 65499:for(var H=g()+Q-2;Q<H;){var o=B[Q++],J=new Int32Array(64);if(o>>4==0)for(u=0;u<64;u++){J[A[u]]=B[Q++]}else{if(o>>4!=1)throw"DQT: invalid table spec";for(u=0;u<64;u++){J[A[u]]=g()}}F[15&o]=J}break;case 65472:case 65473:case 65474:g(),(w={}).extended=65473===N,w.progressive=65474===N,w.precision=B[Q++],w.scanLines=g(),w.samplesPerLine=g(),w.components={},w.componentsOrder=[];var t,R=B[Q++];for(l=0;l<R;l++){t=B[Q];var e=B[Q+1]>>4,n=15&B[Q+1],r=B[Q+2];w.componentsOrder.push(t),w.components[t]={h:e,v:n,quantizationIdx:r},Q+=3}C(w),i.push(w);break;case 65476:var a=g();for(l=2;l<a;){var f=B[Q++],j=new Uint8Array(16),x=0;for(u=0;u<16;u++,Q++)x+=j[u]=B[Q];var k=new Uint8Array(x);for(u=0;u<x;u++,Q++)k[u]=B[Q];l+=17+x,(f>>4==0?s:G)[15&f]=D(j,k)}break;case 65501:g(),I=g();break;case 65498:g();var y=B[Q++],T=[];for(l=0;l<y;l++){V=w.components[B[Q++]];var z=B[Q++];V.huffmanTableDC=s[z>>4],V.huffmanTableAC=G[15&z],T.push(V)}var d=B[Q++],m=B[Q++],L=B[Q++],S=c(B,Q,w,T,I,d,m,L>>4,15&L);Q+=S;break;default:if(255==B[Q-3]&&B[Q-2]>=192&&B[Q-2]<=254){Q-=3;break}throw"unknown JPEG marker "+N.toString(16)}N=g()}if(1!=i.length)throw"only single frame JPEGs supported";for(var l=0;l<i.length;l++){var W=i[l].components;for(var u in W)W[u].quantizationTable=F[W[u].quantizationIdx],delete W[u].quantizationIdx}this.width=w.samplesPerLine,this.height=w.scanLines,this.jfif=Y,this.adobe=M,this.components=[];for(l=0;l<w.componentsOrder.length;l++){var V=w.components[w.componentsOrder[l]];this.components.push({lines:U(0,V),scaleX:V.h/w.maxH,scaleY:V.v/w.maxV})}},getData:function(A,B){var Q,g,E,C,w,I,Y,M,F,D,c,U,G,s,N,h,H,o,J,t,R,e=this.width/A,n=this.height/B,r=0,a=A*B*this.components.length,f=new Uint8Array(a);switch(this.components.length){case 1:for(Q=this.components[0],D=0;D<B;D++)for(w=Q.lines[0|D*Q.scaleY*n],F=0;F<A;F++)c=w[0|F*Q.scaleX*e],f[r++]=c;break;case 2:for(Q=this.components[0],g=this.components[1],D=0;D<B;D++)for(w=Q.lines[0|D*Q.scaleY*n],I=g.lines[0|D*g.scaleY*n],F=0;F<A;F++)c=w[0|F*Q.scaleX*e],f[r++]=c,c=I[0|F*g.scaleX*e],f[r++]=c;break;case 3:for(R=!0,this.adobe&&this.adobe.transformCode?R=!0:void 0!==this.colorTransform&&(R=!!this.colorTransform),Q=this.components[0],g=this.components[1],E=this.components[2],D=0;D<B;D++)for(w=Q.lines[0|D*Q.scaleY*n],I=g.lines[0|D*g.scaleY*n],Y=E.lines[0|D*E.scaleY*n],F=0;F<A;F++)R?(c=w[0|F*Q.scaleX*e],U=I[0|F*g.scaleX*e],o=i(c+1.402*((G=Y[0|F*E.scaleX*e])-128)),J=i(c-.3441363*(U-128)-.71413636*(G-128)),t=i(c+1.772*(U-128))):(o=w[0|F*Q.scaleX*e],J=I[0|F*g.scaleX*e],t=Y[0|F*E.scaleX*e]),f[r++]=o,f[r++]=J,f[r++]=t;break;case 4:if(!this.adobe)throw"Unsupported color mode (4 components)";for(R=!1,this.adobe&&this.adobe.transformCode?R=!0:void 0!==this.colorTransform&&(R=!!this.colorTransform),Q=this.components[0],g=this.components[1],E=this.components[2],C=this.components[3],D=0;D<B;D++)for(w=Q.lines[0|D*Q.scaleY*n],I=g.lines[0|D*g.scaleY*n],Y=E.lines[0|D*E.scaleY*n],M=C.lines[0|D*C.scaleY*n],F=0;F<A;F++)R?(c=w[0|F*Q.scaleX*e],U=I[0|F*g.scaleX*e],G=Y[0|F*E.scaleX*e],s=M[0|F*C.scaleX*e],N=255-i(c+1.402*(G-128)),h=255-i(c-.3441363*(U-128)-.71413636*(G-128)),H=255-i(c+1.772*(U-128))):(N=w[0|F*Q.scaleX*e],h=I[0|F*g.scaleX*e],H=Y[0|F*E.scaleX*e],s=M[0|F*C.scaleX*e]),f[r++]=255-N,f[r++]=255-h,f[r++]=255-H,f[r++]=255-s;break;default:throw"Unsupported color mode"}return f},copyToImageData:function(A){var B,Q,g,E,C,w,I,Y,M,F=A.width,D=A.height,c=A.data,U=this.getData(F,D),G=0,s=0;switch(this.components.length){case 1:for(Q=0;Q<D;Q++)for(B=0;B<F;B++)g=U[G++],c[s++]=g,c[s++]=g,c[s++]=g,c[s++]=255;break;case 3:for(Q=0;Q<D;Q++)for(B=0;B<F;B++)I=U[G++],Y=U[G++],M=U[G++],c[s++]=I,c[s++]=Y,c[s++]=M,c[s++]=255;break;case 4:for(Q=0;Q<D;Q++)for(B=0;B<F;B++)C=U[G++],w=U[G++],g=U[G++],I=255-i(C*(1-(E=U[G++])/255)+E),Y=255-i(w*(1-E/255)+E),M=255-i(g*(1-E/255)+E),c[s++]=I,c[s++]=Y,c[s++]=M,c[s++]=255;break;default:throw"Unsupported color mode"}}},F}();B.exports=function(B,g){var E=new Uint8Array(B),C=new Q;C.parse(E);var w={width:C.width,height:C.height,data:g?new Uint8Array(C.width*C.height*4):new A(C.width*C.height*4)};return C.copyToImageData(w),w}}).call(this,A("buffer").Buffer)},{buffer:14}],38:[function(A,B,Q){(function(A){function Q(B){Math.round;var Q,g,E,C,w,I=Math.floor,Y=new Array(64),M=new Array(64),F=new Array(64),D=new Array(64),c=new Array(65535),U=new Array(65535),i=new Array(64),G=new Array(64),s=[],N=0,h=7,H=new Array(64),o=new Array(64),J=new Array(64),t=new Array(256),R=new Array(2048),e=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],n=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],r=[0,1,2,3,4,5,6,7,8,9,10,11],a=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],f=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],j=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],x=[0,1,2,3,4,5,6,7,8,9,10,11],k=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],y=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function T(A,B){for(var Q=0,g=0,E=new Array,C=1;C<=16;C++){for(var w=1;w<=A[C];w++)E[B[g]]=[],E[B[g]][0]=Q,E[B[g]][1]=C,g++,Q++;Q*=2}return E}function z(A){for(var B=A[0],Q=A[1]-1;Q>=0;)B&1<<Q&&(N|=1<<h),Q--,--h<0&&(255==N?(d(255),d(0)):d(N),h=7,N=0)}function d(A){s.push(A)}function m(A){d(A>>8&255),d(255&A)}function L(A,B,Q,g,E){for(var C,w=E[0],I=E[240],Y=function(A,B){var Q,g,E,C,w,I,Y,M,F,D,c=0;for(F=0;F<8;++F){Q=A[c],g=A[c+1],E=A[c+2],C=A[c+3],w=A[c+4],I=A[c+5],Y=A[c+6];var U=Q+(M=A[c+7]),G=Q-M,s=g+Y,N=g-Y,h=E+I,H=E-I,o=C+w,J=C-w,t=U+o,R=U-o,e=s+h,n=s-h;A[c]=t+e,A[c+4]=t-e;var r=.707106781*(n+R);A[c+2]=R+r,A[c+6]=R-r;var a=.382683433*((t=J+H)-(n=N+G)),f=.5411961*t+a,j=1.306562965*n+a,x=.707106781*(e=H+N),k=G+x,y=G-x;A[c+5]=y+f,A[c+3]=y-f,A[c+1]=k+j,A[c+7]=k-j,c+=8}for(c=0,F=0;F<8;++F){Q=A[c],g=A[c+8],E=A[c+16],C=A[c+24],w=A[c+32],I=A[c+40],Y=A[c+48];var T=Q+(M=A[c+56]),z=Q-M,d=g+Y,m=g-Y,L=E+I,S=E-I,l=C+w,W=C-w,u=T+l,V=T-l,K=d+L,P=d-L;A[c]=u+K,A[c+32]=u-K;var X=.707106781*(P+V);A[c+16]=V+X,A[c+48]=V-X;var p=.382683433*((u=W+S)-(P=m+z)),b=.5411961*u+p,v=1.306562965*P+p,Z=.707106781*(K=S+m),O=z+Z,q=z-Z;A[c+40]=q+b,A[c+24]=q-b,A[c+8]=O+v,A[c+56]=O-v,c++}for(F=0;F<64;++F)D=A[F]*B[F],i[F]=D>0?D+.5|0:D-.5|0;return i}(A,B),M=0;M<64;++M)G[e[M]]=Y[M];var F=G[0]-Q;Q=G[0],0==F?z(g[0]):(z(g[U[C=32767+F]]),z(c[C]));for(var D=63;D>0&&0==G[D];D--);if(0==D)return z(w),Q;for(var s,N=1;N<=D;){for(var h=N;0==G[N]&&N<=D;++N);var H=N-h;if(H>=16){s=H>>4;for(var o=1;o<=s;++o)z(I);H&=15}C=32767+G[N],z(E[(H<<4)+U[C]]),z(c[C]),N++}return 63!=D&&z(w),Q}function S(A){if(A<=0&&(A=1),A>100&&(A=100),w!=A){(function(A){for(var B=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],Q=0;Q<64;Q++){var g=I((B[Q]*A+50)/100);g<1?g=1:g>255&&(g=255),Y[e[Q]]=g}for(var E=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],C=0;C<64;C++){var w=I((E[C]*A+50)/100);w<1?w=1:w>255&&(w=255),M[e[C]]=w}for(var c=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],U=0,i=0;i<8;i++)for(var G=0;G<8;G++)F[U]=1/(Y[e[U]]*c[i]*c[G]*8),D[U]=1/(M[e[U]]*c[i]*c[G]*8),U++})(A<50?Math.floor(5e3/A):Math.floor(200-2*A)),w=A}}this.encode=function(B,w){(new Date).getTime();w&&S(w),s=new Array,N=0,h=7,m(65496),m(65504),m(16),d(74),d(70),d(73),d(70),d(0),d(1),d(1),d(0),m(1),m(1),d(0),d(0),function(){m(65499),m(132),d(0);for(var A=0;A<64;A++)d(Y[A]);d(1);for(var B=0;B<64;B++)d(M[B])}(),function(A,B){m(65472),m(17),d(8),m(B),m(A),d(3),d(1),d(17),d(0),d(2),d(17),d(1),d(3),d(17),d(1)}(B.width,B.height),function(){m(65476),m(418),d(0);for(var A=0;A<16;A++)d(n[A+1]);for(var B=0;B<=11;B++)d(r[B]);d(16);for(var Q=0;Q<16;Q++)d(a[Q+1]);for(var g=0;g<=161;g++)d(f[g]);d(1);for(var E=0;E<16;E++)d(j[E+1]);for(var C=0;C<=11;C++)d(x[C]);d(17);for(var w=0;w<16;w++)d(k[w+1]);for(var I=0;I<=161;I++)d(y[I])}(),m(65498),m(12),d(3),d(1),d(0),d(2),d(17),d(3),d(17),d(0),d(63),d(0);var I=0,c=0,U=0;N=0,h=7,this.encode.displayName="_encode_";for(var i,G,t,e,T,l,W,u,V,K=B.data,P=B.width,X=B.height,p=4*P,b=0;b<X;){for(i=0;i<p;){for(l=T=p*b+i,W=-1,u=0,V=0;V<64;V++)l=T+(u=V>>3)*p+(W=4*(7&V)),b+u>=X&&(l-=p*(b+1+u-X)),i+W>=p&&(l-=i+W-p+4),G=K[l++],t=K[l++],e=K[l++],H[V]=(R[G]+R[t+256>>0]+R[e+512>>0]>>16)-128,o[V]=(R[G+768>>0]+R[t+1024>>0]+R[e+1280>>0]>>16)-128,J[V]=(R[G+1280>>0]+R[t+1536>>0]+R[e+1792>>0]>>16)-128;I=L(H,F,I,Q,E),c=L(o,D,c,g,C),U=L(J,D,U,g,C),i+=32}b+=8}if(h>=0){var v=[];v[1]=h+1,v[0]=(1<<h+1)-1,z(v)}return m(65497),new A(s)},function(){(new Date).getTime();B||(B=50),function(){for(var A=String.fromCharCode,B=0;B<256;B++)t[B]=A(B)}(),Q=T(n,r),g=T(j,x),E=T(a,f),C=T(k,y),function(){for(var A=1,B=2,Q=1;Q<=15;Q++){for(var g=A;g<B;g++)U[32767+g]=Q,c[32767+g]=[],c[32767+g][1]=Q,c[32767+g][0]=g;for(var E=-(B-1);E<=-A;E++)U[32767+E]=Q,c[32767+E]=[],c[32767+E][1]=Q,c[32767+E][0]=B-1+E;A<<=1,B<<=1}}(),function(){for(var A=0;A<256;A++)R[A]=19595*A,R[A+256>>0]=38470*A,R[A+512>>0]=7471*A+32768,R[A+768>>0]=-11059*A,R[A+1024>>0]=-21709*A,R[A+1280>>0]=32768*A+8421375,R[A+1536>>0]=-27439*A,R[A+1792>>0]=-5329*A}(),S(B),(new Date).getTime()}()}B.exports=function(A,B){void 0===B&&(B=50);return{data:new Q(B).encode(A,B),width:A.width,height:A.height}}}).call(this,A("buffer").Buffer)},{buffer:14}],39:[function(A,B,Q){(function(Q){var g=A("xhr"),E=function(){},C=A("parse-bmfont-ascii"),I=A("parse-bmfont-xml"),Y=A("parse-bmfont-binary"),M=A("./lib/is-binary"),F=A("xtend"),D=w.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;B.exports=function(A,B){B="function"==typeof B?B:E,"string"==typeof A?A={uri:A}:A||(A={}),A.binary&&(A=function(A){if(D)return F(A,{responseType:"arraybuffer"});if(void 0===w.XMLHttpRequest)throw new Error("your browser does not support XHR loading");var B=new w.XMLHttpRequest;return B.overrideMimeType("text/plain; charset=x-user-defined"),F({xhr:B},A)}(A)),g(A,function(g,w,F){if(g)return B(g);if(!/^2/.test(w.statusCode))return B(new Error("http status code: "+w.statusCode));if(!F)return B(new Error("no body result"));var D,c,U=!1;if(D=F,"[object ArrayBuffer]"===Object.prototype.toString.call(D)){var i=new Uint8Array(F);F=new Q(i,"binary")}M(F)&&(U=!0,"string"==typeof F&&(F=new Q(F,"binary"))),U||(Q.isBuffer(F)&&(F=F.toString(A.encoding)),F=F.trim());try{var G=w.headers["content-type"];c=U?Y(F):/json/.test(G)||"{"===F.charAt(0)?JSON.parse(F):/xml/.test(G)||"<"===F.charAt(0)?I(F):C(F)}catch(A){B(new Error("error parsing font "+A.message)),B=E}B(null,c)})}}).call(this,A("buffer").Buffer)},{"./lib/is-binary":40,buffer:14,"parse-bmfont-ascii":54,"parse-bmfont-binary":55,"parse-bmfont-xml":56,xhr:104,xtend:106}],40:[function(A,B,Q){(function(Q){var g=A("buffer-equal"),E=new Q([66,77,70,3]);B.exports=function(A){return"string"==typeof A?"BMF"===A.substring(0,3):A.length>4&&g(A.slice(0,4),E)}}).call(this,A("buffer").Buffer)},{buffer:14,"buffer-equal":13}],41:[function(A,B,Q){(function(Q){A("path");var g=A("fs");function E(){this.types=Object.create(null),this.extensions=Object.create(null)}E.prototype.define=function(A){for(var B in A){for(var g=A[B],E=0;E<g.length;E++)Q.env.DEBUG_MIME&&this.types[g]&&console.warn(this._loading.replace(/.*\//,""),'changes "'+g[E]+'" extension type from '+this.types[g]+" to "+B),this.types[g[E]]=B;this.extensions[B]||(this.extensions[B]=g[0])}},E.prototype.load=function(A){this._loading=A;var B={};g.readFileSync(A,"ascii").split(/[\r\n]+/).forEach(function(A){var Q=A.replace(/\s*#.*|^\s*|\s*$/g,"").split(/\s+/);B[Q.shift()]=Q}),this.define(B),this._loading=null},E.prototype.lookup=function(A,B){var Q=A.replace(/.*[\.\/\\]/,"").toLowerCase();return this.types[Q]||B||this.default_type},E.prototype.extension=function(A){var B=A.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();return this.extensions[B]};var C=new E;C.define(A("./types.json")),C.default_type=C.lookup("bin"),C.Mime=E,C.charsets={lookup:function(A,B){return/^text\//.test(A)?"UTF-8":B}},B.exports=C}).call(this,A("_process"))},{"./types.json":42,_process:12,fs:11,path:59}],42:[function(A,B,Q){B.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mdp"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/font-woff":["woff"],"application/font-woff2":["woff2"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/prs.cww":["cww"],"application/pskc+xml":["pskcxml"],"application/rdf+xml":["rdf"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/voicexml+xml":["vxml"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["dmg"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-otf":["otf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-ttf":["ttf","ttc"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["iso"],"application/x-java-jnlp-file":["jnlp"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdownload":["exe","dll","com","bat","msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["wmf","wmz","emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-nzb":["nzb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["rar"],"application/x-research-info-systems":["ris"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["obj"],"application/x-ustar":["ustar"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt"],"application/x-xfig":["fig"],"application/x-xliff+xml":["xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp4":["mp4a","m4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/webm":["weba"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-wav":["wav"],"audio/xm":["xm"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"font/opentype":["otf"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/g3fax":["g3"],"image/gif":["gif"],"image/ief":["ief"],"image/jpeg":["jpeg","jpg","jpe"],"image/ktx":["ktx"],"image/png":["png"],"image/prs.btif":["btif"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/tiff":["tiff","tif"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/webp":["webp"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["ico"],"image/x-mrsid-image":["sid"],"image/x-pcx":["pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/rfc822":["eml","mime"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.vtu":["vtu"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["x3db","x3dbz"],"model/x3d+vrml":["x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee"],"text/css":["css"],"text/csv":["csv"],"text/hjson":["hjson"],"text/html":["html","htm"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/prs.lines.tag":["dsc"],"text/richtext":["rtx"],"text/sgml":["sgml","sgm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/vtt":["vtt"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["markdown","md","mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-pascal":["p","pas"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/webm":["webm"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]}},{}],43:[function(A,B,Q){"use strict";var g="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;Q.assign=function(A){for(var B=Array.prototype.slice.call(arguments,1);B.length;){var Q=B.shift();if(Q){if("object"!==(void 0===Q?"undefined":I(Q)))throw new TypeError(Q+"must be non-object");for(var g in Q)Q.hasOwnProperty(g)&&(A[g]=Q[g])}}return A},Q.shrinkBuf=function(A,B){return A.length===B?A:A.subarray?A.subarray(0,B):(A.length=B,A)};var E={arraySet:function(A,B,Q,g,E){if(B.subarray&&A.subarray)A.set(B.subarray(Q,Q+g),E);else for(var C=0;C<g;C++)A[E+C]=B[Q+C]},flattenChunks:function(A){var B,Q,g,E,C,w;for(g=0,B=0,Q=A.length;B<Q;B++)g+=A[B].length;for(w=new Uint8Array(g),E=0,B=0,Q=A.length;B<Q;B++)C=A[B],w.set(C,E),E+=C.length;return w}},C={arraySet:function(A,B,Q,g,E){for(var C=0;C<g;C++)A[E+C]=B[Q+C]},flattenChunks:function(A){return[].concat.apply([],A)}};Q.setTyped=function(A){A?(Q.Buf8=Uint8Array,Q.Buf16=Uint16Array,Q.Buf32=Int32Array,Q.assign(Q,E)):(Q.Buf8=Array,Q.Buf16=Array,Q.Buf32=Array,Q.assign(Q,C))},Q.setTyped(g)},{}],44:[function(A,B,Q){"use strict";B.exports=function(A,B,Q,g){for(var E=65535&A|0,C=A>>>16&65535|0,w=0;0!==Q;){Q-=w=Q>2e3?2e3:Q;do{C=C+(E=E+B[g++]|0)|0}while(--w);E%=65521,C%=65521}return E|C<<16|0}},{}],45:[function(A,B,Q){"use strict";B.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],46:[function(A,B,Q){"use strict";var g=function(){for(var A,B=[],Q=0;Q<256;Q++){A=Q;for(var g=0;g<8;g++)A=1&A?3988292384^A>>>1:A>>>1;B[Q]=A}return B}();B.exports=function(A,B,Q,E){var C=g,w=E+Q;A^=-1;for(var I=E;I<w;I++)A=A>>>8^C[255&(A^B[I])];return-1^A}},{}],47:[function(A,B,Q){"use strict";var g,E=A("../utils/common"),C=A("./trees"),w=A("./adler32"),I=A("./crc32"),Y=A("./messages"),M=0,F=1,D=3,c=4,U=5,i=0,G=1,s=-2,N=-3,h=-5,H=-1,o=1,J=2,t=3,R=4,e=0,n=2,r=8,a=9,f=15,j=8,x=286,k=30,y=19,T=2*x+1,z=15,d=3,m=258,L=m+d+1,S=32,l=42,W=69,u=73,V=91,K=103,P=113,X=666,p=1,b=2,v=3,Z=4,O=3;function q(A,B){return A.msg=Y[B],B}function _(A){return(A<<1)-(A>4?9:0)}function $(A){for(var B=A.length;--B>=0;)A[B]=0}function AA(A){var B=A.state,Q=B.pending;Q>A.avail_out&&(Q=A.avail_out),0!==Q&&(E.arraySet(A.output,B.pending_buf,B.pending_out,Q,A.next_out),A.next_out+=Q,B.pending_out+=Q,A.total_out+=Q,A.avail_out-=Q,B.pending-=Q,0===B.pending&&(B.pending_out=0))}function BA(A,B){C._tr_flush_block(A,A.block_start>=0?A.block_start:-1,A.strstart-A.block_start,B),A.block_start=A.strstart,AA(A.strm)}function QA(A,B){A.pending_buf[A.pending++]=B}function gA(A,B){A.pending_buf[A.pending++]=B>>>8&255,A.pending_buf[A.pending++]=255&B}function EA(A,B){var Q,g,E=A.max_chain_length,C=A.strstart,w=A.prev_length,I=A.nice_match,Y=A.strstart>A.w_size-L?A.strstart-(A.w_size-L):0,M=A.window,F=A.w_mask,D=A.prev,c=A.strstart+m,U=M[C+w-1],i=M[C+w];A.prev_length>=A.good_match&&(E>>=2),I>A.lookahead&&(I=A.lookahead);do{if(M[(Q=B)+w]===i&&M[Q+w-1]===U&&M[Q]===M[C]&&M[++Q]===M[C+1]){C+=2,Q++;do{}while(M[++C]===M[++Q]&&M[++C]===M[++Q]&&M[++C]===M[++Q]&&M[++C]===M[++Q]&&M[++C]===M[++Q]&&M[++C]===M[++Q]&&M[++C]===M[++Q]&&M[++C]===M[++Q]&&C<c);if(g=m-(c-C),C=c-m,g>w){if(A.match_start=B,w=g,g>=I)break;U=M[C+w-1],i=M[C+w]}}}while((B=D[B&F])>Y&&0!=--E);return w<=A.lookahead?w:A.lookahead}function CA(A){var B,Q,g,C,Y,M,F,D,c,U,i=A.w_size;do{if(C=A.window_size-A.lookahead-A.strstart,A.strstart>=i+(i-L)){E.arraySet(A.window,A.window,i,i,0),A.match_start-=i,A.strstart-=i,A.block_start-=i,B=Q=A.hash_size;do{g=A.head[--B],A.head[B]=g>=i?g-i:0}while(--Q);B=Q=i;do{g=A.prev[--B],A.prev[B]=g>=i?g-i:0}while(--Q);C+=i}if(0===A.strm.avail_in)break;if(M=A.strm,F=A.window,D=A.strstart+A.lookahead,c=C,U=void 0,(U=M.avail_in)>c&&(U=c),Q=0===U?0:(M.avail_in-=U,E.arraySet(F,M.input,M.next_in,U,D),1===M.state.wrap?M.adler=w(M.adler,F,U,D):2===M.state.wrap&&(M.adler=I(M.adler,F,U,D)),M.next_in+=U,M.total_in+=U,U),A.lookahead+=Q,A.lookahead+A.insert>=d)for(Y=A.strstart-A.insert,A.ins_h=A.window[Y],A.ins_h=(A.ins_h<<A.hash_shift^A.window[Y+1])&A.hash_mask;A.insert&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[Y+d-1])&A.hash_mask,A.prev[Y&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=Y,Y++,A.insert--,!(A.lookahead+A.insert<d)););}while(A.lookahead<L&&0!==A.strm.avail_in)}function wA(A,B){for(var Q,g;;){if(A.lookahead<L){if(CA(A),A.lookahead<L&&B===M)return p;if(0===A.lookahead)break}if(Q=0,A.lookahead>=d&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+d-1])&A.hash_mask,Q=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),0!==Q&&A.strstart-Q<=A.w_size-L&&(A.match_length=EA(A,Q)),A.match_length>=d)if(g=C._tr_tally(A,A.strstart-A.match_start,A.match_length-d),A.lookahead-=A.match_length,A.match_length<=A.max_lazy_match&&A.lookahead>=d){A.match_length--;do{A.strstart++,A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+d-1])&A.hash_mask,Q=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart}while(0!=--A.match_length);A.strstart++}else A.strstart+=A.match_length,A.match_length=0,A.ins_h=A.window[A.strstart],A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+1])&A.hash_mask;else g=C._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++;if(g&&(BA(A,!1),0===A.strm.avail_out))return p}return A.insert=A.strstart<d-1?A.strstart:d-1,B===c?(BA(A,!0),0===A.strm.avail_out?v:Z):A.last_lit&&(BA(A,!1),0===A.strm.avail_out)?p:b}function IA(A,B){for(var Q,g,E;;){if(A.lookahead<L){if(CA(A),A.lookahead<L&&B===M)return p;if(0===A.lookahead)break}if(Q=0,A.lookahead>=d&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+d-1])&A.hash_mask,Q=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart),A.prev_length=A.match_length,A.prev_match=A.match_start,A.match_length=d-1,0!==Q&&A.prev_length<A.max_lazy_match&&A.strstart-Q<=A.w_size-L&&(A.match_length=EA(A,Q),A.match_length<=5&&(A.strategy===o||A.match_length===d&&A.strstart-A.match_start>4096)&&(A.match_length=d-1)),A.prev_length>=d&&A.match_length<=A.prev_length){E=A.strstart+A.lookahead-d,g=C._tr_tally(A,A.strstart-1-A.prev_match,A.prev_length-d),A.lookahead-=A.prev_length-1,A.prev_length-=2;do{++A.strstart<=E&&(A.ins_h=(A.ins_h<<A.hash_shift^A.window[A.strstart+d-1])&A.hash_mask,Q=A.prev[A.strstart&A.w_mask]=A.head[A.ins_h],A.head[A.ins_h]=A.strstart)}while(0!=--A.prev_length);if(A.match_available=0,A.match_length=d-1,A.strstart++,g&&(BA(A,!1),0===A.strm.avail_out))return p}else if(A.match_available){if((g=C._tr_tally(A,0,A.window[A.strstart-1]))&&BA(A,!1),A.strstart++,A.lookahead--,0===A.strm.avail_out)return p}else A.match_available=1,A.strstart++,A.lookahead--}return A.match_available&&(g=C._tr_tally(A,0,A.window[A.strstart-1]),A.match_available=0),A.insert=A.strstart<d-1?A.strstart:d-1,B===c?(BA(A,!0),0===A.strm.avail_out?v:Z):A.last_lit&&(BA(A,!1),0===A.strm.avail_out)?p:b}function YA(A,B,Q,g,E){this.good_length=A,this.max_lazy=B,this.nice_length=Q,this.max_chain=g,this.func=E}function MA(A){var B;return A&&A.state?(A.total_in=A.total_out=0,A.data_type=n,(B=A.state).pending=0,B.pending_out=0,B.wrap<0&&(B.wrap=-B.wrap),B.status=B.wrap?l:P,A.adler=2===B.wrap?0:1,B.last_flush=M,C._tr_init(B),i):q(A,s)}function FA(A){var B,Q=MA(A);return Q===i&&((B=A.state).window_size=2*B.w_size,$(B.head),B.max_lazy_match=g[B.level].max_lazy,B.good_match=g[B.level].good_length,B.nice_match=g[B.level].nice_length,B.max_chain_length=g[B.level].max_chain,B.strstart=0,B.block_start=0,B.lookahead=0,B.insert=0,B.match_length=B.prev_length=d-1,B.match_available=0,B.ins_h=0),Q}function DA(A,B,Q,g,C,w){if(!A)return s;var I=1;if(B===H&&(B=6),g<0?(I=0,g=-g):g>15&&(I=2,g-=16),C<1||C>a||Q!==r||g<8||g>15||B<0||B>9||w<0||w>R)return q(A,s);8===g&&(g=9);var Y=new function(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=r,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new E.Buf16(2*T),this.dyn_dtree=new E.Buf16(2*(2*k+1)),this.bl_tree=new E.Buf16(2*(2*y+1)),$(this.dyn_ltree),$(this.dyn_dtree),$(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new E.Buf16(z+1),this.heap=new E.Buf16(2*x+1),$(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new E.Buf16(2*x+1),$(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0};return A.state=Y,Y.strm=A,Y.wrap=I,Y.gzhead=null,Y.w_bits=g,Y.w_size=1<<Y.w_bits,Y.w_mask=Y.w_size-1,Y.hash_bits=C+7,Y.hash_size=1<<Y.hash_bits,Y.hash_mask=Y.hash_size-1,Y.hash_shift=~~((Y.hash_bits+d-1)/d),Y.window=new E.Buf8(2*Y.w_size),Y.head=new E.Buf16(Y.hash_size),Y.prev=new E.Buf16(Y.w_size),Y.lit_bufsize=1<<C+6,Y.pending_buf_size=4*Y.lit_bufsize,Y.pending_buf=new E.Buf8(Y.pending_buf_size),Y.d_buf=1*Y.lit_bufsize,Y.l_buf=3*Y.lit_bufsize,Y.level=B,Y.strategy=w,Y.method=Q,FA(A)}g=[new YA(0,0,0,0,function(A,B){var Q=65535;for(Q>A.pending_buf_size-5&&(Q=A.pending_buf_size-5);;){if(A.lookahead<=1){if(CA(A),0===A.lookahead&&B===M)return p;if(0===A.lookahead)break}A.strstart+=A.lookahead,A.lookahead=0;var g=A.block_start+Q;if((0===A.strstart||A.strstart>=g)&&(A.lookahead=A.strstart-g,A.strstart=g,BA(A,!1),0===A.strm.avail_out))return p;if(A.strstart-A.block_start>=A.w_size-L&&(BA(A,!1),0===A.strm.avail_out))return p}return A.insert=0,B===c?(BA(A,!0),0===A.strm.avail_out?v:Z):(A.strstart>A.block_start&&(BA(A,!1),A.strm.avail_out),p)}),new YA(4,4,8,4,wA),new YA(4,5,16,8,wA),new YA(4,6,32,32,wA),new YA(4,4,16,16,IA),new YA(8,16,32,32,IA),new YA(8,16,128,128,IA),new YA(8,32,128,256,IA),new YA(32,128,258,1024,IA),new YA(32,258,258,4096,IA)],Q.deflateInit=function(A,B){return DA(A,B,r,f,j,e)},Q.deflateInit2=DA,Q.deflateReset=FA,Q.deflateResetKeep=MA,Q.deflateSetHeader=function(A,B){return A&&A.state?2!==A.state.wrap?s:(A.state.gzhead=B,i):s},Q.deflate=function(A,B){var Q,E,w,Y;if(!A||!A.state||B>U||B<0)return A?q(A,s):s;if(E=A.state,!A.output||!A.input&&0!==A.avail_in||E.status===X&&B!==c)return q(A,0===A.avail_out?h:s);if(E.strm=A,Q=E.last_flush,E.last_flush=B,E.status===l)if(2===E.wrap)A.adler=0,QA(E,31),QA(E,139),QA(E,8),E.gzhead?(QA(E,(E.gzhead.text?1:0)+(E.gzhead.hcrc?2:0)+(E.gzhead.extra?4:0)+(E.gzhead.name?8:0)+(E.gzhead.comment?16:0)),QA(E,255&E.gzhead.time),QA(E,E.gzhead.time>>8&255),QA(E,E.gzhead.time>>16&255),QA(E,E.gzhead.time>>24&255),QA(E,9===E.level?2:E.strategy>=J||E.level<2?4:0),QA(E,255&E.gzhead.os),E.gzhead.extra&&E.gzhead.extra.length&&(QA(E,255&E.gzhead.extra.length),QA(E,E.gzhead.extra.length>>8&255)),E.gzhead.hcrc&&(A.adler=I(A.adler,E.pending_buf,E.pending,0)),E.gzindex=0,E.status=W):(QA(E,0),QA(E,0),QA(E,0),QA(E,0),QA(E,0),QA(E,9===E.level?2:E.strategy>=J||E.level<2?4:0),QA(E,O),E.status=P);else{var N=r+(E.w_bits-8<<4)<<8;N|=(E.strategy>=J||E.level<2?0:E.level<6?1:6===E.level?2:3)<<6,0!==E.strstart&&(N|=S),N+=31-N%31,E.status=P,gA(E,N),0!==E.strstart&&(gA(E,A.adler>>>16),gA(E,65535&A.adler)),A.adler=1}if(E.status===W)if(E.gzhead.extra){for(w=E.pending;E.gzindex<(65535&E.gzhead.extra.length)&&(E.pending!==E.pending_buf_size||(E.gzhead.hcrc&&E.pending>w&&(A.adler=I(A.adler,E.pending_buf,E.pending-w,w)),AA(A),w=E.pending,E.pending!==E.pending_buf_size));)QA(E,255&E.gzhead.extra[E.gzindex]),E.gzindex++;E.gzhead.hcrc&&E.pending>w&&(A.adler=I(A.adler,E.pending_buf,E.pending-w,w)),E.gzindex===E.gzhead.extra.length&&(E.gzindex=0,E.status=u)}else E.status=u;if(E.status===u)if(E.gzhead.name){w=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>w&&(A.adler=I(A.adler,E.pending_buf,E.pending-w,w)),AA(A),w=E.pending,E.pending===E.pending_buf_size)){Y=1;break}Y=E.gzindex<E.gzhead.name.length?255&E.gzhead.name.charCodeAt(E.gzindex++):0,QA(E,Y)}while(0!==Y);E.gzhead.hcrc&&E.pending>w&&(A.adler=I(A.adler,E.pending_buf,E.pending-w,w)),0===Y&&(E.gzindex=0,E.status=V)}else E.status=V;if(E.status===V)if(E.gzhead.comment){w=E.pending;do{if(E.pending===E.pending_buf_size&&(E.gzhead.hcrc&&E.pending>w&&(A.adler=I(A.adler,E.pending_buf,E.pending-w,w)),AA(A),w=E.pending,E.pending===E.pending_buf_size)){Y=1;break}Y=E.gzindex<E.gzhead.comment.length?255&E.gzhead.comment.charCodeAt(E.gzindex++):0,QA(E,Y)}while(0!==Y);E.gzhead.hcrc&&E.pending>w&&(A.adler=I(A.adler,E.pending_buf,E.pending-w,w)),0===Y&&(E.status=K)}else E.status=K;if(E.status===K&&(E.gzhead.hcrc?(E.pending+2>E.pending_buf_size&&AA(A),E.pending+2<=E.pending_buf_size&&(QA(E,255&A.adler),QA(E,A.adler>>8&255),A.adler=0,E.status=P)):E.status=P),0!==E.pending){if(AA(A),0===A.avail_out)return E.last_flush=-1,i}else if(0===A.avail_in&&_(B)<=_(Q)&&B!==c)return q(A,h);if(E.status===X&&0!==A.avail_in)return q(A,h);if(0!==A.avail_in||0!==E.lookahead||B!==M&&E.status!==X){var H=E.strategy===J?function(A,B){for(var Q;;){if(0===A.lookahead&&(CA(A),0===A.lookahead)){if(B===M)return p;break}if(A.match_length=0,Q=C._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,Q&&(BA(A,!1),0===A.strm.avail_out))return p}return A.insert=0,B===c?(BA(A,!0),0===A.strm.avail_out?v:Z):A.last_lit&&(BA(A,!1),0===A.strm.avail_out)?p:b}(E,B):E.strategy===t?function(A,B){for(var Q,g,E,w,I=A.window;;){if(A.lookahead<=m){if(CA(A),A.lookahead<=m&&B===M)return p;if(0===A.lookahead)break}if(A.match_length=0,A.lookahead>=d&&A.strstart>0&&(g=I[E=A.strstart-1])===I[++E]&&g===I[++E]&&g===I[++E]){w=A.strstart+m;do{}while(g===I[++E]&&g===I[++E]&&g===I[++E]&&g===I[++E]&&g===I[++E]&&g===I[++E]&&g===I[++E]&&g===I[++E]&&E<w);A.match_length=m-(w-E),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=d?(Q=C._tr_tally(A,1,A.match_length-d),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(Q=C._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),Q&&(BA(A,!1),0===A.strm.avail_out))return p}return A.insert=0,B===c?(BA(A,!0),0===A.strm.avail_out?v:Z):A.last_lit&&(BA(A,!1),0===A.strm.avail_out)?p:b}(E,B):g[E.level].func(E,B);if(H!==v&&H!==Z||(E.status=X),H===p||H===v)return 0===A.avail_out&&(E.last_flush=-1),i;if(H===b&&(B===F?C._tr_align(E):B!==U&&(C._tr_stored_block(E,0,0,!1),B===D&&($(E.head),0===E.lookahead&&(E.strstart=0,E.block_start=0,E.insert=0))),AA(A),0===A.avail_out))return E.last_flush=-1,i}return B!==c?i:E.wrap<=0?G:(2===E.wrap?(QA(E,255&A.adler),QA(E,A.adler>>8&255),QA(E,A.adler>>16&255),QA(E,A.adler>>24&255),QA(E,255&A.total_in),QA(E,A.total_in>>8&255),QA(E,A.total_in>>16&255),QA(E,A.total_in>>24&255)):(gA(E,A.adler>>>16),gA(E,65535&A.adler)),AA(A),E.wrap>0&&(E.wrap=-E.wrap),0!==E.pending?i:G)},Q.deflateEnd=function(A){var B;return A&&A.state?(B=A.state.status)!==l&&B!==W&&B!==u&&B!==V&&B!==K&&B!==P&&B!==X?q(A,s):(A.state=null,B===P?q(A,N):i):s},Q.deflateSetDictionary=function(A,B){var Q,g,C,I,Y,M,F,D,c=B.length;if(!A||!A.state)return s;if(2===(I=(Q=A.state).wrap)||1===I&&Q.status!==l||Q.lookahead)return s;for(1===I&&(A.adler=w(A.adler,B,c,0)),Q.wrap=0,c>=Q.w_size&&(0===I&&($(Q.head),Q.strstart=0,Q.block_start=0,Q.insert=0),D=new E.Buf8(Q.w_size),E.arraySet(D,B,c-Q.w_size,Q.w_size,0),B=D,c=Q.w_size),Y=A.avail_in,M=A.next_in,F=A.input,A.avail_in=c,A.next_in=0,A.input=B,CA(Q);Q.lookahead>=d;){g=Q.strstart,C=Q.lookahead-(d-1);do{Q.ins_h=(Q.ins_h<<Q.hash_shift^Q.window[g+d-1])&Q.hash_mask,Q.prev[g&Q.w_mask]=Q.head[Q.ins_h],Q.head[Q.ins_h]=g,g++}while(--C);Q.strstart=g,Q.lookahead=d-1,CA(Q)}return Q.strstart+=Q.lookahead,Q.block_start=Q.strstart,Q.insert=Q.lookahead,Q.lookahead=0,Q.match_length=Q.prev_length=d-1,Q.match_available=0,A.next_in=M,A.input=F,A.avail_in=Y,Q.wrap=I,i},Q.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":43,"./adler32":44,"./crc32":46,"./messages":51,"./trees":52}],48:[function(A,B,Q){"use strict";B.exports=function(A,B){var Q,g,E,C,w,I,Y,M,F,D,c,U,i,G,s,N,h,H,o,J,t,R,e,n,r;Q=A.state,g=A.next_in,n=A.input,E=g+(A.avail_in-5),C=A.next_out,r=A.output,w=C-(B-A.avail_out),I=C+(A.avail_out-257),Y=Q.dmax,M=Q.wsize,F=Q.whave,D=Q.wnext,c=Q.window,U=Q.hold,i=Q.bits,G=Q.lencode,s=Q.distcode,N=(1<<Q.lenbits)-1,h=(1<<Q.distbits)-1;A:do{i<15&&(U+=n[g++]<<i,i+=8,U+=n[g++]<<i,i+=8),H=G[U&N];B:for(;;){if(U>>>=o=H>>>24,i-=o,0===(o=H>>>16&255))r[C++]=65535&H;else{if(!(16&o)){if(0==(64&o)){H=G[(65535&H)+(U&(1<<o)-1)];continue B}if(32&o){Q.mode=12;break A}A.msg="invalid literal/length code",Q.mode=30;break A}J=65535&H,(o&=15)&&(i<o&&(U+=n[g++]<<i,i+=8),J+=U&(1<<o)-1,U>>>=o,i-=o),i<15&&(U+=n[g++]<<i,i+=8,U+=n[g++]<<i,i+=8),H=s[U&h];Q:for(;;){if(U>>>=o=H>>>24,i-=o,!(16&(o=H>>>16&255))){if(0==(64&o)){H=s[(65535&H)+(U&(1<<o)-1)];continue Q}A.msg="invalid distance code",Q.mode=30;break A}if(t=65535&H,i<(o&=15)&&(U+=n[g++]<<i,(i+=8)<o&&(U+=n[g++]<<i,i+=8)),(t+=U&(1<<o)-1)>Y){A.msg="invalid distance too far back",Q.mode=30;break A}if(U>>>=o,i-=o,t>(o=C-w)){if((o=t-o)>F&&Q.sane){A.msg="invalid distance too far back",Q.mode=30;break A}if(R=0,e=c,0===D){if(R+=M-o,o<J){J-=o;do{r[C++]=c[R++]}while(--o);R=C-t,e=r}}else if(D<o){if(R+=M+D-o,(o-=D)<J){J-=o;do{r[C++]=c[R++]}while(--o);if(R=0,D<J){J-=o=D;do{r[C++]=c[R++]}while(--o);R=C-t,e=r}}}else if(R+=D-o,o<J){J-=o;do{r[C++]=c[R++]}while(--o);R=C-t,e=r}for(;J>2;)r[C++]=e[R++],r[C++]=e[R++],r[C++]=e[R++],J-=3;J&&(r[C++]=e[R++],J>1&&(r[C++]=e[R++]))}else{R=C-t;do{r[C++]=r[R++],r[C++]=r[R++],r[C++]=r[R++],J-=3}while(J>2);J&&(r[C++]=r[R++],J>1&&(r[C++]=r[R++]))}break}}break}}while(g<E&&C<I);g-=J=i>>3,U&=(1<<(i-=J<<3))-1,A.next_in=g,A.next_out=C,A.avail_in=g<E?E-g+5:5-(g-E),A.avail_out=C<I?I-C+257:257-(C-I),Q.hold=U,Q.bits=i}},{}],49:[function(A,B,Q){"use strict";var g=A("../utils/common"),E=A("./adler32"),C=A("./crc32"),w=A("./inffast"),I=A("./inftrees"),Y=0,M=1,F=2,D=4,c=5,U=6,i=0,G=1,s=2,N=-2,h=-3,H=-4,o=8,J=1,t=2,R=3,e=4,n=5,r=6,a=7,f=8,j=9,x=10,k=11,y=12,T=13,z=14,d=15,m=16,L=17,S=18,l=19,W=20,u=21,V=22,K=23,P=24,X=25,p=26,b=27,v=28,Z=29,O=30,q=31,_=32,$=852,AA=592,BA=15;function QA(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function gA(A){var B;return A&&A.state?(B=A.state,A.total_in=A.total_out=B.total=0,A.msg="",B.wrap&&(A.adler=1&B.wrap),B.mode=J,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new g.Buf32($),B.distcode=B.distdyn=new g.Buf32(AA),B.sane=1,B.back=-1,i):N}function EA(A){var B;return A&&A.state?((B=A.state).wsize=0,B.whave=0,B.wnext=0,gA(A)):N}function CA(A,B){var Q,g;return A&&A.state?(g=A.state,B<0?(Q=0,B=-B):(Q=1+(B>>4),B<48&&(B&=15)),B&&(B<8||B>15)?N:(null!==g.window&&g.wbits!==B&&(g.window=null),g.wrap=Q,g.wbits=B,EA(A))):N}function wA(A,B){var Q,E;return A?(E=new function(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new g.Buf16(320),this.work=new g.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0},A.state=E,E.window=null,(Q=CA(A,B))!==i&&(A.state=null),Q):N}var IA,YA,MA=!0;function FA(A){if(MA){var B;for(IA=new g.Buf32(512),YA=new g.Buf32(32),B=0;B<144;)A.lens[B++]=8;for(;B<256;)A.lens[B++]=9;for(;B<280;)A.lens[B++]=7;for(;B<288;)A.lens[B++]=8;for(I(M,A.lens,0,288,IA,0,A.work,{bits:9}),B=0;B<32;)A.lens[B++]=5;I(F,A.lens,0,32,YA,0,A.work,{bits:5}),MA=!1}A.lencode=IA,A.lenbits=9,A.distcode=YA,A.distbits=5}function DA(A,B,Q,E){var C,w=A.state;return null===w.window&&(w.wsize=1<<w.wbits,w.wnext=0,w.whave=0,w.window=new g.Buf8(w.wsize)),E>=w.wsize?(g.arraySet(w.window,B,Q-w.wsize,w.wsize,0),w.wnext=0,w.whave=w.wsize):((C=w.wsize-w.wnext)>E&&(C=E),g.arraySet(w.window,B,Q-E,C,w.wnext),(E-=C)?(g.arraySet(w.window,B,Q-E,E,0),w.wnext=E,w.whave=w.wsize):(w.wnext+=C,w.wnext===w.wsize&&(w.wnext=0),w.whave<w.wsize&&(w.whave+=C))),0}Q.inflateReset=EA,Q.inflateReset2=CA,Q.inflateResetKeep=gA,Q.inflateInit=function(A){return wA(A,BA)},Q.inflateInit2=wA,Q.inflate=function(A,B){var Q,$,AA,BA,gA,EA,CA,wA,IA,YA,MA,cA,UA,iA,GA,sA,NA,hA,HA,oA,JA,tA,RA,eA,nA=0,rA=new g.Buf8(4),aA=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&0!==A.avail_in)return N;(Q=A.state).mode===y&&(Q.mode=T),gA=A.next_out,AA=A.output,CA=A.avail_out,BA=A.next_in,$=A.input,EA=A.avail_in,wA=Q.hold,IA=Q.bits,YA=EA,MA=CA,tA=i;A:for(;;)switch(Q.mode){case J:if(0===Q.wrap){Q.mode=T;break}for(;IA<16;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(2&Q.wrap&&35615===wA){Q.check=0,rA[0]=255&wA,rA[1]=wA>>>8&255,Q.check=C(Q.check,rA,2,0),wA=0,IA=0,Q.mode=t;break}if(Q.flags=0,Q.head&&(Q.head.done=!1),!(1&Q.wrap)||(((255&wA)<<8)+(wA>>8))%31){A.msg="incorrect header check",Q.mode=O;break}if((15&wA)!==o){A.msg="unknown compression method",Q.mode=O;break}if(IA-=4,JA=8+(15&(wA>>>=4)),0===Q.wbits)Q.wbits=JA;else if(JA>Q.wbits){A.msg="invalid window size",Q.mode=O;break}Q.dmax=1<<JA,A.adler=Q.check=1,Q.mode=512&wA?x:y,wA=0,IA=0;break;case t:for(;IA<16;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(Q.flags=wA,(255&Q.flags)!==o){A.msg="unknown compression method",Q.mode=O;break}if(57344&Q.flags){A.msg="unknown header flags set",Q.mode=O;break}Q.head&&(Q.head.text=wA>>8&1),512&Q.flags&&(rA[0]=255&wA,rA[1]=wA>>>8&255,Q.check=C(Q.check,rA,2,0)),wA=0,IA=0,Q.mode=R;case R:for(;IA<32;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}Q.head&&(Q.head.time=wA),512&Q.flags&&(rA[0]=255&wA,rA[1]=wA>>>8&255,rA[2]=wA>>>16&255,rA[3]=wA>>>24&255,Q.check=C(Q.check,rA,4,0)),wA=0,IA=0,Q.mode=e;case e:for(;IA<16;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}Q.head&&(Q.head.xflags=255&wA,Q.head.os=wA>>8),512&Q.flags&&(rA[0]=255&wA,rA[1]=wA>>>8&255,Q.check=C(Q.check,rA,2,0)),wA=0,IA=0,Q.mode=n;case n:if(1024&Q.flags){for(;IA<16;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}Q.length=wA,Q.head&&(Q.head.extra_len=wA),512&Q.flags&&(rA[0]=255&wA,rA[1]=wA>>>8&255,Q.check=C(Q.check,rA,2,0)),wA=0,IA=0}else Q.head&&(Q.head.extra=null);Q.mode=r;case r:if(1024&Q.flags&&((cA=Q.length)>EA&&(cA=EA),cA&&(Q.head&&(JA=Q.head.extra_len-Q.length,Q.head.extra||(Q.head.extra=new Array(Q.head.extra_len)),g.arraySet(Q.head.extra,$,BA,cA,JA)),512&Q.flags&&(Q.check=C(Q.check,$,cA,BA)),EA-=cA,BA+=cA,Q.length-=cA),Q.length))break A;Q.length=0,Q.mode=a;case a:if(2048&Q.flags){if(0===EA)break A;cA=0;do{JA=$[BA+cA++],Q.head&&JA&&Q.length<65536&&(Q.head.name+=String.fromCharCode(JA))}while(JA&&cA<EA);if(512&Q.flags&&(Q.check=C(Q.check,$,cA,BA)),EA-=cA,BA+=cA,JA)break A}else Q.head&&(Q.head.name=null);Q.length=0,Q.mode=f;case f:if(4096&Q.flags){if(0===EA)break A;cA=0;do{JA=$[BA+cA++],Q.head&&JA&&Q.length<65536&&(Q.head.comment+=String.fromCharCode(JA))}while(JA&&cA<EA);if(512&Q.flags&&(Q.check=C(Q.check,$,cA,BA)),EA-=cA,BA+=cA,JA)break A}else Q.head&&(Q.head.comment=null);Q.mode=j;case j:if(512&Q.flags){for(;IA<16;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(wA!==(65535&Q.check)){A.msg="header crc mismatch",Q.mode=O;break}wA=0,IA=0}Q.head&&(Q.head.hcrc=Q.flags>>9&1,Q.head.done=!0),A.adler=Q.check=0,Q.mode=y;break;case x:for(;IA<32;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}A.adler=Q.check=QA(wA),wA=0,IA=0,Q.mode=k;case k:if(0===Q.havedict)return A.next_out=gA,A.avail_out=CA,A.next_in=BA,A.avail_in=EA,Q.hold=wA,Q.bits=IA,s;A.adler=Q.check=1,Q.mode=y;case y:if(B===c||B===U)break A;case T:if(Q.last){wA>>>=7&IA,IA-=7&IA,Q.mode=b;break}for(;IA<3;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}switch(Q.last=1&wA,IA-=1,3&(wA>>>=1)){case 0:Q.mode=z;break;case 1:if(FA(Q),Q.mode=W,B===U){wA>>>=2,IA-=2;break A}break;case 2:Q.mode=L;break;case 3:A.msg="invalid block type",Q.mode=O}wA>>>=2,IA-=2;break;case z:for(wA>>>=7&IA,IA-=7&IA;IA<32;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if((65535&wA)!=(wA>>>16^65535)){A.msg="invalid stored block lengths",Q.mode=O;break}if(Q.length=65535&wA,wA=0,IA=0,Q.mode=d,B===U)break A;case d:Q.mode=m;case m:if(cA=Q.length){if(cA>EA&&(cA=EA),cA>CA&&(cA=CA),0===cA)break A;g.arraySet(AA,$,BA,cA,gA),EA-=cA,BA+=cA,CA-=cA,gA+=cA,Q.length-=cA;break}Q.mode=y;break;case L:for(;IA<14;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(Q.nlen=257+(31&wA),wA>>>=5,IA-=5,Q.ndist=1+(31&wA),wA>>>=5,IA-=5,Q.ncode=4+(15&wA),wA>>>=4,IA-=4,Q.nlen>286||Q.ndist>30){A.msg="too many length or distance symbols",Q.mode=O;break}Q.have=0,Q.mode=S;case S:for(;Q.have<Q.ncode;){for(;IA<3;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}Q.lens[aA[Q.have++]]=7&wA,wA>>>=3,IA-=3}for(;Q.have<19;)Q.lens[aA[Q.have++]]=0;if(Q.lencode=Q.lendyn,Q.lenbits=7,RA={bits:Q.lenbits},tA=I(Y,Q.lens,0,19,Q.lencode,0,Q.work,RA),Q.lenbits=RA.bits,tA){A.msg="invalid code lengths set",Q.mode=O;break}Q.have=0,Q.mode=l;case l:for(;Q.have<Q.nlen+Q.ndist;){for(;sA=(nA=Q.lencode[wA&(1<<Q.lenbits)-1])>>>16&255,NA=65535&nA,!((GA=nA>>>24)<=IA);){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(NA<16)wA>>>=GA,IA-=GA,Q.lens[Q.have++]=NA;else{if(16===NA){for(eA=GA+2;IA<eA;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(wA>>>=GA,IA-=GA,0===Q.have){A.msg="invalid bit length repeat",Q.mode=O;break}JA=Q.lens[Q.have-1],cA=3+(3&wA),wA>>>=2,IA-=2}else if(17===NA){for(eA=GA+3;IA<eA;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}IA-=GA,JA=0,cA=3+(7&(wA>>>=GA)),wA>>>=3,IA-=3}else{for(eA=GA+7;IA<eA;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}IA-=GA,JA=0,cA=11+(127&(wA>>>=GA)),wA>>>=7,IA-=7}if(Q.have+cA>Q.nlen+Q.ndist){A.msg="invalid bit length repeat",Q.mode=O;break}for(;cA--;)Q.lens[Q.have++]=JA}}if(Q.mode===O)break;if(0===Q.lens[256]){A.msg="invalid code -- missing end-of-block",Q.mode=O;break}if(Q.lenbits=9,RA={bits:Q.lenbits},tA=I(M,Q.lens,0,Q.nlen,Q.lencode,0,Q.work,RA),Q.lenbits=RA.bits,tA){A.msg="invalid literal/lengths set",Q.mode=O;break}if(Q.distbits=6,Q.distcode=Q.distdyn,RA={bits:Q.distbits},tA=I(F,Q.lens,Q.nlen,Q.ndist,Q.distcode,0,Q.work,RA),Q.distbits=RA.bits,tA){A.msg="invalid distances set",Q.mode=O;break}if(Q.mode=W,B===U)break A;case W:Q.mode=u;case u:if(EA>=6&&CA>=258){A.next_out=gA,A.avail_out=CA,A.next_in=BA,A.avail_in=EA,Q.hold=wA,Q.bits=IA,w(A,MA),gA=A.next_out,AA=A.output,CA=A.avail_out,BA=A.next_in,$=A.input,EA=A.avail_in,wA=Q.hold,IA=Q.bits,Q.mode===y&&(Q.back=-1);break}for(Q.back=0;sA=(nA=Q.lencode[wA&(1<<Q.lenbits)-1])>>>16&255,NA=65535&nA,!((GA=nA>>>24)<=IA);){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(sA&&0==(240&sA)){for(hA=GA,HA=sA,oA=NA;sA=(nA=Q.lencode[oA+((wA&(1<<hA+HA)-1)>>hA)])>>>16&255,NA=65535&nA,!(hA+(GA=nA>>>24)<=IA);){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}wA>>>=hA,IA-=hA,Q.back+=hA}if(wA>>>=GA,IA-=GA,Q.back+=GA,Q.length=NA,0===sA){Q.mode=p;break}if(32&sA){Q.back=-1,Q.mode=y;break}if(64&sA){A.msg="invalid literal/length code",Q.mode=O;break}Q.extra=15&sA,Q.mode=V;case V:if(Q.extra){for(eA=Q.extra;IA<eA;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}Q.length+=wA&(1<<Q.extra)-1,wA>>>=Q.extra,IA-=Q.extra,Q.back+=Q.extra}Q.was=Q.length,Q.mode=K;case K:for(;sA=(nA=Q.distcode[wA&(1<<Q.distbits)-1])>>>16&255,NA=65535&nA,!((GA=nA>>>24)<=IA);){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(0==(240&sA)){for(hA=GA,HA=sA,oA=NA;sA=(nA=Q.distcode[oA+((wA&(1<<hA+HA)-1)>>hA)])>>>16&255,NA=65535&nA,!(hA+(GA=nA>>>24)<=IA);){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}wA>>>=hA,IA-=hA,Q.back+=hA}if(wA>>>=GA,IA-=GA,Q.back+=GA,64&sA){A.msg="invalid distance code",Q.mode=O;break}Q.offset=NA,Q.extra=15&sA,Q.mode=P;case P:if(Q.extra){for(eA=Q.extra;IA<eA;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}Q.offset+=wA&(1<<Q.extra)-1,wA>>>=Q.extra,IA-=Q.extra,Q.back+=Q.extra}if(Q.offset>Q.dmax){A.msg="invalid distance too far back",Q.mode=O;break}Q.mode=X;case X:if(0===CA)break A;if(cA=MA-CA,Q.offset>cA){if((cA=Q.offset-cA)>Q.whave&&Q.sane){A.msg="invalid distance too far back",Q.mode=O;break}cA>Q.wnext?(cA-=Q.wnext,UA=Q.wsize-cA):UA=Q.wnext-cA,cA>Q.length&&(cA=Q.length),iA=Q.window}else iA=AA,UA=gA-Q.offset,cA=Q.length;cA>CA&&(cA=CA),CA-=cA,Q.length-=cA;do{AA[gA++]=iA[UA++]}while(--cA);0===Q.length&&(Q.mode=u);break;case p:if(0===CA)break A;AA[gA++]=Q.length,CA--,Q.mode=u;break;case b:if(Q.wrap){for(;IA<32;){if(0===EA)break A;EA--,wA|=$[BA++]<<IA,IA+=8}if(MA-=CA,A.total_out+=MA,Q.total+=MA,MA&&(A.adler=Q.check=Q.flags?C(Q.check,AA,MA,gA-MA):E(Q.check,AA,MA,gA-MA)),MA=CA,(Q.flags?wA:QA(wA))!==Q.check){A.msg="incorrect data check",Q.mode=O;break}wA=0,IA=0}Q.mode=v;case v:if(Q.wrap&&Q.flags){for(;IA<32;){if(0===EA)break A;EA--,wA+=$[BA++]<<IA,IA+=8}if(wA!==(4294967295&Q.total)){A.msg="incorrect length check",Q.mode=O;break}wA=0,IA=0}Q.mode=Z;case Z:tA=G;break A;case O:tA=h;break A;case q:return H;case _:default:return N}return A.next_out=gA,A.avail_out=CA,A.next_in=BA,A.avail_in=EA,Q.hold=wA,Q.bits=IA,(Q.wsize||MA!==A.avail_out&&Q.mode<O&&(Q.mode<b||B!==D))&&DA(A,A.output,A.next_out,MA-A.avail_out)?(Q.mode=q,H):(YA-=A.avail_in,MA-=A.avail_out,A.total_in+=YA,A.total_out+=MA,Q.total+=MA,Q.wrap&&MA&&(A.adler=Q.check=Q.flags?C(Q.check,AA,MA,A.next_out-MA):E(Q.check,AA,MA,A.next_out-MA)),A.data_type=Q.bits+(Q.last?64:0)+(Q.mode===y?128:0)+(Q.mode===W||Q.mode===d?256:0),tA)},Q.inflateEnd=function(A){if(!A||!A.state)return N;var B=A.state;return B.window&&(B.window=null),A.state=null,i},Q.inflateGetHeader=function(A,B){var Q;return A&&A.state?0==(2&(Q=A.state).wrap)?N:(Q.head=B,B.done=!1,i):N},Q.inflateSetDictionary=function(A,B){var Q,g=B.length;return A&&A.state?0!==(Q=A.state).wrap&&Q.mode!==k?N:Q.mode===k&&E(1,B,g,0)!==Q.check?h:DA(A,B,g,g)?(Q.mode=q,H):(Q.havedict=1,i):N},Q.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":43,"./adler32":44,"./crc32":46,"./inffast":48,"./inftrees":50}],50:[function(A,B,Q){"use strict";var g=A("../utils/common"),E=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],C=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],w=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],I=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];B.exports=function(A,B,Q,Y,M,F,D,c){var U,i,G,s,N,h,H,o,J,t=c.bits,R=0,e=0,n=0,r=0,a=0,f=0,j=0,x=0,k=0,y=0,T=null,z=0,d=new g.Buf16(16),m=new g.Buf16(16),L=null,S=0;for(R=0;R<=15;R++)d[R]=0;for(e=0;e<Y;e++)d[B[Q+e]]++;for(a=t,r=15;r>=1&&0===d[r];r--);if(a>r&&(a=r),0===r)return M[F++]=20971520,M[F++]=20971520,c.bits=1,0;for(n=1;n<r&&0===d[n];n++);for(a<n&&(a=n),x=1,R=1;R<=15;R++)if(x<<=1,(x-=d[R])<0)return-1;if(x>0&&(0===A||1!==r))return-1;for(m[1]=0,R=1;R<15;R++)m[R+1]=m[R]+d[R];for(e=0;e<Y;e++)0!==B[Q+e]&&(D[m[B[Q+e]]++]=e);if(0===A?(T=L=D,h=19):1===A?(T=E,z-=257,L=C,S-=257,h=256):(T=w,L=I,h=-1),y=0,e=0,R=n,N=F,f=a,j=0,G=-1,s=(k=1<<a)-1,1===A&&k>852||2===A&&k>592)return 1;for(;;){0,H=R-j,D[e]<h?(o=0,J=D[e]):D[e]>h?(o=L[S+D[e]],J=T[z+D[e]]):(o=96,J=0),U=1<<R-j,n=i=1<<f;do{M[N+(y>>j)+(i-=U)]=H<<24|o<<16|J|0}while(0!==i);for(U=1<<R-1;y&U;)U>>=1;if(0!==U?(y&=U-1,y+=U):y=0,e++,0==--d[R]){if(R===r)break;R=B[Q+D[e]]}if(R>a&&(y&s)!==G){for(0===j&&(j=a),N+=n,x=1<<(f=R-j);f+j<r&&!((x-=d[f+j])<=0);)f++,x<<=1;if(k+=1<<f,1===A&&k>852||2===A&&k>592)return 1;M[G=y&s]=a<<24|f<<16|N-F|0}}return 0!==y&&(M[N+y]=R-j<<24|64<<16|0),c.bits=a,0}},{"../utils/common":43}],51:[function(A,B,Q){"use strict";B.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(A,B,Q){"use strict";var g=A("../utils/common"),E=4,C=0,w=1,I=2;function Y(A){for(var B=A.length;--B>=0;)A[B]=0}var M=0,F=1,D=2,c=29,U=256,i=U+1+c,G=30,s=19,N=2*i+1,h=15,H=16,o=7,J=256,t=16,R=17,e=18,n=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],r=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],f=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],j=new Array(2*(i+2));Y(j);var x=new Array(2*G);Y(x);var k=new Array(512);Y(k);var y=new Array(256);Y(y);var T=new Array(c);Y(T);var z,d,m,L=new Array(G);function S(A,B,Q,g,E){this.static_tree=A,this.extra_bits=B,this.extra_base=Q,this.elems=g,this.max_length=E,this.has_stree=A&&A.length}function l(A,B){this.dyn_tree=A,this.max_code=0,this.stat_desc=B}function W(A){return A<256?k[A]:k[256+(A>>>7)]}function u(A,B){A.pending_buf[A.pending++]=255&B,A.pending_buf[A.pending++]=B>>>8&255}function V(A,B,Q){A.bi_valid>H-Q?(A.bi_buf|=B<<A.bi_valid&65535,u(A,A.bi_buf),A.bi_buf=B>>H-A.bi_valid,A.bi_valid+=Q-H):(A.bi_buf|=B<<A.bi_valid&65535,A.bi_valid+=Q)}function K(A,B,Q){V(A,Q[2*B],Q[2*B+1])}function P(A,B){var Q=0;do{Q|=1&A,A>>>=1,Q<<=1}while(--B>0);return Q>>>1}function X(A,B,Q){var g,E,C=new Array(h+1),w=0;for(g=1;g<=h;g++)C[g]=w=w+Q[g-1]<<1;for(E=0;E<=B;E++){var I=A[2*E+1];0!==I&&(A[2*E]=P(C[I]++,I))}}function p(A){var B;for(B=0;B<i;B++)A.dyn_ltree[2*B]=0;for(B=0;B<G;B++)A.dyn_dtree[2*B]=0;for(B=0;B<s;B++)A.bl_tree[2*B]=0;A.dyn_ltree[2*J]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function b(A){A.bi_valid>8?u(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function v(A,B,Q,g){var E=2*B,C=2*Q;return A[E]<A[C]||A[E]===A[C]&&g[B]<=g[Q]}function Z(A,B,Q){for(var g=A.heap[Q],E=Q<<1;E<=A.heap_len&&(E<A.heap_len&&v(B,A.heap[E+1],A.heap[E],A.depth)&&E++,!v(B,g,A.heap[E],A.depth));)A.heap[Q]=A.heap[E],Q=E,E<<=1;A.heap[Q]=g}function O(A,B,Q){var g,E,C,w,I=0;if(0!==A.last_lit)do{g=A.pending_buf[A.d_buf+2*I]<<8|A.pending_buf[A.d_buf+2*I+1],E=A.pending_buf[A.l_buf+I],I++,0===g?K(A,E,B):(K(A,(C=y[E])+U+1,B),0!==(w=n[C])&&V(A,E-=T[C],w),K(A,C=W(--g),Q),0!==(w=r[C])&&V(A,g-=L[C],w))}while(I<A.last_lit);K(A,J,B)}function q(A,B){var Q,g,E,C=B.dyn_tree,w=B.stat_desc.static_tree,I=B.stat_desc.has_stree,Y=B.stat_desc.elems,M=-1;for(A.heap_len=0,A.heap_max=N,Q=0;Q<Y;Q++)0!==C[2*Q]?(A.heap[++A.heap_len]=M=Q,A.depth[Q]=0):C[2*Q+1]=0;for(;A.heap_len<2;)C[2*(E=A.heap[++A.heap_len]=M<2?++M:0)]=1,A.depth[E]=0,A.opt_len--,I&&(A.static_len-=w[2*E+1]);for(B.max_code=M,Q=A.heap_len>>1;Q>=1;Q--)Z(A,C,Q);E=Y;do{Q=A.heap[1],A.heap[1]=A.heap[A.heap_len--],Z(A,C,1),g=A.heap[1],A.heap[--A.heap_max]=Q,A.heap[--A.heap_max]=g,C[2*E]=C[2*Q]+C[2*g],A.depth[E]=(A.depth[Q]>=A.depth[g]?A.depth[Q]:A.depth[g])+1,C[2*Q+1]=C[2*g+1]=E,A.heap[1]=E++,Z(A,C,1)}while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],function(A,B){var Q,g,E,C,w,I,Y=B.dyn_tree,M=B.max_code,F=B.stat_desc.static_tree,D=B.stat_desc.has_stree,c=B.stat_desc.extra_bits,U=B.stat_desc.extra_base,i=B.stat_desc.max_length,G=0;for(C=0;C<=h;C++)A.bl_count[C]=0;for(Y[2*A.heap[A.heap_max]+1]=0,Q=A.heap_max+1;Q<N;Q++)(C=Y[2*Y[2*(g=A.heap[Q])+1]+1]+1)>i&&(C=i,G++),Y[2*g+1]=C,g>M||(A.bl_count[C]++,w=0,g>=U&&(w=c[g-U]),I=Y[2*g],A.opt_len+=I*(C+w),D&&(A.static_len+=I*(F[2*g+1]+w)));if(0!==G){do{for(C=i-1;0===A.bl_count[C];)C--;A.bl_count[C]--,A.bl_count[C+1]+=2,A.bl_count[i]--,G-=2}while(G>0);for(C=i;0!==C;C--)for(g=A.bl_count[C];0!==g;)(E=A.heap[--Q])>M||(Y[2*E+1]!==C&&(A.opt_len+=(C-Y[2*E+1])*Y[2*E],Y[2*E+1]=C),g--)}}(A,B),X(C,M,A.bl_count)}function _(A,B,Q){var g,E,C=-1,w=B[1],I=0,Y=7,M=4;for(0===w&&(Y=138,M=3),B[2*(Q+1)+1]=65535,g=0;g<=Q;g++)E=w,w=B[2*(g+1)+1],++I<Y&&E===w||(I<M?A.bl_tree[2*E]+=I:0!==E?(E!==C&&A.bl_tree[2*E]++,A.bl_tree[2*t]++):I<=10?A.bl_tree[2*R]++:A.bl_tree[2*e]++,I=0,C=E,0===w?(Y=138,M=3):E===w?(Y=6,M=3):(Y=7,M=4))}function $(A,B,Q){var g,E,C=-1,w=B[1],I=0,Y=7,M=4;for(0===w&&(Y=138,M=3),g=0;g<=Q;g++)if(E=w,w=B[2*(g+1)+1],!(++I<Y&&E===w)){if(I<M)do{K(A,E,A.bl_tree)}while(0!=--I);else 0!==E?(E!==C&&(K(A,E,A.bl_tree),I--),K(A,t,A.bl_tree),V(A,I-3,2)):I<=10?(K(A,R,A.bl_tree),V(A,I-3,3)):(K(A,e,A.bl_tree),V(A,I-11,7));I=0,C=E,0===w?(Y=138,M=3):E===w?(Y=6,M=3):(Y=7,M=4)}}Y(L);var AA=!1;function BA(A,B,Q,E){V(A,(M<<1)+(E?1:0),3),function(A,B,Q,E){b(A),E&&(u(A,Q),u(A,~Q)),g.arraySet(A.pending_buf,A.window,B,Q,A.pending),A.pending+=Q}(A,B,Q,!0)}Q._tr_init=function(A){AA||(function(){var A,B,Q,g,E,C=new Array(h+1);for(Q=0,g=0;g<c-1;g++)for(T[g]=Q,A=0;A<1<<n[g];A++)y[Q++]=g;for(y[Q-1]=g,E=0,g=0;g<16;g++)for(L[g]=E,A=0;A<1<<r[g];A++)k[E++]=g;for(E>>=7;g<G;g++)for(L[g]=E<<7,A=0;A<1<<r[g]-7;A++)k[256+E++]=g;for(B=0;B<=h;B++)C[B]=0;for(A=0;A<=143;)j[2*A+1]=8,A++,C[8]++;for(;A<=255;)j[2*A+1]=9,A++,C[9]++;for(;A<=279;)j[2*A+1]=7,A++,C[7]++;for(;A<=287;)j[2*A+1]=8,A++,C[8]++;for(X(j,i+1,C),A=0;A<G;A++)x[2*A+1]=5,x[2*A]=P(A,5);z=new S(j,n,U+1,i,h),d=new S(x,r,0,G,h),m=new S(new Array(0),a,0,s,o)}(),AA=!0),A.l_desc=new l(A.dyn_ltree,z),A.d_desc=new l(A.dyn_dtree,d),A.bl_desc=new l(A.bl_tree,m),A.bi_buf=0,A.bi_valid=0,p(A)},Q._tr_stored_block=BA,Q._tr_flush_block=function(A,B,Q,g){var Y,M,c=0;A.level>0?(A.strm.data_type===I&&(A.strm.data_type=function(A){var B,Q=4093624447;for(B=0;B<=31;B++,Q>>>=1)if(1&Q&&0!==A.dyn_ltree[2*B])return C;if(0!==A.dyn_ltree[18]||0!==A.dyn_ltree[20]||0!==A.dyn_ltree[26])return w;for(B=32;B<U;B++)if(0!==A.dyn_ltree[2*B])return w;return C}(A)),q(A,A.l_desc),q(A,A.d_desc),c=function(A){var B;for(_(A,A.dyn_ltree,A.l_desc.max_code),_(A,A.dyn_dtree,A.d_desc.max_code),q(A,A.bl_desc),B=s-1;B>=3&&0===A.bl_tree[2*f[B]+1];B--);return A.opt_len+=3*(B+1)+5+5+4,B}(A),Y=A.opt_len+3+7>>>3,(M=A.static_len+3+7>>>3)<=Y&&(Y=M)):Y=M=Q+5,Q+4<=Y&&-1!==B?BA(A,B,Q,g):A.strategy===E||M===Y?(V(A,(F<<1)+(g?1:0),3),O(A,j,x)):(V(A,(D<<1)+(g?1:0),3),function(A,B,Q,g){var E;for(V(A,B-257,5),V(A,Q-1,5),V(A,g-4,4),E=0;E<g;E++)V(A,A.bl_tree[2*f[E]+1],3);$(A,A.dyn_ltree,B-1),$(A,A.dyn_dtree,Q-1)}(A,A.l_desc.max_code+1,A.d_desc.max_code+1,c+1),O(A,A.dyn_ltree,A.dyn_dtree)),p(A),g&&b(A)},Q._tr_tally=function(A,B,Q){return A.pending_buf[A.d_buf+2*A.last_lit]=B>>>8&255,A.pending_buf[A.d_buf+2*A.last_lit+1]=255&B,A.pending_buf[A.l_buf+A.last_lit]=255&Q,A.last_lit++,0===B?A.dyn_ltree[2*Q]++:(A.matches++,B--,A.dyn_ltree[2*(y[Q]+U+1)]++,A.dyn_dtree[2*W(B)]++),A.last_lit===A.lit_bufsize-1},Q._tr_align=function(A){V(A,F<<1,3),K(A,J,j),function(A){16===A.bi_valid?(u(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=255&A.bi_buf,A.bi_buf>>=8,A.bi_valid-=8)}(A)}},{"../utils/common":43}],53:[function(A,B,Q){"use strict";B.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(A,B,Q){function g(A,B){if(!(A=A.replace(/\t+/g," ").trim()))return null;var Q=A.indexOf(" ");if(-1===Q)throw new Error("no named row at line "+B);var g=A.substring(0,Q);A=(A=(A=(A=A.substring(Q+1)).replace(/letter=[\'\"]\S+[\'\"]/gi,"")).split("=")).map(function(A){return A.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)});for(var C=[],w=0;w<A.length;w++){var I=A[w];0===w?C.push({key:I[0],data:""}):w===A.length-1?C[C.length-1].data=E(I[0]):(C[C.length-1].data=E(I[0]),C.push({key:I[1],data:""}))}var Y={key:g,data:{}};return C.forEach(function(A){Y.data[A.key]=A.data}),Y}function E(A){return A&&0!==A.length?0===A.indexOf('"')||0===A.indexOf("'")?A.substring(1,A.length-1):-1!==A.indexOf(",")?function(A){return A.split(",").map(function(A){return parseInt(A,10)})}(A):parseInt(A,10):""}B.exports=function(A){if(!A)throw new Error("no data provided");var B={pages:[],chars:[],kernings:[]},Q=(A=A.toString().trim()).split(/\r\n?|\n/g);if(0===Q.length)throw new Error("no data in BMFont file");for(var E=0;E<Q.length;E++){var C=g(Q[E],E);if(C)if("page"===C.key){if("number"!=typeof C.data.id)throw new Error("malformed file at line "+E+" -- needs page id=N");if("string"!=typeof C.data.file)throw new Error("malformed file at line "+E+' -- needs page file="path"');B.pages[C.data.id]=C.data.file}else"chars"===C.key||"kernings"===C.key||("char"===C.key?B.chars.push(C.data):"kerning"===C.key?B.kernings.push(C.data):B[C.key]=C.data)}return B}},{}],55:[function(A,B,Q){var g=[66,77,70];function E(A,B,Q){if(Q>B.length-1)return 0;var g=B.readUInt8(Q++),E=B.readInt32LE(Q);switch(Q+=4,g){case 1:A.info=function(A,B){var Q={};Q.size=A.readInt16LE(B);var g=A.readUInt8(B+2);Q.smooth=g>>7&1,Q.unicode=g>>6&1,Q.italic=g>>5&1,Q.bold=g>>4&1,g>>3&1&&(Q.fixedHeight=1);return Q.charset=A.readUInt8(B+3)||"",Q.stretchH=A.readUInt16LE(B+4),Q.aa=A.readUInt8(B+6),Q.padding=[A.readInt8(B+7),A.readInt8(B+8),A.readInt8(B+9),A.readInt8(B+10)],Q.spacing=[A.readInt8(B+11),A.readInt8(B+12)],Q.outline=A.readUInt8(B+13),Q.face=function(A,B){return C(A,B).toString("utf8")}(A,B+14),Q}(B,Q);break;case 2:A.common=function(A,B){var Q={};Q.lineHeight=A.readUInt16LE(B),Q.base=A.readUInt16LE(B+2),Q.scaleW=A.readUInt16LE(B+4),Q.scaleH=A.readUInt16LE(B+6),Q.pages=A.readUInt16LE(B+8);A.readUInt8(B+10);return Q.packed=0,Q.alphaChnl=A.readUInt8(B+11),Q.redChnl=A.readUInt8(B+12),Q.greenChnl=A.readUInt8(B+13),Q.blueChnl=A.readUInt8(B+14),Q}(B,Q);break;case 3:A.pages=function(A,B,Q){for(var g=[],E=C(A,B),w=E.length+1,I=Q/w,Y=0;Y<I;Y++)g[Y]=A.slice(B,B+E.length).toString("utf8"),B+=w;return g}(B,Q,E);break;case 4:A.chars=function(A,B,Q){for(var g=[],E=Q/20,C=0;C<E;C++){var w={},I=20*C;w.id=A.readUInt32LE(B+0+I),w.x=A.readUInt16LE(B+4+I),w.y=A.readUInt16LE(B+6+I),w.width=A.readUInt16LE(B+8+I),w.height=A.readUInt16LE(B+10+I),w.xoffset=A.readInt16LE(B+12+I),w.yoffset=A.readInt16LE(B+14+I),w.xadvance=A.readInt16LE(B+16+I),w.page=A.readUInt8(B+18+I),w.chnl=A.readUInt8(B+19+I),g[C]=w}return g}(B,Q,E);break;case 5:A.kernings=function(A,B,Q){for(var g=[],E=Q/10,C=0;C<E;C++){var w={},I=10*C;w.first=A.readUInt32LE(B+0+I),w.second=A.readUInt32LE(B+4+I),w.amount=A.readInt16LE(B+8+I),g[C]=w}return g}(B,Q,E)}return 5+E}function C(A,B){for(var Q=B;Q<A.length&&0!==A[Q];Q++);return A.slice(B,Q)}B.exports=function(A){if(A.length<6)throw new Error("invalid buffer length for BMFont");if(!g.every(function(B,Q){return A.readUInt8(Q)===B}))throw new Error("BMFont missing BMF byte header");var B=3;if(A.readUInt8(B++)>3)throw new Error("Only supports BMFont Binary v3 (BMFont App v1.10)");for(var Q={kernings:[],chars:[]},C=0;C<5;C++)B+=E(Q,A,B);return Q}},{}],56:[function(A,B,Q){var g=A("./parse-attribs"),E=A("xml-parse-from-string"),C={scaleh:"scaleH",scalew:"scaleW",stretchh:"stretchH",lineheight:"lineHeight",alphachnl:"alphaChnl",redchnl:"redChnl",greenchnl:"greenChnl",bluechnl:"blueChnl"};function w(A){return function(A){for(var B=[],Q=0;Q<A.attributes.length;Q++)B.push(A.attributes[Q]);return B}(A).reduce(function(A,B){var Q;return A[(Q=B.nodeName,C[Q.toLowerCase()]||Q)]=B.nodeValue,A},{})}B.exports=function(A){A=A.toString();var B=E(A),Q={pages:[],chars:[],kernings:[]};["info","common"].forEach(function(A){var E=B.getElementsByTagName(A)[0];E&&(Q[A]=g(w(E)))});var C=B.getElementsByTagName("pages")[0];if(!C)throw new Error("malformed file -- no <pages> element");for(var I=C.getElementsByTagName("page"),Y=0;Y<I.length;Y++){var M=I[Y],F=parseInt(M.getAttribute("id"),10),D=M.getAttribute("file");if(isNaN(F))throw new Error('malformed file -- page "id" attribute is NaN');if(!D)throw new Error('malformed file -- needs page "file" attribute');Q.pages[parseInt(F,10)]=D}return["chars","kernings"].forEach(function(A){var E=B.getElementsByTagName(A)[0];if(E)for(var C=A.substring(0,A.length-1),I=E.getElementsByTagName(C),Y=0;Y<I.length;Y++){var M=I[Y];Q[A].push(g(w(M)))}}),Q}},{"./parse-attribs":57,"xml-parse-from-string":105}],57:[function(A,B,Q){B.exports=function(A){for(var B in"chasrset"in A&&(A.charset=A.chasrset,delete A.chasrset),A)"face"!==B&&"charset"!==B&&(A[B]="padding"===B||"spacing"===B?A[B].split(",").map(function(A){return parseInt(A,10)}):parseInt(A[B],10));return A}},{}],58:[function(A,B,Q){var g=A("trim"),E=A("for-each");B.exports=function(A){if(!A)return{};var B={};return E(g(A).split("\n"),function(A){var Q,E=A.indexOf(":"),C=g(A.slice(0,E)).toLowerCase(),w=g(A.slice(E+1));void 0===B[C]?B[C]=w:(Q=B[C],"[object Array]"===Object.prototype.toString.call(Q)?B[C].push(w):B[C]=[B[C],w])}),B}},{"for-each":28,trim:99}],59:[function(A,B,Q){(function(A){function B(A,B){for(var Q=0,g=A.length-1;g>=0;g--){var E=A[g];"."===E?A.splice(g,1):".."===E?(A.splice(g,1),Q++):Q&&(A.splice(g,1),Q--)}if(B)for(;Q--;Q)A.unshift("..");return A}var g=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,E=function(A){return g.exec(A).slice(1)};function C(A,B){if(A.filter)return A.filter(B);for(var Q=[],g=0;g<A.length;g++)B(A[g],g,A)&&Q.push(A[g]);return Q}Q.resolve=function(){for(var Q="",g=!1,E=arguments.length-1;E>=-1&&!g;E--){var w=E>=0?arguments[E]:A.cwd();if("string"!=typeof w)throw new TypeError("Arguments to path.resolve must be strings");w&&(Q=w+"/"+Q,g="/"===w.charAt(0))}return Q=B(C(Q.split("/"),function(A){return!!A}),!g).join("/"),(g?"/":"")+Q||"."},Q.normalize=function(A){var g=Q.isAbsolute(A),E="/"===w(A,-1);return(A=B(C(A.split("/"),function(A){return!!A}),!g).join("/"))||g||(A="."),A&&E&&(A+="/"),(g?"/":"")+A},Q.isAbsolute=function(A){return"/"===A.charAt(0)},Q.join=function(){var A=Array.prototype.slice.call(arguments,0);return Q.normalize(C(A,function(A,B){if("string"!=typeof A)throw new TypeError("Arguments to path.join must be strings");return A}).join("/"))},Q.relative=function(A,B){function g(A){for(var B=0;B<A.length&&""===A[B];B++);for(var Q=A.length-1;Q>=0&&""===A[Q];Q--);return B>Q?[]:A.slice(B,Q-B+1)}A=Q.resolve(A).substr(1),B=Q.resolve(B).substr(1);for(var E=g(A.split("/")),C=g(B.split("/")),w=Math.min(E.length,C.length),I=w,Y=0;Y<w;Y++)if(E[Y]!==C[Y]){I=Y;break}var M=[];for(Y=I;Y<E.length;Y++)M.push("..");return(M=M.concat(C.slice(I))).join("/")},Q.sep="/",Q.delimiter=":",Q.dirname=function(A){var B=E(A),Q=B[0],g=B[1];return Q||g?(g&&(g=g.substr(0,g.length-1)),Q+g):"."},Q.basename=function(A,B){var Q=E(A)[2];return B&&Q.substr(-1*B.length)===B&&(Q=Q.substr(0,Q.length-B.length)),Q},Q.extname=function(A){return E(A)[3]};var w="b"==="ab".substr(-1)?function(A,B,Q){return A.substr(B,Q)}:function(A,B,Q){return B<0&&(B=A.length+B),A.substr(B,Q)}}).call(this,A("_process"))},{_process:12}],60:[function(A,B,Q){"use strict";function g(A,B,Q,C,w,I){for(var Y,M,F,D,c=Math.max(B-1,0),U=Math.max(Q-1,0),i=Math.min(B+1,C-1),G=Math.min(Q+1,w-1),s=4*(Q*C+B),N=0,h=0,H=0,o=0,J=0,t=c;t<=i;t++)for(var R=U;R<=G;R++)if(t!==B||R!==Q){var e=E(A,A,s,4*(R*C+t),!0);if(0===e?N++:e<0?H++:e>0&&h++,N>2)return!1;I&&(e<o&&(o=e,Y=t,M=R),e>J&&(J=e,F=t,D=R))}return!I||0!==H&&0!==h&&(!g(A,Y,M,C,w)&&!g(I,Y,M,C,w)||!g(A,F,D,C,w)&&!g(I,F,D,C,w))}function E(A,B,Q,g,E){var M=A[Q+3]/255,F=B[g+3]/255,D=Y(A[Q+0],M),c=Y(A[Q+1],M),U=Y(A[Q+2],M),i=Y(B[g+0],F),G=Y(B[g+1],F),s=Y(B[g+2],F),N=C(D,c,U)-C(i,G,s);if(E)return N;var h=w(D,c,U)-w(i,G,s),H=I(D,c,U)-I(i,G,s);return.5053*N*N+.299*h*h+.1957*H*H}function C(A,B,Q){return.29889531*A+.58662247*B+.11448223*Q}function w(A,B,Q){return.59597799*A-.2741761*B-.32180189*Q}function I(A,B,Q){return.21147017*A-.52261711*B+.31114694*Q}function Y(A,B){return 255+(A-255)*B}function M(A,B,Q,g,E){A[B+0]=Q,A[B+1]=g,A[B+2]=E,A[B+3]=255}B.exports=function(A,B,Q,w,I,F){F||(F={});for(var D=void 0===F.threshold?.1:F.threshold,c=35215*D*D,U=0,i=0;i<I;i++)for(var G=0;G<w;G++){var s=4*(i*w+G),N=E(A,B,s,s);if(N>c)F.includeAA||!g(A,G,i,w,I,B)&&!g(B,G,i,w,I,A)?(Q&&M(Q,s,255,0,0),U++):Q&&M(Q,s,255,255,0);else if(Q){var h=Y((void 0,void 0,void 0,void 0,J=(H=A)[(o=s)+3]/255,t=Y(H[o+0],J),R=Y(H[o+1],J),e=Y(H[o+2],J),C(t,R,e)),.1);M(Q,s,h,h,h)}}var H,o,J,t,R,e;return U}},{}],61:[function(A,B,Q){(function(B){"use strict";var g=A("./interlace"),E={1:{0:0,1:0,2:0,3:255},2:{0:0,1:0,2:0,3:1},3:{0:0,1:1,2:2,3:255},4:{0:0,1:1,2:2,3:3}};function C(A,B,Q,g,C,w){for(var I=A.width,Y=A.height,M=A.index,F=0;F<Y;F++)for(var D=0;D<I;D++){for(var c=Q(D,F,M),U=0;U<4;U++){var i=E[g][U];if(U===C.length)throw new Error("Ran out of data");B[c+U]=255!==i?C[i+w]:255}w+=g}return w}function w(A,B,Q,g,C,w){for(var I=A.width,Y=A.height,M=A.index,F=0;F<Y;F++){for(var D=0;D<I;D++)for(var c=C.get(g),U=Q(D,F,M),i=0;i<4;i++){var G=E[g][i];B[U+i]=255!==G?c[G]:w}C.resetAfterLine()}}Q.dataToBitMap=function(A,Q){var E,I=Q.width,Y=Q.height,M=Q.depth,F=Q.bpp,D=Q.interlace;if(8!==M)var c=function(A,B){var Q=[],g=0;function E(){if(g===A.length)throw new Error("Ran out of data");var E,C,w,I,Y,M,F,D,c=A[g];switch(g++,B){default:throw new Error("unrecognised depth");case 16:F=A[g],g++,Q.push((c<<8)+F);break;case 4:F=15&c,D=c>>4,Q.push(D,F);break;case 2:Y=3&c,M=c>>2&3,F=c>>4&3,D=c>>6&3,Q.push(D,F,M,Y);break;case 1:E=1&c,C=c>>1&1,w=c>>2&1,I=c>>3&1,Y=c>>4&1,M=c>>5&1,F=c>>6&1,D=c>>7&1,Q.push(D,F,M,Y,I,w,C,E)}}return{get:function(A){for(;Q.length<A;)E();var B=Q.slice(0,A);return Q=Q.slice(A),B},resetAfterLine:function(){Q.length=0},end:function(){if(g!==A.length)throw new Error("extra data found")}}}(A,M);E=M<=8?new B(I*Y*4):new Uint16Array(I*Y*4);var U,i,G=Math.pow(2,M)-1,s=0;if(D)U=g.getImagePasses(I,Y),i=g.getInterlaceIterator(I,Y);else{var N=0;i=function(){var A=N;return N+=4,A},U=[{width:I,height:Y}]}for(var h=0;h<U.length;h++)8===M?s=C(U[h],E,i,F,A,s):w(U[h],E,i,F,c,G);if(8===M){if(s!==A.length)throw new Error("extra data found")}else c.end();return E}}).call(this,A("buffer").Buffer)},{"./interlace":71,buffer:14}],62:[function(A,B,Q){(function(Q){"use strict";var g=A("./constants");B.exports=function(A,B,E,C){var w=C.colorType===g.COLORTYPE_COLOR_ALPHA;if(C.inputHasAlpha&&w)return A;if(!C.inputHasAlpha&&!w)return A;var I=w?4:3,Y=new Q(B*E*I),M=C.inputHasAlpha?4:3,F=0,D=0,c=C.bgColor||{};void 0===c.red&&(c.red=255),void 0===c.green&&(c.green=255),void 0===c.blue&&(c.blue=255);for(var U=0;U<E;U++)for(var i=0;i<B;i++){var G,s=A[F],N=A[F+1],h=A[F+2];C.inputHasAlpha?(G=A[F+3],w||(G/=255,s=Math.min(Math.max(Math.round((1-G)*c.red+G*s),0),255),N=Math.min(Math.max(Math.round((1-G)*c.green+G*N),0),255),h=Math.min(Math.max(Math.round((1-G)*c.blue+G*h),0),255))):G=255,Y[D]=s,Y[D+1]=N,Y[D+2]=h,w&&(Y[D+3]=G),F+=M,D+=I}return Y}}).call(this,A("buffer").Buffer)},{"./constants":64,buffer:14}],63:[function(A,B,Q){(function(Q,g){"use strict";var E=A("util"),C=A("stream"),w=B.exports=function(){C.call(this),this._buffers=[],this._buffered=0,this._reads=[],this._paused=!1,this._encoding="utf8",this.writable=!0};E.inherits(w,C),w.prototype.read=function(A,B){this._reads.push({length:Math.abs(A),allowLess:A<0,func:B}),Q.nextTick(function(){this._process(),this._paused&&this._reads.length>0&&(this._paused=!1,this.emit("drain"))}.bind(this))},w.prototype.write=function(A,B){return this.writable?(Q=g.isBuffer(A)?A:new g(A,B||this._encoding),this._buffers.push(Q),this._buffered+=Q.length,this._process(),this._reads&&0===this._reads.length&&(this._paused=!0),this.writable&&!this._paused):(this.emit("error",new Error("Stream not writable")),!1);var Q},w.prototype.end=function(A,B){A&&this.write(A,B),this.writable=!1,this._buffers&&(0===this._buffers.length?this._end():(this._buffers.push(null),this._process()))},w.prototype.destroySoon=w.prototype.end,w.prototype._end=function(){this._reads.length>0&&this.emit("error",new Error("There are some read requests waiting on finished stream")),this.destroy()},w.prototype.destroy=function(){this._buffers&&(this.writable=!1,this._reads=null,this._buffers=null,this.emit("close"))},w.prototype._processReadAllowingLess=function(A){this._reads.shift();var B=this._buffers[0];B.length>A.length?(this._buffered-=A.length,this._buffers[0]=B.slice(A.length),A.func.call(this,B.slice(0,A.length))):(this._buffered-=B.length,this._buffers.shift(),A.func.call(this,B))},w.prototype._processRead=function(A){this._reads.shift();for(var B=0,Q=0,E=new g(A.length);B<A.length;){var C=this._buffers[Q++],w=Math.min(C.length,A.length-B);C.copy(E,B,0,w),B+=w,w!==C.length&&(this._buffers[--Q]=C.slice(w))}Q>0&&this._buffers.splice(0,Q),this._buffered-=A.length,A.func.call(this,E)},w.prototype._process=function(){try{for(;this._buffered>0&&this._reads&&this._reads.length>0;){var A=this._reads[0];if(A.allowLess)this._processReadAllowingLess(A);else{if(!(this._buffered>=A.length))break;this._processRead(A)}}this._buffers&&this._buffers.length>0&&null===this._buffers[0]&&this._end()}catch(A){this.emit("error",A)}}}).call(this,A("_process"),A("buffer").Buffer)},{_process:12,buffer:14,stream:94,util:103}],64:[function(A,B,Q){"use strict";B.exports={PNG_SIGNATURE:[137,80,78,71,13,10,26,10],TYPE_IHDR:1229472850,TYPE_IEND:1229278788,TYPE_IDAT:1229209940,TYPE_PLTE:1347179589,TYPE_tRNS:1951551059,TYPE_gAMA:1732332865,COLORTYPE_GRAYSCALE:0,COLORTYPE_PALETTE:1,COLORTYPE_COLOR:2,COLORTYPE_ALPHA:4,COLORTYPE_PALETTE_COLOR:3,COLORTYPE_COLOR_ALPHA:6,COLORTYPE_TO_BPP_MAP:{0:1,2:3,3:1,4:2,6:4},GAMMA_DIVISION:1e5}},{}],65:[function(A,B,Q){"use strict";var g=[];!function(){for(var A=0;A<256;A++){for(var B=A,Q=0;Q<8;Q++)1&B?B=3988292384^B>>>1:B>>>=1;g[A]=B}}();var E=B.exports=function(){this._crc=-1};E.prototype.write=function(A){for(var B=0;B<A.length;B++)this._crc=g[255&(this._crc^A[B])]^this._crc>>>8;return!0},E.prototype.crc32=function(){return-1^this._crc},E.crc32=function(A){for(var B=-1,Q=0;Q<A.length;Q++)B=g[255&(B^A[Q])]^B>>>8;return-1^B}},{}],66:[function(A,B,Q){(function(Q){"use strict";var g=A("./paeth-predictor");var E={0:function(A,B,Q,g,E){A.copy(g,E,B,B+Q)},1:function(A,B,Q,g,E,C){for(var w=0;w<Q;w++){var I=w>=C?A[B+w-C]:0,Y=A[B+w]-I;g[E+w]=Y}},2:function(A,B,Q,g,E){for(var C=0;C<Q;C++){var w=B>0?A[B+C-Q]:0,I=A[B+C]-w;g[E+C]=I}},3:function(A,B,Q,g,E,C){for(var w=0;w<Q;w++){var I=w>=C?A[B+w-C]:0,Y=B>0?A[B+w-Q]:0,M=A[B+w]-(I+Y>>1);g[E+w]=M}},4:function(A,B,Q,E,C,w){for(var I=0;I<Q;I++){var Y=I>=w?A[B+I-w]:0,M=B>0?A[B+I-Q]:0,F=B>0&&I>=w?A[B+I-(Q+w)]:0,D=A[B+I]-g(Y,M,F);E[C+I]=D}}},C={0:function(A,B,Q){for(var g=0,E=B+Q,C=B;C<E;C++)g+=Math.abs(A[C]);return g},1:function(A,B,Q,g){for(var E=0,C=0;C<Q;C++){var w=C>=g?A[B+C-g]:0,I=A[B+C]-w;E+=Math.abs(I)}return E},2:function(A,B,Q){for(var g=0,E=B+Q,C=B;C<E;C++){var w=B>0?A[C-Q]:0,I=A[C]-w;g+=Math.abs(I)}return g},3:function(A,B,Q,g){for(var E=0,C=0;C<Q;C++){var w=C>=g?A[B+C-g]:0,I=B>0?A[B+C-Q]:0,Y=A[B+C]-(w+I>>1);E+=Math.abs(Y)}return E},4:function(A,B,Q,E){for(var C=0,w=0;w<Q;w++){var I=w>=E?A[B+w-E]:0,Y=B>0?A[B+w-Q]:0,M=B>0&&w>=E?A[B+w-(Q+E)]:0,F=A[B+w]-g(I,Y,M);C+=Math.abs(F)}return C}};B.exports=function(A,B,g,w,I){var Y;if("filterType"in w&&-1!==w.filterType){if("number"!=typeof w.filterType)throw new Error("unrecognised filter types");Y=[w.filterType]}else Y=[0,1,2,3,4];for(var M=B*I,F=0,D=0,c=new Q((M+1)*g),U=Y[0],i=0;i<g;i++){if(Y.length>1)for(var G=1/0,s=0;s<Y.length;s++){var N=C[Y[s]](A,D,M,I);N<G&&(U=Y[s],G=N)}c[F]=U,F++,E[U](A,D,M,c,F,I),F+=M,D+=M}return c}}).call(this,A("buffer").Buffer)},{"./paeth-predictor":75,buffer:14}],67:[function(A,B,Q){(function(Q){"use strict";var g=A("util"),E=A("./chunkstream"),C=A("./filter-parse"),w=B.exports=function(A){E.call(this);var B=[],g=this;this._filter=new C(A,{read:this.read.bind(this),write:function(A){B.push(A)},complete:function(){g.emit("complete",Q.concat(B))}}),this._filter.start()};g.inherits(w,E)}).call(this,A("buffer").Buffer)},{"./chunkstream":63,"./filter-parse":69,buffer:14,util:103}],68:[function(A,B,Q){(function(B){"use strict";var g=A("./sync-reader"),E=A("./filter-parse");Q.process=function(A,Q){var C=[],w=new g(A);return new E(Q,{read:w.read.bind(w),write:function(A){C.push(A)},complete:function(){}}).start(),w.process(),B.concat(C)}}).call(this,A("buffer").Buffer)},{"./filter-parse":69,"./sync-reader":81,buffer:14}],69:[function(A,B,Q){(function(Q){"use strict";var g=A("./interlace"),E=A("./paeth-predictor");function C(A,B,Q){var g=A*B;return 8!==Q&&(g=Math.ceil(g/(8/Q))),g}var w=B.exports=function(A,B){var Q=A.width,E=A.height,w=A.interlace,I=A.bpp,Y=A.depth;if(this.read=B.read,this.write=B.write,this.complete=B.complete,this._imageIndex=0,this._images=[],w)for(var M=g.getImagePasses(Q,E),F=0;F<M.length;F++)this._images.push({byteWidth:C(M[F].width,I,Y),height:M[F].height,lineIndex:0});else this._images.push({byteWidth:C(Q,I,Y),height:E,lineIndex:0});this._xComparison=8===Y?I:16===Y?2*I:1};w.prototype.start=function(){this.read(this._images[this._imageIndex].byteWidth+1,this._reverseFilterLine.bind(this))},w.prototype._unFilterType1=function(A,B,Q){for(var g=this._xComparison,E=g-1,C=0;C<Q;C++){var w=A[1+C],I=C>E?B[C-g]:0;B[C]=w+I}},w.prototype._unFilterType2=function(A,B,Q){for(var g=this._lastLine,E=0;E<Q;E++){var C=A[1+E],w=g?g[E]:0;B[E]=C+w}},w.prototype._unFilterType3=function(A,B,Q){for(var g=this._xComparison,E=g-1,C=this._lastLine,w=0;w<Q;w++){var I=A[1+w],Y=C?C[w]:0,M=w>E?B[w-g]:0,F=Math.floor((M+Y)/2);B[w]=I+F}},w.prototype._unFilterType4=function(A,B,Q){for(var g=this._xComparison,C=g-1,w=this._lastLine,I=0;I<Q;I++){var Y=A[1+I],M=w?w[I]:0,F=I>C?B[I-g]:0,D=I>C&&w?w[I-g]:0,c=E(F,M,D);B[I]=Y+c}},w.prototype._reverseFilterLine=function(A){var B,g=A[0],E=this._images[this._imageIndex],C=E.byteWidth;if(0===g)B=A.slice(1,C+1);else switch(B=new Q(C),g){case 1:this._unFilterType1(A,B,C);break;case 2:this._unFilterType2(A,B,C);break;case 3:this._unFilterType3(A,B,C);break;case 4:this._unFilterType4(A,B,C);break;default:throw new Error("Unrecognised filter type - "+g)}this.write(B),E.lineIndex++,E.lineIndex>=E.height?(this._lastLine=null,this._imageIndex++,E=this._images[this._imageIndex]):this._lastLine=B,E?this.read(E.byteWidth+1,this._reverseFilterLine.bind(this)):(this._lastLine=null,this.complete())}}).call(this,A("buffer").Buffer)},{"./interlace":71,"./paeth-predictor":75,buffer:14}],70:[function(A,B,Q){(function(A){"use strict";B.exports=function(B,Q){var g=Q.depth,E=Q.width,C=Q.height,w=Q.colorType,I=Q.transColor,Y=Q.palette,M=B;return 3===w?function(A,B,Q,g,E){for(var C=0,w=0;w<g;w++)for(var I=0;I<Q;I++){var Y=E[A[C]];if(!Y)throw new Error("index "+A[C]+" not in palette");for(var M=0;M<4;M++)B[C+M]=Y[M];C+=4}}(B,M,E,C,Y):(I&&function(A,B,Q,g,E){for(var C=0,w=0;w<g;w++)for(var I=0;I<Q;I++){var Y=!1;if(1===E.length?E[0]===A[C]&&(Y=!0):E[0]===A[C]&&E[1]===A[C+1]&&E[2]===A[C+2]&&(Y=!0),Y)for(var M=0;M<4;M++)B[C+M]=0;C+=4}}(B,M,E,C,I),8!==g&&(16===g&&(M=new A(E*C*4)),function(A,B,Q,g,E){for(var C=Math.pow(2,E)-1,w=0,I=0;I<g;I++)for(var Y=0;Y<Q;Y++){for(var M=0;M<4;M++)B[w+M]=Math.floor(255*A[w+M]/C+.5);w+=4}}(B,M,E,C,g))),M}}).call(this,A("buffer").Buffer)},{buffer:14}],71:[function(A,B,Q){"use strict";var g=[{x:[0],y:[0]},{x:[4],y:[0]},{x:[0,4],y:[4]},{x:[2,6],y:[0,4]},{x:[0,2,4,6],y:[2,6]},{x:[1,3,5,7],y:[0,2,4,6]},{x:[0,1,2,3,4,5,6,7],y:[1,3,5,7]}];Q.getImagePasses=function(A,B){for(var Q=[],E=A%8,C=B%8,w=(A-E)/8,I=(B-C)/8,Y=0;Y<g.length;Y++){for(var M=g[Y],F=w*M.x.length,D=I*M.y.length,c=0;c<M.x.length&&M.x[c]<E;c++)F++;for(c=0;c<M.y.length&&M.y[c]<C;c++)D++;F>0&&D>0&&Q.push({width:F,height:D,index:Y})}return Q},Q.getInterlaceIterator=function(A){return function(B,Q,E){var C=B%g[E].x.length,w=(B-C)/g[E].x.length*8+g[E].x[C],I=Q%g[E].y.length;return 4*w+((Q-I)/g[E].y.length*8+g[E].y[I])*A*4}}},{}],72:[function(A,B,Q){(function(Q){"use strict";var g=A("util"),E=A("stream"),C=A("./constants"),w=A("./packer"),I=B.exports=function(A){E.call(this);var B=A||{};this._packer=new w(B),this._deflate=this._packer.createDeflate(),this.readable=!0};g.inherits(I,E),I.prototype.pack=function(A,B,g,E){this.emit("data",new Q(C.PNG_SIGNATURE)),this.emit("data",this._packer.packIHDR(B,g)),E&&this.emit("data",this._packer.packGAMA(E));var w=this._packer.filterData(A,B,g);this._deflate.on("error",this.emit.bind(this,"error")),this._deflate.on("data",function(A){this.emit("data",this._packer.packIDAT(A))}.bind(this)),this._deflate.on("end",function(){this.emit("data",this._packer.packIEND()),this.emit("end")}.bind(this)),this._deflate.end(w)}}).call(this,A("buffer").Buffer)},{"./constants":64,"./packer":74,buffer:14,stream:94,util:103}],73:[function(A,B,Q){(function(Q){"use strict";var g=A("zlib"),E=A("./constants"),C=A("./packer");B.exports=function(A,B){var w=new C(B||{}),I=[];I.push(new Q(E.PNG_SIGNATURE)),I.push(w.packIHDR(A.width,A.height)),A.gamma&&I.push(w.packGAMA(A.gamma));var Y=w.filterData(A.data,A.width,A.height),M=g.deflateSync(Y,w.getDeflateOptions());if(Y=null,!M||!M.length)throw new Error("bad png - invalid compressed data response");return I.push(w.packIDAT(M)),I.push(w.packIEND()),Q.concat(I)}}).call(this,A("buffer").Buffer)},{"./constants":64,"./packer":74,buffer:14,zlib:10}],74:[function(A,B,Q){(function(Q){"use strict";var g=A("./constants"),E=A("./crc"),C=A("./bitpacker"),w=A("./filter-pack"),I=A("zlib"),Y=B.exports=function(A){if(this._options=A,A.deflateChunkSize=A.deflateChunkSize||32768,A.deflateLevel=null!=A.deflateLevel?A.deflateLevel:9,A.deflateStrategy=null!=A.deflateStrategy?A.deflateStrategy:3,A.inputHasAlpha=null==A.inputHasAlpha||A.inputHasAlpha,A.deflateFactory=A.deflateFactory||I.createDeflate,A.bitDepth=A.bitDepth||8,A.colorType="number"==typeof A.colorType?A.colorType:g.COLORTYPE_COLOR_ALPHA,A.colorType!==g.COLORTYPE_COLOR&&A.colorType!==g.COLORTYPE_COLOR_ALPHA)throw new Error("option color type:"+A.colorType+" is not supported at present");if(8!==A.bitDepth)throw new Error("option bit depth:"+A.bitDepth+" is not supported at present")};Y.prototype.getDeflateOptions=function(){return{chunkSize:this._options.deflateChunkSize,level:this._options.deflateLevel,strategy:this._options.deflateStrategy}},Y.prototype.createDeflate=function(){return this._options.deflateFactory(this.getDeflateOptions())},Y.prototype.filterData=function(A,B,Q){var E=C(A,B,Q,this._options),I=g.COLORTYPE_TO_BPP_MAP[this._options.colorType];return w(E,B,Q,this._options,I)},Y.prototype._packChunk=function(A,B){var g=B?B.length:0,C=new Q(g+12);return C.writeUInt32BE(g,0),C.writeUInt32BE(A,4),B&&B.copy(C,8),C.writeInt32BE(E.crc32(C.slice(4,C.length-4)),C.length-4),C},Y.prototype.packGAMA=function(A){var B=new Q(4);return B.writeUInt32BE(Math.floor(A*g.GAMMA_DIVISION),0),this._packChunk(g.TYPE_gAMA,B)},Y.prototype.packIHDR=function(A,B){var E=new Q(13);return E.writeUInt32BE(A,0),E.writeUInt32BE(B,4),E[8]=this._options.bitDepth,E[9]=this._options.colorType,E[10]=0,E[11]=0,E[12]=0,this._packChunk(g.TYPE_IHDR,E)},Y.prototype.packIDAT=function(A){return this._packChunk(g.TYPE_IDAT,A)},Y.prototype.packIEND=function(){return this._packChunk(g.TYPE_IEND,null)}}).call(this,A("buffer").Buffer)},{"./bitpacker":62,"./constants":64,"./crc":65,"./filter-pack":66,buffer:14,zlib:10}],75:[function(A,B,Q){"use strict";B.exports=function(A,B,Q){var g=A+B-Q,E=Math.abs(g-A),C=Math.abs(g-B),w=Math.abs(g-Q);return E<=C&&E<=w?A:C<=w?B:Q}},{}],76:[function(A,B,Q){"use strict";var g=A("util"),E=A("zlib"),C=A("./chunkstream"),w=A("./filter-parse-async"),I=A("./parser"),Y=A("./bitmapper"),M=A("./format-normaliser"),F=B.exports=function(A){C.call(this),this._parser=new I(A,{read:this.read.bind(this),error:this._handleError.bind(this),metadata:this._handleMetaData.bind(this),gamma:this.emit.bind(this,"gamma"),palette:this._handlePalette.bind(this),transColor:this._handleTransColor.bind(this),finished:this._finished.bind(this),inflateData:this._inflateData.bind(this)}),this._options=A,this.writable=!0,this._parser.start()};g.inherits(F,C),F.prototype._handleError=function(A){this.emit("error",A),this.writable=!1,this.destroy(),this._inflate&&this._inflate.destroy&&this._inflate.destroy(),this.errord=!0},F.prototype._inflateData=function(A){this._inflate||(this._inflate=E.createInflate(),this._inflate.on("error",this.emit.bind(this,"error")),this._filter.on("complete",this._complete.bind(this)),this._inflate.pipe(this._filter)),this._inflate.write(A)},F.prototype._handleMetaData=function(A){this.emit("metadata",A),this._bitmapInfo=Object.create(A),this._filter=new w(this._bitmapInfo)},F.prototype._handleTransColor=function(A){this._bitmapInfo.transColor=A},F.prototype._handlePalette=function(A){this._bitmapInfo.palette=A},F.prototype._finished=function(){this.errord||(this._inflate?this._inflate.end():this.emit("error","No Inflate block"),this.destroySoon())},F.prototype._complete=function(A){if(!this.errord){try{var B=Y.dataToBitMap(A,this._bitmapInfo),Q=M(B,this._bitmapInfo);B=null}catch(A){return void this._handleError(A)}this.emit("parsed",Q)}}},{"./bitmapper":61,"./chunkstream":63,"./filter-parse-async":67,"./format-normaliser":70,"./parser":78,util:103,zlib:10}],77:[function(A,B,Q){(function(Q){"use strict";var g=A("zlib"),E=A("./sync-reader"),C=A("./filter-parse-sync"),w=A("./parser"),I=A("./bitmapper"),Y=A("./format-normaliser");B.exports=function(A,B){var M,F,D;var c=[];var U=new E(A);if(new w(B,{read:U.read.bind(U),error:function(A){M=A},metadata:function(A){F=A},gamma:function(A){D=A},palette:function(A){F.palette=A},transColor:function(A){F.transColor=A},inflateData:function(A){c.push(A)}}).start(),U.process(),M)throw M;var i=Q.concat(c);c.length=0;var G=g.inflateSync(i);if(i=null,!G||!G.length)throw new Error("bad png - invalid inflate data response");var s=C.process(G,F);i=null;var N=I.dataToBitMap(s,F);s=null;var h=Y(N,F);return F.data=h,F.gamma=D||0,F}}).call(this,A("buffer").Buffer)},{"./bitmapper":61,"./filter-parse-sync":68,"./format-normaliser":70,"./parser":78,"./sync-reader":81,buffer:14,zlib:10}],78:[function(A,B,Q){(function(Q){"use strict";var g=A("./constants"),E=A("./crc"),C=B.exports=function(A,B){this._options=A,A.checkCRC=!1!==A.checkCRC,this._hasIHDR=!1,this._hasIEND=!1,this._palette=[],this._colorType=0,this._chunks={},this._chunks[g.TYPE_IHDR]=this._handleIHDR.bind(this),this._chunks[g.TYPE_IEND]=this._handleIEND.bind(this),this._chunks[g.TYPE_IDAT]=this._handleIDAT.bind(this),this._chunks[g.TYPE_PLTE]=this._handlePLTE.bind(this),this._chunks[g.TYPE_tRNS]=this._handleTRNS.bind(this),this._chunks[g.TYPE_gAMA]=this._handleGAMA.bind(this),this.read=B.read,this.error=B.error,this.metadata=B.metadata,this.gamma=B.gamma,this.transColor=B.transColor,this.palette=B.palette,this.parsed=B.parsed,this.inflateData=B.inflateData,this.inflateData=B.inflateData,this.finished=B.finished};C.prototype.start=function(){this.read(g.PNG_SIGNATURE.length,this._parseSignature.bind(this))},C.prototype._parseSignature=function(A){for(var B=g.PNG_SIGNATURE,Q=0;Q<B.length;Q++)if(A[Q]!==B[Q])return void this.error(new Error("Invalid file signature"));this.read(8,this._parseChunkBegin.bind(this))},C.prototype._parseChunkBegin=function(A){for(var B=A.readUInt32BE(0),C=A.readUInt32BE(4),w="",I=4;I<8;I++)w+=String.fromCharCode(A[I]);var Y=Boolean(32&A[4]);if(this._hasIHDR||C===g.TYPE_IHDR){if(this._crc=new E,this._crc.write(new Q(w)),this._chunks[C])return this._chunks[C](B);Y?this.read(B+4,this._skipChunk.bind(this)):this.error(new Error("Unsupported critical chunk type "+w))}else this.error(new Error("Expected IHDR on beggining"))},C.prototype._skipChunk=function(){this.read(8,this._parseChunkBegin.bind(this))},C.prototype._handleChunkEnd=function(){this.read(4,this._parseChunkEnd.bind(this))},C.prototype._parseChunkEnd=function(A){var B=A.readInt32BE(0),Q=this._crc.crc32();this._options.checkCRC&&Q!==B?this.error(new Error("Crc error - "+B+" - "+Q)):this._hasIEND||this.read(8,this._parseChunkBegin.bind(this))},C.prototype._handleIHDR=function(A){this.read(A,this._parseIHDR.bind(this))},C.prototype._parseIHDR=function(A){this._crc.write(A);var B=A.readUInt32BE(0),Q=A.readUInt32BE(4),E=A[8],C=A[9],w=A[10],I=A[11],Y=A[12];if(8===E||4===E||2===E||1===E||16===E)if(C in g.COLORTYPE_TO_BPP_MAP)if(0===w)if(0===I)if(0===Y||1===Y){this._colorType=C;var M=g.COLORTYPE_TO_BPP_MAP[this._colorType];this._hasIHDR=!0,this.metadata({width:B,height:Q,depth:E,interlace:Boolean(Y),palette:Boolean(C&g.COLORTYPE_PALETTE),color:Boolean(C&g.COLORTYPE_COLOR),alpha:Boolean(C&g.COLORTYPE_ALPHA),bpp:M,colorType:C}),this._handleChunkEnd()}else this.error(new Error("Unsupported interlace method"));else this.error(new Error("Unsupported filter method"));else this.error(new Error("Unsupported compression method"));else this.error(new Error("Unsupported color type"));else this.error(new Error("Unsupported bit depth "+E))},C.prototype._handlePLTE=function(A){this.read(A,this._parsePLTE.bind(this))},C.prototype._parsePLTE=function(A){this._crc.write(A);for(var B=Math.floor(A.length/3),Q=0;Q<B;Q++)this._palette.push([A[3*Q],A[3*Q+1],A[3*Q+2],255]);this.palette(this._palette),this._handleChunkEnd()},C.prototype._handleTRNS=function(A){this.read(A,this._parseTRNS.bind(this))},C.prototype._parseTRNS=function(A){if(this._crc.write(A),this._colorType===g.COLORTYPE_PALETTE_COLOR){if(0===this._palette.length)return void this.error(new Error("Transparency chunk must be after palette"));if(A.length>this._palette.length)return void this.error(new Error("More transparent colors than palette size"));for(var B=0;B<A.length;B++)this._palette[B][3]=A[B];this.palette(this._palette)}this._colorType===g.COLORTYPE_GRAYSCALE&&this.transColor([A.readUInt16BE(0)]),this._colorType===g.COLORTYPE_COLOR&&this.transColor([A.readUInt16BE(0),A.readUInt16BE(2),A.readUInt16BE(4)]),this._handleChunkEnd()},C.prototype._handleGAMA=function(A){this.read(A,this._parseGAMA.bind(this))},C.prototype._parseGAMA=function(A){this._crc.write(A),this.gamma(A.readUInt32BE(0)/g.GAMMA_DIVISION),this._handleChunkEnd()},C.prototype._handleIDAT=function(A){this.read(-A,this._parseIDAT.bind(this,A))},C.prototype._parseIDAT=function(A,B){if(this._crc.write(B),this._colorType===g.COLORTYPE_PALETTE_COLOR&&0===this._palette.length)throw new Error("Expected palette not found");this.inflateData(B);var Q=A-B.length;Q>0?this._handleIDAT(Q):this._handleChunkEnd()},C.prototype._handleIEND=function(A){this.read(A,this._parseIEND.bind(this))},C.prototype._parseIEND=function(A){this._crc.write(A),this._hasIEND=!0,this._handleChunkEnd(),this.finished&&this.finished()}}).call(this,A("buffer").Buffer)},{"./constants":64,"./crc":65,buffer:14}],79:[function(A,B,Q){"use strict";var g=A("./parser-sync"),E=A("./packer-sync");Q.read=function(A,B){return g(A,B||{})},Q.write=function(A){return E(A)}},{"./packer-sync":73,"./parser-sync":77}],80:[function(A,B,Q){(function(B,g){"use strict";var E=A("util"),C=A("stream"),w=A("./parser-async"),I=A("./packer-async"),Y=A("./png-sync"),M=Q.PNG=function(A){C.call(this),A=A||{},this.width=A.width||0,this.height=A.height||0,this.data=this.width>0&&this.height>0?new g(4*this.width*this.height):null,A.fill&&this.data&&this.data.fill(0),this.gamma=0,this.readable=this.writable=!0,this._parser=new w(A),this._parser.on("error",this.emit.bind(this,"error")),this._parser.on("close",this._handleClose.bind(this)),this._parser.on("metadata",this._metadata.bind(this)),this._parser.on("gamma",this._gamma.bind(this)),this._parser.on("parsed",function(A){this.data=A,this.emit("parsed",A)}.bind(this)),this._packer=new I(A),this._packer.on("data",this.emit.bind(this,"data")),this._packer.on("end",this.emit.bind(this,"end")),this._parser.on("close",this._handleClose.bind(this)),this._packer.on("error",this.emit.bind(this,"error"))};E.inherits(M,C),M.sync=Y,M.prototype.pack=function(){return this.data&&this.data.length?(B.nextTick(function(){this._packer.pack(this.data,this.width,this.height,this.gamma)}.bind(this)),this):(this.emit("error","No data provided"),this)},M.prototype.parse=function(A,B){var Q,g;B&&(Q=function(A){this.removeListener("error",g),this.data=A,B(null,this)}.bind(this),g=function(A){this.removeListener("parsed",Q),B(A,null)}.bind(this),this.once("parsed",Q),this.once("error",g));return this.end(A),this},M.prototype.write=function(A){return this._parser.write(A),!0},M.prototype.end=function(A){this._parser.end(A)},M.prototype._metadata=function(A){this.width=A.width,this.height=A.height,this.emit("metadata",A)},M.prototype._gamma=function(A){this.gamma=A},M.prototype._handleClose=function(){this._parser.writable||this._packer.readable||this.emit("close")},M.bitblt=function(A,B,Q,g,E,C,w,I){if(Q>A.width||g>A.height||Q+E>A.width||g+C>A.height)throw new Error("bitblt reading outside image");if(w>B.width||I>B.height||w+E>B.width||I+C>B.height)throw new Error("bitblt writing outside image");for(var Y=0;Y<C;Y++)A.data.copy(B.data,(I+Y)*B.width+w<<2,(g+Y)*A.width+Q<<2,(g+Y)*A.width+Q+E<<2)},M.prototype.bitblt=function(A,B,Q,g,E,C,w){return M.bitblt(this,A,B,Q,g,E,C,w),this},M.adjustGamma=function(A){if(A.gamma){for(var B=0;B<A.height;B++)for(var Q=0;Q<A.width;Q++)for(var g=A.width*B+Q<<2,E=0;E<3;E++){var C=A.data[g+E]/255;C=Math.pow(C,1/2.2/A.gamma),A.data[g+E]=Math.round(255*C)}A.gamma=0}},M.prototype.adjustGamma=function(){M.adjustGamma(this)}}).call(this,A("_process"),A("buffer").Buffer)},{"./packer-async":72,"./parser-async":76,"./png-sync":79,_process:12,buffer:14,stream:94,util:103}],81:[function(A,B,Q){"use strict";var g=B.exports=function(A){this._buffer=A,this._reads=[]};g.prototype.read=function(A,B){this._reads.push({length:Math.abs(A),allowLess:A<0,func:B})},g.prototype.process=function(){for(;this._reads.length>0&&this._buffer.length;){var A=this._reads[0];if(!this._buffer.length||!(this._buffer.length>=A.length||A.allowLess))break;this._reads.shift();var B=this._buffer;this._buffer=B.slice(A.length),A.func.call(this,B.slice(0,A.length))}return this._reads.length>0?new Error("There are some read requests waitng on finished stream"):this._buffer.length>0?new Error("unrecognised content at end of stream"):void 0}},{}],82:[function(A,B,Q){(function(A){"use strict";!A.version||0===A.version.indexOf("v0.")||0===A.version.indexOf("v1.")&&0!==A.version.indexOf("v1.8.")?B.exports=function(B,Q,g,E){if("function"!=typeof B)throw new TypeError('"callback" argument must be a function');var C,w,I=arguments.length;switch(I){case 0:case 1:return A.nextTick(B);case 2:return A.nextTick(function(){B.call(null,Q)});case 3:return A.nextTick(function(){B.call(null,Q,g)});case 4:return A.nextTick(function(){B.call(null,Q,g,E)});default:for(C=new Array(I-1),w=0;w<C.length;)C[w++]=arguments[w];return A.nextTick(function(){B.apply(null,C)})}}:B.exports=A.nextTick}).call(this,A("_process"))},{_process:12}],83:[function(A,B,Q){(function(Q){"use strict";var g=A("fs");B.exports=function(A,B,E,C){var w=new Q(E);g.open(A,"r",function(A,Q){if(A)return C(A);g.read(Q,w,0,E,B,function(A,B,w){if(A)return C(A);g.close(Q,function(A){if(A)return C(A);B<E&&(w=w.slice(0,B)),C(null,w)})})})},B.exports.sync=function(A,B,E){var C=new Q(E),w=g.openSync(A,"r"),I=g.readSync(w,C,0,E,B);return g.closeSync(w),I<E&&(C=C.slice(0,I)),C}}).call(this,A("buffer").Buffer)},{buffer:14,fs:11}],84:[function(A,B,Q){B.exports=A("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":85}],85:[function(A,B,Q){"use strict";var g=Object.keys||function(A){var B=[];for(var Q in A)B.push(Q);return B};B.exports=D;var E=A("process-nextick-args"),C=A("core-util-is");C.inherits=A("inherits");var w=A("./_stream_readable"),I=A("./_stream_writable");C.inherits(D,w);for(var Y=g(I.prototype),M=0;M<Y.length;M++){var F=Y[M];D.prototype[F]||(D.prototype[F]=I.prototype[F])}function D(A){if(!(this instanceof D))return new D(A);w.call(this,A),I.call(this,A),A&&!1===A.readable&&(this.readable=!1),A&&!1===A.writable&&(this.writable=!1),this.allowHalfOpen=!0,A&&!1===A.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",c)}function c(){this.allowHalfOpen||this._writableState.ended||E(U,this)}function U(A){A.end()}},{"./_stream_readable":87,"./_stream_writable":89,"core-util-is":15,inherits:31,"process-nextick-args":82}],86:[function(A,B,Q){"use strict";B.exports=C;var g=A("./_stream_transform"),E=A("core-util-is");function C(A){if(!(this instanceof C))return new C(A);g.call(this,A)}E.inherits=A("inherits"),E.inherits(C,g),C.prototype._transform=function(A,B,Q){Q(null,A)}},{"./_stream_transform":88,"core-util-is":15,inherits:31}],87:[function(A,B,Q){(function(Q){"use strict";B.exports=i;var g=A("process-nextick-args"),E=A("isarray"),C=A("buffer").Buffer;i.ReadableState=U;A("events");var w,I=function(A,B){return A.listeners(B).length};!function(){try{w=A("stream")}catch(A){}finally{w||(w=A("events").EventEmitter)}}();C=A("buffer").Buffer;var Y=A("core-util-is");Y.inherits=A("inherits");var M,F,D=A("util"),c=void 0;function U(B,Q){F=F||A("./_stream_duplex"),B=B||{},this.objectMode=!!B.objectMode,Q instanceof F&&(this.objectMode=this.objectMode||!!B.readableObjectMode);var g=B.highWaterMark,E=this.objectMode?16:16384;this.highWaterMark=g||0===g?g:E,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.defaultEncoding=B.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,B.encoding&&(M||(M=A("string_decoder/").StringDecoder),this.decoder=new M(B.encoding),this.encoding=B.encoding)}function i(B){if(F=F||A("./_stream_duplex"),!(this instanceof i))return new i(B);this._readableState=new U(B,this),this.readable=!0,B&&"function"==typeof B.read&&(this._read=B.read),w.call(this)}function G(A,B,Q,E,w){var I=function(A,B){var Q=null;C.isBuffer(B)||"string"==typeof B||null===B||void 0===B||A.objectMode||(Q=new TypeError("Invalid non-string/buffer chunk"));return Q}(B,Q);if(I)A.emit("error",I);else if(null===Q)B.reading=!1,function(A,B){if(B.ended)return;if(B.decoder){var Q=B.decoder.end();Q&&Q.length&&(B.buffer.push(Q),B.length+=B.objectMode?1:Q.length)}B.ended=!0,h(A)}(A,B);else if(B.objectMode||Q&&Q.length>0)if(B.ended&&!w){var Y=new Error("stream.push() after EOF");A.emit("error",Y)}else if(B.endEmitted&&w){Y=new Error("stream.unshift() after end event");A.emit("error",Y)}else{var M;!B.decoder||w||E||(Q=B.decoder.write(Q),M=!B.objectMode&&0===Q.length),w||(B.reading=!1),M||(B.flowing&&0===B.length&&!B.sync?(A.emit("data",Q),A.read(0)):(B.length+=B.objectMode?1:Q.length,w?B.buffer.unshift(Q):B.buffer.push(Q),B.needReadable&&h(A))),function(A,B){B.readingMore||(B.readingMore=!0,g(o,A,B))}(A,B)}else w||(B.reading=!1);return function(A){return!A.ended&&(A.needReadable||A.length<A.highWaterMark||0===A.length)}(B)}c=D&&D.debuglog?D.debuglog("stream"):function(){},Y.inherits(i,w),i.prototype.push=function(A,B){var Q=this._readableState;return Q.objectMode||"string"!=typeof A||(B=B||Q.defaultEncoding)!==Q.encoding&&(A=new C(A,B),B=""),G(this,Q,A,B,!1)},i.prototype.unshift=function(A){return G(this,this._readableState,A,"",!0)},i.prototype.isPaused=function(){return!1===this._readableState.flowing},i.prototype.setEncoding=function(B){return M||(M=A("string_decoder/").StringDecoder),this._readableState.decoder=new M(B),this._readableState.encoding=B,this};var s=8388608;function N(A,B){return 0===B.length&&B.ended?0:B.objectMode?0===A?0:1:null===A||isNaN(A)?B.flowing&&B.buffer.length?B.buffer[0].length:B.length:A<=0?0:(A>B.highWaterMark&&(B.highWaterMark=function(A){return A>=s?A=s:(A--,A|=A>>>1,A|=A>>>2,A|=A>>>4,A|=A>>>8,A|=A>>>16,A++),A}(A)),A>B.length?B.ended?B.length:(B.needReadable=!0,0):A)}function h(A){var B=A._readableState;B.needReadable=!1,B.emittedReadable||(c("emitReadable",B.flowing),B.emittedReadable=!0,B.sync?g(H,A):H(A))}function H(A){c("emit readable"),A.emit("readable"),R(A)}function o(A,B){for(var Q=B.length;!B.reading&&!B.flowing&&!B.ended&&B.length<B.highWaterMark&&(c("maybeReadMore read 0"),A.read(0),Q!==B.length);)Q=B.length;B.readingMore=!1}function J(A){c("readable nexttick read 0"),A.read(0)}function t(A,B){B.reading||(c("resume read 0"),A.read(0)),B.resumeScheduled=!1,A.emit("resume"),R(A),B.flowing&&!B.reading&&A.read(0)}function R(A){var B=A._readableState;if(c("flow",B.flowing),B.flowing)do{var Q=A.read()}while(null!==Q&&B.flowing)}function e(A,B){var Q,g=B.buffer,E=B.length,w=!!B.decoder,I=!!B.objectMode;if(0===g.length)return null;if(0===E)Q=null;else if(I)Q=g.shift();else if(!A||A>=E)Q=w?g.join(""):1===g.length?g[0]:C.concat(g,E),g.length=0;else{if(A<g[0].length)Q=(D=g[0]).slice(0,A),g[0]=D.slice(A);else if(A===g[0].length)Q=g.shift();else{Q=w?"":new C(A);for(var Y=0,M=0,F=g.length;M<F&&Y<A;M++){var D=g[0],c=Math.min(A-Y,D.length);w?Q+=D.slice(0,c):D.copy(Q,Y,0,c),c<D.length?g[0]=D.slice(c):g.shift(),Y+=c}}}return Q}function n(A){var B=A._readableState;if(B.length>0)throw new Error("endReadable called on non-empty stream");B.endEmitted||(B.ended=!0,g(r,B,A))}function r(A,B){A.endEmitted||0!==A.length||(A.endEmitted=!0,B.readable=!1,B.emit("end"))}i.prototype.read=function(A){c("read",A);var B=this._readableState,Q=A;if(("number"!=typeof A||A>0)&&(B.emittedReadable=!1),0===A&&B.needReadable&&(B.length>=B.highWaterMark||B.ended))return c("read: emitReadable",B.length,B.ended),0===B.length&&B.ended?n(this):h(this),null;if(0===(A=N(A,B))&&B.ended)return 0===B.length&&n(this),null;var g,E=B.needReadable;return c("need readable",E),(0===B.length||B.length-A<B.highWaterMark)&&c("length less than watermark",E=!0),(B.ended||B.reading)&&c("reading or ended",E=!1),E&&(c("do read"),B.reading=!0,B.sync=!0,0===B.length&&(B.needReadable=!0),this._read(B.highWaterMark),B.sync=!1),E&&!B.reading&&(A=N(Q,B)),null===(g=A>0?e(A,B):null)&&(B.needReadable=!0,A=0),B.length-=A,0!==B.length||B.ended||(B.needReadable=!0),Q!==A&&B.ended&&0===B.length&&n(this),null!==g&&this.emit("data",g),g},i.prototype._read=function(A){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(A,B){var C=this,w=this._readableState;switch(w.pipesCount){case 0:w.pipes=A;break;case 1:w.pipes=[w.pipes,A];break;default:w.pipes.push(A)}w.pipesCount+=1,c("pipe count=%d opts=%j",w.pipesCount,B);var Y=(!B||!1!==B.end)&&A!==Q.stdout&&A!==Q.stderr?F:i;function M(A){c("onunpipe"),A===C&&i()}function F(){c("onend"),A.end()}w.endEmitted?g(Y):C.once("end",Y),A.on("unpipe",M);var D=function(A){return function(){var B=A._readableState;c("pipeOnDrain",B.awaitDrain),B.awaitDrain&&B.awaitDrain--,0===B.awaitDrain&&I(A,"data")&&(B.flowing=!0,R(A))}}(C);A.on("drain",D);var U=!1;function i(){c("cleanup"),A.removeListener("close",N),A.removeListener("finish",h),A.removeListener("drain",D),A.removeListener("error",s),A.removeListener("unpipe",M),C.removeListener("end",F),C.removeListener("end",i),C.removeListener("data",G),U=!0,!w.awaitDrain||A._writableState&&!A._writableState.needDrain||D()}function G(B){c("ondata"),!1===A.write(B)&&(1!==w.pipesCount||w.pipes[0]!==A||1!==C.listenerCount("data")||U||(c("false write response, pause",C._readableState.awaitDrain),C._readableState.awaitDrain++),C.pause())}function s(B){c("onerror",B),H(),A.removeListener("error",s),0===I(A,"error")&&A.emit("error",B)}function N(){A.removeListener("finish",h),H()}function h(){c("onfinish"),A.removeListener("close",N),H()}function H(){c("unpipe"),C.unpipe(A)}return C.on("data",G),A._events&&A._events.error?E(A._events.error)?A._events.error.unshift(s):A._events.error=[s,A._events.error]:A.on("error",s),A.once("close",N),A.once("finish",h),A.emit("pipe",C),w.flowing||(c("pipe resume"),C.resume()),A},i.prototype.unpipe=function(A){var B=this._readableState;if(0===B.pipesCount)return this;if(1===B.pipesCount)return A&&A!==B.pipes?this:(A||(A=B.pipes),B.pipes=null,B.pipesCount=0,B.flowing=!1,A&&A.emit("unpipe",this),this);if(!A){var Q=B.pipes,g=B.pipesCount;B.pipes=null,B.pipesCount=0,B.flowing=!1;for(var E=0;E<g;E++)Q[E].emit("unpipe",this);return this}var C=function(A,B){for(var Q=0,g=A.length;Q<g;Q++)if(A[Q]===B)return Q;return-1}(B.pipes,A);return-1===C?this:(B.pipes.splice(C,1),B.pipesCount-=1,1===B.pipesCount&&(B.pipes=B.pipes[0]),A.emit("unpipe",this),this)},i.prototype.on=function(A,B){var Q=w.prototype.on.call(this,A,B);if("data"===A&&!1!==this._readableState.flowing&&this.resume(),"readable"===A&&!this._readableState.endEmitted){var E=this._readableState;E.readableListening||(E.readableListening=!0,E.emittedReadable=!1,E.needReadable=!0,E.reading?E.length&&h(this):g(J,this))}return Q},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){var A=this._readableState;return A.flowing||(c("resume"),A.flowing=!0,function(A,B){B.resumeScheduled||(B.resumeScheduled=!0,g(t,A,B))}(this,A)),this},i.prototype.pause=function(){return c("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(c("pause"),this._readableState.flowing=!1,this.emit("pause")),this},i.prototype.wrap=function(A){var B=this._readableState,Q=!1,g=this;for(var E in A.on("end",function(){if(c("wrapped end"),B.decoder&&!B.ended){var A=B.decoder.end();A&&A.length&&g.push(A)}g.push(null)}),A.on("data",function(E){(c("wrapped data"),B.decoder&&(E=B.decoder.write(E)),!B.objectMode||null!==E&&void 0!==E)&&((B.objectMode||E&&E.length)&&(g.push(E)||(Q=!0,A.pause())))}),A)void 0===this[E]&&"function"==typeof A[E]&&(this[E]=function(B){return function(){return A[B].apply(A,arguments)}}(E));return function(A,B){for(var Q=0,g=A.length;Q<g;Q++)B(A[Q],Q)}(["error","close","destroy","pause","resume"],function(B){A.on(B,g.emit.bind(g,B))}),g._read=function(B){c("wrapped _read",B),Q&&(Q=!1,A.resume())},g},i._fromList=e}).call(this,A("_process"))},{"./_stream_duplex":85,_process:12,buffer:14,"core-util-is":15,events:17,inherits:31,isarray:35,"process-nextick-args":82,"string_decoder/":97,util:8}],88:[function(A,B,Q){"use strict";B.exports=w;var g=A("./_stream_duplex"),E=A("core-util-is");function C(A){this.afterTransform=function(B,Q){return function(A,B,Q){var g=A._transformState;g.transforming=!1;var E=g.writecb;if(!E)return A.emit("error",new Error("no writecb in Transform class"));g.writechunk=null,g.writecb=null,null!==Q&&void 0!==Q&&A.push(Q);E(B);var C=A._readableState;C.reading=!1,(C.needReadable||C.length<C.highWaterMark)&&A._read(C.highWaterMark)}(A,B,Q)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function w(A){if(!(this instanceof w))return new w(A);g.call(this,A),this._transformState=new C(this);var B=this;this._readableState.needReadable=!0,this._readableState.sync=!1,A&&("function"==typeof A.transform&&(this._transform=A.transform),"function"==typeof A.flush&&(this._flush=A.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(A){I(B,A)}):I(B)})}function I(A,B){if(B)return A.emit("error",B);var Q=A._writableState,g=A._transformState;if(Q.length)throw new Error("calling transform done when ws.length != 0");if(g.transforming)throw new Error("calling transform done when still transforming");return A.push(null)}E.inherits=A("inherits"),E.inherits(w,g),w.prototype.push=function(A,B){return this._transformState.needTransform=!1,g.prototype.push.call(this,A,B)},w.prototype._transform=function(A,B,Q){throw new Error("not implemented")},w.prototype._write=function(A,B,Q){var g=this._transformState;if(g.writecb=Q,g.writechunk=A,g.writeencoding=B,!g.transforming){var E=this._readableState;(g.needTransform||E.needReadable||E.length<E.highWaterMark)&&this._read(E.highWaterMark)}},w.prototype._read=function(A){var B=this._transformState;null!==B.writechunk&&B.writecb&&!B.transforming?(B.transforming=!0,this._transform(B.writechunk,B.writeencoding,B.afterTransform)):B.needTransform=!0}},{"./_stream_duplex":85,"core-util-is":15,inherits:31}],89:[function(A,Q,g){(function(g){"use strict";Q.exports=U;var E=A("process-nextick-args"),C=!g.browser&&["v0.10","v0.9."].indexOf(g.version.slice(0,5))>-1?B:E,w=A("buffer").Buffer;U.WritableState=c;var I=A("core-util-is");I.inherits=A("inherits");var Y,M={deprecate:A("util-deprecate")};!function(){try{Y=A("stream")}catch(A){}finally{Y||(Y=A("events").EventEmitter)}}();var F;w=A("buffer").Buffer;function D(){}function c(B,Q){F=F||A("./_stream_duplex"),B=B||{},this.objectMode=!!B.objectMode,Q instanceof F&&(this.objectMode=this.objectMode||!!B.writableObjectMode);var g=B.highWaterMark,w=this.objectMode?16:16384;this.highWaterMark=g||0===g?g:w,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var I=!1===B.decodeStrings;this.decodeStrings=!I,this.defaultEncoding=B.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(A){!function(A,B){var Q=A._writableState,g=Q.sync,w=Q.writecb;if(function(A){A.writing=!1,A.writecb=null,A.length-=A.writelen,A.writelen=0}(Q),B)!function(A,B,Q,g,C){--B.pendingcb,Q?E(C,g):C(g);A._writableState.errorEmitted=!0,A.emit("error",g)}(A,Q,g,B,w);else{var I=N(Q);I||Q.corked||Q.bufferProcessing||!Q.bufferedRequest||s(A,Q),g?C(G,A,Q,I,w):G(A,Q,I,w)}}(Q,A)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this),this.corkedRequestsFree.next=new o(this)}function U(B){if(F=F||A("./_stream_duplex"),!(this instanceof U||this instanceof F))return new U(B);this._writableState=new c(B,this),this.writable=!0,B&&("function"==typeof B.write&&(this._write=B.write),"function"==typeof B.writev&&(this._writev=B.writev)),Y.call(this)}function i(A,B,Q,g,E,C,w){B.writelen=g,B.writecb=w,B.writing=!0,B.sync=!0,Q?A._writev(E,B.onwrite):A._write(E,C,B.onwrite),B.sync=!1}function G(A,B,Q,g){Q||function(A,B){0===B.length&&B.needDrain&&(B.needDrain=!1,A.emit("drain"))}(A,B),B.pendingcb--,g(),H(A,B)}function s(A,B){B.bufferProcessing=!0;var Q=B.bufferedRequest;if(A._writev&&Q&&Q.next){var g=B.bufferedRequestCount,E=new Array(g),C=B.corkedRequestsFree;C.entry=Q;for(var w=0;Q;)E[w]=Q,Q=Q.next,w+=1;i(A,B,!0,B.length,E,"",C.finish),B.pendingcb++,B.lastBufferedRequest=null,B.corkedRequestsFree=C.next,C.next=null}else{for(;Q;){var I=Q.chunk,Y=Q.encoding,M=Q.callback;if(i(A,B,!1,B.objectMode?1:I.length,I,Y,M),Q=Q.next,B.writing)break}null===Q&&(B.lastBufferedRequest=null)}B.bufferedRequestCount=0,B.bufferedRequest=Q,B.bufferProcessing=!1}function N(A){return A.ending&&0===A.length&&null===A.bufferedRequest&&!A.finished&&!A.writing}function h(A,B){B.prefinished||(B.prefinished=!0,A.emit("prefinish"))}function H(A,B){var Q=N(B);return Q&&(0===B.pendingcb?(h(A,B),B.finished=!0,A.emit("finish")):h(A,B)),Q}function o(A){var B=this;this.next=null,this.entry=null,this.finish=function(Q){var g=B.entry;for(B.entry=null;g;){var E=g.callback;A.pendingcb--,E(Q),g=g.next}A.corkedRequestsFree?A.corkedRequestsFree.next=B:A.corkedRequestsFree=B}}I.inherits(U,Y),c.prototype.getBuffer=function(){for(var A=this.bufferedRequest,B=[];A;)B.push(A),A=A.next;return B},function(){try{Object.defineProperty(c.prototype,"buffer",{get:M.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")})}catch(A){}}(),U.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},U.prototype.write=function(A,B,Q){var g=this._writableState,C=!1;return"function"==typeof B&&(Q=B,B=null),w.isBuffer(A)?B="buffer":B||(B=g.defaultEncoding),"function"!=typeof Q&&(Q=D),g.ended?function(A,B){var Q=new Error("write after end");A.emit("error",Q),E(B,Q)}(this,Q):function(A,B,Q,g){var C=!0;if(!w.isBuffer(Q)&&"string"!=typeof Q&&null!==Q&&void 0!==Q&&!B.objectMode){var I=new TypeError("Invalid non-string/buffer chunk");A.emit("error",I),E(g,I),C=!1}return C}(this,g,A,Q)&&(g.pendingcb++,C=function(A,B,Q,g,E){Q=function(A,B,Q){return A.objectMode||!1===A.decodeStrings||"string"!=typeof B||(B=new w(B,Q)),B}(B,Q,g),w.isBuffer(Q)&&(g="buffer");var C=B.objectMode?1:Q.length;B.length+=C;var I=B.length<B.highWaterMark;I||(B.needDrain=!0);if(B.writing||B.corked){var Y=B.lastBufferedRequest;B.lastBufferedRequest=new function(A,B,Q){this.chunk=A,this.encoding=B,this.callback=Q,this.next=null}(Q,g,E),Y?Y.next=B.lastBufferedRequest:B.bufferedRequest=B.lastBufferedRequest,B.bufferedRequestCount+=1}else i(A,B,!1,C,Q,g,E);return I}(this,g,A,B,Q)),C},U.prototype.cork=function(){this._writableState.corked++},U.prototype.uncork=function(){var A=this._writableState;A.corked&&(A.corked--,A.writing||A.corked||A.finished||A.bufferProcessing||!A.bufferedRequest||s(this,A))},U.prototype.setDefaultEncoding=function(A){if("string"==typeof A&&(A=A.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((A+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+A);this._writableState.defaultEncoding=A},U.prototype._write=function(A,B,Q){Q(new Error("not implemented"))},U.prototype._writev=null,U.prototype.end=function(A,B,Q){var g=this._writableState;"function"==typeof A?(Q=A,A=null,B=null):"function"==typeof B&&(Q=B,B=null),null!==A&&void 0!==A&&this.write(A,B),g.corked&&(g.corked=1,this.uncork()),g.ending||g.finished||function(A,B,Q){B.ending=!0,H(A,B),Q&&(B.finished?E(Q):A.once("finish",Q));B.ended=!0,A.writable=!1}(this,g,Q)}}).call(this,A("_process"))},{"./_stream_duplex":85,_process:12,buffer:14,"core-util-is":15,events:17,inherits:31,"process-nextick-args":82,"util-deprecate":101}],90:[function(A,B,Q){B.exports=A("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":86}],91:[function(A,B,Q){var g=function(){try{return A("stream")}catch(A){}}();(Q=B.exports=A("./lib/_stream_readable.js")).Stream=g||Q,Q.Readable=Q,Q.Writable=A("./lib/_stream_writable.js"),Q.Duplex=A("./lib/_stream_duplex.js"),Q.Transform=A("./lib/_stream_transform.js"),Q.PassThrough=A("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":85,"./lib/_stream_passthrough.js":86,"./lib/_stream_readable.js":87,"./lib/_stream_transform.js":88,"./lib/_stream_writable.js":89}],92:[function(A,B,Q){B.exports=A("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":88}],93:[function(A,B,Q){B.exports=A("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":89}],94:[function(A,B,Q){B.exports=E;var g=A("events").EventEmitter;function E(){g.call(this)}A("inherits")(E,g),E.Readable=A("readable-stream/readable.js"),E.Writable=A("readable-stream/writable.js"),E.Duplex=A("readable-stream/duplex.js"),E.Transform=A("readable-stream/transform.js"),E.PassThrough=A("readable-stream/passthrough.js"),E.Stream=E,E.prototype.pipe=function(A,B){var Q=this;function E(B){A.writable&&!1===A.write(B)&&Q.pause&&Q.pause()}function C(){Q.readable&&Q.resume&&Q.resume()}Q.on("data",E),A.on("drain",C),A._isStdio||B&&!1===B.end||(Q.on("end",I),Q.on("close",Y));var w=!1;function I(){w||(w=!0,A.end())}function Y(){w||(w=!0,"function"==typeof A.destroy&&A.destroy())}function M(A){if(F(),0===g.listenerCount(this,"error"))throw A}function F(){Q.removeListener("data",E),A.removeListener("drain",C),Q.removeListener("end",I),Q.removeListener("close",Y),Q.removeListener("error",M),A.removeListener("error",M),Q.removeListener("end",F),Q.removeListener("close",F),A.removeListener("close",F)}return Q.on("error",M),A.on("error",M),Q.on("end",F),Q.on("close",F),A.on("close",F),A.emit("pipe",Q),A}},{events:17,inherits:31,"readable-stream/duplex.js":84,"readable-stream/passthrough.js":90,"readable-stream/readable.js":91,"readable-stream/transform.js":92,"readable-stream/writable.js":93}],95:[function(A,B,Q){B.exports=A("stream-to").buffer},{"stream-to":96}],96:[function(A,B,Q){(function(A){function B(A,B){var Q=[];function g(A){Q.push(A)}function E(){B(null,Q),C()}function C(){Q=null,A.removeListener("data",g),A.removeListener("end",E),A.removeListener("error",B),A.removeListener("error",C),A.removeListener("close",C)}return A.on("data",g),A.once("end",E),A.once("error",B),A.once("error",C),A.once("close",C),A}Q.array=B,Q.buffer=function(Q,g){return B(Q,function(B,Q){B||!Q?g(B):g(null,A.concat(Q))}),Q}}).call(this,A("buffer").Buffer)},{buffer:14}],97:[function(A,B,Q){var g=A("buffer").Buffer,E=g.isEncoding||function(A){switch(A&&A.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};var C=Q.StringDecoder=function(A){switch(this.encoding=(A||"utf8").toLowerCase().replace(/[-_]/,""),function(A){if(A&&!E(A))throw new Error("Unknown encoding: "+A)}(A),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=I;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=Y;break;default:return void(this.write=w)}this.charBuffer=new g(6),this.charReceived=0,this.charLength=0};function w(A){return A.toString(this.encoding)}function I(A){this.charReceived=A.length%2,this.charLength=this.charReceived?2:0}function Y(A){this.charReceived=A.length%3,this.charLength=this.charReceived?3:0}C.prototype.write=function(A){for(var B="";this.charLength;){var Q=A.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:A.length;if(A.copy(this.charBuffer,this.charReceived,0,Q),this.charReceived+=Q,this.charReceived<this.charLength)return"";if(A=A.slice(Q,A.length),!((E=(B=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(B.length-1))>=55296&&E<=56319)){if(this.charReceived=this.charLength=0,0===A.length)return B;break}this.charLength+=this.surrogateSize,B=""}this.detectIncompleteChar(A);var g=A.length;this.charLength&&(A.copy(this.charBuffer,0,A.length-this.charReceived,g),g-=this.charReceived);var E;g=(B+=A.toString(this.encoding,0,g)).length-1;if((E=B.charCodeAt(g))>=55296&&E<=56319){var C=this.surrogateSize;return this.charLength+=C,this.charReceived+=C,this.charBuffer.copy(this.charBuffer,C,0,C),A.copy(this.charBuffer,0,0,C),B.substring(0,g)}return B},C.prototype.detectIncompleteChar=function(A){for(var B=A.length>=3?3:A.length;B>0;B--){var Q=A[A.length-B];if(1==B&&Q>>5==6){this.charLength=2;break}if(B<=2&&Q>>4==14){this.charLength=3;break}if(B<=3&&Q>>3==30){this.charLength=4;break}}this.charReceived=B},C.prototype.end=function(A){var B="";if(A&&A.length&&(B=this.write(A)),this.charReceived){var Q=this.charReceived,g=this.charBuffer,E=this.encoding;B+=g.slice(0,Q).toString(E)}return B}},{buffer:14}],98:[function(A,B,g){!function(A){var E=/^\s+/,w=/\s+$/,Y=0,M=A.round,F=A.min,D=A.max,c=A.random;function U(B,Q){if(B=B||"",Q=Q||{},B instanceof U)return B;if(!(this instanceof U))return new U(B,Q);var g=function(B){var Q={r:0,g:0,b:0},g=1,C=null,Y=null,M=null,c=!1,U=!1;"string"==typeof B&&(B=function(A){A=A.replace(E,"").replace(w,"").toLowerCase();var B,Q=!1;if(k[A])A=k[A],Q=!0;else if("transparent"==A)return{r:0,g:0,b:0,a:0,format:"name"};if(B=P.rgb.exec(A))return{r:B[1],g:B[2],b:B[3]};if(B=P.rgba.exec(A))return{r:B[1],g:B[2],b:B[3],a:B[4]};if(B=P.hsl.exec(A))return{h:B[1],s:B[2],l:B[3]};if(B=P.hsla.exec(A))return{h:B[1],s:B[2],l:B[3],a:B[4]};if(B=P.hsv.exec(A))return{h:B[1],s:B[2],v:B[3]};if(B=P.hsva.exec(A))return{h:B[1],s:B[2],v:B[3],a:B[4]};if(B=P.hex8.exec(A))return{r:m(B[1]),g:m(B[2]),b:m(B[3]),a:W(B[4]),format:Q?"name":"hex8"};if(B=P.hex6.exec(A))return{r:m(B[1]),g:m(B[2]),b:m(B[3]),format:Q?"name":"hex"};if(B=P.hex4.exec(A))return{r:m(B[1]+""+B[1]),g:m(B[2]+""+B[2]),b:m(B[3]+""+B[3]),a:W(B[4]+""+B[4]),format:Q?"name":"hex8"};if(B=P.hex3.exec(A))return{r:m(B[1]+""+B[1]),g:m(B[2]+""+B[2]),b:m(B[3]+""+B[3]),format:Q?"name":"hex"};return!1}(B));"object"==(void 0===B?"undefined":I(B))&&(X(B.r)&&X(B.g)&&X(B.b)?(i=B.r,G=B.g,s=B.b,Q={r:255*z(i,255),g:255*z(G,255),b:255*z(s,255)},c=!0,U="%"===String(B.r).substr(-1)?"prgb":"rgb"):X(B.h)&&X(B.s)&&X(B.v)?(C=S(B.s),Y=S(B.v),Q=function(B,Q,g){B=6*z(B,360),Q=z(Q,100),g=z(g,100);var E=A.floor(B),C=B-E,w=g*(1-Q),I=g*(1-C*Q),Y=g*(1-(1-C)*Q),M=E%6;return{r:255*[g,I,w,w,Y,g][M],g:255*[Y,g,g,I,w,w][M],b:255*[w,w,Y,g,g,I][M]}}(B.h,C,Y),c=!0,U="hsv"):X(B.h)&&X(B.s)&&X(B.l)&&(C=S(B.s),M=S(B.l),Q=function(A,B,Q){var g,E,C;function w(A,B,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?A+6*(B-A)*Q:Q<.5?B:Q<2/3?A+(B-A)*(2/3-Q)*6:A}if(A=z(A,360),B=z(B,100),Q=z(Q,100),0===B)g=E=C=Q;else{var I=Q<.5?Q*(1+B):Q+B-Q*B,Y=2*Q-I;g=w(Y,I,A+1/3),E=w(Y,I,A),C=w(Y,I,A-1/3)}return{r:255*g,g:255*E,b:255*C}}(B.h,C,M),c=!0,U="hsl"),B.hasOwnProperty("a")&&(g=B.a));var i,G,s;return g=T(g),{ok:c,format:B.format||U,r:F(255,D(Q.r,0)),g:F(255,D(Q.g,0)),b:F(255,D(Q.b,0)),a:g}}(B);this._originalInput=B,this._r=g.r,this._g=g.g,this._b=g.b,this._a=g.a,this._roundA=M(100*this._a)/100,this._format=Q.format||g.format,this._gradientType=Q.gradientType,this._r<1&&(this._r=M(this._r)),this._g<1&&(this._g=M(this._g)),this._b<1&&(this._b=M(this._b)),this._ok=g.ok,this._tc_id=Y++}function i(A,B,Q){A=z(A,255),B=z(B,255),Q=z(Q,255);var g,E,C=D(A,B,Q),w=F(A,B,Q),I=(C+w)/2;if(C==w)g=E=0;else{var Y=C-w;switch(E=I>.5?Y/(2-C-w):Y/(C+w),C){case A:g=(B-Q)/Y+(B<Q?6:0);break;case B:g=(Q-A)/Y+2;break;case Q:g=(A-B)/Y+4}g/=6}return{h:g,s:E,l:I}}function G(A,B,Q){A=z(A,255),B=z(B,255),Q=z(Q,255);var g,E,C=D(A,B,Q),w=F(A,B,Q),I=C,Y=C-w;if(E=0===C?0:Y/C,C==w)g=0;else{switch(C){case A:g=(B-Q)/Y+(B<Q?6:0);break;case B:g=(Q-A)/Y+2;break;case Q:g=(A-B)/Y+4}g/=6}return{h:g,s:E,v:I}}function s(A,B,Q,g){var E=[L(M(A).toString(16)),L(M(B).toString(16)),L(M(Q).toString(16))];return g&&E[0].charAt(0)==E[0].charAt(1)&&E[1].charAt(0)==E[1].charAt(1)&&E[2].charAt(0)==E[2].charAt(1)?E[0].charAt(0)+E[1].charAt(0)+E[2].charAt(0):E.join("")}function N(A,B,Q,g){return[L(l(g)),L(M(A).toString(16)),L(M(B).toString(16)),L(M(Q).toString(16))].join("")}function h(A,B){B=0===B?0:B||10;var Q=U(A).toHsl();return Q.s-=B/100,Q.s=d(Q.s),U(Q)}function H(A,B){B=0===B?0:B||10;var Q=U(A).toHsl();return Q.s+=B/100,Q.s=d(Q.s),U(Q)}function o(A){return U(A).desaturate(100)}function J(A,B){B=0===B?0:B||10;var Q=U(A).toHsl();return Q.l+=B/100,Q.l=d(Q.l),U(Q)}function t(A,B){B=0===B?0:B||10;var Q=U(A).toRgb();return Q.r=D(0,F(255,Q.r-M(-B/100*255))),Q.g=D(0,F(255,Q.g-M(-B/100*255))),Q.b=D(0,F(255,Q.b-M(-B/100*255))),U(Q)}function R(A,B){B=0===B?0:B||10;var Q=U(A).toHsl();return Q.l-=B/100,Q.l=d(Q.l),U(Q)}function e(A,B){var Q=U(A).toHsl(),g=(Q.h+B)%360;return Q.h=g<0?360+g:g,U(Q)}function n(A){var B=U(A).toHsl();return B.h=(B.h+180)%360,U(B)}function r(A){var B=U(A).toHsl(),Q=B.h;return[U(A),U({h:(Q+120)%360,s:B.s,l:B.l}),U({h:(Q+240)%360,s:B.s,l:B.l})]}function a(A){var B=U(A).toHsl(),Q=B.h;return[U(A),U({h:(Q+90)%360,s:B.s,l:B.l}),U({h:(Q+180)%360,s:B.s,l:B.l}),U({h:(Q+270)%360,s:B.s,l:B.l})]}function f(A){var B=U(A).toHsl(),Q=B.h;return[U(A),U({h:(Q+72)%360,s:B.s,l:B.l}),U({h:(Q+216)%360,s:B.s,l:B.l})]}function j(A,B,Q){B=B||6,Q=Q||30;var g=U(A).toHsl(),E=360/Q,C=[U(A)];for(g.h=(g.h-(E*B>>1)+720)%360;--B;)g.h=(g.h+E)%360,C.push(U(g));return C}function x(A,B){B=B||6;for(var Q=U(A).toHsv(),g=Q.h,E=Q.s,C=Q.v,w=[],I=1/B;B--;)w.push(U({h:g,s:E,v:C})),C=(C+I)%1;return w}U.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var A=this.toRgb();return(299*A.r+587*A.g+114*A.b)/1e3},getLuminance:function(){var B,Q,g,E=this.toRgb();return B=E.r/255,Q=E.g/255,g=E.b/255,.2126*(B<=.03928?B/12.92:A.pow((B+.055)/1.055,2.4))+.7152*(Q<=.03928?Q/12.92:A.pow((Q+.055)/1.055,2.4))+.0722*(g<=.03928?g/12.92:A.pow((g+.055)/1.055,2.4))},setAlpha:function(A){return this._a=T(A),this._roundA=M(100*this._a)/100,this},toHsv:function(){var A=G(this._r,this._g,this._b);return{h:360*A.h,s:A.s,v:A.v,a:this._a}},toHsvString:function(){var A=G(this._r,this._g,this._b),B=M(360*A.h),Q=M(100*A.s),g=M(100*A.v);return 1==this._a?"hsv("+B+", "+Q+"%, "+g+"%)":"hsva("+B+", "+Q+"%, "+g+"%, "+this._roundA+")"},toHsl:function(){var A=i(this._r,this._g,this._b);return{h:360*A.h,s:A.s,l:A.l,a:this._a}},toHslString:function(){var A=i(this._r,this._g,this._b),B=M(360*A.h),Q=M(100*A.s),g=M(100*A.l);return 1==this._a?"hsl("+B+", "+Q+"%, "+g+"%)":"hsla("+B+", "+Q+"%, "+g+"%, "+this._roundA+")"},toHex:function(A){return s(this._r,this._g,this._b,A)},toHexString:function(A){return"#"+this.toHex(A)},toHex8:function(A){return function(A,B,Q,g,E){var C=[L(M(A).toString(16)),L(M(B).toString(16)),L(M(Q).toString(16)),L(l(g))];if(E&&C[0].charAt(0)==C[0].charAt(1)&&C[1].charAt(0)==C[1].charAt(1)&&C[2].charAt(0)==C[2].charAt(1)&&C[3].charAt(0)==C[3].charAt(1))return C[0].charAt(0)+C[1].charAt(0)+C[2].charAt(0)+C[3].charAt(0);return C.join("")}(this._r,this._g,this._b,this._a,A)},toHex8String:function(A){return"#"+this.toHex8(A)},toRgb:function(){return{r:M(this._r),g:M(this._g),b:M(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+M(this._r)+", "+M(this._g)+", "+M(this._b)+")":"rgba("+M(this._r)+", "+M(this._g)+", "+M(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:M(100*z(this._r,255))+"%",g:M(100*z(this._g,255))+"%",b:M(100*z(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+M(100*z(this._r,255))+"%, "+M(100*z(this._g,255))+"%, "+M(100*z(this._b,255))+"%)":"rgba("+M(100*z(this._r,255))+"%, "+M(100*z(this._g,255))+"%, "+M(100*z(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(y[s(this._r,this._g,this._b,!0)]||!1)},toFilter:function(A){var B="#"+N(this._r,this._g,this._b,this._a),Q=B,g=this._gradientType?"GradientType = 1, ":"";if(A){var E=U(A);Q="#"+N(E._r,E._g,E._b,E._a)}return"progid:DXImageTransform.Microsoft.gradient("+g+"startColorstr="+B+",endColorstr="+Q+")"},toString:function(A){var B=!!A;A=A||this._format;var Q=!1,g=this._a<1&&this._a>=0;return B||!g||"hex"!==A&&"hex6"!==A&&"hex3"!==A&&"hex4"!==A&&"hex8"!==A&&"name"!==A?("rgb"===A&&(Q=this.toRgbString()),"prgb"===A&&(Q=this.toPercentageRgbString()),"hex"!==A&&"hex6"!==A||(Q=this.toHexString()),"hex3"===A&&(Q=this.toHexString(!0)),"hex4"===A&&(Q=this.toHex8String(!0)),"hex8"===A&&(Q=this.toHex8String()),"name"===A&&(Q=this.toName()),"hsl"===A&&(Q=this.toHslString()),"hsv"===A&&(Q=this.toHsvString()),Q||this.toHexString()):"name"===A&&0===this._a?this.toName():this.toRgbString()},clone:function(){return U(this.toString())},_applyModification:function(A,B){var Q=A.apply(null,[this].concat([].slice.call(B)));return this._r=Q._r,this._g=Q._g,this._b=Q._b,this.setAlpha(Q._a),this},lighten:function(){return this._applyModification(J,arguments)},brighten:function(){return this._applyModification(t,arguments)},darken:function(){return this._applyModification(R,arguments)},desaturate:function(){return this._applyModification(h,arguments)},saturate:function(){return this._applyModification(H,arguments)},greyscale:function(){return this._applyModification(o,arguments)},spin:function(){return this._applyModification(e,arguments)},_applyCombination:function(A,B){return A.apply(null,[this].concat([].slice.call(B)))},analogous:function(){return this._applyCombination(j,arguments)},complement:function(){return this._applyCombination(n,arguments)},monochromatic:function(){return this._applyCombination(x,arguments)},splitcomplement:function(){return this._applyCombination(f,arguments)},triad:function(){return this._applyCombination(r,arguments)},tetrad:function(){return this._applyCombination(a,arguments)}},U.fromRatio=function(A,B){if("object"==(void 0===A?"undefined":I(A))){var Q={};for(var g in A)A.hasOwnProperty(g)&&(Q[g]="a"===g?A[g]:S(A[g]));A=Q}return U(A,B)},U.equals=function(A,B){return!(!A||!B)&&U(A).toRgbString()==U(B).toRgbString()},U.random=function(){return U.fromRatio({r:c(),g:c(),b:c()})},U.mix=function(A,B,Q){Q=0===Q?0:Q||50;var g=U(A).toRgb(),E=U(B).toRgb(),C=Q/100;return U({r:(E.r-g.r)*C+g.r,g:(E.g-g.g)*C+g.g,b:(E.b-g.b)*C+g.b,a:(E.a-g.a)*C+g.a})},U.readability=function(B,Q){var g=U(B),E=U(Q);return(A.max(g.getLuminance(),E.getLuminance())+.05)/(A.min(g.getLuminance(),E.getLuminance())+.05)},U.isReadable=function(A,B,Q){var g,E,C=U.readability(A,B);switch(E=!1,(g=function(A){var B,Q;B=((A=A||{level:"AA",size:"small"}).level||"AA").toUpperCase(),Q=(A.size||"small").toLowerCase(),"AA"!==B&&"AAA"!==B&&(B="AA");"small"!==Q&&"large"!==Q&&(Q="small");return{level:B,size:Q}}(Q)).level+g.size){case"AAsmall":case"AAAlarge":E=C>=4.5;break;case"AAlarge":E=C>=3;break;case"AAAsmall":E=C>=7}return E},U.mostReadable=function(A,B,Q){var g,E,C,w,I=null,Y=0;E=(Q=Q||{}).includeFallbackColors,C=Q.level,w=Q.size;for(var M=0;M<B.length;M++)(g=U.readability(A,B[M]))>Y&&(Y=g,I=U(B[M]));return U.isReadable(A,I,{level:C,size:w})||!E?I:(Q.includeFallbackColors=!1,U.mostReadable(A,["#fff","#000"],Q))};var k=U.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},y=U.hexNames=function(A){var B={};for(var Q in A)A.hasOwnProperty(Q)&&(B[A[Q]]=Q);return B}(k);function T(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function z(B,Q){(function(A){return"string"==typeof A&&-1!=A.indexOf(".")&&1===parseFloat(A)})(B)&&(B="100%");var g=function(A){return"string"==typeof A&&-1!=A.indexOf("%")}(B);return B=F(Q,D(0,parseFloat(B))),g&&(B=parseInt(B*Q,10)/100),A.abs(B-Q)<1e-6?1:B%Q/parseFloat(Q)}function d(A){return F(1,D(0,A))}function m(A){return parseInt(A,16)}function L(A){return 1==A.length?"0"+A:""+A}function S(A){return A<=1&&(A=100*A+"%"),A}function l(B){return A.round(255*parseFloat(B)).toString(16)}function W(A){return m(A)/255}var u,V,K,P=(V="[\\s|\\(]+("+(u="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+u+")[,|\\s]+("+u+")\\s*\\)?",K="[\\s|\\(]+("+u+")[,|\\s]+("+u+")[,|\\s]+("+u+")[,|\\s]+("+u+")\\s*\\)?",{CSS_UNIT:new RegExp(u),rgb:new RegExp("rgb"+V),rgba:new RegExp("rgba"+K),hsl:new RegExp("hsl"+V),hsla:new RegExp("hsla"+K),hsv:new RegExp("hsv"+V),hsva:new RegExp("hsva"+K),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function X(A){return!!P.CSS_UNIT.exec(A)}void 0!==B&&B.exports?B.exports=U:void 0===(C=function(){return U}.call(g,Q,g,B))||(B.exports=C)}(Math)},{}],99:[function(A,B,Q){(Q=B.exports=function(A){return A.replace(/^\s*|\s*$/g,"")}).left=function(A){return A.replace(/^\s*/,"")},Q.right=function(A){return A.replace(/\s*$/,"")}},{}],100:[function(A,B,Q){"use strict";var g=A("ip-regex");B.exports=function(A){A=A||{};var B=["(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?","(?:localhost|"+g.v4().source+"|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))","(?::\\d{2,5})?",'(?:[/?#][^\\s"]*)?'].join("");return A.exact?new RegExp("(?:^"+B+"$)","i"):new RegExp(B,"ig")}},{"ip-regex":32}],101:[function(B,Q,g){(function(A){function B(B){try{if(!A.localStorage)return!1}catch(A){return!1}var Q=A.localStorage[B];return null!=Q&&"true"===String(Q).toLowerCase()}Q.exports=function(A,Q){if(B("noDeprecation"))return A;var g=!1;return function(){if(!g){if(B("throwDeprecation"))throw new Error(Q);B("traceDeprecation")?console.trace(Q):console.warn(Q),g=!0}return A.apply(this,arguments)}}}).call(this,void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{})},{}],102:[function(A,B,Q){B.exports=function(A){return A&&"object"===(void 0===A?"undefined":I(A))&&"function"==typeof A.copy&&"function"==typeof A.fill&&"function"==typeof A.readUInt8}},{}],103:[function(B,Q,g){(function(A,Q){var E=/%[sdj%]/g;g.format=function(A){if(!h(A)){for(var B=[],Q=0;Q<arguments.length;Q++)B.push(Y(arguments[Q]));return B.join(" ")}Q=1;for(var g=arguments,C=g.length,w=String(A).replace(E,function(A){if("%%"===A)return"%";if(Q>=C)return A;switch(A){case"%s":return String(g[Q++]);case"%d":return Number(g[Q++]);case"%j":try{return JSON.stringify(g[Q++])}catch(A){return"[Circular]"}default:return A}}),I=g[Q];Q<C;I=g[++Q])s(I)||!J(I)?w+=" "+I:w+=" "+Y(I);return w},g.deprecate=function(B,E){if(H(Q.process))return function(){return g.deprecate(B,E).apply(this,arguments)};if(!0===A.noDeprecation)return B;var C=!1;return function(){if(!C){if(A.throwDeprecation)throw new Error(E);A.traceDeprecation?console.trace(E):console.error(E),C=!0}return B.apply(this,arguments)}};var C,w={};function Y(A,B){var Q={seen:[],stylize:F};return arguments.length>=3&&(Q.depth=arguments[2]),arguments.length>=4&&(Q.colors=arguments[3]),G(B)?Q.showHidden=B:B&&g._extend(Q,B),H(Q.showHidden)&&(Q.showHidden=!1),H(Q.depth)&&(Q.depth=2),H(Q.colors)&&(Q.colors=!1),H(Q.customInspect)&&(Q.customInspect=!0),Q.colors&&(Q.stylize=M),D(Q,A,Q.depth)}function M(A,B){var Q=Y.styles[B];return Q?"["+Y.colors[Q][0]+"m"+A+"["+Y.colors[Q][1]+"m":A}function F(A,B){return A}function D(A,B,Q){if(A.customInspect&&B&&e(B.inspect)&&B.inspect!==g.inspect&&(!B.constructor||B.constructor.prototype!==B)){var E=B.inspect(Q,A);return h(E)||(E=D(A,E,Q)),E}var C=function(A,B){if(H(B))return A.stylize("undefined","undefined");if(h(B)){var Q="'"+JSON.stringify(B).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return A.stylize(Q,"string")}if(N(B))return A.stylize(""+B,"number");if(G(B))return A.stylize(""+B,"boolean");if(s(B))return A.stylize("null","null")}(A,B);if(C)return C;var w=Object.keys(B),I=function(A){var B={};return A.forEach(function(A,Q){B[A]=!0}),B}(w);if(A.showHidden&&(w=Object.getOwnPropertyNames(B)),R(B)&&(w.indexOf("message")>=0||w.indexOf("description")>=0))return c(B);if(0===w.length){if(e(B)){var Y=B.name?": "+B.name:"";return A.stylize("[Function"+Y+"]","special")}if(o(B))return A.stylize(RegExp.prototype.toString.call(B),"regexp");if(t(B))return A.stylize(Date.prototype.toString.call(B),"date");if(R(B))return c(B)}var M,F="",J=!1,n=["{","}"];(i(B)&&(J=!0,n=["[","]"]),e(B))&&(F=" [Function"+(B.name?": "+B.name:"")+"]");return o(B)&&(F=" "+RegExp.prototype.toString.call(B)),t(B)&&(F=" "+Date.prototype.toUTCString.call(B)),R(B)&&(F=" "+c(B)),0!==w.length||J&&0!=B.length?Q<0?o(B)?A.stylize(RegExp.prototype.toString.call(B),"regexp"):A.stylize("[Object]","special"):(A.seen.push(B),M=J?function(A,B,Q,g,E){for(var C=[],w=0,I=B.length;w<I;++w)f(B,String(w))?C.push(U(A,B,Q,g,String(w),!0)):C.push("");return E.forEach(function(E){E.match(/^\d+$/)||C.push(U(A,B,Q,g,E,!0))}),C}(A,B,Q,I,w):w.map(function(g){return U(A,B,Q,I,g,J)}),A.seen.pop(),function(A,B,Q){if(A.reduce(function(A,B){return 0,B.indexOf("\n")>=0&&0,A+B.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return Q[0]+(""===B?"":B+"\n ")+" "+A.join(",\n  ")+" "+Q[1];return Q[0]+B+" "+A.join(", ")+" "+Q[1]}(M,F,n)):n[0]+F+n[1]}function c(A){return"["+Error.prototype.toString.call(A)+"]"}function U(A,B,Q,g,E,C){var w,I,Y;if((Y=Object.getOwnPropertyDescriptor(B,E)||{value:B[E]}).get?I=Y.set?A.stylize("[Getter/Setter]","special"):A.stylize("[Getter]","special"):Y.set&&(I=A.stylize("[Setter]","special")),f(g,E)||(w="["+E+"]"),I||(A.seen.indexOf(Y.value)<0?(I=s(Q)?D(A,Y.value,null):D(A,Y.value,Q-1)).indexOf("\n")>-1&&(I=C?I.split("\n").map(function(A){return"  "+A}).join("\n").substr(2):"\n"+I.split("\n").map(function(A){return"   "+A}).join("\n")):I=A.stylize("[Circular]","special")),H(w)){if(C&&E.match(/^\d+$/))return I;(w=JSON.stringify(""+E)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(w=w.substr(1,w.length-2),w=A.stylize(w,"name")):(w=w.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),w=A.stylize(w,"string"))}return w+": "+I}function i(A){return Array.isArray(A)}function G(A){return"boolean"==typeof A}function s(A){return null===A}function N(A){return"number"==typeof A}function h(A){return"string"==typeof A}function H(A){return void 0===A}function o(A){return J(A)&&"[object RegExp]"===n(A)}function J(A){return"object"===(void 0===A?"undefined":I(A))&&null!==A}function t(A){return J(A)&&"[object Date]"===n(A)}function R(A){return J(A)&&("[object Error]"===n(A)||A instanceof Error)}function e(A){return"function"==typeof A}function n(A){return Object.prototype.toString.call(A)}function r(A){return A<10?"0"+A.toString(10):A.toString(10)}g.debuglog=function(B){if(H(C)&&(C=A.env.NODE_DEBUG||""),B=B.toUpperCase(),!w[B])if(new RegExp("\\b"+B+"\\b","i").test(C)){var Q=A.pid;w[B]=function(){var A=g.format.apply(g,arguments);console.error("%s %d: %s",B,Q,A)}}else w[B]=function(){};return w[B]},g.inspect=Y,Y.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},Y.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},g.isArray=i,g.isBoolean=G,g.isNull=s,g.isNullOrUndefined=function(A){return null==A},g.isNumber=N,g.isString=h,g.isSymbol=function(A){return"symbol"===(void 0===A?"undefined":I(A))},g.isUndefined=H,g.isRegExp=o,g.isObject=J,g.isDate=t,g.isError=R,g.isFunction=e,g.isPrimitive=function(A){return null===A||"boolean"==typeof A||"number"==typeof A||"string"==typeof A||"symbol"===(void 0===A?"undefined":I(A))||void 0===A},g.isBuffer=B("./support/isBuffer");var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function f(A,B){return Object.prototype.hasOwnProperty.call(A,B)}g.log=function(){var A,B;console.log("%s - %s",(A=new Date,B=[r(A.getHours()),r(A.getMinutes()),r(A.getSeconds())].join(":"),[A.getDate(),a[A.getMonth()],B].join(" ")),g.format.apply(g,arguments))},g.inherits=B("inherits"),g._extend=function(A,B){if(!B||!J(B))return A;for(var Q=Object.keys(B),g=Q.length;g--;)A[Q[g]]=B[Q[g]];return A}}).call(this,B("_process"),void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{})},{"./support/isBuffer":102,_process:12,inherits:31}],104:[function(A,B,Q){"use strict";var g=A("global/window"),E=A("is-function"),C=A("parse-headers"),w=A("xtend");function I(A,B,Q){var g=A;return E(B)?(Q=B,"string"==typeof A&&(g={uri:A})):g=w(B,{uri:A}),g.callback=Q,g}function Y(A,B,Q){return M(B=I(A,B,Q))}function M(A){if(void 0===A.callback)throw new Error("callback argument missing");var B=!1,Q=function(Q,g,E){B||(B=!0,A.callback(Q,g,E))};var g={body:void 0,headers:{},statusCode:0,method:U,url:c,rawRequest:F};function E(A){return clearTimeout(D),A instanceof Error||(A=new Error(""+(A||"Unknown XMLHttpRequest Error"))),A.statusCode=0,Q(A,g)}function w(){if(!M){var B;clearTimeout(D),B=A.useXDR&&void 0===F.status?200:1223===F.status?204:F.status;var E=g,w=null;return 0!==B?(E={body:function(){var A=void 0;if(A=F.response?F.response:F.responseText||function(A){if("document"===A.responseType)return A.responseXML;var B=204===A.status&&A.responseXML&&"parsererror"===A.responseXML.documentElement.nodeName;return""!==A.responseType||B?null:A.responseXML}(F),N)try{A=JSON.parse(A)}catch(A){}return A}(),statusCode:B,method:U,headers:{},url:c,rawRequest:F},F.getAllResponseHeaders&&(E.headers=C(F.getAllResponseHeaders()))):w=new Error("Internal XMLHttpRequest Error"),Q(w,E,E.body)}}var I,M,F=A.xhr||null;F||(F=A.cors||A.useXDR?new Y.XDomainRequest:new Y.XMLHttpRequest);var D,c=F.url=A.uri||A.url,U=F.method=A.method||"GET",i=A.body||A.data||null,G=F.headers=A.headers||{},s=!!A.sync,N=!1;if("json"in A&&(N=!0,G.accept||G.Accept||(G.Accept="application/json"),"GET"!==U&&"HEAD"!==U&&(G["content-type"]||G["Content-Type"]||(G["Content-Type"]="application/json"),i=JSON.stringify(A.json))),F.onreadystatechange=function(){4===F.readyState&&w()},F.onload=w,F.onerror=E,F.onprogress=function(){},F.ontimeout=E,F.open(U,c,!s,A.username,A.password),s||(F.withCredentials=!!A.withCredentials),!s&&A.timeout>0&&(D=setTimeout(function(){M=!0,F.abort("timeout");var A=new Error("XMLHttpRequest timeout");A.code="ETIMEDOUT",E(A)},A.timeout)),F.setRequestHeader)for(I in G)G.hasOwnProperty(I)&&F.setRequestHeader(I,G[I]);else if(A.headers&&!function(A){for(var B in A)if(A.hasOwnProperty(B))return!1;return!0}(A.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in A&&(F.responseType=A.responseType),"beforeSend"in A&&"function"==typeof A.beforeSend&&A.beforeSend(F),F.send(i),F}B.exports=Y,Y.XMLHttpRequest=g.XMLHttpRequest||function(){},Y.XDomainRequest="withCredentials"in new Y.XMLHttpRequest?Y.XMLHttpRequest:g.XDomainRequest,function(A,B){for(var Q=0;Q<A.length;Q++)B(A[Q])}(["get","put","post","patch","head","delete"],function(A){Y["delete"===A?"del":A]=function(B,Q,g){return(Q=I(B,Q,g)).method=A.toUpperCase(),M(Q)}})},{"global/window":29,"is-function":34,"parse-headers":58,xtend:106}],105:[function(A,B,Q){B.exports=void 0!==w.DOMParser?function(A){return(new w.DOMParser).parseFromString(A,"application/xml")}:void 0!==w.ActiveXObject&&new w.ActiveXObject("Microsoft.XMLDOM")?function(A){var B=new w.ActiveXObject("Microsoft.XMLDOM");return B.async="false",B.loadXML(A),B}:function(A){var B=document.createElement("div");return B.innerHTML=A,B}},{}],106:[function(A,B,Q){B.exports=function(){for(var A={},B=0;B<arguments.length;B++){var Q=arguments[B];for(var E in Q)g.call(Q,E)&&(A[E]=Q[E])}return A};var g=Object.prototype.hasOwnProperty},{}],107:[function(A,B,Q){function g(A,B){this.size=this.size||A,this.smallerSize=this.smallerSize||B,function(A){for(var B=1;B<A;B++)C[B]=1;C[0]=1/Math.sqrt(2)}(this.size)}function E(A){var B={};return B.r=Math.floor(A/Math.pow(256,3)),B.g=Math.floor((A-B.r*Math.pow(256,3))/Math.pow(256,2)),B.b=Math.floor((A-B.r*Math.pow(256,3)-B.g*Math.pow(256,2))/Math.pow(256,1)),B.a=Math.floor((A-B.r*Math.pow(256,3)-B.g*Math.pow(256,2)-B.b*Math.pow(256,1))/Math.pow(256,0)),B}g.prototype.size=32,g.prototype.smallerSize=8,g.prototype.distance=function(A,B){for(var Q=0,g=0;g<A.length;g++)A[g]!=B[g]&&Q++;return Q/A.length},g.prototype.getHash=function(A){(A=A.clone().resize(this.size,this.size)).grayscale();for(var B=[],Q=0;Q<A.bitmap.width;Q++){B[Q]=[];for(var g=0;g<A.bitmap.height;g++)B[Q][g]=E(A.getPixelColor(Q,g)).b}var w=function(A,B){for(var Q=B,g=[],E=0;E<Q;E++){g[E]=[];for(var w=0;w<Q;w++){for(var I=0,Y=0;Y<Q;Y++)for(var M=0;M<Q;M++)I+=Math.cos((2*Y+1)/(2*Q)*E*Math.PI)*Math.cos((2*M+1)/(2*Q)*w*Math.PI)*A[Y][M];I*=C[E]*C[w]/4,g[E][w]=I}}return g}(B,this.size),I=0;for(Q=0;Q<this.smallerSize;Q++)for(g=0;g<this.smallerSize;g++)I+=w[Q][g];var Y=I/(this.smallerSize*this.smallerSize),M="";for(Q=0;Q<this.smallerSize;Q++)for(g=0;g<this.smallerSize;g++)M+=w[Q][g]>Y?"1":"0";return M};var C=[];B.exports=g},{}],108:[function(A,B,Q){function g(A,B,Q,g,E,C,w){this.widthOriginal=Math.abs(parseInt(A)||0),this.heightOriginal=Math.abs(parseInt(B)||0),this.targetWidth=Math.abs(parseInt(Q)||0),this.targetHeight=Math.abs(parseInt(g)||0),this.colorChannels=E?4:3,this.interpolationPass=!!C,this.resizeCallback="function"==typeof w?w:function(A){},this.targetWidthMultipliedByChannels=this.targetWidth*this.colorChannels,this.originalWidthMultipliedByChannels=this.widthOriginal*this.colorChannels,this.originalHeightMultipliedByChannels=this.heightOriginal*this.colorChannels,this.widthPassResultSize=this.targetWidthMultipliedByChannels*this.heightOriginal,this.finalResultSize=this.targetWidthMultipliedByChannels*this.targetHeight,this.initialize()}g.prototype.initialize=function(){if(!(this.widthOriginal>0&&this.heightOriginal>0&&this.targetWidth>0&&this.targetHeight>0))throw new Error("Invalid settings specified for the resizer.");this.configurePasses()},g.prototype.configurePasses=function(){this.widthOriginal==this.targetWidth?this.resizeWidth=this.bypassResizer:(this.ratioWeightWidthPass=this.widthOriginal/this.targetWidth,this.ratioWeightWidthPass<1&&this.interpolationPass?(this.initializeFirstPassBuffers(!0),this.resizeWidth=4==this.colorChannels?this.resizeWidthInterpolatedRGBA:this.resizeWidthInterpolatedRGB):(this.initializeFirstPassBuffers(!1),this.resizeWidth=4==this.colorChannels?this.resizeWidthRGBA:this.resizeWidthRGB)),this.heightOriginal==this.targetHeight?this.resizeHeight=this.bypassResizer:(this.ratioWeightHeightPass=this.heightOriginal/this.targetHeight,this.ratioWeightHeightPass<1&&this.interpolationPass?(this.initializeSecondPassBuffers(!0),this.resizeHeight=this.resizeHeightInterpolated):(this.initializeSecondPassBuffers(!1),this.resizeHeight=4==this.colorChannels?this.resizeHeightRGBA:this.resizeHeightRGB))},g.prototype.resizeWidthRGB=function(A){var B=this.ratioWeightWidthPass,Q=1/B,g=0,E=0,C=0,w=0,I=0,Y=0,M=0,F=this.originalWidthMultipliedByChannels-2,D=this.targetWidthMultipliedByChannels-2,c=this.outputWidthWorkBench,U=this.widthBuffer;do{for(I=0;I<this.originalHeightMultipliedByChannels;)c[I++]=0,c[I++]=0,c[I++]=0;g=B;do{if(!(g>=(E=1+C-w))){for(I=0,Y=C;I<this.originalHeightMultipliedByChannels;Y+=F)c[I++]+=A[Y++]*g,c[I++]+=A[Y++]*g,c[I++]+=A[Y]*g;w+=g;break}for(I=0,Y=C;I<this.originalHeightMultipliedByChannels;Y+=F)c[I++]+=A[Y++]*E,c[I++]+=A[Y++]*E,c[I++]+=A[Y]*E;w=C+=3,g-=E}while(g>0&&C<this.originalWidthMultipliedByChannels);for(I=0,Y=M;I<this.originalHeightMultipliedByChannels;Y+=D)U[Y++]=c[I++]*Q,U[Y++]=c[I++]*Q,U[Y]=c[I++]*Q;M+=3}while(M<this.targetWidthMultipliedByChannels);return U},g.prototype.resizeWidthInterpolatedRGB=function(A){for(var B=this.ratioWeightWidthPass,Q=0,g=0,E=0,C=0,w=0,I=this.widthBuffer,Y=0;Q<1/3;Y+=3,Q+=B)for(g=Y,E=0;g<this.widthPassResultSize;E+=this.originalWidthMultipliedByChannels,g+=this.targetWidthMultipliedByChannels)I[g]=A[E],I[g+1]=A[E+1],I[g+2]=A[E+2];Q-=1/3;for(var M=this.widthOriginal-1;Q<M;Y+=3,Q+=B)for(C=1-(w=Q%1),g=Y,E=3*Math.floor(Q);g<this.widthPassResultSize;E+=this.originalWidthMultipliedByChannels,g+=this.targetWidthMultipliedByChannels)I[g]=A[E]*C+A[E+3]*w,I[g+1]=A[E+1]*C+A[E+4]*w,I[g+2]=A[E+2]*C+A[E+5]*w;for(M=this.originalWidthMultipliedByChannels-3;Y<this.targetWidthMultipliedByChannels;Y+=3)for(g=Y,E=M;g<this.widthPassResultSize;E+=this.originalWidthMultipliedByChannels,g+=this.targetWidthMultipliedByChannels)I[g]=A[E],I[g+1]=A[E+1],I[g+2]=A[E+2];return I},g.prototype.resizeWidthRGBA=function(A){var B=this.ratioWeightWidthPass,Q=1/B,g=0,E=0,C=0,w=0,I=0,Y=0,M=0,F=this.originalWidthMultipliedByChannels-3,D=this.targetWidthMultipliedByChannels-3,c=this.outputWidthWorkBench,U=this.widthBuffer;do{for(I=0;I<this.originalHeightMultipliedByChannels;)c[I++]=0,c[I++]=0,c[I++]=0,c[I++]=0;g=B;do{if(!(g>=(E=1+C-w))){for(I=0,Y=C;I<this.originalHeightMultipliedByChannels;Y+=F)c[I++]+=A[Y++]*g,c[I++]+=A[Y++]*g,c[I++]+=A[Y++]*g,c[I++]+=A[Y]*g;w+=g;break}for(I=0,Y=C;I<this.originalHeightMultipliedByChannels;Y+=F)c[I++]+=A[Y++]*E,c[I++]+=A[Y++]*E,c[I++]+=A[Y++]*E,c[I++]+=A[Y]*E;w=C+=4,g-=E}while(g>0&&C<this.originalWidthMultipliedByChannels);for(I=0,Y=M;I<this.originalHeightMultipliedByChannels;Y+=D)U[Y++]=c[I++]*Q,U[Y++]=c[I++]*Q,U[Y++]=c[I++]*Q,U[Y]=c[I++]*Q;M+=4}while(M<this.targetWidthMultipliedByChannels);return U},g.prototype.resizeWidthInterpolatedRGBA=function(A){for(var B=this.ratioWeightWidthPass,Q=0,g=0,E=0,C=0,w=0,I=this.widthBuffer,Y=0;Q<1/3;Y+=4,Q+=B)for(g=Y,E=0;g<this.widthPassResultSize;E+=this.originalWidthMultipliedByChannels,g+=this.targetWidthMultipliedByChannels)I[g]=A[E],I[g+1]=A[E+1],I[g+2]=A[E+2],I[g+3]=A[E+3];Q-=1/3;for(var M=this.widthOriginal-1;Q<M;Y+=4,Q+=B)for(C=1-(w=Q%1),g=Y,E=4*Math.floor(Q);g<this.widthPassResultSize;E+=this.originalWidthMultipliedByChannels,g+=this.targetWidthMultipliedByChannels)I[g]=A[E]*C+A[E+4]*w,I[g+1]=A[E+1]*C+A[E+5]*w,I[g+2]=A[E+2]*C+A[E+6]*w,I[g+3]=A[E+3]*C+A[E+7]*w;for(M=this.originalWidthMultipliedByChannels-4;Y<this.targetWidthMultipliedByChannels;Y+=4)for(g=Y,E=M;g<this.widthPassResultSize;E+=this.originalWidthMultipliedByChannels,g+=this.targetWidthMultipliedByChannels)I[g]=A[E],I[g+1]=A[E+1],I[g+2]=A[E+2],I[g+3]=A[E+3];return I},g.prototype.resizeHeightRGB=function(A){var B=this.ratioWeightHeightPass,Q=1/B,g=0,E=0,C=0,w=0,I=0,Y=0,M=this.outputHeightWorkBench,F=this.heightBuffer;do{for(I=0;I<this.targetWidthMultipliedByChannels;)M[I++]=0,M[I++]=0,M[I++]=0;g=B;do{if(!(g>=(E=1+C-w))){for(I=0,E=C;I<this.targetWidthMultipliedByChannels;)M[I++]+=A[E++]*g,M[I++]+=A[E++]*g,M[I++]+=A[E++]*g;w+=g;break}for(I=0;I<this.targetWidthMultipliedByChannels;)M[I++]+=A[C++]*E,M[I++]+=A[C++]*E,M[I++]+=A[C++]*E;w=C,g-=E}while(g>0&&C<this.widthPassResultSize);for(I=0;I<this.targetWidthMultipliedByChannels;)F[Y++]=Math.round(M[I++]*Q),F[Y++]=Math.round(M[I++]*Q),F[Y++]=Math.round(M[I++]*Q)}while(Y<this.finalResultSize);return F},g.prototype.resizeHeightInterpolated=function(A){for(var B=this.ratioWeightHeightPass,Q=0,g=0,E=0,C=0,w=0,I=0,Y=0,M=this.heightBuffer;Q<1/3;Q+=B)for(E=0;E<this.targetWidthMultipliedByChannels;)M[g++]=Math.round(A[E++]);Q-=1/3;for(var F=this.heightOriginal-1;Q<F;Q+=B)for(I=1-(Y=Q%1),w=(C=Math.floor(Q)*this.targetWidthMultipliedByChannels)+this.targetWidthMultipliedByChannels,E=0;E<this.targetWidthMultipliedByChannels;++E)M[g++]=Math.round(A[C++]*I+A[w++]*Y);for(;g<this.finalResultSize;)for(E=0,C=F*this.targetWidthMultipliedByChannels;E<this.targetWidthMultipliedByChannels;++E)M[g++]=Math.round(A[C++]);return M},g.prototype.resizeHeightRGBA=function(A){var B=this.ratioWeightHeightPass,Q=1/B,g=0,E=0,C=0,w=0,I=0,Y=0,M=this.outputHeightWorkBench,F=this.heightBuffer;do{for(I=0;I<this.targetWidthMultipliedByChannels;)M[I++]=0,M[I++]=0,M[I++]=0,M[I++]=0;g=B;do{if(!(g>=(E=1+C-w))){for(I=0,E=C;I<this.targetWidthMultipliedByChannels;)M[I++]+=A[E++]*g,M[I++]+=A[E++]*g,M[I++]+=A[E++]*g,M[I++]+=A[E++]*g;w+=g;break}for(I=0;I<this.targetWidthMultipliedByChannels;)M[I++]+=A[C++]*E,M[I++]+=A[C++]*E,M[I++]+=A[C++]*E,M[I++]+=A[C++]*E;w=C,g-=E}while(g>0&&C<this.widthPassResultSize);for(I=0;I<this.targetWidthMultipliedByChannels;)F[Y++]=Math.round(M[I++]*Q),F[Y++]=Math.round(M[I++]*Q),F[Y++]=Math.round(M[I++]*Q),F[Y++]=Math.round(M[I++]*Q)}while(Y<this.finalResultSize);return F},g.prototype.resize=function(A){this.resizeCallback(this.resizeHeight(this.resizeWidth(A)))},g.prototype.bypassResizer=function(A){return A},g.prototype.initializeFirstPassBuffers=function(A){this.widthBuffer=this.generateFloatBuffer(this.widthPassResultSize),A||(this.outputWidthWorkBench=this.generateFloatBuffer(this.originalHeightMultipliedByChannels))},g.prototype.initializeSecondPassBuffers=function(A){this.heightBuffer=this.generateUint8Buffer(this.finalResultSize),A||(this.outputHeightWorkBench=this.generateFloatBuffer(this.targetWidthMultipliedByChannels))},g.prototype.generateFloatBuffer=function(A){try{return new Float32Array(A)}catch(A){return[]}},g.prototype.generateUint8Buffer=function(A){try{return new Uint8Array(A)}catch(A){return[]}},B.exports=g},{}],109:[function(A,B,Q){(function(A){"use strict";B.exports={nearestNeighbor:function(A,B,Q){for(var g=A.width,E=A.height,C=B.width,w=B.height,I=A.data,Y=B.data,M=0;M<w;M++)for(var F=0;F<C;F++){var D=4*(M*C+F),c=4*(Math.round(M*E/w)*g+Math.round(F*g/C));Y[D++]=I[c++],Y[D++]=I[c++],Y[D++]=I[c++],Y[D++]=I[c++]}},bilinearInterpolation:function(A,B,Q){for(var g=A.width,E=A.height,C=B.width,w=B.height,I=A.data,Y=B.data,M=function(A,B,Q,g,E){return B===g?Q:Math.round((A-B)*E+(g-A)*Q)},F=function(A,B,Q,E,C,w,F,D){var c=4*(F*g+E)+B,U=4*(F*g+C)+B,i=M(Q,E,I[c],C,I[U]);if(D===F)Y[A+B]=i;else{U=4*(D*g+C)+B;var G=M(Q,E,I[c=4*(D*g+E)+B],C,I[U]);Y[A+B]=M(w,F,i,D,G)}},D=0;D<w;D++)for(var c=0;c<C;c++){var U=4*(D*C+c),i=c*g/C,G=Math.floor(i),s=Math.min(Math.ceil(i),g-1),N=D*E/w,h=Math.floor(N),H=Math.min(Math.ceil(N),E-1);F(U,0,i,G,s,N,h,H),F(U,1,i,G,s,N,h,H),F(U,2,i,G,s,N,h,H),F(U,3,i,G,s,N,h,H)}},_interpolate2D:function(B,Q,g,E){for(var C=B.data,w=Q.data,I=B.width,Y=B.height,M=Q.width,F=Q.height,D=Math.max(1,Math.floor(I/M)),c=M*D,U=Math.max(1,Math.floor(Y/F)),i=F*U,G=new A(c*Y*4),s=0;s<Y;s++)for(var N=0;N<c;N++)for(var h=(W=N*(I-1)/c)-(u=Math.floor(W)),H=4*(s*I+u),o=4*(s*c+N),J=0;J<4;J++){var t=H+J,R=u>0?C[t-4]:2*C[t]-C[t+4],e=C[t],n=C[t+4],r=u<I-2?C[t+8]:2*C[t+4]-C[t];G[o+J]=E(R,e,n,r,h)}var a=new A(c*i*4);for(s=0;s<i;s++)for(N=0;N<c;N++){h=(S=s*(Y-1)/i)-(l=Math.floor(S)),o=4*(l*c+N);var f=4*(s*c+N);for(J=0;J<4;J++){t=o+J;var j=l>0?G[t-4*c]:2*G[t]-G[t+4*c],x=G[t],k=G[t+4*c],y=l<Y-2?G[t+8*c]:2*G[t+4*c]-G[t];a[f+J]=E(j,x,k,y,h)}}var T=D*U;if(T>1)for(s=0;s<F;s++)for(N=0;N<M;N++){for(var z=0,d=0,m=0,L=0,S=0;S<U;S++)for(var l=s*U+S,W=0;W<D;W++){var u,V=4*(l*c+(u=N*D+W));z+=a[V],d+=a[V+1],m+=a[V+2],L+=a[V+3]}var K=4*(s*M+N);w[K]=Math.round(z/T),w[K+1]=Math.round(d/T),w[K+2]=Math.round(m/T),w[K+3]=Math.round(L/T)}else Q.data=a},bicubicInterpolation:function(A,B,Q){return this._interpolate2D(A,B,Q,function(A,B,Q,g,E){var C=g-Q-A+B,w=A-B-C,I=Q-A,Y=B;return Math.max(0,Math.min(255,C*(E*E*E)+w*(E*E)+I*E+Y))})},hermiteInterpolation:function(A,B,Q){return this._interpolate2D(A,B,Q,function(A,B,Q,g,E){var C=B,w=.5*(Q-A),I=A-2.5*B+2*Q-.5*g,Y=.5*(g-A)+1.5*(B-Q);return Math.max(0,Math.min(255,Math.round(((Y*E+I)*E+w)*E+C)))})},bezierInterpolation:function(A,B,Q){return this._interpolate2D(A,B,Q,function(A,B,Q,g,E){var C=1-E,w=B*C*C*C,I=3*(B+(Q-A)/4)*C*C*E,Y=3*(Q-(g-B)/4)*C*E*E,M=Q*E*E*E;return Math.max(0,Math.min(255,Math.round(w+I+Y+M)))})}}}).call(this,A("buffer").Buffer)},{buffer:14}]},{},[1]),!self.Buffer&&!w.Buffer)throw new Error("Node's Buffer() not available");if(!self.Jimp&&!w.Jimp)throw new Error("Could not Jimp object");!function(){function A(A){for(var B=new g(A.byteLength),Q=new Uint8Array(A),E=0;E<B.length;++E)B[E]=Q[E];return B}function B(A){return Object.prototype.toString.call(A).toLowerCase().indexOf("arraybuffer")>-1}delete Jimp.prototype.write,delete Jimp.read,Jimp.read=function(Q,g){return new Promise(function(E,C){g=g||function(A,B){A?C(A):E(B)},"string"==typeof Q?function(A,B){var Q=new XMLHttpRequest;Q.open("GET",A,!0),Q.responseType="arraybuffer",Q.onload=function(){Q.status<400?B(this.response,null):B(null,"HTTP Status "+Q.status+" for url "+A)},Q.onerror=function(A){B(null,A)},Q.send()}(Q,function(E,C){E?B(E)?new Jimp(A(E),g):g(new Error("Unrecognized data received for "+Q)):C&&g(C)}):B(Q)?new Jimp(A(Q),g):g(new Error("Jimp expects a single ArrayBuffer or image URL"))})}}()}).call(this,Q(1),Q(34).setImmediate,Q(31).Buffer)},function(A,B,Q){"use strict";Q(35);var g=Q(27);A.exports=function(A,B){return Jimp.read(A,function(Q,E){Q&&(g.warn("Error reading bitmap data: "+Q+"."),B(null,new Uint8Array(A)));var C=E.bitmap.width,w=E.bitmap.height;return C<=480&&w<=360?(E.resize(2*C,2*w,Jimp.RESIZE_NEAREST_NEIGHBOR),E.getBuffer(Jimp.AUTO,B)):C>960||w>720?(C/w>=480/360?E.resize(960,Jimp.AUTO,Jimp.RESIZE_NEAREST_NEIGHBOR):E.resize(Jimp.AUTO,720,Jimp.RESIZE_NEAREST_NEIGHBOR),E.getBuffer(Jimp.AUTO,B)):E.getBuffer(Jimp.AUTO,B)})}},function(A,B,Q){"use strict";var g=Q(36),E=Q(16),C=Q(3).inlineSvgFonts,w=Q(2);A.exports={convertFonts:w,inlineSvgFonts:C,importBitmap:g,SVGRenderer:E}}])});
//# sourceMappingURL=scratch-svg-renderer.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileoverview
 * A utility to transform a texture coordinate to another texture coordinate
 * representing how the shaders apply effects.
 */

var twgl = __webpack_require__(0);

var ShaderManager = __webpack_require__(3);

/**
 * A texture coordinate is between 0 and 1. 0.5 is the center position.
 * @const {number}
 */
var CENTER_X = 0.5;

/**
 * A texture coordinate is between 0 and 1. 0.5 is the center position.
 * @const {number}
 */
var CENTER_Y = 0.5;

var EffectTransform = function () {
    function EffectTransform() {
        _classCallCheck(this, EffectTransform);
    }

    _createClass(EffectTransform, null, [{
        key: 'transformPoint',

        /**
         * Transform a texture coordinate to one that would be select after applying shader effects.
         * @param {Drawable} drawable The drawable whose effects to emulate.
         * @param {twgl.v3} vec The texture coordinate to transform.
         * @param {?twgl.v3} dst A place to store the output coordinate.
         * @return {twgl.v3} dst - The coordinate after being transform by effects.
         */
        value: function transformPoint(drawable, vec) {
            var dst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : twgl.v3.create();

            twgl.v3.copy(vec, dst);

            var uniforms = drawable.getUniforms();
            var effects = drawable.getEnabledEffects();

            if ((effects & ShaderManager.EFFECT_INFO.mosaic.mask) !== 0) {
                // texcoord0 = fract(u_mosaic * texcoord0);
                dst[0] = uniforms.u_mosaic * dst[0] % 1;
                dst[1] = uniforms.u_mosaic * dst[1] % 1;
            }
            if ((effects & ShaderManager.EFFECT_INFO.pixelate.mask) !== 0) {
                var skinUniforms = drawable.skin.getUniforms();
                // vec2 pixelTexelSize = u_skinSize / u_pixelate;
                var texelX = skinUniforms.u_skinSize[0] * uniforms.u_pixelate;
                var texelY = skinUniforms.u_skinSize[1] * uniforms.u_pixelate;
                // texcoord0 = (floor(texcoord0 * pixelTexelSize) + kCenter) /
                //   pixelTexelSize;
                dst[0] = (Math.floor(dst[0] * texelX) + CENTER_X) / texelX;
                dst[1] = (Math.floor(dst[1] * texelY) + CENTER_Y) / texelY;
            }
            if ((effects & ShaderManager.EFFECT_INFO.whirl.mask) !== 0) {
                // const float kRadius = 0.5;
                var RADIUS = 0.5;
                // vec2 offset = texcoord0 - kCenter;
                var offsetX = dst[0] - CENTER_X;
                var offsetY = dst[1] - CENTER_Y;
                // float offsetMagnitude = length(offset);
                var offsetMagnitude = twgl.v3.length(dst);
                // float whirlFactor = max(1.0 - (offsetMagnitude / kRadius), 0.0);
                var whirlFactor = Math.max(1.0 - offsetMagnitude / RADIUS, 0.0);
                // float whirlActual = u_whirl * whirlFactor * whirlFactor;
                var whirlActual = uniforms.u_whirl * whirlFactor * whirlFactor;
                // float sinWhirl = sin(whirlActual);
                var sinWhirl = Math.sin(whirlActual);
                // float cosWhirl = cos(whirlActual);
                var cosWhirl = Math.cos(whirlActual);
                // mat2 rotationMatrix = mat2(
                //     cosWhirl, -sinWhirl,
                //     sinWhirl, cosWhirl
                // );
                var rot00 = cosWhirl;
                var rot10 = -sinWhirl;
                var rot01 = sinWhirl;
                var rot11 = cosWhirl;

                // texcoord0 = rotationMatrix * offset + kCenter;
                dst[0] = rot00 * offsetX + rot10 * offsetY + CENTER_X;
                dst[1] = rot01 * offsetX + rot11 * offsetY + CENTER_Y;
            }
            if ((effects & ShaderManager.EFFECT_INFO.fisheye.mask) !== 0) {
                // vec2 vec = (texcoord0 - kCenter) / kCenter;
                var vX = (dst[0] - CENTER_X) / CENTER_X;
                var vY = (dst[1] - CENTER_Y) / CENTER_Y;
                // float vecLength = length(vec);
                var vLength = Math.sqrt(vX * vX + vY * vY);
                // float r = pow(min(vecLength, 1.0), u_fisheye) * max(1.0, vecLength);
                var r = Math.pow(Math.min(vLength, 1), uniforms.u_fisheye) * Math.max(1, vLength);
                // vec2 unit = vec / vecLength;
                var unitX = vX / vLength;
                var unitY = vY / vLength;
                // texcoord0 = kCenter + r * unit * kCenter;
                dst[0] = CENTER_X + r * unitX * CENTER_X;
                dst[1] = CENTER_Y + r * unitY * CENTER_Y;
            }

            return dst;
        }
    }]);

    return EffectTransform;
}();

module.exports = EffectTransform;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
    /**
     * A utility for creating and comparing axis-aligned rectangles.
     * Rectangles are always initialized to the "largest possible rectangle";
     * use one of the init* methods below to set up a particular rectangle.
     * @constructor
     */
    function Rectangle() {
        _classCallCheck(this, Rectangle);

        this.left = -Infinity;
        this.right = Infinity;
        this.bottom = -Infinity;
        this.top = Infinity;
    }

    /**
     * Initialize a Rectangle from given Scratch-coordinate bounds.
     * @param {number} left Left bound of the rectangle.
     * @param {number} right Right bound of the rectangle.
     * @param {number} bottom Bottom bound of the rectangle.
     * @param {number} top Top bound of the rectangle.
     */


    _createClass(Rectangle, [{
        key: "initFromBounds",
        value: function initFromBounds(left, right, bottom, top) {
            this.left = left;
            this.right = right;
            this.bottom = bottom;
            this.top = top;
        }

        /**
         * Initialize a Rectangle to the minimum AABB around a set of points.
         * @param {Array<Array<number>>} points Array of [x, y] points.
         */

    }, {
        key: "initFromPointsAABB",
        value: function initFromPointsAABB(points) {
            this.left = Infinity;
            this.right = -Infinity;
            this.top = -Infinity;
            this.bottom = Infinity;

            for (var i = 0; i < points.length; i++) {
                var x = points[i][0];
                var y = points[i][1];
                if (x < this.left) {
                    this.left = x;
                }
                if (x > this.right) {
                    this.right = x;
                }
                if (y > this.top) {
                    this.top = y;
                }
                if (y < this.bottom) {
                    this.bottom = y;
                }
            }
        }

        /**
         * Determine if this Rectangle intersects some other.
         * Note that this is a comparison assuming the Rectangle was
         * initialized with Scratch-space bounds or points.
         * @param {!Rectangle} other Rectangle to check if intersecting.
         * @return {boolean} True if this Rectangle intersects other.
         */

    }, {
        key: "intersects",
        value: function intersects(other) {
            return this.left <= other.right && other.left <= this.right && this.top >= other.bottom && other.top >= this.bottom;
        }

        /**
         * Determine if this Rectangle fully contains some other.
         * Note that this is a comparison assuming the Rectangle was
         * initialized with Scratch-space bounds or points.
         * @param {!Rectangle} other Rectangle to check if fully contained.
         * @return {boolean} True if this Rectangle fully contains other.
         */

    }, {
        key: "contains",
        value: function contains(other) {
            return other.left > this.left && other.right < this.right && other.top < this.top && other.bottom > this.bottom;
        }

        /**
         * Clamp a Rectangle to bounds.
         * @param {number} left Left clamp.
         * @param {number} right Right clamp.
         * @param {number} bottom Bottom clamp.
         * @param {number} top Top clamp.
         */

    }, {
        key: "clamp",
        value: function clamp(left, right, bottom, top) {
            this.left = Math.max(this.left, left);
            this.right = Math.min(this.right, right);
            this.bottom = Math.max(this.bottom, bottom);
            this.top = Math.min(this.top, top);
            // Ensure rectangle coordinates in order.
            this.left = Math.min(this.left, this.right);
            this.right = Math.max(this.right, this.left);
            this.bottom = Math.min(this.bottom, this.top);
            this.top = Math.max(this.top, this.bottom);
        }

        /**
         * Push out the Rectangle to integer bounds.
         */

    }, {
        key: "snapToInt",
        value: function snapToInt() {
            this.left = Math.floor(this.left);
            this.right = Math.ceil(this.right);
            this.bottom = Math.floor(this.bottom);
            this.top = Math.ceil(this.top);
        }

        /**
         * Compute the intersection of two bounding Rectangles.
         * Could be an impossible box if they don't intersect.
         * @param {Rectangle} a One rectangle
         * @param {Rectangle} b Other rectangle
         * @param {?Rectangle} result A resulting storage rectangle  (safe to pass
         *                            a or b if you want to overwrite one)
         * @returns {Rectangle} resulting rectangle
         */

    }, {
        key: "width",


        /**
         * Width of the Rectangle.
         * @return {number} Width of rectangle.
         */
        get: function get() {
            return Math.abs(this.left - this.right);
        }

        /**
         * Height of the Rectangle.
         * @return {number} Height of rectangle.
         */

    }, {
        key: "height",
        get: function get() {
            return Math.abs(this.top - this.bottom);
        }
    }], [{
        key: "intersect",
        value: function intersect(a, b) {
            var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rectangle();

            result.left = Math.max(a.left, b.left);
            result.right = Math.min(a.right, b.right);
            result.top = Math.min(a.top, b.top);
            result.bottom = Math.max(a.bottom, b.bottom);

            return result;
        }

        /**
         * Compute the union of two bounding Rectangles.
         * @param {Rectangle} a One rectangle
         * @param {Rectangle} b Other rectangle
         * @param {?Rectangle} result A resulting storage rectangle  (safe to pass
         *                            a or b if you want to overwrite one)
         * @returns {Rectangle} resulting rectangle
         */

    }, {
        key: "union",
        value: function union(a, b) {
            var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Rectangle();

            result.left = Math.min(a.left, b.left);
            result.right = Math.max(a.right, b.right);
            // Scratch Space - +y is up
            result.top = Math.max(a.top, b.top);
            result.bottom = Math.min(a.bottom, b.bottom);
            return result;
        }
    }]);

    return Rectangle;
}();

module.exports = Rectangle;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {



var escape = module.exports = function escape(string, ignore) {
  var pattern;

  if (string === null || string === undefined) return;

  ignore = (ignore || '').replace(/[^&"<>\']/g, '');
  pattern = '([&"<>\'])'.replace(new RegExp('[' + ignore + ']', 'g'), '');

  return string.replace(new RegExp(pattern, 'g'), function(str, item) {
            return escape.map[item];
          })
}

var map = escape.map = {
    '>': '&gt;'
  , '<': '&lt;'
  , "'": '&apos;'
  , '"': '&quot;'
  , '&': '&amp;'
}

/***/ }),
/* 10 */
/***/ (function(module) {

module.exports = {"Other":0,"CR":1,"LF":2,"Control":3,"Extend":4,"Regional_Indicator":5,"SpacingMark":6,"L":7,"V":8,"T":9,"LV":10,"LVT":11};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(13)
var ieee754 = __webpack_require__(12)
var isArray = __webpack_require__(11)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Generated by CoffeeScript 1.8.0
(function() {
  var CR, Control, Extend, L, LF, LV, LVT, Regional_Indicator, SpacingMark, T, UnicodeTrie, V, classTrie, codePointAt, fs, shouldBreak, _ref;

  _ref = __webpack_require__(10), CR = _ref.CR, LF = _ref.LF, Control = _ref.Control, Extend = _ref.Extend, Regional_Indicator = _ref.Regional_Indicator, SpacingMark = _ref.SpacingMark, L = _ref.L, V = _ref.V, T = _ref.T, LV = _ref.LV, LVT = _ref.LVT;

  UnicodeTrie = __webpack_require__(4);

  

  classTrie = new UnicodeTrie(Buffer("AA4QAAAAAAAAAHbgAQgG9/ntmkuIXjUUxzN+r3k4bUWQVotSHVCsoov6qIoiToWKFYvMuLHVtlaoLqQilLrwtakuxFYoLmQQYWalRYpUKYJV0am4mMUooojgSEG7EC2CdiHq/3rzMcc0yT333jyu0xz4kdwkN+ckOXncfN9QS4jzwCqwBqwHt5O0uuFGsBlsAhOM8lvATkv+LrAb7AXPgRfBAfAqeJ2UmwZvgcPgKDgGjoNZMAe+AN+C5W0hLgAXtvN3KZci7UpwFVgHbgHjYAPYJJ8nwCTYCnaQ58dI+cfBHvn8DFgL9kl9LyP8LLOflJ8CM+Q5K39IPo/28vfeyd6X8fcR/5jYP4v4nHyeR/iNjC8gPAl+BU+T8qcRFx0hBsGKzn/74LreIrdKxsGkRO0zE48wy7lmZSfnYkmWdhnCtTK+oHnnWqUPbuyY679N5t2J8B4ZnyTltyK+Dezq5P62G+Femf+sDPdp6n8JaQcterN5NWXJ5/Ij+FnGR0n6BvCbZk4kwjGjjO8rGh9woedNoudtBz6VSCQSiUQikUgkEomET97t5Hdp/ecvGfcXH+CdWfLNu6onxGowh7SvZPp3CE+A63v5feBJxMcQPyXz/0D4N2h18+cRhEcQnt+1674I+Q+inofANrAd7AAPg529lJfyUl7KS3mu8+4G94H7e/H3rPWRid3+RGIpc0nBGbAuE63F39VV1mjS6Pn4VCv++jN9bs4JMM5gbFSIdaNnpj+ppE3j+QQYWybEA8vytP0IPwF/gpXLsQ+AhWH0xYgQPwwJMTjA46YRXrnVw4vxzYjvke8dzvQx60gkEonE0uQA9oU3wB04J7yH/fDDVv4/j+x/QqfJXv0RuEueJe7t5vkTCLeQ88V2zVkjq+tRpD/Rzf+39hTC55lnkhdQbr+l7EHkTZH8GcTnSf4hkpf9/+uI57NQFT6HTSsC6hMYg3no/FrTF983sH84FJ3xNlroteOfQWNTp+8vL/CZeeX5mgb62A2w6WaDXa/9D/6DeFTafqwBfXtFT4irwacObMnm50/dPPwF4e/grwa0kUsTxiMEnQbcY9ZlsDXwL4iyOIfEB5jvcEgST1L/u/PjkP7vctzaZzkuJZSepknsMaw67jQ0xZe61F2XyvZ5k/ecJq4voXzQ1oZWQRm1Dl1ZH0LtiiVN8pUmy9nQD77bppuTLqWl1O9Ch+9vv9Dfm12COrZqOrXRJv13TX6i00XHyISLNamp3/e6eWWab9xyoYSr1+XeUoWug7ZWFTonhLDPO9M8pOX7cVHwbhn7Yu1VantC61ZtMPWhaiMtX0YXp1wsf7X5p65sW/OslnXpV3XrN803WneXlC0zvj5EZ5sP/6yyXsQQ01rRVdJV/+XWXUZ/rPmp7gf9dNuZoKjOmOOZibqv6fY43fi6bp9pfoXyL1tZ0x5Fy6u+UcVOrm1FZxdOPS7OLi7sFaKaXt+2c/X71qELqbhcD4v8wgRnb6+rr459rqgr3H5T21tmza0r3LOnj/6oWkcmnP6pa7OPvve9dvmqm+PD1HdteyP3e7xsX/mcK7Y26tJV0bXfVI/vOa9bZ3wIbS9nraehKHiH248cn/KxtpX1bV3bQoptnGx+S9ND2xujn6jo+ku3Jvic16oO3djo7CsrnHWdM1dd9UPR/OFQ9rtKl2ZaQ4vaWWe9KGOzSV8dcenPZdvhUny1QZdW1ce4fuhSdGuYb/F1h8IV3/PPlR0+pOya6dofdPuDbt8oug9uis+YvguqjiHnnVDz1KbfR30637f1Y5U+1o2VrVxZMX37qvfcof1XJzFtCKG76plJCJ7fhTq/FJ0hqI/FFtMaGWOv69vjUsrePZTZQ331h8lm07dj1fpCn2Fi3EX09atn2L6Ynsv4AFfUernj4HucbGc8dU0w+aDL+4M6YmtLX0z3I7Ha4Fpn1bufKucck2/YfIhrP3dfci0h5puv9TfUPs21g8bbmvzQZ4tQfhNSiuZ4HVzp4rShTHt9icl2l31YVTqB6Eus81pd/U2xuwyxpYrNPsik1wCoDEZmyDMjCmXFZVtV8d12DqoMizP7zCeh9anyDw==","base64"));

  codePointAt = function(str, idx) {
    var code, hi, low;
    idx = idx || 0;
    code = str.charCodeAt(idx);
    if ((0xD800 <= code && code <= 0xDBFF)) {
      hi = code;
      low = str.charCodeAt(idx + 1);
      if ((0xDC00 <= low && low <= 0xDFFF)) {
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
      }
      return hi;
    }
    if ((0xDC00 <= code && code <= 0xDFFF)) {
      hi = str.charCodeAt(idx - 1);
      low = code;
      if ((0xD800 <= hi && hi <= 0xDBFF)) {
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
      }
      return low;
    }
    return code;
  };

  shouldBreak = function(previous, current) {
    if (previous === CR && current === LF) {
      return false;
    } else if (previous === Control || previous === CR || previous === LF) {
      return true;
    } else if (current === Control || current === CR || current === LF) {
      return true;
    } else if (previous === L && (current === L || current === V || current === LV || current === LVT)) {
      return false;
    } else if ((previous === LV || previous === V) && (current === V || current === T)) {
      return false;
    } else if ((previous === LVT || previous === T) && current === T) {
      return false;
    } else if (previous === Regional_Indicator && current === Regional_Indicator) {
      return false;
    } else if (current === Extend) {
      return false;
    } else if (current === SpacingMark) {
      return false;
    }
    return true;
  };

  exports.nextBreak = function(string, index) {
    var i, next, prev, _i, _ref1, _ref2, _ref3, _ref4;
    if (index == null) {
      index = 0;
    }
    if (index < 0) {
      return 0;
    }
    if (index >= string.length - 1) {
      return string.length;
    }
    prev = classTrie.get(codePointAt(string, index));
    for (i = _i = _ref1 = index + 1, _ref2 = string.length; _i < _ref2; i = _i += 1) {
      if ((0xd800 <= (_ref3 = string.charCodeAt(i - 1)) && _ref3 <= 0xdbff) && (0xdc00 <= (_ref4 = string.charCodeAt(i)) && _ref4 <= 0xdfff)) {
        continue;
      }
      next = classTrie.get(codePointAt(string, i));
      if (shouldBreak(prev, next)) {
        return i;
      }
      prev = next;
    }
    return string.length;
  };

  exports.previousBreak = function(string, index) {
    var i, next, prev, _i, _ref1, _ref2, _ref3;
    if (index == null) {
      index = string.length;
    }
    if (index > string.length) {
      return string.length;
    }
    if (index <= 1) {
      return 0;
    }
    index--;
    next = classTrie.get(codePointAt(string, index));
    for (i = _i = _ref1 = index - 1; _i >= 0; i = _i += -1) {
      if ((0xd800 <= (_ref2 = string.charCodeAt(i)) && _ref2 <= 0xdbff) && (0xdc00 <= (_ref3 = string.charCodeAt(i + 1)) && _ref3 <= 0xdfff)) {
        continue;
      }
      prev = classTrie.get(codePointAt(string, i));
      if (shouldBreak(prev, next)) {
        return i + 1;
      }
      next = prev;
    }
    return 0;
  };

  exports["break"] = function(str) {
    var brk, index, res;
    res = [];
    index = 0;
    while ((brk = exports.nextBreak(str, index)) < str.length) {
      res.push(str.slice(index, brk));
      index = brk;
    }
    if (index < str.length) {
      res.push(str.slice(index));
    }
    return res;
  };

  exports.countBreaks = function(str) {
    var brk, count, index;
    count = 0;
    index = 0;
    while ((brk = exports.nextBreak(str, index)) < str.length) {
      index = brk;
      count++;
    }
    if (index < str.length) {
      count++;
    }
    return count;
  };

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15).Buffer))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.7.1
(function() {
  var CI_BRK, CP_BRK, DI_BRK, IN_BRK, PR_BRK;

  exports.DI_BRK = DI_BRK = 0;

  exports.IN_BRK = IN_BRK = 1;

  exports.CI_BRK = CI_BRK = 2;

  exports.CP_BRK = CP_BRK = 3;

  exports.PR_BRK = PR_BRK = 4;

  exports.pairTable = [[PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, CP_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, DI_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, DI_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, PR_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK], [IN_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, IN_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, DI_BRK], [DI_BRK, PR_BRK, PR_BRK, IN_BRK, IN_BRK, IN_BRK, PR_BRK, PR_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK, IN_BRK, DI_BRK, DI_BRK, PR_BRK, CI_BRK, PR_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, DI_BRK, IN_BRK]];

}).call(this);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.7.1
(function() {
  var AI, AL, B2, BA, BB, BK, CB, CJ, CL, CM, CP, CR, EX, GL, H2, H3, HL, HY, ID, IN, IS, JL, JT, JV, LF, NL, NS, NU, OP, PO, PR, QU, RI, SA, SG, SP, SY, WJ, XX, ZW;

  exports.OP = OP = 0;

  exports.CL = CL = 1;

  exports.CP = CP = 2;

  exports.QU = QU = 3;

  exports.GL = GL = 4;

  exports.NS = NS = 5;

  exports.EX = EX = 6;

  exports.SY = SY = 7;

  exports.IS = IS = 8;

  exports.PR = PR = 9;

  exports.PO = PO = 10;

  exports.NU = NU = 11;

  exports.AL = AL = 12;

  exports.HL = HL = 13;

  exports.ID = ID = 14;

  exports.IN = IN = 15;

  exports.HY = HY = 16;

  exports.BA = BA = 17;

  exports.BB = BB = 18;

  exports.B2 = B2 = 19;

  exports.ZW = ZW = 20;

  exports.CM = CM = 21;

  exports.WJ = WJ = 22;

  exports.H2 = H2 = 23;

  exports.H3 = H3 = 24;

  exports.JL = JL = 25;

  exports.JV = JV = 26;

  exports.JT = JT = 27;

  exports.RI = RI = 28;

  exports.AI = AI = 29;

  exports.BK = BK = 30;

  exports.CB = CB = 31;

  exports.CJ = CJ = 32;

  exports.CR = CR = 33;

  exports.LF = LF = 34;

  exports.NL = NL = 35;

  exports.SA = SA = 36;

  exports.SG = SG = 37;

  exports.SP = SP = 38;

  exports.XX = XX = 39;

}).call(this);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}( false ? (undefined) : exports))


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var TINF_OK = 0;
var TINF_DATA_ERROR = -3;

function Tree() {
  this.table = new Uint16Array(16);   /* table of code length counts */
  this.trans = new Uint16Array(288);  /* code -> symbol translation table */
}

function Data(source, dest) {
  this.source = source;
  this.sourceIndex = 0;
  this.tag = 0;
  this.bitcount = 0;
  
  this.dest = dest;
  this.destLen = 0;
  
  this.ltree = new Tree();  /* dynamic length/symbol tree */
  this.dtree = new Tree();  /* dynamic distance tree */
}

/* --------------------------------------------------- *
 * -- uninitialized global data (static structures) -- *
 * --------------------------------------------------- */

var sltree = new Tree();
var sdtree = new Tree();

/* extra bits and base tables for length codes */
var length_bits = new Uint8Array(30);
var length_base = new Uint16Array(30);

/* extra bits and base tables for distance codes */
var dist_bits = new Uint8Array(30);
var dist_base = new Uint16Array(30);

/* special ordering of code length codes */
var clcidx = new Uint8Array([
  16, 17, 18, 0, 8, 7, 9, 6,
  10, 5, 11, 4, 12, 3, 13, 2,
  14, 1, 15
]);

/* used by tinf_decode_trees, avoids allocations every call */
var code_tree = new Tree();
var lengths = new Uint8Array(288 + 32);

/* ----------------------- *
 * -- utility functions -- *
 * ----------------------- */

/* build extra bits and base tables */
function tinf_build_bits_base(bits, base, delta, first) {
  var i, sum;

  /* build bits table */
  for (i = 0; i < delta; ++i) bits[i] = 0;
  for (i = 0; i < 30 - delta; ++i) bits[i + delta] = i / delta | 0;

  /* build base table */
  for (sum = first, i = 0; i < 30; ++i) {
    base[i] = sum;
    sum += 1 << bits[i];
  }
}

/* build the fixed huffman trees */
function tinf_build_fixed_trees(lt, dt) {
  var i;

  /* build fixed length tree */
  for (i = 0; i < 7; ++i) lt.table[i] = 0;

  lt.table[7] = 24;
  lt.table[8] = 152;
  lt.table[9] = 112;

  for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
  for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
  for (i = 0; i < 8; ++i) lt.trans[24 + 144 + i] = 280 + i;
  for (i = 0; i < 112; ++i) lt.trans[24 + 144 + 8 + i] = 144 + i;

  /* build fixed distance tree */
  for (i = 0; i < 5; ++i) dt.table[i] = 0;

  dt.table[5] = 32;

  for (i = 0; i < 32; ++i) dt.trans[i] = i;
}

/* given an array of code lengths, build a tree */
var offs = new Uint16Array(16);

function tinf_build_tree(t, lengths, off, num) {
  var i, sum;

  /* clear code length count table */
  for (i = 0; i < 16; ++i) t.table[i] = 0;

  /* scan symbol lengths, and sum code length counts */
  for (i = 0; i < num; ++i) t.table[lengths[off + i]]++;

  t.table[0] = 0;

  /* compute offset table for distribution sort */
  for (sum = 0, i = 0; i < 16; ++i) {
    offs[i] = sum;
    sum += t.table[i];
  }

  /* create code->symbol translation table (symbols sorted by code) */
  for (i = 0; i < num; ++i) {
    if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
  }
}

/* ---------------------- *
 * -- decode functions -- *
 * ---------------------- */

/* get one bit from source stream */
function tinf_getbit(d) {
  /* check if tag is empty */
  if (!d.bitcount--) {
    /* load next tag */
    d.tag = d.source[d.sourceIndex++];
    d.bitcount = 7;
  }

  /* shift bit out of tag */
  var bit = d.tag & 1;
  d.tag >>>= 1;

  return bit;
}

/* read a num bit value from a stream and add base */
function tinf_read_bits(d, num, base) {
  if (!num)
    return base;

  while (d.bitcount < 24) {
    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
    d.bitcount += 8;
  }

  var val = d.tag & (0xffff >>> (16 - num));
  d.tag >>>= num;
  d.bitcount -= num;
  return val + base;
}

/* given a data stream and a tree, decode a symbol */
function tinf_decode_symbol(d, t) {
  while (d.bitcount < 24) {
    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
    d.bitcount += 8;
  }
  
  var sum = 0, cur = 0, len = 0;
  var tag = d.tag;

  /* get more bits while code value is above sum */
  do {
    cur = 2 * cur + (tag & 1);
    tag >>>= 1;
    ++len;

    sum += t.table[len];
    cur -= t.table[len];
  } while (cur >= 0);
  
  d.tag = tag;
  d.bitcount -= len;

  return t.trans[sum + cur];
}

/* given a data stream, decode dynamic trees from it */
function tinf_decode_trees(d, lt, dt) {
  var hlit, hdist, hclen;
  var i, num, length;

  /* get 5 bits HLIT (257-286) */
  hlit = tinf_read_bits(d, 5, 257);

  /* get 5 bits HDIST (1-32) */
  hdist = tinf_read_bits(d, 5, 1);

  /* get 4 bits HCLEN (4-19) */
  hclen = tinf_read_bits(d, 4, 4);

  for (i = 0; i < 19; ++i) lengths[i] = 0;

  /* read code lengths for code length alphabet */
  for (i = 0; i < hclen; ++i) {
    /* get 3 bits code length (0-7) */
    var clen = tinf_read_bits(d, 3, 0);
    lengths[clcidx[i]] = clen;
  }

  /* build code length tree */
  tinf_build_tree(code_tree, lengths, 0, 19);

  /* decode code lengths for the dynamic trees */
  for (num = 0; num < hlit + hdist;) {
    var sym = tinf_decode_symbol(d, code_tree);

    switch (sym) {
      case 16:
        /* copy previous code length 3-6 times (read 2 bits) */
        var prev = lengths[num - 1];
        for (length = tinf_read_bits(d, 2, 3); length; --length) {
          lengths[num++] = prev;
        }
        break;
      case 17:
        /* repeat code length 0 for 3-10 times (read 3 bits) */
        for (length = tinf_read_bits(d, 3, 3); length; --length) {
          lengths[num++] = 0;
        }
        break;
      case 18:
        /* repeat code length 0 for 11-138 times (read 7 bits) */
        for (length = tinf_read_bits(d, 7, 11); length; --length) {
          lengths[num++] = 0;
        }
        break;
      default:
        /* values 0-15 represent the actual code lengths */
        lengths[num++] = sym;
        break;
    }
  }

  /* build dynamic trees */
  tinf_build_tree(lt, lengths, 0, hlit);
  tinf_build_tree(dt, lengths, hlit, hdist);
}

/* ----------------------------- *
 * -- block inflate functions -- *
 * ----------------------------- */

/* given a stream and two trees, inflate a block of data */
function tinf_inflate_block_data(d, lt, dt) {
  while (1) {
    var sym = tinf_decode_symbol(d, lt);

    /* check for end of block */
    if (sym === 256) {
      return TINF_OK;
    }

    if (sym < 256) {
      d.dest[d.destLen++] = sym;
    } else {
      var length, dist, offs;
      var i;

      sym -= 257;

      /* possibly get more bits from length code */
      length = tinf_read_bits(d, length_bits[sym], length_base[sym]);

      dist = tinf_decode_symbol(d, dt);

      /* possibly get more bits from distance code */
      offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);

      /* copy match */
      for (i = offs; i < offs + length; ++i) {
        d.dest[d.destLen++] = d.dest[i];
      }
    }
  }
}

/* inflate an uncompressed block of data */
function tinf_inflate_uncompressed_block(d) {
  var length, invlength;
  var i;
  
  /* unread from bitbuffer */
  while (d.bitcount > 8) {
    d.sourceIndex--;
    d.bitcount -= 8;
  }

  /* get length */
  length = d.source[d.sourceIndex + 1];
  length = 256 * length + d.source[d.sourceIndex];

  /* get one's complement of length */
  invlength = d.source[d.sourceIndex + 3];
  invlength = 256 * invlength + d.source[d.sourceIndex + 2];

  /* check length */
  if (length !== (~invlength & 0x0000ffff))
    return TINF_DATA_ERROR;

  d.sourceIndex += 4;

  /* copy block */
  for (i = length; i; --i)
    d.dest[d.destLen++] = d.source[d.sourceIndex++];

  /* make sure we start next block on a byte boundary */
  d.bitcount = 0;

  return TINF_OK;
}

/* inflate stream from source to dest */
function tinf_uncompress(source, dest) {
  var d = new Data(source, dest);
  var bfinal, btype, res;

  do {
    /* read final block flag */
    bfinal = tinf_getbit(d);

    /* read block type (2 bits) */
    btype = tinf_read_bits(d, 2, 0);

    /* decompress block */
    switch (btype) {
      case 0:
        /* decompress uncompressed block */
        res = tinf_inflate_uncompressed_block(d);
        break;
      case 1:
        /* decompress block with fixed huffman trees */
        res = tinf_inflate_block_data(d, sltree, sdtree);
        break;
      case 2:
        /* decompress block with dynamic huffman trees */
        tinf_decode_trees(d, d.ltree, d.dtree);
        res = tinf_inflate_block_data(d, d.ltree, d.dtree);
        break;
      default:
        res = TINF_DATA_ERROR;
    }

    if (res !== TINF_OK)
      throw new Error('Data error');

  } while (!bfinal);

  if (d.destLen < d.dest.length) {
    if (typeof d.dest.slice === 'function')
      return d.dest.slice(0, d.destLen);
    else
      return d.dest.subarray(0, d.destLen);
  }
  
  return d.dest;
}

/* -------------------- *
 * -- initialization -- *
 * -------------------- */

/* build fixed huffman trees */
tinf_build_fixed_trees(sltree, sdtree);

/* build extra bits and base tables */
tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);

/* fix a special case */
length_bits[28] = 0;
length_base[28] = 258;

module.exports = tinf_uncompress;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.7.1
(function() {
  var AI, AL, BA, BK, CB, CI_BRK, CJ, CP_BRK, CR, DI_BRK, ID, IN_BRK, LF, LineBreaker, NL, NS, PR_BRK, SA, SG, SP, UnicodeTrie, WJ, XX, base64, characterClasses, classTrie, data, fs, pairTable, _ref, _ref1;

  UnicodeTrie = __webpack_require__(4);

  

  base64 = __webpack_require__(19);

  _ref = __webpack_require__(18), BK = _ref.BK, CR = _ref.CR, LF = _ref.LF, NL = _ref.NL, CB = _ref.CB, BA = _ref.BA, SP = _ref.SP, WJ = _ref.WJ, SP = _ref.SP, BK = _ref.BK, LF = _ref.LF, NL = _ref.NL, AI = _ref.AI, AL = _ref.AL, SA = _ref.SA, SG = _ref.SG, XX = _ref.XX, CJ = _ref.CJ, ID = _ref.ID, NS = _ref.NS, characterClasses = _ref.characterClasses;

  _ref1 = __webpack_require__(17), DI_BRK = _ref1.DI_BRK, IN_BRK = _ref1.IN_BRK, CI_BRK = _ref1.CI_BRK, CP_BRK = _ref1.CP_BRK, PR_BRK = _ref1.PR_BRK, pairTable = _ref1.pairTable;

  data = base64.toByteArray("AA4IAAAAAAAAAhqg5VV7NJtZvz7fTC8zU5deplUlMrQoWqmqahD5So0aipYWrUhVFSVBQ10iSTtUtW6nKDVF6k7d75eQfEUbFcQ9KiFS90tQEolcP23nrLPmO+esr/+f39rr/a293t/e7/P8nmfvlz0O6RvrBJADtbBNaD88IOKTOmOrCqhu9zE770vc1pBV/xL5dxj2V7Zj4FGSomFKStCWNlV7hG1VabZfZ1LaHbFrRwzzLjzPoi1UHDnlV/lWbhgIIJvLBp/pu7AHEdRnIY+ROdXxg4fNpMdTxVnnm08OjozejAVsBqwqz8kddGRlRxsd8c55dNZoPuex6a7Dt6L0NNb03sqgTlR2/OT7eTt0Y0WnpUXxLsp5SMANc4DsmX4zJUBQvznwexm9tsMH+C9uRYMPOd96ZHB29NZjCIM2nfO7tsmQveX3l2r7ft0N4/SRJ7kO6Y8ZCaeuUQ4gMTZ67cp7TgxvlNDsPgOBdZi2YTam5Q7m3+00l+XG7PrDe6YoPmHgK+yLih7fAR16ZFCeD9WvOVt+gfNW/KT5/M6rb/9KERt+N1lad5RneVjzxXHsLofuU+TvrEsr3+26sVz5WJh6L/svoPK3qepFH9bysDljWtD1F7KrxzW1i9r+e/NLxV/acts7zuo304J9+t3Pd6Y6u8f3EAqxNRgv5DZjaI3unyvkvHPya/v3mWVYOC38qBq11+yHZ2bAyP1HbkV92vdno7r2lxz9UwCdCJVfd14NLcpO2CadHS/XPJ9doXgz5vLv/1OBVS3gX0D9n6LiNIDfpilO9RsLgZ2W/wIy8W/Rh93jfoz4qmRV2xElv6p2lRXQdO6/Cv8f5nGn3u0wLXjhnvClabL1o+7yvIpvLfT/xsKG30y/sTvq30ia9Czxp9dr9v/e7Yn/O0QJXxxBOJmceP/DBFa1q1v6oudn/e6qc/37dUoNvnYL4plQ9OoneYOh/r8fOFm7yl7FETHY9dXd5K2n/qEc53dOEe1TTJcvCfp1dpTC334l0vyaFL6mttNEbFjzO+ZV2mLk0qc3BrxJ4d9gweMmjRorxb7vic0rSq6D4wzAyFWas1TqPE0sLI8XLAryC8tPChaN3ALEZSWmtB34SyZcxXYn/E4Tg0LeMIPhgPKD9zyHGMxxhxnDDih7eI86xECTM8zodUCdgffUmRh4rQ8zyA6ow/Aei+01a8OMfziQQ+GAEkhwN/cqUFYAVzA9ex4n6jgtsiMvXf5BtXxEU4hSphvx3v8+9au8eEekEEpkrkne/zB1M+HAPuXIz3paxKlfe8aDMfGWAX6Md6PuuAdKHFVH++Ed5LEji94Z5zeiJIxbmWeN7rr1/ZcaBl5/nimdHsHgIH/ssyLUXZ4fDQ46HnBb+hQqG8yNiKRrXL/b1IPYDUsu3dFKtRMcjqlRvONd4xBvOufx2cUHuk8pmG1D7PyOQmUmluisVFS9OWS8fPIe8LiCtjwJKnEC9hrS9uKmISI3Wa5+vdXUG9dtyfr7g/oJv2wbzeZU838G6mEvntUb3SVV/fBZ6H/sL+lElzeRrHy2Xbe7UWX1q5sgOQ81rv+2baej4fP4m5Mf/GkoxfDtT3++KP7do9Jn26aa6xAhCf5L9RZVfkWKCcjI1eYbm2plvTEqkDxKC402bGzXCYaGnuALHabBT1dFLuOSB7RorOPEhZah1NjZIgR/UFGfK3p1ElYnevOMBDLURdpIjrI+qZk4sffGbRFiXuEmdFjiAODlQCJvIaB1rW61Ljg3y4eS4LAcSgDxxZQs0DYa15wA032Z+lGUfpoyOrFo3mg1sRQtN/fHHCx3TrM8eTrldMbYisDLXbUDoXMLejSq0fUNuO1muX0gEa8vgyegkqiqqbC3W0S4cC9Kmt8MuS/hFO7Xei3f8rSvIjeveMM7kxjUixOrl6gJshe4JU7PhOHpfrRYvu7yoAZKa3Buyk2J+K5W+nNTz1nhJDhRUfDJLiUXxjxXCJeeaOe/r7HlBP/uURc/5efaZEPxr55Qj39rfTLkugUGyMrwo7HAglfEjDriehF1jXtwJkPoiYkYQ5aoXSA7qbCBGKq5hwtu2VkpI9xVDop/1xrC52eiIvCoPWx4lLl40jm9upvycVPfpaH9/o2D4xKXpeNjE2HPQRS+3RFaYTc4Txw7Dvq5X6JBRwzs9mvoB49BK6b+XgsZVJYiInTlSXZ+62FT18mkFVcPKCJsoF5ahb19WheZLUYsSwdrrVM3aQ2XE6SzU2xHDS6iWkodk5AF6F8WUNmmushi8aVpMPwiIfEiQWo3CApONDRjrhDiVnkaFsaP5rjIJkmsN6V26li5LNM3JxGSyKgomknTyyrhcnwv9Qcqaq5utAh44W30SWo8Q0XHKR0glPF4fWst1FUCnk2woFq3iy9fAbzcjJ8fvSjgKVOfn14RDqyQuIgaGJZuswTywdCFSa89SakMf6fe+9KaQMYQlKxiJBczuPSho4wmBjdA+ag6QUOr2GdpcbSl51Ay6khhBt5UXdrnxc7ZGMxCvz96A4oLocxh2+px+1zkyLacCGrxnPzTRSgrLKpStFpH5ppKWm7PgMKZtwgytKLOjbGCOQLTm+KOowqa1sdut9raj1CZFkZD0jbaKNLpJUarSH5Qknx1YiOxdA5L6d5sfI/unmkSF65Ic/AvtXt98Pnrdwl5vgppQ3dYzWFwknZsy6xh2llmLxpegF8ayLwniknlXRHiF4hzzrgB8jQ4wdIqcaHCEAxyJwCeGkXPBZYSrrGa4vMwZvNN9aK0F4JBOK9mQ8g8EjEbIQVwvfS2D8GuCYsdqwqSWbQrfWdTRUJMqmpnWPax4Z7E137I6brHbvjpPlfNZpF1d7PP7HB/MPHcHVKTMhLO4f3CZcaccZEOiS2DpKiQB5KXDJ+Ospcz4qTRCRxgrKEQIgUkKLTKKwskdx2DWo3bg3PEoB5h2nA24olwfKSR+QR6TAvEDi/0czhUT59RZmO1MGeKGeEfuOSPWfL+XKmhqpZmOVR9mJVNDPKOS49Lq+Um10YsBybzDMtemlPCOJEtE8zaXhsaqEs9bngSJGhlOTTMlCXly9Qv5cRN3PVLK7zoMptutf7ihutrQ/Xj7VqeCdUwleTTKklOI8Wep9h7fCY0kVtDtIWKnubWAvbNZtsRRqOYl802vebPEkZRSZc6wXOfPtpPtN5HI63EUFfsy7U/TLr8NkIzaY3vx4A28x765XZMzRZTpMk81YIMuwJ5+/zoCuZj1wGnaHObxa5rpKZj4WhT670maRw04w0e3cZW74Z0aZe2n05hjZaxm6urenz8Ef5O6Yu1J2aqYAlqsCXs5ZB5o1JJ5l3xkTVr8rJQ09NLsBqRRDT2IIjOPmcJa6xQ1R5yGP9jAsj23xYDTezdyqG8YWZ7vJBIWK56K+iDgcHimiQOTIasNSua1fOBxsKMMEKd15jxTl+3CyvGCR+UyRwuSI2XuwRIPoNNclPihfJhaq2mKkNijwYLY6feqohktukmI3KDvOpN7ItCqHHhNuKlxMfBAEO5LjW2RKh6lE5Hd1dtAOopac/Z4FdsNsjMhXz/ug8JGmbVJTA+VOBJXdrYyJcIn5+OEeoK8kWEWF+wdG8ZtZHKSquWDtDVyhFPkRVqguKFkLkKCz46hcU1SUY9oJ2Sk+dmq0kglqk4kqKT1CV9JDELPjK1WsWGkEXF87g9P98e5ff0mIupm/w6vc3kCeq04X5bgJQlcMFRjlFWmSk+kssXCAVikfeAlMuzpUvCSdXiG+dc6KrIiLxxhbEVuKf7vW7KmDQI95bZe3H9mN3/77F6fZ2Yx/F9yClllj8gXpLWLpd5+v90iOaFa9sd7Pvx0lNa1o1+bkiZ69wCiC2x9UIb6/boBCuNMB/HYR0RC6+FD9Oe5qrgQl6JbXtkaYn0wkdNhROLqyhv6cKvyMj1Fvs2o3OOKoMYTubGENLfY5F6H9d8wX1cnINsvz+wZFQu3zhWVlwJvwBEp69Dqu/ZnkBf3nIfbx4TK7zOVJH5sGJX+IMwkn1vVBn38GbpTg9bJnMcTOb5F6Ci5gOn9Fcy6Qzcu+FL6mYJJ+f2ZZJGda1VqruZ0JRXItp8X0aTjIcJgzdaXlha7q7kV4ebrMsunfsRyRa9qYuryBHA0hc1KVsKdE+oI0ljLmSAyMze8lWmc5/lQ18slyTVC/vADTc+SNM5++gztTBLz4m0aVUKcfgOEExuKVomJ7XQDZuziMDjG6JP9tgR7JXZTeo9RGetW/Xm9/TgPJpTgHACPOGvmy2mDm9fl09WeMm9sQUAXP3Su2uApeCwJVT5iWCXDgmcuTsFgU9Nm6/PusJzSbDQIMfl6INY/OAEvZRN54BSSXUClM51im6Wn9VhVamKJmzOaFJErgJcs0etFZ40LIF3EPkjFTjGmAhsd174NnOwJW8TdJ1Dja+E6Wa6FVS22Haj1DDA474EesoMP5nbspAPJLWJ8rYcP1DwCslhnn+gTFm+sS9wY+U6SogAa9tiwpoxuaFeqm2OK+uozR6SfiLCOPz36LiDlzXr6UWd7BpY6mlrNANkTOeme5EgnnAkQRTGo9T6iYxbUKfGJcI9B+ub2PcyUOgpwXbOf3bHFWtygD7FYbRhb+vkzi87dB0JeXl/vBpBUz93VtqZi7AL7C1VowTF+tGmyurw7DBcktc+UMY0E10Jw4URojf8NdaNpN6E1q4+Oz+4YePtMLy8FPRP");

  classTrie = new UnicodeTrie(data);

  LineBreaker = (function() {
    var Break, mapClass, mapFirst;

    function LineBreaker(string) {
      this.string = string;
      this.pos = 0;
      this.lastPos = 0;
      this.curClass = null;
      this.nextClass = null;
    }

    LineBreaker.prototype.nextCodePoint = function() {
      var code, next;
      code = this.string.charCodeAt(this.pos++);
      next = this.string.charCodeAt(this.pos);
      if ((0xd800 <= code && code <= 0xdbff) && (0xdc00 <= next && next <= 0xdfff)) {
        this.pos++;
        return ((code - 0xd800) * 0x400) + (next - 0xdc00) + 0x10000;
      }
      return code;
    };

    mapClass = function(c) {
      switch (c) {
        case AI:
          return AL;
        case SA:
        case SG:
        case XX:
          return AL;
        case CJ:
          return NS;
        default:
          return c;
      }
    };

    mapFirst = function(c) {
      switch (c) {
        case LF:
        case NL:
          return BK;
        case CB:
          return BA;
        case SP:
          return WJ;
        default:
          return c;
      }
    };

    LineBreaker.prototype.nextCharClass = function(first) {
      if (first == null) {
        first = false;
      }
      return mapClass(classTrie.get(this.nextCodePoint()));
    };

    Break = (function() {
      function Break(position, required) {
        this.position = position;
        this.required = required != null ? required : false;
      }

      return Break;

    })();

    LineBreaker.prototype.nextBreak = function() {
      var cur, lastClass, shouldBreak;
      if (this.curClass == null) {
        this.curClass = mapFirst(this.nextCharClass());
      }
      while (this.pos < this.string.length) {
        this.lastPos = this.pos;
        lastClass = this.nextClass;
        this.nextClass = this.nextCharClass();
        if (this.curClass === BK || (this.curClass === CR && this.nextClass !== LF)) {
          this.curClass = mapFirst(mapClass(this.nextClass));
          return new Break(this.lastPos, true);
        }
        cur = (function() {
          switch (this.nextClass) {
            case SP:
              return this.curClass;
            case BK:
            case LF:
            case NL:
              return BK;
            case CR:
              return CR;
            case CB:
              return BA;
          }
        }).call(this);
        if (cur != null) {
          this.curClass = cur;
          if (this.nextClass === CB) {
            return new Break(this.lastPos);
          }
          continue;
        }
        shouldBreak = false;
        switch (pairTable[this.curClass][this.nextClass]) {
          case DI_BRK:
            shouldBreak = true;
            break;
          case IN_BRK:
            shouldBreak = lastClass === SP;
            break;
          case CI_BRK:
            shouldBreak = lastClass === SP;
            if (!shouldBreak) {
              continue;
            }
            break;
          case CP_BRK:
            if (lastClass !== SP) {
              continue;
            }
        }
        this.curClass = this.nextClass;
        if (shouldBreak) {
          return new Break(this.lastPos);
        }
      }
      if (this.pos >= this.string.length) {
        if (this.lastPos < this.string.length) {
          this.lastPos = this.string.length;
          return new Break(this.string.length);
        } else {
          return null;
        }
      }
    };

    return LineBreaker;

  })();

  module.exports = LineBreaker;

}).call(this);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineBreaker = __webpack_require__(21);
var GraphemeBreaker = __webpack_require__(16);

/**
 * Tell this text wrapper to use a specific measurement provider.
 * @typedef {object} MeasurementProvider - the new measurement provider.
 * @property {Function} beginMeasurementSession - this will be called before a batch of measurements are made.
 *      Optionally, this function may return an object to be provided to the endMeasurementSession function.
 * @property {Function} measureText - this will be called each time a piece of text must be measured.
 * @property {Function} endMeasurementSession - this will be called after a batch of measurements is finished.
 *      It will be passed whatever value beginMeasurementSession returned, if any.
 */

/**
 * Utility to wrap text across several lines, respecting Unicode grapheme clusters and, when possible, Unicode line
 * break opportunities.
 * Reference material:
 * - Unicode Standard Annex #14: http://unicode.org/reports/tr14/
 * - Unicode Standard Annex #39: http://unicode.org/reports/tr29/
 * - "JavaScript has a Unicode problem" by Mathias Bynens: https://mathiasbynens.be/notes/javascript-unicode
 */

var TextWrapper = function () {
    /**
     * Construct a text wrapper which will measure text using the specified measurement provider.
     * @param {MeasurementProvider} measurementProvider - a helper object to provide text measurement services.
     */
    function TextWrapper(measurementProvider) {
        _classCallCheck(this, TextWrapper);

        this._measurementProvider = measurementProvider;
        this._cache = {};
    }

    /**
     * Wrap the provided text into lines restricted to a maximum width. See Unicode Standard Annex (UAX) #14.
     * @param {number} maxWidth - the maximum allowed width of a line.
     * @param {string} text - the text to be wrapped. Will be split on whitespace.
     * @returns {Array.<string>} an array containing the wrapped lines of text.
     */


    _createClass(TextWrapper, [{
        key: 'wrapText',
        value: function wrapText(maxWidth, text) {
            // Normalize to canonical composition (see Unicode Standard Annex (UAX) #15)
            text = text.normalize();

            var cacheKey = maxWidth + '-' + text;
            if (this._cache[cacheKey]) {
                return this._cache[cacheKey];
            }

            var measurementSession = this._measurementProvider.beginMeasurementSession();

            var breaker = new LineBreaker(text);
            var lastPosition = 0;
            var nextBreak = void 0;
            var currentLine = null;
            var lines = [];

            while (nextBreak = breaker.nextBreak()) {
                var word = text.slice(lastPosition, nextBreak.position).replace(/\n+$/, '');

                var proposedLine = (currentLine || '').concat(word);
                var proposedLineWidth = this._measurementProvider.measureText(proposedLine);

                if (proposedLineWidth > maxWidth) {
                    // The next word won't fit on this line. Will it fit on a line by itself?
                    var wordWidth = this._measurementProvider.measureText(word);
                    if (wordWidth > maxWidth) {
                        // The next word can't even fit on a line by itself. Consume it one grapheme cluster at a time.
                        var lastCluster = 0;
                        var nextCluster = void 0;
                        while (lastCluster !== (nextCluster = GraphemeBreaker.nextBreak(word, lastCluster))) {
                            var cluster = word.substring(lastCluster, nextCluster);
                            proposedLine = (currentLine || '').concat(cluster);
                            proposedLineWidth = this._measurementProvider.measureText(proposedLine);
                            if (currentLine === null || proposedLineWidth <= maxWidth) {
                                // first cluster of a new line or the cluster fits
                                currentLine = proposedLine;
                            } else {
                                // no more can fit
                                lines.push(currentLine);
                                currentLine = cluster;
                            }
                            lastCluster = nextCluster;
                        }
                    } else {
                        // The next word can fit on the next line. Finish the current line and move on.
                        if (currentLine !== null) lines.push(currentLine);
                        currentLine = word;
                    }
                } else {
                    // The next word fits on this line. Just keep going.
                    currentLine = proposedLine;
                }

                // Did we find a \n or similar?
                if (nextBreak.required) {
                    if (currentLine !== null) lines.push(currentLine);
                    currentLine = null;
                }

                lastPosition = nextBreak.position;
            }

            currentLine = currentLine || '';
            if (currentLine.length > 0 || lines.length === 0) {
                lines.push(currentLine);
            }

            this._cache[cacheKey] = lines;
            this._measurementProvider.endMeasurementSession(measurementSession);
            return lines;
        }
    }]);

    return TextWrapper;
}();

module.exports = TextWrapper;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextWrapper = __webpack_require__(22);

/**
 * Measure text by using a hidden SVG attached to the DOM.
 * For use with TextWrapper.
 */

var SVGMeasurementProvider = function () {
    function SVGMeasurementProvider() {
        _classCallCheck(this, SVGMeasurementProvider);

        this._svgRoot = null;
        this._cache = {};
    }

    /**
     * Detach the hidden SVG element from the DOM and forget all references to it and its children.
     */


    _createClass(SVGMeasurementProvider, [{
        key: 'dispose',
        value: function dispose() {
            if (this._svgRoot) {
                this._svgRoot.parentElement.removeChild(this._svgRoot);
                this._svgRoot = null;
                this._svgText = null;
            }
        }

        /**
         * Called by the TextWrapper before a batch of zero or more calls to measureText().
         */

    }, {
        key: 'beginMeasurementSession',
        value: function beginMeasurementSession() {
            if (!this._svgRoot) {
                this._init();
            }
        }

        /**
         * Called by the TextWrapper after a batch of zero or more calls to measureText().
         */

    }, {
        key: 'endMeasurementSession',
        value: function endMeasurementSession() {
            this._svgText.textContent = '';
            this.dispose();
        }

        /**
         * Measure a whole string as one unit.
         * @param {string} text - the text to measure.
         * @returns {number} - the length of the string.
         */

    }, {
        key: 'measureText',
        value: function measureText(text) {
            if (!this._cache[text]) {
                this._svgText.textContent = text;
                this._cache[text] = this._svgText.getComputedTextLength();
            }
            return this._cache[text];
        }

        /**
         * Create a simple SVG containing a text node, hide it, and attach it to the DOM. The text node will be used to
         * collect text measurements. The SVG must be attached to the DOM: otherwise measurements will generally be zero.
         * @private
         */

    }, {
        key: '_init',
        value: function _init() {
            var svgNamespace = 'http://www.w3.org/2000/svg';

            var svgRoot = document.createElementNS(svgNamespace, 'svg');
            var svgGroup = document.createElementNS(svgNamespace, 'g');
            var svgText = document.createElementNS(svgNamespace, 'text');

            // Normalize text attributes to match what the svg-renderer does.
            // @TODO This code should be shared with the svg-renderer.
            svgText.setAttribute('alignment-baseline', 'text-before-edge');
            svgText.setAttribute('font-size', '14');
            svgText.setAttribute('font-family', 'Helvetica');

            // hide from the user, including screen readers
            svgRoot.setAttribute('style', 'position:absolute;visibility:hidden');

            document.body.appendChild(svgRoot);
            svgRoot.appendChild(svgGroup);
            svgGroup.appendChild(svgText);

            /**
             * The root SVG element.
             * @type {SVGSVGElement}
             * @private
             */
            this._svgRoot = svgRoot;

            /**
             * The leaf SVG element used for text measurement.
             * @type {SVGTextElement}
             * @private
             */
            this._svgText = svgText;
        }
    }]);

    return SVGMeasurementProvider;
}();

/**
 * TextWrapper specialized for SVG text.
 */


var SVGTextWrapper = function (_TextWrapper) {
    _inherits(SVGTextWrapper, _TextWrapper);

    function SVGTextWrapper() {
        _classCallCheck(this, SVGTextWrapper);

        return _possibleConstructorReturn(this, (SVGTextWrapper.__proto__ || Object.getPrototypeOf(SVGTextWrapper)).call(this, new SVGMeasurementProvider()));
    }

    return SVGTextWrapper;
}(TextWrapper);

module.exports = SVGTextWrapper;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVGTextWrapper = __webpack_require__(23);
var SvgRenderer = __webpack_require__(5).SVGRenderer;
var xmlescape = __webpack_require__(9);

var MAX_LINE_LENGTH = 170;
var MIN_WIDTH = 50;

var SVGTextBubble = function () {
    function SVGTextBubble() {
        _classCallCheck(this, SVGTextBubble);

        this.svgRenderer = new SvgRenderer();
        this.svgTextWrapper = new SVGTextWrapper();
        this._textSizeCache = {};
    }

    _createClass(SVGTextBubble, [{
        key: '_speechBubble',
        value: function _speechBubble(w, h, radius, pointsLeft) {
            var pathString = '\n            M 0 ' + radius + '\n            A ' + radius + ' ' + radius + ' 0 0 1 ' + radius + ' 0\n            L ' + (w - radius) + ' 0\n            A ' + radius + ' ' + radius + ' 0 0 1 ' + w + ' ' + radius + '\n            L ' + w + ' ' + (h - radius) + '\n            A ' + radius + ' ' + radius + ' 0 0 1 ' + (w - radius) + ' ' + h;

            if (pointsLeft) {
                pathString += '\n                L 32 ' + h + '\n                c -5 8 -15 12 -18 12\n                a 2 2 0 0 1 -2 -2\n                c 0 -2 4 -6 4 -10';
            } else {
                pathString += '\n                L ' + (w - 16) + ' ' + h + '\n                c 0 4 4 8 4 10\n                a 2 2 0 0 1 -2 2\n                c -3 0 -13 -4 -18 -12';
            }

            pathString += '\n            L ' + radius + ' ' + h + '\n            A ' + radius + ' ' + radius + ' 0 0 1 0 ' + (h - radius) + '\n            Z';

            return '\n            <g>\n                <path\n                  d="' + pathString + '"\n                  stroke="rgba(0, 0, 0, 0.15)"\n                  stroke-width="4"\n                  fill="rgba(0, 0, 0, 0.15)"\n                  stroke-line-join="round"\n              />\n              <path\n                d="' + pathString + '"\n                stroke="none"\n                fill="white" />\n            </g>';
        }
    }, {
        key: '_thinkBubble',
        value: function _thinkBubble(w, h, radius, pointsLeft) {
            var e1rx = 2.25;
            var e1ry = 2.25;
            var e2rx = 1.5;
            var e2ry = 1.5;
            var e1x = 16 + 7 + e1rx;
            var e1y = 5 + h + e1ry;
            var e2x = 16 + e2rx;
            var e2y = 8 + h + e2ry;
            var insetR = 4;
            var pInset1 = 12 + radius;
            var pInset2 = pInset1 + 2 * insetR;

            var pathString = '\n            M 0 ' + radius + '\n            A ' + radius + ' ' + radius + ' 0 0 1 ' + radius + ' 0\n            L ' + (w - radius) + ' 0\n            A ' + radius + ' ' + radius + ' 0 0 1 ' + w + ' ' + radius + '\n            L ' + w + ' ' + (h - radius) + '\n            A ' + radius + ' ' + radius + ' 0 0 1 ' + (w - radius) + ' ' + h;

            if (pointsLeft) {
                pathString += '\n                L ' + pInset2 + ' ' + h + '\n                A ' + insetR + ' ' + insetR + ' 0 0 1 ' + (pInset2 - insetR) + ' ' + (h + insetR) + '\n                A ' + insetR + ' ' + insetR + ' 0 0 1 ' + pInset1 + ' ' + h;
            } else {
                pathString += '\n                L ' + (w - pInset1) + ' ' + h + '\n                A ' + insetR + ' ' + insetR + ' 0 0 1 ' + (w - pInset1 - insetR) + ' ' + (h + insetR) + '\n                A ' + insetR + ' ' + insetR + ' 0 0 1 ' + (w - pInset2) + ' ' + h;
            }

            pathString += '\n            L ' + radius + ' ' + h + '\n            A ' + radius + ' ' + radius + ' 0 0 1 0 ' + (h - radius) + '\n            Z';

            var ellipseSvg = function ellipseSvg(cx, cy, rx, ry) {
                return '\n            <g>\n                <ellipse\n                    cx="' + cx + '" cy="' + cy + '"\n                    rx="' + rx + '" ry="' + ry + '"\n                    fill="rgba(0, 0, 0, 0.15)"\n                    stroke="rgba(0, 0, 0, 0.15)"\n                    stroke-width="4"\n                />\n                <ellipse\n                    cx="' + cx + '" cy="' + cy + '"\n                    rx="' + rx + '" ry="' + ry + '"\n                    fill="white"\n                    stroke="none"\n                />\n            </g>';
            };
            var ellipses = [];
            if (pointsLeft) {
                ellipses = [ellipseSvg(e1x, e1y, e1rx, e1ry), ellipseSvg(e2x, e2y, e2rx, e2ry)];
            } else {
                ellipses = [ellipseSvg(w - e1x, e1y, e1rx, e1ry), ellipseSvg(w - e2x, e2y, e2rx, e2ry)];
            }

            return '\n             <g>\n                <path d="' + pathString + '" stroke="rgba(0, 0, 0, 0.15)" stroke-width="4" fill="rgba(0, 0, 0, 0.15)" />\n                <path d="' + pathString + '" stroke="none" fill="white" />\n                ' + ellipses.join('\n') + '\n            </g>';
        }
    }, {
        key: '_getTextSize',
        value: function _getTextSize() {
            var svgString = this._wrapSvgFragment(this._textFragment());
            if (!this._textSizeCache[svgString]) {
                this._textSizeCache[svgString] = this.svgRenderer.measure(svgString);
            }
            return this._textSizeCache[svgString];
        }
    }, {
        key: '_wrapSvgFragment',
        value: function _wrapSvgFragment(fragment) {
            return '\n          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n              ' + fragment + '\n          </svg>\n        ';
        }
    }, {
        key: '_textFragment',
        value: function _textFragment() {
            return '<text fill="#575E75">' + xmlescape(this.lines.join('\n')) + '</text>';
        }
    }, {
        key: 'buildString',
        value: function buildString(type, text, pointsLeft) {
            this.type = type;
            this.pointsLeft = pointsLeft;
            this.lines = this.svgTextWrapper.wrapText(MAX_LINE_LENGTH, text);

            var fragment = '';

            var radius = 16;

            var _getTextSize2 = this._getTextSize(),
                x = _getTextSize2.x,
                y = _getTextSize2.y,
                width = _getTextSize2.width,
                height = _getTextSize2.height;

            var padding = 10;
            var fullWidth = Math.max(MIN_WIDTH, width) + 2 * padding;
            var fullHeight = height + 2 * padding;
            if (this.type === 'say') {
                fragment += this._speechBubble(fullWidth, fullHeight, radius, this.pointsLeft);
            } else {
                fragment += this._thinkBubble(fullWidth, fullHeight, radius, this.pointsLeft);
            }
            fragment += '<g transform="translate(' + (padding - x) + ', ' + (padding - y) + ')">' + this._textFragment() + '</g>';
            return this._wrapSvgFragment(fragment);
        }
    }]);

    return SVGTextBubble;
}();

module.exports = SVGTextBubble;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(0);

var Skin = __webpack_require__(2);
var SvgRenderer = __webpack_require__(5).SVGRenderer;

var MAX_TEXTURE_DIMENSION = 2048;

var SVGSkin = function (_Skin) {
    _inherits(SVGSkin, _Skin);

    /**
     * Create a new SVG skin.
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     * @constructor
     * @extends Skin
     */
    function SVGSkin(id, renderer) {
        _classCallCheck(this, SVGSkin);

        /** @type {RenderWebGL} */
        var _this = _possibleConstructorReturn(this, (SVGSkin.__proto__ || Object.getPrototypeOf(SVGSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {SvgRenderer} */
        _this._svgRenderer = new SvgRenderer();

        /** @type {WebGLTexture} */
        _this._texture = null;

        /** @type {number} */
        _this._textureScale = 1;

        /** @type {Number} */
        _this._maxTextureScale = 0;
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(SVGSkin, [{
        key: 'dispose',
        value: function dispose() {
            if (this._texture) {
                this._renderer.gl.deleteTexture(this._texture);
                this._texture = null;
            }
            _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @return {Array<number>} the natural size, in Scratch units, of this skin.
         */

    }, {
        key: 'setRotationCenter',


        /**
         * Set the origin, in object space, about which this Skin should rotate.
         * @param {number} x - The x coordinate of the new rotation center.
         * @param {number} y - The y coordinate of the new rotation center.
         */
        value: function setRotationCenter(x, y) {
            var viewOffset = this._svgRenderer.viewOffset;
            _get(SVGSkin.prototype.__proto__ || Object.getPrototypeOf(SVGSkin.prototype), 'setRotationCenter', this).call(this, x - viewOffset[0], y - viewOffset[1]);
        }

        /**
         * @param {Array<number>} scale - The scaling factors to be used, each in the [0,100] range.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */
        // eslint-disable-next-line no-unused-vars

    }, {
        key: 'getTexture',
        value: function getTexture(scale) {
            var _this2 = this;

            // The texture only ever gets uniform scale. Take the larger of the two axes.
            var scaleMax = scale ? Math.max(Math.abs(scale[0]), Math.abs(scale[1])) : 100;
            var requestedScale = Math.min(scaleMax / 100, this._maxTextureScale);
            var newScale = this._textureScale;
            while (newScale < this._maxTextureScale && requestedScale >= 1.5 * newScale) {
                newScale *= 2;
            }
            if (this._textureScale !== newScale) {
                this._textureScale = newScale;
                this._svgRenderer._draw(this._textureScale, function () {
                    if (_this2._textureScale === newScale) {
                        var gl = _this2._renderer.gl;
                        gl.bindTexture(gl.TEXTURE_2D, _this2._texture);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this2._svgRenderer.canvas);
                    }
                });
            }

            return this._texture;
        }

        /**
         * Set the contents of this skin to a snapshot of the provided SVG data.
         * @param {string} svgData - new SVG to use.
         * @param {Array<number>} [rotationCenter] - Optional rotation center for the SVG. If not supplied, it will be
         * calculated from the bounding box
         * @fires Skin.event:WasAltered
         */

    }, {
        key: 'setSVG',
        value: function setSVG(svgData, rotationCenter) {
            var _this3 = this;

            this._svgRenderer.fromString(svgData, 1, function () {
                var gl = _this3._renderer.gl;
                _this3._textureScale = _this3._maxTextureScale = 1;
                if (_this3._texture) {
                    gl.bindTexture(gl.TEXTURE_2D, _this3._texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this3._svgRenderer.canvas);
                    _this3._silhouette.update(_this3._svgRenderer.canvas);
                } else {
                    // TODO: mipmaps?
                    var textureOptions = {
                        auto: true,
                        wrap: gl.CLAMP_TO_EDGE,
                        src: _this3._svgRenderer.canvas
                    };

                    _this3._texture = twgl.createTexture(gl, textureOptions);
                    _this3._silhouette.update(_this3._svgRenderer.canvas);
                }

                var maxDimension = Math.max(_this3._svgRenderer.canvas.width, _this3._svgRenderer.canvas.height);
                var testScale = 2;
                for (testScale; maxDimension * testScale <= MAX_TEXTURE_DIMENSION; testScale *= 2) {
                    _this3._maxTextureScale = testScale;
                }

                if (typeof rotationCenter === 'undefined') rotationCenter = _this3.calculateRotationCenter();
                _this3.setRotationCenter.apply(_this3, rotationCenter);
                _this3.emit(Skin.Events.WasAltered);
            });
        }
    }, {
        key: 'size',
        get: function get() {
            return this._svgRenderer.size;
        }
    }]);

    return SVGSkin;
}(Skin);

module.exports = SVGSkin;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(0);

var RenderConstants = __webpack_require__(1);
var Skin = __webpack_require__(2);

/**
 * Attributes to use when drawing with the pen
 * @typedef {object} PenSkin#PenAttributes
 * @property {number} [diameter] - The size (diameter) of the pen.
 * @property {Array<number>} [color4f] - The pen color as an array of [r,g,b,a], each component in the range [0,1].
 */

/**
 * The pen attributes to use when unspecified.
 * @type {PenSkin#PenAttributes}
 * @memberof PenSkin
 * @private
 * @const
 */
var DefaultPenAttributes = {
    color4f: [0, 0, 1, 1],
    diameter: 1
};

var PenSkin = function (_Skin) {
    _inherits(PenSkin, _Skin);

    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends Skin
     * @listens RenderWebGL#event:NativeSizeChanged
     */
    function PenSkin(id, renderer) {
        _classCallCheck(this, PenSkin);

        /**
         * @private
         * @type {RenderWebGL}
         */
        var _this = _possibleConstructorReturn(this, (PenSkin.__proto__ || Object.getPrototypeOf(PenSkin)).call(this, id));

        _this._renderer = renderer;

        /** @type {HTMLCanvasElement} */
        _this._canvas = document.createElement('canvas');

        /** @type {boolean} */
        _this._canvasDirty = false;

        /** @type {WebGLTexture} */
        _this._texture = null;

        /** @type {boolean} */
        _this._silhouetteDirty = false;

        _this.onNativeSizeChanged = _this.onNativeSizeChanged.bind(_this);
        _this._renderer.on(RenderConstants.Events.NativeSizeChanged, _this.onNativeSizeChanged);

        _this._setCanvasSize(renderer.getNativeSize());
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(PenSkin, [{
        key: 'dispose',
        value: function dispose() {
            this._renderer.removeListener(RenderConstants.Events.NativeSizeChanged, this.onNativeSizeChanged);
            this._renderer.gl.deleteTexture(this._texture);
            this._texture = null;
            _get(PenSkin.prototype.__proto__ || Object.getPrototypeOf(PenSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @returns {boolean} true for a raster-style skin (like a BitmapSkin), false for vector-style (like SVGSkin).
         */

    }, {
        key: 'getTexture',


        /**
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
         * @param {int} pixelsWide - The width that the skin will be rendered at, in GPU pixels.
         * @param {int} pixelsTall - The height that the skin will be rendered at, in GPU pixels.
         */
        // eslint-disable-next-line no-unused-vars
        value: function getTexture(pixelsWide, pixelsTall) {
            if (this._canvasDirty) {
                this._canvasDirty = false;

                var gl = this._renderer.gl;
                gl.bindTexture(gl.TEXTURE_2D, this._texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._canvas);
            }

            return this._texture;
        }

        /**
         * Clear the pen layer.
         */

    }, {
        key: 'clear',
        value: function clear() {
            var ctx = this._canvas.getContext('2d');
            ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._canvasDirty = true;
            this._silhouetteDirty = true;
        }

        /**
         * Draw a point on the pen layer.
         * @param {PenAttributes} penAttributes - how the point should be drawn.
         * @param {number} x - the X coordinate of the point to draw.
         * @param {number} y - the Y coordinate of the point to draw.
         */

    }, {
        key: 'drawPoint',
        value: function drawPoint(penAttributes, x, y) {
            // Canvas renders a zero-length line as two end-caps back-to-back, which is what we want.
            this.drawLine(penAttributes, x, y, x, y);
        }

        /**
         * Draw a line on the pen layer.
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: 'drawLine',
        value: function drawLine(penAttributes, x0, y0, x1, y1) {
            var ctx = this._canvas.getContext('2d');
            this._setAttributes(ctx, penAttributes);
            ctx.beginPath();
            ctx.moveTo(this._rotationCenter[0] + x0, this._rotationCenter[1] - y0);
            ctx.lineTo(this._rotationCenter[0] + x1, this._rotationCenter[1] - y1);
            ctx.stroke();
            this._canvasDirty = true;
            this._silhouetteDirty = true;
        }

        /**
         * Stamp an image onto the pen layer.
         * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} stampElement - the element to use as the stamp.
         * @param {number} x - the X coordinate of the stamp to draw.
         * @param {number} y - the Y coordinate of the stamp to draw.
         */

    }, {
        key: 'drawStamp',
        value: function drawStamp(stampElement, x, y) {
            var ctx = this._canvas.getContext('2d');
            ctx.drawImage(stampElement, this._rotationCenter[0] + x, this._rotationCenter[1] - y);
            this._canvasDirty = true;
            this._silhouetteDirty = true;
        }

        /**
         * React to a change in the renderer's native size.
         * @param {object} event - The change event.
         */

    }, {
        key: 'onNativeSizeChanged',
        value: function onNativeSizeChanged(event) {
            this._setCanvasSize(event.newSize);
        }

        /**
         * Set the size of the pen canvas.
         * @param {Array<int>} canvasSize - the new width and height for the canvas.
         * @private
         */

    }, {
        key: '_setCanvasSize',
        value: function _setCanvasSize(canvasSize) {
            var _canvasSize = _slicedToArray(canvasSize, 2),
                width = _canvasSize[0],
                height = _canvasSize[1];

            var gl = this._renderer.gl;
            this._canvas.width = width;
            this._canvas.height = height;
            this._rotationCenter[0] = width / 2;
            this._rotationCenter[1] = height / 2;
            this._texture = twgl.createTexture(gl, {
                auto: true,
                mag: gl.NEAREST,
                min: gl.NEAREST,
                wrap: gl.CLAMP_TO_EDGE,
                src: this._canvas
            });
            this._canvasDirty = true;
            this._silhouetteDirty = true;
        }

        /**
         * Set context state to match provided pen attributes.
         * @param {CanvasRenderingContext2D} context - the canvas rendering context to be modified.
         * @param {PenAttributes} penAttributes - the pen attributes to be used.
         * @private
         */

    }, {
        key: '_setAttributes',
        value: function _setAttributes(context, penAttributes) {
            penAttributes = penAttributes || DefaultPenAttributes;
            var color4f = penAttributes.color4f || DefaultPenAttributes.color4f;
            var diameter = penAttributes.diameter || DefaultPenAttributes.diameter;

            var r = Math.round(color4f[0] * 255);
            var g = Math.round(color4f[1] * 255);
            var b = Math.round(color4f[2] * 255);
            var a = color4f[3]; // Alpha is 0 to 1 (not 0 to 255 like r,g,b)

            context.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
            context.lineCap = 'round';
            context.lineWidth = diameter;
        }

        /**
         * If there have been pen operations that have dirtied the canvas, update
         * now before someone wants to use our silhouette.
         */

    }, {
        key: 'updateSilhouette',
        value: function updateSilhouette() {
            if (this._silhouetteDirty) {
                if (this._canvasDirty) {
                    this.getTexture();
                }
                this._silhouette.update(this._canvas);
            }
        }
    }, {
        key: 'isRaster',
        get: function get() {
            return true;
        }

        /**
         * @return {Array<number>} the "native" size, in texels, of this skin. [width, height]
         */

    }, {
        key: 'size',
        get: function get() {
            return [this._canvas.width, this._canvas.height];
        }
    }]);

    return PenSkin;
}(Skin);

module.exports = PenSkin;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform float u_fudge;\n\n#ifdef DRAW_MODE_silhouette\nuniform vec4 u_silhouetteColor;\n#else // DRAW_MODE_silhouette\n# ifdef ENABLE_color\nuniform float u_color;\n# endif // ENABLE_color\n# ifdef ENABLE_brightness\nuniform float u_brightness;\n# endif // ENABLE_brightness\n#endif // DRAW_MODE_silhouette\n\n#ifdef DRAW_MODE_colorMask\nuniform vec3 u_colorMask;\nuniform float u_colorMaskTolerance;\n#endif // DRAW_MODE_colorMask\n\n#ifdef ENABLE_fisheye\nuniform float u_fisheye;\n#endif // ENABLE_fisheye\n#ifdef ENABLE_whirl\nuniform float u_whirl;\n#endif // ENABLE_whirl\n#ifdef ENABLE_pixelate\nuniform float u_pixelate;\nuniform vec2 u_skinSize;\n#endif // ENABLE_pixelate\n#ifdef ENABLE_mosaic\nuniform float u_mosaic;\n#endif // ENABLE_mosaic\n#ifdef ENABLE_ghost\nuniform float u_ghost;\n#endif // ENABLE_ghost\n\nuniform sampler2D u_skin;\n\nvarying vec2 v_texCoord;\n\n#if !defined(DRAW_MODE_silhouette) && (defined(ENABLE_color) || defined(ENABLE_brightness))\n// Branchless color conversions based on code from:\n// http://www.chilliant.com/rgb2hsv.html by Ian Taylor\n// Based in part on work by Sam Hocevar and Emil Persson\n// See also: https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation\n\n// Smaller values can cause problems with \"color\" and \"brightness\" effects on some mobile devices\nconst float epsilon = 1e-3;\n\n// Convert an RGB color to Hue, Saturation, and Lightness.\n// All components of input and output are expected to be in the [0,1] range.\nvec3 convertRGB2HSL(vec3 rgb)\n{\n\t// Hue calculation has 3 cases, depending on which RGB component is largest, and one of those cases involves a \"mod\"\n\t// operation. In order to avoid that \"mod\" we split the M==R case in two: one for G<B and one for B>G. The B>G case\n\t// will be calculated in the negative and fed through abs() in the hue calculation at the end.\n\t// See also: https://en.wikipedia.org/wiki/HSL_and_HSV#Hue_and_chroma\n\tconst vec4 hueOffsets = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n\n\t// temp1.xy = sort B & G (largest first)\n\t// temp1.z = the hue offset we'll use if it turns out that R is the largest component (M==R)\n\t// temp1.w = the hue offset we'll use if it turns out that R is not the largest component (M==G or M==B)\n\tvec4 temp1 = rgb.b > rgb.g ? vec4(rgb.bg, hueOffsets.wz) : vec4(rgb.gb, hueOffsets.xy);\n\n\t// temp2.x = the largest component of RGB (\"M\" / \"Max\")\n\t// temp2.yw = the smaller components of RGB, ordered for the hue calculation (not necessarily sorted by magnitude!)\n\t// temp2.z = the hue offset we'll use in the hue calculation\n\tvec4 temp2 = rgb.r > temp1.x ? vec4(rgb.r, temp1.yzx) : vec4(temp1.xyw, rgb.r);\n\n\t// m = the smallest component of RGB (\"min\")\n\tfloat m = min(temp2.y, temp2.w);\n\n\t// Chroma = M - m\n\tfloat C = temp2.x - m;\n\n\t// Lightness = 1/2 * (M + m)\n\tfloat L = 0.5 * (temp2.x + m);\n\n\treturn vec3(\n\t\tabs(temp2.z + (temp2.w - temp2.y) / (6.0 * C + epsilon)), // Hue\n\t\tC / (1.0 - abs(2.0 * L - 1.0) + epsilon), // Saturation\n\t\tL); // Lightness\n}\n\nvec3 convertHue2RGB(float hue)\n{\n\tfloat r = abs(hue * 6.0 - 3.0) - 1.0;\n\tfloat g = 2.0 - abs(hue * 6.0 - 2.0);\n\tfloat b = 2.0 - abs(hue * 6.0 - 4.0);\n\treturn clamp(vec3(r, g, b), 0.0, 1.0);\n}\n\nvec3 convertHSL2RGB(vec3 hsl)\n{\n\tvec3 rgb = convertHue2RGB(hsl.x);\n\tfloat c = (1.0 - abs(2.0 * hsl.z - 1.0)) * hsl.y;\n\treturn (rgb - 0.5) * c + hsl.z;\n}\n#endif // !defined(DRAW_MODE_silhouette) && (defined(ENABLE_color) || defined(ENABLE_brightness))\n\nconst vec2 kCenter = vec2(0.5, 0.5);\n\nvoid main()\n{\n\tvec2 texcoord0 = v_texCoord;\n\n\t#ifdef ENABLE_mosaic\n\ttexcoord0 = fract(u_mosaic * texcoord0);\n\t#endif // ENABLE_mosaic\n\n\t#ifdef ENABLE_pixelate\n\t{\n\t\t// TODO: clean up \"pixel\" edges\n\t\tvec2 pixelTexelSize = u_skinSize / u_pixelate;\n\t\ttexcoord0 = (floor(texcoord0 * pixelTexelSize) + kCenter) / pixelTexelSize;\n\t}\n\t#endif // ENABLE_pixelate\n\n\t#ifdef ENABLE_whirl\n\t{\n\t\tconst float kRadius = 0.5;\n\t\tvec2 offset = texcoord0 - kCenter;\n\t\tfloat offsetMagnitude = length(offset);\n\t\tfloat whirlFactor = max(1.0 - (offsetMagnitude / kRadius), 0.0);\n\t\tfloat whirlActual = u_whirl * whirlFactor * whirlFactor;\n\t\tfloat sinWhirl = sin(whirlActual);\n\t\tfloat cosWhirl = cos(whirlActual);\n\t\tmat2 rotationMatrix = mat2(\n\t\t\tcosWhirl, -sinWhirl,\n\t\t\tsinWhirl, cosWhirl\n\t\t);\n\n\t\ttexcoord0 = rotationMatrix * offset + kCenter;\n\t}\n\t#endif // ENABLE_whirl\n\n\t#ifdef ENABLE_fisheye\n\t{\n\t\tvec2 vec = (texcoord0 - kCenter) / kCenter;\n\t\tfloat vecLength = length(vec);\n\t\tfloat r = pow(min(vecLength, 1.0), u_fisheye) * max(1.0, vecLength);\n\t\tvec2 unit = vec / vecLength;\n\n\t\ttexcoord0 = kCenter + r * unit * kCenter;\n\t}\n\t#endif // ENABLE_fisheye\n\n\tgl_FragColor = texture2D(u_skin, texcoord0);\n\n\n\tif (gl_FragColor.a == 0.0)\n\t{\n\t\tdiscard;\n\t}\n\n    #ifdef ENABLE_ghost\n    gl_FragColor.a *= u_ghost;\n    #endif // ENABLE_ghost\n\n\t#ifdef DRAW_MODE_silhouette\n\t// switch to u_silhouetteColor only AFTER the alpha test\n\tgl_FragColor = u_silhouetteColor;\n\t#else // DRAW_MODE_silhouette\n\n\t#if defined(ENABLE_color) || defined(ENABLE_brightness)\n\t{\n\t\tvec3 hsl = convertRGB2HSL(gl_FragColor.xyz);\n\n\t\t#ifdef ENABLE_color\n\t\t{\n\t\t\t// this code forces grayscale values to be slightly saturated\n\t\t\t// so that some slight change of hue will be visible\n\t\t\tconst float minLightness = 0.11 / 2.0;\n\t\t\tconst float minSaturation = 0.09;\n\t\t\tif (hsl.z < minLightness) hsl = vec3(0.0, 1.0, minLightness);\n\t\t\telse if (hsl.y < minSaturation) hsl = vec3(0.0, minSaturation, hsl.z);\n\n\t\t\thsl.x = mod(hsl.x + u_color, 1.0);\n\t\t\tif (hsl.x < 0.0) hsl.x += 1.0;\n\t\t}\n\t\t#endif // ENABLE_color\n\n\t\t#ifdef ENABLE_brightness\n\t\thsl.z = clamp(hsl.z + u_brightness, 0.0, 1.0);\n\t\t#endif // ENABLE_brightness\n\n\t\tgl_FragColor.rgb = convertHSL2RGB(hsl);\n\t}\n\t#endif // defined(ENABLE_color) || defined(ENABLE_brightness)\n\n\t#ifdef DRAW_MODE_colorMask\n\tvec3 maskDistance = abs(gl_FragColor.rgb - u_colorMask);\n\tvec3 colorMaskTolerance = vec3(u_colorMaskTolerance, u_colorMaskTolerance, u_colorMaskTolerance);\n\tif (any(greaterThan(maskDistance, colorMaskTolerance)))\n\t{\n\t\tdiscard;\n\t}\n\t#endif // DRAW_MODE_colorMask\n\n\t// WebGL defaults to premultiplied alpha\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n\t#endif // DRAW_MODE_silhouette\n}\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "uniform mat4 u_projectionMatrix;\nuniform mat4 u_modelMatrix;\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n    gl_Position = u_projectionMatrix * u_modelMatrix * vec4(a_position, 0, 1);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(0);

var Rectangle = __webpack_require__(7);
var RenderConstants = __webpack_require__(1);
var ShaderManager = __webpack_require__(3);
var Skin = __webpack_require__(2);
var EffectTransform = __webpack_require__(6);

var __isTouchingPosition = twgl.v3.create();

var Drawable = function () {
    /**
     * An object which can be drawn by the renderer.
     * @todo double-buffer all rendering state (position, skin, effects, etc.)
     * @param {!int} id - This Drawable's unique ID.
     * @constructor
     */
    function Drawable(id) {
        _classCallCheck(this, Drawable);

        /** @type {!int} */
        this._id = id;

        /**
         * The uniforms to be used by the vertex and pixel shaders.
         * Some of these are used by other parts of the renderer as well.
         * @type {Object.<string,*>}
         * @private
         */
        this._uniforms = {
            /**
             * The model matrix, to concat with projection at draw time.
             * @type {module:twgl/m4.Mat4}
             */
            u_modelMatrix: twgl.m4.identity(),

            /**
             * The color to use in the silhouette draw mode.
             * @type {Array<number>}
             */
            u_silhouetteColor: Drawable.color4fFromID(this._id)
        };

        // Effect values are uniforms too
        var numEffects = ShaderManager.EFFECTS.length;
        for (var index = 0; index < numEffects; ++index) {
            var effectName = ShaderManager.EFFECTS[index];
            var converter = ShaderManager.EFFECT_INFO[effectName].converter;
            this._uniforms['u_' + effectName] = converter(0);
        }

        this._position = twgl.v3.create(0, 0);
        this._scale = twgl.v3.create(100, 100);
        this._direction = 90;
        this._transformDirty = true;
        this._rotationMatrix = twgl.m4.identity();
        this._rotationTransformDirty = true;
        this._rotationAdjusted = twgl.v3.create();
        this._rotationCenterDirty = true;
        this._skinScale = twgl.v3.create(0, 0, 0);
        this._skinScaleDirty = true;
        this._inverseMatrix = twgl.m4.identity();
        this._inverseTransformDirty = true;
        this._visible = true;
        this._effectBits = 0;

        /** @todo move convex hull functionality, maybe bounds functionality overall, to Skin classes */
        this._convexHullPoints = null;
        this._convexHullDirty = true;

        this._skinWasAltered = this._skinWasAltered.bind(this);
    }

    /**
     * Dispose of this Drawable. Do not use it after calling this method.
     */


    _createClass(Drawable, [{
        key: 'dispose',
        value: function dispose() {
            // Use the setter: disconnect events
            this.skin = null;
        }

        /**
         * Mark this Drawable's transform as dirty.
         * It will be recalculated next time it's needed.
         */

    }, {
        key: 'setTransformDirty',
        value: function setTransformDirty() {
            this._transformDirty = true;
            this._inverseTransformDirty = true;
        }

        /**
         * @returns {number} The ID for this Drawable.
         */

    }, {
        key: 'getEnabledEffects',


        /**
         * @returns {int} A bitmask identifying which effects are currently in use.
         */
        value: function getEnabledEffects() {
            return this._effectBits;
        }

        /**
         * @returns {object.<string, *>} the shader uniforms to be used when rendering this Drawable.
         */

    }, {
        key: 'getUniforms',
        value: function getUniforms() {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            return this._uniforms;
        }

        /**
         * @returns {boolean} whether this Drawable is visible.
         */

    }, {
        key: 'getVisible',
        value: function getVisible() {
            return this._visible;
        }

        /**
         * Update the position, direction, scale, or effect properties of this Drawable.
         * @param {object.<string,*>} properties The new property values to set.
         */

    }, {
        key: 'updateProperties',
        value: function updateProperties(properties) {
            var dirty = false;
            if ('position' in properties && (this._position[0] !== properties.position[0] || this._position[1] !== properties.position[1])) {
                this._position[0] = properties.position[0];
                this._position[1] = properties.position[1];
                dirty = true;
            }
            if ('direction' in properties && this._direction !== properties.direction) {
                this._direction = properties.direction;
                this._rotationTransformDirty = true;
                dirty = true;
            }
            if ('scale' in properties && (this._scale[0] !== properties.scale[0] || this._scale[1] !== properties.scale[1])) {
                this._scale[0] = properties.scale[0];
                this._scale[1] = properties.scale[1];
                this._rotationCenterDirty = true;
                this._skinScaleDirty = true;
                dirty = true;
            }
            if ('visible' in properties) {
                this._visible = properties.visible;
                this.setConvexHullDirty();
            }
            if (dirty) {
                this.setTransformDirty();
            }
            var numEffects = ShaderManager.EFFECTS.length;
            for (var index = 0; index < numEffects; ++index) {
                var effectName = ShaderManager.EFFECTS[index];
                if (effectName in properties) {
                    var rawValue = properties[effectName];
                    var effectInfo = ShaderManager.EFFECT_INFO[effectName];
                    if (rawValue) {
                        this._effectBits |= effectInfo.mask;
                    } else {
                        this._effectBits &= ~effectInfo.mask;
                    }
                    var converter = effectInfo.converter;
                    this._uniforms['u_' + effectName] = converter(rawValue);
                    if (effectInfo.shapeChanges) {
                        this.setConvexHullDirty();
                    }
                }
            }
        }

        /**
         * Calculate the transform to use when rendering this Drawable.
         * @private
         */

    }, {
        key: '_calculateTransform',
        value: function _calculateTransform() {
            if (this._rotationTransformDirty) {
                var rotation = (270 - this._direction) * Math.PI / 180;

                // Calling rotationZ sets the destination matrix to a rotation
                // around the Z axis setting matrix components 0, 1, 4 and 5 with
                // cosine and sine values of the rotation.
                // twgl.m4.rotationZ(rotation, this._rotationMatrix);

                // twgl assumes the last value set to the matrix was anything.
                // Drawable knows, it was another rotationZ matrix, so we can skip
                // assigning the values that will never change.
                var c = Math.cos(rotation);
                var s = Math.sin(rotation);
                this._rotationMatrix[0] = c;
                this._rotationMatrix[1] = s;
                // this._rotationMatrix[2] = 0;
                // this._rotationMatrix[3] = 0;
                this._rotationMatrix[4] = -s;
                this._rotationMatrix[5] = c;
                // this._rotationMatrix[6] = 0;
                // this._rotationMatrix[7] = 0;
                // this._rotationMatrix[8] = 0;
                // this._rotationMatrix[9] = 0;
                // this._rotationMatrix[10] = 1;
                // this._rotationMatrix[11] = 0;
                // this._rotationMatrix[12] = 0;
                // this._rotationMatrix[13] = 0;
                // this._rotationMatrix[14] = 0;
                // this._rotationMatrix[15] = 1;

                this._rotationTransformDirty = false;
            }

            // Adjust rotation center relative to the skin.
            if (this._rotationCenterDirty && this.skin !== null) {
                // twgl version of the following in function work.
                // let rotationAdjusted = twgl.v3.subtract(
                //     this.skin.rotationCenter,
                //     twgl.v3.divScalar(this.skin.size, 2, this._rotationAdjusted),
                //     this._rotationAdjusted
                // );
                // rotationAdjusted = twgl.v3.multiply(
                //     rotationAdjusted, this._scale, rotationAdjusted
                // );
                // rotationAdjusted = twgl.v3.divScalar(
                //     rotationAdjusted, 100, rotationAdjusted
                // );
                // rotationAdjusted[1] *= -1; // Y flipped to Scratch coordinate.
                // rotationAdjusted[2] = 0; // Z coordinate is 0.

                // Locally assign rotationCenter and skinSize to keep from having
                // the Skin getter properties called twice while locally assigning
                // their components for readability.
                var rotationCenter = this.skin.rotationCenter;
                var skinSize = this.skin.size;
                var center0 = rotationCenter[0];
                var center1 = rotationCenter[1];
                var skinSize0 = skinSize[0];
                var skinSize1 = skinSize[1];
                var _scale = this._scale[0];
                var _scale2 = this._scale[1];

                var rotationAdjusted = this._rotationAdjusted;
                rotationAdjusted[0] = (center0 - skinSize0 / 2) * _scale / 100;
                rotationAdjusted[1] = (center1 - skinSize1 / 2) * _scale2 / 100 * -1;
                // rotationAdjusted[2] = 0;

                this._rotationCenterDirty = false;
            }

            if (this._skinScaleDirty && this.skin !== null) {
                // twgl version of the following in function work.
                // const scaledSize = twgl.v3.divScalar(
                //     twgl.v3.multiply(this.skin.size, this._scale),
                //     100
                // );
                // // was NaN because the vectors have only 2 components.
                // scaledSize[2] = 0;

                // Locally assign skinSize to keep from having the Skin getter
                // properties called twice.
                var _skinSize = this.skin.size;
                var scaledSize = this._skinScale;
                scaledSize[0] = _skinSize[0] * this._scale[0] / 100;
                scaledSize[1] = _skinSize[1] * this._scale[1] / 100;
                // scaledSize[2] = 0;

                this._skinScaleDirty = false;
            }

            var modelMatrix = this._uniforms.u_modelMatrix;

            // twgl version of the following in function work.
            // twgl.m4.identity(modelMatrix);
            // twgl.m4.translate(modelMatrix, this._position, modelMatrix);
            // twgl.m4.multiply(modelMatrix, this._rotationMatrix, modelMatrix);
            // twgl.m4.translate(modelMatrix, this._rotationAdjusted, modelMatrix);
            // twgl.m4.scale(modelMatrix, scaledSize, modelMatrix);

            // Drawable configures a 3D matrix for drawing in WebGL, but most values
            // will never be set because the inputs are on the X and Y position axis
            // and the Z rotation axis. Drawable can bring the work inside
            // _calculateTransform and greatly reduce the ammount of math and array
            // assignments needed.

            var scale0 = this._skinScale[0];
            var scale1 = this._skinScale[1];
            var rotation00 = this._rotationMatrix[0];
            var rotation01 = this._rotationMatrix[1];
            var rotation10 = this._rotationMatrix[4];
            var rotation11 = this._rotationMatrix[5];
            var adjusted0 = this._rotationAdjusted[0];
            var adjusted1 = this._rotationAdjusted[1];
            var position0 = this._position[0];
            var position1 = this._position[1];

            // Commented assignments show what the values are when the matrix was
            // instantiated. Those values will never change so they do not need to
            // be reassigned.
            modelMatrix[0] = scale0 * rotation00;
            modelMatrix[1] = scale0 * rotation01;
            // modelMatrix[2] = 0;
            // modelMatrix[3] = 0;
            modelMatrix[4] = scale1 * rotation10;
            modelMatrix[5] = scale1 * rotation11;
            // modelMatrix[6] = 0;
            // modelMatrix[7] = 0;
            // modelMatrix[8] = 0;
            // modelMatrix[9] = 0;
            // modelMatrix[10] = 1;
            // modelMatrix[11] = 0;
            modelMatrix[12] = rotation00 * adjusted0 + rotation10 * adjusted1 + position0;
            modelMatrix[13] = rotation01 * adjusted0 + rotation11 * adjusted1 + position1;
            // modelMatrix[14] = 0;
            // modelMatrix[15] = 1;

            this._transformDirty = false;
        }

        /**
         * Whether the Drawable needs convex hull points provided by the renderer.
         * @return {boolean} True when no convex hull known, or it's dirty.
         */

    }, {
        key: 'needsConvexHullPoints',
        value: function needsConvexHullPoints() {
            return !this._convexHullPoints || this._convexHullDirty || this._convexHullPoints.length === 0;
        }

        /**
         * Set the convex hull to be dirty.
         * Do this whenever the Drawable's shape has possibly changed.
         */

    }, {
        key: 'setConvexHullDirty',
        value: function setConvexHullDirty() {
            this._convexHullDirty = true;
        }

        /**
         * Set the convex hull points for the Drawable.
         * @param {Array<Array<number>>} points Convex hull points, as [[x, y], ...]
         */

    }, {
        key: 'setConvexHullPoints',
        value: function setConvexHullPoints(points) {
            this._convexHullPoints = points;
            this._convexHullDirty = false;
        }

        /**
         * Check if the world position touches the skin.
         * @param {twgl.v3} vec World coordinate vector.
         * @return {boolean} True if the world position touches the skin.
         */

    }, {
        key: 'isTouching',
        value: function isTouching(vec) {
            if (!(this.skin && this._visible)) {
                return false;
            }

            if (this._transformDirty) {
                this._calculateTransform();
            }

            // Get the inverse of the model matrix or update it.
            var inverse = this._inverseMatrix;
            if (this._inverseTransformDirty) {
                var model = twgl.m4.copy(this._uniforms.u_modelMatrix, inverse);
                // The normal matrix uses a z scaling of 0 causing model[10] to be
                // 0. Getting a 4x4 inverse is impossible without a scaling in x, y,
                // and z.
                model[10] = 1;
                twgl.m4.inverse(model, model);
                this._inverseTransformDirty = false;
            }

            // Transfrom from world coordinates to Drawable coordinates.
            var localPosition = twgl.m4.transformPoint(inverse, vec, __isTouchingPosition);

            // Transform into texture coordinates. 0, 0 is the bottom left. 1, 1 is
            // the top right.
            localPosition[0] += 0.5;
            localPosition[1] += 0.5;
            // The RenderWebGL quad flips the texture's X axis. So rendered bottom
            // left is 1, 0 and the top right is 0, 1. Flip the X axis so
            // localPosition matches that transformation.
            localPosition[0] = 1 - localPosition[0];

            // Apply texture effect transform.
            EffectTransform.transformPoint(this, localPosition, localPosition);

            if (this.useNearest) {
                return this.skin.isTouchingNearest(localPosition);
            }
            return this.skin.isTouchingLinear(localPosition);
        }

        /**
         * Should the drawable use NEAREST NEIGHBOR or LINEAR INTERPOLATION mode
         */

    }, {
        key: 'getBounds',


        /**
         * Get the precise bounds for a Drawable.
         * This function applies the transform matrix to the known convex hull,
         * and then finds the minimum box along the axes.
         * Before calling this, ensure the renderer has updated convex hull points.
         * @return {!Rectangle} Bounds for a tight box around the Drawable.
         */
        value: function getBounds() {
            if (this.needsConvexHullPoints()) {
                throw new Error('Needs updated convex hull points before bounds calculation.');
            }
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var transformedHullPoints = this._getTransformedHullPoints();
            // Search through transformed points to generate box on axes.
            var bounds = new Rectangle();
            bounds.initFromPointsAABB(transformedHullPoints);
            return bounds;
        }
        /**
         * Get the precise bounds for the upper 8px slice of the Drawable.
         * Used for calculating where to position a text bubble.
         * Before calling this, ensure the renderer has updated convex hull points.
         * @return {!Rectangle} Bounds for a tight box around a slice of the Drawable.
         */

    }, {
        key: 'getBoundsForBubble',
        value: function getBoundsForBubble() {
            if (this.needsConvexHullPoints()) {
                throw new Error('Needs updated convex hull points before bubble bounds calculation.');
            }
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var slice = 8; // px, how tall the top slice to measure should be.
            var transformedHullPoints = this._getTransformedHullPoints();
            var maxY = Math.max.apply(null, transformedHullPoints.map(function (p) {
                return p[1];
            }));
            var filteredHullPoints = transformedHullPoints.filter(function (p) {
                return p[1] > maxY - slice;
            });
            // Search through filtered points to generate box on axes.
            var bounds = new Rectangle();
            bounds.initFromPointsAABB(filteredHullPoints);
            return bounds;
        }

        /**
         * Get the rough axis-aligned bounding box for the Drawable.
         * Calculated by transforming the skin's bounds.
         * Note that this is less precise than the box returned by `getBounds`,
         * which is tightly snapped to account for a Drawable's transparent regions.
         * `getAABB` returns a much less accurate bounding box, but will be much
         * faster to calculate so may be desired for quick checks/optimizations.
         * @return {!Rectangle} Rough axis-aligned bounding box for Drawable.
         */

    }, {
        key: 'getAABB',
        value: function getAABB() {
            if (this._transformDirty) {
                this._calculateTransform();
            }
            var tm = this._uniforms.u_modelMatrix;
            var bounds = new Rectangle();
            bounds.initFromPointsAABB([twgl.m4.transformPoint(tm, [-0.5, -0.5, 0]), twgl.m4.transformPoint(tm, [0.5, -0.5, 0]), twgl.m4.transformPoint(tm, [-0.5, 0.5, 0]), twgl.m4.transformPoint(tm, [0.5, 0.5, 0])]);
            return bounds;
        }

        /**
         * Return the best Drawable bounds possible without performing graphics queries.
         * I.e., returns the tight bounding box when the convex hull points are already
         * known, but otherwise return the rough AABB of the Drawable.
         * @return {!Rectangle} Bounds for the Drawable.
         */

    }, {
        key: 'getFastBounds',
        value: function getFastBounds() {
            if (!this.needsConvexHullPoints()) {
                return this.getBounds();
            }
            return this.getAABB();
        }

        /**
         * Transform all the convex hull points by the current Drawable's
         * transform. This allows us to skip recalculating the convex hull
         * for many Drawable updates, including translation, rotation, scaling.
         * @return {!Array.<!Array.number>} Array of glPoints which are Array<x, y>
         * @private
         */

    }, {
        key: '_getTransformedHullPoints',
        value: function _getTransformedHullPoints() {
            var projection = twgl.m4.ortho(-1, 1, -1, 1, -1, 1);
            var skinSize = this.skin.size;
            var tm = twgl.m4.multiply(this._uniforms.u_modelMatrix, projection);
            var transformedHullPoints = [];
            for (var i = 0; i < this._convexHullPoints.length; i++) {
                var point = this._convexHullPoints[i];
                var glPoint = twgl.v3.create(0.5 + -point[0] / skinSize[0], point[1] / skinSize[1] - 0.5, 0);
                twgl.m4.transformPoint(tm, glPoint, glPoint);
                transformedHullPoints.push(glPoint);
            }
            return transformedHullPoints;
        }

        /**
         * Respond to an internal change in the current Skin.
         * @private
         */

    }, {
        key: '_skinWasAltered',
        value: function _skinWasAltered() {
            this._rotationCenterDirty = true;
            this._skinScaleDirty = true;
            this.setConvexHullDirty();
            this.setTransformDirty();
        }

        /**
         * Calculate a color to represent the given ID number. At least one component of
         * the resulting color will be non-zero if the ID is not RenderConstants.ID_NONE.
         * @param {int} id The ID to convert.
         * @returns {Array<number>} An array of [r,g,b,a], each component in the range [0,1].
         */

    }, {
        key: 'id',
        get: function get() {
            return this._id;
        }

        /**
         * @returns {Skin} the current skin for this Drawable.
         */

    }, {
        key: 'skin',
        get: function get() {
            return this._skin;
        }

        /**
         * @param {Skin} newSkin - A new Skin for this Drawable.
         */
        ,
        set: function set(newSkin) {
            if (this._skin !== newSkin) {
                if (this._skin) {
                    this._skin.removeListener(Skin.Events.WasAltered, this._skinWasAltered);
                }
                this._skin = newSkin;
                if (this._skin) {
                    this._skin.addListener(Skin.Events.WasAltered, this._skinWasAltered);
                }
                this._skinWasAltered();
            }
        }

        /**
         * @returns {Array<number>} the current scaling percentages applied to this Drawable. [100,100] is normal size.
         */

    }, {
        key: 'scale',
        get: function get() {
            return [this._scale[0], this._scale[1]];
        }
    }, {
        key: 'useNearest',
        get: function get() {
            // We can't use nearest neighbor unless we are a multiple of 90 rotation
            if (this._direction % 90 !== 0) {
                return false;
            }

            // Raster skins (bitmaps) should always prefer nearest neighbor
            if (this.skin.isRaster) {
                return true;
            }

            // If the scale of the skin is very close to 100 (0.99999 variance is okay I guess)
            if (Math.abs(this.scale[0]) > 99 && Math.abs(this.scale[0]) < 101 && Math.abs(this.scale[1]) > 99 && Math.abs(this.scale[1]) < 101) {
                return true;
            }
            return false;
        }
    }], [{
        key: 'color4fFromID',
        value: function color4fFromID(id) {
            id -= RenderConstants.ID_NONE;
            var r = (id >> 0 & 255) / 255.0;
            var g = (id >> 8 & 255) / 255.0;
            var b = (id >> 16 & 255) / 255.0;
            return [r, g, b, 1.0];
        }

        /**
         * Calculate the ID number represented by the given color. If all components of
         * the color are zero, the result will be RenderConstants.ID_NONE; otherwise the result
         * will be a valid ID.
         * @param {int} r The red value of the color, in the range [0,255].
         * @param {int} g The green value of the color, in the range [0,255].
         * @param {int} b The blue value of the color, in the range [0,255].
         * @returns {int} The ID represented by that color.
         */

    }, {
        key: 'color3bToID',
        value: function color3bToID(r, g, b) {
            var id = void 0;
            id = (r & 255) << 0;
            id |= (g & 255) << 8;
            id |= (b & 255) << 16;
            return id + RenderConstants.ID_NONE;
        }
    }]);

    return Drawable;
}();

module.exports = Drawable;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileoverview
 * A representation of a Skin's silhouette that can test if a point on the skin
 * renders a pixel where it is drawn.
 */

/**
 * <canvas> element used to update Silhouette data from skin bitmap data.
 * @type {CanvasElement}
 */
var __SilhouetteUpdateCanvas = void 0;

/**
 * Internal helper function (in hopes that compiler can inline).  Get a pixel
 * from silhouette data, or 0 if outside it's bounds.
 * @private
 * @param {Silhouette} silhouette - has data width and height
 * @param {number} x - x
 * @param {number} y - y
 * @return {number} Alpha value for x/y position
 */
var getPoint = function getPoint(_ref, x, y) {
    var width = _ref._width,
        height = _ref._height,
        data = _ref._data;

    // 0 if outside bouds, otherwise read from data.
    if (x >= width || y >= height || x < 0 || y < 0) {
        return 0;
    }
    return data[y * width + x];
};

var Silhouette = function () {
    function Silhouette() {
        _classCallCheck(this, Silhouette);

        /**
         * The width of the data representing the current skin data.
         * @type {number}
         */
        this._width = 0;

        /**
         * The height of the data representing the current skin date.
         * @type {number}
         */
        this._height = 0;

        /**
         * The data representing a skin's silhouette shape.
         * @type {Uint8ClampedArray}
         */
        this._data = null;
    }

    /**
     * Update this silhouette with the bitmapData for a skin.
     * @param {*} bitmapData An image, canvas or other element that the skin
     * rendering can be queried from.
     */


    _createClass(Silhouette, [{
        key: 'update',
        value: function update(bitmapData) {
            var canvas = Silhouette._updateCanvas();
            var width = this._width = canvas.width = bitmapData.width;
            var height = this._height = canvas.height = bitmapData.height;
            var ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(bitmapData, 0, 0, width, height);
            if (!(width && height)) {
                return;
            }
            var imageData = ctx.getImageData(0, 0, width, height);

            this._data = new Uint8ClampedArray(imageData.data.length / 4);

            for (var i = 0; i < imageData.data.length; i += 4) {
                this._data[i / 4] = imageData.data[i + 3];
            }
        }

        /**
         * Test if texture coordinate touches the silhouette using nearest neighbor.
         * @param {twgl.v3} vec A texture coordinate.
         * @return {boolean} If the nearest pixel has an alpha value.
         */

    }, {
        key: 'isTouchingNearest',
        value: function isTouchingNearest(vec) {
            return getPoint(this, Math.round(vec[0] * (this._width - 1)), Math.round(vec[1] * (this._height - 1))) > 0;
        }

        /**
         * Test to see if any of the 4 pixels used in the linear interpolate touch
         * the silhouette.
         * @param {twgl.v3} vec A texture coordinate.
         * @return {boolean} Any of the pixels have some alpha.
         */

    }, {
        key: 'isTouchingLinear',
        value: function isTouchingLinear(vec) {
            var x = Math.floor(vec[0] * (this._width - 1));
            var y = Math.floor(vec[1] * (this._height - 1));
            return getPoint(this, x, y) > 0 || getPoint(this, x + 1, y) > 0 || getPoint(this, x, y + 1) > 0 || getPoint(this, x + 1, y + 1) > 0;
        }

        /**
         * Get the canvas element reused by Silhouettes to update their data with.
         * @private
         * @return {CanvasElement} A canvas to draw bitmap data to.
         */

    }], [{
        key: '_updateCanvas',
        value: function _updateCanvas() {
            if (typeof __SilhouetteUpdateCanvas === 'undefined') {
                __SilhouetteUpdateCanvas = document.createElement('canvas');
            }
            return __SilhouetteUpdateCanvas;
        }
    }]);

    return Silhouette;
}();

module.exports = Silhouette;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var twgl = __webpack_require__(0);

var Skin = __webpack_require__(2);

var BitmapSkin = function (_Skin) {
    _inherits(BitmapSkin, _Skin);

    /**
     * Create a new Bitmap Skin.
     * @extends Skin
     * @param {!int} id - The ID for this Skin.
     * @param {!RenderWebGL} renderer - The renderer which will use this skin.
     */
    function BitmapSkin(id, renderer) {
        _classCallCheck(this, BitmapSkin);

        /** @type {!int} */
        var _this = _possibleConstructorReturn(this, (BitmapSkin.__proto__ || Object.getPrototypeOf(BitmapSkin)).call(this, id));

        _this._costumeResolution = 1;

        /** @type {!RenderWebGL} */
        _this._renderer = renderer;

        /** @type {WebGLTexture} */
        _this._texture = null;

        /** @type {Array<int>} */
        _this._textureSize = [0, 0];
        return _this;
    }

    /**
     * Dispose of this object. Do not use it after calling this method.
     */


    _createClass(BitmapSkin, [{
        key: 'dispose',
        value: function dispose() {
            if (this._texture) {
                this._renderer.gl.deleteTexture(this._texture);
                this._texture = null;
            }
            _get(BitmapSkin.prototype.__proto__ || Object.getPrototypeOf(BitmapSkin.prototype), 'dispose', this).call(this);
        }

        /**
         * @returns {boolean} true for a raster-style skin (like a BitmapSkin), false for vector-style (like SVGSkin).
         */

    }, {
        key: 'getTexture',


        /**
         * @param {Array<number>} scale - The scaling factors to be used.
         * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given scale.
         */
        // eslint-disable-next-line no-unused-vars
        value: function getTexture(scale) {
            return this._texture;
        }

        /**
         * Set the contents of this skin to a snapshot of the provided bitmap data.
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - new contents for this skin.
         * @param {int} [costumeResolution=1] - The resolution to use for this bitmap.
         * @param {Array<number>} [rotationCenter] - Optional rotation center for the bitmap. If not supplied, it will be
         * calculated from the bounding box
         * @fires Skin.event:WasAltered
         */

    }, {
        key: 'setBitmap',
        value: function setBitmap(bitmapData, costumeResolution, rotationCenter) {
            var gl = this._renderer.gl;

            if (this._texture) {
                gl.bindTexture(gl.TEXTURE_2D, this._texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
                this._silhouette.update(bitmapData);
            } else {
                // TODO: mipmaps?
                var textureOptions = {
                    auto: true,
                    wrap: gl.CLAMP_TO_EDGE,
                    src: bitmapData
                };

                this._texture = twgl.createTexture(gl, textureOptions);
                this._silhouette.update(bitmapData);
            }

            // Do these last in case any of the above throws an exception
            this._costumeResolution = costumeResolution || 2;
            this._textureSize = BitmapSkin._getBitmapSize(bitmapData);

            if (typeof rotationCenter === 'undefined') rotationCenter = this.calculateRotationCenter();
            this.setRotationCenter.apply(this, rotationCenter);

            this.emit(Skin.Events.WasAltered);
        }

        /**
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - bitmap data to inspect.
         * @returns {Array<int>} the width and height of the bitmap data, in pixels.
         * @private
         */

    }, {
        key: 'isRaster',
        get: function get() {
            return true;
        }

        /**
         * @return {Array<number>} the "native" size, in texels, of this skin.
         */

    }, {
        key: 'size',
        get: function get() {
            return [this._textureSize[0] / this._costumeResolution, this._textureSize[1] / this._costumeResolution];
        }
    }], [{
        key: '_getBitmapSize',
        value: function _getBitmapSize(bitmapData) {
            if (bitmapData instanceof HTMLImageElement) {
                return [bitmapData.naturalWidth || bitmapData.width, bitmapData.naturalHeight || bitmapData.height];
            }

            if (bitmapData instanceof HTMLVideoElement) {
                return [bitmapData.videoWidth || bitmapData.width, bitmapData.videoHeight || bitmapData.height];
            }

            // ImageData or HTMLCanvasElement
            return [bitmapData.width, bitmapData.height];
        }
    }]);

    return BitmapSkin;
}(Skin);

module.exports = BitmapSkin;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _cross(o, a, b) {
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

function _upperTangent(pointset) {
    var lower = [];
    for (var l = 0; l < pointset.length; l++) {
        while (lower.length >= 2 && (_cross(lower[lower.length - 2], lower[lower.length - 1], pointset[l]) <= 0)) {
            lower.pop();
        }
        lower.push(pointset[l]);
    }
    lower.pop();
    return lower;
}

function _lowerTangent(pointset) {
    var reversed = pointset.reverse(),
        upper = [];
    for (var u = 0; u < reversed.length; u++) {
        while (upper.length >= 2 && (_cross(upper[upper.length - 2], upper[upper.length - 1], reversed[u]) <= 0)) {
            upper.pop();
        }
        upper.push(reversed[u]);
    }
    upper.pop();
    return upper;
}

// pointset has to be sorted by X
function convex(pointset) {
    var convex,
        upper = _upperTangent(pointset),
        lower = _lowerTangent(pointset);
    convex = lower.concat(upper);
    convex.push(pointset[0]);  
    return convex;  
}

module.exports = convex;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {

    toXy: function(pointset, format) {
        if (format === undefined) {
            return pointset.slice();
        }
        return pointset.map(function(pt) {
            /*jslint evil: true */
            var _getXY = new Function('pt', 'return [pt' + format[0] + ',' + 'pt' + format[1] + '];');
            return _getXY(pt);
        });
    },

    fromXy: function(pointset, format) {
        if (format === undefined) {
            return pointset.slice();
        }
        return pointset.map(function(pt) {
            /*jslint evil: true */
            var _getObj = new Function('pt', 'var o = {}; o' + format[0] + '= pt[0]; o' + format[1] + '= pt[1]; return o;');
            return _getObj(pt);
        });
    }

}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function Grid(points, cellSize) {
    this._cells = [];
    this._cellSize = cellSize;

    points.forEach(function(point) {
        var cellXY = this.point2CellXY(point),
            x = cellXY[0],
            y = cellXY[1];
        if (this._cells[x] === undefined) {
            this._cells[x] = [];
        }
        if (this._cells[x][y] === undefined) {
            this._cells[x][y] = [];
        }
        this._cells[x][y].push(point);
    }, this);
}

Grid.prototype = {
    cellPoints: function(x, y) { // (Number, Number) -> Array
        return (this._cells[x] !== undefined && this._cells[x][y] !== undefined) ? this._cells[x][y] : [];
    },

    rangePoints: function(bbox) { // (Array) -> Array
        var tlCellXY = this.point2CellXY([bbox[0], bbox[1]]),
            brCellXY = this.point2CellXY([bbox[2], bbox[3]]),
            points = [];

        for (var x = tlCellXY[0]; x <= brCellXY[0]; x++) {
            for (var y = tlCellXY[1]; y <= brCellXY[1]; y++) {
                points = points.concat(this.cellPoints(x, y));
            }
        }

        return points;
    },

    removePoint: function(point) { // (Array) -> Array
        var cellXY = this.point2CellXY(point),
            cell = this._cells[cellXY[0]][cellXY[1]],
            pointIdxInCell;
        
        for (var i = 0; i < cell.length; i++) {
            if (cell[i][0] === point[0] && cell[i][1] === point[1]) {
                pointIdxInCell = i;
                break;
            }
        }

        cell.splice(pointIdxInCell, 1);

        return cell;
    },

    point2CellXY: function(point) { // (Array) -> Array
        var x = parseInt(point[0] / this._cellSize),
            y = parseInt(point[1] / this._cellSize);
        return [x, y];
    },

    extendBbox: function(bbox, scaleFactor) { // (Array, Number) -> Array
        return [
            bbox[0] - (scaleFactor * this._cellSize),
            bbox[1] - (scaleFactor * this._cellSize),
            bbox[2] + (scaleFactor * this._cellSize),
            bbox[3] + (scaleFactor * this._cellSize)
        ];
    }
};

function grid(points, cellSize) {
    return new Grid(points, cellSize);
}

module.exports = grid;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function ccw(x1, y1, x2, y2, x3, y3) {           
    var cw = ((y3 - y1) * (x2 - x1)) - ((y2 - y1) * (x3 - x1));
    return cw > 0 ? true : cw < 0 ? false : true; // colinear
}

function intersect(seg1, seg2) {
  var x1 = seg1[0][0], y1 = seg1[0][1],
      x2 = seg1[1][0], y2 = seg1[1][1],
      x3 = seg2[0][0], y3 = seg2[0][1],
      x4 = seg2[1][0], y4 = seg2[1][1];

    return ccw(x1, y1, x3, y3, x4, y4) !== ccw(x2, y2, x3, y3, x4, y4) && ccw(x1, y1, x2, y2, x3, y3) !== ccw(x1, y1, x2, y2, x4, y4);
}

module.exports = intersect;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 (c) 2014-2016, Andrii Heonia
 Hull.js, a JavaScript library for concave hull generation by set of points.
 https://github.com/AndriiHeonia/hull
*/



var intersect = __webpack_require__(35);
var grid = __webpack_require__(34);
var formatUtil = __webpack_require__(33);
var convexHull = __webpack_require__(32);

function _filterDuplicates(pointset) {
    return pointset.filter(function(el, idx, arr) {
        var prevEl = arr[idx - 1];
        return idx === 0 || !(prevEl[0] === el[0] && prevEl[1] === el[1]);
    });
}

function _sortByX(pointset) {
    return pointset.sort(function(a, b) {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
}

function _sqLength(a, b) {
    return Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2);
}

function _cos(o, a, b) {
    var aShifted = [a[0] - o[0], a[1] - o[1]],
        bShifted = [b[0] - o[0], b[1] - o[1]],
        sqALen = _sqLength(o, a),
        sqBLen = _sqLength(o, b),
        dot = aShifted[0] * bShifted[0] + aShifted[1] * bShifted[1];

    return dot / Math.sqrt(sqALen * sqBLen);
}

function _intersect(segment, pointset) {
    for (var i = 0; i < pointset.length - 1; i++) {
        var seg = [pointset[i], pointset[i + 1]];
        if (segment[0][0] === seg[0][0] && segment[0][1] === seg[0][1] ||
            segment[0][0] === seg[1][0] && segment[0][1] === seg[1][1]) {
            continue;
        }
        if (intersect(segment, seg)) {
            return true;
        }
    }
    return false;
}

function _occupiedArea(pointset) {
    var minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;

    for (var i = pointset.length - 1; i >= 0; i--) {
        if (pointset[i][0] < minX) {
            minX = pointset[i][0];
        }
        if (pointset[i][1] < minY) {
            minY = pointset[i][1];
        }
        if (pointset[i][0] > maxX) {
            maxX = pointset[i][0];
        }
        if (pointset[i][1] > maxY) {
            maxY = pointset[i][1];
        }
    }

    return [
        maxX - minX, // width
        maxY - minY  // height
    ];
}

function _bBoxAround(edge) {
    return [
        Math.min(edge[0][0], edge[1][0]), // left
        Math.min(edge[0][1], edge[1][1]), // top
        Math.max(edge[0][0], edge[1][0]), // right
        Math.max(edge[0][1], edge[1][1])  // bottom
    ];
}

function _midPoint(edge, innerPoints, convex) {
    var point = null,
        angle1Cos = MAX_CONCAVE_ANGLE_COS,
        angle2Cos = MAX_CONCAVE_ANGLE_COS,
        a1Cos, a2Cos;

    for (var i = 0; i < innerPoints.length; i++) {
        a1Cos = _cos(edge[0], edge[1], innerPoints[i]);
        a2Cos = _cos(edge[1], edge[0], innerPoints[i]);

        if (a1Cos > angle1Cos && a2Cos > angle2Cos &&
            !_intersect([edge[0], innerPoints[i]], convex) &&
            !_intersect([edge[1], innerPoints[i]], convex)) {

            angle1Cos = a1Cos;
            angle2Cos = a2Cos;
            point = innerPoints[i];
        }
    }

    return point;
}

function _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList) {
    var edge,
        keyInSkipList,
        scaleFactor,
        midPoint,
        bBoxAround,
        bBoxWidth,
        bBoxHeight,
        midPointInserted = false;

    for (var i = 0; i < convex.length - 1; i++) {
        edge = [convex[i], convex[i + 1]];
        keyInSkipList = edge[0].join() + ',' + edge[1].join();

        if (_sqLength(edge[0], edge[1]) < maxSqEdgeLen ||
            edgeSkipList[keyInSkipList] === true) { continue; }

        scaleFactor = 0;
        bBoxAround = _bBoxAround(edge);
        do {
            bBoxAround = grid.extendBbox(bBoxAround, scaleFactor);
            bBoxWidth = bBoxAround[2] - bBoxAround[0];
            bBoxHeight = bBoxAround[3] - bBoxAround[1];

            midPoint = _midPoint(edge, grid.rangePoints(bBoxAround), convex);            
            scaleFactor++;
        }  while (midPoint === null && (maxSearchArea[0] > bBoxWidth || maxSearchArea[1] > bBoxHeight));

        if (bBoxWidth >= maxSearchArea[0] && bBoxHeight >= maxSearchArea[1]) {
            edgeSkipList[keyInSkipList] = true;
        }

        if (midPoint !== null) {
            convex.splice(i + 1, 0, midPoint);
            grid.removePoint(midPoint);
            midPointInserted = true;
        }
    }

    if (midPointInserted) {
        return _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList);
    }

    return convex;
}

function hull(pointset, concavity, format) {
    var convex,
        concave,
        innerPoints,
        occupiedArea,
        maxSearchArea,
        cellSize,
        points,
        maxEdgeLen = concavity || 20;

    if (pointset.length < 4) {
        return pointset.slice();
    }

    points = _filterDuplicates(_sortByX(formatUtil.toXy(pointset, format)));

    occupiedArea = _occupiedArea(points);
    maxSearchArea = [
        occupiedArea[0] * MAX_SEARCH_BBOX_SIZE_PERCENT,
        occupiedArea[1] * MAX_SEARCH_BBOX_SIZE_PERCENT
    ];

    convex = convexHull(points);
    innerPoints = points.filter(function(pt) {
        return convex.indexOf(pt) < 0;
    });

    cellSize = Math.ceil(1 / (points.length / (occupiedArea[0] * occupiedArea[1])));

    concave = _concave(
        convex, Math.pow(maxEdgeLen, 2),
        maxSearchArea, grid(innerPoints, cellSize), {});
 
    return formatUtil.fromXy(concave, format);
}

var MAX_CONCAVE_ANGLE_COS = Math.cos(90 / (180 / Math.PI)); // angle = 90 deg
var MAX_SEARCH_BBOX_SIZE_PERCENT = 0.6;

module.exports = hull;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(8);

var hull = __webpack_require__(36);
var twgl = __webpack_require__(0);

var BitmapSkin = __webpack_require__(31);
var Drawable = __webpack_require__(29);
var Rectangle = __webpack_require__(7);
var PenSkin = __webpack_require__(26);
var RenderConstants = __webpack_require__(1);
var ShaderManager = __webpack_require__(3);
var SVGSkin = __webpack_require__(25);
var SVGTextBubble = __webpack_require__(24);
var EffectTransform = __webpack_require__(6);

var __isTouchingDrawablesPoint = twgl.v3.create();
var __candidatesBounds = new Rectangle();

/**
 * @callback RenderWebGL#idFilterFunc
 * @param {int} drawableID The ID to filter.
 * @return {bool} True if the ID passes the filter, otherwise false.
 */

/**
 * Maximum touch size for a picking check.
 * @todo Figure out a reasonable max size. Maybe this should be configurable?
 * @type {Array<int>}
 * @memberof RenderWebGL
 */
var MAX_TOUCH_SIZE = [3, 3];

/**
 * "touching {color}?" or "{color} touching {color}?" tests will be true if the
 * target is touching a color whose components are each within this tolerance of
 * the corresponding component of the query color.
 * between 0 (exact matches only) and 255 (match anything).
 * @type {object.<string,int>}
 * @memberof RenderWebGL
 */
var TOLERANCE_TOUCHING_COLOR = {
    R: 7,
    G: 7,
    B: 15,
    Mask: 2
};

/**
 * Constant used for masking when detecting the color white
 * @type {Array<int>}
 * @memberof RenderWebGL
 */
var COLOR_BLACK = [0, 0, 0, 1];

/**
 * Sprite Fencing - The number of pixels a sprite is required to leave remaining
 * onscreen around the edge of the staging area.
 * @type {number}
 */
var FENCE_WIDTH = 15;

var RenderWebGL = function (_EventEmitter) {
    _inherits(RenderWebGL, _EventEmitter);

    _createClass(RenderWebGL, null, [{
        key: 'isSupported',

        /**
         * Check if this environment appears to support this renderer before attempting to create an instance.
         * Catching an exception from the constructor is also a valid way to test for (lack of) support.
         * @param {canvas} [optCanvas] - An optional canvas to use for the test. Otherwise a temporary canvas will be used.
         * @returns {boolean} - True if this environment appears to support this renderer, false otherwise.
         */
        value: function isSupported(optCanvas) {
            try {
                // Create the context the same way that the constructor will: attributes may make the difference.
                return !!RenderWebGL._getContext(optCanvas || document.createElement('canvas'));
            } catch (e) {
                return false;
            }
        }

        /**
         * Ask TWGL to create a rendering context with the attributes used by this renderer.
         * @param {canvas} canvas - attach the context to this canvas.
         * @returns {WebGLRenderingContext} - a TWGL rendering context (backed by either WebGL 1.0 or 2.0).
         * @private
         */

    }, {
        key: '_getContext',
        value: function _getContext(canvas) {
            return twgl.getWebGLContext(canvas, { alpha: false, stencil: true });
        }

        /**
         * Create a renderer for drawing Scratch sprites to a canvas using WebGL.
         * Coordinates will default to Scratch 2.0 values if unspecified.
         * The stage's "native" size will be calculated from the these coordinates.
         * For example, the defaults result in a native size of 480x360.
         * Queries such as "touching color?" will always execute at the native size.
         * @see RenderWebGL#setStageSize
         * @see RenderWebGL#resize
         * @param {canvas} canvas The canvas to draw onto.
         * @param {int} [xLeft=-240] The x-coordinate of the left edge.
         * @param {int} [xRight=240] The x-coordinate of the right edge.
         * @param {int} [yBottom=-180] The y-coordinate of the bottom edge.
         * @param {int} [yTop=180] The y-coordinate of the top edge.
         * @constructor
         * @listens RenderWebGL#event:NativeSizeChanged
         */

    }]);

    function RenderWebGL(canvas, xLeft, xRight, yBottom, yTop) {
        _classCallCheck(this, RenderWebGL);

        /** @type {WebGLRenderingContext} */
        var _this = _possibleConstructorReturn(this, (RenderWebGL.__proto__ || Object.getPrototypeOf(RenderWebGL)).call(this));

        var gl = _this._gl = RenderWebGL._getContext(canvas);
        if (!gl) {
            throw new Error('Could not get WebGL context: this browser or environment may not support WebGL.');
        }

        /** @type {Drawable[]} */
        _this._allDrawables = [];

        /** @type {Skin[]} */
        _this._allSkins = [];

        /** @type {Array<int>} */
        _this._drawList = [];

        /** @type {int} */
        _this._nextDrawableId = RenderConstants.ID_NONE + 1;

        /** @type {int} */
        _this._nextSkinId = RenderConstants.ID_NONE + 1;

        /** @type {module:twgl/m4.Mat4} */
        _this._projection = twgl.m4.identity();

        /** @type {ShaderManager} */
        _this._shaderManager = new ShaderManager(gl);

        /** @type {HTMLCanvasElement} */
        _this._tempCanvas = document.createElement('canvas');

        _this._svgTextBubble = new SVGTextBubble();

        _this._createGeometry();

        _this.on(RenderConstants.Events.NativeSizeChanged, _this.onNativeSizeChanged);

        _this.setBackgroundColor(1, 1, 1);
        _this.setStageSize(xLeft || -240, xRight || 240, yBottom || -180, yTop || 180);
        _this.resize(_this._nativeSize[0], _this._nativeSize[1]);

        gl.disable(gl.DEPTH_TEST);
        /** @todo disable when no partial transparency? */
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ZERO, gl.ONE);
        return _this;
    }

    /**
     * @returns {WebGLRenderingContext} the WebGL rendering context associated with this renderer.
     */


    _createClass(RenderWebGL, [{
        key: 'resize',


        /**
         * Set the physical size of the stage in device-independent pixels.
         * This will be multiplied by the device's pixel ratio on high-DPI displays.
         * @param {int} pixelsWide The desired width in device-independent pixels.
         * @param {int} pixelsTall The desired height in device-independent pixels.
         */
        value: function resize(pixelsWide, pixelsTall) {
            var pixelRatio = window.devicePixelRatio || 1;
            this._gl.canvas.width = pixelsWide * pixelRatio;
            this._gl.canvas.height = pixelsTall * pixelRatio;
        }

        /**
         * Set the background color for the stage. The stage will be cleared with this
         * color each frame.
         * @param {number} red The red component for the background.
         * @param {number} green The green component for the background.
         * @param {number} blue The blue component for the background.
         */

    }, {
        key: 'setBackgroundColor',
        value: function setBackgroundColor(red, green, blue) {
            this._backgroundColor = [red, green, blue, 1];
        }

        /**
         * Tell the renderer to draw various debug information to the provided canvas
         * during certain operations.
         * @param {canvas} canvas The canvas to use for debug output.
         */

    }, {
        key: 'setDebugCanvas',
        value: function setDebugCanvas(canvas) {
            this._debugCanvas = canvas;
        }

        /**
         * Set logical size of the stage in Scratch units.
         * @param {int} xLeft The left edge's x-coordinate. Scratch 2 uses -240.
         * @param {int} xRight The right edge's x-coordinate. Scratch 2 uses 240.
         * @param {int} yBottom The bottom edge's y-coordinate. Scratch 2 uses -180.
         * @param {int} yTop The top edge's y-coordinate. Scratch 2 uses 180.
         */

    }, {
        key: 'setStageSize',
        value: function setStageSize(xLeft, xRight, yBottom, yTop) {
            this._xLeft = xLeft;
            this._xRight = xRight;
            this._yBottom = yBottom;
            this._yTop = yTop;

            // swap yBottom & yTop to fit Scratch convention of +y=up
            this._projection = twgl.m4.ortho(xLeft, xRight, yBottom, yTop, -1, 1);

            this._setNativeSize(Math.abs(xRight - xLeft), Math.abs(yBottom - yTop));
        }

        /**
         * @return {Array<int>} the "native" size of the stage, which is used for pen, query renders, etc.
         */

    }, {
        key: 'getNativeSize',
        value: function getNativeSize() {
            return [this._nativeSize[0], this._nativeSize[1]];
        }

        /**
         * Set the "native" size of the stage, which is used for pen, query renders, etc.
         * @param {int} width - the new width to set.
         * @param {int} height - the new height to set.
         * @private
         * @fires RenderWebGL#event:NativeSizeChanged
         */

    }, {
        key: '_setNativeSize',
        value: function _setNativeSize(width, height) {
            this._nativeSize = [width, height];
            this.emit(RenderConstants.Events.NativeSizeChanged, { newSize: this._nativeSize });
        }

        /**
         * Create a new bitmap skin from a snapshot of the provided bitmap data.
         * @param {ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} bitmapData - new contents for this skin.
         * @param {!int} [costumeResolution=1] - The resolution to use for this bitmap.
         * @param {?Array<number>} [rotationCenter] Optional: rotation center of the skin. If not supplied, the center of
         * the skin will be used.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createBitmapSkin',
        value: function createBitmapSkin(bitmapData, costumeResolution, rotationCenter) {
            var skinId = this._nextSkinId++;
            var newSkin = new BitmapSkin(skinId, this);
            newSkin.setBitmap(bitmapData, costumeResolution, rotationCenter);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new SVG skin.
         * @param {!string} svgData - new SVG to use.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createSVGSkin',
        value: function createSVGSkin(svgData, rotationCenter) {
            var skinId = this._nextSkinId++;
            var newSkin = new SVGSkin(skinId, this);
            newSkin.setSVG(svgData, rotationCenter);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new PenSkin - a skin which implements a Scratch pen layer.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createPenSkin',
        value: function createPenSkin() {
            var skinId = this._nextSkinId++;
            var newSkin = new PenSkin(skinId, this);
            this._allSkins[skinId] = newSkin;
            return skinId;
        }

        /**
         * Create a new SVG skin using the text bubble svg creator. The rotation center
         * is always placed at the top left.
         * @param {!string} type - either "say" or "think".
         * @param {!string} text - the text for the bubble.
         * @param {!boolean} pointsLeft - which side the bubble is pointing.
         * @returns {!int} the ID for the new skin.
         */

    }, {
        key: 'createTextSkin',
        value: function createTextSkin(type, text, pointsLeft) {
            var bubbleSvg = this._svgTextBubble.buildString(type, text, pointsLeft);
            return this.createSVGSkin(bubbleSvg, [0, 0]);
        }

        /**
         * Update an existing SVG skin, or create an SVG skin if the previous skin was not SVG.
         * @param {!int} skinId the ID for the skin to change.
         * @param {!string} svgData - new SVG to use.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         */

    }, {
        key: 'updateSVGSkin',
        value: function updateSVGSkin(skinId, svgData, rotationCenter) {
            if (this._allSkins[skinId] instanceof SVGSkin) {
                this._allSkins[skinId].setSVG(svgData, rotationCenter);
                return;
            }

            var newSkin = new SVGSkin(skinId, this);
            newSkin.setSVG(svgData, rotationCenter);
            this._reskin(skinId, newSkin);
        }

        /**
         * Update an existing bitmap skin, or create a bitmap skin if the previous skin was not bitmap.
         * @param {!int} skinId the ID for the skin to change.
         * @param {!ImageData|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imgData - new contents for this skin.
         * @param {!number} bitmapResolution - the resolution scale for a bitmap costume.
         * @param {?Array<number>} rotationCenter Optional: rotation center of the skin. If not supplied, the center of the
         * skin will be used
         */

    }, {
        key: 'updateBitmapSkin',
        value: function updateBitmapSkin(skinId, imgData, bitmapResolution, rotationCenter) {
            if (this._allSkins[skinId] instanceof BitmapSkin) {
                this._allSkins[skinId].setBitmap(imgData, bitmapResolution, rotationCenter);
                return;
            }

            var newSkin = new BitmapSkin(skinId, this);
            newSkin.setBitmap(imgData, bitmapResolution, rotationCenter);
            this._reskin(skinId, newSkin);
        }
    }, {
        key: '_reskin',
        value: function _reskin(skinId, newSkin) {
            var oldSkin = this._allSkins[skinId];
            this._allSkins[skinId] = newSkin;

            // Tell drawables to update
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._allDrawables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var drawable = _step.value;

                    if (drawable && drawable.skin === oldSkin) {
                        drawable.skin = newSkin;
                        drawable.setConvexHullDirty();
                        drawable.setTransformDirty();
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            oldSkin.dispose();
        }

        /**
         * Update a skin using the text bubble svg creator.
         * @param {!int} skinId the ID for the skin to change.
         * @param {!string} type - either "say" or "think".
         * @param {!string} text - the text for the bubble.
         * @param {!boolean} pointsLeft - which side the bubble is pointing.
         */

    }, {
        key: 'updateTextSkin',
        value: function updateTextSkin(skinId, type, text, pointsLeft) {
            var bubbleSvg = this._svgTextBubble.buildString(type, text, pointsLeft);
            this.updateSVGSkin(skinId, bubbleSvg, [0, 0]);
        }

        /**
         * Destroy an existing skin. Do not use the skin or its ID after calling this.
         * @param {!int} skinId - The ID of the skin to destroy.
         */

    }, {
        key: 'destroySkin',
        value: function destroySkin(skinId) {
            var oldSkin = this._allSkins[skinId];
            oldSkin.dispose();
            delete this._allSkins[skinId];
        }

        /**
         * Create a new Drawable and add it to the scene.
         * @returns {int} The ID of the new Drawable.
         */

    }, {
        key: 'createDrawable',
        value: function createDrawable() {
            var drawableID = this._nextDrawableId++;
            var drawable = new Drawable(drawableID);
            this._allDrawables[drawableID] = drawable;
            this._drawList.push(drawableID);

            drawable.skin = null;

            return drawableID;
        }

        /**
         * Destroy a Drawable, removing it from the scene.
         * @param {int} drawableID The ID of the Drawable to remove.
         */

    }, {
        key: 'destroyDrawable',
        value: function destroyDrawable(drawableID) {
            var drawable = this._allDrawables[drawableID];
            drawable.dispose();
            delete this._allDrawables[drawableID];

            var index = void 0;
            while ((index = this._drawList.indexOf(drawableID)) >= 0) {
                this._drawList.splice(index, 1);
            }
        }

        /**
         * Set a drawable's order in the drawable list (effectively, z/layer).
         * Can be used to move drawables to absolute positions in the list,
         * or relative to their current positions.
         * "go back N layers": setDrawableOrder(id, -N, true, 1); (assuming stage at 0).
         * "go to back": setDrawableOrder(id, 1); (assuming stage at 0).
         * "go to front": setDrawableOrder(id, Infinity);
         * @param {int} drawableID ID of Drawable to reorder.
         * @param {number} order New absolute order or relative order adjusment.
         * @param {boolean=} optIsRelative If set, `order` refers to a relative change.
         * @param {number=} optMin If set, order constrained to be at least `optMin`.
         * @return {?number} New order if changed, or null.
         */

    }, {
        key: 'setDrawableOrder',
        value: function setDrawableOrder(drawableID, order, optIsRelative, optMin) {
            var oldIndex = this._drawList.indexOf(drawableID);
            if (oldIndex >= 0) {
                // Remove drawable from the list.
                var drawable = this._drawList.splice(oldIndex, 1)[0];
                // Determine new index.
                var newIndex = order;
                if (optIsRelative) {
                    newIndex += oldIndex;
                }
                if (optMin) {
                    newIndex = Math.max(newIndex, optMin);
                }
                newIndex = Math.max(newIndex, 0);
                // Insert at new index.
                this._drawList.splice(newIndex, 0, drawable);
                return this._drawList.indexOf(drawable);
            }
            return null;
        }

        /**
         * Draw all current drawables and present the frame on the canvas.
         */

    }, {
        key: 'draw',
        value: function draw() {
            var gl = this._gl;

            twgl.bindFramebufferInfo(gl, null);
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor.apply(gl, this._backgroundColor);
            gl.clear(gl.COLOR_BUFFER_BIT);

            this._drawThese(this._drawList, ShaderManager.DRAW_MODE.default, this._projection);
        }

        /**
         * Get the precise bounds for a Drawable.
         * @param {int} drawableID ID of Drawable to get bounds for.
         * @return {object} Bounds for a tight box around the Drawable.
         */

    }, {
        key: 'getBounds',
        value: function getBounds(drawableID) {
            var drawable = this._allDrawables[drawableID];
            // Tell the Drawable about its updated convex hull, if necessary.
            if (drawable.needsConvexHullPoints()) {
                var points = this._getConvexHullPointsForDrawable(drawableID);
                drawable.setConvexHullPoints(points);
            }
            var bounds = drawable.getFastBounds();
            // In debug mode, draw the bounds.
            if (this._debugCanvas) {
                var gl = this._gl;
                this._debugCanvas.width = gl.canvas.width;
                this._debugCanvas.height = gl.canvas.height;
                var context = this._debugCanvas.getContext('2d');
                context.drawImage(gl.canvas, 0, 0);
                context.strokeStyle = '#FF0000';
                var pr = window.devicePixelRatio;
                context.strokeRect(pr * (bounds.left + this._nativeSize[0] / 2), pr * (-bounds.top + this._nativeSize[1] / 2), pr * (bounds.right - bounds.left), pr * (-bounds.bottom + bounds.top));
            }
            return bounds;
        }

        /**
         * Get the precise bounds for a Drawable around the top slice.
         * Used for positioning speech bubbles more closely to the sprite.
         * @param {int} drawableID ID of Drawable to get bubble bounds for.
         * @return {object} Bounds for a tight box around the Drawable top slice.
         */

    }, {
        key: 'getBoundsForBubble',
        value: function getBoundsForBubble(drawableID) {
            var drawable = this._allDrawables[drawableID];
            // Tell the Drawable about its updated convex hull, if necessary.
            if (drawable.needsConvexHullPoints()) {
                var points = this._getConvexHullPointsForDrawable(drawableID);
                drawable.setConvexHullPoints(points);
            }
            var bounds = drawable.getBoundsForBubble();
            // In debug mode, draw the bounds.
            if (this._debugCanvas) {
                var gl = this._gl;
                this._debugCanvas.width = gl.canvas.width;
                this._debugCanvas.height = gl.canvas.height;
                var context = this._debugCanvas.getContext('2d');
                context.drawImage(gl.canvas, 0, 0);
                context.strokeStyle = '#FF0000';
                var pr = window.devicePixelRatio;
                context.strokeRect(pr * (bounds.left + this._nativeSize[0] / 2), pr * (-bounds.top + this._nativeSize[1] / 2), pr * (bounds.right - bounds.left), pr * (-bounds.bottom + bounds.top));
            }
            return bounds;
        }

        /**
         * Get the current skin (costume) size of a Drawable.
         * @param {int} drawableID The ID of the Drawable to measure.
         * @return {Array<number>} Skin size, width and height.
         */

    }, {
        key: 'getCurrentSkinSize',
        value: function getCurrentSkinSize(drawableID) {
            var drawable = this._allDrawables[drawableID];
            return this.getSkinSize(drawable.skin.id);
        }

        /**
         * Get the size of a skin by ID.
         * @param {int} skinID The ID of the Skin to measure.
         * @return {Array<number>} Skin size, width and height.
         */

    }, {
        key: 'getSkinSize',
        value: function getSkinSize(skinID) {
            var skin = this._allSkins[skinID];
            return skin.size;
        }

        /**
         * Get the rotation center of a skin by ID.
         * @param {int} skinID The ID of the Skin
         * @return {Array<number>} The rotationCenterX and rotationCenterY
         */

    }, {
        key: 'getSkinRotationCenter',
        value: function getSkinRotationCenter(skinID) {
            var skin = this._allSkins[skinID];
            return skin.calculateRotationCenter();
        }

        /**
         * Check if a particular Drawable is touching a particular color.
         * Unlike touching drawable, touching color tests invisible sprites.
         * @param {int} drawableID The ID of the Drawable to check.
         * @param {Array<int>} color3b Test if the Drawable is touching this color.
         * @param {Array<int>} [mask3b] Optionally mask the check to this part of Drawable.
         * @returns {boolean} True iff the Drawable is touching the color.
         */

    }, {
        key: 'isTouchingColor',
        value: function isTouchingColor(drawableID, color3b, mask3b) {
            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var candidates = this._candidatesTouching(drawableID, this._drawList);
            if (candidates.length === 0) {
                return false;
            }

            var bounds = this._candidatesBounds(candidates);

            var candidateIDs = candidates.map(function (_ref) {
                var id = _ref.id;
                return id;
            });

            // Limit size of viewport to the bounds around the target Drawable,
            // and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            var fillBackgroundColor = this._backgroundColor;

            // When using masking such that the background fill color will showing through, ensure we don't
            // fill using the same color that we are trying to detect!
            if (color3b[0] > 196 && color3b[1] > 196 && color3b[2] > 196) {
                fillBackgroundColor = COLOR_BLACK;
            }

            gl.clearColor.apply(gl, fillBackgroundColor);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

            var extraUniforms = void 0;
            if (mask3b) {
                extraUniforms = {
                    u_colorMask: [mask3b[0] / 255, mask3b[1] / 255, mask3b[2] / 255],
                    u_colorMaskTolerance: TOLERANCE_TOUCHING_COLOR.Mask / 255
                };
            }

            try {
                gl.enable(gl.STENCIL_TEST);
                gl.stencilFunc(gl.ALWAYS, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
                gl.colorMask(false, false, false, false);
                this._drawThese([drawableID], mask3b ? ShaderManager.DRAW_MODE.colorMask : ShaderManager.DRAW_MODE.silhouette, projection, {
                    extraUniforms: extraUniforms,
                    ignoreVisibility: true // Touching color ignores sprite visibility
                });

                gl.stencilFunc(gl.EQUAL, 1, 1);
                gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                gl.colorMask(true, true, true, true);

                this._drawThese(candidateIDs, ShaderManager.DRAW_MODE.default, projection, { idFilterFunc: function idFilterFunc(testID) {
                        return testID !== drawableID;
                    } });
            } finally {
                gl.colorMask(true, true, true, true);
                gl.disable(gl.STENCIL_TEST);
            }

            var pixels = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var context = this._debugCanvas.getContext('2d');
                var imageData = context.getImageData(0, 0, bounds.width, bounds.height);
                imageData.data.set(pixels);
                context.putImageData(imageData, 0, 0);
            }

            for (var pixelBase = 0; pixelBase < pixels.length; pixelBase += 4) {
                var pixelDistanceR = Math.abs(pixels[pixelBase] - color3b[0]);
                var pixelDistanceG = Math.abs(pixels[pixelBase + 1] - color3b[1]);
                var pixelDistanceB = Math.abs(pixels[pixelBase + 2] - color3b[2]);

                if (pixelDistanceR <= TOLERANCE_TOUCHING_COLOR.R && pixelDistanceG <= TOLERANCE_TOUCHING_COLOR.G && pixelDistanceB <= TOLERANCE_TOUCHING_COLOR.B) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Check if a particular Drawable is touching any in a set of Drawables.
         * @param {int} drawableID The ID of the Drawable to check.
         * @param {?Array<int>} candidateIDs The Drawable IDs to check, otherwise all drawables in the renderer
         * @returns {boolean} True if the Drawable is touching one of candidateIDs.
         */

    }, {
        key: 'isTouchingDrawables',
        value: function isTouchingDrawables(drawableID) {
            var candidateIDs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._drawList;


            var candidates = this._candidatesTouching(drawableID, candidateIDs);
            if (candidates.length === 0) {
                return false;
            }

            // Get the union of all the candidates intersections.
            var bounds = this._candidatesBounds(candidates);

            var drawable = this._allDrawables[drawableID];
            var point = __isTouchingDrawablesPoint;

            // This is an EXTREMELY brute force collision detector, but it is
            // still faster than asking the GPU to give us the pixels.
            for (var x = bounds.left; x <= bounds.right; x++) {
                // Scratch Space - +y is top
                point[0] = x;
                for (var y = bounds.bottom; y <= bounds.top; y++) {
                    point[1] = y;
                    if (drawable.isTouching(point)) {
                        for (var index = 0; index < candidates.length; index++) {
                            if (candidates[index].drawable.isTouching(point)) {
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        }

        /**
         * Detect which sprite, if any, is at the given location. This function will not
         * pick drawables that are not visible or have ghost set all the way up.
         * @param {int} centerX The client x coordinate of the picking location.
         * @param {int} centerY The client y coordinate of the picking location.
         * @param {int} [touchWidth] The client width of the touch event (optional).
         * @param {int} [touchHeight] The client height of the touch event (optional).
         * @param {Array<int>} [candidateIDs] The Drawable IDs to pick from, otherwise all.
         * @returns {int} The ID of the topmost Drawable under the picking location, or
         * RenderConstants.ID_NONE if there is no Drawable at that location.
         */

    }, {
        key: 'pick',
        value: function pick(centerX, centerY, touchWidth, touchHeight, candidateIDs) {
            var _this2 = this;

            var gl = this._gl;

            touchWidth = touchWidth || 1;
            touchHeight = touchHeight || 1;
            candidateIDs = (candidateIDs || this._drawList).filter(function (id) {
                var drawable = _this2._allDrawables[id];
                var uniforms = drawable.getUniforms();
                return drawable.getVisible() && uniforms.u_ghost !== 0;
            });

            var clientToGLX = gl.canvas.width / gl.canvas.clientWidth;
            var clientToGLY = gl.canvas.height / gl.canvas.clientHeight;

            centerX *= clientToGLX;
            centerY *= clientToGLY;
            touchWidth *= clientToGLX;
            touchHeight *= clientToGLY;

            touchWidth = Math.max(1, Math.min(touchWidth, MAX_TOUCH_SIZE[0]));
            touchHeight = Math.max(1, Math.min(touchHeight, MAX_TOUCH_SIZE[1]));

            var pixelLeft = Math.floor(centerX - Math.floor(touchWidth / 2) + 0.5);
            var pixelTop = Math.floor(centerY - Math.floor(touchHeight / 2) + 0.5);

            var widthPerPixel = (this._xRight - this._xLeft) / this._gl.canvas.width;
            var heightPerPixel = (this._yBottom - this._yTop) / this._gl.canvas.height;

            var pickLeft = this._xLeft + pixelLeft * widthPerPixel;
            var pickTop = this._yTop + pixelTop * heightPerPixel;

            var hits = [];
            var worldPos = twgl.v3.create(0, 0, 0);
            worldPos[2] = 0;

            // Iterate over the canvas pixels and check if any candidate can be
            // touched at that point.
            for (var x = 0; x < touchWidth; x++) {
                worldPos[0] = x + pickLeft;
                for (var y = 0; y < touchHeight; y++) {
                    worldPos[1] = y + pickTop;
                    // Check candidates in the reverse order they would have been
                    // drawn. This will determine what candiate's silhouette pixel
                    // would have been drawn at the point.
                    for (var d = candidateIDs.length - 1; d >= 0; d--) {
                        var id = candidateIDs[d];
                        var drawable = this._allDrawables[id];
                        if (drawable.isTouching(worldPos)) {
                            hits[id] = (hits[id] || 0) + 1;
                            break;
                        }
                    }
                }
            }

            // Bias toward selecting anything over nothing
            hits[RenderConstants.ID_NONE] = 0;

            var hit = RenderConstants.ID_NONE;
            for (var hitID in hits) {
                if (hits.hasOwnProperty(hitID) && hits[hitID] > hits[hit]) {
                    hit = hitID;
                }
            }

            return hit | 0;
        }

        /**
         * @typedef DrawableExtraction
         * @property {Uint8Array} data Raw pixel data for the drawable
         * @property {int} width Drawable bounding box width
         * @property {int} height Drawable bounding box height
         * @property {Array<number>} scratchOffset [x, y] offset in Scratch coordinates
         * from the drawable position to the client x, y coordinate
         * @property {int} x The x coordinate relative to drawable bounding box
         * @property {int} y The y coordinate relative to drawable bounding box
         */

        /**
         * Return drawable pixel data and picking coordinates relative to the drawable bounds
         * @param {int} drawableID The ID of the drawable to get pixel data for
         * @param {int} x The client x coordinate of the picking location.
         * @param {int} y The client y coordinate of the picking location.
         * @return {?DrawableExtraction} Data about the picked drawable
         */

    }, {
        key: 'extractDrawable',
        value: function extractDrawable(drawableID, x, y) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) return null;

            // Convert client coordinates into absolute scratch units
            var scratchX = this._nativeSize[0] * (x / this._gl.canvas.clientWidth - 0.5);
            var scratchY = this._nativeSize[1] * (y / this._gl.canvas.clientHeight - 0.5);

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var bounds = drawable.getFastBounds();
            bounds.snapToInt();

            // Translate to scratch units relative to the drawable
            var pickX = scratchX - bounds.left;
            var pickY = scratchY + bounds.top;

            // Limit size of viewport to the bounds around the target Drawable,
            // and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            try {
                gl.disable(gl.BLEND);
                this._drawThese([drawableID], ShaderManager.DRAW_MODE.default, projection, { effectMask: ~ShaderManager.EFFECT_INFO.ghost.mask });
            } finally {
                gl.enable(gl.BLEND);
            }

            var data = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var ctx = this._debugCanvas.getContext('2d');
                var imageData = ctx.createImageData(bounds.width, bounds.height);
                imageData.data.set(data);
                ctx.putImageData(imageData, 0, 0);
                ctx.beginPath();
                ctx.arc(pickX, pickY, 3, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }

            return {
                data: data,
                width: bounds.width,
                height: bounds.height,
                scratchOffset: [-scratchX + drawable._position[0], -scratchY - drawable._position[1]],
                x: pickX,
                y: pickY
            };
        }

        /**
         * @typedef ColorExtraction
         * @property {Uint8Array} data Raw pixel data for the drawable
         * @property {int} width Drawable bounding box width
         * @property {int} height Drawable bounding box height
         * @property {object} color Color object with RGBA properties at picked location
         */

        /**
         * Return drawable pixel data and color at a given position
         * @param {int} x The client x coordinate of the picking location.
         * @param {int} y The client y coordinate of the picking location.
         * @param {int} radius The client radius to extract pixels with.
         * @return {?ColorExtraction} Data about the picked color
         */

    }, {
        key: 'extractColor',
        value: function extractColor(x, y, radius) {
            var scratchX = Math.round(this._nativeSize[0] * (x / this._gl.canvas.clientWidth - 0.5));
            var scratchY = Math.round(-this._nativeSize[1] * (y / this._gl.canvas.clientHeight - 0.5));

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            var bounds = new Rectangle();
            bounds.initFromBounds(scratchX - radius, scratchX + radius, scratchY - radius, scratchY + radius);

            var pickX = scratchX - bounds.left;
            var pickY = bounds.top - scratchY;

            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor.apply(gl, this._backgroundColor);
            gl.clear(gl.COLOR_BUFFER_BIT);
            this._drawThese(this._drawList, ShaderManager.DRAW_MODE.default, projection);

            var data = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

            var pixelBase = Math.floor(4 * (pickY * bounds.width + pickX));
            var color = {
                r: data[pixelBase],
                g: data[pixelBase + 1],
                b: data[pixelBase + 2],
                a: data[pixelBase + 3]
            };

            if (this._debugCanvas) {
                this._debugCanvas.width = bounds.width;
                this._debugCanvas.height = bounds.height;
                var ctx = this._debugCanvas.getContext('2d');
                var imageData = ctx.createImageData(bounds.width, bounds.height);
                imageData.data.set(data);
                ctx.putImageData(imageData, 0, 0);
                ctx.strokeStyle = 'black';
                ctx.fillStyle = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + color.a + ')';
                ctx.rect(pickX - 4, pickY - 4, 8, 8);
                ctx.fill();
                ctx.stroke();
            }

            return {
                data: data,
                width: bounds.width,
                height: bounds.height,
                color: color
            };
        }

        /**
         * Get the candidate bounding box for a touching query.
         * @param {int} drawableID ID for drawable of query.
         * @return {?Rectangle} Rectangle bounds for touching query, or null.
         */

    }, {
        key: '_touchingBounds',
        value: function _touchingBounds(drawableID) {
            var drawable = this._allDrawables[drawableID];

            /** @todo remove this once URL-based skin setting is removed. */
            if (!drawable.skin || !drawable.skin.getTexture([100, 100])) return null;

            var bounds = drawable.getFastBounds();

            // Limit queries to the stage size.
            bounds.clamp(this._xLeft, this._xRight, this._yBottom, this._yTop);

            // Use integer coordinates for queries - weird things happen
            // when you provide float width/heights to gl.viewport and projection.
            bounds.snapToInt();

            if (bounds.width === 0 || bounds.height === 0) {
                // No space to query.
                return null;
            }
            return bounds;
        }

        /**
         * Filter a list of candidates for a touching query into only those that
         * could possibly intersect the given bounds.
         * @param {int} drawableID - ID for drawable of query.
         * @param {Array<int>} candidateIDs - Candidates for touching query.
         * @return {?Array< {id, drawable, intersection} >} Filtered candidates with useful data.
         */

    }, {
        key: '_candidatesTouching',
        value: function _candidatesTouching(drawableID, candidateIDs) {
            var _this3 = this;

            var bounds = this._touchingBounds(drawableID);
            if (!bounds) {
                return [];
            }
            return candidateIDs.reduce(function (result, id) {
                if (id !== drawableID) {
                    var drawable = _this3._allDrawables[id];
                    var candidateBounds = drawable.getFastBounds();

                    if (bounds.intersects(candidateBounds)) {
                        result.push({
                            id: id,
                            drawable: drawable,
                            intersection: Rectangle.intersect(bounds, candidateBounds)
                        });
                    }
                }
                return result;
            }, []);
        }

        /**
         * Helper to get the union bounds from a set of candidates returned from the above method
         * @private
         * @param {Array<object>} candidates info from _candidatesTouching
         * @return {Rectangle} the outer bounding box union
         */

    }, {
        key: '_candidatesBounds',
        value: function _candidatesBounds(candidates) {
            return candidates.reduce(function (memo, _ref2) {
                var intersection = _ref2.intersection;

                if (!memo) {
                    return intersection;
                }
                // store the union of the two rectangles in our static rectangle instance
                return Rectangle.union(memo, intersection, __candidatesBounds);
            }, null);
        }

        /**
         * Update the position, direction, scale, or effect properties of this Drawable.
         * @param {int} drawableID The ID of the Drawable to update.
         * @param {object.<string,*>} properties The new property values to set.
         */

    }, {
        key: 'updateDrawableProperties',
        value: function updateDrawableProperties(drawableID, properties) {
            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                /**
                 * @todo fix whatever's wrong in the VM which causes this, then add a warning or throw here.
                 * Right now this happens so much on some projects that a warning or exception here can hang the browser.
                 */
                return;
            }
            if ('skinId' in properties) {
                drawable.skin = this._allSkins[properties.skinId];
            }
            if ('rotationCenter' in properties) {
                var newRotationCenter = properties.rotationCenter;
                drawable.skin.setRotationCenter(newRotationCenter[0], newRotationCenter[1]);
            }
            drawable.updateProperties(properties);
        }

        /**
         * Update the position object's x & y members to keep the drawable fenced in view.
         * @param {int} drawableID - The ID of the Drawable to update.
         * @param {Array.<number, number>} position to be fenced - An array of type [x, y]
         * @return {Array.<number, number>} The fenced position as an array [x, y]
         */

    }, {
        key: 'getFencedPositionOfDrawable',
        value: function getFencedPositionOfDrawable(drawableID, position) {
            var x = position[0];
            var y = position[1];

            var drawable = this._allDrawables[drawableID];
            if (!drawable) {
                // TODO: fix whatever's wrong in the VM which causes this, then add a warning or throw here.
                // Right now this happens so much on some projects that a warning or exception here can hang the browser.
                return [x, y];
            }

            var dx = x - drawable._position[0];
            var dy = y - drawable._position[1];

            var aabb = drawable.getFastBounds();

            var sx = this._xRight - Math.min(FENCE_WIDTH, Math.floor((aabb.right - aabb.left) / 2));
            if (aabb.right + dx < -sx) {
                x = drawable._position[0] - (sx + aabb.right);
            } else if (aabb.left + dx > sx) {
                x = drawable._position[0] + (sx - aabb.left);
            }
            var sy = this._yTop - Math.min(FENCE_WIDTH, Math.floor((aabb.top - aabb.bottom) / 2));
            if (aabb.top + dy < -sy) {
                y = drawable._position[1] - (sy + aabb.top);
            } else if (aabb.bottom + dy > sy) {
                y = drawable._position[1] + (sy - aabb.bottom);
            }
            return [x, y];
        }

        /**
         * Clear a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         */

    }, {
        key: 'penClear',
        value: function penClear(penSkinID) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.clear();
        }

        /**
         * Draw a point on a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {PenAttributes} penAttributes - how the point should be drawn.
         * @param {number} x - the X coordinate of the point to draw.
         * @param {number} y - the Y coordinate of the point to draw.
         */

    }, {
        key: 'penPoint',
        value: function penPoint(penSkinID, penAttributes, x, y) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.drawPoint(penAttributes, x, y);
        }

        /**
         * Draw a line on a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {PenAttributes} penAttributes - how the line should be drawn.
         * @param {number} x0 - the X coordinate of the beginning of the line.
         * @param {number} y0 - the Y coordinate of the beginning of the line.
         * @param {number} x1 - the X coordinate of the end of the line.
         * @param {number} y1 - the Y coordinate of the end of the line.
         */

    }, {
        key: 'penLine',
        value: function penLine(penSkinID, penAttributes, x0, y0, x1, y1) {
            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];
            skin.drawLine(penAttributes, x0, y0, x1, y1);
        }

        /**
         * Stamp a Drawable onto a pen layer.
         * @param {int} penSkinID - the unique ID of a Pen Skin.
         * @param {int} stampID - the unique ID of the Drawable to use as the stamp.
         */

    }, {
        key: 'penStamp',
        value: function penStamp(penSkinID, stampID) {
            var stampDrawable = this._allDrawables[stampID];
            if (!stampDrawable) {
                return;
            }

            var bounds = this._touchingBounds(stampID);
            if (!bounds) {
                return;
            }

            var skin = /** @type {PenSkin} */this._allSkins[penSkinID];

            var gl = this._gl;
            twgl.bindFramebufferInfo(gl, this._queryBufferInfo);

            // Limit size of viewport to the bounds around the stamp Drawable and create the projection matrix for the draw.
            gl.viewport(0, 0, bounds.width, bounds.height);
            var projection = twgl.m4.ortho(bounds.left, bounds.right, bounds.top, bounds.bottom, -1, 1);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            try {
                gl.disable(gl.BLEND);
                this._drawThese([stampID], ShaderManager.DRAW_MODE.default, projection, { ignoreVisibility: true });
            } finally {
                gl.enable(gl.BLEND);
            }

            var stampPixels = new Uint8Array(Math.floor(bounds.width * bounds.height * 4));
            gl.readPixels(0, 0, bounds.width, bounds.height, gl.RGBA, gl.UNSIGNED_BYTE, stampPixels);

            var stampCanvas = this._tempCanvas;
            stampCanvas.width = bounds.width;
            stampCanvas.height = bounds.height;

            var stampContext = stampCanvas.getContext('2d');
            var stampImageData = stampContext.createImageData(bounds.width, bounds.height);
            stampImageData.data.set(stampPixels);
            stampContext.putImageData(stampImageData, 0, 0);

            skin.drawStamp(stampCanvas, bounds.left, bounds.top);
        }

        /* ******
         * Truly internal functions: these support the functions above.
         ********/

        /**
         * Build geometry (vertex and index) buffers.
         * @private
         */

    }, {
        key: '_createGeometry',
        value: function _createGeometry() {
            var quad = {
                a_position: {
                    numComponents: 2,
                    data: [-0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5]
                },
                a_texCoord: {
                    numComponents: 2,
                    data: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]
                }
            };
            this._bufferInfo = twgl.createBufferInfoFromArrays(this._gl, quad);
        }

        /**
         * Respond to a change in the "native" rendering size. The native size is used by buffers which are fixed in size
         * regardless of the size of the main render target. This includes the buffers used for queries such as picking and
         * color-touching. The fixed size allows (more) consistent behavior across devices and presentation modes.
         * @param {object} event - The change event.
         * @private
         */

    }, {
        key: 'onNativeSizeChanged',
        value: function onNativeSizeChanged(event) {
            var _event$newSize = _slicedToArray(event.newSize, 2),
                width = _event$newSize[0],
                height = _event$newSize[1];

            var gl = this._gl;
            var attachments = [{ format: gl.RGBA }, { format: gl.DEPTH_STENCIL }];

            if (!this._pickBufferInfo) {
                this._pickBufferInfo = twgl.createFramebufferInfo(gl, attachments, MAX_TOUCH_SIZE[0], MAX_TOUCH_SIZE[1]);
            }

            /** @todo should we create this on demand to save memory? */
            // A 480x360 32-bpp buffer is 675 KiB.
            if (this._queryBufferInfo) {
                twgl.resizeFramebufferInfo(gl, this._queryBufferInfo, attachments, width, height);
            } else {
                this._queryBufferInfo = twgl.createFramebufferInfo(gl, attachments, width, height);
            }
        }

        /**
         * Draw a set of Drawables, by drawable ID
         * @param {Array<int>} drawables The Drawable IDs to draw, possibly this._drawList.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {module:twgl/m4.Mat4} projection The projection matrix to use.
         * @param {object} [opts] Options for drawing
         * @param {idFilterFunc} opts.filter An optional filter function.
         * @param {object.<string,*>} opts.extraUniforms Extra uniforms for the shaders.
         * @param {int} opts.effectMask Bitmask for effects to allow
         * @param {boolean} opts.ignoreVisibility Draw all, despite visibility (e.g. stamping, touching color)
         * @private
         */

    }, {
        key: '_drawThese',
        value: function _drawThese(drawables, drawMode, projection) {
            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


            var gl = this._gl;
            var currentShader = null;

            var numDrawables = drawables.length;
            for (var drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
                var drawableID = drawables[drawableIndex];

                // If we have a filter, check whether the ID fails
                if (opts.filter && !opts.filter(drawableID)) continue;

                var drawable = this._allDrawables[drawableID];
                /** @todo check if drawable is inside the viewport before anything else */

                // Hidden drawables (e.g., by a "hide" block) are not drawn unless
                // the ignoreVisibility flag is used (e.g. for stamping or touchingColor).
                if (!drawable.getVisible() && !opts.ignoreVisibility) continue;

                // Combine drawable scale with the native vs. backing pixel ratio
                var drawableScale = [drawable.scale[0] * this._gl.canvas.width / this._nativeSize[0], drawable.scale[1] * this._gl.canvas.height / this._nativeSize[1]];

                // If the skin or texture isn't ready yet, skip it.
                if (!drawable.skin || !drawable.skin.getTexture(drawableScale)) continue;

                var uniforms = {};

                var effectBits = drawable.getEnabledEffects();
                effectBits &= opts.hasOwnProperty('effectMask') ? opts.effectMask : effectBits;
                var newShader = this._shaderManager.getShader(drawMode, effectBits);
                if (currentShader !== newShader) {
                    currentShader = newShader;
                    gl.useProgram(currentShader.program);
                    twgl.setBuffersAndAttributes(gl, currentShader, this._bufferInfo);
                    Object.assign(uniforms, {
                        u_projectionMatrix: projection,
                        u_fudge: window.fudge || 0
                    });
                }

                Object.assign(uniforms, drawable.skin.getUniforms(drawableScale), drawable.getUniforms());

                // Apply extra uniforms after the Drawable's, to allow overwriting.
                if (opts.extraUniforms) {
                    Object.assign(uniforms, opts.extraUniforms);
                }

                if (uniforms.u_skin) {
                    twgl.setTextureParameters(gl, uniforms.u_skin, { minMag: drawable.useNearest ? gl.NEAREST : gl.LINEAR });
                }

                twgl.setUniforms(currentShader, uniforms);

                twgl.drawBufferInfo(gl, this._bufferInfo, gl.TRIANGLES);
            }
        }

        /**
         * Get the convex hull points for a particular Drawable.
         * To do this, draw the Drawable unrotated, unscaled, and untranslated.
         * Read back the pixels and find all boundary points.
         * Finally, apply a convex hull algorithm to simplify the set.
         * @param {int} drawableID The Drawable IDs calculate convex hull for.
         * @return {Array<Array<number>>} points Convex hull points, as [[x, y], ...]
         */

    }, {
        key: '_getConvexHullPointsForDrawable',
        value: function _getConvexHullPointsForDrawable(drawableID) {
            var drawable = this._allDrawables[drawableID];

            var _drawable$skin$size = _slicedToArray(drawable.skin.size, 2),
                width = _drawable$skin$size[0],
                height = _drawable$skin$size[1];
            // No points in the hull if invisible or size is 0.


            if (!drawable.getVisible() || width === 0 || height === 0) {
                return [];
            }

            /**
             * Return the determinant of two vectors, the vector from A to B and
             * the vector from A to C.
             *
             * The determinant is useful in this case to know if AC is counter
             * clockwise from AB. A positive value means the AC is counter
             * clockwise from AC. A negative value menas AC is clockwise from AB.
             *
             * @param {Float32Array} A A 2d vector in space.
             * @param {Float32Array} B A 2d vector in space.
             * @param {Float32Array} C A 2d vector in space.
             * @return {number} Greater than 0 if counter clockwise, less than if
             * clockwise, 0 if all points are on a line.
             */
            var CCW = function CCW(A, B, C) {
                // AB = B - A
                // AC = C - A
                // det (AB BC) = AB0 * AC1 - AB1 * AC0
                return (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
            };

            // https://github.com/LLK/scratch-flash/blob/dcbeeb59d44c3be911545dfe54d
            // 46a32404f8e69/src/scratch/ScratchCostume.as#L369-L413 Following
            // RasterHull creation, compare and store left and right values that
            // maintain a convex shape until that data can be passed to `hull` for
            // further work.
            var L = [];
            var R = [];
            var _pixelPos = twgl.v3.create();
            var _effectPos = twgl.v3.create();
            var ll = -1;
            var rr = -1;
            var Q = void 0;
            for (var y = 0; y < height; y++) {
                _pixelPos[1] = y / height;
                // Scan from left to right, looking for a touchable spot in the
                // skin.
                var x = 0;
                for (; x < width; x++) {
                    _pixelPos[0] = x / width;
                    EffectTransform.transformPoint(drawable, _pixelPos, _effectPos);
                    if (drawable.skin.isTouchingLinear(_effectPos)) {
                        Q = [x, y];
                        break;
                    }
                }
                // If x is equal to the width there are no touchable points in the
                // skin. Nothing we can add to L. And looping for R would find the
                // same thing.
                if (x >= width) {
                    continue;
                }
                // Decrement ll until Q is clockwise (CCW returns negative) from the
                // last two points in L.
                while (ll > 0) {
                    if (CCW(L[ll - 1], L[ll], Q) < 0) {
                        break;
                    } else {
                        --ll;
                    }
                }
                // Increment ll and then set L[ll] to Q. If ll was -1 before this
                // line, this will set L[0] to Q. If ll was 0 before this line, this
                // will set L[1] to Q.
                L[++ll] = Q;

                // Scan from right to left, looking for a touchable spot in the
                // skin.
                for (x = width - 1; x >= 0; x--) {
                    _pixelPos[0] = x / width;
                    EffectTransform.transformPoint(drawable, _pixelPos, _effectPos);
                    if (drawable.skin.isTouchingLinear(_effectPos)) {
                        Q = [x, y];
                        break;
                    }
                }
                // Decrement rr until Q is counter clockwise (CCW returns positive)
                // from the last two points in L. L takes clockwise points and R
                // takes counter clockwise points. if y was decremented instead of
                // incremented R would take clockwise points. We are going in the
                // right direction for L and the wrong direction for R, so we
                // compare the opposite value for R from L.
                while (rr > 0) {
                    if (CCW(R[rr - 1], R[rr], Q) > 0) {
                        break;
                    } else {
                        --rr;
                    }
                }
                // Increment rr and then set R[rr] to Q.
                R[++rr] = Q;
            }

            // Known boundary points on left/right edges of pixels.
            var boundaryPoints = L;
            // Truncate boundaryPoints to the index of the last added Q to L. L may
            // have more entries than the index for the last Q.
            boundaryPoints.length = ll + 1;
            // Add points in R to boundaryPoints in reverse so all points in
            // boundaryPoints are clockwise from each other.
            for (var j = rr; j >= 0; --j) {
                boundaryPoints.push(R[j]);
            }
            // Simplify boundary points using convex hull.
            return hull(boundaryPoints, Infinity);
        }
    }, {
        key: 'gl',
        get: function get() {
            return this._gl;
        }
    }]);

    return RenderWebGL;
}(EventEmitter);

// :3


RenderWebGL.prototype.canHazPixels = RenderWebGL.prototype.extractDrawable;

module.exports = RenderWebGL;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RenderWebGL = __webpack_require__(37);

/**
 * Export for NPM & Node.js
 * @type {RenderWebGL}
 */
module.exports = RenderWebGL;

/***/ })
/******/ ]);
});
//# sourceMappingURL=scratch-render.js.map