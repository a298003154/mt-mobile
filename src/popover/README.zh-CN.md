# Popover 气泡

### 介绍

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作

如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出

### 引入

``` javascript
import { Popover, PopoverItem } from 'mt-mobile';

Vue.use(Popover).use(PopoverItem);
```

## 代码演示

### 基础用法

通过`v-model`控制弹出层是否展示

```html
<mt-button type="primary" @click="showPopover" ref="popover">
  展示气泡
</mt-button>

<mt-popover v-model="show" :trigger="popover">内容</mt-popover>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.popover = this.$refs.popover.$el;
  }

  methods: {
    showPopover() {
      this.show = true;
    }
  }
};
```

### 选项

通过搭配使用 `PopoverItem`，设置自定义内容的选项

```html
<mt-popover
  v-model="show"
  @select="onSelect"
>
  <mt-popover-item icon="star-oo">图标选项</mt-popover-item>
  <mt-popover-item icon="star" disabled>禁用选项</mt-popover-item>
  <mt-popover-item :active-style="{background: 'red'}">点击激活</mt-popover-item>
</mt-popover>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.popover = this.$refs.popover.$el;
  }

  methods: {
    showPopover() {
      this.show = true;
    },
    onSelect(e, index) {
      console.log(e, index);
    }
  }
};
```

### 放置方向

通过`placement`属性设置放置方向，默认右下方向，可以设置为`top`、`top-left`、`top-right`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top`、`right-bottom`

```html
<mt-popover
  v-model="show"
  placement="top"
>
  放置方向
</mt-popover>
```

### 距离

设置`space`属性后，气泡会根据设置的距离长度，调整与触发器之间的距离

```html
<mt-popover
  v-model="show"
  :space="20"
  position="top"
>距离</mt-popover>
```

### 指定挂载位置

弹出层默认挂载到组件所在位置，可以通过`get-container`属性指定挂载位置

```html
<!-- 挂载到 body 节点下 -->
<mt-popover
  v-model="show"
  get-container="body"
/>

<!-- 挂载到 #app 节点下 -->
<mt-popover
  v-model="show"
  get-container="#app"
/>

<!-- 通过函数指定挂载位置 -->
<mt-popover
  v-model="show"
  :get-container="getContainer"
/>
```

```js
export default {
  methods: {
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector('.my-container');
    }
  }
}
```

## API

### Popover Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前组件是否显示 | *boolean* | `false` |
| trigger | 气泡触发器 | *HTMLElement* | `null` |
| overlay | 是否显示遮罩层 | *boolean* | `true` |
| placement | 放置方向，可选值为 `top` `top-left` `top-right` `bottom` `bottom-left` `bottom-right` `left` `left-top` `left-bottom` `right` `right-top` `right-bottom` | *string* | `bottom-right` |
| overlay-class | 自定义遮罩层类名 | *string* | - |
| overlay-style | 自定义遮罩层样式 | *object* | - |
| duration | 动画时长，单位秒 | *number* | `0.3` |
| space | 与触发器之间的距离 | *number* | `0` |
| lock-scroll | 是否锁定背景滚动 | *boolean* | `true` |
| lazy-render | 是否在显示气泡时才渲染节点 | *boolean* | `true` |
| close-on-click-action | 是否在点击选项后关闭 | *boolean* | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | *boolean* | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭 | *boolean* | `true` |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | *string \| () => HTMLElement* | - |

### PopoverItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| icon | 自定义左侧图标 | *string* | - |
| disabled | 是否禁用选项 | *boolean* | `false` |
| active-style | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | *boolean \| object* | {} |
| active-class | 点击反馈的自定义类名 | *string* | - |

### Popover Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中选项时触发，禁用状态下不会触发 | event: Event, index: 选择对应的索引 |
| open | 打开气泡时触发 | - |
| opened | 打开气泡且动画结束后触发 | - |
| close | 关闭气泡时触发 | - |
| closed | 关闭气泡且动画结束后触发 | - |
| click-overlay | 点击遮罩层时触发 | - |

### PopoverItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发，禁用状态下不会触发 | event: Event |
