# List

### Install
``` javascript
import { List, ListItem } from 'mt-mobile';

Vue.use(List).use(ListItem);
```

## Usage

### Basic Usage

```html
  <mt-list>
    <span slot="header">Header</span>
    <mt-list-item>
      Content
      <span slot="extra">Extra Content</span>
    </mt-list-item>
    <span slot="footer">Footer</span>
  </mt-list>
```

### Brief

```html
  <mt-list>
    <mt-list-item>
      Content
      <span slot="brief">Brief</span>
      <span slot="extra">Extra Content</span>
    </mt-list-item>
    <mt-list-item clickable>
      ListItem
      <div slot="brief">Clickable</div>
    </mt-list-item>
  </mt-list>
```

### Thumb

```html
  <mt-list>
    <mt-list-item>
      Thumbnail from thumb prop
      <img slot="thumb" src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100"/>
    </mt-list-item>
    <mt-list-item thumb="https://cn.vuejs.org/images/logo.png">
      Thumbnail form thumb slot
    </mt-list-item>
  </mt-list>
```

### Arrow

```html
  <mt-list>
    <mt-list-item arrow="up">Vertical Up</mt-list-item>
    <mt-list-item arrow="horizontal">Horizontal</mt-list-item>
    <mt-list-item arrow="down">Vertical Down</mt-list-item>
    <mt-list-item arrow="empty">Empty will hide the dom</mt-list-item>
  </mt-list>
```

### Route

```html
  <mt-list>
    <mt-list-item arrow="horizontal" to="/">Vue Router</mt-list-item>
    <mt-list-item arrow="horizontal" url="https://www.baidu.com">URL</mt-list-item>
  </mt-list>
```

### Align

```html
  <mt-list>
    <mt-list-item align="top" arrow="horizontal">
      Content
      <span slot="brief">Brief</span>
      <span slot="extra">Top</span>
    </mt-list-item>
    <mt-list-item arrow="horizontal">
      ListItem
      <div slot="brief">Brief</div>
      <span slot="extra">Default Middle</span>
    </mt-list-item>
    <mt-list-item align="bottom" arrow="horizontal">
      Content
      <span slot="brief">Brief</span>
      <span slot="extra">Bottom</span>
    </mt-list-item>
  </mt-list>
```

### Error

```html
  <mt-list>
    <mt-list-item error>
      Content
      <span slot="brief">Brief</span>
      <span slot="extra">Error Style</span>
    </mt-list-item>
    <mt-list-item error arrow="horizontal">
      ListItem
      <span slot="brief">Brief</span>
      <span slot="extra">Error Style</span>
    </mt-list-item>
  </mt-list>
```

### Wrap and multipleLine

```html
  <mt-list>
    <mt-list-item>
      Single line, long text will be hidden with ellipsis
    </mt-list-item>
    <mt-list-item wrap>
      Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
      <span slot="extra">Extra Content</span>
    </mt-list-item>
    <mt-list-item multipleLine wrap>
      Multiple line and long text will wrap. Long Text Long Text Long Text
      <span slot="extra">Extra Content</span>
    </mt-list-item>
  </mt-list>
```

## API

### ListItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| thumb | Used to set img src, overwritten by slot `thumb` | *string* | - |
| arrow | Can be set to `horizontal` `up` `down` `empty` <br/> `empty` option may hide the dom | *string* | - |
| align | Can be set to `top` `middle` `bottom` | *string* | - |
| wrap | Whether to wrap long texts, otherwise it will be hidden by default | *boolean* | - |
| error | Whether to display error style (the color of text on the right side may change to orange) | *boolean* | - |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| multiple-line | Multiple line | *boolean* | - |
| content-style | Content style | *any* | - |
| active-style | Feedback's custom style | *object* | - |
| active-class | Feedback's custom class name | *string* | - |
| content-class | Content className | *any* | - |
| extra-class | Extra className | *any* | - |
| brief-class | Brief className | *any* | - |
| url | Link URL | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### ListItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click listItem | event: Event |

### List Slots

| 名称 | 说明 |
|------|------|
| default | Default slot |
| header | Custom header |
| footer | Custom footer |

### ListItem Slots

| Name | Description |
|------|------|
| default | Default slot |
| brief | Custom Brief |
| extra | Custom Extra |
| thumb | Custom Thumbnail |
