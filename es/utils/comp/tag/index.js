import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { inherit } from '../../functional';
export default {
  functional: true,
  name: 'tag',
  props: {
    type: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ctx) {
    var type = ctx.props.type;
    return h(type, _mergeJSXProps([{}, inherit(ctx, true)]), [ctx.children]);
  }
};