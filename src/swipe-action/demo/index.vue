<template>
  <div>
    <demo-section>
      <mt-notice-bar>{{ $t('tips') }}</mt-notice-bar>
      <demo-block :title="$t('basicUsage')">
        <mt-swipe-action
          :right="swipe1.right"
        >
          <mt-list>
            <mt-list-item>{{ $t('content') }}</mt-list-item>
          </mt-list>
        </mt-swipe-action>
      </demo-block>

      <demo-block :title="$t('title2')">
        <mt-swipe-action
          name="swipe-action-2"
          :left="swipe2.left"
          :right="swipe2.right"
          :on-close="onClose"
          :on-open="onOpen"
        >
          <mt-list>
            <mt-list-item>{{ $t('content2') }}</mt-list-item>
          </mt-list>
        </mt-swipe-action>
      </demo-block>

      <demo-block :title="$t('title3')">
        <mt-swipe-action
          name="swipe-action-3"
          :left="swipe3.left"
          :right="swipe3.right"
          :auto-close="false"
        >
          <mt-list>
            <mt-list-item wrap>{{ $t('content3') }} <br/> {{ $t('content5') }}</mt-list-item>
          </mt-list>
        </mt-swipe-action>
      </demo-block>

      <demo-block :title="$t('title4')">
        <mt-swipe-action
          name="swipe-action-3"
          disabled
          :left="swipe3.left"
          :right="swipe3.right"
        >
          <mt-list>
            <mt-list-item>{{ $t('content4') }}</mt-list-item>
          </mt-list>
        </mt-swipe-action>
      </demo-block>
    </demo-section>
  </div>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      select: '选择',
      delete: '删除',
      collect: '收藏',
      cancel: '取消',
      reply: '回复',
      title: '列表',
      title2: '打开和关闭',
      title3: '自动关闭失效',
      title4: '禁用状态',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例',
      content: '仅有右侧按钮',
      content2: '左右两侧滑动',
      content3: '只有通过滑动操作',
      content5: '或点击其他非操作按钮区域关闭',
      content4: '禁用状态下，仅渲染节点'
    },
    'en-US': {
      select: 'Select',
      delete: 'Delete',
      collect: 'Collect',
      cancel: 'Cancel',
      reply: 'Reply',
      title: 'List',
      title2: 'onClose and onOpen',
      title3: 'Not Auto Close',
      title4: 'Disabled',
      confirm: 'Are you sure to delete?',
      tips: 'Please try this demo in mobile mode',
      content: 'Only right button',
      content2: 'Swipe Left and Right',
      content3: 'Only Swipe or Click other can close',
      content4: 'Swipe is disabled',
    }
  },

  computed: {
    swipe1() {
      return {
        right: [{
          text: this.$t('delete'),
          style: { backgroundColor: '#f4333c', color: '#fff' },
          onClick: this.onClick,
        }]
      };
    },
    swipe2() {
      return {
        right: [
          {
            text: this.$t('cancel'),
            style: { backgroundColor: '#ddd', color: '#fff' },
            onClick: this.onClickCancel,
          },
          {
            text: this.$t('delete'),
            style: { backgroundColor: '#f4333c', color: '#fff' },
            onClick: this.onClickDelete,
          }
        ],
        left: [
          {
            text: this.$t('reply'),
            style: { backgroundColor: '#108ee9', color: '#fff' },
          },
          {
            text: this.$t('cancel'),
            style: { backgroundColor: '#ddd', color: '#fff' },
          }
        ]
      };
    },
    swipe3() {
      return {
        right: [
          {
            text: this.$t('delete'),
            style: { backgroundColor: '#f4333c', color: '#fff' },
          }
        ],
        left: [
          {
            text: this.$t('reply'),
            style: { backgroundColor: '#108ee9', color: '#fff' },
          },
        ]
      };
    }
  },

  methods: {
    onClick(e) {
      console.log('click', e);
    },
    onOpen(clickPosition) {
      console.log('open', clickPosition);
    },
    onClose(clickPosition, detail) {
      console.log('close', clickPosition, detail);
    },
    onClickCancel(e) {
      console.log('onClickCancel, event:', e);
    },
    onClickDelete() {
      this.$dialog.confirm({
        message: this.$t('confirm')
      });
    },
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe-action {
  user-select: none;
}
</style>
