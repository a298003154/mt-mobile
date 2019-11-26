# Badge

### Install

``` javascript
import { Badge } from 'mt-mobile';

Vue.use(Badge);
```

## Usage

### Dot

```html
<mt-list-item arrow="horizontal">
  <mt-badge dot>
    <img src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100">
  </mt-badge>
  <span style="margin-left: 12px">Dot</span>
</mt-list-item>
```

### Overflow Count

```html
<mt-list-item
  thumb="http://qzapp.qlogo.cn/qzapp/1106862728/E1599FC1409FEAA678600D360C5DF850/100"
  arrow="horizontal"
>
  Content
  <mt-badge slot="extra" :text="77" :overflow-count="55" />
</mt-list-item>
```

### Corner

```html
<mt-list-item>
  <mt-badge corner :text="Sales">
    <div class="corner-badge">Use corner prop</div>
  </mt-badge>
</mt-list-item>
<mt-list-item class="special-badge">
  Custom corner
  <mt-badge slot="extra" :text="Sales" />
</mt-list-item>
```

### Customize Style

```html
 <mt-list-item>
  Customize:
  <mt-badge
    text="券"
    :style="{ marginLeft: '8px' }"
    :sup-style="{ backgroundColor: '#f19736', borderRadius: '2px'}" />
  <mt-badge
    text="NEW"
    :style="{ marginLeft: '8px' }"
    :sup-style="{ backgroundColor: '#21b68a', padding: '0 8px', borderRadius: '4px'}"/>
  <mt-badge
    text="自动缴费"
    :style="{ marginLeft: '8px' }"
    :sup-style="{
      padding: '0 3px',
      backgroundColor: '#fff',
      borderRadius: 2,
      color: '#f19736',
      border: '1px solid #f19736'
    }"
  />
</mt-list-item>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| size | Can be set to `large` `small` | *string* | `small` |
| text | Text or number inside badge | *string \| number* | - |
| corner | Whether is badge at corner position | *boolean* | `false` |
| dot | Show badge as a red dot | *boolean* | `false` |
| hot | Hot commercial style | *boolean* | `false` |
| sup-style | Custom badge style | *string* | - |
| overflow-count | Max count to show | *number* | `99` |

### Slots

| Name | Description |
|------|------|
| default | Custom Content |
