import component from './DatetimePicker.vue';

const DatetimePickerPlugin = {
  install: (Vue, options) => {
    Vue.component('date-picker', component);
  }
};

export default component;
export {component, DatetimePickerPlugin};
