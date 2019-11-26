import { mount, later } from '../../../test/utils';
import Badge from '..';

test('callback events', () => {
  const callback = jest.fn();
  const onInput = jest.fn();
  const onCancel = jest.fn();
  const onSelect = jest.fn();

  const actions = [
    { name: 'Option', callback },
    { name: 'Option', disabled: true },
    { name: 'Option', loading: true },
    { name: 'Option', subname: 'Subname' }
  ];

  const wrapper = mount(Badge, {
    propsData: {
      value: true,
      actions,
      cancelText: 'Cancel'
    },
    listeners: {
      input: onInput,
      cancel: onCancel,
      select: onSelect
    }
  });

  const options = wrapper.findAll('.mt-action-sheet__item');
  options.at(0).trigger('click');
  options.at(1).trigger('click');
  wrapper.find('.mt-action-sheet__cancel').trigger('click');

  expect(callback).toHaveBeenCalled();
  expect(onCancel).toHaveBeenCalled();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
  expect(wrapper).toMatchSnapshot();
});

test('click overlay and close', async () => {
  const onInput = jest.fn();
  const onClickOverlay = jest.fn();
  const div = document.createElement('div');

  mount({
    template: `
      <div>
        <action-sheet
          :value="true"
          :get-container="getContainer"
          @input="onInput"
          @click-overlay="onClickOverlay"
        />
      </div>
    `,
    components: {
      Badge
    },
    data() {
      return {
        getContainer: () => div
      };
    },
    methods: {
      onInput,
      onClickOverlay
    }
  });

  await later();

  div.querySelector('.mt-overlay').click();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onClickOverlay).toHaveBeenCalledTimes(1);
});

test('disable lazy-render', () => {
  const wrapper = mount(Badge, {
    propsData: {
      lazyRender: false,
      actions: [
        { name: 'Option' },
        { name: 'Option' }
      ],
      cancelText: 'Cancel'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render title and default slot', () => {
  const wrapper = mount(Badge, {
    propsData: {
      title: 'Title'
    },
    scopedSlots: {
      default() {
        return 'Default';
      }
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('get container', () => {
  const wrapper = mount(Badge, {
    propsData: {
      value: true,
      getContainer: 'body'
    }
  });

  expect(wrapper.vm.$el.parentNode).toEqual(document.body);
});

test('close-on-click-action prop', () => {
  const onInput = jest.fn();
  const wrapper = mount(Badge, {
    propsData: {
      value: true,
      actions: [{ name: 'Option' }],
      closeOnClickAction: true
    },
    listeners: {
      input: onInput
    }
  });

  const option = wrapper.find('.mt-action-sheet__item');
  option.trigger('click');

  expect(onInput).toHaveBeenCalledWith(false);
});

test('round prop', () => {
  const wrapper = mount(Badge, {
    propsData: {
      value: true,
      round: true,
      actions: [{ name: 'Option' }]
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('color option', () => {
  const wrapper = mount(Badge, {
    propsData: {
      value: true,
      actions: [{ name: 'Option', color: 'red' }]
    }
  });

  expect(wrapper).toMatchSnapshot();
});
