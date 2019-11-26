<template>
  <popup
    :value="value"
    :round="round"
    position="bottom"
    :overlay="overlay"
    :lazy-render="lazyRender"
    :lock-scroll="lockScroll"
    :get-container="getContainer"
    :close-on-click-overlay="closeOnClickOverlay"
    :class="popupCls"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div v-if="title" :class="_getHeaderCls()">
      {{ title }}
    </div>

    <div
      v-for="(item, index) in actions"
      :key="index"
      :class="_getActionCls(item)"
      @click.stop="onClickOption(item, index)"
    >
      <loading v-if="item.loading" size="xs" />
      <span v-if="!item.loading && item.name" :class="nameCls">{{ item.name }}</span>
    </div>

    <div v-if="$slots.default" :class="_getContentCls()">
      <slot />
    </div>

    <div
      v-if="cancelText"
      :class="_getCancelTextCls()"
      @click="onCancel"
    >{{ cancelText }}</div>
  </popup>
</template>

<script>
import { createNamespace } from '../utils';
import { PopupMixin } from '../mixins/popup';

import Loading from '../loading/index';
import Popup from '../popup/index';

const [createComponent, bem, t] = createNamespace('action-sheet');

export default createComponent({
  components: {
    Loading,
    Popup,
  },

  props: {
    ...PopupMixin.props,
    title: String,
    round: {
      type: Boolean,
      default: true
    },
    actions: {
      type: Array,
      default: () => []
    },
    duration: Number,
    cancelText: String,
    getContainer: [String, Function],
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: Boolean,
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
    popupCls() {
      return bem({ 'safe-area-inset-bottom': this.safeAreaInsetBottom });
    },

    nameCls() {
      return bem('name');
    }
  },

  methods: {
    _getHeaderCls() {
      return [bem('header'), 'mt-hairline--bottom'];
    },

    _getActionCls(item) {
      return [bem('item', { disabled: item.disabled || item.loading }), item.className, 'mt-hairline--top'];
    },

    _getContentCls() {
      return bem('content');
    },

    _getCancelTextCls() {
      return bem('cancel');
    },

    onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    },

    onClickOption(item, index) {
      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      this.$emit('select', item, index);

      if (this.closeOnClickAction) {
        this.$emit('input', false);
      }
    }
  }
});

</script>
