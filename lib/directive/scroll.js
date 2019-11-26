"use strict";

exports.__esModule = true;
exports.default = void 0;

var _scroll = require("../utils/dom/scroll");

function unbind(el) {
  var _el$onScroll = el.onScroll,
      callback = _el$onScroll.callback,
      options = _el$onScroll.options,
      target = _el$onScroll.target;
  if (!target) return;
  target.removeEventListener('scroll', callback, options);
}

function bindScroll(el, binding) {
  var callback = typeof binding.value === 'function' ? binding.value : binding.value.callback;
  var options = binding.value.options || {
    passive: true
  };
  var target = binding.value.target || window;
  if (target === 'undefined') return;

  if (target instanceof Element) {
    target = (0, _scroll.getScrollEventTarget)(target);
  } else if (target !== window) {
    target = document.querySelector(target);
  }

  var handleScroll = function handleScroll(e) {
    callback(target, e);
  };

  if (el.onScroll && target !== el.onScroll.target) unbind(el, binding);
  target.addEventListener('scroll', handleScroll, options);
  el.onScroll = {
    callback: handleScroll,
    options: options,
    target: target
  };
}

var _default = {
  name: 'scroll',
  inserted: bindScroll,
  update: bindScroll,
  unbind: unbind
};
exports.default = _default;