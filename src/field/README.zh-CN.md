# Field 输入框

### 介绍

表单中的输入框组件

### 引入

``` javascript
import Vue from 'vue';
import { Field } from 'mt-mobile';

Vue.use(Field);
```

## 代码演示

### 基础用法

通过`v-model`绑定输入框的值

```html
<mt-list>
  <mt-field v-model="value" placeholder="请输入用户名" />
</mt-list>
```

### 自定义类型

根据`type`属性定义不同类型的输入框

```html
<mt-list>
  <mt-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="circle-question"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <mt-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</mt-list>
```

### 禁用输入框

```html
<mt-list>
  <mt-field
    value="输入框已禁用"
    label="用户名"
    left-icon="profile"
    disabled
  />
</mt-list>
```

### 错误提示

通过`error`或者`error-message`属性增加对应的错误提示

```html
<mt-list>
  <mt-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
    error
  />
  <mt-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</mt-list>
```

### 高度自适应

对于 textarea，可以通过`autosize`属性设置高度自适应

```html
<mt-list>
  <mt-field
    v-model="message"
    label="留言"
    type="textarea"
    placeholder="请输入留言"
    rows="1"
    autosize
  />
</mt-list>
```

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮

```html
<mt-list>
  <mt-field
    v-model="sms"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <mt-button slot="button" size="small" type="primary">发送验证码</mt-button>
  </mt-field>
</mt-list>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| label | 输入框左侧文本 | *string* | - |
| value | 当前输入的值 | *string \| number* | - |
| type | 输入框类型, 可选值为 `tel` `number`<br>`textarea` `password` 等 | *string* | `text` |
| size | 尺寸，可选值为 `large` | *string* | - |
| maxlength | 输入的最大字符数 | *string \| number* | - |
| placeholder | 占位提示文字 | *string* | - |
| border | 是否显示内边框 | *boolean* | `true` |
| disabled | 是否禁用输入框 | *boolean* | `false` |
| readonly | 是否只读 | *boolean* | `false` |
| required | 是否显示表单必填星号 | *boolean* | `false` |
| clearable | 是否启用清除控件 | *boolean* | `false` |
| clickable | 是否开启点击反馈 | *boolean* | `false` |
| active-style | 点击反馈的自定义样式 | *object* | {} |
| active-class | 点击反馈的自定义类名 | *string* | - |
| error | 是否将输入内容标红 | *boolean* | `false` |
| arrow | 箭头方向，可选值为 `horizontal` `up` `down` | *string* | - |
| error-message | 底部错误提示文案，为空时不展示 | *string* | `''` |
| label-class | 左侧文本额外类名 | *any* | - |
| label-width | 左侧文本宽度，默认单位为`px` | *string \| number* | `90px` |
| label-align | 左侧文本对齐方式，可选值为 `center` `right` | *string* | `left` |
| input-align | 输入框内容对齐方式，可选值为 `center` `right` | *string* | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | *string* | `left` |
| autosize | 自适应内容高度，只对 textarea 有效，可传入对象,<br>如 { maxHeight: 100, minHeight: 50 }，单位为`px` | *boolean \| object* | `false` |
| left-icon | 左侧图标名称或图片链接，可选值见 [Icon 组件](/#/zh-CN/icon) | *string* | - |
| right-icon | 右侧图标名称或图片链接，可选值见 [Icon 组件](/#/zh-CN/icon) | *string* | - |

### Events

除下列事件外，Field 默认支持 Input 标签所有的原生事件

| 事件 | 说明 | 回调参数 |
|------|------|------|
| input | 输入框内容变化时触发 | value: 输入框当前值 |
| focus | 输入框获得焦点时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| clear | 点击清除按钮时触发 | event: Event |
| click | 点击时触发 | event: Event |
| click-left-icon | 点击左侧图标时触发 | event: Event |
| click-right-icon | 点击右侧图标时触发 | event: Event |

### 方法

通过 ref 可以获取到 field 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| focus | - | - | 获取输入框焦点 |
| blur | - | - | 取消输入框焦点 |

### Slots

| 名称 | 说明 |
|------|------|
| label | 自定义输入框标签 |
| input | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
| left-icon | 自定义输入框头部图标 |
| right-icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |
