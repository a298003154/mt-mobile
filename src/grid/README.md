# Grid

### Install

``` javascript
import Vue from 'vue';
import { Grid, GridItem } from 'mt-mobile';

Vue.use(Grid).use(GridItem);
```

## Usage

### Basic Usage

```html
<mt-grid>
  <mt-grid-item
    v-for="value in 4"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</mt-grid>
```

### Column Num

```html
<mt-grid :column-num="3">
  <mt-grid-item
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</mt-grid>
```

### Custom Content

```html
<mt-grid :border="false" :column-num="3">
  <mt-grid-item>
    <mt-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </mt-grid-item>
  <mt-grid-item>
    <mt-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </mt-grid-item>
  <mt-grid-item>
    <mt-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </mt-grid-item>
</mt-grid>
```

### Square

```html
<mt-grid square>
  <mt-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</mt-grid>
```

### Gutter

```html
<mt-grid :gutter="10">
  <mt-grid-item
    v-for="value in 8"
    :key="value"
    icon="photo-o"
    text="Text"
  />
</mt-grid>
```

### Route

```html
<mt-grid clickable :column-num="2">
  <mt-grid-item
    icon="home-o"
    text="Vue Router"
    to="/"
  />
  <mt-grid-item
    icon="search"
    text="URL"
    url="https://www.baidu.com"
  />
</mt-grid>
```

## API

### Grid Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| column-num | Column Num | *number* | `4` |
| gutter | Gutter | *string \| number* | `0` |
| border | Whether to show border | *boolean* | `true` |
| center | Whether to center content | *boolean* | `true` |
| square | Whether to be square shape | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |

### GridItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Text | *string* | - |
| icon | Icon name or URL | *string* | - |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### GridItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### GridItem Slots

| Name | Description |
|------|------|
| default | Custom content |
| icon | Custom icon |
| text | Custom text |
