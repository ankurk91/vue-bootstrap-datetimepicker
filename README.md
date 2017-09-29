# Vue-Bootstrap-DatetimePicker

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-bootstrap-datetimepicker.svg)](https://www.npmjs.com/package/vue-bootstrap-datetimepicker)
[![npm-version](https://img.shields.io/npm/v/vue-bootstrap-datetimepicker.svg)](https://www.npmjs.com/package/vue-bootstrap-datetimepicker)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-bootstrap-datetimepicker.svg?maxAge=1800)](https://github.com/ankurk91/vue-bootstrap-datetimepicker/)
[![license](https://img.shields.io/github/license/ankurk91/vue-bootstrap-datetimepicker.svg?maxAge=1800)]()

Vue.js v2.x component for [eonasdan-bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)

## Installation
```bash
# npm
npm install vue-bootstrap-datetimepicker --save

# Yarn
yarn add vue-bootstrap-datetimepicker
```

## Features
* Reactive ``v-model`` value
    - You can change datepicker value programmatically 
* Reactive [config](http://eonasdan.github.io/bootstrap-datetimepicker/Options/) options
    - You can change config options dynamically
    - Component will watch for changes and apply them
    - You are suggested to modify config via [Vue.set](https://vuejs.org/v2/api/#Vue-set)    
* Play nice with [vee-validate](https://github.com/logaretm/vee-validate) validation library


## Requirements
* Vue.js ^2.4.4
* Bootstrap ^3.3.7 (only css)
* jQuery >=1.8.3 || ^3.2.1
* [Moment.js](https://momentjs.com/) ^2.18
    
## Usage
```html
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <date-picker v-model="date"></date-picker>
      </div>
    </div>
  </div>
</template>

<script>
  // Import required dependencies 
  import 'bootstrap/dist/css/bootstrap.css';
  
  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';
  
  // Import date picker css
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
   
  export default {    
    data () {
      return {
        date: new Date(),       
      }
    },
    components: {
      datePicker
    }
  }
</script>
```

#### As plugin
```js
  import Vue from 'vue';
  import datePicker from 'vue-bootstrap-datetimepicker';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
  Vue.use(datePicker);
```
This will register a global component `<date-picker>` 

## Available props
The component accepts these props:

| Attribute       | Type               | Default               | Description      |
| :---            |  :---:             | :---:                 | :---             |
| v-model / value | String / Date Object / [moment](https://momentjs.com/) / null | `null` | Set or Get date-picker value |
| config          | Object             | `{}` | Datetime picker configuration [options](http://eonasdan.github.io/bootstrap-datetimepicker/Options/)|
| placeholder     | String             | `''` | Set placeholder on input |
| input-class     | String / Object    | `''` | Add CSS class to input  |
| name            | String             | `datetime` | Set input field name  |
| required        | Boolean            | `false` | Make input field required |
| read-only       | Boolean            | `false` | Make input field read-only |
| disabled        | Boolean            | `false` | Make input field disabled |
| wrap            | Boolean            | `false` | Set this to true when wrapped in 'input-group' |
| id              | String             | `''` | Set input field id |

## Events
* The component will emit all available [events](http://eonasdan.github.io/bootstrap-datetimepicker/Events)
* You can listen to them in your component like -
```html
<date-picker v-model="date" @dp-hide="doSomethingOnHide"></date-picker>
```

## Install in non-module environments (without webpack)
* Acquire required files
```html
<!-- Date-picker dependency-->
<script src="https://unpkg.com/jquery@3.2.1/dist/jquery.min.js"></script>
<script src="https://unpkg.com/moment@2.18.1/min/moment.min.js"></script>
<link href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Date-picker itself -->
<script src="https://unpkg.com/eonasdan-bootstrap-datetimepicker@4.17.47/build/js/bootstrap-datetimepicker.min.js"></script>
<link href="https://unpkg.com/eonasdan-bootstrap-datetimepicker@4.17.47/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet">

<!-- Vue js -->
<script src="https://unpkg.com/vue@2.4/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://unpkg.com/vue-bootstrap-datetimepicker"></script>
```
* Use the component anywhere in your app like this
```html
<!-- index.html -->
<div id="app" class="container">
  <div class="row">
    <div class="col-md-12">
      <date-picker v-model="date"></date-picker>
    </div>
  </div>
</div>
<script>
  //Initialize as global component
  Vue.component('date-picker', VueBootstrapDatetimePicker.default);
  
  new Vue({
    el: '#app',
    data: {
      date: null
    },    
  });
</script>
```

### Using Webpack? 
* Webpack users need to configure [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)
```js
// webpack.config.js
plugins: [
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      $: 'jquery',
      moment: 'moment',
    }),
  ]  
```

### Using Laravel Mix ?
* Update your `webpack.mix.js` file, [ref](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/autoloading.md)
```js
// webpack.mix.js
mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
    'vue': ['Vue','window.Vue'],   
    'moment': ['moment','window.moment'],   
  })
```

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js >=6.10 and [yarn](https://yarnpkg.com) >=1.x
* Install dependencies
``
yarn install
``
* Run webpack dev server
``
yarn start
``
* This should open the demo page at ``http://localhost:8080``


## Changelog
Changelog for each release can be found [here](CHANGELOG.md)

## License
[MIT](LICENSE.txt) License
