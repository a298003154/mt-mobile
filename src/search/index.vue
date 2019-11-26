<template>
  <div :style="{ background }" :class="cls">
    <div :class="contentCls">
      <div v-if="$slots.label || label" :class="labelCls">
        <slot>{{ label }}</slot>
      </div>
      <field
        type="search"
        :border="false"
        :value="value"
        :left-icon="leftIcon"
        :right-icon="rightIcon"
        :clearable="clearable"
        v-bind="$attrs"
        v-on="$listeners"
        @keypress="onKeypress"
      >
        <template #left-icon>
          <slot name="left-icon" />
        </template>
        <template #right-icon>
          <slot name="right-icon" />
        </template>
      </field>
    </div>

    <div v-if="showAction" :class="actionCls">
      <slot name="action">
        <div @click="onCancel">{{ cancelText }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';
import Field from '../field';

const [createComponent, bem, t] = createNamespace('search');

export default createComponent({
  inheritAttrs: false,

  components: {
    Field
  },

  props: {
    value: String,
    label: String,
    rightIcon: String,
    actionText: String,
    showAction: Boolean,
    shape: {
      type: String,
      default: 'square'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: '#fff'
    },
    leftIcon: {
      type: String,
      default: 'search'
    }
  },

  computed: {
    cancelText() {
      return this.actionText || t('cancel');
    },

    cls() {
      return bem({ 'show-action': this.showAction });
    },

    contentCls() {
      return bem('content', this.shape);
    },

    labelCls() {
      return bem('label');
    },

    actionCls() {
      return bem('action');
    },
  },

  methods: {
    onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        preventDefault(event);
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },

    onCancel() {
      this.$emit('input', '');
      this.$emit('cancel');
    }
  }
});

</script>
