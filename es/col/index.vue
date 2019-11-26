<template>
  <tag
    :type="tag"
    :style="style"
    :class="cls"
  >
    <slot />
  </tag>
</template>

<script>
import { createNamespace } from '../utils';

import Tag from '../utils/comp/tag';

const [createComponent, bem] = createNamespace('col');

export default createComponent({
  components: {
    Tag,
  },

  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    gutter() {
      const tag = this.$parent; // this.$parent = components.Tag
      return (tag && Number(tag.gutter)) || 0;
    },

    style() {
      const padding = `${this.gutter / 2}px`;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    },

    cls() {
      const { span, offset } = this;
      return bem({
        [span]: span,
        [`offset-${offset}`]: offset
      });
    }
  }
});

</script>
