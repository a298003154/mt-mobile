import { trigger } from './event';

function mockHTMLElementOffset() {
  Object.defineProperties(HTMLElement.prototype, {
    offsetParent: {
      get() {
        return this.parentNode || {};
      }
    },
    offsetLeft: {
      get() {
        return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
      }
    },
    offsetTop: {
      get() {
        return parseFloat(window.getComputedStyle(this).marginTop) || 0;
      }
    },
    offsetHeight: {
      get() {
        return parseFloat(window.getComputedStyle(this).height) || 0;
      }
    },
    offsetWidth: {
      get() {
        return parseFloat(window.getComputedStyle(this).width) || 0;
      }
    }
  });
}

mockHTMLElementOffset();

export function mockGetBoundingClientRect(rect) {
  const originMethod = Element.prototype.getBoundingClientRect;

  Element.prototype.getBoundingClientRect = jest.fn(() => rect);

  return function () {
    Element.prototype.getBoundingClientRect = originMethod;
  };
}

export function mockScrollTop(value) {
  Object.defineProperty(window, 'scrollTop', { value, writable: true });
  trigger(window, 'scroll');
}
