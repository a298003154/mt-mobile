<template>
  <div
    role="switch"
    :aria-checked="ariaChecked"
    :style="switchStyle"
    :class="cls"
    v-bind="$attrs"
    @click="onClick"
  >
    <div :class="nodeCls">
      <loading
        v-if="loading"
        :color="loadingColor"
        :class="loadingCls"
      />
    </div>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { BLUE, GRAY_DARK } from '../utils/color';
import { switchProps } from './shared';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('switch');

export default createComponent({
  props: switchProps,

  components: {
    Loading
  },

  computed: {
    checked() {
      return this.value === this.activeValue;
    },

    ariaChecked() {
      return String(this.checked);
    },

    loadingColor() {
      const { checked, activeColor, inactiveColor } = this;
      return checked ? activeColor || BLUE : inactiveColor || GRAY_DARK;
    },

    switchStyle() {
      const {
        size, checked, activeColor, inactiveColor
      } = this;
      return {
        fontSize: size,
        backgroundColor: checked ? activeColor : inactiveColor
      };
    },

    cls() {
      const { disabled, checked } = this;
      return bem({
        on: checked,
        disabled
      });
    },

    nodeCls() {
      return bem('node');
    },

    loadingCls() {
      return bem('loading');
    }
  },

  methods: {
    onClick() {
      const {
        value, loading, disabled, activeValue, inactiveValue
      } = this;
      if (!disabled && !loading) {
        const newValue = value === activeValue ? inactiveValue : activeValue;
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      }
    }
  }
});

</script>
