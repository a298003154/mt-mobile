"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isObj = isObj;
exports.isPlainObj = isPlainObj;
exports.get = get;
exports.parseClass = parseClass;
exports.stringifyClass = stringifyClass;
exports.parseStyle = parseStyle;
exports.addUnit = exports.createNamespace = exports.isServer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _string = require("./format/string");

var _index = require("./create/index");

exports.createNamespace = _index.createNamespace;

var _unit = require("./format/unit");

exports.addUnit = _unit.addUnit;
var isServer = _vue.default.prototype.$isServer;
exports.isServer = isServer;

function noop() {}

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isPlainObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    stringified = stringifyClass(value[i]);

    if (isDef(stringified) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';
  Object.keys(value).forEach(function (key) {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  });
  return res;
}

function parseArray(value) {
  var res = {};
  value.forEach(function (item) {
    res = (0, _extends2.default)({}, res, {}, parseClass(item));
  });
  return res;
}

function parseString(value) {
  var res = {};
  value.split(' ').forEach(function (c) {
    res[c.trim()] = true;
  });
  return res;
}

function parseClass(value) {
  if (Array.isArray(value)) {
    return parseArray(value);
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return parseString(value);
  }

  if (isPlainObj(value)) {
    return value;
  }
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObj(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

var parseStyleText = function parseStyleText(cssText, camel) {
  if (cssText === void 0) {
    cssText = '';
  }

  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);

      if (tmp.length > 1) {
        var k = camel ? (0, _string.camelize)(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};

function parseStyle(value) {
  if (isObj(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return parseStyleText(value);
  }

  return {};
}