<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-button
        type="primary"
        :text="$t('showOverlay')"
        style="margin-left: 16px;"
        @click="show = true"
      />

      <mt-overlay
        :show="show"
        @click="show = false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      showOverlay: '显示遮罩层'
    },
    'en-US': {
      showOverlay: 'Show Overlay'
    }
  },

  data() {
    return {
      show: false
    };
  },
};
</script>
