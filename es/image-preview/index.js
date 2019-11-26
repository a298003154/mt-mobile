import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import MtImagePreview from './ImagePreview';
import { isServer } from '../utils';
var instance;
var defaultConfig = {
  images: [],
  loop: true,
  swipeDuration: 500,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false
};

var initInstance = function initInstance() {
  instance = new (Vue.extend(MtImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  _extends(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  Vue.use(MtImagePreview);
};

export default ImagePreview;