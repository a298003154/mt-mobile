# Tabbar

### Install

``` javascript
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'mt-mobile';

Vue.use(Tabbar).use(TabbarItem);
```

## Usage

### Basic Usage

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item icon="profile">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="search">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="compass">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="setting">Tab</mt-tabbar-item>
</mt-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

### Match by name

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item name="profile" icon="profile">Tab</mt-tabbar-item>
  <mt-tabbar-item name="search" icon="search">Tab</mt-tabbar-item>
  <mt-tabbar-item name="compass" icon="compass">Tab</mt-tabbar-item>
  <mt-tabbar-item name="setting" icon="setting">Tab</mt-tabbar-item>
</mt-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 'profile'
    }
  }
}
```

### Show Badge

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item icon="profile">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="search" dot>Tab</mt-tabbar-item>
  <mt-tabbar-item icon="compass" info="5">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="setting" info="20">Tab</mt-tabbar-item>
</mt-tabbar>
```

### Custom Icon

Use `icon` slot to custom icon

```html
<mt-tabbar v-model="active">
  <mt-tabbar-item info="3">
    <span>Custom</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </mt-tabbar-item>
  <mt-tabbar-item icon="search">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="setting">Tab</mt-tabbar-item>
</mt-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
```

### Custom Color

```html
<mt-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000"
>
  <mt-tabbar-item icon="profile">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="search">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="freinds-o">Tab</mt-tabbar-item>
  <mt-tabbar-item icon="setting">Tab</mt-tabbar-item>
</mt-tabbar>
```

### Route Mode

```html
<router-view />

<mt-tabbar route>
  <mt-tabbar-item
    replace
    to="/profile"
    icon="profile"
  >
    Tab
  </mt-tabbar-item>
  <mt-tabbar-item
    replace
    to="/search"
    icon="search"
  >
    Tab
  </mt-tabbar-item>
</mt-tabbar>
```

## API

### Tabbar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Identifier of current tab | *string \| number* | `0` |
| fixed | Whether to fixed bottom | *boolean* | `true` |
| border | Whether to show border | *boolean* | `true` |
| z-index | Z-index | *number* | `1` |
| active-color | Color of active tab item | *string* | `#1989fa` |
| inactive-color | Color of inactive tab item | *string* | `#7d7e80` |
| route | Whether to enable route mode | *boolean* | `false` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation, to enable those features use `viewport-fit=cover` in the `viewport` meta tag | *boolean* | `false` |

### Tabbar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Identifier | *string \| number* | Item index |
| icon | Icon name | *string* | - |
| dot | Whether to show red dot | *boolean* | - |
| info | Info message | *string \| number* | - |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### TabbarItem Slots

| Name | Description | SlotProps |
|------|------|------|
| icon | Custom icon | active |
