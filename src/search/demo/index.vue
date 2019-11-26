<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-search v-model="value" :placeholder="$t('placeholder')" />
    </demo-block>

    <demo-block :title="$t('listenToEvents')">
      <form action="/">
        <mt-search
          v-model="value"
          :placeholder="$t('placeholder')"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </demo-block>

    <demo-block :title="$t('customButton')">
      <mt-search
        v-model="value"
        :placeholder="$t('placeholder')"
        show-action
        shape="round"
        :label="$t('label')"
        @search="onSearch"
      >
        <template #left-icon>
          <mt-icon name="star" size="xxs" />
        </template>
        <template #action>
          <div @click="onSearch">{{ $t('search') }}</div>
        </template>
      </mt-search>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      label: '地址',
      placeholder: '请输入搜索关键词',
      customButton: '自定义按钮',
      listenToEvents: '事件监听'
    },
    'en-US': {
      label: 'Address',
      placeholder: 'Placeholder',
      customButton: 'Custom Action Button',
      listenToEvents: 'Listen to Events'
    }
  },

  data() {
    return {
      value: ''
    };
  },

  methods: {
    onSearch() {
      this.$toast(this.value);
    },

    onCancel() {
      this.$toast(this.$t('cancel'));
    }
  }
};
</script>
