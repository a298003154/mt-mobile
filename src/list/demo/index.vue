<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-list>
        <span slot="header">{{ $t('header') }}</span>
        <mt-list-item>
          {{ $t('content') }}
          <span slot="extra">{{ $t('extra') }}</span>
        </mt-list-item>
        <span slot="footer">{{ $t('footer') }}</span>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('brief')">
      <mt-list>
        <mt-list-item>
          {{ $t('content') }}
          <span slot="brief">{{ $t('brief') }}</span>
          <span slot="extra">{{ $t('extra') }}</span>
        </mt-list-item>
        <mt-list-item clickable>
          {{ $t('listItem') }}
          <div slot="brief">{{ $t('clickable') }}</div>
        </mt-list-item>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('thumb')">
      <mt-list>
        <mt-list-item>
          <img slot="thumb" src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100"/>
          {{ $t('thumbSlot') }}
        </mt-list-item>
        <mt-list-item thumb="https://cn.vuejs.org/images/logo.png">
          {{ $t('thumbContent') }}
        </mt-list-item>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('arrow')">
      <mt-list>
        <mt-list-item arrow="up">{{ $t('verticalUp') }}</mt-list-item>
        <mt-list-item arrow="horizontal">{{ $t('horizontal') }}</mt-list-item>
        <mt-list-item arrow="down">{{ $t('vertical') }}</mt-list-item>
        <mt-list-item arrow="empty">{{ $t('empty') }}</mt-list-item>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('route')">
      <mt-list>
        <mt-list-item arrow="horizontal" to="/">{{ $t('vueRoute') }}</mt-list-item>
        <mt-list-item arrow="horizontal" url="https://www.baidu.com">{{ $t('urlRoute') }}</mt-list-item>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('align')">
      <mt-list>
        <mt-list-item align="top" arrow="horizontal">
          {{ $t('content') }}
          <span slot="brief">{{ $t('brief') }}</span>
          <span slot="extra">{{ $t('top') }}</span>
        </mt-list-item>
        <mt-list-item arrow="horizontal">
          {{ $t('listItem') }}
          <div slot="brief">{{ $t('brief') }}</div>
          <span slot="extra">{{ $t('middle') }}</span>
        </mt-list-item>
        <mt-list-item align="bottom" arrow="horizontal">
          {{ $t('content') }}
          <span slot="brief">{{ $t('brief') }}</span>
          <span slot="extra">{{ $t('bottom') }}</span>
        </mt-list-item>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('error')">
      <mt-list>
        <mt-list-item error>
          {{ $t('content') }}
          <span slot="brief">{{ $t('brief') }}</span>
          <span slot="extra">{{ $t('extraError') }}</span>
        </mt-list-item>
        <mt-list-item error arrow="horizontal">
          {{ $t('listItem') }}
          <span slot="brief">{{ $t('brief') }}</span>
          <span slot="extra">{{ $t('extraError') }}</span>
        </mt-list-item>
      </mt-list>
    </demo-block>

    <demo-block :title="$t('wrapAndMultiple')">
      <mt-list>
        <mt-list-item>
          {{ $t('singleLine') }}
        </mt-list-item>
        <mt-list-item wrap>
          {{ $t('wrap') }}
          <span slot="extra">{{ $t('extra') }}</span>
        </mt-list-item>
        <mt-list-item multipleLine wrap>
          {{ $t('multipleLine') }}
          <span slot="extra">{{ $t('extra') }}</span>
        </mt-list-item>
      </mt-list>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      header: '标题',
      footer: '页脚',
      extra: '右侧内容',
      brief: '辅助说明',
      listItem: '列表项',
      clickable: '开启点击反馈',
      thumb: '缩略图',
      arrow: '箭头方向',
      route: '页面导航',
      wrapAndMultiple: '换行与多行',
      align: '垂直对齐方式',
      error: '报错样式',
      thumbContent: '使用属性thumb字符串',
      thumbSlot: '通过slot插入缩略图',
      horizontal: '箭头向右',
      vertical: '箭头向下',
      verticalUp: '箭头向上',
      empty: '箭头dom存在，但不显示',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转',
      top: '上对齐',
      middle: '默认居中对齐',
      bottom: '下对齐',
      extraError: '报错样式',
      singleLine: '默认单行不换行，长文本会隐藏，显示省略号',
      wrap: '长文本会换行，长文本长文本长文本长文本长文本长文本长文本',
      multipleLine: '多行显示并且长文本会换行，长文本长文本长文本长文本长文本长文本长文本长文本'
    },
    'en-US': {
      header: 'Header',
      footer: 'Footer',
      extra: 'Extra Content',
      brief: 'Brief',
      listItem: 'List Item',
      clickable: 'Clickable',
      thumb: 'Thumbnail',
      arrow: 'Arrow',
      route: 'Route',
      wrapAndMultiple: 'Wrap & MultipleLine',
      align: 'Align',
      error: 'Error',
      thumbContent: 'Thumbnail from thumb prop',
      thumbSlot: 'Thumbnail form thumb slot',
      horizontal: 'Horizontal',
      vertical: 'Vertical Down',
      verticalUp: 'Vertical Up',
      empty: 'Direction empty will hide the dom',
      urlRoute: 'URL',
      vueRoute: 'Vue Router',
      top: 'Top',
      middle: 'Default Middle',
      bottom: 'Bottom',
      extraError: 'Error Style',
      singleLine: 'Single line, long text will be hidden with ellipsis',
      wrap: 'Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text',
      multipleLine: 'Multiple line and long text will wrap. Long Text Long Text Long Text'
    }
  }
};
</script>

<style lang="less">
.demo-list {
  .custom-title {
    margin-right: 5px;
    vertical-align: middle;
  }
}
</style>
