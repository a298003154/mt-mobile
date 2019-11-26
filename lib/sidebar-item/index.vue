<template>
  <a :class="cls" @click="onClick">
    <slot>
      <badge
        v-if="info || dot"
        :text="info"
        :dot="dot"
      >
        <div :class="textCls">{{ title }}</div>
      </badge>
      <div v-else :class="textCls">{{ title }}</div>
    </slot>
  </a>
</template>

<script>
import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';

import Badge from '../badge';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  mixins: [ChildrenMixin('mtSidebar')],

  components: {
    Badge
  },

  props: {
    ...routeProps,
    title: String,
    disabled: Boolean,
    info: [Number, String],
    dot: Boolean
  },

  computed: {
    select() {
      return this.index === +this.parent.activeKey;
    },

    cls() {
      return bem({ select: this.select, disabled: this.disabled });
    },

    textCls() {
      return bem('text');
    }
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      route(this.$router, this);
    }
  }
});

</script>
