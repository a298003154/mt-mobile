<template>
  <touch-feedback
    :disabled="!clickable"
    :active-class="activeCls"
    :active-style="activeStyle"
  >
    <div :class="cls" @click="onClick">
      <div v-if="$slots.thumb || thumb" :class="_getThumbCls()">
        <slot name="thumb">
          <img :src="thumb" alt="thumb" />
        </slot>
      </div>

      <div :class="lineCls">
        <div
          v-if="$slots.default !== undefined"
          :style="contentStyle"
          :class="contentCls"
        >
          <slot />

          <div v-if="$slots.brief" :class="briefCls">
            <slot name="brief" />
          </div>
        </div>

        <div v-if="$slots.extra !== undefined" :class="extraCls">
          <slot name="extra" />
        </div>

        <div
          v-if="arrow"
          :class="arrowCls"
          aria-hidden="true"
        />
      </div>
    </div>
  </touch-feedback>
</template>

<script>
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { listItemProps } from './shared';

import TouchFeedback from '../utils/comp/touch-feedback';

const [createComponent, bem] = createNamespace('list-item');

export default createComponent({
  components: {
    TouchFeedback,
  },

  props: {
    ...routeProps,
    ...listItemProps,
  },

  computed: {
    cls() {
      const { disabled, error, align } = this;
      return bem([
        {
          disabled,
          error,
        },
        align
      ]);
    },

    activeCls() {
      return [`${bem()}--active`, this.activeClass];
    },

    lineCls() {
      const { wrap, multipleLine } = this;
      return bem(
        'line', {
          multiple: multipleLine,
          wrap
        }
      );
    },

    arrowCls() {
      const { arrow } = this;
      return bem('arrow', {
        horizontal: arrow === 'horizontal',
        down: arrow === 'down',
        up: arrow === 'up'
      });
    },

    contentCls() {
      return [bem('content'), this.contentClass];
    },

    briefCls() {
      return [bem('brief'), this.briefClass];
    },

    extraCls() {
      return [bem('extra'), this.extraClass];
    }
  },

  methods: {
    _getThumbCls() {
      return bem('thumb');
    },

    onClick() {
      this.$emit('click');
      route(this.$router, this);
    }
  }
});

</script>
