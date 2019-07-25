import Button from './button';

const components = [
  Button
];

const install = (Vue) => {
  components.forEach((Component) => {
    Vue.use(Component);
  });
};


export {
  install,
  Button
};

export default {
  install,
};
