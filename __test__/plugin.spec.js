import Component from '../src/index';
import {mount, createLocalVue} from '@vue/test-utils';

describe('datepicker global component', () => {

  let localVue = createLocalVue();
  localVue.use(Component, 'date-picker');

  test('works as plugin', () => {

    let app = {
      template: `<div id="app">
                  <date-picker name="date" class="date-picker" v-model="date" :config="config"></date-picker>
                 </div>`,
      data() {
        return {
          date: '10/10/2017',
          config: {
            format: 'DD/MM/YYYY'
          }
        }
      }
    };

    let wrapper = mount(app, {
      localVue
    });

    expect(wrapper.contains(Component)).toBe(true);

    let input = wrapper.find(Component);
    expect(input.is('input')).toBe(true);
    expect(input.vm.$el.value).toBe('10/10/2017');
    expect(input.classes()).toContain('date-picker');
    expect(input.attributes('name')).toEqual('date');
  });

});
