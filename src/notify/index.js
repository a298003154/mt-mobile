import Vue from 'vue';
import MtNotify from './Notify';
import { RED, WHITE } from '../utils/color';
import { isObj, isServer } from '../utils';
import { mount } from '../utils/functional';

let timer;
let instance;

function parseOptions(message) {
  return isObj(message) ? message : { message };
}

function Notify(options) {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    instance = mount(MtNotify, {
      on: {
        click(event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        }
      }
    });
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options)
  };

  Object.assign(instance, options);
  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    value: true,
    message: '',
    color: WHITE,
    background: RED,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

Notify.clear = () => {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = (options) => {
  Object.assign(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = defaultOptions();
};

Notify.install = () => {
  Vue.use(MtNotify);
};

Vue.prototype.$notify = Notify;

export default Notify;
