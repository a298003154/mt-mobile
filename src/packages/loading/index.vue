<template>
  <div :class="cls">
    <span :class="spanCls" :style="{color}">
      <icon v-if="!isCircular" name="spinner" :size="size"></icon>
      <svg v-else viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </span>
    <span v-if="$slots.default" :class="textCls">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { createNamespace, addUnit } from '../../utils';
import { GRAY } from '../../utils/color';
import {
  ICON, ICON_SIZE, ICON_SIZE_DEFAULT, LOADING, LOAIDNG_CIRCULAR, LOADING_SPINNER
} from '../../constants/constant';

import Icon from '../icon';

const [createComponent, bem] = createNamespace(LOADING);

export default createComponent({
  components: {
    Icon
  },

  props: {
    vertical: Boolean,
    size: {
      type: String,
      default: ICON_SIZE_DEFAULT,
      validator(value) {
        return Object.values(ICON_SIZE).indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: LOAIDNG_CIRCULAR,
      validator(value) {
        return [LOAIDNG_CIRCULAR, LOADING_SPINNER].indexOf(value) !== -1;
      }
    },
    color: {
      type: String,
      default: GRAY
    }
  },

  computed: {
    isCircular() {
      return this.type === LOAIDNG_CIRCULAR;
    },
    cls() {
      return bem([this.type, { vertical: this.vertical }]);
    },
    spanCls() {
      return bem(this.type, this.size);
    },
    textCls() {
      return bem('text');
    },
  },
});
</script>
