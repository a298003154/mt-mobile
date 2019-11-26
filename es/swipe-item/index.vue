<template>
  <div
    :style="style"
    :class="cls"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('swipe-item');

export default createComponent({
  data() {
    return {
      offset: 0
    };
  },

  computed: {
    style() {
      const { vertical, computedWidth, computedHeight } = this.$parent;
      return {
        width: `${computedWidth}px`,
        height: vertical ? `${computedHeight}px` : '100%',
        transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
    },

    cls() {
      return bem();
    }
  },

  beforeCreate() {
    this.$parent.swipes.push(this);
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
});

</script>
