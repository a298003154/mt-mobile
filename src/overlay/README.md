# Overlay

### Install

``` javascript
import { Overlay } from 'mt-mobile';

Vue.use(Overlay);
```

## Usage

### Basic Usage

```html
<mt-button
  type="primary"
  text="Show Overlay"
  @click="show = true"
/>

<mt-overlay
  :show="show"
  @click="show = false"
/>
```

```js
export default {
  data() {
    return {
      show: false
    }
  }
},
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| show | Whether to show overlay | *boolean* | `false` |
| z-index | z-index | *string \| number* | `1` |
| duration | Animation duration | *string \| number* | `0.3` |
| class-name | ClassName | *string* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |
