"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.listItemProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _shared = require("../utils/comp/touch-feedback/shared");

var listItemProps = (0, _extends2.default)({}, _shared.touchFeedbackProps, {
  wrap: Boolean,
  arrow: String,
  error: Boolean,
  extra: String,
  thumb: String,
  clickable: Boolean,
  multipleLine: Boolean,
  contentStyle: null,
  briefClass: null,
  extraClass: null,
  contentClass: null,
  align: {
    type: String,
    default: 'middle'
  }
});
exports.listItemProps = listItemProps;