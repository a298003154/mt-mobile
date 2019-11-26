# Tab 标签页

### 引入

``` javascript
import Vue from 'vue';
import { Tab, Tabs } from 'mt-mobile';

Vue.use(Tab).use(Tabs);
```

## 代码演示

### 基础用法

通过`v-model`绑定当前激活标签对应的索引值，默认情况下启用第一个标签

```html
<mt-tabs v-model="active">
  <mt-tab title="标签 1">内容 1</mt-tab>
  <mt-tab title="标签 2">内容 2</mt-tab>
  <mt-tab title="标签 3">内容 3</mt-tab>
  <mt-tab title="标签 4">内容 4</mt-tab>
</mt-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

### 通过名称匹配

在标签指定`name`属性的情况下，`v-model`的值为当前标签的`name`

```html
<mt-tabs v-model="activeName">
  <mt-tab title="标签 1" name="a">内容 1</mt-tab>
  <mt-tab title="标签 2" name="b">内容 2</mt-tab>
  <mt-tab title="标签 3" name="c">内容 3</mt-tab>
</mt-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a'
    };
  }
}
```

### 标签栏滚动

标签数量超过 4 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中

```html
<mt-tabs>
  <mt-tab v-for="index in 8" :title="'标签 ' + index">
    内容 {{ index }}
  </mt-tab>
</mt-tabs>
```

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`mt-tabs`上监听`disabled`事件

```html
<mt-tabs @disabled="onClickDisabled">
  <mt-tab title="标签 1">内容 1</mt-tab>
  <mt-tab title="标签 2" disabled>内容 2</mt-tab>
  <mt-tab title="标签 3">内容 3</mt-tab>
</mt-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(name, title) {
      this.$toast(name + '已被禁用');
    }
  }
};
```

### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格

```html
<mt-tabs type="card">
  <mt-tab title="标签 1">内容 1</mt-tab>
  <mt-tab title="标签 2">内容 2</mt-tab>
  <mt-tab title="标签 3">内容 3</mt-tab>
</mt-tabs>
```

### 点击事件

可以在`mt-tabs`上绑定`click`事件，事件传参为标签对应的索引和标题

```html
<mt-tabs @click="onClick">
  <mt-tab title="标签 1">内容 1</mt-tab>
  <mt-tab title="标签 2">内容 2</mt-tab>
</mt-tabs>
```

```javascript
export default {
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  }
};
```

### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶

```html
<mt-tabs v-model="active" sticky>
  <mt-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </mt-tab>
</mt-tabs>
```

### 自定义标签

通过 title 插槽可以自定义标签内容

```html
<mt-tabs v-model="active">
  <mt-tab v-for="index in 2">
    <div slot="title">
      <mt-icon name="more-o" />选项
    </div>
    内容 {{ index }}
  </mt-tab>
</mt-tabs>
```

### 切换动画

通过`animated`属性可以开启切换标签内容时的转场动画

```html
<mt-tabs v-model="active" animated>
  <mt-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </mt-tab>
</mt-tabs>
```

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页

```html
<mt-tabs v-model="active" swipeable>
  <mt-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </mt-tab>
</mt-tabs>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 绑定当前选中标签的标识符 | *string \| number* | `0` |
| type | 样式类型，可选值为`card` | *string* | `line` |
| duration | 动画时间，单位秒 | *number* | `0.3` |
| background | 标签栏背景色 | *string* | `white` |
| line-width | 底部条宽度，默认单位 px | *string \| number* | `auto` |
| line-height | 底部条高度，默认单位 px | *string \| number* | `3px` |
| color | 标签主题色 | *string* | `#ee0a24` |
| title-active-color | 标题选中态颜色 | *string* | - |
| title-inactive-color | 标题默认态颜色 | *string* | - |
| swipe-threshold | 滚动阈值，标签数量超过多少个可滚动 | *number* | `4` |
| offset-top | 粘性定位布局下与顶部的最小距离，单位 px | *number* | `0` |
| animated | 是否开启切换标签内容时的转场动画 | *boolean* | `false` |
| border | 是否显示标签栏外边框，仅在`type="line"`时有效 | *boolean* | `true` |
| ellipsis | 是否省略过长的标题文字 | *boolean* | `true` |
| sticky | 是否使用粘性定位布局 | *boolean* | `false` |
| swipeable | 是否开启手势滑动切换 | *boolean* | `false` |
| lazy-render | 是否开启标签页内容延迟渲染 | *boolean* | `true` |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标签名称，作为匹配的标识符 | *string \| number* | 标签的索引值 |
| title | 标题 | *string* | - |
| disabled | 是否禁用标签 | *boolean* | `false` |

### Tabs Slots

| 名称 | 说明 |
|------|------|
| nav-left | 标题左侧内容 |
| nav-right | 标题右侧内容 |

### Tab Slots

| 名称 | 说明 |
|------|------|
| default | 标签页内容 |
| title | 自定义标签 |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击标签时触发 | name：标签标识符，title：标题 |
| change | 当前激活的标签改变时触发 | name：标签标识符，title：标题 |
| disabled | 点击被禁用的标签时触发 | name：标签标识符，title：标题 |
| scroll | 滚动时触发，仅在 sticky 模式下生效 | { scrollTop: 距离顶部位置, isFixed: 是否吸顶 } |
