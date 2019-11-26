<template>
  <div
    v-if="!closed"
    :style="style"
    :class="cls"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <icon
      v-if="closable"
      name="close-circle-fill"
      size="xxs"
      :class="closeCls"
      @click="onClickClose"
    />
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('tag');

export default createComponent({
  components: {
    Icon
  },

  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    closable: Boolean,
    textColor: String,
    type: {
      type: String,
      default: 'default'
    }
  },

  data() {
    return {
      closed: false,
    };
  },

  computed: {
    style() {
      const { plain, color } = this;
      const key = plain ? 'color' : 'backgroundColor';
      const style = { [key]: color };

      if (this.textColor) {
        style.color = this.textColor;
      }

      return style;
    },

    cls() {
      const {
        mark, plain, round, size, type
      } = this;
      const classes = { mark, plain, round };
      if (size) {
        classes[size] = size;
      }
      return bem([classes, type]);
    },

    closeCls() {
      return bem('close');
    }
  },

  methods: {
    onClickClose() {
      if (!this.closed) {
        this.closed = true;
      }
      this.$emit('close');
    }
  }
});

</script>
