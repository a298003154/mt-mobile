# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作

弹出框组件支持函数调用和组件调用两种方式

### 函数调用

Dialog 是一个函数而不是组件，因此可以直接调用，展示对应的提示弹窗

```js
import { Dialog } from 'mt-mobile';

Dialog({ message: '提示' });
```

### 组件调用

通过组件调用 Dialog 时，可以通过下面的方式进行注册

```js
import { Dialog } from 'mt-mobile';

// 全局注册
Vue.use(Dialog);

// 局部注册
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  }
}
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮

```javascript
Dialog.alert({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容'
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮

```javascript
Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
  // on confirm
}).catch(() => {
  // on cancel
});
```

### 异步关闭

```js
function beforeClose(action, done) {
  if (action === 'confirm') {
    setTimeout(done, 1000);
  } else {
    done();
  }
}

Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
  beforeClose
});
```

### 全局方法

引入 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，在所有组件内部都可以直接调用此方法

```js
export default {
  mounted() {
    this.$dialog.alert({
      message: '弹窗内容'
    });
  }
}
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式

```html
<mt-dialog
  v-model="show"
  title="标题"
  show-cancel-button
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
</mt-dialog>
```

```js
export default {
  data() {
    return {
      show: false
    };
  }
}
```


## API

### 方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| Dialog | `options` | `Promise` | 展示弹窗 |
| Dialog.alert | `options` | `Promise` | 展示消息提示弹窗 |
| Dialog.confirm | `options` | `Promise` | 展示消息确认弹窗 |
| Dialog.setDefaultOptions | `options` | `void` | 修改默认配置，对所有 Dialog 生效 |
| Dialog.resetDefaultOptions | - | `void` | 重置默认配置，对所有 Dialog 生效 |
| Dialog.close | - | `void` | 关闭弹窗 |

### Options

通过函数调用 `Dialog` 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题 | *string* | - |
| message | 文本内容，支持通过`\n`换行 | *string* | - |
| messageAlign | 内容对齐方式，可选值为`left` `right` | *string* | `center` |
| className | 自定义类名 | *any* | - |
| showConfirmButton | 是否展示确认按钮 | *boolean* | `true` |
| showCancelButton | 是否展示取消按钮 | *boolean* | `false` |
| cancelButtonText | 取消按钮文案 | *string* | `取消` |
| cancelButtonColor | 取消按钮颜色 | *string* | `#000` |
| confirmButtonText | 确认按钮文案 | *string* | `确认` |
| confirmButtonColor | 确认按钮颜色 | *string* | `#1989fa` |
| overlay | 是否展示遮罩层 | *boolean* | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | *boolean* | `false` |
| closeOnClickOverlay | 点击遮罩层时是否关闭弹窗 | *boolean* | `false` |
| lockScroll | 是否锁定背景滚动 | *boolean* | `true` |
| beforeClose | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭 | *(action, done) => void* | - |
| getContainer | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | *string \| () => HTMLElement* | `body` |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 是否显示弹窗 | *boolean* | - |
| title | 标题 | *string* | - |
| message | 内容 | *string* | - |
| message-align | 内容对齐方式，可选值为`left` `right` | *string* | `center` |
| show-confirm-button | 是否展示确认按钮 | *boolean* |  `true` |
| show-cancel-button | 是否展示取消按钮 | *boolean* |  `false` |
| cancel-button-text | 取消按钮文案 | *string* | `取消` |
| cancel-button-color | 取消按钮颜色 | *string* | `#000` |
| confirm-button-text | 确认按钮文案 | *string* | `确认` |
| confirm-button-color | 确认按钮颜色 | *string* | `#1989fa` |
| overlay | 是否展示遮罩层 | *boolean* | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭 | *boolean* | `false` |
| lock-scroll | 是否锁定背景滚动 | *boolean* | `true` |
| before-close | 关闭前的回调函数，<br>调用 done() 后关闭弹窗，<br>调用 done(false) 阻止弹窗关闭 | *(action, done) => void* | - |
| get-container | 指定挂载的节点，可以传入选择器，<br>或一个返回节点的函数 | *string \| () => HTMLElement* | - |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |

### Slots

通过组件调用 `Dialog` 时，支持以下插槽：

| 名称 | 说明 |
|------|------|
| default | 自定义内容 |
| title | 自定义标题 |
| footer | 自定义底部内容 |
