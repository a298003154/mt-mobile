# SwipeAction

### Install

``` javascript
import { SwipeAction } from 'mt-mobile';

Vue.use(SwipeAction);
```

## Usage

### Basic Usage

```html
<mt-swipe-action
  :right="right"
>
  <mt-list>
    <mt-list-item>
      Only right button
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

```js
export default {
  data() {
    return {
      right: [{
        text: 'Delete',
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

### onClose and onOpen

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
      Swipe Left and Right
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
          text: 'Cancel',
          style: { backgroundColor: '#ddd', color: '#fff' },
          onClick: this.onClickCancel,
        },
        {
          text: 'Delete',
          style: { backgroundColor: '#f4333c', color: '#fff' },
          onClick: this.onClickDelete,
        }
      ],
      left: [
        {
          text: 'Reply',
          style: { backgroundColor: '#108ee9', color: '#fff' },
        },
        {
          text: 'Cancel',
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
        message: 'Are you sure to delete?'
      });
    },
  }
}
```

### Not Auto Close

```html
<mt-swipe-action
  :left=left"
  :right="right"
  :auto-close="false"
>
  <mt-list>
    <mt-list-item>
      Only Swipe or Click other can close
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

### Disabled

```html
<mt-swipe-action disabled>
  <mt-list>
    <mt-list-item>
      Swipe is disabled
    </mt-list-item>
  </mt-list>
</mt-swipe-action>
```

## API

### Props

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Identifier of SwipeAction | *string \| number* | - |
| on-close | Callback function before close | *Function* | - |
| on-open | Callback function before open | *Function* | - |
| disabled | Whether to disabled swipe | *boolean* | `false` |
| left | left buttons | *Array* | `[]` |
| right | Right buttons | *Array* | `[]` |

### Slots

| Name | Description |
|------|------|
| default | custom content |

### Events

| Event | Description | Arguments |
|------|------|------|
| touchstart | Triggered when touch | touch position (`left` `right` `content` `outside`) |

### onClose Params

| Attribute | Description | Type |
|------|------|------|
| position | Touch position (`left` `right` `content` `outside`) | *string* |
| detail | Detail info | *object* |

### onOpen Params

| Name | Attribute | Type |
|------|------|------|------|
| position | Touch position (`left` `right`) | *string* |
