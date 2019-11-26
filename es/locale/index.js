import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';
var proto = Vue.prototype;
var defineReactive = Vue.util.defineReactive;
defineReactive(proto, '$mtLang', 'zh-CN');
defineReactive(proto, '$mtMessages', {
  'zh-CN': defaultMessages
});
export default {
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

    deepAssign(proto.$mtMessages, messages);
  }
};