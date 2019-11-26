<template>
  <div
    :style="style"
    :class="cls"
    @click="onClick"
  >
    <div :style="contentStyle" :class="contentCls">
      <slot>
        <slot name="icon">
          <icon
            v-if="icon"
            :name="icon"
            :class="iconCls"
          />
        </slot>
        <slot name="text">
          <span v-if="text" :class="textCls">{{ text }}</span>
        </slot>
      </slot>
    </div>
  </div>
</template>

<script>
import { createNamespace, addUnit } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Icon from '../icon/index';

const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  mixins: [ChildrenMixin('mtGrid')],

  components: {
    Icon
  },

  props: {
    ...routeProps,
    icon: String,
    text: String
  },

  computed: {
    style() {
      const { square, gutter, columnNum } = this.parent;
      const percent = `${100 / columnNum}%`;

      const style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },

    contentStyle() {
      const { square, gutter } = this.parent;

      if (square && gutter) {
        const gutterValue = addUnit(gutter);

        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    },

    cls() {
      return [bem({ square: this.square })];
    },

    contentCls() {
      const {
        center, border, square, gutter, clickable
      } = this.parent;
      return bem('content', {
        center,
        square,
        clickable,
        surround: border && gutter,
        border
      });
    },

    iconCls() {
      return bem('icon');
    },

    textCls() {
      return bem('text');
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },
  }
});

</script>
