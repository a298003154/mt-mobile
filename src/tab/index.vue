<template>
  <div
    v-if="parent.animated"
    role="tabpanel"
    :aria-hidden="!isActive"
    :class="paneWrapperCls"
  >
    <div :class="paneCls">
      <slot v-if="shouldRender" />
      <div v-if="$slots.title" ref="title">
        <slot name="title" />
      </div>
    </div>
  </div>
  <div
    v-else
    v-show="isActive"
    role="tabpanel"
    :class="paneCls"
  >
    <slot v-if="shouldRender"></slot>
    <div
      v-if="$slots.title"
      ref="title"
    >
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('tab');

export default createComponent({
  mixins: [ChildrenMixin('mtTabs')],

  props: {
    name: [Number, String],
    title: String,
    disabled: Boolean
  },

  data() {
    return {
      inited: false
    };
  },

  computed: {
    shouldRender() {
      return this.inited || !this.parent.lazyRender;
    },

    computedName() {
      return this.name || this.index;
    },

    isActive() {
      return this.computedName === this.parent.currentName;
    },

    paneWrapperCls() {
      return bem('pane-wrapper', { inactive: !this.isActive });
    },

    paneCls() {
      return bem('pane');
    }
  },

  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex'() {
      this.inited = this.inited || this.isActive;
    },

    title() {
      this.parent.setLine();
    }
  },

  mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  }
});

</script>
