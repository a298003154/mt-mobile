<template>
  <div
    v-if="shouldRender"
    :class="cls">
    <div
      :class="coverCls"
      ref="cover">
    </div>
    <div
      v-if="left && left.length"
      :class="actionsLeftCls"
      ref="left"
    >
      <div
        v-for="(btn, i) in left"
        :key="i"
        :class="[btnCls, btn.className]"
        :style="btn.style"
        role="button"
       @click="onBtnClick($event, btn)"
      >
        <div :class="btnTextCls">{{ btn.text || 'Click' }}</div>
      </div>
    </div>
    <div
      v-if="right && right.length"
      :class="actionsRightCls"
      ref="right"
    >
      <div
        v-for="(btn, i) in right"
        :key="i"
        :class="[btnCls, btn.className]"
        :style="btn.style"
        role="button"
        @click="onBtnClick($event, btn)"
      >
        <div :class="btnTextCls">{{ btn.text || 'Click' }}</div>
      </div>
    </div>
    <gesture
      direction="horizontal"
      @touchMove="onTouchMove"
      @panStart="onPanStart"
      @panMove="onPanMove"
      @panEnd="onPanEnd"
      @panCancel="onPanEnd"
      @swipeLeft="doOpenRight"
      @swipeRight="doOpenLeft"
    >
      <div
        :class="contentCls"
        ref="content"
      >
        <slot></slot>
      </div>
    </gesture>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
import { createNamespace } from '..';

import Gesture from '../gesture';

function closest(el, selector) {
  const matchSelector = el.matches
    || el.webkitMatchesSelector
    || el.mozMatchesSelector
    || el.mozMatchesSelector;

  while (el) {
    if (matchSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

const [, createBEM] = createNamespace('v-swipeout');

export default {
  name: 'Swipeout',

  components: { Gesture },

  props: {
    prefixCls: {
      type: String,
      default: 'v-swipeout'
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    left: {
      type: Array,
      default: () => ([])
    },
    right: {
      type: Array,
      default: () => ([])
    },
  },

  data() {
    return {
      openedLeft: false,
      openedRight: false,
      content: null,
      cover: null,
      lf: null,
      rt: null,
      btnsLeftWidth: 0,
      btnsRightWidth: 0,
      swiping: false,
      needShowLeft: false,
      needShowRight: false,
    };
  },

  computed: {
    shouldRender() {
      return (this.left.length || this.right.length) && !this.disabled;
    },
    cls() {
      return this.swiping ? `${this.prefixCls} ${this.prefixCls}-swiping` : `${this.prefixCls}`;
    },
    coverCls() {
      return `${this.prefixCls}__cover`;
    },
    contentCls() {
      return `${this.prefixCls}__content`;
    },
    btnCls() {
      return `${this.prefixCls}__btn`;
    },
    btnTextCls() {
      return `${this.prefixCls}__btn__text`;
    },
    actionsCls() {
      return `${this.prefixCls}__actions`;
    },
    actionsLeftCls() {
      return this.getActionsCls('left');
    },
    actionsRightCls() {
      return this.getActionsCls('right');
    }
  },

  mounted() {
    this.lf = this.$refs.left;
    this.rt = this.$refs.right;
    this.content = this.$refs.content;
    this.cover = this.$refs.cover;

    this.btnsLeftWidth = this.lf ? this.lf.offsetWidth : 0;
    this.btnsRightWidth = this.rt ? this.rt.offsetWidth : 0;
    document.body.addEventListener('touchstart', this.onCloseSwipe, { passive: true });
  },

  beforeDestroy() {
    document.body.removeEventListener('touchstart', this.onCloseSwipe, { passive: true });
  },

  methods: {
    getActionsCls(type) {
      return `${this.actionsCls} ${this.prefixCls}__actions--${type}`;
    },

    onCloseSwipe(event) {
      if (!(this.openedLeft || this.openedRight)) {
        return;
      }
      const pNode = closest(event.target, this.actionsCls);
      if (!pNode) {
        // event.preventDefault();
        this.close();
      }
    },

    onPanStart(e) {
      const { direction, moveStatus } = e;
      const { x: deltaX } = moveStatus;
      // http://hammerjs.github.io/api/#directions
      const isLeft = direction === 2;
      const isRight = direction === 4;
      if (!isLeft && !isRight) {
        return;
      }
      this.needShowRight = isLeft && this.right && this.right.length > 0;
      this.needShowLeft = isRight && this.left && this.left.length > 0;
      // if (this.lf) {
      //   this.l.style.visibility = this.needShowRight ? 'hidden' : 'visible';
      // }
      // if (this.rt) {
      //   this.r.style.visibility = this.needShowLeft ? 'hidden' : 'visible';
      // }
      if (this.needShowLeft || this.needShowRight) {
        this.swiping = true;
        this._setStyle(deltaX);
      }
    },

    onPanMove(e) {
      const { moveStatus, srcEvent } = e;
      const { x: deltaX } = moveStatus;
      if (!this.swiping) {
        return;
      }

      if (srcEvent && srcEvent.preventDefault) {
        srcEvent.preventDefault();
      }
      this._setStyle(deltaX);
    },

    onPanEnd(e) {
      if (!this.swiping) {
        return;
      }

      const { moveStatus } = e;
      const { x: deltaX } = moveStatus;
      const needOpenRight = this.needShowRight && Math.abs(deltaX) > this.btnsRightWidth / 2;
      const needOpenLeft = this.needShowLeft && Math.abs(deltaX) > this.btnsLeftWidth / 2;
      if (needOpenRight) {
        this.doOpenRight();
      } else if (needOpenLeft) {
        this.doOpenLeft();
      } else {
        this.close();
      }
      this.swiping = false;
      this.needShowLeft = false;
      this.needShowRight = false;
    },

    doOpenLeft() {
      this.open(this.btnsLeftWidth, true, false);
    },

    doOpenRight() {
      this.open(-this.btnsRightWidth, true, false);
    },

    onBtnClick(event, btn) {
      const { onClick } = btn;
      if (onClick) {
        onClick(event);
      }
      if (this.autoClose) {
        this.close();
      }
    },

    _getContentEasing(value, limit) {
      // limit content style left when value > actions width
      const delta = Math.abs(value) - Math.abs(limit);
      const isOverflow = delta > 0;
      const factor = limit > 0 ? 1 : -1;
      if (isOverflow) {
        value = limit + (delta ** 0.85) * factor;
        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }
      return value;
    },

    _setStyle(value) {
      const limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth;
      const contentLeft = this._getContentEasing(value, limit);
      this.content.style.left = `${contentLeft}px`;
      if (this.cover) {
        this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        this.cover.style.left = `${contentLeft}px`;
      }
    },

    open(value, openedLeft, openedRight) {
      if (!this.openedLeft && !this.openedRight) {
        this.$emit('open');
      }
      this.openedLeft = openedLeft;
      this.openedRight = openedRight;
      this._setStyle(value);
    },

    close() {
      if ((this.openedLeft || this.openedRight)) {
        this.$emit('close');
      }
      this._setStyle(0);
      this.openedLeft = false;
      this.openedRight = false;
    },

    onTouchMove(e) {
      if (this.swiping) {
        e.preventDefault();
      }
    }
  }
};
</script>
