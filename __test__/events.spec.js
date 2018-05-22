import component from '../src/component.vue';
import {mount, createLocalVue} from '@vue/test-utils';

describe('datepicker component events', () => {

  let localVue = createLocalVue();
  let onChangeStub = jest.fn();

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
        onChange: onChangeStub
      }
    };

    let wrapper = mount(app, {
      localVue
    });

    wrapper.setData({date: '11/11/2018'});

    wrapper.vm.$nextTick(() => {
      expect(onChangeStub).toHaveBeenCalled();
      done()
    })

  });

});
