"use strict";

exports.__esModule = true;
exports.PopupMixin = void 0;

var _context = require("./context");

var _touch = require("../touch");

var _portal = require("../portal");

var _event = require("../../utils/dom/event");

var _overlay = require("./overlay");

var _scroll = require("../../utils/dom/scroll");

var PopupMixin = {
  mixins: [_touch.TouchMixin, (0, _portal.PortalMixin)({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        (0, _overlay.updateOverlay)();
      }
    }
  })],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        _context.context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        (0, _event.on)(document, 'touchstart', this.touchStart);
        (0, _event.on)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.add('mt-overflow-hidden');
        }

        _context.context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        _context.context.lockCount--;
        (0, _event.off)(document, 'touchstart', this.touchStart);
        (0, _event.off)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.remove('mt-overflow-hidden');
        }
      }

      this.opened = false;
      (0, _overlay.closeOverlay)(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = (0, _scroll.getScrollEventTarget)(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        (0, _event.preventDefault)(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      if (this.$isServer || !this.value) {
        return;
      }

      if (this.overlay) {
        (0, _overlay.openOverlay)(this, {
          zIndex: _context.context.zIndex++,
          duration: this.duration,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        (0, _overlay.closeOverlay)(this);
      }

      this.updateZIndex();
    },
    updateZIndex: function updateZIndex() {
      var _this = this;

      this.$nextTick(function () {
        _this.$el.style.zIndex = _context.context.zIndex++;
      });
    }
  }
};
exports.PopupMixin = PopupMixin;