<template>
  <div
    tabindex="0"
    role="radiogroup"
    :class="cls"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
  >
    <div
      v-for="(item, index) in list"
      ref="items"
      role="radio"
      :key="index"
      tabindex="0"
      :aria-setsize="count"
      :aria-posinset="index + 1"
      :aria-checked="_getAriaChecked(item)"
      :style="_getItemStyle(index + 1)"
      :class="itemCls"
    >
      <i
        :data-score="index + 1"
        :style="_getIconStyle(item)"
        :class="_getIconCls(item)"
        @click="select(index + 1)"
      />
      <i
        v-if="allowHalf"
        :data-score="index + 0.5"
        :style="_getIconHalfStyle(item)"
        :class="_getIconHalfCls(item)"
        @click="select(index + 0.5)"
      />
    </div>
  </div>
</template>

<script>
import { createNamespace, addUnit } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { TouchMixin } from '../mixins/touch';

const [createComponent, bem] = createNamespace('rate');

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return {
      status: 'full',
      width: 1
    };
  }

  if (value + 0.5 >= index && allowHalf) {
    return {
      status: 'half',
      width: value - index + 1
    };
  }

  return {
    status: 'void',
    width: 1
  };
}

function isFull(item) {
  return item.status === 'full';
}

function isVoid(item) {
  return item.status === 'void';
}

export default createComponent({
  mixins: [TouchMixin],

  props: {
    size: [Number, String],
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    value: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: 'star-fill'
    },
    voidIcon: {
      type: String,
      default: 'star'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    list() {
      const list = [];
      for (let i = 1; i <= this.count; i++) {
        list.push(getRateStatus(this.value, i, this.allowHalf));
      }

      return list;
    },

    sizeWithUnit() {
      return addUnit(this.size);
    },

    gutterWithUnit() {
      return addUnit(this.gutter);
    },

    cls() {
      return bem();
    },

    itemCls() {
      return bem('item');
    }
  },

  methods: {
    _getAriaChecked(item) {
      return String(!isVoid(item));
    },

    _getItemStyle(score) {
      let style;
      if (this.gutterWithUnit && score !== this.count) {
        style = { paddingRight: this.gutterWithUnit };
      }
      return style;
    },

    _getIconStyle(item) {
      const {
        sizeWithUnit, disabled, disabledColor, color, voidColor
      } = this;
      return {
        fontSize: sizeWithUnit,
        color: disabled ? disabledColor : isFull(item) ? color : voidColor,
      };
    },

    _getIconHalfStyle(item) {
      const {
        sizeWithUnit, disabled, disabledColor, voidColor, color,
      } = this;
      const { width } = item;
      return {
        width: `${width}em`,
        fontSize: sizeWithUnit,
        color: disabled ? disabledColor : isVoid(item) ? voidColor : color,
      };
    },

    _getIconCls(item) {
      return [
        bem('icon'),
        'mt-icon-font',
        `mt-icon-font-${isFull(item) ? this.icon : this.voidIcon}`
      ];
    },

    _getIconHalfCls(item) {
      return [
        bem('icon', 'half'),
        'mt-icon-font',
        `mt-icon-font-${isVoid(item) ? this.voidIcon : this.icon}`
      ];
    },

    select(index) {
      if (!this.disabled && !this.readonly && index !== this.value) {
        this.$emit('input', index);
        this.$emit('change', index);
      }
    },

    onTouchStart(event) {
      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchStart(event);

      const rects = this.$refs.items.map(item => item.getBoundingClientRect());
      const ranges = [];

      rects.forEach((rect, index) => {
        if (this.allowHalf) {
          ranges.push(
            { score: index + 0.5, left: rect.left },
            { score: index + 1, left: rect.left + rect.width / 2 }
          );
        } else {
          ranges.push({ score: index + 1, left: rect.left });
        }
      });

      this.ranges = ranges;
    },

    onTouchMove(event) {
      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        preventDefault(event);

        const { clientX } = event.touches[0];
        this.select(this.getScoreByPosition(clientX));
      }
    },

    getScoreByPosition(x) {
      for (let i = this.ranges.length - 1; i > 0; i--) {
        if (x > this.ranges[i].left) {
          return this.ranges[i].score;
        }
      }

      return this.allowHalf ? 0.5 : 1;
    }
  }
});

</script>
