<template>
  <div
    :style="style"
    :class="cls"
    @click="onClick"
  >
    <template v-if="!error">
      <img
        v-if="lazyLoad"
        v-lazy="src"
        ref="image"
        :style="imgStyle"
        :class="imgCls"
        :alt="alt" />
      <img
        v-else
        :src="src"
        :alt="alt"
        :style="imgStyle"
        :class="imgCls"
        @load="onLoad"
        @error="onError" />
    </template>
    <div v-if="loading && showLoading" :class="_getLoadingCls()">
      <slot name="loading">
        <icon name="picture" size="sm" />
      </slot>
    </div>
    <div v-else-if="error && showError" :class="_getErrorCls()">
      <slot name="error">
        <icon name="exclamation-circle" size="sm" />
      </slot>
    </div>
  </div>
</template>

<script>
import { createNamespace, isDef, addUnit } from '../utils';

import Icon from '../icon';

const [createComponent, bem] = createNamespace('image');
const CLICK = 'click';
const ERROR = 'error';
const LOAD = 'load';
const LOADED = 'loaded';

export default createComponent({
  components: {
    Icon
  },

  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      loading: true,
      error: false
    };
  },

  watch: {
    src() {
      this.loading = true;
      this.error = false;
    }
  },

  computed: {
    style() {
      const style = {};

      if (isDef(this.width)) {
        style.width = addUnit(this.width);
      }

      if (isDef(this.height)) {
        style.height = addUnit(this.height);
      }

      return style;
    },

    imgStyle() {
      return {
        objectFit: this.fit
      };
    },

    cls() {
      return bem({ round: this.round });
    },

    imgCls() {
      return bem('img');
    }
  },

  created() {
    const { $Lazyload } = this;

    if ($Lazyload) {
      $Lazyload.$on(LOADED, this.onLazyLoaded);
      $Lazyload.$on(ERROR, this.onLazyLoadError);
    }
  },

  beforeDestroy() {
    const { $Lazyload } = this;

    if ($Lazyload) {
      $Lazyload.$off(LOADED, this.onLazyLoaded);
      $Lazyload.$off(ERROR, this.onLazyLoadError);
    }
  },

  methods: {
    _getLoadingCls() {
      return bem('loading');
    },

    _getErrorCls() {
      return bem(ERROR);
    },

    onLoad(event) {
      this.loading = false;
      this.$emit(LOAD, event);
    },

    onLazyLoaded({ el }) {
      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },

    onLazyLoadError({ el }) {
      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },

    onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit(ERROR, event);
    },

    onClick(event) {
      this.$emit(CLICK, event);
    },
  }
});

</script>
