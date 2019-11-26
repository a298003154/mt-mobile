<template>
  <transition name="mt-dialog-bounce" @after-leave="$emit('closed')">
    <div
      v-show="value"
      role="dialog"
      :aria-labelledby="title || message"
      :class="cls"
    >
      <div v-if="title || $slots.title" :class="_getHeaderCls()">
        <slot name="title">{{title}}</slot>
      </div>

      <div v-if="message || $slots.default" :class="_getContentCls()">
        <slot>
          <div :class="_getMessageCls()">{{ message }}</div>
        </slot>
      </div>

      <div :class="footerCls">
        <slot name="footer">
          <a
            v-if="showCancelButton"
            :style="{ color: cancelButtonColor }"
            :class="_getCancelBtnCls()"
            @click="handleAction('cancel')"
          >
            <loading v-if="loading.cancel" size="large" />
            {{ cancelBtnText }}
          </a>
          <a
            v-if="showConfirmButton"
            :style="{ color: confirmButtonColor }"
            :class="_getConfirmBtnCls()"
            @click="handleAction('confirm')"
          >
            <loading v-if="loading.confirm" size="large" />
            {{ confirmBtnText }}
          </a>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { createNamespace } from '../utils';
import { PopupMixin } from '../mixins/popup';
import { CloseOnPopstateMixin } from '../mixins/close-on-popstate';
import Loading from '../loading/index';

const [createComponent, bem, t] = createNamespace('dialog');

export default createComponent({
  mixins: [PopupMixin, CloseOnPopstateMixin],

  components: {
    Loading
  },

  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  computed: {
    hasButtons() {
      return this.showCancelButton && this.showConfirmButton;
    },

    cancelBtnText() {
      return this.cancelButtonText || t('cancel');
    },

    confirmBtnText() {
      return this.confirmButtonText || t('confirm');
    },

    cls() {
      return [bem(), this.className];
    },

    footerCls() {
      return bem('footer');
    },
  },

  methods: {
    _getHeaderCls() {
      return bem('header', { isolated: !this.message && !this.$slots.default });
    },

    _getContentCls() {
      return bem('content');
    },

    _getMessageCls() {
      return bem('message', { 'has-title': this.title, [this.messageAlign]: this.messageAlign });
    },

    _getCancelBtnCls() {
      return bem('button', ['cancel']);
    },

    _getConfirmBtnCls() {
      return bem('button', ['confirm']);
    },

    onClickOverlay() {
      this.handleAction('overlay');
    },

    handleAction(action) {
      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, (state) => {
          if (state !== false) {
            this.onClose(action);
          }
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    }
  }
});

</script>
