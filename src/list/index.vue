<template>
  <div :class="cls">
    <div v-if="$slots.header" :class="headerCls">
      <slot name="header" />
    </div>

    <div v-if="$slots.default" :class="bodyCls">
      <slot />
    </div>

    <div v-if="$slots.footer" :class="footerCls">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('list');

export default createComponent({
  computed: {
    cls() {
      return bem();
    },

    headerCls() {
      return bem('header');
    },

    bodyCls() {
      return bem('body');
    },

    footerCls() {
      return bem('footer');
    }
  }
});

</script>
