# Sidebar

### Install

``` javascript
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'mt-mobile';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## Usage

### Basic Usage

```html
<mt-sidebar v-model="activeKey">
  <mt-sidebar-item title="Title" />
  <mt-sidebar-item title="Title" />
  <mt-sidebar-item title="Title" />
</mt-sidebar>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  }
};
```

### Show Badge

```html
<mt-sidebar v-model="activeKey">
  <mt-sidebar-item title="Title" badge-type="dot" />
  <mt-sidebar-item title="Title" badge-type="hot" badge-text="NEW" />
  <mt-sidebar-item title="Title" :badge-text="101" />
</mt-sidebar>
```

### Disabled

```html
<mt-sidebar v-model="activeKey">
  <mt-sidebar-item :title="Title" />
  <mt-sidebar-item :title="Title" disabled />
  <mt-sidebar-item :title="Title" />
</mt-sidebar>
```

## API

### Sidebar Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of chosen item | *string \| number* | `0` |

### Sidebar Events

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when item changed | index: index of current item |

### SidebarItem Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | *string* | `''` |
| info | Text or number inside badge | *string \| number* | `''` |
| dot | Whether to show a red dot | *boolean* | `false` |
| disabled | Whether to be disabled | *boolean* | `false` |
| url | Link | *string* | - |
| to | Target route of the link, same as to of vue-router | *string \| object* | - |
| replace | If true, the navigation will not leave a history record | *boolean* | `false` |

### SidebarItem Events

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click item | index: index of current item |

### SidebarItem Slots

| 名称 | 说明 |
|------|------|
| default | Custom SidebarItem Content |
