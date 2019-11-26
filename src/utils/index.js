import Vue from 'vue';

import { camelize } from './format/string';

export const isServer = Vue.prototype.$isServer;

export function noop() {}

export function isDef(value) {
  return value !== undefined && value !== null;
}

export function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function isPlainObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function get(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

export { createNamespace } from './create/index';
export { addUnit } from './format/unit';

function stringifyArray(value) {
  let res = '';
  let stringified;
  for (let i = 0, l = value.length; i < l; i++) {
    stringified = stringifyClass(value[i]);
    if (isDef(stringified) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }
  return res;
}

function stringifyObject(value) {
  let res = '';
  Object.keys(value).forEach((key) => {
    if (value[key]) {
      if (res) res += ' ';
      res += key;
    }
  });
  return res;
}

function parseArray(value) {
  let res = {};
  value.forEach((item) => {
    res = {
      ...res,
      ...parseClass(item)
    };
  });
  return res;
}

function parseString(value) {
  const res = {};
  value.split(' ').forEach((c) => { res[c.trim()] = true; });
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

const parseStyleText = (cssText = '', camel) => {
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
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
