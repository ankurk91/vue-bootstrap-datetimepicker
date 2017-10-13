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
                  <date-picker class="date-picker" :value="date" :config="config"></date-picker>
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

    expect(wrapper.$el.firstChild.tagName).toBe('INPUT');
    expect(wrapper.$el.firstChild.value).toBe('10/10/2017');
  });

});
