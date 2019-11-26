# Loading

### Install

``` javascript
import { Loading } from 'mt-mobile';

Vue.use(Loading);
```

## Usage

### Type

```html
<mt-loading />
<mt-loading type="spinner" />
```

### Color

```html
<mt-loading color="#1989fa" />
<mt-loading type="spinner" color="#1989fa" />
```

### Text

```html
<mt-loading size="24px">Loading...</mt-loading>
```

### Vertical

```html
<mt-loading size="24px" vertical>Loading...</mt-loading>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | *string* | `#c9c9c9` |
| type | Can be set to `spinner` | *string* | `circular` |
| size | Icon size | *string \| number* | `md` |
| text-size | Text font size | *string \| number* | `14px` |
| vertical | Whether to arrange icons and text content vertically | *boolean* | `false` |

### Slots

| Name | Description |
|------|------|
| default | Loading text |
