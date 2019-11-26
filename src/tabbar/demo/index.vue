<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-tabbar v-model="active">
        <mt-tabbar-item icon="profile">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="search">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="compass">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="setting">{{ $t('tab') }}</mt-tabbar-item>
      </mt-tabbar>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <mt-tabbar v-model="activeName">
        <mt-tabbar-item
          name="profile"
          icon="profile"
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
        <mt-tabbar-item
          name="search"
          icon="search"
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
        <mt-tabbar-item
          name="compass"
          icon="compass"
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
        <mt-tabbar-item
          name="setting"
          icon="setting"
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
      </mt-tabbar>
    </demo-block>

    <demo-block :title="$t('badge')">
      <mt-tabbar v-model="active2">
        <mt-tabbar-item icon="profile">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item
          icon="search"
          dot
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
        <mt-tabbar-item
          icon="compass"
          info="5"
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
        <mt-tabbar-item
          icon="setting"
          info="20"
        >
          {{ $t('tab') }}
        </mt-tabbar-item>
      </mt-tabbar>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <mt-tabbar v-model="active3">
        <mt-tabbar-item info="3">
          <span>{{ $t('custom') }}</span>
          <template #icon="{ active }">
            <img :src="active ? icon.active : icon.normal">
          </template>
        </mt-tabbar-item>
        <mt-tabbar-item icon="search">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="setting">{{ $t('tab') }}</mt-tabbar-item>
      </mt-tabbar>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <mt-tabbar
        v-model="active4"
        active-color="#07c160"
        inactive-color="#000"
      >
        <mt-tabbar-item icon="profile">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="search">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="compass">{{ $t('tab') }}</mt-tabbar-item>
        <mt-tabbar-item icon="setting">{{ $t('tab') }}</mt-tabbar-item>
      </mt-tabbar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      badge: '显示徽标',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      matchByName: '通过名称匹配'
    },
    'en-US': {
      badge: 'Show Badge',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      matchByName: 'Match by name'
    }
  },

  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      activeName: 'profile',
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tabbar {
  .mt-tabbar {
    position: relative;

    &-item {
      cursor: pointer;
    }
  }
}
</style>
