<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-collapse v-model="active1">
        <mt-collapse-item>
          <div slot="title">{{ $t('title') + 1 }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
        <mt-collapse-item>
          <div slot="title">{{ $t('title') + 2 }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
        <mt-collapse-item
          disabled
        >
          <div slot="title">{{ $t('title') + 3 }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
      </mt-collapse>
    </demo-block>

    <demo-block :title="$t('accordion')">
      <mt-collapse
        v-model="active2"
        accordion
      >
        <mt-collapse-item>
          <div slot="title">{{ $t('title') + 1 }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
        <mt-collapse-item>
          <div slot="title">{{ $t('title') + 2 }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
        <mt-collapse-item>
          <div slot="title">{{ $t('title') + 3 }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
      </mt-collapse>
    </demo-block>

    <demo-block :title="$t('titleSlot')">
      <mt-collapse v-model="active3" :border="false">
        <mt-collapse-item>
          <template #title>
            {{ $t('title') + 1 }}<mt-icon name="circle-question" size="xxs"/>
          </template>
          {{ $t('text') }}
        </mt-collapse-item>
        <mt-collapse-item>
          <img slot="thumb" src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100"/>
          <div slot="title">{{ $t('title') + 2 }}</div>
          <div slot="extra">{{ $t('content') }}</div>
          {{ $t('text') }}
        </mt-collapse-item>
      </mt-collapse>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      accordion: '手风琴',
      titleSlot: '自定义标题内容',
      text: '代码是写出来给人看的，附带能在机器上运行'
    },
    'en-US': {
      accordion: 'Accordion',
      titleSlot: 'Custom title',
      text: 'Content'
    }
  },

  data() {
    return {
      active1: [0],
      active2: 0,
      active3: []
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-collapse {
  .mt-icon {
    margin-left: 5px;
    color: @blue;
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
