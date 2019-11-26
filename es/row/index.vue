<template>
  <tag
    :type="tag"
    :class="cls"
    :style="style"
  >
    <slot></slot>
  </tag>
</template>

<script>
import { createNamespace } from '../utils';

import Tag from '../utils/comp/tag';

const [createComponent, bem] = createNamespace('row');

export default createComponent({
  components: {
    Tag,
  },

  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },

  computed: {
    flex() {
      return this.type === 'flex';
    },

    style() {
      const margin = `-${Number(this.gutter) / 2}px`;
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {};
    },

    cls() {
      const { align, justify, flex } = this;
      return bem({
        flex,
        [`align-${align}`]: flex && align,
        [`justify-${justify}`]: flex && justify
      });
    }
  }
});

</script>
