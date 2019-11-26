# Icon

### Install

``` javascript
import { Icon } from 'mt-mobile';

Vue.use(Icon);
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<mt-icon name="close" />
<mt-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### Show Info

```html
<mt-icon name="chat" info="9" />
<mt-icon name="chat" info="99+" />
```


```html
<mt-icon class-prefix="my-icon" name="extra" />
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Icon name or URL | *string* | `''` |
| color | Icon color | *string* | `inherit` |
| size | Icon size, can be set to `xxs` `xs` `sm` `md` `lg` `xl` | *string* | `sm` |
| class-prefix | ClassName prefix | *string* | `mt-icon` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click icon | event: Event |
