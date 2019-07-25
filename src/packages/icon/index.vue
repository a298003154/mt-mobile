<template>
  <svg
    :class="[classPrefix, cls]"
    :style="{color: color}"
  >
    <use :xlink:href="xlinkHref"></use>
  </svg>
</template>

<script>
import './iconfont';
import { createNamespace } from '../../utils';
import { ICON, ICON_SIZE, ICON_SIZE_DEFAULT } from '../../constants/constant';

const [createComponent, bem] = createNamespace(ICON);

export default createComponent({
  props: {
    name: String,
    color: String,
    classPrefix: {
      type: String,
      default: bem()
    },
    size: {
      type: String,
      default: ICON_SIZE_DEFAULT,
      validator(value) {
        return Object.values(ICON_SIZE).indexOf(value) !== -1;
      }
    }
  },

  computed: {
    iconSize() {
      return `${this.classPrefix}--${this.size}`;
    },
    iconName() {
      return `${this.classPrefix}-${this.name}`;
    },
    cls() {
      return [this.classPrefix, this.iconName, this.iconSize];
    },
    xlinkHref() {
      return `#${this.iconName}`;
    }
  }
});
</script>
