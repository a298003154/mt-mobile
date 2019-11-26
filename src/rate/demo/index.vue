<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-rate v-model="value1" />
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <mt-rate
        v-model="value2"
        icon="like-fill"
        void-icon="like-o"
      />
    </demo-block>

    <demo-block :title="$t('customStyle')">
      <mt-rate
        v-model="value3"
        :size="25"
        color="#ee0a24"
        void-icon="star-fill"
        void-color="#eee"
      />
    </demo-block>

    <demo-block :title="$t('halfStar')">
      <mt-rate
        v-model="value4"
        :size="25"
        allow-half
        void-icon="star-fill"
        void-color="#eee"
      />
    </demo-block>

    <demo-block :title="$t('customCount')">
      <mt-rate
        v-model="value5"
        :count="6"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <mt-rate
        v-model="value6"
        disabled
      />
    </demo-block>

    <demo-block :title="$t('readonly')">
      <mt-rate
        v-model="value6"
        readonly
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      halfStar: '半星',
      disabled: '禁用状态',
      customIcon: '自定义图标',
      customStyle: '自定义样式',
      customCount: '自定义数量',
      readonly: '只读状态'
    },
    'en-US': {
      halfStar: 'Half Star',
      disabled: 'Disabled',
      customIcon: 'Custom Icon',
      customStyle: 'Custom Style',
      customCount: 'Custom Count',
      readonly: 'Readonly'
    }
  },

  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 2.75,
      value5: 4,
      value6: 3
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-rate {
  padding-bottom: 20px;
  background-color: #fff;

  .mt-rate {
    margin-left: @padding-md;
  }
}
</style>
