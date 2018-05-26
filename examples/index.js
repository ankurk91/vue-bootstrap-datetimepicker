'use strict';

import Vue from 'vue';

Vue.config.productionTip = false;

// vee-validate is just for demo
import VeeValidate, {Validator} from 'vee-validate';

Vue.use(VeeValidate);

// jQuery is required by bootstrap to work
window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    console.log('Main app created');
  },
  mounted() {
    console.log('Main app mounted');
  },
});
