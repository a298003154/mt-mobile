# Swipe

### Install

``` javascript
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mt-mobile';

Vue.use(Swipe).use(SwipeItem);
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval

```html
<mt-swipe :autoplay="3000" indicator-color="white">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
  <mt-swipe-item>4</mt-swipe-item>
</mt-swipe>
```

### Image Lazyload

Use [Lazyload](#/en-US/lazyload) component to lazyload image

```html
<mt-swipe>
  <mt-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </mt-swipe-item>
</mt-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
```

### change event

```html
<mt-swipe @change="onChange">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
  <mt-swipe-item>4</mt-swipe-item>
</mt-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    }
  }
}
```

### Vertical Scrolling

```html
<mt-swipe :autoplay="3000" vertical>
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
  <mt-swipe-item>4</mt-swipe-item>
</mt-swipe>
```

### Set Swiper Item Size

```html
<mt-swipe :loop="false" :width="300">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
  <mt-swipe-item>4</mt-swipe-item>
</mt-swipe>
```

### Custom Indicator

```html
<mt-swipe @change="onChange">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
  <mt-swipe-item>4</mt-swipe-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</mt-swipe>
```

```js
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
```

## API

### Swipe Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| autoplay | Autoplay interval (ms) | *number* | - |
| duration | Animation duration (ms) | *number* | `500` |
| loop | Whether to enable loop | *boolean* | `true` |
| vertical | Vertical Scrolling | *boolean* | `false` |
| touchable | Whether touchable | *boolean* | `true` |
| show-indicators | Whether to show indicators | *boolean* | `true` |
| indicator-color | Indicator color | *string* | `#1989fa` |
| initial-swipe | Index of initial swipe, start from 0 | *number* | `0` |
| width | Set Swiper Item Width | *number* | `0` |
| height | Set Swiper Item Height | *number* | `0` |

### Swipe Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe |

### SwipeItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when clicked | event: Event |

### Swipe Methods

Use ref to get swipe instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| swipeTo | index: target index, options: Options | void | Swipe to target index |

### swipeTo Options

| Name | Description | Type |
|------|------|------|
| immediate | Whether to skip animation | *boolean* |

### Swipe Slots

| Name | Description |
|------|------|
| default | Content |
| indicator | Custom indicator |
