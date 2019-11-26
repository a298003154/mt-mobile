<template>
  <div class="app">
    <mt-doc
      :base="base"
      :config="config"
      :lang="$mtLang"
      :versions="versions"
      :simulators="simulators"
      :current-simulator="currentSimulator"
      @switch-version="onSwitchVersion"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </mt-doc>
  </div>
</template>

<script>
import pkgJson from '../../package.json';
import docConfig, { versions } from '../doc.config';

export default {
  data() {
    this.versions = versions;

    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$mtLang}`;
    },

    config() {
      return docConfig[this.$mtLang];
    },

    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    },

    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = '#';
      }
    }
  }
};
</script>

<style lang="less">
@import '../../src/style/var';

body {
  font-family: @font-family;
}

.mt-doc-intro {
  padding-top: 20px;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}

.doc-version-tip {
  position: absolute;
  top: 35px;
  left: 50%;
  z-index: 100;
  box-sizing: border-box;
  width: 300px;
  margin-left: -150px;
  padding: 15px;
  color: #333;
  text-align: left;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 12px #ebedf0;
  transform-origin: top;
  cursor: default;
  animation: version-tip .25s cubic-bezier(0.175, 0.885, 0.32, 1.375);

  &::before {
    position: absolute;
    top: -4px;
    left: 50%;
    margin-left: -3px;
    border: 6px solid;
    border-color: transparent transparent white white;
    transform: rotate(135deg);
    content: '';
  }

  &__button {
    width: 60px;
    color: #fff;
    font-size: 12px;
    line-height: 24px;
    background: #1889f9;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background: darken(#1889f9, 10%);
    }

    &:focus {
      outline: none;
    }
  }

  @keyframes version-tip {
    from {
      transform: scaleY(0);
      opacity: 0;
    }

    to {
      transform: scaleY(1);
      opacity: 1;
    }
  }
}
</style>
