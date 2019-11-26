<template>
  <transition
    name="mt-fade"
    @after-enter="onAfterEnter"
    @after-leave="onAfterLeave"
  >
    <div v-show="value" :class="cls">
      <icon
        v-if="hasIcon"
        :name="iconName"
        size="md"
        :class-prefix="iconPrefix"
      />
      <loading
        v-else-if="isLoading"
        size="md"
        color="white"
        :type="loadingType"
        :class="_getLoadingCls()"
      />

      <div v-if="hasMessage || $slots.default" :class="_getTextCls()">
        <div v-if="type === 'html'" v-html="message" />
        <slot v-else>{{ message }}</slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { createNamespace, isDef } from '../utils';
import { PopupMixin } from '../mixins/popup';

import Icon from '../icon';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('toast');

export default createComponent({
  mixins: [PopupMixin],

  components: {
    Icon,
    Loading,
  },

  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      clickable: false
    };
  },

  computed: {
    hasIcon() {
      const { icon, type } = this;
      return icon || (type === 'success' || type === 'fail');
    },

    hasMessage() {
      return isDef(this.message) && this.message !== '';
    },

    isLoading() {
      return this.type === 'loading';
    },

    iconName() {
      const { icon, type } = this;
      if (icon) {
        return icon;
      }
      if (type === 'fail') {
        return 'exclamation-circle';
      }
      if (type === 'success') {
        return 'check-circle';
      }
    },

    cls() {
      const {
        position, hasIcon, type, className
      } = this;
      return [
        bem([position, { text: !hasIcon && type !== 'loading' }]),
        className
      ];
    }
  },

  mounted() {
    this.toggleClickable();
  },

  destroyed() {
    this.toggleClickable();
  },

  watch: {
    value() {
      this.toggleClickable();
    },

    forbidClick() {
      this.toggleClickable();
    }
  },

  methods: {
    _getIconCls() {
      return bem('icon');
    },

    _getLoadingCls() {
      return bem('loading');
    },

    _getTextCls() {
      return bem('text');
    },

    toggleClickable() {
      const clickable = this.value && this.forbidClick;
      if (this.clickable !== clickable) {
        this.clickable = clickable;
        const action = clickable ? 'add' : 'remove';
        document.body.classList[action]('mt-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },

    onAfterLeave() {
      this.$emit('closed');
    }
  }
});

</script>
