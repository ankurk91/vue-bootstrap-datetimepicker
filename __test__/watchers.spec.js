import {shallow} from 'vue-test-utils'

import Component from '../src/component.vue';
import moment from 'moment';

describe('datepicker watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      propsData: {
        value: null,
        config: {}
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('updates value runtime', () => {
    let date = moment();
    wrapper.setProps({value: date});
    expect(wrapper.vm.dp.date()).toEqual(date);
  });

  test('updates configs runtime', () => {
    wrapper.setProps({
      config: {
        showTodayButton: true
      }
    });
    expect(wrapper.vm.dp.options()).toHaveProperty('showTodayButton', true);
  });

});
