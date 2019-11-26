# Sidebar 侧边导航

### 引入

``` javascript
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'mt-mobile';

Vue.use(Sidebar);
Vue.use(SidebarItem);
```

## 代码演示

### 基础用法

通过`v-model`绑定当前选中项的索引

```html
<mt-sidebar v-model="activeKey">
  <mt-sidebar-item title="标签名称" />
  <mt-sidebar-item title="标签名称" />
  <mt-sidebar-item title="标签名称" />
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

### 显示徽标

通过`badge-type` 和 `badge-text` 属性分别设置徽标类型和内容

```html
<mt-sidebar v-model="activeKey">
  <mt-sidebar-item title="标签名称" badge-type="dot" />
  <mt-sidebar-item title="标签名称" badge-type="hot" badge-text="NEW" />
  <mt-sidebar-item title="标签名称" :badge-text="101" />
</mt-sidebar>
```

### 禁用选项

```html
<mt-sidebar v-model="activeKey">
  <mt-sidebar-item :title="标签名称" />
  <mt-sidebar-item :title="标签名称" disabled />
  <mt-sidebar-item :title="标签名称" />
</mt-sidebar>
```

## API

### Sidebar Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前导航项的索引 | *string \| number* | `0` |

### Sidebar Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 切换导航项时触发 | index: 当前导航项的索引 |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 内容 | *string* | `''` |
| info | 徽标展示数字或文案，同 Badge 组件的 text 属性 | *string \| number* | `''` |
| dot | 是否显示小红点 | *boolean* | `false` |
| disabled | 是否禁用该项 | *boolean* | `false` |
| url | 跳转链接 | *string* | - |
| to | 路由跳转对象，同 vue-router 的 to 属性 | *string \| object* | - |
| replace | 跳转时是否替换当前页面历史 | *boolean* | `false` |

### SidebarItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | index: 当前导航项的索引 |

### SidebarItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义 SidebarItem 内容 |
