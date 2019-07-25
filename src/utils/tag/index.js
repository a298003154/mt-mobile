export default {
  name: 'tag',
  props: {
    type: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return (
      <this.type>
        {this.$slots.default}
      </this.type>
    );
  }
};
