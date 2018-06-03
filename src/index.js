import Component from './component.vue';

const Plugin = (Vue, params) => {
  let name = 'date-picker';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, Component);
};

Component.install = Plugin;

export default Component;
export {Component, Plugin};
