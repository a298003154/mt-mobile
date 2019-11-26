<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-sticky>
        <mt-button
          type="primary"
          style="margin-left: 15px;"
        >
          {{ $t('basicUsage') }}
        </mt-button>
      </mt-sticky>
    </demo-block>

    <demo-block :title="$t('offsetTop')">
      <mt-sticky :offset-top="50">
        <mt-button
          type="info"
          style="margin-left: 115px;"
        >
          {{ $t('offsetTop') }}
        </mt-button>
      </mt-sticky>
    </demo-block>

    <demo-block :title="$t('setContainer')">
      <div
        ref="container"
        style="height: 150px; background-color: #fff;"
      >
        <mt-sticky :container="container">
          <mt-button
            type="warning"
            style="margin-left: 215px;"
          >
            {{ $t('setContainer') }}
          </mt-button>
        </mt-sticky>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      offsetTop: '吸顶距离',
      setContainer: '指定容器'
    },
    'en-US': {
      offsetTop: 'Offset Top',
      setContainer: 'Set Container'
    }
  },

  data() {
    return {
      container: null
    };
  },

  mounted() {
    this.container = this.$refs.container;
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-sticky {
  height: 200vh;

  .mt-button {
    margin-left: @padding-md;
  }
}
</style>
