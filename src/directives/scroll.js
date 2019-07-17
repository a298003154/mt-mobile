import { getScrollEventTarget } from '../utils/dom/scroll';

function unbind(el) {
  const { callback, options, target } = el.onScroll;
  if (!target) return;
  target.removeEventListener('scroll', callback, options);
}

function bindScroll(el, binding) {
  const callback = typeof binding.value === 'function'
    ? binding.value
    : binding.value.callback;
  const options = binding.value.options || { passive: true };
  let target = binding.value.target || window;
  if (target === 'undefined') return;
  if (target instanceof Element) {
    target = getScrollEventTarget(target);
  } else if (target !== window) {
    target = document.querySelector(target);
  }

  const handleScroll = (e) => {
    callback(target, e);
  };
  if (el.onScroll && target !== el.onScroll.target) unbind(el, binding);

  target.addEventListener('scroll', handleScroll, options);

  el.onScroll = {
    callback: handleScroll,
    options,
    target,
  };
}

export default {
  name: 'scroll',
  inserted: bindScroll,
  update: bindScroll,
  unbind,
};
