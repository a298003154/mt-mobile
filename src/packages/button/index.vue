<template>
  <tag
    :type="tag"
    :class="cls"
    @click="onClick"
  >
    <loading
      v-if="loading"
      :type="loadingType"
      :size="loadingSize || iconSize"
      :color="loadingColor"
      :class="_getLoadingCls()"
    ></loading>
    <mt-icon
      v-else-if="icon"
      :name="icon"
      :size="iconSize"
      :class="_getIconCls()"
    ></mt-icon>

    <span
      v-if="$slots.default || text"
      :class="textCls"
    >
      <slot>{{text}}</slot>
    </span>
  </tag>
</template>

<script>
import { createNamespace } from '../../utils';
import { route, routeProps } from '../../utils/router';
import Tag from '../../utils/tag';
import {
  ICON, ICON_SIZE, BUTTON_TYPE, BUTTON_SIZE, LOADING_SPINNER, LOAIDNG_CIRCULAR, LOADING
} from '../../constants/constant';
import { CLICK } from '../../constants/event';

import Loading from '../loading';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('button');

export default createComponent({
  components: {
    Tag
  },

  props: {
    ...routeProps,
    text: String,
    icon: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingSize: String,
    loadingType: String,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: BUTTON_TYPE.DEFAULT
    },
    size: {
      type: String,
      default: BUTTON_SIZE.NORMAL
    },
  },

  computed: {
    cls() {
      const {
        block, plain, round, square, hairline, disabled, type, size
      } = this;
      return [
        bem([
          type,
          size,
          {
            disabled,
            hairline,
            block,
            plain,
            round,
            square
          }
        ]),
        { 'mt-hairline-surround': hairline }
      ];
    },
    textCls() {
      return bem('text');
    },
    iconSize() {
      return ICON_SIZE.XS;
    },
    loadingColor() {
      return this.type === 'default' ? undefined : '';
    }
  },

  methods: {
    _getLoadingCls() {
      return bem(LOADING);
    },
    _getIconCls() {
      return bem(ICON);
    },
    onClick(e) {
      if (!this.disabled && !this.loading) {
        this.$emit(CLICK, e);
        route(this.$route, this);
      }
    }
  }
});
</script>
