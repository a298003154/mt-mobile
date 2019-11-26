<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-notice-bar
        :text="$t('text')"
        left-icon="sound"
      />
    </demo-block>

    <demo-block :title="$t('unscrollable')">
      <mt-notice-bar
        :scrollable="false"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('wrapable')">
      <mt-notice-bar
        wrapable
        :scrollable="false"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('mode')">
      <mt-notice-bar
        mode=" closable"
        :text="$t('text')"
      />
      <mt-notice-bar
        mode="link"
        :text="$t('text')"
      />
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <mt-notice-bar
        :text="$t('text')"
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-circle"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      unscrollable: '禁用滚动',
      mode: '通知栏模式',
      wrapable: '多行展示',
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
      customStyle: '自定义样式'
    },
    'en-US': {
      mode: 'Mode',
      wrapable: 'Wrapable',
      unscrollable: 'Disable scroll',
      text: 'Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.',
      customStyle: 'Custom Style'
    }
  }
};
</script>

<style lang="less">
.demo-notice-bar {
  .mt-notice-bar:not(:first-of-type) {
    margin-top: 5px;
  }

  .mt-doc-demo-block__title {
    padding-top: 25px;
  }
}
</style>
