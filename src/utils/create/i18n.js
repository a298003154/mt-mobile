import { get } from '..';
import { camelize } from '../format/string';
import locale from '../../locale';

export function createI18N(name) {
  const prefix = `${camelize(name)}.`;

  return function (path, ...args) {
    const message = get(locale.messages(), prefix + path) || get(locale.messages(), path);
    return typeof message === 'function' ? message(...args) : message;
  };
}
