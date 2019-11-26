<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-button
        type="primary"
        @click="showBasic = true"
      >
        {{ $t('buttonBasic') }}
      </mt-button>
      <mt-popup
        v-model="showBasic"
        :style="{ padding: '30px 50px' }"
      >
        {{ $t('content') }}
      </mt-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <mt-row>
        <mt-button
          type="primary"
          @click="showTop = true"
        >
          {{ $t('buttonTop') }}
        </mt-button>

        <mt-popup
          v-model="showTop"
          position="top"
          :style="{ height: '20%' }"
        />

        <mt-button
          type="primary"
          @click="showBottom = true"
        >
          {{ $t('buttonBottom') }}
        </mt-button>

        <mt-popup
          v-model="showBottom"
          position="bottom"
          :style="{ height: '20%' }"
        />
      </mt-row>

      <mt-button
        type="primary"
        @click="showLeft = true"
      >
        {{ $t('buttonLeft') }}
      </mt-button>

      <mt-popup
        v-model="showLeft"
        position="left"
        :style="{ width: '20%', height: '100%' }"
      />

      <mt-button
        type="primary"
        @click="showRight = true"
      >
        {{ $t('buttonRight') }}
      </mt-button>

      <mt-popup
        v-model="showRight"
        position="right"
        :style="{ width: '20%', height: '100%' }"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('roundCorner')"
    >
      <mt-button
        type="primary"
        @click="showRoundCorner = true"
      >
        {{ $t('roundCorner') }}
      </mt-button>
      <mt-popup
        v-model="showRoundCorner"
        round
        position="bottom"
        :style="{ height: '20%' }"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('getContainer')"
    >
      <mt-button
        type="primary"
        @click="showGetContainer = true"
      >
        {{ $t('getContainer') }}
      </mt-button>
      <mt-popup
        v-model="showGetContainer"
        get-container="body"
        :style="{ padding: '30px 50px' }"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      buttonBasic: '展示弹出层',
      buttonTop: '顶部弹出',
      buttonBottom: '底部弹出',
      buttonLeft: '左侧弹出',
      buttonRight: '右侧弹出',
      getContainer: '指定挂载节点',
      roundCorner: '圆角弹窗'
    },
    'en-US': {
      position: 'Position',
      buttonBasic: 'Show Popup',
      buttonTop: 'From Top',
      buttonBottom: 'From Bottom',
      buttonLeft: 'From Left',
      buttonRight: 'From Right',
      getContainer: 'Get Container',
      roundCorner: 'Round Corner'
    }
  },

  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showRoundCorner: false,
      showGetContainer: false
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .mt-row {
    margin-bottom: @padding-md;
  }

  .mt-button {
    margin-left: @padding-md;
  }
}
</style>
