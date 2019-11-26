# Loading 加载

### 引入

``` javascript
import { Loading } from 'mt-mobile';

Vue.use(Loading);
```

## 代码演示

### 加载类型

```html
<mt-loading />
<mt-loading type="spinner" />
```

### 自定义颜色

```html
<mt-loading color="#1989fa" />
<mt-loading type="spinner" color="#1989fa" />
```

### 加载文案

```html
<mt-loading size="24px">加载中...</mt-loading>
```

### 垂直排列

```html
<mt-loading size="24px" vertical>加载中...</mt-loading>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| color | 颜色 | *string* | `#c9c9c9` |
| type | 类型，可选值为 `spinner` | *string* | `circular` |
| size | 加载图标大小，默认单位为`px` | *string \| number* | `30px` |
| text-size | 文字大小，默认单位为`px` | *string \| number* | `14px` |
| vertical | 是否垂直排列图标和文字内容 | *boolean* | `false` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 加载文案 |
