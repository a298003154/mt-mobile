<template>
  <span :class="cls">
    <slot />
    <sup
      v-if="text || dot"
      :style="supStyle"
      :class="supCls"
    >{{ txt }}</sup>
  </span>
</template>

<script>
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('badge');

export default createComponent({
  props: {
    dot: Boolean,
    hot: Boolean,
    size: {
      type: String,
      default: 'small'
    },
    text: [Number, String],
    corner: Boolean,
    overflowCount: {
      type: Number,
      default: 99
    },
    supStyle: {
      type: [Object, String],
      default: ''
    }
  },

  computed: {
    txt() {
      const { text, overflowCount, dot } = this;
      let txt = typeof text === 'number' && text > overflowCount
        ? `${overflowCount}+`
        : text;
      // dot mode don't need text
      if (dot) {
        txt = '';
      }
      return txt;
    },

    cls() {
      const {
        $slots, corner, hot, size
      } = this;
      return bem({
        'not-a-wrapper': !$slots.default,
        'corner-wrapper': corner,
        hot: !!hot,
        'corner-wrapper-large': corner && size === 'large',
      });
    },

    supCls() {
      const { dot, size, corner } = this;
      return bem('sup', {
        dot,
        'dot-large': dot && size === 'large',
        text: !dot && !corner,
        corner,
        'corner-large': corner && size === 'large',
      });
    },
  }
});

</script>
