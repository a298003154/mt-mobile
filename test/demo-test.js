import Vue from 'vue';
import '../site/mobile/demo-common';
import Locale from '../src/locale';
import { mount, later } from './utils';

const empty = {
  render(h) {
    return h('div', [this.$slots.default]);
  },
  inheritAttrs: false
};

Vue.component('demo-block', empty);
Vue.component('demo-section', empty);

export default function (Demo, option = {}) {
  test('renders demo correctly', async () => {
    if (option.hookBeforeTest) {
      option.hookBeforeTest();
    }

    if (Demo.i18n) {
      Locale.add(Demo.i18n);
    }

    const wrapper = mount(Demo);

    await later();

    expect(wrapper).toMatchSnapshot();

    if (option.hookAfterTest) {
      option.hookAfterTest();
    }
  });
}
