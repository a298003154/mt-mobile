import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$mtLang', 'zh-CN');
defineReactive(proto, '$mtMessages', {
  'zh-CN': defaultMessages,
});

export default {
  messages() {
    return proto.$mtMessages[proto.$mtLang];
  },

  use(lang, messages) {
    proto.$mtLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$mtMessages, messages);
  },
};
