<template>
  <div v-if="left.length || right.length">
    <swipeout
      ref="swipeout"
      :prefix-cls="cls"
      :left="left"
      :right="right"
      :auto-close="autoClose"
      :disabled="disabled"
      @open="_onOpen"
      @close="_onClose"
    >
      <slot />
    </swipeout>
  </div>
  <div v-else :class="cls">
    <slot />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

import Swipeout from '../utils/comp/swipeout';

const [createComponent, bem] = createNamespace('swipe-action');

export default createComponent({
  components: {
    Swipeout
  },

  props: {
    name: {
      type: [Number, String],
      default: ''
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    left: {
      type: Array,
      default: () => []
    },
    right: {
      type: Array,
      default: () => []
    },
    onClose: Function,
    onOpen: Function,
  },

  computed: {
    cls() {
      return bem();
    }
  },

  mounted() {
    this.close = this.$refs.swipeout.close;
  },

  methods: {
    _onOpen(position) {
      this.onOpen && this.onOpen(position);
    },
    _onClose(position) {
      this.onClose && this.onClose(position, { name: this.name });
    }
  }
});

</script>
