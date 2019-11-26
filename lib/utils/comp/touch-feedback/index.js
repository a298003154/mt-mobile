"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncPlaceholder = require("../../dom/async-placeholder");

var _index = require("../../index");

var _vnode = require("../../vnode");

var _shared = require("./shared");

var isNotTextNode = function isNotTextNode(c) {
  return c.tag || (0, _asyncPlaceholder.isAsyncPlaceholder)(c);
};

var _default = {
  name: 'touch-feedback',
  abstract: true,
  props: (0, _extends2.default)({}, _shared.touchFeedbackProps, {
    disabled: {
      type: Boolean,
      default: false
    }
  }),
  data: function data() {
    return {
      active: false,
      prevStyle: {},
      events: {}
    };
  },
  methods: {
    triggerEvent: function triggerEvent(type, isActive, e) {
      this.$emit(type, e);

      if (isActive !== this.active) {
        this.active = isActive;
      }
    },
    onTouchStart: function onTouchStart(e) {
      this.triggerEvent('touchstart', true, e);
    },
    onTouchMove: function onTouchMove(e) {
      this.triggerEvent('touchmove', false, e);
    },
    onTouchEnd: function onTouchEnd(e) {
      this.triggerEvent('touchend', false, e);
    },
    onTouchCancel: function onTouchCancel(e) {
      this.triggerEvent('touchcancel', false, e);
    },
    onMouseDown: function onMouseDown(e) {
      this.triggerEvent('mousedown', true, e);
    },
    onMouseUp: function onMouseUp(e) {
      this.triggerEvent('mouseup', false, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      this.triggerEvent('mouseleave', false, e);
    }
  },
  render: function render() {
    var $slots = this.$slots,
        $props = this.$props;
    var activeClass = $props.activeClass,
        activeStyle = $props.activeStyle,
        disabled = $props.disabled;
    var children = $slots.default;

    if (!children) {
      return;
    }

    children = children.filter(isNotTextNode);

    if (!children.length) {
      return;
    }

    var child = children[0];
    var events = disabled ? {} : {
      touchstart: this.onTouchStart,
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd,
      touchcancel: this.onTouchEnd,
      mousedown: this.onMouseDown,
      mouseup: this.onMouseUp,
      mouseleave: this.onMouseLeave
    };
    var clone = null;
    var cls = {};
    var style = {};
    child.data.on = (0, _extends2.default)({}, child.data.on || {}, {}, events);

    if (!disabled && this.active) {
      clone = (0, _vnode.cloneVNode)(child);

      if (activeStyle !== false) {
        style = (0, _extends2.default)({}, child.data.style, {}, (0, _index.parseStyle)(activeStyle));
        cls = (0, _extends2.default)({}, (0, _index.parseClass)(child.data.class), {}, (0, _index.parseClass)(activeClass));
        clone.data = (0, _extends2.default)({}, child.data, {
          class: cls,
          style: style
        });
        return clone;
      }

      return clone;
    }

    return child;
  }
};
exports.default = _default;