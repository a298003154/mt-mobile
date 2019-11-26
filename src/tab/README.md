# Tab

### Install

``` javascript
import Vue from 'vue';
import { Tab, Tabs } from 'mt-mobile';

Vue.use(Tab).use(Tabs);
```

## Usage

### Basic Usage

The first tab is actived by default, you can set `v-model` to active specified tab.

```html
<mt-tabs v-model="active">
  <mt-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </mt-tab>
</mt-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

### Match By Name

```html
<mt-tabs v-model="activeName">
  <mt-tab title="tab 1" name="a">content of tab 1</mt-tab>
  <mt-tab title="tab 2" name="b">content of tab 2</mt-tab>
  <mt-tab title="tab 3" name="c">content of tab 3</mt-tab>
</mt-tabs>
```

```js
export default {
  data() {
    return {
      activeName: 'a'
    };
  }
}
```

### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<mt-tabs>
  <mt-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </mt-tab>
</mt-tabs>
```

### Disabled Tab

You can set `disabled` attribute on the corresponding `mt-tab`. 

```html
<mt-tabs @disabled="onClickDisabled">
  <mt-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </mt-tab>
</mt-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(name, title) {
      this.$toast(title + ' is disabled');
    }
  }
};
```

### Card Style

Tabs styled as cards.

```html
<mt-tabs type="card">
  <mt-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </mt-tab>
</mt-tabs>
```

### Click Event

```html
<mt-tabs @click="onClick">
  <mt-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </mt-tab>
</mt-tabs>
```

```javascript
export default {
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  }
};
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top

```html
<mt-tabs v-model="active" sticky>
  <mt-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </mt-tab>
</mt-tabs>
```

### Custom title

Use title slot to custom tab title

```html
<mt-tabs v-model="active">
  <mt-tab v-for="index in 2">
    <div slot="title">
      <mt-icon name="more-o" />tab
    </div>
    content {{ index }}
  </mt-tab>
</mt-tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation

```html
<mt-tabs v-model="active" animated>
  <mt-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </mt-tab>
</mt-tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content

```html
<mt-tabs v-model="active" swipeable>
  <mt-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </mt-tab>
</mt-tabs>
```

## API

### Tabs Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of active tab | *string \| number* | `0` |
| type | Can be set to `line` `card` | *string* | `line` |
| duration | Toggle tab's animation time | *number* | `0.3` |
| background | Background color | *string* | `white` |
| line-width | Width of tab line | *string \| number* | Width of active tab |
| line-height | Height of tab line | *string \| number* | `3px` |
| color | Tab color | *string* | `#ee0a24` |
| title-active-color | Title active color | *string* | - |
| title-inactive-color | Title inactive color | *string* | - |
| swipe-threshold | Set swipe tabs threshold | *number* | `4` |
| offset-top | Offset top when use sticky mode | *number* | `0` |
| animated | Whether to change tabs with animation | *boolean* | `false` |
| border | Whether to show border when `type="line"` | *boolean* | `true` |
| ellipsis | Whether to ellipsis too long title | *boolean* | `true` |
| sticky | Whether to use sticky mode | *boolean* | `false` |
| swipeable | Whether to switch tabs with swipe gestrue in the content | *boolean* | `false` |
| lazy-render | Whether to enable tab content lazy render | *boolean* | `true` |

### Tab Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Identifier | *string \| number* | Index of tab |
| title | Title | *string* | - |
| disabled | Whether to disable tab | *boolean* | `false` |

### Tabs Slots

| Name | Description |
|------|------|
| nav-left | Custom nav left content |
| nav-right | Custom nav right content |

### Tab Slots

| Name | Description |
|------|------|
| default | Content of tab |
| title | Custom tab title |

### Tabs Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click tab | name：name of current tab，title: tab title |
| change | Triggered when active tab changed | name：name of current tab，title: tab title |
| disabled | Triggered when click disabled tab | name：name of current tab, title: tab title |
| scroll | Triggered when tab scroll in sticky mode | object: { scrollTop, isFixed } |
