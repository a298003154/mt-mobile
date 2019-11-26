# Radio 单选框

### 引入

``` javascript
import Vue from 'vue';
import { RadioGroup, Radio } from 'mt-mobile';

Vue.use(RadioGroup);
Vue.use(Radio);
```

## 代码演示

### 基础用法

通过`v-model`绑定值当前选中项的 name

```html
<mt-radio-group v-model="radio">
  <mt-radio name="1">单选框 1</mt-radio>
  <mt-radio name="2">单选框 2</mt-radio>
</mt-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`mt-radio`上设置`disabled`可以禁用单个选项

```html
<mt-radio-group v-model="radio" disabled>
  <mt-radio name="1">单选框 1</mt-radio>
  <mt-radio name="2">单选框 2</mt-radio>
</mt-radio-group>
```

### 自定义颜色

通过`checked-color`属性设置选中状态的图标颜色

```html
<mt-radio-group v-model="radio">
  <mt-radio name="1" checked-color="#07c160">单选框 1</mt-radio>
  <mt-radio name="2" checked-color="#07c160">单选框 2</mt-radio>
</mt-radio-group>
```

### 自定义图标

通过`icon`插槽自定义图标，并通过`slotProps`判断是否为选中状态

```html
<mt-radio-group v-model="radio">
  <mt-radio name="1">
    单选框 1
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? icon.active : icon.inactive"
    >
  </mt-radio>
  <mt-radio name="2">
    单选框 2
    <img
      slot="icon"
      slot-scope="props"
      :src="props.checked ? icon.active : icon.inactive"
    >
  </mt-radio>
</mt-radio-group>
```

```js
export default {
  data() {
    return {
      radio: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
```

### 与 List 组件一起使用

此时你需要再引入`mt-list`和`mt-list-item`组件。

```html
<mt-radio-group v-model="radio">
  <mt-list>
    <mt-list-item title="单选框 1" clickable @click="radio = '1'">
      <mt-radio slot="extra" name="1" />
    </mt-list-item>
    <mt-list-item title="单选框 2" clickable @click="radio = '2'">
      <mt-radio slot="extra" name="2" />
    </mt-list-item>
  </mt-list>
</mt-radio-group>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标识符 | *any* | - |
| shape | 形状，可选值为 `square` | *string* | `round` |
| disabled | 是否为禁用状态 | *boolean* | `false` |
| icon-size | 图标大小，默认单位为`px` | *string \| number* | `20px` |
| label-disabled | 是否禁用文本内容点击 | *boolean* | `false` |
| label-position | 文本位置，可选值为 `left` | *string* | `right` |
| checked-color | 选中状态颜色 | *string* | `#1989fa` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前选中项的标识符 | *any* | - |
| disabled | 是否禁用所有单选框 | *boolean* | `false` |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击单选框时触发 | event: Event |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| default | 自定义文本 | - |
| icon | 自定义图标 | checked: 是否为选中状态 |
