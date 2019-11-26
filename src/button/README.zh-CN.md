# Button 按钮

### 引入

``` javascript
import { Button } from 'mt-mobile';

Vue.use(Button);
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<mt-button type="default">默认按钮</mt-button>
<mt-button type="primary">主要按钮</mt-button>
<mt-button type="info">信息按钮</mt-button>
<mt-button type="warning">警告按钮</mt-button>
<mt-button type="danger">危险按钮</mt-button>
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<mt-button plain type="primary">朴素按钮</mt-button>
<mt-button plain type="danger">朴素按钮</mt-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击

```html
<mt-button disabled type="primary">禁用状态</mt-button>
<mt-button disabled type="danger">禁用状态</mt-button>
```

### 加载状态

通过`loading`属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过`loading-text`设置加载状态下的文字

```html
<mt-button loading type="primary" />
<mt-button loading type="primary" loading-type="spinner" />
<mt-button loading type="danger" loading-text="加载中..." />
```

### 按钮形状

通过`square`设置方形按钮，通过`round`设置圆形按钮

```html
<mt-button square type="primary">方形按钮</mt-button>
<mt-button round type="danger">圆形按钮</mt-button>
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html
<mt-button icon="star" type="primary" />
<mt-button icon="star" type="primary">按钮</mt-button>
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<mt-button type="primary" size="large">大号按钮</mt-button>
<mt-button type="primary" size="normal">普通按钮</mt-button>
<mt-button type="primary" size="small">小型按钮</mt-button>
<mt-button type="primary" size="mini">迷你按钮</mt-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为 `primary` `info` `warning` `danger` | *string* | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | *string* | `normal` |
| text | 按钮文字 | *string* | - |
| icon | 左侧图标名称，可选值见 Icon 组件 | *string* | - |
| tag | HTML 标签 | *string* | `button` |
| block | 是否为块级元素 | *boolean* | `false` |
| plain | 是否为朴素按钮 | *boolean* | `false` |
| square | 是否为方形按钮 | *boolean* | `false` |
| round | 是否为圆形按钮 | *boolean* | `false` |
| disabled | 是否禁用按钮 | *boolean* | `false` |
| active-style | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | *boolean \| object* | {} |
| active-class | 点击反馈的自定义类名 | *string* | - |
| loading | 是否显示为加载状态 | *boolean* | `false` |
| loading-type | 加载图标类型，可选值为`spinner` | *string* | `circular` |
| loading-size | 加载图标大小，可选值为`xxs` `xs` `sm` `md` `lg` `xl` | *string* | `xs` |
| url | 跳转链接 | *string* | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | *string \| object* | - |
| replace | 跳转时是否替换当前页面历史 | *boolean* | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |
