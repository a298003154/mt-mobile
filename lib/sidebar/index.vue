<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('sidebar');

export default createComponent({
  mixins: [ParentMixin('mtSidebar')],

  model: {
    prop: 'activeKey'
  },

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    cls() {
      return bem();
    }
  }
});

</script>
