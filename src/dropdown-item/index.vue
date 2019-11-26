<template>
  <div
    v-show="showWrapper"
    :style="style"
    :class="cls"
  >
    <popup
      v-model="showPopup"
      :overlay="parent.overlay"
      :position="position"
      :duration="transition ? parent.duration : 0"
      :close-on-click-overlay="parent.closeOnClickOverlay"
      :overlay-style="{ position: 'absolute' }"
      :class="contentCls"
      @open="onOpen"
      @opened="onOpened"
      @close="onClose"
      @closed="onClosed"
    >
      <slot>
        <list>
          <list-item
            v-for="option in options"
            :key="option.value"
            clickable
            @click="onClickItem(option)"
          >
            <div slot="extra">
              <icon
                v-show="isActive(option)"
                name="check"
                size="xxs"
                :color="parent.activeColor"
                :class="iconCls"
              />
            </div>
            <span
              :style="{ color: isActive(option) ? parent.activeColor : '' }"
            >{{ option.text }}</span>
          </list-item>
        </list>
      </slot>
    </popup>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import Icon from '../icon/index';
import List from '../list/index';
import ListItem from '../list-item/index';
import Popup from '../popup/index';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('dropdown-item');

export default createComponent({
  mixins: [ChildrenMixin('mtDropdownMenu')],

  components: {
    Icon,
    List,
    ListItem,
    Popup
  },

  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },

  computed: {
    displayTitle() {
      if (this.title) {
        return this.title;
      }

      const match = this.options.filter(option => option.value === this.value);
      return match.length ? match[0].text : '';
    },

    position() {
      return this.parent.direction === 'down' ? 'top' : 'bottom';
    },

    style() {
      const { offset, zIndex, direction } = this.parent;
      const style = { zIndex };
      if (direction === 'down') {
        style.top = `${offset}px`;
      } else {
        style.bottom = `${offset}px`;
      }
      return style;
    },

    cls() {
      return bem([this.parent.direction]);
    },

    contentCls() {
      return bem('content');
    },

    iconCls() {
      return bem('icon');
    }
  },


  beforeCreate() {
    const createEmitter = eventName => () => this.$emit(eventName);

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },

  methods: {
    isActive(option) {
      return option.value === this.value;
    },

    toggle(show = !this.showPopup, options = {}) {
      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    },

    onClosed() {
      this.showWrapper = false;
      this.$emit('closed');
    },

    onClickItem(option) {
      this.showPopup = false;

      if (option.value !== this.value) {
        this.$emit('input', option.value);
        this.$emit('change', option.value);
      }
    }
  }
});

</script>
