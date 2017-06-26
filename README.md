# Vue-Bootstrap-DatetimePicker

> Vue.js v2.x component for [eonasdan-bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker/)

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://github.com/ankurk91/vue-bootstrap-datetimepicker/)
[![downloads](https://img.shields.io/npm/dt/vue-bootstrap-datetimepicker.svg)](https://www.npmjs.com/package/vue-bootstrap-datetimepicker)
[![npm-version](https://img.shields.io/npm/v/vue-bootstrap-datetimepicker.svg)](https://www.npmjs.com/package/vue-bootstrap-datetimepicker)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-bootstrap-datetimepicker.svg?maxAge=1800)](https://github.com/ankurk91/vue-bootstrap-datetimepicker/)
[![license](https://img.shields.io/github/license/ankurk91/vue-bootstrap-datetimepicker.svg?maxAge=1800)]()


## Installation
```bash
npm install vue-bootstrap-datetimepicker --save
# OR
yarn add vue-bootstrap-datetimepicker
```

## Features
* Reactive ``v-model`` value
    - You can change datepicker value programmatically 
* Reactive [config](http://eonasdan.github.io/bootstrap-datetimepicker/Options/) options
    - You can change config options dynamically
    - Component will watch for any changes and apply them
* Play nice with [vee-validate](https://github.com/logaretm/vee-validate) validation library


## Requirements
* Vue.js ^2.0.0
* Bootstrap ^3.3.7 
* jQuery >=1.8.3
* Moment.js ^2.10
    
## Example
```html
<template>
  <div>
    <date-picker v-model="date"></date-picker>
  </div>
</template>

<script>
  // Import required dependencies
  import moment from 'moment';
  import jQuery from "jquery";
  import 'bootstrap';
  import datePicker from 'vue-bootstrap-datetimepicker';
  // You have to add CSS yourself
  import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
  // Bootstrap css  
  import 'bootstrap/dist/css/bootstrap.css';
  
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

## Install in non-module environments (without webpack)
* Acquire required files
```html
<!-- Date-picker dependency-->
<script src="jquery.min.js"></script>
<script src="moment.min.js"></script>
<script src="bootstrap.min.js"></script>
<link href="bootstrap.min.css" rel="stylesheet">
<!-- Date-picker itself -->
<script src="bootstrap-datetimepicker.min.js"></script>
<link href="bootstrap-datetimepicker.min.css" rel="stylesheet">
<!-- Vue js -->
<script src="vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://unpkg.com/vue-bootstrap-datetimepicker"></script>
```
* Use the component anywhere in your app like this
```html
<main id="app">  
    <date-picker v-model="date"></date-picker> 
</main>
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

## Props
The component accepts these props

| Attribute    | Required   | Type               | Description      |
| :---         |  :---:     | :---:              | :---            |
| v-model      |  Yes       | String / Date Object / [moment](https://momentjs.com/) / null | Set or Get date-picker value |
| config       |  No        | Object             | Datetime picker configuration [options](http://eonasdan.github.io/bootstrap-datetimepicker/Options/)|
| placeholder  |  No        | String             | Set placeholder on input |
| input-class  |  No        | String / Object    | Add CSS class to input  |
| name         |  No        | String             | Set input field name  |
| required     |  No        | Boolean            | Make input field required |
| read-only    |  No        | Boolean            | Make input field read-only |
| disabled     |  No        | Boolean            | Make input field disabled |
| wrap         |  No        | Boolean            | Set this to true when wrapped in 'input-group' |


### Run examples on your localhost
* Clone this repo
* Make sure you have node-js >=6.10 and npm >=4.6.1
* Install dependencies
``
npm install
``
* Run webpack dev server
``
npm run dev
``
* This should open the demo page at ``http://localhost:8080``

### todo
* Inline mode
* Update to webpack v3.0

### License
[MIT](LICENSE.txt) License
