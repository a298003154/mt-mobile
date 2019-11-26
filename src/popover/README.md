# Popover

### Install

``` javascript
import { Popover } from 'mt-mobile';

Vue.use(Popover).use(PopoverItem);
```

## Usage

### Basic Usage

```html
<mt-button type="primary" @click="showPopover" ref="popover">
  show Popover
</mt-button>

<mt-popover v-model="show" :trigger="popover">Content</mt-popover>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.popover = this.$refs.popover.$el;
  }

  methods: {
    showPopover() {
      this.show = true;
    }
  }
};
```

### Option

use with `PopoverItem` by default

```html
<mt-popover
  v-model="show"
  @select="onSelect"
>
  <mt-popover-item icon="star">Icon</mt-popover-item>
  <mt-popover-item icon="star" disabled>Disabled</mt-popover-item>
  <mt-popover-item :active-style="{background: 'red'}">Click Active</mt-popover-item>
</mt-popover>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  mounted() {
    this.popover = this.$refs.popover.$el;
  }

  methods: {
    showPopover() {
      this.show = true;
    },
    onSelect(e, index) {
      console.log(e, index);
    }
  }
};
```

### Placement

Use `placement` prop to set popover display direction

```html
<mt-popover
  v-model="show"
  placement="top"
>
  placement
</mt-popover>
```

### Get Container

Use `get-container` prop to specify mount location

```html
<!-- mount to body -->
<mt-popover
  v-model="show"
  get-container="body"
/>

<!-- mount to #app -->
<mt-popover
  v-model="show"
  get-container="#app"
/>

<!-- Specify the mount location by function -->
<mt-popover
  v-model="show"
  :get-container="getContainer"
/>
```

```js
export default {
  methods: {
    getContainer() {
      return document.querySelector('.my-container');
    }
  }
}
```

## API

### Popover Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show popover  | *boolean* | `false` |
| trigger | Trigger of Popover | *HTMLElement* | `null` |
| overlay | Whether to show overlay | *boolean* | `true` |
| placement | Can be set to `top` `top-left` `top-right` `bottom` `bottom-left` `bottom-right` `left` `left-top` `left-bottom` `right` `right-top` `right-bottom` | *string* | `bottom-right` |
| overlay-class | Custom overlay class | *string* | - |
| overlay-style | Custom overlay style | *object* | - |
| duration | Transition duration, unit second | *number* | `0.3` |
| space | Distance from trigger | *number* | `0` |
| lock-scroll | Whether to lock background scroll | *boolean* | `true` |
| lazy-render | Whether to lazy render util appeared | *boolean* | `true` |
| close-on-click-action | Whether to close with click action | *boolean* | `true` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| close-on-click-outside | Whether to close with click outside | *boolean* | `true` |
| get-container | Return the mount node for popover  | *string \| () => HTMLElement* | - |

### PopoverItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Custom left icon | *string* | - |
| disabled | Whether to disable option | *boolean* | `false` |
| active-style | Feedback's custom style (set to false to disable click feedback) | *boolean \| object* | - |
| active-class | Feedback's custom class name | *string* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| select | Triggered when click option  | event, index |
| open | Triggered when open popover  | - |
| opened | Triggered when opened popover  | - |
| close | Triggered when close popover  | - |
| closed | Triggered when closed popover  | - |
| click-overlay | Triggered when click overlay | - |

### PopoverItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | event |
