import Vue from 'vue';
import MtDialog from './Dialog';
import { isServer } from '../utils';

let instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (Vue.extend(MtDialog))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });

  instance.$on('input', (value) => {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (isServer) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    Object.assign(instance, Dialog.currentOptions, options, {
      resolve,
      reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: (action) => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = Dialog;

Dialog.confirm = options => Dialog({
  showCancelButton: true,
  ...options
});

Dialog.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = (options) => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.resetDefaultOptions();

Dialog.install = () => {
  Vue.use(MtDialog);
};

Dialog.Component = MtDialog;

Vue.prototype.$dialog = Dialog;

export default Dialog;
