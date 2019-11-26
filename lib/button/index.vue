<template>
  <touch-feedback
    :disabled="disabled"
    :active-style="activeStyle"
    :active-class="activeCls"
  >
    <tag
      role="button"
      :type="tag"
      :class="cls"
      @click="onClick"
    >
      <loading
        v-if="loading"
        :type="loadingType"
        :size="loadingSize || iconSizeDefault"
        :color="loadingColor"
        :class="_getLoadingCls()"
      />
      <icon
        v-else-if="icon"
        :name="icon"
        :class="_getIconCls()"
      />

      <span v-if="$slots.default || text" :class="textCls">
        <slot>{{ text }}</slot>
      </span>
    </tag>
  </touch-feedback>
</template>

<script>
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { touchFeedbackProps } from '../utils/comp/touch-feedback/shared';
import {
  ICON, ICON_SIZE, BUTTON, BUTTON_TYPE, BUTTON_SIZE, LOADING_SPINNER, LOAIDNG_CIRCULAR, LOADING
} from '../constant/constant';

import TouchFeedback from '../utils/comp/touch-feedback';
import Tag from '../utils/comp/tag';
import Loading from '../loading/index';
import Icon from '../icon/index';

const [createComponent, bem] = createNamespace(BUTTON);

export default createComponent({
  components: {
    TouchFeedback,
    Tag,
    Icon,
    Loading,
  },

  props: {
    ...routeProps,
    ...touchFeedbackProps,
    text: String,
    icon: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
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
        block, plain, round, square, disabled, type, size
      } = this;
      return bem([
        type,
        size,
        {
          disabled,
          block,
          plain,
          round,
          square
        }
      ]);
    },

    defaultActiveCls() {
      return `${bem()}--active`;
    },

    activeCls() {
      return this.activeClass || (this.activeStyle ? this.defaultActiveCls : undefined);
    },

    textCls() {
      return bem('text');
    },

    iconSizeDefault() {
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
        this.$emit('click', e);
        route(this.$route, this);
      }
    }
  }
});

</script>
