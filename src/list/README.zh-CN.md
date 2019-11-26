# List 列表

### 引入
``` javascript
import { List, ListItem } from 'mt-mobile';

Vue.use(List).use(ListItem);
```

## 代码演示

### 基础用法

`ListItem`可以单独使用，也可以与`List`搭配使用。`List`可以为`ListItem`提供上下外边框。

```html
 <mt-list>
    <span slot="header">标题</span>
    <mt-list-item>
      内容
      <span slot="extra">右侧内容</span>
    </mt-list-item>
    <span slot="footer">页脚</span>
  </mt-list>
```

### 辅助说明

使用`brief`插槽在内容展示辅助说明

```html
  <mt-list>
    <mt-list-item>
      内容
      <span slot="brief">辅助说明</span>
      <span slot="extra">右侧内容</span>
    </mt-list-item>
    <mt-list-item clickable>
      列表项
      <div slot="brief">开启点击反馈</div>
    </mt-list-item>
  </mt-list>
```

### 缩略图

通过`thumb`属性或者使用`thumb`插槽在标题左侧展示缩略图

```html
  <mt-list>
    <mt-list-item>
      通过slot插入缩略图
      <img slot="thumb" src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100"/>
    </mt-list-item>
    <mt-list-item thumb="https://cn.vuejs.org/images/logo.png">
      使用属性thumb字符串
    </mt-list-item>
  </mt-list>
```

### 箭头方向

设置`arrow`的值为箭头方向

```html
  <mt-list>
    <mt-list-item arrow="up">箭头向上</mt-list-item>
    <mt-list-item arrow="horizontal">箭头向右</mt-list-item>
    <mt-list-item arrow="down">箭头向下</mt-list-item>
    <mt-list-item arrow="empty">箭头dom存在，但不显示</mt-list-item>
  </mt-list>
```

### 页面导航

通过`to`属性设置`vue-router`跳转链接，通过`url`属性设置 URL 跳转链接

```html
  <mt-list>
    <mt-list-item arrow="horizontal" to="/">路由跳转</mt-list-item>
    <mt-list-item arrow="horizontal" url="https://www.baidu.com">URL 跳转</mt-list-item>
  </mt-list>
```

### 对齐方式

通过设置`align`属性，让右侧内容`extra`对齐方式改变

```html
  <mt-list>
    <mt-list-item align="top" arrow="horizontal">
      内容
      <span slot="brief">辅助说明</span>
      <span slot="extra">上对齐</span>
    </mt-list-item>
    <mt-list-item arrow="horizontal">
      列表项
      <div slot="brief">辅助说明</div>
      <span slot="extra">默认居中对齐</span>
    </mt-list-item>
    <mt-list-item align="bottom" arrow="horizontal">
      内容
      <span slot="brief">辅助说明</span>
      <span slot="extra">下对齐</span>
    </mt-list-item>
  </mt-list>
```

### 错误样式

可以通过`error`属性设置`extra`的文字变为橙色

```html
  <mt-list>
    <mt-list-item error>
      内容
      <span slot="brief">辅助说明</span>
      <span slot="extra">错误样式</span>
    </mt-list-item>
    <mt-list-item error arrow="horizontal">
      列表项
      <span slot="brief">辅助说明</span>
      <span slot="extra">错误样式</span>
    </mt-list-item>
  </mt-list>
```

### 换行与多行

通过`wrap`属性可以让长文本换行

```html
  <mt-list>
    <mt-list-item>
      默认单行不换行，长文本会隐藏，显示省略号
    </mt-list-item>
    <mt-list-item wrap>
      长文本会换行，长文本长文本长文本长文本长文本长文本长文本
      <span slot="extra">右侧内容</span>
    </mt-list-item>
    <mt-list-item multiple-line wrap>
      多行显示并且长文本会换行，长文本长文本长文本长文本长文本长文本长文本长文本
      <span slot="extra">右侧内容</span>
    </mt-list-item>
  </mt-list>
```

## API

### ListItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| thumb | 缩略图，用于设置 `<img />` 的src属性，会被插槽 `thumb` 覆盖 | *string* | - |
| arrow | 箭头方向，可选值为 `horizontal` `up` `down` `empty` <br/> 如果是 `empty` 则存在对应的dom，但是不显示 | *string* | - |
| align | 垂直对齐方式，可选值为 `top` `middle` `bottom` | *string* | - |
| wrap | 是否换行，默认情况下，文字超长会被隐藏 | *boolean* | - |
| error | 报错样式，右侧文字颜色变成橙色 | *boolean* | - |
| clickable | 是否开启点击反馈 | *boolean* | `false` |
| multiple-line | 多行 | *boolean* | - |
| content-style | 主体内容额外样式 | *any* | - | - |
| active-style | 点击反馈的自定义样式 | *object* | - |
| active-class | 点击反馈的自定义类名 | *object* | - |
| content-class | 主体内容额外类名 | *any* | - |
| extra-class | 右侧内容额外类名 | *any* | - |
| brief-class | 辅助说明额外类名 | *any* | - |
| url | 跳转链接 | *string* | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | *string \| object* | - |
| replace | 跳转时是否替换当前页面历史 | *boolean* | `false` |

### ListItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击列表项时触发 | event: Event |

### List Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容，一般用于包裹 ListItem 组件 |
| header | 自定义标题 |
| footer | 自定义页脚 |


### ListItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义显示内容 |
| brief | 自定义辅助说明 |
| extra | 自定义右侧内容 |
| thumb | 自定义缩略图 |
