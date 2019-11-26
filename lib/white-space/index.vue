<template>
  <div :class="cls" />
</template>

<script>
import { createNamespace, isDef } from '../utils';

const [createComponent, bem] = createNamespace('white-space');

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
