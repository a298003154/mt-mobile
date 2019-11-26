<template>
  <touch-feedback
    :disabled="disabled"
    :active-class="activeCls"
    :active-style="activeStyle"
  >
    <div
      :class="cls"
      @click="onClick"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div :class="containerCls">
        <div v-if="icon" :class="_getIconCls()">
          <icon :name="icon" />
        </div>
        <div :class="contentCls">
          <slot />
        </div>
      </div>
    </div>
  </touch-feedback>
</template>

<script>
import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

import Icon from '../icon';
import TouchFeedback from '../utils/comp/touch-feedback';
import { touchFeedbackProps } from '../utils/comp/touch-feedback/shared';

const [createComponent, bem] = createNamespace('popover-item');

export default createComponent({
  mixins: [
    ChildrenMixin('mtPopover')
  ],

  components: {
    TouchFeedback,
    Icon
  },

  props: {
    ...touchFeedbackProps,
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: String
  },

  computed: {
    isFirst() {
      return this.index === 0;
    },

    cls() {
      return bem({ disabled: this.disabled });
    },

    activeCls() {
      return [`${bem()}--active`, `${bem()}--fix-active-arrow`];
    },

    containerCls() {
      return [bem('container'), { 'mt-hairline--top': !this.isFirst }];
    },

    contentCls() {
      return bem('content');
    },
  },

  methods: {
    _getIconCls() {
      return bem('icon');
    },

    onClick(e) {
      if (!this.disabled) {
        this.$emit('click', e);
        if (this.parent) {
          this.parent.onSelect && this.parent.onSelect(e, this.index);
        }
      }
    }
  }
});

</script>
