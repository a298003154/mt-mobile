<template>
  <transition
    :name="transitionName"
    @after-enter="onOpened"
    @after-leave="onClosed"
  >
    <div
      v-if="shouldRender"
      v-show="value"
      :style="style"
      :class="cls"
      @click="onClick"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import { createNamespace, isDef } from '../utils';
import { PopupMixin } from '../mixins/popup';

const [createComponent, bem] = createNamespace('popup');

export default createComponent({
  mixins: [PopupMixin],

  props: {
    round: Boolean,
    duration: Number,
    transition: String,
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    transitionName() {
      const { position } = this;
      return this.transition
        || (position === 'center' ? 'mt-fade' : `mt-popup-slide-${position}`);
    },

    style() {
      const style = {};
      if (isDef(this.duration)) {
        style.transitionDuration = `${this.duration}s`;
      }
      return style;
    },

    cls() {
      const { round, position } = this;
      return bem({ round, [position]: position });
    }
  },

  beforeCreate() {
    const createEmitter = eventName => event => this.$emit(eventName, event);

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  }
});

</script>
