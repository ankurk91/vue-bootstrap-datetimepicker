import component from './component.vue';

const DatetimePickerPlugin = (Vue, params) => {
  let name = 'date-picker';
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = DatetimePickerPlugin.install;

export default component;
export {component, DatetimePickerPlugin};
