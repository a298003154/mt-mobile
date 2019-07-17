const path = require('path');

const cssPreprocessors = [
  'less'
];

const oneOfs = [
  'vue-modules',
  'vue',
  'normal-modules',
  'normal'
];

const applyStyleResLoader = rule => (
  rule
    .use('style-resources-loader')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.join(__dirname, '../', 'src/styles/var.less'),
        path.join(__dirname, '../', 'src/styles/mixins/base.less')
      ]
    })
    .end()
);

exports.styleHandler = (module) => {
  cssPreprocessors.forEach((processor) => {
    const rules = module.rule(processor);

    oneOfs.reduce((rule, oneOf) => {
      rules.oneOf(oneOf)
        .use('less-loader')
        .loader('less-loader')
        .tap(options => ({
          ...options,
          javascriptEnabled: true
        }));

      return applyStyleResLoader(rules.oneOf(oneOf));
    }, rules);
  });
};
