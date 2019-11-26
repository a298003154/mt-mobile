# Checkbox

### Install

``` javascript
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'mt-mobile';

Vue.use(Checkbox).use(CheckboxGroup);
```

## Usage

### Basic Usage

```html
<mt-checkbox v-model="checked">Checkbox</mt-checkbox>
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
<mt-checkbox v-model="checked" disabled>Checkbox</mt-checkbox>
```

### Custom Color

```html
<mt-checkbox v-model="checked" checked-color="#07c160">Checkbox</mt-checkbox>
```

### Custom Icon

Use icon slot to custom icon

```html
<mt-checkbox v-model="checked">
  Custom Icon
  <img
    slot="icon"
    slot-scope="props"
    :src="props.checked ? icon.active : icon.inactive"
  >
</mt-checkbox>
```

```js
export default {
  data() {
    return {
      checked: true,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by v-model.

```html
<mt-checkbox-group v-model="result">
  <mt-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    Checkbox {{ item }}
  </mt-checkbox>
</mt-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

### Maximum amount of checked options

```html
<mt-checkbox-group v-model="result" :max="2">
  <mt-checkbox
    v-for="(item, index) in list"
    :name="item"
    :key="item"
  >
    Checkbox {{ item }}
  </mt-checkbox>
</mt-checkbox-group>
```

### Inside List

```html
<mt-checkbox-group v-model="result">
  <mt-list>
    <mt-list-item
      v-for="(item, index) in list"
      clickable
      :key="item"
      @click="toggle(index)"
    >
      Checkbox {{ item }}
      <mt-checkbox
        ref="checkboxes"
        :name="item"
        slot="extra"
      />
    </mt-list-item>
  </mt-list>
</mt-checkbox-group>
```

```js
export default {
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
```

## API

### Checkbox Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Checkbox name | *any* | - |
| shape | Can be set to `square` | *string* | `round` |
| v-model | Check status | *boolean* | `false` |
| disabled | Disable checkbox | *boolean* | `false` |
| icon-size | Icon size | *string \| number* | `20px` |
| label-disabled | Whether to disable label click | *boolean* | `false` |
| label-position | Can be set to `left` | *string* | `right` |
| checked-color | Checked color | *string* | `#1989fa` |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Names of all checked checkboxes | *any[]* | - |
| disabled | Disable all checkboxes | *boolean* | `false` |
| max | Maximum amount of checked options | *number* | `0`(Unlimited) |

### Checkbox Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
| click | Triggered when click checkbox | event: Event |

### CheckboxGroup Events

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |

### Checkbox Slots

| Name | Description | SlotProps |
|------|------|------|
| default | Custom label | - |
| icon | Custom icon | checked: whether to be checked |

### Checkbox Methods

Use ref to get checkbox instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| toggle | - | - | Toggle check status |
