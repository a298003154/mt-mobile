"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _functional = require("../../functional");

var _default = {
  functional: true,
  name: 'tag',
  props: {
    type: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ctx) {
    var type = ctx.props.type;
    return h(type, (0, _babelHelperVueJsxMergeProps.default)([{}, (0, _functional.inherit)(ctx, true)]), [ctx.children]);
  }
};
exports.default = _default;