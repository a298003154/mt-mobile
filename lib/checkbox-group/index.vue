<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  mixins: [ParentMixin('mtCheckbox')],

  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    cls() {
      return bem();
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  }
});

</script>
