import component from '../../src/component.vue';
// Lets import full build
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;

describe('datepicker component', () => {

  // Make a copy of local vue
  let localVue = Vue.extend();

  test('emits events', (done) => {
    let app = localVue.extend({
      template: `<div id="app">
                  <date-picker class="date-picker" v-model="date" :config="config" @dp-change="onChange"></date-picker>
                 </div>`,
      data() {
        return {
          date: '10/10/2016',
          config: {
            format: 'DD/MM/YYYY'
          }
        }
      },
      components: {
        datePicker: component
      },
      methods: {
        onChange(event) {

        }
      }
    });

    let wrapper = new app().$mount();
    const spy = jest.spyOn(wrapper, 'onChange');
    wrapper.$data.date = new Date();
    wrapper.$forceUpdate();

    wrapper.$nextTick(() => {
      expect(spy).toHaveBeenCalled();
      spy.mockReset();
      done()
    })

  });

});
