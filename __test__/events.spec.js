import component from '../src/component.vue';
import {mount} from 'vue-test-utils';
// Lets import full build
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;

describe('datepicker component', () => {

  // Make a copy of local vue
  let localVue = Vue.extend();

  test('emits events', (done) => {
    let app = localVue.component('app', {
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

    let wrapper = mount(app, {
      localVue
    });
    const spy = jest.spyOn(wrapper.vm, 'onChange');
    wrapper.setData({date: new Date()});

    wrapper.vm.$nextTick(() => {
      expect(spy).toHaveBeenCalled();
      spy.mockReset();
      done()
    })

  });

});
