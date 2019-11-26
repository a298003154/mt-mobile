# Icon 图标

### 引入

``` javascript
import { Icon } from 'mt-mobile';

Vue.use(Icon);
```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接

```html
<mt-icon name="close" />
<mt-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### 显示徽标

```html
<mt-icon name="chat" info="9" />
<mt-icon name="chat" info="99+" />
```


```html
<mt-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称或图片链接 | *string* | - |
| color | 图标颜色 | *string* | `inherit` |
| size | 图标大小，可选值为`xxs` `xs` `sm` `md` `lg` `xl` | *string* | `sm` |
| class-prefix | 类名前缀 | *string* | `mt-icon` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击图标时触发 | event: Event |
