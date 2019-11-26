<template>
  <transition
    name="mt-fade"
    @after-enter="onOpened"
    @after-leave="onClosed"
  >
    <div
      v-if="shouldRender"
      v-show="value"
      v-resize="setStyle"
      v-scroll="{target: trigger, callback: setStyle}"
      :style="style"
      :class="cls"
      v-on="$listeners"
    >
      <div :class="contentCls">
        <div :class="arrowCls" />
        <div :class="innerCls">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { createNamespace, isDef } from '../utils';
import { camelize } from '../utils/format/string';
import { PopupMixin } from '../mixins/popup';
import { ParentMixin } from '../mixins/relation';
import { ClickOutsideMixin } from '../mixins/click-outside';
import scroll from '../directive/scroll';
import resize from '../directive/resize';

const [createComponent, bem] = createNamespace('popover');
const SPACE = 8;
const TOP = 'top';
const TOP_LEFT = 'top-left';
const TOP_RIGHT = 'top-right';
const BOTTOM = 'bottom';
const BOTTOM_LEFT = 'bottom-left';
const BOTTOM_RIGHT = 'bottom-right';
const LEFT = 'left';
const LEFT_TOP = 'left-top';
const LEFT_BOTTOM = 'left-bottom';
const RIGHT = 'right';
const RIGHT_TOP = 'right-top';
const RIGHT_BOTTOM = 'right-bottom';

export default createComponent({
  mixins: [
    PopupMixin,
    ParentMixin(camelize(bem())),
    ClickOutsideMixin({
      event: 'click',
      method: 'onClickOutside'
    })
  ],

  directives: {
    scroll,
    resize
  },

  props: {
    overlay: {
      type: Boolean,
      default: true,
    },
    duration: Number,
    trigger: null,
    space: {
      type: Number,
      default: 0,
    },
    closeOnClickAction: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: BOTTOM_RIGHT,
      validator(val) {
        return [
          TOP,
          TOP_LEFT,
          TOP_RIGHT,
          BOTTOM,
          BOTTOM_LEFT,
          BOTTOM_RIGHT,
          LEFT,
          LEFT_TOP,
          LEFT_BOTTOM,
          RIGHT,
          RIGHT_TOP,
          RIGHT_BOTTOM
        ].indexOf(val) !== -1;
      }
    }
  },

  data() {
    return {
      realPlacement: this.placement
    };
  },

  computed: {
    style() {
      const style = {};
      if (isDef(this.duration)) {
        style.transitionDuration = `${this.duration}s`;
      }
      return style;
    },
    cls() {
      return bem([this.realPlacement]);
    },
    contentCls() {
      return bem('content');
    },
    arrowCls() {
      return bem('arrow');
    },
    innerCls() {
      return bem('inner');
    },
  },

  beforeCreate() {
    const createEmitter = eventName => event => this.$emit(eventName, event);

    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },

  mounted() {
    this.setStyle();
  },

  updated() {
    setTimeout(() => {
      this.setStyle();
    }, 0);
  },

  methods: {
    onSelect(e, index) {
      this.$emit('select', e, index);
      if (this.closeOnClickAction) {
        this.close();
      }
    },

    getLeftPosition(width, react) {
      let left = 0;
      const maxLeft = window.innerWidth - SPACE - width;
      const minLeft = SPACE;
      switch (this.placement) {
        case LEFT:
        case LEFT_TOP:
        case LEFT_BOTTOM:
          left = react.left - width - this.space;
          if (left < minLeft) {
            left = react.left + react.width + this.space;
            this.realPlacement = this.placement.replace(LEFT, RIGHT);
          } else {
            this.realPlacement = this.placement;
          }
          break;
        case RIGHT:
        case RIGHT_TOP:
        case RIGHT_BOTTOM:
          left = react.left + react.width;
          if (left > maxLeft) {
            left = react.left - width - this.space;
            this.realPlacement = this.placement.replace(RIGHT, LEFT);
          } else {
            left = react.left + react.width + this.space;
            this.realPlacement = this.placement;
          }
          break;
        case TOP:
        case BOTTOM:
          left = react.left + react.width / 2 - width / 2;
          break;
        case BOTTOM_LEFT:
        case TOP_LEFT:
          left = react.left;
          break;
        case BOTTOM_RIGHT:
        case TOP_RIGHT:
          left = react.left + react.width - width;
          break;
      }
      left = Math.min(maxLeft, left);
      left = Math.max(minLeft, left);
      return left;
    },

    getTopPosition(height, react) {
      let top = 0;
      const maxTop = window.innerHeight - SPACE - height;
      const minTop = SPACE;
      switch (this.placement) {
        case TOP:
        case TOP_LEFT:
        case TOP_RIGHT:
          top = react.top - height - this.space;
          if (top < minTop) {
            top = react.top + react.height + this.space;
            this.realPlacement = this.placement.replace(TOP, BOTTOM);
          } else {
            this.realPlacement = this.placement;
          }

          break;
        case BOTTOM:
        case BOTTOM_LEFT:
        case BOTTOM_RIGHT:
          top = react.top + react.height + this.space;
          if (top > maxTop) {
            top = react.top - height - this.space;
            this.realPlacement = this.placement.replace(BOTTOM, TOP);
          } else {
            this.realPlacement = this.placement;
          }
          break;
        case LEFT:
        case RIGHT:
          top = react.top + react.height / 2 - height / 2;
          break;
        case LEFT_TOP:
        case RIGHT_TOP:
          top = react.top;
          break;
        case LEFT_BOTTOM:
        case RIGHT_BOTTOM:
          top = react.top + react.height - height;
          break;
      }
      top = Math.min(maxTop, top);
      top = Math.max(minTop, top);
      return top;
    },

    onClickOutside(e) {
      if (this.trigger && this.trigger.contains(e.target)) return;
      this.close();
    },

    setStyle() {
      if (!this.value && this.value !== '') return;
      const el = this.$el;
      const triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      const react = triggerEl.getBoundingClientRect();
      if (react.top < -react.height || react.top > window.innerHeight) this.close();
      el.style.top = `${this.getTopPosition(el.offsetHeight, react)}px`;
      el.style.left = `${this.getLeftPosition(el.offsetWidth, react)}px`;
    }
  }
});

</script>
