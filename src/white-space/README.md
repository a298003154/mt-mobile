# Layout

### Intro

Quickly and easily create Spacing with `mt-white-space` and `mt-wing-blank`

### Install

``` javascript
import { WhiteSpace, WingBlank } from 'mt-mobile';

Vue.use(WhiteSpace).use(WingBlank);
```

### white space

Filling in `WhiteSpace` components leaves up and down white space between elements

```html
<div class="placeholder">
  block
</div>

<mt-white-space size="sm"/>
<div class="placeholder">block</div>

<mt-white-space size="md"/>
<div class="placeholder">block</div>
```

### wing blank

Use `WingBlank'to wrap the elements to get margin left and margin right
```html
<mt-wing-blank size="sm">
  <div class="placeholder">block</div>
</mt-wing-blank>

<mt-wing-blank size="md">
  <div class="placeholder">block</div>
</mt-wing-blank>
```

## API

### Row Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| size | Can be set to `xxs` `xs` `sm` `md` `lg` `xl` | *string* | `sm` |

### Col Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| size | Can be set to `xs` `sm` `md` `lg` | *string* | `sm` |
