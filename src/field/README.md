# Field

### Install

``` javascript
import Vue from 'vue';
import { Field } from 'mt-mobile';

Vue.use(Field);
```

## Usage

### Basic Usage

The value of field is bound with v-model.

```html
<mt-list>
  <mt-field v-model="value" placeholder="Username" />
</mt-list>
```

### Custom type

Use `type` prop to custom different type fields.

```html
<mt-list>
  <mt-field
    v-model="username"
    required
    clearable
    label="Username"
    right-icon="question-o"
    placeholder="Username"
    @click-right-icon="$toast('question')"
  />

  <mt-field
    v-model="password"
    type="password"
    label="Password"
    placeholder="Password"
    required
  />
</mt-list>
```

### Disabled

```html
<mt-list>
  <mt-field
    value="Disabled"
    label="Username"
    left-icon="contact"
    disabled
  />
</mt-list>
```

### Error info

Use `error` or `error-message` to show error info

```html
<mt-list>
  <mt-field
    v-model="username"
    label="Username"
    placeholder="Username"
    error
  />
  <mt-field
    v-model="phone"
    label="Phone"
    placeholder="Phone"
    error-message="Invalid phone"
  />
</mt-list>
```

### Auto resize

Textarea Field can be auto resize when has `autosize` prop

```html
<mt-list>
  <mt-field
    v-model="message"
    label="Message"
    type="textarea"
    placeholder="Message"
    rows="1"
    autosize
  />
</mt-list>
```

### Insert button

Use button slot to insert button

```html
<mt-list>
  <mt-field
    v-model="sms"
    center
    clearable
    label="SMS"
    placeholder="SMS"
  >
    <mt-button slot="button" size="small" type="primary">Send SMS</mt-button>
  </mt-field>
</mt-list>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| value | Field value | *string \| number* | - |
| label | Field label | *string* | - |
| type | Input type, can be set to `tel` `number`<br>`textarea` `password` | *string* | `text` |
| size | Size，can be set to `large` | *string* | - |
| maxlength | Max length of value | *string \| number* | - |
| placeholder | Placeholder | *string* | - |
| border | Whether to show inner border | *boolean* | `true` |
| disabled | Whether to disable field | *boolean* | `false` |
| readonly | Whether to be readonly | *boolean* | `false` |
| required | Whether to show required mark | *boolean* | `false` |
| clearable | Whether to be clearable | *boolean* | `false` |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| active-style | Feedback's custom style | *object* | {} |
| active-class | Feedback's custom class name | *string* | - |
| error | Whether to show error info | *boolean* | `false` |
| arrow | Can be set to `horizontal` `up` `down` | *string* | - |
| error-message | Error message | *string* | `''` |
| label-class | Label className | *any* | - |
| label-width | Label width | *string \| number* | `90px` |
| label-align | Label text align, can be set to `center` `right` | *string* | `left` |
| input-align | Input text align, can be set to `center` `right` | *string* | `left` |
| error-message-align | Error message text align, can be set to `center` `right` | *string* | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | *boolean \| object* | `false` |
| left-icon | Left side icon name | *string* | - |
| right-icon | Right side icon name | *string* | - |

### Events

Field support all native events of input tag

| Event | Description | Parameters |
|------|------|------|
| input | Triggered when input value changed | value: current value |
| focus | Triggered when input gets focus | event: Event |
| blur | Triggered when input loses focus | event: Event |
| clear | Triggered when click clear icon | event: Event |
| click | Triggered when click Field | event: Event |
| click-left-icon | Triggered when click the left icon of Field | event: Event |
| click-right-icon | Triggered when click the right icon of Field | event: Event |

### Methods

Use ref to get field instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| focus | - | - | Trigger input focus |
| blur | - | - | Trigger input blur |

### Slots

| Name | Description |
|------|------|
| label | Custom label |
| input | Custom input |
| left-icon | Custom left icon |
| right-icon | Custom right icon |
| button | Insert button |
