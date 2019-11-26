<script>
import { createNamespace } from '../utils';
import { CheckboxMixin } from '../mixins/checkbox';

const [createComponent, bem] = createNamespace('radio');

export default createComponent({
  mixins: [CheckboxMixin({
    bem,
    role: 'radio',
    parent: 'mtRadio'
  })],

  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },

      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },

    checked() {
      return this.currentValue === this.name;
    }
  },

  methods: {
    toggle() {
      this.currentValue = this.name;
    }
  }
});

</script>
