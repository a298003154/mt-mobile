# Collapse

### Install

``` javascript
import Vue from 'vue';
import { Collapse, CollapseItem } from 'mt-mobile';

Vue.use(Collapse).use(CollapseItem);
```

## Usage

### Basic Usage

Use `v-model` to control the name of active panels

```html
<mt-collapse v-model="activeNames">
  <mt-collapse-item title="Title1" name="1">Content</mt-collapse-item>
  <mt-collapse-item title="Title2" name="2">Content</mt-collapse-item>
  <mt-collapse-item title="Title3" name="3" disabled>Content</mt-collapse-item>
</mt-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

### Accordion

In accordion mode, only one panel can be expanded at the same time.

```html
<mt-collapse v-model="activeName" accordion>
  <mt-collapse-item title="Title1" name="1">Content</mt-collapse-item>
  <mt-collapse-item title="Title2" name="2">Content</mt-collapse-item>
  <mt-collapse-item title="Title3" name="3">Content</mt-collapse-item>
</mt-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

### Custom title

```html
<mt-collapse v-model="activeNames">
  <mt-collapse-item name="1">
    <div slot="title">Title1<mt-icon name="circle-question" size="xxs"/>
  </mt-collapse-item>
  <mt-collapse-item>
    <img slot="thumb" src="http://qzapp.qlogo.cn/qzapp/1106862728/B936520FA9F318FA5BE07FAE5178C7F9/100"/>
    <div slot="title">Title2</div>
    <div slot="extra">Content</div>
  </mt-collapse-item>
</mt-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

## API

### Collapse Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Names of current active panels | accordion mode： *string \| number*<br>non-accordion mode：*(string \| number)[]* | - |
| accordion | Whether to be accordion mode | *boolean* | `false` |
| border | Whether to show outer border | *boolean* | `true` |

### Collapse Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when switch panel | activeNames |

### CollapseItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Name | *string \| number* | `index` |
| disabled | Whether to disabled collapse | *boolean* | `false` |
| thumb | Used to set img src, overwritten by slot `thumb` | *string* | - |
| align | Can be set to `top` `middle` `bottom` | *string* | - |
| wrap | Whether to wrap long texts, otherwise it will be hidden by default | *boolean* | - |
| clickable | Whether to show click feedback when clicked | *boolean* | `false` |
| multiple-line | Multiple line | *boolean* | - |
| active-style | Custom active style | *object* | - |

### CollapseItem Slots

| Name | Description |
|------|------|
| default | Content |
| title | Custom Title |
| brief | Custom Brief |
| extra | Custom Extra |
| thumb | Custom Thumbnail |
