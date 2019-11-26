<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-tag>{{ $t('tag') }}</mt-tag>
      <mt-tag type="primary">{{ $t('tag') }}</mt-tag>
      <mt-tag type="success">{{ $t('tag') }}</mt-tag>
      <mt-tag type="danger">{{ $t('tag') }}</mt-tag>
      <mt-tag type="warning">{{ $t('tag') }}</mt-tag>
    </demo-block>

    <demo-block :title="$t('plain')">
      <mt-tag plain>{{ $t('tag') }}</mt-tag>
      <mt-tag plain type="primary">{{ $t('tag') }}</mt-tag>
      <mt-tag plain type="success">{{ $t('tag') }}</mt-tag>
      <mt-tag plain type="danger">{{ $t('tag') }}</mt-tag>
      <mt-tag plain type="warning">{{ $t('tag') }}</mt-tag>
    </demo-block>

    <demo-block :title="$t('round')">
      <mt-tag round>{{ $t('tag') }}</mt-tag>
      <mt-tag round type="primary">{{ $t('tag') }}</mt-tag>
      <mt-tag round type="success">{{ $t('tag') }}</mt-tag>
      <mt-tag round type="danger">{{ $t('tag') }}</mt-tag>
      <mt-tag round type="warning">{{ $t('tag') }}</mt-tag>
    </demo-block>

    <demo-block :title="$t('mark')">
      <mt-tag mark>{{ $t('tag') }}</mt-tag>
      <mt-tag mark type="primary">{{ $t('tag') }}</mt-tag>
      <mt-tag mark type="success">{{ $t('tag') }}</mt-tag>
      <mt-tag mark type="danger">{{ $t('tag') }}</mt-tag>
      <mt-tag mark type="warning">{{ $t('tag') }}</mt-tag>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <mt-tag color="#f2826a">{{ $t('tag') }}</mt-tag>
      <mt-tag color="#f2826a" plain>{{ $t('tag') }}</mt-tag>
      <mt-tag color="#7232dd">{{ $t('tag') }}</mt-tag>
      <mt-tag color="#7232dd" plain>{{ $t('tag') }}</mt-tag>
      <mt-tag color="#ffe1e1" text-color="#ad0000">{{ $t('tag') }}</mt-tag>
    </demo-block>

    <demo-block :title="$t('customSize')">
      <mt-tag type="danger">{{ $t('tag') }}</mt-tag>
      <mt-tag type="danger" size="medium">{{ $t('tag') }}</mt-tag>
      <mt-tag type="danger" size="medium" mark>{{ $t('tag') }}</mt-tag>
      <mt-tag type="danger" size="medium" round>{{ $t('tag') }}</mt-tag>
    </demo-block>

    <demo-block :title="$t('closable')">
      <mt-row>
        <mt-tag closable type="primary">{{ $t('tag') }}</mt-tag>
        <mt-tag closable mark type="success">{{ $t('tag') }}</mt-tag>
        <mt-tag closable round type="danger">{{ $t('tag') }}</mt-tag>
      </mt-row>
      <mt-white-space size="xxs"></mt-white-space>
      <mt-row>
        <mt-tag closable size="medium" type="primary">{{ $t('tag') }}</mt-tag>
        <mt-tag closable mark size="medium" type="success">{{ $t('tag') }}</mt-tag>
        <mt-tag closable round size="medium" type="danger">{{ $t('tag') }}</mt-tag>
      </mt-row>
      <mt-white-space size="xxs"></mt-white-space>
      <mt-row>
        <mt-tag closable plain size="medium" type="primary">{{ $t('tag') }}</mt-tag>
        <mt-tag closable plain mark size="medium" type="success">{{ $t('tag') }}</mt-tag>
        <mt-tag closable plain round size="medium" type="danger">{{ $t('tag') }}</mt-tag>
      </mt-row>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closable: '可关闭',
      customColor: '自定义颜色',
      customSize: '标签大小'
    },
    'en-US': {
      plain: 'Plain style',
      round: 'Round style',
      mark: 'Mark style',
      closable: 'Closable',
      customColor: 'Custom Color',
      customSize: 'Custom Size'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tag {
  background-color: @white;

  .mt-tag + .mt-tag {
    margin-left: @padding-xs;
  }

  .mt-tag {
    &:first-of-type {
      margin-left: @padding-md;
    }
  }

  .mt-row {
    margin-right: @padding-md;
    margin-left: @padding-md;

    .mt-tag {
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
}
</style>
