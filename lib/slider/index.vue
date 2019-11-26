<template>
  <div
    :style="style"
    :class="cls"
    @click="onClick"
  >
    <div :style="barStyle" :class="barCls">
      <div
        role="slider"
        :tabindex="disabled ? -1 : 0"
        :aria-valuemin="min"
        :aria-valuenow="value"
        :aria-valuemax="max"
        :aria-orientation="vertical ? 'vertical' : 'horizontal'"
        :class="buttonWrapperCls"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
        <slot name="button">
          <div :class="buttonCls" />
        </slot>
    </div>
  </div>
  </div>
</template>

<script>
import { createNamespace, addUnit } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { preventDefault } from '../utils/dom/event';

const [createComponent, bem] = createNamespace('slider');

export default createComponent({
  mixins: [TouchMixin],

  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    }
  },

  computed: {
    range() {
      return this.max - this.min;
    },

    style() {
      return {
        background: this.inactiveColor
      };
    },

    barStyle() {
      const {
        vertical, value, min, range, barHeight, activeColor
      } = this;
      const mainAxis = vertical ? 'height' : 'width';
      const crossAxis = vertical ? 'width' : 'height';

      return {
        [mainAxis]: `${((value - min) * 100) / range}%`,
        [crossAxis]: addUnit(barHeight),
        background: activeColor
      };
    },

    cls() {
      const { disabled, vertical } = this;
      return bem({ disabled, vertical });
    },

    barCls() {
      return bem('bar');
    },

    buttonWrapperCls() {
      return bem('button-wrapper');
    },

    buttonCls() {
      return bem('button');
    }
  },

  created() {
    // format initial value
    this.updateValue(this.value);
  },

  methods: {
    onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },

    onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? this.deltaY : this.deltaX;
      const total = this.vertical ? rect.height : rect.width;
      const diff = (delta / total) * this.range;

      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },

    onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },

    onClick(event) {
      event.stopPropagation();

      if (this.disabled) return;

      const rect = this.$el.getBoundingClientRect();
      const delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      const total = this.vertical ? rect.height : rect.width;
      const value = (delta / total) * this.range + this.min;

      this.startValue = this.value;
      this.updateValue(value, true);
    },

    updateValue(value, end) {
      value = this.format(value);

      if (value !== this.value) {
        this.$emit('input', value);
      }

      if (end && value !== this.startValue) {
        this.$emit('change', value);
      }
    },

    format(value) {
      return (
        Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step
      );
    }
  }
});

</script>
