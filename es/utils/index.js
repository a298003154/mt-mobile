import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import { camelize } from './format/string';
export var isServer = Vue.prototype.$isServer;
export function noop() {}
export function isDef(value) {
  return value !== undefined && value !== null;
}
export function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
export function isPlainObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
export function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}
export { createNamespace } from './create/index';
export { addUnit } from './format/unit';

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
    res = _extends({}, res, {}, parseClass(item));
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

export function parseClass(value) {
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
export function stringifyClass(value) {
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
        var k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};

export function parseStyle(value) {
  if (isObj(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return parseStyleText(value);
  }

  return {};
}