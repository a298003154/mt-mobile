<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-checkbox v-model="checkbox1">{{ $t('checkbox') }}</mt-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <mt-checkbox
        :value="false"
        disabled
      >
        {{ $t('checkbox') }}
      </mt-checkbox>
      <mt-checkbox
        :value="true"
        disabled
      >
        {{ $t('checkbox') }}
      </mt-checkbox>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <mt-checkbox
        v-model="checkbox2"
        checked-color="#07c160"
      >
        {{ $t('customColor') }}
      </mt-checkbox>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <mt-checkbox v-model="checkbox3">
        {{ $t('customIcon') }}
        <template #icon="{ checked }">
          <img :src="checked ? icon.active : icon.inactive">
        </template>
      </mt-checkbox>
    </demo-block>

    <demo-block :title="$t('title3')">
      <mt-checkbox-group v-model="result">
        <mt-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </mt-checkbox>
      </mt-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <mt-checkbox-group
        v-model="result2"
        :max="2"
      >
        <mt-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </mt-checkbox>
      </mt-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title5')">
      <mt-checkbox-group v-model="result3">
        <mt-list>
          <mt-list-item
            v-for="(item, index) in list"
            clickable
            :key="index"
            @click="toggle(index)"
          >
            {{ $t('checkbox') + item }}
            <mt-checkbox
              ref="checkboxes"
              :name="item"
              slot="extra"
            />
          </mt-list-item>
        </mt-list>
      </mt-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      title3: '复选框组',
      title4: '设置最大可选数',
      title5: '搭配 List 组件使用'
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside List'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style lang="less">
.demo-checkbox {
  .mt-list-item__extra {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .mt-checkbox {
    margin: 10px 0 0 20px;
  }

  .mt-list {
    .mt-checkbox {
      display: inline-block;
      width: calc(1.25em + 1px);
      margin: 0;
    }
  }

  img {
    height: 20px;
  }
}
</style>
