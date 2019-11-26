<template>
  <transition name="mt-fade">
    <div
      v-show="show"
      v-bind="$attrs"
      v-on="$listeners"
      :style="style"
      :class="cls"
      @touchmove="preventTouchMove"
    />
  </transition>
</template>

<script>
import { createNamespace, isDef } from '../utils';
import { preventDefault } from '../utils/dom/event';

const [createComponent, bem] = createNamespace('overlay');

export default createComponent({
  props: {
    show: Boolean,
    duration: [Number, String],
    className: null,
    customStyle: null,
    zIndex: {
      type: [Number, String],
      default: 1
    },
  },

  computed: {
    style() {
      const style = {
        zIndex: this.zIndex,
        ...this.customStyle
      };

      if (isDef(this.duration)) {
        style.animationDuration = `${this.duration}s`;
      }

      return style;
    },

    cls() {
      return [bem(), this.className];
    },
  },

  methods: {
    preventTouchMove(event) {
      preventDefault(event, true);
    }
  }
});

</script>
