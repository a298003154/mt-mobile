<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script>
import { createNamespace, isDef } from '../utils';

const [createComponent, bem] = createNamespace('wing-blank');

export default createComponent({
  props: {
    size: {
      type: String,
      default: 'sm'
    }
  },

  computed: {
    cls() {
      return bem([this.size]);
    }
  }
});

</script>
