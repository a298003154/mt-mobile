import _extends from "@babel/runtime/helpers/esm/extends";
import { isAsyncPlaceholder } from '../../dom/async-placeholder';
import { parseStyle, parseClass } from '../../index';
import { cloneVNode } from '../../vnode';
import { touchFeedbackProps } from './shared';

var isNotTextNode = function isNotTextNode(c) {
  return c.tag || isAsyncPlaceholder(c);
};

export default {
  name: 'touch-feedback',
  abstract: true,
  props: _extends({}, touchFeedbackProps, {
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
    child.data.on = _extends({}, child.data.on || {}, {}, events);

    if (!disabled && this.active) {
      clone = cloneVNode(child);

      if (activeStyle !== false) {
        style = _extends({}, child.data.style, {}, parseStyle(activeStyle));
        cls = _extends({}, parseClass(child.data.class), {}, parseClass(activeClass));
        clone.data = _extends({}, child.data, {
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