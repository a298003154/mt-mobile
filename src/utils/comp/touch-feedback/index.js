import { isAsyncPlaceholder } from '../../dom/async-placeholder';
import { parseStyle, parseClass } from '../../index';
import { cloneVNode } from '../../vnode';
import { touchFeedbackProps } from './shared';

const isNotTextNode = c => c.tag || isAsyncPlaceholder(c);

export default {
  name: 'touch-feedback',

  abstract: true,

  props: {
    ...touchFeedbackProps,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      active: false,
      prevStyle: {},
      events: {}
    };
  },

  methods: {
    triggerEvent(type, isActive, e) {
      this.$emit(type, e);
      if (isActive !== this.active) {
        this.active = isActive;
      }
    },

    onTouchStart(e) {
      this.triggerEvent('touchstart', true, e);
    },

    onTouchMove(e) {
      this.triggerEvent('touchmove', false, e);
    },

    onTouchEnd(e) {
      this.triggerEvent('touchend', false, e);
    },

    onTouchCancel(e) {
      this.triggerEvent('touchcancel', false, e);
    },

    onMouseDown(e) {
      this.triggerEvent('mousedown', true, e);
    },

    onMouseUp(e) {
      this.triggerEvent('mouseup', false, e);
    },

    onMouseLeave(e) {
      this.triggerEvent('mouseleave', false, e);
    },
  },

  render() {
    const { $slots, $props } = this;
    const { activeClass, activeStyle, disabled } = $props;

    let children = $slots.default;

    if (!children) {
      return;
    }

    children = children.filter(isNotTextNode);

    if (!children.length) {
      return;
    }

    const child = children[0];

    const events = disabled ? {} : {
      touchstart: this.onTouchStart,
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd,
      touchcancel: this.onTouchEnd,
      mousedown: this.onMouseDown,
      mouseup: this.onMouseUp,
      mouseleave: this.onMouseLeave,
    };

    let clone = null;
    let cls = {};
    let style = {};

    child.data.on = {
      ...(child.data.on || {}),
      ...events
    };

    if (!disabled && this.active) {
      clone = cloneVNode(child);

      if (activeStyle !== false) {
        style = {
          ...child.data.style,
          ...parseStyle(activeStyle)
        };

        cls = {
          ...parseClass(child.data.class),
          ...parseClass(activeClass),
        };

        clone.data = {
          ...child.data,
          class: cls,
          style
        };

        return clone;
      }

      return clone;
    }

    return child;
  }
};
