<template>
  <div
    role="separator"
    :class="cls"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';

const [createComponent, bem] = createNamespace('divider');

export default createComponent({
  props: {
    dashed: Boolean,
    hairline: {
      type: Boolean,
      default: true
    },
    contentPosition: {
      type: String,
      default: 'center'
    }
  },

  computed: {
    cls() {
      return bem({
        dashed: this.dashed,
        hairline: this.hairline,
        [`content-${this.contentPosition}`]: this.$slots.default
      });
    }
  }
});

</script>
