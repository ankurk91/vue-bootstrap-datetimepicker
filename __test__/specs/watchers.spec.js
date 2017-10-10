import {shallow} from 'vue-test-utils'

import Component from '../../src/component.vue';
import moment from 'moment';

describe('Datepicker watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      attachToDocument: true,
      propsData: {
        value: null,
        config: {}
      }
    });
  });

  afterEach(() => {
    wrapper.vm.$destroy();
  });

  test('updates value runtime', () => {
    let date = moment();
    wrapper.setProps({value: date});
    expect(wrapper.vm.dp.date()).toEqual(date);
  });

  test('updates configs runtime', () => {
    wrapper.setProps({config: {showTodayButton: true}});
    expect(wrapper.vm.dp.options()).toHaveProperty('showTodayButton', true);
  });

});
