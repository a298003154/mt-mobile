# Checkbox 复选框

### 引入

``` javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'mt-mobile';

Vue.use(Checkbox).use(CheckboxGroup);
```

## 代码演示

### 基础用法

通过`v-model`绑定 checkbox 的勾选状态

```html
<mt-checkbox v-model="checked">复选框</mt-checkbox>
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};
```

### 禁用状态

```html
<mt-checkbox v-model="checked" disabled>复选框</mt-checkbox>
```

### 自定义颜色

```html
<mt-checkbox v-model="checked" checked-color="#07c160">复选框</mt-checkbox>
```

### 自定义图标

通过 icon 插槽自定义图标，可以通过`slotProps`判断是否为选中状态

```html
<mt-checkbox v-model="checked">
  自定义图标
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.inactive"
  >
</mt-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
```

### 复选框组

与`mt-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`mt-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<mt-checkbox-group v-model="result">
  <mt-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </mt-checkbox>
</mt-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

### 设置最大可选数

```html
<mt-checkbox-group v-model="result" :max="2">
  <mt-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </mt-checkbox>
</mt-checkbox-group>
```

### 搭配 List 组件使用

此时你需要再引入`mt-list`和`mt-list-item`组件，并通过 checkbox 的 toggle 方法手动触发切换

```html
<mt-checkbox-group v-model="result">
  <mt-list>
    <mt-list-item
      v-for="(item, index) in list"
      clickable
      :key="item"
      @click="toggle(index)"
    >
      复选框 {{ item }}
      <mt-checkbox
        ref="checkboxes"
        :name="item"
        slot="extra"
      />
    </mt-list-item>
  </mt-list>
</mt-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标识符 | *any* | - |
| shape | 形状，可选值为 `square` | *string* | `round` |
| v-model | 是否为选中状态 | *boolean* | `false` |
| disabled | 是否禁用复选框 | *boolean* | `false` |
| icon-size | 图标大小，默认单位为`px` | *string \| number* | `20px` |
| label-disabled | 是否禁用复选框文本点击 | *boolean* | `false` |
| label-position | 文本位置，可选值为 `left` | *string* | `right` |
| checked-color | 选中状态颜色 | *string* | `#1989fa` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 所有选中项的标识符 | *any[]* | - |
| disabled | 是否禁用所有复选框 | *boolean* | `false` |
| max | 设置最大可选数，0 为无限制 | *number* | `0` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
| click | 点击复选框时触发 | event: Event |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### Checkbox Slots

| 名称 | 说明 | SlotProps |
|------|------|------|
| default | 自定义文本 | - |
| icon | 自定义图标 | checked: 是否为选中状态 |

### Checkbox 方法

通过 ref 可以获取到 checkbox 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| toggle | - | - | 切换选中状态 |
