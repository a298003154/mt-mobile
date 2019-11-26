# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

``` javascript
import Vue from 'vue';
import { Sticky } from 'mt-mobile';

Vue.use(Sticky);
```

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可

```html
<mt-sticky>
  <mt-button type="primary">基础用法</mt-button>
</mt-sticky>
```

### 吸顶距离

通过`offset-top`属性可以设置组件在吸顶时与顶部的距离

```html
<mt-sticky :offset-top="50">
  <mt-button type="info">吸顶距离</mt-button>
</mt-sticky>
```

### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部

```html
<div ref="container" style="height: 150px;">
  <mt-sticky :container="container">
    <mt-button type="warning">指定容器</mt-button>
  </mt-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| offset-top | 吸顶时与顶部的距离，单位`px` | *number* | `0` |
| z-index | 吸顶时的 z-index | *number* | `99` |
| container | 容器对应的 HTML 节点 | *HTMLElement* | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| scroll | 滚动时触发 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
