<template>
  <popup
    :value="value"
    position="top"
    :overlay="false"
    :lock-scroll="false"
    :style="style"
    :class="cls"
    v-bind="$attrs"
    v-on="$listeners"
  >{{ message }}</popup>
</template>

<script>
import { createNamespace } from '../utils';
import { RED, WHITE } from '../utils/color';
import { inherit } from '../utils/functional';
import { PopupMixin } from '../mixins/popup';

import Popup from '../popup/index';

const [createComponent, bem] = createNamespace('notify');

export default createComponent({
  components: {
    Popup
  },

  props: {
    ...PopupMixin.props,
    className: null,
    message: [Number, String],
    getContainer: [String, Function],
    color: {
      type: String,
      default: WHITE
    },
    background: {
      type: String,
      default: RED
    },
    duration: {
      type: Number,
      default: 3000
    }
  },

  computed: {
    style() {
      return {
        color: this.color,
        background: this.background
      };
    },

    cls() {
      return [bem(), this.className];
    }
  }
});

</script>
