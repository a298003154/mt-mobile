<template>
  <div
    v-show="showNoticeBar"
    role="alert"
    :style="barStyle"
    :class="cls"
    @click="onClick"
  >
    <slot name="left-icon">
      <icon
        v-if="leftIcon"
        :name="leftIcon"
        :class="leftIconCls"
      />
    </slot>

    <div
      ref="wrap"
      role="marquee"
      :class="wrapCls"
    >
      <div
        ref="content"
        :style="contentStyle"
        :class="contentCls"
        @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd"
      >
        <slot>{{ text }}</slot>
      </div>
    </div>

    <slot name="right-icon">
      <icon
        v-if="rightIconName"
        :name="rightIconName"
        size="xxs"
        :class="rightIconCls"
        @click="onClickIcon"
      />
    </slot>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('notice-bar');

export default createComponent({
  components: {
    Icon
  },

  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },

  computed: {
    cls() {
      return bem({ wrapable: this.wrapable });
    },

    leftIconCls() {
      return bem('left-icon');
    },

    rightIconCls() {
      return bem('right-icon');
    },

    wrapCls() {
      return bem('wrap');
    },

    contentCls() {
      return [
        bem('content'),
        this.animationClass,
        { 'mt-ellipsis': !this.scrollable && !this.wrapable }
      ];
    },

    barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },

    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : `${this.wrapWidth}px`,
        animationDelay: `${this.firstRound ? this.delay : 0}s`,
        animationDuration: `${this.duration}s`
      };
    },

    rightIconName() {
      if (this.mode === 'closable') {
        return 'close';
      }
      return this.mode === 'link' ? 'right' : '';
    },
  },

  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs;
          if (!wrap || !content) {
            return;
          }

          const wrapWidth = wrap.getBoundingClientRect().width;
          const offsetWidth = content.getBoundingClientRect().width;
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth;
            this.offsetWidth = offsetWidth;
            this.duration = offsetWidth / this.speed;
            this.animationClass = bem('play');
          }
        });
      },
      immediate: true
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
    },

    onClickIcon(event) {
      if (this.mode === 'closable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },

    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = bem('play--infinite');
      });
    }
  }
});

</script>
