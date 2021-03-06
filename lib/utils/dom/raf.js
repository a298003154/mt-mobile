"use strict";

exports.__esModule = true;
exports.doubleRaf = doubleRaf;
exports.raf = raf;
exports.cancelRaf = cancelRaf;

var _ = require("..");

/**
 * requestAnimationFrame polyfill
 */
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout; // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}

function raf(fn) {
  return iRaf.call(root, fn);
}

function cancelRaf(id) {
  iCancel.call(root, id);
}