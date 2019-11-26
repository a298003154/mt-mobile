<template>
  <demo-section>
    <mt-tabs
      v-model="tab"
      sticky
      :color="BLUE"
    >
      <mt-tab title="基础图标">
        <mt-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
        >
          <mt-icon :name="icon" />
          <span>{{ icon }}</span>
        </mt-col>
      </mt-tab>
      <mt-tab title="线框风格">
        <mt-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
        >
          <mt-icon :name="icon" />
          <span>{{ icon }}</span>
        </mt-col>
      </mt-tab>
      <mt-tab title="实底风格">
        <mt-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
        >
          <mt-icon :name="icon" />
          <span>{{ icon }}</span>
        </mt-col>
      </mt-tab>
    </mt-tabs>
  </demo-section>
</template>

<script>
import { BLUE } from '../../utils/color';

export default {
  i18n: {
    'zh-CN': {
      title: '图标列表',
      info: '显示徽标',
      basic: '基础图标'
    },
    'en-US': {
      title: 'Icon List',
      info: 'Show Info',
      basic: 'Basic Icon'
    }
  },

  data() {
    this.BLUE = BLUE;
    this.icons = [];
    return {
      tab: 0
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-icon {
  font-size: 0;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  .mt-col {
    display: inline-block;
    float: none;
    height: 100px;
    text-align: center;
    vertical-align: middle;

    span {
      display: block;
      padding: 0 5px;
      color: @gray-darker;
      font-size: 12px;
      line-height: 18px;
    }
  }

  .mt-icon {
    margin: 20px 0 10px;
    color: @text-color-primary;
    font-size: 32px;
  }

  .mt-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
  }
}
</style>
