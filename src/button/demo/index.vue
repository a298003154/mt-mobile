<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <mt-button type="default">{{ $t('default') }}</mt-button>
        <mt-button type="primary">{{ $t('primary') }}</mt-button>
        <mt-button type="info">{{ $t('info') }}</mt-button>
      </div>
      <mt-button type="danger">{{ $t('danger') }}</mt-button>
      <mt-button type="warning">{{ $t('warning') }}</mt-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <mt-button
        plain
        type="primary"
        :text="$t('plain')"
      ></mt-button>
      <mt-button
        plain
        type="danger"
        :text="$t('plain')"
      ></mt-button>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <mt-button
        disabled
        type="primary"
        :text="$t('disabled')"
      ></mt-button>
      <mt-button
        disabled
        type="danger"
        :text="$t('disabled')"
      ></mt-button>
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <mt-button
        loading
        type="primary"
      ></mt-button>
      <mt-button
        loading
        type="primary"
        loading-type="spinner"
      ></mt-button>
      <mt-button
        loading
        :text="$t('loadingText')"
        type="danger"
      ></mt-button>
    </demo-block>

    <demo-block :title="$t('shape')">
      <mt-button
        type="primary"
        square
        :text="$t('square')"
      ></mt-button>
      <mt-button
        type="danger"
        round
        :text="$t('round')"
      ></mt-button>
    </demo-block>

    <demo-block :title="$t('icon')">
      <mt-button
        type="primary"
        icon="star"
      ></mt-button>
      <mt-button
        plain
        type="primary"
        icon="emoji"
        :text="$t('button')"
      ></mt-button>
    </demo-block>

    <demo-block :title="$t('size')">
      <mt-button
        type="primary"
        size="large"
      >
        {{ $t('large') }}
      </mt-button>
      <mt-button
        type="primary"
        size="normal"
      >
        {{ $t('normal') }}
      </mt-button>
      <mt-button
        type="primary"
        size="small"
      >
        {{ $t('small') }}
      </mt-button>
      <mt-button
        type="primary"
        size="mini"
      >
        {{ $t('mini') }}
      </mt-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...'
    }
  }
};
</script>

<style lang="less">
.demo-button {
  .mt-button {
    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }
  }

  .mt-doc-demo-block {
    padding: 0 15px;
  }

  .mt-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
}
</style>
