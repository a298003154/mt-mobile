<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-button
        type="primary"
        ref="basicPopover"
        @click="showBasic = true"
      >
        {{ $t('buttonBasic') }}
      </mt-button>
      <mt-popover
        v-model="showBasic"
        :trigger="basicPopover"
      >
        <div :style="{ padding: '20px' }">{{ $t('content') }}</div>
      </mt-popover>
    </demo-block>

    <demo-block :title="$t('placement')">
      <mt-button
        type="primary"
        ref="buttonTop"
        @click="showTop = true"
      >
        {{ $t('buttonTop') }}
      </mt-button>
      <mt-popover
        v-model="showTop"
        placement="top"
        :trigger="buttonTop"
      >
        <div :style="{ padding: '20px' }">{{ $t('buttonTop') }}</div>
      </mt-popover>

      <mt-button
        type="primary"
        ref="buttonBottom"
        @click="showBottom = true"
      >
        {{ $t('buttonBottom') }}
      </mt-button>
      <mt-popover
        v-model="showBottom"
        placement="bottom"
        :trigger="buttonBottom"
      >
        <div :style="{ padding: '20px' }">{{ $t('buttonBottom') }}</div>
      </mt-popover>

      <mt-button
        type="primary"
        ref="buttonRight"
        @click="showRight = true"
      >
        {{ $t('buttonRight') }}
      </mt-button>
      <mt-popover
        v-model="showRight"
        placement="right"
        :trigger="buttonRight"
      >
        <div :style="{ padding: '20px' }">{{ $t('buttonRight') }}</div>
      </mt-popover>

      <mt-button
        type="primary"
        ref="buttonLeft"
        @click="showLeft = true"
      >
        {{ $t('buttonLeft') }}
      </mt-button>
      <mt-popover
        v-model="showLeft"
        placement="left"
        :trigger="buttonLeft"
      >
        <div :style="{ padding: '20px' }">{{ $t('buttonLeft') }}</div>
      </mt-popover>
    </demo-block>

    <demo-block :title="$t('option')">
      <mt-button
        type="primary"
        ref="buttonOption"
        @click="showOption = true"
      >
        {{ $t('buttonOption') }}
      </mt-button>
      <mt-popover
        v-model="showOption"
        :trigger="buttonOption"
        @select="onSelect"
      >
        <mt-popover-item>{{ $t('option') }} 1</mt-popover-item>
        <mt-popover-item>{{ $t('option') }} 2</mt-popover-item>
      </mt-popover>

      <mt-button
        type="primary"
        ref="buttonIcon"
        @click="showIcon = true"
      >
        {{ $t('buttonIcon') }}
      </mt-button>
      <mt-popover
        v-model="showIcon"
        :trigger="buttonIcon"
      >
        <mt-popover-item icon="emoji">{{ $t('icon') }}</mt-popover-item>
        <mt-popover-item
          icon="heart-o"
        >{{ $t('icon') }}</mt-popover-item>
      </mt-popover>

      <mt-button
        type="primary"
        ref="buttonStatus"
        @click="showStatus = true"
      >
        {{ $t('buttonStatus') }}
      </mt-button>
      <mt-popover
        v-model="showStatus"
        :trigger="buttonStatus"
      >
        <mt-popover-item icon="star" disabled>{{ $t('disabledOption') }}</mt-popover-item>
        <mt-popover-item
          icon="heart-o"
          :active-style="{background: 'red'}"
        >{{ $t('clickActive') }}</mt-popover-item>
      </mt-popover>
    </demo-block>

    <demo-block :title="$t('space')">
      <mt-button
        type="primary"
        ref="buttonSpace"
        @click="showSpace = true"
      >
        {{ $t('space') }}
      </mt-button>
      <mt-popover
        v-model="showSpace"
        placement="top"
        :space="20"
        :trigger="buttonSpace"
      >
        <div :style="{ padding: '20px' }">
          {{ $t('space') }}: 20px
        </div>
      </mt-popover>
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('getContainer')"
    >
      <mt-button
        type="primary"
        ref="getContainer"
        @click="showGetContainer = true"
      >
        {{ $t('getContainer') }}
      </mt-button>
      <mt-popover
        v-model="showGetContainer"
        get-container="body"
        placement="bottom"
        :trigger="getContainer"
      >
        <div :style="{ padding: '20px' }">
          {{ $t('getContainer') }}
        </div>
      </mt-popover>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      space: '距离',
      placement: '放置方向',
      buttonBasic: '展示气泡',
      buttonTop: '向上',
      buttonBottom: '向下',
      buttonLeft: '向左',
      buttonRight: '向右',
      buttonOption: '自定义',
      buttonIcon: '图标',
      buttonStatus: '状态',
      getContainer: '指定挂载节点',
      icon: '图标',
      option: '选项',
      disabledOption: '禁用选项',
      clickActive: '点击激活'
    },
    'en-US': {
      space: 'Distance from trigger',
      placement: 'Placement',
      buttonBasic: 'Show Popover',
      buttonTop: 'To Top',
      buttonBottom: 'To Bottom',
      buttonLeft: 'To Left',
      buttonRight: 'To Right',
      buttonOption: 'Custom Option',
      buttonIcon: 'Icon',
      buttonStatus: 'Status',
      getContainer: 'Get Container',
      icon: 'Icon',
      option: 'Option',
      disabledOption: 'Disabled Option',
      clickActive: 'Click Active'
    }
  },

  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showGetContainer: false,
      showOption: false,
      showStatus: false,
      showIcon: false,
      showSpace: false,
      basicPopover: null,
      buttonTop: null,
      buttonBottom: null,
      buttonLeft: null,
      buttonRight: null,
      getContainer: null,
      buttonOption: null,
      buttonIcon: null,
      buttonStatus: null,
      buttonSpace: null,
    };
  },

  mounted() {
    this.basicPopover = this.$refs.basicPopover.$el;
    this.buttonTop = this.$refs.buttonTop.$el;
    this.buttonBottom = this.$refs.buttonBottom.$el;
    this.buttonLeft = this.$refs.buttonLeft.$el;
    this.buttonRight = this.$refs.buttonRight.$el;
    this.getContainer = this.$refs.getContainer.$el;
    this.buttonOption = this.$refs.buttonOption.$el;
    this.buttonIcon = this.$refs.buttonIcon.$el;
    this.buttonStatus = this.$refs.buttonStatus.$el;
    this.buttonSpace = this.$refs.buttonSpace.$el;
  },

  methods: {
    onSelect(e, index) {
      console.log(e, index);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popover {
  .mt-row {
    margin-bottom: @padding-md;
  }

  .mt-button {
    margin-left: @padding-xs;

    &:first-of-type {
      margin-left: 0;
    }
  }

  .mt-doc-demo-block {
    padding: 0 15px;
  }

  .mt-doc-demo-block__title {
    padding-left: 0;
  }

  .mt-row--justify-space-around {
    .mt-button {
      margin-left: 0;
    }
  }

  .mt-row--justify-center {
    .mt-button {
      margin-left: 0;
    }
  }
}
</style>
