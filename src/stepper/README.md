# Stepper

### Install

``` javascript
import Vue from 'vue';
import { Stepper } from 'mt-mobile';

Vue.use(Stepper);
```

## Usage

### Basic Usage

```html
<mt-stepper v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  }
}
```

### Step

```html
<mt-stepper v-model="value" step="2" />
```

### Range

```html
<mt-stepper v-model="value" min="5" max="8" />
```

### Integer

```html
<mt-stepper v-model="value" integer />
```

### Disabled

```html
<mt-stepper v-model="value" disabled />
```

### Decimal Length

```html
<mt-stepper v-model="value" step="0.2" :decimal-length="1" />
```

### Custom Size

```html
<mt-stepper v-model="value" input-width="40px" button-size="32px" />
```

### Async Change

```html
<mt-stepper
  :value="value"
  async-change
  @change="onChange"
/>
```

```javascript
export default {
  data() {
    return {
      value: 1
    }
  },

  methods: {
    onChange(value) {
      Toast.loading({ forbidClick: true });

      setTimeout(() => {
        Toast.clear();
        this.value = value;
      }, 500);
    }
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Current value | *string \| number* | Min value |
| min | Min value | *string \| number* | `1` |
| max | Max value | *string \| number* | - |
| step | Value change step | *string \| number* | `1` |
| integer | Whether to allow only integers | *boolean* | `false` |
| disabled | Disable value change | *boolean* | `false` |
| disable-input | Disable input | *boolean* | `false` |
| async-change | Whether to enable async change | *boolean* | `false` |
| input-width | Input width | *string \| number* | `32px` |
| button-size | Button size | *string \| number* | `28px` |
| show-plus | Whether to show plus button | *boolean* | `true` |
| show-minus | Whether to show minus button | *boolean* | `true` |
| decimal-length | Decimal length | *number* | - |

### Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when value change | value: current value |
| overlimit | Triggered when click disabled button | - |
| plus | Triggered when click plus button | - |
| minus | Triggered when click minus button | - |
| focus | Triggered when input focused | - |
| blur | Triggered when input blured | - |
