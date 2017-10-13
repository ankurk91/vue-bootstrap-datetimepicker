import component from './component.vue';

const DatetimePickerPlugin = (Vue, params) => {
  let name = 'date-picker';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = DatetimePickerPlugin;

export default component;
export {component, DatetimePickerPlugin};
