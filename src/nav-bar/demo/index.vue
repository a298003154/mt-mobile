<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <mt-nav-bar
        :title="$t('title')"
        :left-text="$t('back')"
        :right-text="$t('button')"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block :title="$t('advancedUsage')">
      <mt-nav-bar
        dark
        :title="$t('title')"
        :left-text="$t('back')"
        left-arrow
      >
        <template #right>
          <mt-icon size="xs" name="search" />
        </template>
      </mt-nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$toast(this.$t('back'));
    },
    onClickRight() {
      this.$toast(this.$t('button'));
    }
  }
};
</script>
