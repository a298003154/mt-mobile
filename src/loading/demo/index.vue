<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <mt-loading />
      <mt-loading type="spinner" />
    </demo-block>

    <demo-block :title="$t('color')">
      <mt-loading color="#1989fa" />
      <mt-loading
        type="spinner"
        color="#1989fa"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('text')"
    >
      <mt-loading>
        {{ $t('loading') }}
      </mt-loading>
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('vertical')"
    >
      <mt-loading
        size="md"
        vertical
      >
        {{ $t('loading') }}
      </mt-loading>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '加载类型',
      color: '自定义颜色',
      text: '加载文案',
      vertical: '垂直排列'
    },
    'en-US': {
      type: 'Type',
      color: 'Color',
      text: 'Text',
      vertical: 'Vertical'
    }
  }
};
</script>

<style lang="less">
.demo-loading {
  .mt-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
