import component from './DatetimePicker.vue';

const plugin = {
  install: (Vue, options) => {
    Vue.component('date-picker', component);
    require('eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css');
  }
};

export default component;
export {component, plugin};
