<template>
  <demo-section>
    <mt-list>
      <mt-list-item center>
        {{ $t('basicUsage') }}
        <mt-stepper v-model="stepper1" slot="extra"/>
      </mt-list-item>

      <mt-list-item center>
        {{ $t('step') }}
        <mt-stepper v-model="stepper2" step="2" slot="extra" />
      </mt-list-item>

      <mt-list-item center>
        {{ $t('range') }}
        <mt-stepper v-model="stepper3" :min="5" :max="8" slot="extra" />
      </mt-list-item>

      <mt-list-item center>
        {{ $t('integer') }}
        <mt-stepper v-model="stepper4" integer slot="extra" />
      </mt-list-item>

      <mt-list-item center>
        {{ $t('disabled') }}
        <mt-stepper v-model="stepper5" disabled slot="extra" />
      </mt-list-item>

      <mt-list-item center>
        {{ $t('decimalLength') }}
        <mt-stepper v-model="stepper8" :decimal-length="1" step="0.2" slot="extra" />
      </mt-list-item>

      <mt-list-item center>
        {{ $t('customSize') }}
        <mt-stepper v-model="stepper7" button-size="32px" input-width="40px" slot="extra" />
      </mt-list-item>

      <mt-list-item center>
        {{ $t('asyncChange') }}
        <mt-stepper :value="stepper6" async-change @change="onChange" slot="extra" />
      </mt-list-item>
    </mt-list>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      asyncChange: '异步变更',
      customSize: '自定义大小',
      decimalLength: '固定小数位数'
    },
    'en-US': {
      step: 'Step',
      range: 'Range',
      integer: 'Integer',
      asyncChange: 'Async Change',
      customSize: 'Custom Size',
      decimalLength: 'Decimal Length'
    }
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1
    };
  },

  methods: {
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.stepper6 = value;
        this.$toast.clear();
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import '../../style/mixins/base';

.demo-stepper {
  .mt-list__body {
    .hairline-remove('top');
    .hairline-remove('bottom');
  }
}
</style>
