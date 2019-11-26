# Switch

### Install

``` javascript
import Vue from 'vue';
import { Switch } from 'mt-mobile';

Vue.use(Switch);
```

## Usage

### Basic Usage

```html
<mt-switch v-model="checked" />
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};  
```

### Disabled

```html
<mt-switch
  v-model="checked"
  disabled
/>
```

### Loading

```html
<mt-switch
  v-model="checked"
  loading
/>
```

### Custom Size

```html
<mt-switch
  v-model="checked"
  size="24px"
/>
```

### Custom Color

```html
<mt-switch
  v-model="checked"
  active-color="#07c160"
  inactive-color="#ee0a24"
/>
```

### Async Control

```html
<mt-switch
  :value="checked"
  @input="onInput"
/>
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
};  
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Check status of Switch | *any* | `false` |
| loading | Whether to show loading icon | *boolean* | `false` |
| disabled | Whether to disable switch | *boolean* | `false` |
| size | Size of switch | *string* | `30px` |
| active-color | Background color when active | *string* | `#1989fa` |
| inactive-color | Background color when inactive | *string* | `#fff` |
| active-value | Value when active | *any* | `true` |
| inactive-value | Value when inactive | *any* | `false` |

### Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when check status changed | checked: is switch checked |
