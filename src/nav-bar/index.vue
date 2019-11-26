<template>
  <div
    :style="style"
    :class="cls"
    v-bind="$attrs"
  >
    <div :class="leftCls" @click='$emit("click-left")'>
      <slot name="left">
        <icon
          v-if="leftArrow"
          name="left"
          size="xxs"
          :class="arrowCls"
        />
        <span v-if="leftText" :class="textCls">{{ leftText }}</span>
      </slot>
    </div>

    <div :class="titleCls">
      <slot>{{ title }}</slot>
    </div>

    <div :class="rightCls" @click='$emit("click-right")'>
      <slot name="right">
        <span v-if="rightText" :class="textCls">{{ rightText }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('nav-bar');

export default createComponent({
  components: {
    Icon,
  },

  props: {
    dark: Boolean,
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex
      };
    },

    cls() {
      return [
        bem({
          fixed: this.fixed,
          dark: this.dark
        }),
        { 'border-bottom': this.border }
      ];
    },

    leftCls() {
      return bem('left');
    },

    rightCls() {
      return bem('right');
    },

    titleCls() {
      return bem('title');
    },

    arrowCls() {
      return bem('arrow');
    },

    textCls() {
      return bem('text');
    }
  }
});

</script>
