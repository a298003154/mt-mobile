# 定制主题

### 介绍

MT-Mobile 提供了一套默认主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。如果你想完全替换主题色或者其他样式，可以使用下面提供的方法

### 样式变量

MT-Moilbe 使用了 [Less](http://lesscss.org/) 对样式进行预处理，并内置了一些样式变量，通过替换样式变量即可定制你自己需要的主题。

<!--下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/youzan/vant/blob/dev/src/style/var.less)。-->

```less
// Component Colors
@text-color-primary: #303133;
@bg-color-base: #f0f2f5;
@bg-color-active: #ddd;
@bg-color-disable: #f5f5f5;
@border-color-base: #e3e5e8;
@divider-color: #d4d6d9;
```

### 定制方法

定制主题分为两步：引入样式源文件和修改样式变量

#### 步骤一. 引入样式源文件

MT-Mobile 支持通过 babel 插件按需引入和手动引入两种方式，推荐使用按需引入的方式。

```js
// 在 babel.config.js 中配置按需引入样式源文件
// 注意：babel6 不支持按需引入样式，请手动引入
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'mt-mobile',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'mt-mobile'
    ]
  ]
};
```

下面是手动引入的方法：

```js
// 手动引入组件的样式源文件
import Button from 'mt-mobile/lib/button';
import 'mt-mobile/lib/button/style/less';
```

#### 步骤二. 修改样式变量

使用 less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改，下面是参考的 webpack 配置。

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              // 直接覆盖变量
              'text-color-primary': '#111',
              'border-color-base': '#eee',
              // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
              'hack': `true; @import "your-less-file-path.less";`
            }
          }
        }
      ]
    }
  ]
};
```
