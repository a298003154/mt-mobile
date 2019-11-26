# Popup

### Install

``` javascript
import { Popup } from 'mt-mobile';

Vue.use(Popup);
```

## Usage

### Basic Usage

```html
<mt-button type="primary" @click="showPopup">
  Show Popup
</mt-button>

<mt-popup v-model="show">Content</mt-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

### Position

Use `position` prop to set popup display position

```html
<mt-popup
  v-model="show"
  position="top"
  :style="{ height: '20%' }"
/>
```

### Round Corner

```html
<mt-popup
  v-model="show"
  round
  position="bottom"
  :style="{ height: '20%' }"
/>
```

### Get Container

Use `get-container` prop to specify mount location

```html
<!-- mount to body -->
<mt-popup
  v-model="show"
  get-container="body"
/>

<!-- mount to #app -->
<mt-popup
  v-model="show"
  get-container="#app"
/>

<!-- Specify the mount location by function -->
<mt-popup
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

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show popup | *boolean* | `false` |
| overlay | Whether to show overlay | *boolean* | `true` |
| position | Can be set to `top` `bottom` `right` `left` | *string* | `center` |
| overlay-class | Custom overlay class | *string* | - |
| overlay-style | Custom overlay style | *object* | - |
| duration | Transition duration, unit second | *number* | `0.3` |
| round | Whether to show round corner | *boolean* | `false` |
| lock-scroll | Whether to lock background scroll | *boolean* | `true` |
| lazy-render | Whether to lazy render util appeared | *boolean* | `true` |
| close-on-click-overlay | Whether to close when click overlay | *boolean* | `true` |
| transition | Transition | *string* | `popup-slide` |
| get-container | Return the mount node for Popup | *string \| () => HTMLElement* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click Popup | event: Event |
| open | Triggered when open Popup | - |
| opened | Triggered when opened Popup | - |
| close | Triggered when close Popup | - |
| closed | Triggered when closed Popup | - |
| click-overlay | Triggered when click overlay | - |
