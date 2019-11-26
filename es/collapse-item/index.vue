<template>
  <div :class="cls">
    <list-item
      role="button"
      :class="titleCls"
      :tabindex="disabled ? -1 : 0"
      :aria-expanded="ariaExpanded"
      :arrow="expanded ? 'up' : 'down'"
      v-bind="$attrs"
      @click="onClick"
    >
      <template v-for="name in LIST_ITEM_SLOTS" v-slot:[name]>
        <slot :name="name" />
      </template>
      <slot name="title" />
    </list-item>
    <div
      v-if="inited"
      v-show="show"
      ref="wrapper"
      :class="wrapperCls"
      @transitionend="onTransitionEnd"
    >
      <div ref="content" :class="contentCls">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespace, isDef } from '../utils';
import { raf, doubleRaf } from '../utils/dom/raf';
import { listItemProps } from '../list-item/shared';
import { ChildrenMixin } from '../mixins/relation';

import ListItem from '../list-item/index';

const [createComponent, bem] = createNamespace('collapse-item');
const LIST_ITEM_SLOTS = ['brief', 'extra', 'thumb'];

export default createComponent({
  mixins: [ChildrenMixin('mtCollapse')],

  components: {
    ListItem
  },

  props: {
    ...listItemProps,
    name: [Number, String],
    disabled: Boolean
  },

  data() {
    return {
      LIST_ITEM_SLOTS,
      show: null,
      inited: null
    };
  },

  computed: {
    currentName() {
      return isDef(this.name) ? this.name : this.index;
    },

    expanded() {
      if (!this.parent) {
        return null;
      }

      const { value, accordion } = this.parent;

      if (process.env.NODE_ENV !== 'production' && !accordion && !Array.isArray(value)) {
        console.error('[MT-Mobile] Collapse: type of prop "value" should be Array');
        return;
      }

      return accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName);
    },

    ariaExpanded() {
      return String(this.expanded);
    },

    cls() {
      return bem({ border: this.index });
    },

    titleCls() {
      const { disabled, expanded } = this;
      return bem('title', { disabled, expanded });
    },

    wrapperCls() {
      return bem('wrapper');
    },

    contentCls() {
      return bem('content');
    }
  },

  created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },

  watch: {
    expanded(expanded, prev) {
      if (prev === null) {
        return;
      }

      if (expanded) {
        this.show = true;
        this.inited = true;
      }

      // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`
      const nextTick = expanded ? this.$nextTick : raf;

      nextTick(() => {
        const { content, wrapper } = this.$refs;
        if (!content || !wrapper) {
          return;
        }

        const { offsetHeight } = content;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapper.style.height = expanded ? 0 : contentHeight;

          // use double raf to ensure animation can start in mobile safari
          doubleRaf(() => {
            wrapper.style.height = expanded ? contentHeight : 0;
          });
        } else {
          this.onTransitionEnd();
        }
      });
    }
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      const { parent } = this;
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },

    onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  }
});

</script>
