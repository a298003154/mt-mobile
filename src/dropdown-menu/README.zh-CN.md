# DropdownMenu 下拉菜单

### 引入

``` javascript
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'mt-mobile';

Vue.use(DropdownMenu).use(DropdownItem);
```

## 代码演示

### 基础用法

```html
<mt-dropdown-menu>
  <mt-dropdown-item v-model="value1" :options="option1" />
  <mt-dropdown-item v-model="value2" :options="option2" />
</mt-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  }
};
```

### 自定义菜单内容

通过插槽可以自定义`DropdownItem`的内容，此时需要使用实例上的`toggle`方法手动控制菜单的显示

```html
<mt-dropdown-menu>
  <mt-dropdown-item v-model="value" :options="option" />
  <mt-dropdown-item title="筛选" ref="item">
    <mt-switch-cell v-model="switch1" title="包邮" />
    <mt-switch-cell v-model="switch2" title="团购" />
    <mt-button block type="info" @click="onConfirm">确认</mt-button>
  </mt-dropdown-item>
</mt-dropdown-menu>
```

```js
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
```

### 向上展开

将`direction`属性值设置为`up`，菜单即可向上展开

```html
<mt-dropdown-menu direction="up">
  <mt-dropdown-item v-model="value1" :options="option1" />
  <mt-dropdown-item v-model="value2" :options="option2" />
</mt-dropdown-menu>
```

### 禁用菜单

```html
<mt-dropdown-menu>
  <mt-dropdown-item v-model="value1" disabled :options="option1" />
  <mt-dropdown-item v-model="value2" disabled :options="option2" />
</mt-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| active-color | 菜单标题和选项的选中态颜色 | *string* | `#1989fa` |
| z-index | 菜单栏 z-index 层级 | *number* | `10` |
| duration | 动画时长，单位秒 | *number* | `0.2` |
| direction | 菜单展开方向，可选值为`up` | *string* | `down` |
| overlay | 是否显示遮罩层 | *boolean* | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | *boolean* | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | *boolean* | `true` |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 当前选中项对应的 value，可以通过`v-model`双向绑定 | *string \| number* | - |
| title | 菜单项标题 | *string* | 当前选中项文字 |
| options | 选项数组 | `Option[]` | `[]` |
| disabled | 是否禁用菜单 | *boolean* | `false` |
| title-class | 标题额外类名 | *string* | - |

### DropdownItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 点击选项导致 value 变化时触发 | value |
| open | 打开菜单栏时触发 | - |
| opened | 打开菜单栏且动画结束后触发 | - |
| close | 关闭菜单栏时触发 | - |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| toggle | show: boolean | - | 切换菜单是否展示 |

### Option 数据结构

| 键名 | 说明 | 类型 |
|------|------|------|
| text | 文字 | *string* |
| value | 标识符 | *string \| number* |
| icon | 左侧图标名称，可选值见 Icon 组件 | *string* |
