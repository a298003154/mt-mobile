# Layout

### Intro

Quickly and easily create layouts with `mt-row` and `mt-col`

### Install

``` javascript
import { Row, Col } from 'mt-mobile';

Vue.use(Row).use(Col);
```

## Usage

### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.

```html
<mt-row>
  <mt-col span="8">span: 8</mt-col>
  <mt-col span="8">span: 8</mt-col>
  <mt-col span="8">span: 8</mt-col>
</mt-row>

<mt-row>
  <mt-col span="4">span: 4</mt-col>
  <mt-col span="10" offset="4">offset: 4, span: 10</mt-col>
  <mt-col span="6">span: 6</mt-col>
</mt-row>

<mt-row>
  <mt-col offset="12" span="12">offset: 12, span: 12</mt-col>
</mt-row>
```


### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<mt-row gutter="20">
  <mt-col span="8">span: 8</mt-col>
  <mt-col span="8">span: 8</mt-col>
  <mt-col span="8">span: 8</mt-col>
</mt-row>
```

### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<mt-row type="flex">
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
</mt-row>

<mt-row type="flex" justify="center">
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
</mt-row>

<mt-row type="flex" justify="end">
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
</mt-row>

<mt-row type="flex" justify="space-between">
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
</mt-row>

<mt-row type="flex" justify="space-around">
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
  <mt-col span="6">span: 6</mt-col>
</mt-row>
```

## API

### Row Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Layout type, can be set to `flex` | *string* | - |
| gutter | Grid spacing（px） | *string \| number* | - |
| tag | Custom element tag | *string* | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | *string* | `start` |
| align | Flex cross axis, be set to  center/bottom | *string* | `top` |

### Col Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| span | number of column the grid spans | *string \| number* | - |
| offset | number of spacing on the left side of the grid | *string \| number* | - |
| tag | Custom element tag | *string* | `div` |
