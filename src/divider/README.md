# Divider

### Install

``` javascript
import Vue from 'vue';
import { Divider } from 'mt-mobile';

Vue.use(Divider);
```

## Usage

### Basic Usage

```html
<mt-divider />
```

### With Text

```html
<mt-divider>Text</mt-divider>
```

### Content Position

```html
<mt-divider content-position="left">Text</mt-divider>
<mt-divider content-position="right">Text</mt-divider>
```

### Dashed

```html
<mt-divider dashed>Text</mt-divider>
```

### Custom Style

```html
<mt-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  Text
</mt-divider>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| dashed | Whether to use dashed border | *boolean* | `false` 
| hairline | Whether to use hairline | *boolean* | `true` |
| content-position | Content position，can be set to `left` `right` | *string* | `center` |

### Slots

| Name | Description |
|------|------|
| default | content |
