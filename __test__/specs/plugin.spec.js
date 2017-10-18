import Plugin from '../../src/index';
// Lets import full build
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;
describe('datepicker global component', () => {

  // Make a copy of local vue
  let localVue = Vue.extend();
  // Define a global component
  localVue.use(Plugin, 'date-picker');

  test('works as plugin', () => {

    let app = localVue.extend({
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
    });

    let wrapper = new app().$mount();

    let elem = wrapper.$el.firstChild;
    expect(elem.tagName).toBe('INPUT');
    expect(elem.value).toBe('10/10/2017');
    expect(elem.getAttribute('name')).toEqual('date');
    expect(elem.getAttribute('class')).toContain('date-picker');
  });

});
