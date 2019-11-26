# SwipeAction 滑动单元格

### 介绍

滑动操作组件，结合手势操作，从屏幕一侧唤出操作

- 一次只可滑动一行列表
- 点击任意按钮之外处或往回滑动该列表可隐藏操作

### 引入

``` javascript
import { SwipeAction } from 'mt-mobile';

Vue.use(SwipeAction);
```

## 代码演示

### 基础用法

`SwipeAction`组件提供了`left`和`right`两个属性，用于定义两侧滑动区域的内容

```html
<mt-swipe-action
  :right="right"
>
  <mt-list>
    <mt-list-item>
      仅有右侧按钮
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

```js
export default {
  data() {
    return {
      right: [{
        text: '删除',
        style: { backgroundColor: '#f4333c', color: '#fff' },
        onClick: this.onClick
      }]
    };
  },
  methods: {
    onClick(e) {
      console.log('click', e);
    }
  }
}
```

### 打开和关闭

通过传入`on-close`和`on-close` 回调函数，可以自定义两侧滑动内容关闭时的行为

```html
<mt-swipe-action
  name="swipe-action-2"
  :left="left"
  :right="right"
  :on-close="onClose"
  :on-open="onOpen"
>
  <mt-list>
    <mt-list-item>
      左右两侧滑动
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

```js
export default {
  data() {
    return {
      right: [
        {
          text: '取消',
          style: { backgroundColor: '#ddd', color: '#fff' },
          onClick: this.onClickCancel,
        },
        {
          text: '删除',
          style: { backgroundColor: '#f4333c', color: '#fff' },
          onClick: this.onClickDelete,
        }
      ],
      left: [
        {
          text: '回复',
          style: { backgroundColor: '#108ee9', color: '#fff' },
        },
        {
          text: '取消',
          style: { backgroundColor: '#ddd', color: '#fff' },
        }
      ]
    };
  },
  methods: {
    onClickCancel(e) {
      console.log('onClickCancel, event:', e);
    },
    onClickDelete() {
      this.$dialog.confirm({
        message: '确定删除吗？'
      });
    },
  }
}
```

### 自动关闭失效

当`auto-close`为`false`时，点击操作按钮自动关闭功能失效

```html
<mt-swipe-action
  :left=left"
  :right="right"
  :auto-close="false"
>
  <mt-list>
    <mt-list-item>
      只有通过滑动操作或点击其他非操作按钮区域关闭
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

### 禁用滑动

通过`disabled`属性来禁用滑动操作，则此时仅渲染节点

```html
<mt-swipe-action disabled>
  <mt-list>
    <mt-list-item>
      禁用状态下，仅渲染节点
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 标识符，可以在 onClose 的参数中获取到 | *string \| number* | - |
| on-close | 关闭时的回调函数 | *Function* | - |
| on-open | 打开时的回调函数 | *Function* | - |
| disabled | 是否禁用滑动 | *boolean* | `false` |
| left | 左侧按钮组 | *Array* | `[]` |
| right | 右侧按钮组 | *Array* | `[]` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义显示内容 |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| touchstart | 触摸时触发 | 关闭时的触摸位置 (`left` `right` `content` `outside`) |

### onClose 参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| position | 关闭时的触摸位置 (`left` `right` `content` `outside`) | *string* |
| detail | 额外信息，包含 name 字段 | *object* |

### onOpen 参数

| 参数名 | 说明 | 类型 |
|------|------|------|
| position | 打开时的触摸位置 (`left` `right`) | *string* |
