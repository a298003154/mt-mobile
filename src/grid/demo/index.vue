<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-grid>
        <mt-grid-item
          v-for="i in 4"
          :key="i"
          icon="picture"
          :text="$t('text')"
        />
      </mt-grid>
    </demo-block>

    <demo-block :title="$t('columnNum')">
      <mt-grid :column-num="3">
        <mt-grid-item
          v-for="i in 6"
          :key="i"
          icon="picture"
          :text="$t('text')"
        />
      </mt-grid>
    </demo-block>

    <demo-block :title="$t('customContent')">
      <mt-grid
        :border="false"
        :column-num="3"
      >
        <mt-grid-item>
          <mt-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </mt-grid-item>
        <mt-grid-item>
          <mt-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </mt-grid-item>
        <mt-grid-item>
          <mt-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </mt-grid-item>
      </mt-grid>
    </demo-block>

    <demo-block :title="$t('square')">
      <mt-grid square>
        <mt-grid-item
          v-for="i in 8"
          :key="i"
          icon="picture"
          :text="$t('text')"
        />
      </mt-grid>
    </demo-block>

    <demo-block :title="$t('gutter')">
      <mt-grid :gutter="10">
        <mt-grid-item
          v-for="i in 8"
          :key="i"
          icon="picture"
          :text="$t('text')"
        />
      </mt-grid>
    </demo-block>

    <demo-block :title="$t('route')">
      <mt-grid
        clickable
        :column-num="2"
      >
        <mt-grid-item
          icon="link"
          :text="$t('vueRoute')"
          to="/"
        />
        <mt-grid-item
          icon="search"
          :text="$t('urlRoute')"
          url="https://www.baidu.com"
        />
      </mt-grid>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文字',
      route: '页面导航',
      gutter: '格子间距',
      square: '正方形格子',
      columnNum: '自定义列数',
      customContent: '自定义内容',
      urlRoute: 'URL 跳转',
      vueRoute: '路由跳转'
    },
    'en-US': {
      text: 'Text',
      route: 'Route',
      gutter: 'Gutter',
      square: 'Square',
      columnNum: 'Column Num',
      customContent: 'Custom Content',
      urlRoute: 'URL',
      vueRoute: 'Vue Router'
    }
  }
};
</script>
