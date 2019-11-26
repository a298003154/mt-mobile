<template>
  <div>
    <mt-nav-bar
      v-show="title"
      class="mt-doc-nav-bar"
      :title="title"
      :left-arrow="showNav"
      @click-left="onBack"
    />
    <keep-alive>
      <router-view :weapp="weapp" />
    </keep-alive>
  </div>
</template>

<script>
function getQueryString(name) {
  const arr = location.search.substr(1).split('&');
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split('=');
    if (item.shift() === name) {
      return decodeURIComponent(item.join('='));
    }
  }
  return '';
}

export default {
  computed: {
    title() {
      const { name } = this.$route.meta;
      return name ? name.replace(/-/g, '') : '';
    },

    showNav() {
      return getQueryString('hide_nav') !== '1';
    },

    weapp() {
      return getQueryString('weapp') === '1';
    }
  },

  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
@import '../../src/style/var';

body {
  color: @text-color-primary;
  font-family: @font-family;
  font-size: 14px;
  line-height: 1;
  background-color: #f9f9f9;
  -webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #dddddd;
}

::-webkit-scrollbar-track {
  border-radius: 6px;
}

.mt-doc-nav-bar {
  height: 56px;
  line-height: 56px;

  .mt-nav-bar__title {
    font-size: 17px;
    text-transform: capitalize;
  }

  .mt-icon {
    color: @gray-dark;
    font-size: 24px;
    cursor: pointer;
  }
}

.mt-doc-demo-section {
  margin-top: -56px;
  padding-top: 56px;
}
</style>
