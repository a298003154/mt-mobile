<template>
  <div ref="menu" :class="cls">
    <div
      v-for="(item, index) in children"
      :key="index"
      ref="btn"
      role="button"
      :tabindex="item.disabled ? -1 : 0"
      :class="getChildrenCls(item, index)"
      @click="onClickBtn(item, index)"
    >
      <div
        :style="{ color: item.showPopup ? activeColor : '' }"
        :class="getTitleCls(item)"
      >
        <div class="mt-ellipsis">{{ item.displayTitle }}</div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { camelize } from '../utils/format/string';
import { BLUE } from '../utils/color';
import { ParentMixin } from '../mixins/relation';
import { ClickOutsideMixin } from '../mixins/click-outside';

const [createComponent, bem] = createNamespace('dropdown-menu');

export default createComponent({
  mixins: [
    ParentMixin(camelize(bem())),
    ClickOutsideMixin({
      event: 'click',
      method: 'onClickOutside'
    })
  ],

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    activeColor: {
      type: String,
      default: BLUE
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      offset: 0
    };
  },

  computed: {
    cls() {
      return bem();
    },
  },

  methods: {
    getChildrenCls(item) {
      return bem('item', { disabled: item.disabled });
    },

    getTitleCls(item) {
      return [
        bem('title', {
          down: item.showPopup === (this.direction === 'down')
        }),
        item.titleClass
      ];
    },

    onClickBtn(item, index) {
      if (!item.disabled) {
        this.toggleItem(index);
      }
    },

    updateOffset() {
      const { menu } = this.$refs;
      const rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },

    toggleItem(active) {
      this.children.forEach((item, index) => {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    },

    onClickOutside() {
      this.children.forEach((item) => {
        item.toggle(false);
      });
    }
  }
});

</script>
