<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-list>
        <mt-list-item arrow="horizontal">
          <mt-badge dot>
            <img src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100">
          </mt-badge>
          <span style="margin-left: 12px;">{{ $t('dot') }}</span>
        </mt-list-item>
        <mt-list-item
          thumb="http://qzapp.qlogo.cn/qzapp/1106862728/E1599FC1409FEAA678600D360C5DF850/100"
          arrow="horizontal"
        >
          {{ $t('content') }}
          <mt-badge slot="extra" :text="77" :overflow-count="55" />
        </mt-list-item>
        <mt-list-item>
          <mt-badge corner :text="$t('sales')">
            <div class="corner-badge">{{ $t('corner1') }}</div>
          </mt-badge>
        </mt-list-item>
        <mt-list-item class="special-badge">
          {{ $t('corner2') }}
          <mt-badge slot="extra" :text="$t('sales')" />
        </mt-list-item>
        <mt-list-item>
          {{ $t('marketing') }}:
          <mt-badge text="减" hot :style="{ marginLeft: '8px' }" />
          <mt-badge text="惠" hot :style="{ marginLeft: '8px' }" />
          <mt-badge text="免" hot :style="{ marginLeft: '8px' }" />
          <mt-badge text="反" hot :style="{ marginLeft: '8px' }" />
          <mt-badge text="HOT" hot :style="{ marginLeft: '8px' }" />
        </mt-list-item>
        <mt-list-item>
          {{ $t('customize') }}:
          <mt-badge
            text="券"
            :style="{ marginLeft: '8px' }"
            :sup-style="{ backgroundColor: '#f19736', borderRadius: '2px'}" />
          <mt-badge
            text="NEW"
            :style="{ marginLeft: '8px' }"
            :sup-style="{ backgroundColor: '#21b68a', padding: '0 8px', borderRadius: '4px'}"/>
          <mt-badge
            text="自动缴费"
            :style="{ marginLeft: '8px' }"
            :sup-style="{
              padding: '0 3px',
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#f19736',
              border: '1px solid #f19736'
            }"
          />
        </mt-list-item>
      </mt-list>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      dot: '小红点徽标',
      corner1: '使用角标',
      corner2: '自定义角标',
      sales: '促',
      marketing: '促销',
      customize: '定制'
    },
    'en-US': {
      dot: 'Dot',
      corner1: 'Use corner prop',
      corner2: 'Custom corner',
      sales: 'Sales',
      marketing: 'Marketing',
      customize: 'Customize'
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-badge {
  .mt-doc-demo-block {
    padding: 0 @padding-md;
  }

  .mt-doc-demo-block__title {
    padding-left: 0;
  }

  .corner-badge {
    display: flex;
    align-items: center;
    width: 150px;
    height: 50px;
  }

  .special-badge {
    .mt-list-item__extra {
      height: 100%;
      padding: 0;
    }

    .mt-badge {
      top: 13px;
      right: 0;
      width: 50px;
      transform: rotate(45deg);
      transform-origin: right bottom;
    }

    .mt-badge__content--text {
      border-radius: 1px;
    }
  }
}
</style>
