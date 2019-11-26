# Button

### Install

``` javascript
import { Button } from 'mt-mobile';

Vue.use(Button);
```

## Usage

### Type

```html
<mt-button type="default">Default</mt-button>
<mt-button type="primary">Primary</mt-button>
<mt-button type="info">Info</mt-button>
<mt-button type="danger">Danger</mt-button>
<mt-button type="warning">Warning</mt-button>
```

### Plain

```html
<mt-button plain type="primary">Primary</mt-button>
<mt-button plain type="danger">Danger</mt-button>
```

### Disabled

```html
<mt-button disabled type="primary">Diabled</mt-button>
<mt-button disabled type="danger">Diabled</mt-button>
```

### Loading

```html
<mt-button loading type="primary" />
<mt-button loading type="primary" loading-type="spinner" />
<mt-button loading type="danger" loading-text="Loading..." />
```

### Shape

```html
<mt-button square type="primary">Square</mt-button>
<mt-button round type="danger">Round</mt-button>
```

### Icon

```html
<mt-button icon="star" type="primary" />
<mt-button icon="star" type="primary">Button</mt-button>
```

### Size

```html
<mt-button type="primary" size="large">Large</mt-button>
<mt-button type="primary" size="normal">Normal</mt-button>
<mt-button type="primary" size="small">Small</mt-button>
<mt-button type="primary" size="mini">Mini</mt-button>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `info` `warning` `danger` | *string* | `default` |
| size | Can be set to `large` `small` `mini` | *string* | `normal` |
| text | Text | *string* | - |
| icon | Left Icon | *string* | - |
| tag | HTML Tag | *string* | `button` |
| plain | Whether to be plain button | *boolean* | `false` |
| block | Whether to set display block | *boolean* | `false` |
| round | Whether to be round button | *boolean* | `false` |
| square | Whether to be square button | *boolean* | `false` |
| disabled | Whether to disable button | *boolean* | `false` |
| active-style | Feedback's custom style (set to false to disable click feedback) | *boolean \| object* | {} |
| active-class | Feedback's custom class name | *string* | - |
| loading | Whether show loading status | *boolean* | `false` |
| loading-type | Loading type, can be set to `spinner` | *string* | `circular` |
| loading-size | Loading icon size, can be set to `xxs` `xs` `sm` `md` `lg` `xl` | *string* | `xs` |
| url | Link URL | `String` | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | event: Event |
