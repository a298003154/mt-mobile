# Picker

### Intro

The Picker component is usually used with [Popup](#/en-US/popup) Component.

### Install

``` javascript
import Vue from 'vue';
import { Picker } from 'mt-mobile';

Vue.use(Picker);
```

## Usage

### Basic Usage

```html
<mt-picker :columns="columns" @change="onChange" />
```

```javascript
export default {
  data() {
    return {
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    }
  }
};
```

### Default Index

```html
<mt-picker
  :columns="columns"
  :default-index="2"
  @change="onChange"
/>
```

### Show Toolbar

```html
<mt-picker
  show-toolbar
  title="Title"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```javascript
export default {
  data() {
    return {
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`Value: ${value}, Index: ${index}`);
    },
    onCancel() {
      Toast('Cancel');
    }
  }
};
```

### With Popup

```html
<mt-field
  readonly
  clickable
  label="City"
  :value="value"
  placeholder="Choose City"
  @click="showPicker = true"
/>

<mt-popup v-model="showPicker" position="bottom">
  <mt-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</mt-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
```

### Disable option

```html
<mt-picker :columns="columns" />
```

```javascript
export default {
  data() {
    return {
      columns: [
        { text: 'Delaware', disabled: true },
        { text: 'Florida' },
        { text: 'Georqia' }
      ]
    };
  }
};
```

### Multi columns

```html
<mt-picker :columns="columns" @change="onChange" />
```

```javascript
const states = {
  'Group1': ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine'],
  'Group2': ['Alabama', 'Kansas', 'Louisiana', 'Texas']
};

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(states),
          className: 'column1'
        },
        {
          values: states.Group1,
          className: 'column2',
          defaultIndex: 2
        }
      ]
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, states[values[0]]);
    }
  }
};
```

### Loading

When Picker columns data is acquired asynchronously, use `loading` prop to show loading prompt

```html
<mt-picker :columns="columns" loading />
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| columns | Columns data | *Column[]* | `[]` |
| show-toolbar | Whether to show toolbar | *boolean* | `false` |
| toolbar-position | Toolbar position, cat be set to `bottom` | *string* | `top` |
| title | Toolbar title | *string* | `''` |
| loading | Whether to show loading prompt | *boolean* | `false` |
| value-key | Key of option text | *string* | `text` |
| item-height | Option height | *number* | `44` |
| confirm-button-text | Text of confirm button | *string* | `Confirm` |
| cancel-button-text | Text of cancel button | *string* | `Cancel` |
| visible-item-count | Count of visible columns | *number* | `5` |
| allow-html | Whether to allow HTML in option text | *boolean* | `true` |
| default-index | Default value index of single column picker | *number* | `0` |

### Events

Picker events will pass different parameters according to the columns are single or multiple

| Event | Description | Arguments |
|------|------|------|
| confirm | Triggered when click confirm button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| cancel | Triggered when click cancel button | Single column：current value，current index<br>Multiple columns：current values，current indexes |
| change | Triggered when current option changed | Single column：Picker instance, current value，current index<br>Multiple columns：Picker instance, current values，column index |

### Slots

| Name | Description |
|------|------|
| title | Custom title |

### Data Structure of Column

| Key | Description | Type |
|------|------|------|
| values | Value of column | *string[]* |
| defaultIndex | Default value index | *number* |
| className | ClassName for this column | *any* |

### Methods

Use ref to get picker instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| getValues | - | values | Get current values of all columns |
| setValues | values | - |  Set current values of all columns |
| getIndexes | - | indexes | Get current indexes of all columns |
| setIndexes | indexes | - | Set current indexes of all columns |
| getColumnValue | columnIndex | value | Get current value of the column |
| setColumnValue | columnIndex, value | - | Set current value of the column |
| getColumnIndex | columnIndex | optionIndex | Get current index of the column |
| setColumnIndex | columnIndex, optionIndex | - | Set current index of the column |
| getColumnValues | columnIndex | values | Get columns data of the column |
| setColumnValues | columnIndex, values | - | Set columns data of the column |
