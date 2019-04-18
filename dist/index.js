'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iterator = require('babel-runtime/core-js/symbol/iterator');

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

exports.uuid = uuid;
exports.objStringToNumber = objStringToNumber;
exports.char2Date = char2Date;
exports.numValidate = numValidate;
exports.arrayObjClear = arrayObjClear;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 生成唯一字符串
 */
function uuid() {
    var s = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i += 1) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
    s[8] = '-';
    s[13] = '-';
    s[18] = '-';
    s[23] = '-';
    return s.join('');
}

/**
 * 将一个对象中值包含数字字符转换成number
 *
 */
function objStringToNumber(obj) {
    // 判断值是否为数组
    if (Array.isArray(obj)) {
        obj.map(function (childItem, index) {
            if ((typeof childItem === 'undefined' ? 'undefined' : _typeof(childItem)) === 'object') {
                objStringToNumber(childItem);
            } else {
                if (typeof childItem !== 'number') {
                    var temp = Number(childItem);
                    if (temp) obj[index] = temp;
                }
            }
        });
    } else {
        for (var item in obj) {
            if (_typeof(obj[item]) === 'object') {
                objStringToNumber(obj[item]);
            } else {
                if (obj[item] && typeof obj[item] !== 'number') {
                    var temp = Number(obj[item]);
                    if (temp) obj[item] = temp;
                }
            }
        }
    }
    return obj;
}

/**
 /**
 * 将对象中的 日期字符串转换成日期对象
 * 使用instanceof检测date是否为Date类型，结果为true
 * 使用Date的getTime()方法，Invalid Date对象返回的是一个NaN，
 */
function char2Date(obj) {
    // 判断值是否为数组
    if (obj && Array.isArray(obj)) {
        obj.map(function (childItem, index) {
            if ((typeof childItem === 'undefined' ? 'undefined' : _typeof(childItem)) === 'object') {
                char2Date(childItem);
            } else {
                if (typeof childItem === 'string') {
                    var date = new Date(childItem);
                    if (date instanceof Date && !isNaN(date.getTime())) {
                        obj[index] = date;
                    }
                }
            }
        });
    } else {
        for (var item in obj) {
            if (_typeof(obj[item]) === 'object') {
                char2Date(obj[item]);
            } else {
                if (obj[item] && typeof obj[item] === 'string') {
                    var date = new Date(obj[item]);
                    if (date instanceof Date && !isNaN(date.getTime())) {
                        obj[item] = date;
                    }
                }
            }
        }
    }
    return obj;
}

/**
 * 生成10位以内的验证码
 * @param num
 */
function numValidate(num) {
    return Math.random().toString().slice(-num);
}

/**
 * 数组对象去重
 * @param arr 对象数组,key对象唯一标识 类型为字符串
 */
function arrayObjClear(arr, key) {
    var result = [];
    var obj = {};
    for (var i = 0; i < arr.length; i += 1) {
        if (!obj[arr[i][key]]) {
            result.push(arr[i]);
            obj[arr[i][key]] = true;
        }
    }
    return result;
}