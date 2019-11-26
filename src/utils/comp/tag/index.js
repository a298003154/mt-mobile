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
  render(h, ctx) {
    const { type } = ctx.props;

    return (
      <type {...inherit(ctx, true)}>
        {ctx.children}
      </type>
    );
  }
};
