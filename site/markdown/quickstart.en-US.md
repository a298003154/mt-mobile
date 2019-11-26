# Quickstart

### Starter kit

We recomment to use [Vue Cli 3](https://cli.vuejs.org/zh/) to create a project.

```bash
# Install Vue Cli
npm install -g @vue/cli

# Create a project
vue create hello-world

# Open GUI
vue ui
```

![](https://img.yzcdn.cn/vant/vue-cli-demo-201809030812.png)

In the GUI, click on 'Dependencies' -> `Install Dependencies` and add `vant` to the dependencies.

### Install

```bash
# Using npm
npm i mt-mobile -S

# Using yarn
yarn add mt-mobile
```

## Usage

### 1. Import on demand

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand

```bash
# Install plugin
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "mt-mobile",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'mt-mobile',
      libraryDirectory: 'es',
      style: true
    }, 'mt-mobile']
  ]
};
```

```js
// Then you can import components from MT-Mobile
import { Button } from 'mt-mobile';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

### 2. Manually import

```js
import Button from 'mt-mobile/lib/button';
import 'mt-mobile/lib/button/style';
```
 
### 3. Import all components

```js
import Vue from 'vue';
import MT from 'mt-mobile';
import 'mt-mobile/lib/index.css';

Vue.use(MT);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.

## Other

### Rem units

Vant use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

#### PostCSS Config

postcss config example:

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```
