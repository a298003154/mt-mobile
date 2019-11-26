# Rate

### Install

``` javascript
import Vue from 'vue';
import { Rate } from 'mt-mobile';

Vue.use(Rate);
```

## Usage

### Basic Usage

```html
<mt-rate v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 3
    };
  }
}
```

### Custom Icon

```html
<mt-rate
  v-model="value"
  icon="like-fill"
  void-icon="like-o"
/>
```

### Custom Style

```html
<mt-rate
  v-model="value"
  :size="25"
  color="#ee0a24"
  void-icon="star-fill"
  void-color="#eee"
/>
```

### Half Star

```html
<mt-rate
  v-model="value"
  allow-half
  void-icon="star-fill"
  void-color="#eee"
/>
```

```javascript
export default {
  data() {
    return {
      value: 2.75
    };
  }
}
```

### Custom Count

```html
<mt-rate v-model="value" :count="6" />
```

### Disabled

```html
 <mt-rate v-model="value" disabled />
```

### Readonly

```html
<mt-rate v-model="value" readonly />
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current rate | *number* | - |
| count | Count | *number* | `5` |
| size | Icon size| *string \| number* | `20px` |
| gutter | Icon gutter | *string \| number* | `4px` |
| color | Selected color | *string* | `#ffd21e` |
| void-color | Void color | *string* | `#c7c7c7` |
| disabled-color | Disabled color | *string* | `#bdbdbd` |
| icon | Selected icon | *string* | `star-fill` |
| void-icon | Void icon | *string* | `star` |
| allow-half | Whether to allow half star | *boolean* | `false` |
| readonly | Whether to be readonly | *boolean* | `false` |
| disabled | Whether to disable rate | *boolean* | `false` |
| touchable | Whether to allow select rate by touch gesture | *boolean* | `true` |

### Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when rate changed | current rate |
