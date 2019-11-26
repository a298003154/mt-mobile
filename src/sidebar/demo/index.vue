<template>
  <demo-section>
    <mt-grid :column-num="2" :border="false">
      <mt-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('basicUsage') }}</h3>
        <mt-sidebar v-model="activeKey1">
          <mt-sidebar-item :title="$t('title')" />
          <mt-sidebar-item :title="$t('title')" />
          <mt-sidebar-item :title="$t('title')" />
        </mt-sidebar>
      </mt-grid-item>

      <mt-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('showBadge') }}</h3>
        <mt-sidebar v-model="activeKey2">
          <mt-sidebar-item :title="$t('title')" dot/>
          <mt-sidebar-item :title="$t('title')" info="NEW"/>
          <mt-sidebar-item :title="$t('title')" :info="101" />
        </mt-sidebar>
      </mt-grid-item>

      <mt-grid-item>
        <h3 class="demo-sidebar-title">{{ $t('disabled') }}</h3>
        <mt-sidebar v-model="activeKey3">
          <mt-sidebar-item :title="$t('title')" />
          <mt-sidebar-item :title="$t('title')" disabled />
          <mt-sidebar-item :title="$t('title')" />
        </mt-sidebar>
      </mt-grid-item>
    </mt-grid>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '标签名称',
      showBadge: '显示徽标',
      disabled: '禁用选项'
    },
    'en-US': {
      showBadge: 'Show Badge',
      disabled: 'Disabled'
    }
  },

  data() {
    return {
      activeKey1: 0,
      activeKey2: 0,
      activeKey3: 0
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sidebar {
  background-color: @white;

  .mt-sidebar-item {
    /* padding: 20px 25px 20px 8px; */
    white-space: nowrap;
  }

  .mt-sidebar {
    width: 120px;
    margin-left: @padding-md;
  }

  .mt-badge--hot {
    display: inline-flex;
    align-items: center;

    .mt-badge__sup--text {
      position: relative;
      top: auto;
      display: inline-block;
      transform: translateX(0);
    }
  }

  .mt-sidebar-item__text {
    padding: 5px;
  }

  &-title {
    margin-bottom: 16px;
    color: @gray-dark;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
