<template>
  <div
    :style="{ color }"
    :class="cls"
    @click="onClick"
  >
    <div :class="iconCls">
      <badge
        v-if="info || dot"
        :text="info"
        :dot="dot"
      >
        <slot name="icon" :active="active">
          <icon v-if="icon" :name="icon"/>
        </slot>
      </badge>
      <slot
        v-else
        name="icon"
        :active="active"
      >
        <icon
          v-if="icon"
          :name="icon"
          size="xs"
        />
      </slot>
    </div>
    <div :class="textCls">
      <slot :active="active" />
    </div>
  </div>
</template>

<script>
import { createNamespace, isObj, isDef } from '../utils';
import Badge from '../badge';
import Icon from '../icon';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('tabbar-item');

export default createComponent({
  mixins: [ChildrenMixin('mtTabbar')],

  components: {
    Icon,
    Badge
  },

  props: {
    ...routeProps,
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  },

  data() {
    return {
      active: false
    };
  },

  computed: {
    routeActive() {
      const { to, $route } = this;
      if (to && $route) {
        const config = isObj(to) ? to : { path: to };
        const pathMatched = config.path === $route.path;
        const nameMatched = isDef(config.name) && config.name === $route.name;

        return pathMatched || nameMatched;
      }
    },

    _active() {
      return this.parent.route ? this.routeActive : this.active;
    },

    color() {
      return this.parent[this._active ? 'activeColor' : 'inactiveColor'];
    },

    cls() {
      return bem({ active: this._active });
    },

    iconCls() {
      return bem('icon');
    },

    textCls() {
      return bem('text');
    }
  },

  methods: {
    onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      route(this.$router, this);
    }
  }
});

</script>
