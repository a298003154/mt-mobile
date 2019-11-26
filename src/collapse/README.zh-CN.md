# Collapse 折叠面板

### 引入

``` javascript
import Vue from 'vue';
import { Collapse, CollapseItem } from 'mt-mobile';

Vue.use(Collapse).use(CollapseItem);
```

## 代码演示

### 基础用法

通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<mt-collapse v-model="activeNames">
  <mt-collapse-item title="标题1" name="1">内容</mt-collapse-item>
  <mt-collapse-item title="标题2" name="2">内容</mt-collapse-item>
  <mt-collapse-item title="标题3" name="3" disabled>内容</mt-collapse-item>
</mt-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<mt-collapse v-model="activeName" accordion>
  <mt-collapse-item title="标题1" name="1">内容</mt-collapse-item>
  <mt-collapse-item title="标题2" name="2">内容</mt-collapse-item>
  <mt-collapse-item title="标题3" name="3">内容</mt-collapse-item>
</mt-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### 自定义标题内容

```html
<mt-collapse v-model="activeNames">
  <mt-collapse-item name="1">
    <div slot="title">标题1<mt-icon name="circle-question" size="xxs"/>
  </mt-collapse-item>
  <mt-collapse-item>
    <img slot="thumb" src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100"/>
    <div slot="title">标题2</div>
    <div slot="extra">内容</div>
  </mt-collapse-item>
</mt-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前展开面板的 name | 手风琴模式：*string \| number*<br>非手风琴模式：*(string \| number)[]* | - |
| accordion | 是否开启手风琴模式 | *boolean* | `false` |
| border | 是否显示外边框 | *boolean* | `true` |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换面板时触发 | activeNames: 类型与 v-model 绑定的值一致 |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 唯一标识符，默认为索引值 | *string \| number* | `index` |
| disabled | 是否禁用面板 | *boolean* | `false` |
| thumb | 缩略图，用于设置 `<img />` 的src属性 | *string* | - |
| align | 垂直对齐方式，可选值为 `top` `middle` `bottom` | *string* | - |
| wrap | 是否换行，默认情况下，文字超长会被隐藏 | *boolean* | - |
| clickable | 是否开启点击反馈 | *boolean* | `false` |
| multiple-line | 多行 | *boolean* | - |
| active-style | 自定义激活状态样式 | *object* | - |

### CollapseItem Slots

| 名称 | 说明 |
|------|------|
| default | 面板内容 |
| title | 自定义标题内容 |
| brief | 自定义辅助说明 |
| extra | 自定义右侧内容 |
| thumb | 自定义缩略图 |
