# Sticky

### Install

``` javascript
import Vue from 'vue';
import { Sticky } from 'mt-mobile';

Vue.use(Sticky);
```

## Usage

### Basic Usage

```html
<mt-sticky>
  <mt-button type="primary">Basic Usage</mt-button>
</mt-sticky>
```

### Offset Top

```html
<mt-sticky :offset-top="50">
  <mt-button type="info">Offset Top</mt-button>
</mt-sticky>
```

### Set Container

```html
<div ref="container" style="height: 150px;">
  <mt-sticky :container="container">
    <mt-button type="warning">Set Container</mt-button>
  </mt-sticky>
</div>
```

```js
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| offset-top | Offset top | *number* | `0` |
| z-index | z-index when sticky | *number* | `99` |
| container | Container DOM | *HTMLElement* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
