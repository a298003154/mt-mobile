<template>
  <demo-section>
    <demo-block :title="$t('title2')">
      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
      <mt-white-space size="xxs"/>

      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
      <mt-white-space size="xs"/>

      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
      <mt-white-space size="sm"/>

      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
      <mt-white-space size="md"/>

      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
      <mt-white-space size="lg"/>

      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
      <mt-white-space size="xl"/>

      <mt-row class="placeholder">{{ $t('block') }}</mt-row>
    </demo-block>

    <demo-block :title="$t('title3')">
      <mt-wing-blank size="lg">
        <mt-row class="placeholder">
          {{ $t('block') }}
        </mt-row>
      </mt-wing-blank>
      <mt-white-space/>

      <mt-wing-blank size="md">
        <mt-row class="placeholder">
          {{ $t('block') }}
        </mt-row>
      </mt-wing-blank>
      <mt-white-space/>

      <mt-wing-blank size="sm">
        <mt-row class="placeholder">
          {{ $t('block') }}
        </mt-row>
      </mt-wing-blank>
      <mt-white-space/>

      <mt-wing-blank size="xs">
        <mt-row class="placeholder">
          {{ $t('block') }}
        </mt-row>
      </mt-wing-blank>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '上下留白',
      title3: '两翼留白',
      block: '块'
    },
    'en-US': {
      title2: 'White Space',
      title3: 'Wing Blank',
      block: 'block',
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-white-space {
  .mt-doc-demo-block {
    padding: 0 @padding-md;
  }

  .mt-doc-demo-block__title {
    padding-left: 0;
  }

  .placeholder {
    width: 100%;
    height: 30px;
    color: #bbb;
    line-height: 30px;
    text-align: center;
    background-color: #ebebef;
  }

  .mt-col {
    color: @white;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
