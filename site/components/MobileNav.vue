<template>
  <mt-collapse
    v-model="active"
    :border="false"
    class="mobile-nav"
  >
    <mt-collapse-item
      class="mobile-nav__item"
      :name="group.groupName"
    >
      <template slot="title">{{ group.groupName }}</template>
      <mt-icon
        :name="group.icon"
        slot="right-icon"
        class="mobile-nav__icon"
      />
      <template v-for="(navItem, index) in group.list">
        <mt-list-item
          v-if="!navItem.disabled"
          :key="index"
          :to="'/' + base + navItem.path"
          arrow="horizontal"
        >{{ navItem.title }}</mt-list-item>
      </template>
    </mt-collapse-item>
  </mt-collapse>
</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="less">
@import '../../src/style/mixins/base';

.mobile-nav {
  &__item {
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 1px 5px #ebedf0;
  }

  &__icon {
    font-size: 24px;

    img {
      width: 100%;
    }
  }

  .mt-collapse-item__wrapper {
    .mt-list-item:not(:last-child) .mt-list-item__line {
      .hairline('bottom');
    }

    .mt-list-item__content {
      font-size: 14px;
    }
  }

  .mt-collapse-item__content {
    padding: 0;
  }

  .mt-collapse-item__title {
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    border-radius: 2px;

    > .mt-list-item__line {
      padding: 10px 16px 10px 0;
    }
  }
}
</style>
