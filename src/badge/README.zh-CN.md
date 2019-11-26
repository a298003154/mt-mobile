# Badge 徽标

### 介绍

图标右上角的红点、数字或者文字
用于告知用户，该区域的状态变化或者待处理任务的数量

### 引入

``` javascript
import { Badge } from 'mt-mobile';

Vue.use(Badge);
```

## 代码演示

### 小红点

```html
<mt-list-item arrow="horizontal">
  <mt-badge dot>
    <img src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100">
  </mt-badge>
  <span style="margin-left: 12px">小红点徽标</span>
</mt-list-item>
```

### 封顶数字

通过`overflow-count`属性可以设置展示封顶数字

```html
<mt-list-item
  thumb="http://qzapp.qlogo.cn/qzapp/1106862728/E1599FC1409FEAA678600D360C5DF850/100"
  arrow="horizontal"
>
  内容
  <mt-badge slot="extra" :text="77" :overflow-count="55" />
</mt-list-item>
```

### 角标

通过`corner`属性设置展示角标样式，也可以使用默认插槽自定义为角标样式

```html
<mt-list-item>
  <mt-badge corner :text="促">
    <div class="corner-badge">使用角标</div>
  </mt-badge>
</mt-list-item>
<mt-list-item class="special-badge">
  自定义角标
  <mt-badge slot="extra" :text="促" />
</mt-list-item>
```

### 自定义样式

通过`sup-style`属性可以自定义样式

```html
 <mt-list-item>
  定制:
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

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| size | 尺寸，可选值为 `large` `small` | *string* | `small` |
| text | 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | *string \| number* | - |
| corner | 置于角落 | *boolean* | `false` |
| dot | 显示小红点，不显示数字 | *boolean* | `false` |
| hot | 营销样式 | *boolean* | `false` |
| sup-style | 自定义徽标样式 | *string* | - |
| overflow-count | 展示封顶的数字值 | *number* | `99` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义显示内容 |
