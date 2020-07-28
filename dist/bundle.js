function onOpen() {
}
function createFactorAndLevelSheet() {
}
function createAllCombinationTestcase() {
}
function createOneWiseTestcase() {
}
function createPairWiseTestcase() {
}/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-md5/src/md5.js":
/*!****************************************!*\
  !*** ./node_modules/js-md5/src/md5.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  var blocks = [], buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */
  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */
  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */
  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | (code >> 6);
              buffer8[i++] = 0x80 | (code & 0x3f);
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | (code >> 12);
              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
              buffer8[i++] = 0x80 | (code & 0x3f);
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              buffer8[i++] = 0xf0 | (code >> 18);
              buffer8[i++] = 0x80 | ((code >> 12) & 0x3f);
              buffer8[i++] = 0x80 | ((code >> 6) & 0x3f);
              buffer8[i++] = 0x80 | (code & 0x3f);
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
              blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a, b, c, d, bc, da, blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ (d & (a ^ -271733879))) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ (c & (d ^ a))) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ (b & (c ^ d))) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ (a & (b ^ c))) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ (d & (a ^ b))) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ (c & (d ^ a))) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ (b & (c ^ d))) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ (b & (c ^ d))) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ (b & (c ^ d))) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ (a & (b ^ c))) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ (d & (a ^ b))) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ (c & (d ^ a))) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ (d & (b ^ c))) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ (c & (a ^ b))) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ (b & (d ^ a))) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ (a & (c ^ d))) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */
  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;

    return HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F];
  };

  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */
  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
    return [
      h0 & 0xFF, (h0 >> 8) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 24) & 0xFF,
      h1 & 0xFF, (h1 >> 8) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 24) & 0xFF,
      h2 & 0xFF, (h2 >> 8) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 24) & 0xFF,
      h3 & 0xFF, (h3 >> 8) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 24) & 0xFF
    ];
  };

  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */
  Md5.prototype.array = Md5.prototype.digest;

  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */
  Md5.prototype.base64 = function () {
    var v1, v2, v3, base64Str = '', bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
        BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
        BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
        BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
      BASE64_ENCODE_CHAR[(v1 << 4) & 63] +
      '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/functions/AbstractTestcaseCreator.ts":
/*!**************************************************!*\
  !*** ./src/functions/AbstractTestcaseCreator.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractTestcaseCreator; });
/* harmony import */ var _libs_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Utils */ "./src/libs/Utils.ts");

class AbstractTestcaseCreator {
    /**
     * The template method defines the skeleton of an algorithm.
     */
    create() {
        const configSheetName = "Factor&Level";
        const configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
        _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].checkUndefined(configSheet, "configSheet is Undefined..");
        let values = configSheet
            .getRange(2, 1, configSheet.getLastRow(), configSheet.getLastColumn())
            .getValues();
        values = _libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].transpose(values);
        for (let i = 0; i < values.length; i++) {
            values[i] = values[i].filter(_libs_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].isNotBlank);
        }
        const combinationTestcases = this.createTestcases(values);
        const combinationTestCaseSheetName = this.getSheetName();
        let combinationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(combinationTestCaseSheetName);
        if (!combinationSheet) {
            combinationSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
            combinationSheet.setName(combinationTestCaseSheetName);
        }
        else {
            combinationSheet.clear();
        }
        const headerValues = configSheet
            .getRange(1, 1, 1, configSheet.getLastColumn())
            .getValues();
        const headerRange = combinationSheet.getRange(1, 1, 1, headerValues[0].length);
        headerRange.setValues(headerValues);
        headerRange.setBackground("green");
        combinationSheet
            .getRange(2, 1, combinationTestcases.length, combinationTestcases[0].length)
            .setValues(combinationTestcases);
    }
}


/***/ }),

/***/ "./src/functions/createAllCombinationTestcase.ts":
/*!*******************************************************!*\
  !*** ./src/functions/createAllCombinationTestcase.ts ***!
  \*******************************************************/
/*! exports provided: createAllCombinationTestcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAllCombinationTestcase", function() { return createAllCombinationTestcase; });
/* harmony import */ var _AbstractTestcaseCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTestcaseCreator */ "./src/functions/AbstractTestcaseCreator.ts");

const createAllCombinationTestcase = () => {
    Logger.log("createAllCombinationTestcase start");
    const creator = new TestcaseCreator();
    creator.create();
    Logger.log("createAllCombinationTestcase end");
};
class TestcaseCreator extends _AbstractTestcaseCreator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getSheetName() {
        return "allCombination";
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTestcases(values) {
        return cartesianProduct(values);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cartesianProduct(arr) {
    return arr.reduce(function (a, b) {
        return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        a
            .map(function (x) {
            return b.map(function (y) {
                return x.concat(y);
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        })
            .reduce(function (a, b) {
            return a.concat(b);
        }));
    }, [[]]);
}


/***/ }),

/***/ "./src/functions/createFactorAndLevelSheet.ts":
/*!****************************************************!*\
  !*** ./src/functions/createFactorAndLevelSheet.ts ***!
  \****************************************************/
/*! exports provided: createFactorAndLevelSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactorAndLevelSheet", function() { return createFactorAndLevelSheet; });
const createFactorAndLevelSheet = () => {
    Logger.log("createFactorAndLevelSheet start");
    const configSheetName = "Factor&Level";
    let configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
    if (!configSheet) {
        configSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
        configSheet.setName(configSheetName);
        // Set header
        let range = configSheet.getRange("A1:D1");
        range.setBackground("yellow");
        // Set examples
        const headers = [];
        headers.push("Brand (Factor)");
        headers.push("OS (Factor)");
        headers.push("Network (Factor)");
        headers.push("Work style (Factor)");
        range.setValues([headers]);
        range = configSheet.getRange("A2:D5");
        const values = [
            ["Brand X", "98", "Internal", "Salaried"],
            ["Brand Y", "NT", "Modem", "Hourly"],
            ["", "2000", "", "Part-Time"],
            ["", "XP", "", "Contr."]
        ];
        range.setValues(values);
    }
    Logger.log("createFactorAndLevelSheet end");
};


/***/ }),

/***/ "./src/functions/createOneWiseTestcase.ts":
/*!************************************************!*\
  !*** ./src/functions/createOneWiseTestcase.ts ***!
  \************************************************/
/*! exports provided: createOneWiseTestcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOneWiseTestcase", function() { return createOneWiseTestcase; });
/* harmony import */ var _libs_oneWise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/oneWise */ "./src/libs/oneWise.ts");
/* harmony import */ var _AbstractTestcaseCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractTestcaseCreator */ "./src/functions/AbstractTestcaseCreator.ts");


const createOneWiseTestcase = () => {
    Logger.log("createOneWiseTestcase start");
    const creator = new TestcaseCreator();
    creator.create();
    Logger.log("createOneWiseTestcase end");
};
class TestcaseCreator extends _AbstractTestcaseCreator__WEBPACK_IMPORTED_MODULE_1__["default"] {
    getSheetName() {
        return "oneWiseCombination";
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTestcases(values) {
        return Object(_libs_oneWise__WEBPACK_IMPORTED_MODULE_0__["oneWise"])(values);
    }
}


/***/ }),

/***/ "./src/functions/createPairWiseTestcase.ts":
/*!*************************************************!*\
  !*** ./src/functions/createPairWiseTestcase.ts ***!
  \*************************************************/
/*! exports provided: createPairWiseTestcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPairWiseTestcase", function() { return createPairWiseTestcase; });
/* harmony import */ var _libs_pairWise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/pairWise */ "./src/libs/pairWise.ts");
/* harmony import */ var _AbstractTestcaseCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractTestcaseCreator */ "./src/functions/AbstractTestcaseCreator.ts");


const createPairWiseTestcase = () => {
    Logger.log("createPairWiseTestcase start");
    const creator = new TestcaseCreator();
    creator.create();
    Logger.log("createPairWiseTestcase end");
};
class TestcaseCreator extends _AbstractTestcaseCreator__WEBPACK_IMPORTED_MODULE_1__["default"] {
    getSheetName() {
        return "pairWiseCombination";
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTestcases(values) {
        return Object(_libs_pairWise__WEBPACK_IMPORTED_MODULE_0__["pairWise"])(values);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _functions_createFactorAndLevelSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/createFactorAndLevelSheet */ "./src/functions/createFactorAndLevelSheet.ts");
/* harmony import */ var _functions_createAllCombinationTestcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/createAllCombinationTestcase */ "./src/functions/createAllCombinationTestcase.ts");
/* harmony import */ var _functions_createOneWiseTestcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/createOneWiseTestcase */ "./src/functions/createOneWiseTestcase.ts");
/* harmony import */ var _functions_createPairWiseTestcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/createPairWiseTestcase */ "./src/functions/createPairWiseTestcase.ts");




function onOpen() {
    const ui = SpreadsheetApp.getUi();
    const menu = ui.createMenu("gas-CombinationTestCaseGenerator");
    menu
        .addSubMenu(ui
        .createMenu("Settings")
        .addItem("Create Factor&Level sheet", "createFactorAndLevelSheet"))
        .addSeparator()
        .addSubMenu(ui
        .createMenu("Create test case")
        .addItem("Create all combination test case", "createAllCombinationTestcase")
        .addItem("Create one-wise test case", "createOneWiseTestcase")
        .addItem("Create pair-wise test case", "createPairWiseTestcase"))
        .addToUi();
}
global.onOpen = onOpen;
global.createFactorAndLevelSheet = _functions_createFactorAndLevelSheet__WEBPACK_IMPORTED_MODULE_0__["createFactorAndLevelSheet"];
global.createAllCombinationTestcase = _functions_createAllCombinationTestcase__WEBPACK_IMPORTED_MODULE_1__["createAllCombinationTestcase"];
global.createOneWiseTestcase = _functions_createOneWiseTestcase__WEBPACK_IMPORTED_MODULE_2__["createOneWiseTestcase"];
global.createPairWiseTestcase = _functions_createPairWiseTestcase__WEBPACK_IMPORTED_MODULE_3__["createPairWiseTestcase"];

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/libs/Utils.ts":
/*!***************************!*\
  !*** ./src/libs/Utils.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
class Utils {
    static isNotBlank(value) {
        const result = typeof value === "undefined" || value === "";
        return !result;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/ban-types
    static transpose(a) {
        return Object.keys(a[0]).map(function (c) {
            return a.map(function (r) {
                return r[c];
            });
        });
    }
    /**
     * checkUndefined
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
    static checkUndefined(value, message) {
        if (typeof value === "undefined") {
            throw new Error(message);
        }
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
    static getPermutations(array, size) {
        function p(t, i) {
            if (t.length === size) {
                result.push(t);
                return;
            }
            if (i + 1 > array.length) {
                return;
            }
            p(t.concat(array[i]), i + 1);
            p(t, i + 1);
        }
        const result = [];
        p([], 0);
        return result;
    }
}


/***/ }),

/***/ "./src/libs/covertable/exceptions.js":
/*!*******************************************!*\
  !*** ./src/libs/covertable/exceptions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class InvalidCondition {
    constructor() {
        this.name = 'InvalidCondition';
        this.message = 'It will never meet the condition';
    }
}
exports.InvalidCondition = InvalidCondition;
//# sourceMappingURL=exceptions.js.map

/***/ }),

/***/ "./src/libs/covertable/index.js":
/*!**************************************!*\
  !*** ./src/libs/covertable/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sorters = __importStar(__webpack_require__(/*! ./sorters/index */ "./src/libs/covertable/sorters/index.js"));
exports.sorters = sorters;
const exceptions = __importStar(__webpack_require__(/*! ./exceptions */ "./src/libs/covertable/exceptions.js"));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/libs/covertable/utils.js");
const ascOrder = (a, b) => a > b ? 1 : -1;
const convertFactorsToSerials = (factors) => {
    let origin = 0;
    const serials = utils_1.copy(factors);
    const parents = new Map();
    utils_1.getItems(factors).map(([subscript, factorList]) => {
        const length = utils_1.len(factorList);
        const serialList = [];
        utils_1.range(origin, origin + length).map((serial) => {
            serialList.push(serial);
            parents.set(serial, subscript);
        });
        serials[subscript] = serialList;
        origin += length;
    });
    return [serials, parents];
};
const makeIncompleted = (serials, length) => {
    const incompleted = new Map();
    const allKeys = utils_1.getItems(serials).map(([k, _]) => k);
    for (let keys of utils_1.combinations(allKeys, length)) {
        const comb = utils_1.range(0, length).map(i => serials[keys[i]]);
        for (let pair of utils_1.product(...comb)) {
            pair = pair.sort(ascOrder);
            incompleted.set(pair.toString(), pair);
        }
    }
    return incompleted;
};
class Row extends Map {
    constructor(row, factors, serials, preFilter) {
        super();
        this.factors = factors;
        this.serials = serials;
        this.preFilter = preFilter;
        for (let [k, v] of row) {
            this.set(k, v);
        }
        this.length = utils_1.len(factors);
        this.isArray = factors instanceof Array;
    }
    filled() {
        return this.size === this.length;
    }
    New(row) {
        return new Row(row || [], this.factors, this.serials, this.preFilter);
    }
    storable(candidate) {
        for (let [key, el] of candidate) {
            let existing = this.get(key);
            if (!(existing === undefined || existing === el)) {
                return false;
            }
        }
        if (!this.preFilter) {
            return true;
        }
        const nxt = this.New([...this.entries()].concat(candidate));
        return this.preFilter(nxt.toObject());
    }
    toObject() {
        const obj = {};
        for (let [key, value] of this.restore().entries()) {
            obj[key] = value;
        }
        return obj;
    }
    complement() {
        utils_1.getItems(this.serials).map(([k, vs]) => {
            for (let v of vs) {
                if (this.storable([[k, v]])) {
                    this.set(k, v);
                    break;
                }
            }
        });
        if (!this.filled()) {
            throw new exceptions.InvalidCondition();
        }
        return this;
    }
    restore() {
        const result = new Map();
        for (let [key, index] of this.entries()) {
            result.set(key, this.factors[key][index - this.serials[key][0]]);
        }
        return result;
    }
}
const make = (factors, options = {}) => {
    let { length, sorter } = options;
    if (!length) {
        length = 2;
    }
    if (!sorter) {
        sorter = sorters.sequential;
    }
    const { sortArgs, preFilter, postFilter } = options;
    const [indexes, parents] = convertFactorsToSerials(factors);
    const incompleted = makeIncompleted(indexes, length);
    const getCandidate = (pair) => {
        const keys = pair.map(p => parents.get(p) || 0);
        return utils_1.zip(keys, pair);
    };
    const rows = [];
    let row = new Row([], factors, indexes, preFilter);
    for (let [pairStr, pair] of incompleted.entries()) {
        if (!row.storable(getCandidate(pair))) {
            incompleted.delete(pairStr);
        }
    }
    while (incompleted.size) {
        if (row.filled()) {
            rows.push(row);
            for (let vs of utils_1.combinations([...row.values()], length)) {
                incompleted.delete(vs.sort(ascOrder).toString());
            }
            row = row.New([]);
        }
        let finished = true;
        for (let pair of sorter(incompleted, Object.assign(Object.assign({}, sortArgs), { row, parents, length }))) {
            if (row.filled()) {
                finished = false;
                break;
            }
            const candidate = getCandidate(pair);
            if (!row.storable(candidate)) {
                continue;
            }
            for (let [key, value] of candidate) {
                row.set(key, value);
            }
            incompleted.delete(pair.toString());
        }
        if (finished) {
            row.complement();
        }
    }
    if (row.size) {
        rows.push(row.complement());
    }
    const result = [];
    for (let row of rows) {
        const restored = row.restore();
        const restoredObject = row.toObject();
        if (postFilter && !postFilter(restoredObject)) {
            continue;
        }
        if (row.isArray) {
            result.push(utils_1.getItems(restored).sort().map(([_, v]) => v));
        }
        else {
            result.push(restoredObject);
        }
    }
    return result;
};
exports.default = make;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/libs/covertable/sorters/greedy.js":
/*!***********************************************!*\
  !*** ./src/libs/covertable/sorters/greedy.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! ../utils */ "./src/libs/covertable/utils.js");
const ascendant = (a, b) => a > b ? 1 : -1;
const getNumRemovablePairs = (indexes, incompletedKeys, length) => {
    let num = 0;
    for (let vs of utils_1.combinations(indexes, length)) {
        const key = vs.sort(ascendant).toString();
        if (incompletedKeys.has(key)) {
            num++;
        }
    }
    return num;
};
function* default_1(incompleted, sortArgs) {
    const { row, parents, length } = sortArgs;
    const seed = sortArgs.seed || '';
    const comparer = (a, b) => {
        return utils_1.md5(`${a[0]} ${seed}`) > utils_1.md5(`${b[0]} ${seed}`) ? 1 : -1;
    };
    while (true) {
        let maxNumPairs = null;
        let efficientPair = null;
        for (let [_, pair] of [...incompleted].sort(comparer)) {
            const keys = pair.map(p => parents.get(p) || 0);
            const candidate = utils_1.zip(keys, pair);
            if (!row.storable(candidate)) {
                continue;
            }
            const incompletedKeys = new Set(incompleted.keys());
            const numPairs = getNumRemovablePairs([...row.values(), ...pair], incompletedKeys, length);
            if (maxNumPairs === null || maxNumPairs < numPairs) {
                maxNumPairs = numPairs;
                efficientPair = pair;
            }
        }
        if (efficientPair === null) {
            break;
        }
        yield efficientPair;
    }
}
exports.default = default_1;
//# sourceMappingURL=greedy.js.map

/***/ }),

/***/ "./src/libs/covertable/sorters/hash.js":
/*!*********************************************!*\
  !*** ./src/libs/covertable/sorters/hash.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! ../utils */ "./src/libs/covertable/utils.js");
function* default_1(incompleted, sortArgs) {
    const seed = sortArgs.seed || '';
    const comparer = (a, b) => {
        return utils_1.md5(`${a[0]} ${seed}`) > utils_1.md5(`${b[0]} ${seed}`) ? 1 : -1;
    };
    for (let [_, pair] of [...incompleted.entries()].sort(comparer)) {
        yield pair;
    }
}
exports.default = default_1;
//# sourceMappingURL=hash.js.map

/***/ }),

/***/ "./src/libs/covertable/sorters/index.js":
/*!**********************************************!*\
  !*** ./src/libs/covertable/sorters/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sequential_1 = __webpack_require__(/*! ./sequential */ "./src/libs/covertable/sorters/sequential.js");
exports.sequential = sequential_1.default;
var random_1 = __webpack_require__(/*! ./random */ "./src/libs/covertable/sorters/random.js");
exports.random = random_1.default;
var hash_1 = __webpack_require__(/*! ./hash */ "./src/libs/covertable/sorters/hash.js");
exports.hash = hash_1.default;
var greedy_1 = __webpack_require__(/*! ./greedy */ "./src/libs/covertable/sorters/greedy.js");
exports.greedy = greedy_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/libs/covertable/sorters/random.js":
/*!***********************************************!*\
  !*** ./src/libs/covertable/sorters/random.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const comparer = (a, b) => {
    return Math.random() > 0.5 ? 1 : -1;
};
function* default_1(incompleted, sortArgs) {
    for (let [_, pair] of [...incompleted.entries()].sort(comparer)) {
        yield pair;
    }
}
exports.default = default_1;
//# sourceMappingURL=random.js.map

/***/ }),

/***/ "./src/libs/covertable/sorters/sequential.js":
/*!***************************************************!*\
  !*** ./src/libs/covertable/sorters/sequential.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function* default_1(incompleted, sortArgs) {
    for (let pair of incompleted.values()) {
        yield pair;
    }
}
exports.default = default_1;
//# sourceMappingURL=sequential.js.map

/***/ }),

/***/ "./src/libs/covertable/utils.js":
/*!**************************************!*\
  !*** ./src/libs/covertable/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var js_md5_1 = __webpack_require__(/*! js-md5 */ "./node_modules/js-md5/src/md5.js");
exports.md5 = js_md5_1.hex;
exports.all = (values) => {
    for (let value of values) {
        if (!value) {
            return false;
        }
    }
    return true;
};
exports.zip = (...lists) => {
    const length = lists[0].length;
    return exports.range(0, length).map(i => lists.map(l => l[i]));
};
exports.copy = (obj) => {
    if (Array.isArray(obj)) {
        return [...obj];
    }
    return Object.assign({}, obj);
};
exports.len = (obj) => {
    if (Array.isArray(obj)) {
        return obj.length;
    }
    return Object.keys(obj).length;
};
exports.getItems = (container) => {
    if (Array.isArray(container)) {
        return container.map((v, i) => [i, v]);
    }
    if (container instanceof Map) {
        return [...container.entries()];
    }
    return Object.entries(container);
};
exports.range = (start, stop, step = 1) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Sequence_generator_(range)
    return Array.from({ length: (stop - start - 1) / step + 1 }, (_, i) => start + (i * step));
};
exports.combinations = (list, length) => {
    const pairs = new Map();
    const set = (remains, pair) => {
        for (let i of remains) {
            if (pair.length < length) {
                set(remains.filter(j => j !== i), pair.concat(i));
            }
            else {
                const key = pair.sort().toString();
                if (!pairs.has(key)) {
                    pairs.set(key, pair);
                }
                return;
            }
        }
    };
    set([...list], []);
    return [...pairs.values()];
};
exports.product = (...list) => {
    const pairs = [];
    const set = (pair, index) => {
        if (pair.length === list.length) {
            pairs.push(pair);
            return;
        }
        for (let i of list[index]) {
            set(pair.concat(i), index + 1);
        }
    };
    set([], 0);
    return pairs;
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./src/libs/oneWise.ts":
/*!*****************************!*\
  !*** ./src/libs/oneWise.ts ***!
  \*****************************/
/*! exports provided: oneWise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneWise", function() { return oneWise; });

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
const oneWise = (arr, randomFn) => {
    const fn = randomFn || Math.random;
    const interactions = []; // matrix
    let greatest = 1;
    let len = 0;
    let elems = null; // parameter
    let row = null;
    for (let i = 0; i < greatest; ++i) {
        row = [];
        for (const j in arr) {
            elems = arr[j];
            len = elems.length;
            if (len > greatest) {
                greatest = len;
            }
            if (i < len) {
                row[j] = elems[i];
            }
            else if (len > 0) {
                row[j] = elems[randomBefore(len, fn)];
            }
        }
        interactions.push(row);
    }
    return interactions;
};
function randomBefore(n, randomFn) {
    return Math.floor(randomFn() * n);
}


/***/ }),

/***/ "./src/libs/pairWise.ts":
/*!******************************!*\
  !*** ./src/libs/pairWise.ts ***!
  \******************************/
/*! exports provided: pairWise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairWise", function() { return pairWise; });
/* harmony import */ var _libs_covertable_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/covertable/index */ "./src/libs/covertable/index.js");
/* harmony import */ var _libs_covertable_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_covertable_index__WEBPACK_IMPORTED_MODULE_0__);

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
const pairWise = (values) => {
    return _libs_covertable_index__WEBPACK_IMPORTED_MODULE_0___default()(values, {
        // optional
        length: 2,
        sorter: _libs_covertable_index__WEBPACK_IMPORTED_MODULE_0__["sorters"].greedy,
        sortArgs: {} // default: {}
    });
};


/***/ })

/******/ });