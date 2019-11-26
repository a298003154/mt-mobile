<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-row>
        <mt-col span="8">span: 8</mt-col>
        <mt-col span="8">span: 8</mt-col>
        <mt-col span="8">span: 8</mt-col>
      </mt-row>

      <mt-white-space/>

      <mt-row>
        <mt-col span="4">span: 4</mt-col>
        <mt-col
          span="10"
          offset="4"
        >
          offset: 4, span: 10
        </mt-col>
      </mt-row>

      <mt-white-space/>

      <mt-row>
        <mt-col
          offset="12"
          span="12"
        >
          offset: 12, span: 12
        </mt-col>
      </mt-row>
    </demo-block>

    <demo-block :title="$t('title2')">
      <mt-row gutter="20">
        <mt-col span="8">span: 8</mt-col>
        <mt-col span="8">span: 8</mt-col>
        <mt-col span="8">span: 8</mt-col>
      </mt-row>
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('title3')"
    >
      <mt-row type="flex">
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
      </mt-row>

      <mt-white-space/>

      <mt-row
        type="flex"
        justify="center"
      >
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
      </mt-row>

      <mt-white-space/>

      <mt-row
        type="flex"
        justify="end"
      >
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
      </mt-row>

      <mt-white-space/>

      <mt-row
        type="flex"
        justify="space-between"
      >
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
      </mt-row>

      <mt-white-space/>

      <mt-row
        type="flex"
        justify="space-around"
      >
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
        <mt-col span="6">span: 6</mt-col>
      </mt-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '在列元素之间增加间距',
      title3: 'Flex 布局',
    },
    'en-US': {
      title2: 'Column Spacing',
      title3: 'Flex Layout'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-col {
  .mt-doc-demo-block {
    padding: 0 @padding-md;
  }

  .mt-doc-demo-block__title {
    padding-left: 0;
  }

  .mt-col {
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
