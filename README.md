# Vue Bootstrap 4 DatetimePicker

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-bootstrap-datetimepicker.svg)](http://npm-stats.com/~packages/vue-bootstrap-datetimepicker)
[![npm-version](https://img.shields.io/npm/v/vue-bootstrap-datetimepicker.svg)](https://www.npmjs.com/package/vue-bootstrap-datetimepicker)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-bootstrap-datetimepicker.svg?maxAge=1800)](https://github.com/ankurk91/vue-bootstrap-datetimepicker/)
[![license](https://img.shields.io/github/license/ankurk91/vue-bootstrap-datetimepicker.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-bootstrap-datetimepicker)
[![build-status](https://travis-ci.org/ankurk91/vue-bootstrap-datetimepicker.svg?branch=master)](https://travis-ci.org/ankurk91/vue-bootstrap-datetimepicker)
[![codecov](https://codecov.io/gh/ankurk91/vue-bootstrap-datetimepicker/branch/master/graph/badge.svg)](https://codecov.io/gh/ankurk91/vue-bootstrap-datetimepicker)

Vue.js component for [eonasdan-bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)

## Demo on [JSFiddle](https://jsfiddle.net/ankurk91/01407frf/)

## Versions
:point_right: If you are looking for the documentation of an older version then switch to respective version branch.
 
| Package Version  | Bootstrap CSS version | Underlying Library                                                                                   | API Docs (same for both)        |
| :---             | :---:                 |  :---:                                                                                               | :---             |
| 4.x              | 3.x                   | [eonasdan-bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) (Official) | [Docs](http://eonasdan.github.io/bootstrap-datetimepicker) |
| 5.x              | 4.x                   | [pc-bootstrap4-datetimepicker](https://github.com/pingcheng/bootstrap4-datetimepicker)     (Fork)    | [Docs](http://eonasdan.github.io/bootstrap-datetimepicker) |

## Features
* Reactive `v-model` value
    - You can change datepicker value programmatically 
* Reactive [config](http://eonasdan.github.io/bootstrap-datetimepicker/Options/) options
    - You can change config options dynamically
    - Component will watch for changes and apply them
    - You are suggested to modify config via [Vue.set](https://vuejs.org/v2/api/#Vue-set)  
* Emits all possible events      
* Works with [vee-validate](https://github.com/logaretm/vee-validate) and other validation library

## Requirements
* Bootstrap ^4 (only css)
* jQuery >=1.8.3 
* [Moment.js](https://momentjs.com/) ^2.22
 
## Installation
```bash
# npm
npm install vue-bootstrap-datetimepicker --save

# Yarn
yarn add vue-bootstrap-datetimepicker
```
  
#### Using Webpack? 
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

#### Using Laravel Mix?
* Update your `webpack.mix.js` file, [ref](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/autoloading.md)
```js
// webpack.mix.js
mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
    'vue': ['Vue','window.Vue'],   
    'moment': ['moment','window.moment'],   
  })
```

#### Icon Fonts missing?
* Bootstrap v4 does not come with any icon fonts. You can import [font-awesome](https://www.npmjs.com/package/@fortawesome/fontawesome-free) v5 icons css.
```js
// app.js
jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
      time: 'far fa-clock',
      date: 'far fa-calendar',
      up: 'fas fa-arrow-up',
      down: 'fas fa-arrow-down',
      previous: 'fas fa-chevron-left',
      next: 'fas fa-chevron-right',
      today: 'fas fa-calendar-check',
      clear: 'far fa-trash-alt',
      close: 'far fa-times-circle'
    }
});
```

## Usage Example
```html
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <date-picker v-model="date" :config="options"></date-picker>
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
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
   
  export default {    
    data () {
      return {
        date: new Date(),
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        }       
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
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
  Vue.use(datePicker);
```
This will register a global component `<date-picker>` 

## Events
* The component emits all available [events](http://eonasdan.github.io/bootstrap-datetimepicker/Events)
* You can listen to them in your component like -
```html
<date-picker v-model="date" @dp-hide="doSomethingOnHide" @dp-change="doSomethingOnChange"></date-picker>
```

## Available props
The component accepts these props:

| Attribute       | Type               | Default               | Description      |
| :---            |  :---:             | :---:                 | :---             |
| v-model / value | String / Date Object / [moment](https://momentjs.com/) / null | `null` | Set or Get date-picker value |
| config          | Object             | `{}` | Datetime picker configuration [options](http://eonasdan.github.io/bootstrap-datetimepicker/Options/)|
| wrap            | Boolean            | `false` | Set this to true when wrapped in 'input-group' |

### Install in non-module environments (without webpack)
```html
<!-- Date-picker dependencies -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.3"></script>
<script src="https://cdn.jsdelivr.net/npm/moment@2.22"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Date-picker itself -->
<script src="https://cdn.jsdelivr.net/npm/pc-bootstrap4-datetimepicker@4.17/build/js/bootstrap-datetimepicker.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/pc-bootstrap4-datetimepicker@4.17/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet">

<!-- Vue js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-bootstrap-datetimepicker@5"></script>
<script>
  // Initialize as global component
  Vue.component('date-picker', VueBootstrapDatetimePicker);
</script>
```

## Run examples on your localhost
* Clone this repo
* You should have node-js `>=6.10` and yarn `>=1.x` pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at ``http://localhost:9000`` in your default web browser

## Testing
* This package is using [Jest](https://github.com/facebook/jest) and [vue-test-utils](https://github.com/vuejs/vue-test-utils) for testing.
* Tests can be found in `__test__` folder.
* Execute tests with this command - `yarn test`

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Caveats
* :warning: Don't pass config option as inline literal object to `:config` prop.
```html
<!-- This will cause date picker to freeze -->
<date-picker v-model="card" :config="{format: 'DD/MM/YYYY'}"></date-picker>
```
* Vue.js can not detect changes when literal object/arrays passed within template, [see](https://github.com/vuejs/vue/issues/4060)

## License
[MIT](LICENSE.txt) License
