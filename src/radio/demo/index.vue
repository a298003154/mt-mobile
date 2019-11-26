<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-radio-group
        v-model="radio1"
        class="demo-radio-group"
      >
        <mt-radio name="1">{{ $t('radio') }} 1</mt-radio>
        <mt-radio name="2">{{ $t('radio') }} 2</mt-radio>
      </mt-radio-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <mt-radio-group
        v-model="radio2"
        class="demo-radio-group"
        disabled
      >
        <mt-radio name="1">{{ $t('radio') }} 1</mt-radio>
        <mt-radio name="2">{{ $t('radio') }} 2</mt-radio>
      </mt-radio-group>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <mt-radio-group
        v-model="radio3"
        class="demo-radio-group"
      >
        <mt-radio
          name="1"
          checked-color="#07c160"
        >
          {{ $t('radio') }} 1
        </mt-radio>
        <mt-radio
          name="2"
          checked-color="#07c160"
        >
          {{ $t('radio') }} 2
        </mt-radio>
      </mt-radio-group>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <mt-radio-group
        v-model="radio4"
        class="demo-radio-group"
      >
        <mt-radio name="1">
          {{ $t('radio') }} 1
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive">
          </template>
        </mt-radio>
        <mt-radio name="2">
          {{ $t('radio') }} 2
          <template #icon="{ checked }">
            <img :src="checked ? icon.active : icon.inactive">
          </template>
        </mt-radio>
      </mt-radio-group>
    </demo-block>

    <demo-block :title="$t('withCell')">
      <mt-radio-group v-model="radio5">
        <mt-list>
          <mt-list-item
            clickable
            @click="radio5 = '1'"
          >
            {{ $t('radio') + 1 }}
            <mt-radio
              name="1"
              slot="extra"
            />
          </mt-list-item>
          <mt-list-item
            clickable
            @click="radio5 = '2'"
          >
            {{ $t('radio') + 2 }}
            <mt-radio
              name="2"
              slot="extra"
            />
          </mt-list-item>
        </mt-list>
      </mt-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      withCell: '搭配 List 组件使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      withCell: 'Inside List'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1',
      radio5: '1',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  }
};
</script>

<style lang="less">
.demo-radio {
  &-group {
    padding: 0 17px;

    .mt-radio:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .mt-list {
    .mt-radio {
      display: inline-block;
      width: calc(1.25em + 1px);
    }
  }

  img {
    height: 20px;
  }
}
</style>
