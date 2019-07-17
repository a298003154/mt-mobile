import Vue from 'vue';
import { on, off } from '../utils/dom/event';
import { BindEventMixin } from './bind-event';

export const CloseOnPopstateMixin = Vue.extend({
  mixins: [BindEventMixin(function (bind, isBind) {
    this.onPopstate(isBind);
  })],

  props: {
    closeOnPopstate: Boolean,
  },

  data() {
    return {
      bindStatus: false,
    };
  },

  watch: {
    closeOnPopstate(val) {
      this.onPopstate(val);
    },
  },

  methods: {
    onPopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        const action = bind ? on : off;
        action(window, 'popstate', this.close);
      }
    }
  }
});
