# Tag

### Install

``` javascript
import Vue from 'vue';
import { Tag } from 'mt-mobile';

Vue.use(Tag);
```

## Usage

### Basic Usage

```html
<mt-tag>Tag</mt-tag>
<mt-tag type="primary">Tag</mt-tag>
<mt-tag type="success">Tag</mt-tag>
<mt-tag type="danger">Tag</mt-tag>
<mt-tag type="warning">Tag</mt-tag>
```

### Plain style

```html
<mt-tag plain>Tag</mt-tag>
<mt-tag plain type="primary">Tag</mt-tag>
<mt-tag plain type="success">Tag</mt-tag>
<mt-tag plain type="danger">Tag</mt-tag>
<mt-tag plain type="warning">Tag</mt-tag>
```

### Round style

```html
<mt-tag round>Tag</mt-tag>
<mt-tag round type="primary">Tag</mt-tag>
<mt-tag round type="success">Tag</mt-tag>
<mt-tag round type="danger">Tag</mt-tag>
<mt-tag round type="warning">Tag</mt-tag>
```

### Mark style

```html
<mt-tag mark>Tag</mt-tag>
<mt-tag mark type="primary">Tag</mt-tag>
<mt-tag mark type="success">Tag</mt-tag>
<mt-tag mark type="danger">Tag</mt-tag>
<mt-tag mark type="warning">Tag</mt-tag>
```

### Custom Color

```html
<mt-tag color="#f2826a">Tag</mt-tag>
<mt-tag color="#f2826a" plain>Tag</mt-tag>
<mt-tag color="#7232dd">Tag</mt-tag>
<mt-tag color="#7232dd" plain>Tag</mt-tag>
<mt-tag color="#ffe1e1" text-color="#ad0000">Tag</mt-tag>
```

### Custom Size

```html
<mt-tag type="danger">Tag</mt-tag>
<mt-tag type="danger" size="medium">Tag</mt-tag>
<mt-tag type="danger" size="medium" mark>Tag</mt-tag>
<mt-tag type="danger" size="medium" round>Tag</mt-tag>
```

### Closable

```html
<mt-tag closable type="primary">标签</mt-tag>
<mt-tag closable mark type="success">标签</mt-tag>
<mt-tag closable round type="danger">标签</mt-tag>
<mt-tag closable size="medium" type="primary">标签</mt-tag>
<mt-tag closable mark size="medium" type="success">标签</mt-tag>
<mt-tag closable round size="medium" type="danger">标签</mt-tag>
<mt-tag closable plain size="medium" type="primary">标签</mt-tag>
<mt-tag closable plain mark size="medium" type="success">标签</mt-tag>
<mt-tag closable plain round size="medium" type="danger">标签</mt-tag>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` `warning` | *string* | `default` |
| size | Size, can be set to `medium` | *string* | - |
| color | Custom color | *string* | - |
| plain | Whether to be plain style | *boolean* | `false` |
| round | Whether to be round style | *boolean* | `false` |
| mark | Whether to be mark style | *boolean* | `false` |
| closable | Whether to be closed | *boolean* | `false` |
| text-color | Text color | *string* | `white` |

### Slots

| Name | Description |
|------|------|
| default | Default slot |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
| click | Triggered when click close | - |
