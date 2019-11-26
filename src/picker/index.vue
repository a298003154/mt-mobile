<template>
  <div :class="cls">
    <div v-if="showToolbar && toolbarPosition === 'top'" :class="toolbarCls">
      <slot>
        <div
          role="button"
          tabindex="0"
          :class="_getCancelBtnCls()"
          @click="onCancel"
        >{{ cancelBtnText }}</div>
        <slot name="title">
          <div v-if="title" :class="titleCls">{{ title }}</div>
        </slot>
        <div
          role="button"
          tabindex="0"
          :class="_getConfirmBtnCls()"
          @click="onConfirm"
        >{{ confirmBtnText }}</div>
      </slot>
    </div>

    <div
      :style="{ height: `${wrapHeight}px` }"
      :class="columnsCls"
      @touchmove="preventDefault">
      <picker-column
        v-for="(item, index) in _columns"
        :key="index"
        :value-key="valueKey"
        :allow-html="allowHtml"
        :class-name="item.className"
        :item-height="itemHeight"
        :default-index="item.defaultIndex || defaultIndex"
        :initial-options="simple ? item : item.values"
        :visible-item-count="visibleItemCount"
        @change="onChange(index)"
      />
      <div :style="maskStyle" :class="maskCls" />
      <div :style="frameStyle" :class="frameCls" />
    </div>

    <loading
      v-if="loading"
      :color="loadingColor"
      :class="_getLoadingCls()"
    />

    <div v-if="showToolbar && toolbarPosition === 'bottom'" :class="toolbarCls">
      <slot>
        <div
          role="button"
          tabindex="0"
          :class="_getCancelBtnCls()"
          @click="onCancel"
        >{{ cancelBtnText }}</div>
        <slot name="title">
          <div v-if="title" :class="titleCls">{{ title }}</div>
        </slot>
        <div
          role="button"
          tabindex="0"
          :class="_getConfirmBtnCls()"
          @click="onConfirm"
        >{{ confirmBtnText }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
import { createNamespace } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { deepClone } from '../utils/deep-clone';
import { pickerProps } from './shared';
import { BLUE } from '../utils/color';
import Loading from '../loading';
import PickerColumn from './PickerColumn';

const [createComponent, bem, t] = createNamespace('picker');

export default createComponent({
  components: {
    Loading,
    PickerColumn
  },

  props: {
    ...pickerProps,
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: () => []
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      children: []
    };
  },

  computed: {
    _columns() {
      return this.simple ? [this.columns] : this.columns;
    },

    simple() {
      return this.columns.length && !this.columns[0].values;
    },

    loadingColor() {
      return BLUE;
    },

    cancelBtnText() {
      return this.cancelButtonText || t('cancel');
    },

    confirmBtnText() {
      return this.confirmButtonText || t('confirm');
    },

    wrapHeight() {
      return this.itemHeight * this.visibleItemCount;
    },

    maskStyle() {
      return {
        backgroundSize: `100% ${(this.wrapHeight - this.itemHeight) / 2}px`
      };
    },

    frameStyle() {
      return {
        height: `${this.itemHeight}px`
      };
    },

    cls() {
      return bem();
    },

    toolbarCls() {
      return bem('toolbar');
    },

    titleCls() {
      return [bem('title'), 'mt-ellipsis'];
    },

    columnsCls() {
      return bem('columns');
    },

    maskCls() {
      return bem('mask');
    },

    frameCls() {
      return bem('frame');
    }
  },

  watch: {
    columns: 'setColumns'
  },

  methods: {
    _getCancelBtnCls() {
      return bem('cancel');
    },

    _getConfirmBtnCls() {
      return bem('confirm');
    },

    _getLoadingCls() {
      return bem('loading');
    },

    preventDefault,

    setColumns() {
      const columns = this.simple ? [{ values: this.columns }] : this.columns;
      columns.forEach((column, index) => {
        this.setColumnValues(index, deepClone(column.values));
      });
    },

    emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },

    onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },

    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },

    // get column value by index
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },

    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },

    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },

    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },

    // get options of column by index
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },

    // set options of column by index
    setColumnValues(index, options) {
      const column = this.children[index];
      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },

    // get values of all columns
    getValues() {
      return this.children.map(child => child.getValue());
    },

    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },

    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },

    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    },

    onConfirm() {
      this.children.map(child => child.stopMomentum());
      this.emit('confirm');
    },

    onCancel() {
      this.emit('cancel');
    }
  }
});

</script>
