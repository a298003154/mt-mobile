# NoticeBar

### Install

``` javascript
import Vue from 'vue';
import { NoticeBar } from 'mt-mobile';

Vue.use(NoticeBar);
```

## Usage

### Basic Usage

```html
<mt-notice-bar
  text="Notice Content"
  left-icon="sound"
/>
```

### Disable scroll

```html
<mt-notice-bar :scrollable="false">
  Notice Content
</mt-notice-bar>
```

### Wrapable

```html
<mt-notice-bar wrapable :scrollable="false">
  Notice Content
</mt-notice-bar>
```

### Mode

```html
<mt-notice-bar mode="closable">
  Notice Content
</mt-notice-bar>

<mt-notice-bar mode="link">
  Notice Content
</mt-notice-bar>
```

### Custom Style

```html
<mt-notice-bar
  color="#1989fa"
  background="#ecf9ff"
  left-icon="info-o"
>
  Notice Content
</mt-notice-bar>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| mode | Mode, can be set to `closable` `link` | *string* | `''` |
| text | Notice text content | *string* | `''` |
| delay | Animation delay (s) | *number* | `1` |
| speed | Scroll speed (px/s) | *number* | `50` |
| scrollable | Whether to scroll content | *boolean* | `true` |
| wrapable | Whether to enable text wrap | *boolean* | `false` |
| left-icon | Left Icon | *string* | - |
| color | Text color | *string* | `#f76a24` |
| background | Background color | *string* | `#fffbe8` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click NoticeBar | event: Event |
| close | Triggered when closed | event: Event |

### Slots

| Name | Description |
|------|------|
| default | Notice text content |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
