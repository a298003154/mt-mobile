# Space 留白

### 介绍

Space 提供了`mt-white-space`和`mt-wing-blank`两个组件来实现留白间隔

### 引入

``` javascript
import { WhiteSpace, WingBlank } from 'mt-mobile';

Vue.use(WhiteSpace).use(WingBlank);
```

### 上下留白

通过填充`WhiteSpace`组件使得组件之间上下留白
```html
<div class="placeholder">块</div>

<mt-white-space size="sm"/>
<div class="placeholder">块</div>

<mt-white-space size="md"/>
<div class="placeholder">块</div>
```

### 两翼留白

使用`WingBlank`对元素进行包裹，从而得到两翼留白
```html
<mt-wing-blank size="sm">
  <div class="placeholder">块</div>
</mt-wing-blank>

<mt-wing-blank size="md">
  <div class="placeholder">块</div>
</mt-wing-blank>
```

## API

### WhiteSpace Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| size | 尺寸，可选值为 `xxs` `xs` `sm` `md` `lg` `xl` | *string* | `sm` |

### WingBlank Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| size | 尺寸，可选值为 `xs` `sm` `md` `lg` | *string* | `sm` |
