<template>
  <div :style="style" :class="cls">
    <slot />
  </div>
</template>

<script>
import { createNamespace, addUnit } from '../utils';
import { camelize } from '../utils/format/string';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('grid');

export default createComponent({
  mixins: [ParentMixin(camelize(bem()))],

  props: {
    square: Boolean,
    gutter: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    style() {
      const { gutter } = this;

      if (gutter) {
        return {
          paddingLeft: addUnit(gutter)
        };
      }
    },

    cls() {
      return bem({ border: this.border && !this.gutter });
    }
  }
});

</script>
