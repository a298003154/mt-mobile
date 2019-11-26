# Switch 开关

### 引入

``` javascript
import Vue from 'vue';
import { Switch } from 'mt-mobile';

Vue.use(Switch);
```

## 代码演示

### 基础用法

```html
<mt-switch v-model="checked" />
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
<mt-switch
  v-model="checked"
  disabled
/>
```

### 加载状态

```html
<mt-switch
  v-model="checked"
  loading
/>
```

### 自定义大小

```html
<mt-switch
  v-model="checked"
  size="24px"
/>
```

### 自定义颜色

```html
<mt-switch
  v-model="checked"
  active-color="#07c160"
  inactive-color="#ee0a24"
/>
```

### 异步控制

```html
<mt-switch
  :value="checked"
  @input="onInput"
/>
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
}; 
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 开关选中状态 | *any* | `false` |
| loading | 是否为加载状态 | *boolean* | `false` |
| disabled | 是否为禁用状态 | *boolean* | `false` |
| size | 开关尺寸 | *string* | `30px` |
| active-color | 打开时的背景色 | *string* | `#1989fa` |
| inactive-color | 关闭时的背景色 | *string* | `#fff` |
| active-value | 打开时的值 | *any* | `true` |
| inactive-value | 关闭时的值 | *any* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 开关状态切换回调 | checked: 是否选中开关 |
