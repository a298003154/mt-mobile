<template>
  <div :class="cls">
    <span :style="{ color }" :class="spanCls">
      <icon
        v-if="!isCircular"
        name="spinner"
        :size="size"
      />
      <svg v-else viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </span>
    <span
      v-if="$slots.default"
      :style="textStyle"
      :class="textCls"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import { createNamespace, addUnit } from '../utils';
import { GRAY_DARK } from '../utils/color';
import {
  ICON, ICON_SIZE, ICON_SIZE_DEFAULT, LOADING, LOAIDNG_CIRCULAR, LOADING_SPINNER
} from '../constant/constant';

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
      default: GRAY_DARK
    },
    textSize: [Number, String],
  },

  computed: {
    isCircular() {
      return this.type === LOAIDNG_CIRCULAR;
    },

    textStyle() {
      return {
        fontSize: addUnit(this.textSize)
      };
    },

    cls() {
      return bem({ vertical: this.vertical });
    },

    spanCls() {
      return bem(this.type, this.size);
    },

    textCls() {
      return bem('text');
    }
  }
});

</script>
