"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var proto = _vue.default.prototype;
var defineReactive = _vue.default.util.defineReactive;
defineReactive(proto, '$mtLang', 'zh-CN');
defineReactive(proto, '$mtMessages', {
  'zh-CN': _zhCN.default
});
var _default = {
  messages: function messages() {
    return proto.$mtMessages[proto.$mtLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$mtLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.deepAssign)(proto.$mtMessages, messages);
  }
};
exports.default = _default;