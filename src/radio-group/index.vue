<template>
  <div role="radiogroup" :class="cls">
    <slot />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
  mixins: [ParentMixin('mtRadio')],

  props: {
    value: null,
    disabled: Boolean
  },

  computed: {
    cls() {
      return bem();
    }
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  }
});

</script>
