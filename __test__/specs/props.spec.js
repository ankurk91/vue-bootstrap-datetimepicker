import {shallow} from 'vue-test-utils'

import Component from '../../src/component.vue';
import moment from 'moment';

describe('Datepicker props', () => {

  // Store for future usage
  const props = {
    value: '10/11/2017',
    inputClass: 'input-field',
    placeholder: 'select-a-date',
    name: 'dob',
    id: 'dob-field',
    config: {
      format: 'DD/MM/YYYY'
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      attachToDocument: true,
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.vm.$destroy();
  });

  test('accepts css class via prop', () => {
    expect(wrapper.hasProp('inputClass', props.inputClass)).toBe(true);
    expect(wrapper.hasClass(props.inputClass)).toBe(true);
  });

  test('accepts input name via prop', () => {
    expect(wrapper.hasProp('name', props.name)).toBe(true);
    expect(wrapper.hasAttribute('name', props.name)).toBe(true);
  });

  test('accepts input id via prop', () => {
    expect(wrapper.hasProp('id', props.id)).toBe(true);
    expect(wrapper.hasAttribute('id', props.id)).toBe(true);
  });

  test('accepts input placeholder via prop', () => {
    expect(wrapper.hasProp('placeholder', props.placeholder)).toBe(true);
    expect(wrapper.hasAttribute('placeholder', props.placeholder)).toBe(true);
  });

  test('accepts config via prop', () => {
    expect(wrapper.hasProp('config', props.config)).toBe(true);
    // dp is the datepicker instance
    expect(wrapper.vm.dp.options()).toHaveProperty('format', props.config.format);
  });

  test('accepts value via prop', () => {
    expect(wrapper.hasProp('value', props.value)).toBe(true);
  });

  test('validates v-model', () => {
    let vModel = wrapper.vm.$options.props.value;

    expect(vModel.validator(false)).toBe(false);
    expect(vModel.validator(undefined)).toBe(false);
    expect(vModel.validator(new Date())).toBe(true);
    expect(vModel.validator(null)).toBe(true);
    expect(vModel.validator('2017-12-12')).toBe(true);
    expect(vModel.validator(moment())).toBe(true);

  });

});
