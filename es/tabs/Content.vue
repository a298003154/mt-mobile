<template>
  <div :class="contentCls" v-on="listeners">
    <div
      v-if="animated"
      :style="style"
      :class="trackCls"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';

const [createComponent, bem] = createNamespace('tabs');
const MIN_SWIPE_DISTANCE = 50;

export default createComponent({
  mixins: [TouchMixin],

  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },

  computed: {
    style() {
      if (this.animated) {
        return {
          transform: `translate3d(${-1 * this.currentIndex * 100}%, 0, 0)`,
          transitionDuration: `${this.duration}s`
        };
      }
    },

    contentCls() {
      return bem('content', { animated: this.animated });
    },

    trackCls() {
      return bem('track');
    },

    listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },

  methods: {
    // watch swipe touch end
    onTouchEnd() {
      const { direction, deltaX, currentIndex } = this;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    }
  }
});

</script>
