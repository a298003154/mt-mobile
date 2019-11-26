# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航

### 引入

``` javascript
import Vue from 'vue';
import { Grid, GridItem } from 'mt-mobile';

Vue.use(Grid).use(GridItem);
```

## 代码演示

### 基本用法

通过`icon`属性设置格子内的图标，`text`属性设置文字内容

```html
<mt-grid>
  <mt-grid-item
    v-for="value in 4"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</mt-grid>
```

### 自定义列数

默认一行展示四个格子，可以通过`column-num`自定义列数

```html
<mt-grid :column-num="3">
  <mt-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</mt-grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容

```html
<mt-grid :border="false" :column-num="3">
  <mt-grid-item>
    <mt-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </mt-grid-item>
  <mt-grid-item>
    <mt-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </mt-grid-item>
  <mt-grid-item>
    <mt-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </mt-grid-item>
</mt-grid>
```

### 正方形格子

设置`square`属性后，格子的高度会和宽度保持一致

```html
<mt-grid square>
  <mt-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</mt-grid>
```

### 格子间距

通过`gutter`属性设置格子之间的距离

```html
<mt-grid :gutter="10">
  <mt-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="文字"
  />
</mt-grid>
```

### 页面导航

通过`to`属性设置`vue-router`跳转链接，通过`url`属性设置 URL 跳转链接

```html
<mt-grid clickable :column-num="2">
  <mt-grid-item
    icon="home-o"
    text="路由跳转"
    to="/"
  />
  <mt-grid-item
    icon="search"
    text="URL 跳转"
    url="https://www.baidu.com"
  />
</mt-grid>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| column-num | 列数 | *number* | `4` |
| gutter | 格子之间的间距，默认单位为`px` | *string \| number* | `0` |
| border | 是否显示边框 | *boolean* | `true` |
| center | 是否将格子内容居中显示 | *boolean* | `true` |
| square | 是否将格子固定为正方形 | *boolean* | `false` |
| clickable | 是否开启格子点击反馈 | *boolean* | `false` |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| text | 文字 | *string* | - |
| icon | 图标名称或图片链接，可选值见 Icon 组件 | *string* | - |
| url | 跳转链接 | *string* | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | *string \| object* | - |
| replace | 跳转时是否替换当前页面历史 | *boolean* | `false` |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击格子时触发 | event: Event |

### GridItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义宫格的所有内容 |
| icon | 自定义图标 |
| text | 自定义文字 |
