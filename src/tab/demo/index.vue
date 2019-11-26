<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-tabs v-model="active">
        <mt-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('matchByName')">
      <mt-tabs v-model="activeName">
        <mt-tab
          name="a"
          :title="$t('tab') + 1"
        >
          {{ $t('content') }} 1
        </mt-tab>
        <mt-tab
          name="b"
          :title="$t('tab') + 2"
        >
          {{ $t('content') }} 2
        </mt-tab>
        <mt-tab
          name="c"
          :title="$t('tab') + 3"
        >
          {{ $t('content') }} 3
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title2')">
      <mt-tabs>
        <mt-tab
          v-for="index in 8"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title3')">
      <mt-tabs @disabled="onClickDisabled">
        <mt-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title4')">
      <mt-tabs type="card">
        <mt-tab
          v-for="index in 3"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title5')">
      <mt-tabs @click="onClick">
        <mt-tab
          v-for="index in 2"
          :title="$t('tab') + index"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title6')">
      <mt-tabs
        :active="active"
        sticky
      >
        <mt-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title7')">
      <mt-tabs :active="active">
        <mt-tab
          v-for="index in 2"
          :key="index"
        >
          <template #title>
            <mt-icon name="menu" />{{ $t('tab') }}
          </template>
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title8')">
      <mt-tabs animated>
        <mt-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>

    <demo-block :title="$t('title9')">
      <mt-tabs
        :active="active"
        swipeable
      >
        <mt-tab
          :title="$t('tab') + index"
          v-for="index in tabs"
          :key="index"
        >
          {{ $t('content') }} {{ index }}
        </mt-tab>
      </mt-tabs>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tab: '标签 ',
      title2: '标签栏滚动',
      title3: '禁用标签',
      title4: '样式风格',
      title5: '点击事件',
      title6: '粘性布局',
      title7: '自定义标签',
      title8: '切换动画',
      title9: '滑动切换',
      disabled: ' 已被禁用',
      matchByName: '通过名称匹配'
    },
    'en-US': {
      tab: 'Tab ',
      content: 'content of tab',
      title2: 'Swipe Tabs',
      title3: 'Disabled Tab',
      title4: 'Card Style',
      title5: 'Click Event',
      title6: 'Sticky',
      title7: 'Custom Tab',
      title8: 'Switch Animation',
      title9: 'Swipeable',
      disabled: ' is disabled',
      matchByName: 'Match By Name'
    }
  },

  data() {
    return {
      active: 2,
      activeName: 'b',
      tabs: [1, 2, 3, 4]
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.$t('disabled'));
    },

    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-tab {
  margin-bottom: 300px;

  .mt-tab .mt-icon {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    vertical-align: -4px;
  }

  .mt-tab__pane {
    padding: 25px 20px;
    background-color: @white;
  }

  .mt-tabs--card .mt-tab__pane {
    background-color: transparent;
  }
}
</style>
