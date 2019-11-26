# Tabbar 标签栏

### 引入

``` javascript
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'mt-mobile';

Vue.use(Tabbar).use(TabbarItem);
```

## 代码演示

### 基础用法

`v-model`默认绑定选中标签的索引值，通过修改`v-model`即可切换选中的标签

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item icon="profile">标签</mt-tabbar-item>
  <mt-tabbar-item icon="search">标签</mt-tabbar-item>
  <mt-tabbar-item icon="compass">标签</mt-tabbar-item>
  <mt-tabbar-item icon="setting">标签</mt-tabbar-item>
</mt-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

### 通过名称匹配

在标签指定`name`属性的情况下，`v-model`的值为当前标签的`name`

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item name="profile" icon="profile">标签</mt-tabbar-item>
  <mt-tabbar-item name="search" icon="search">标签</mt-tabbar-item>
  <mt-tabbar-item name="compass" icon="compass">标签</mt-tabbar-item>
  <mt-tabbar-item name="setting" icon="setting">标签</mt-tabbar-item>
</mt-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
```

### 显示徽标

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item icon="profile">标签</mt-tabbar-item>
  <mt-tabbar-item icon="search" dot>标签</mt-tabbar-item>
  <mt-tabbar-item icon="compass" info="5">标签</mt-tabbar-item>
  <mt-tabbar-item icon="setting" info="20">标签</mt-tabbar-item>
</mt-tabbar>
```

### 自定义图标

通过 icon 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item info="3">
    <span>自定义</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </mt-tabbar-item>
  <mt-tabbar-item icon="compass">标签</mt-tabbar-item>
  <mt-tabbar-item icon="setting">标签</mt-tabbar-item>
</mt-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
```

### 自定义颜色

```html
<mt-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <mt-tabbar-item icon="profile">标签</mt-tabbar-item>
  <mt-tabbar-item icon="search">标签</mt-tabbar-item>
  <mt-tabbar-item icon="compass">标签</mt-tabbar-item>
  <mt-tabbar-item icon="setting">标签</mt-tabbar-item>
</mt-tabbar>
```

### 路由模式

标签栏支持路由模式，用于搭配`vue-router`使用。路由模式下会匹配页面路径和标签的`to`属性，并自动选中对应的标签

```html
<router-view />

<mt-tabbar route>
  <mt-tabbar-item
    replace
    to="/profile"
    icon="profile"
  >
    标签
  </mt-tabbar-item>
  <mt-tabbar-item
    replace
    to="/search"
    icon="search"
  >
    标签
  </mt-tabbar-item>
</mt-tabbar>
```

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前选中标签的名称或索引值 | *string \| number* | `0` |
| fixed | 是否固定在底部 | *boolean* | `true` |
| border | 是否显示外边框 | *boolean* | `true` |
| z-index | 元素 z-index | *number* | `1` |
| active-color | 选中标签的颜色 | *string* | `#1989fa` |
| inactive-color | 未选中标签的颜色 | *string* | `#7d7e80` |
| route | 是否开启路由模式 | *boolean* | `false` |
| safe-area-inset-bottom | 是否开启 iPhone X 底部安全区适配，需要在 `viewport` meta 标签中设置 `viewport-fit=cover` | *boolean* | `false` |

### Tabbar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换标签时触发 | active: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标签名称，作为匹配的标识符 | *string \| number* | 当前标签的索引值 |
| icon | 图标名称或图片链接，可选值见 Icon 组件| *string* | - |
| dot | 是否显示小红点 | *boolean* | - |
| info | 图标右上角提示信息 | *string \| number* | - |
| url | 跳转链接 | *string* | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | *string \| object* | - |
| replace | 跳转时是否替换当前页面历史 | *boolean* | `false` |

### TabbarItem Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| icon | 自定义图标 | active: 是否为选中标签 |
