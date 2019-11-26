<template>
  <list-item
    :arrow="arrow"
    :clickable="clickable"
    :active-style="activeStyle"
    :active-class="activeClass"
    :class="cls"
    @click="onClick"
  >
    <div
      v-if="$slots['left-icon'] || leftIcon"
      :class="leftIconCls"
      @click="onClickLeftIcon"
    >
      <slot name="left-icon">
        <icon :name="leftIcon" size="xxs" />
      </slot>
    </div>

    <div
      v-if="$slots.label || label"
      :style="labelStyle"
      :class="labelCls"
    >
      <slot name="label">{{ label }}</slot>
    </div>

    <div :class="contentCls">
      <div :class="bodyCls">
        <div v-if="$slots.input" :class="controlCls">
          <slot name="input" />
        </div>
        <textarea
          v-else-if="type === 'textarea'"
          v-bind="inputBinding"
          v-on="listeners"
        />
        <input
          v-else
          v-bind="inputBinding"
          v-on="listeners"
        />

        <icon
          v-if="showClear"
          name="circle-close-fill"
          size="xxs"
          :class="clearCls"
          @touchstart="onClear" />

        <div
          v-if="$slots['right-icon'] || rightIcon"
          :class="rightIconCls"
          @click="onClickRightIcon"
        >
          <slot name="right-icon">
            <icon :name="rightIcon" size="xxs" />
          </slot>
        </div>

        <div v-if="$slots.button" :class="buttonCls">
          <slot name="button" />
        </div>
      </div>

      <div
        v-if="errorMessage"
        :class="errorMsgCls"
      >{{ errorMessage }}</div>
    </div>

  </list-item>
</template>

<script>
import Icon from '../icon/index';
import ListItem from '../list-item/index';
import { listItemProps } from '../list-item/shared';
import { preventDefault } from '../utils/dom/event';
import { resetScroll } from '../utils/dom/reset-scroll';
import {
  createNamespace, isObj, isDef, addUnit
} from '../utils';

const [createComponent, bem] = createNamespace('field');

export default createComponent({
  inheritAttrs: false,

  components: {
    Icon,
    ListItem
  },

  props: {
    ...listItemProps,
    required: Boolean,
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    value: [Number, String],
    label: [Number, String],
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      focused: false
    };
  },

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showClear() {
      return (
        this.clearable
          && this.focused
          && this.value !== ''
          && isDef(this.value)
          && !this.readonly
      );
    },

    listeners() {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      };

      delete listeners.click;

      return listeners;
    },

    inputBinding() {
      return {
        ...this.$attrs,
        ref: 'input',
        value: this.value,
        type: this.type,
        readonly: this.readonly,
        class: this.controlCls
      };
    },

    labelStyle() {
      const { labelWidth } = this;
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    },

    cls() {
      const { labelAlign } = this;
      return bem({
        error: this.error,
        disabled: this.$attrs.disabled,
        [`label-${labelAlign}`]: labelAlign,
        'min-height': this.type === 'textarea' && !this.autosize
      });
    },

    leftIconCls() {
      return bem('left-icon');
    },

    labelCls() {
      return [bem('label', this.labelAlign), this.labelClass];
    },

    contentCls() {
      return bem('content');
    },

    bodyCls() {
      return bem('body');
    },

    controlCls() {
      return bem('control', this.inputAlign);
    },

    clearCls() {
      return bem('clear');
    },

    rightIconCls() {
      return bem('right-icon');
    },

    buttonCls() {
      return bem('button');
    },

    errorMsgCls() {
      return bem('error-message', this.errorMessageAlign);
    }
  },

  methods: {
    focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },

    blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },

    // native maxlength not work when type = number
    format(target = this.$refs.input) {
      if (!target) {
        return;
      }

      let { value } = target;
      const { maxlength } = this.$attrs;

      if (this.type === 'number' && isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },

    onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);

      // hack for safari
      /* istanbul ignore if */
      if (this.readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      resetScroll();
    },

    onClick(event) {
      this.$emit('click', event);
    },

    onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },

    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },

    onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        const isValidKey = (keyCode >= 48 && keyCode <= 57)
            || (keyCode === 46 && allowPoint)
            || keyCode === 45;

        if (!isValidKey) {
          preventDefault(event);
        }
      }

      // trigger blur after click keyboard search button
      /* istanbul ignore next */
      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },

    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = `${height}px`;
      }
    }
  }
});

</script>
