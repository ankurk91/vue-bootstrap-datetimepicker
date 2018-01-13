import component from '../src/component.vue';
import {mount, createLocalVue} from '@vue/test-utils';

describe('datepicker component events', () => {

  let localVue = createLocalVue();

  test('emits events', (done) => {
    let app = {
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
          // shh...
        }
      }
    };

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
