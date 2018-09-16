# Changelog

## [5.0.1](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/5.0.0...5.0.1)
* Final version

## [5.0.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/4.1.3...5.0.0)
* Same as previous beta version but without `beta` dist tag

## 5.0.0-beta.2
* Change export names 

## 5.0.0-beta.1
* Upgrade to [bootstrap-4](https://github.com/pingcheng/bootstrap4-datetimepicker)
* Switch underlying library to [pc-bootstrap4-datetimepicker](https://github.com/pingcheng/bootstrap4-datetimepicker)

## [4.1.4](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/4.1.3...4.1.4)
* Update dependencies

## [4.1.3](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/4.1.2...4.1.3)
* Update dependencies

## [4.1.2](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/4.1.1...4.1.2) 
* Internal: no longer require to use `Object.assign`

## [4.1.1](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/4.1.0...4.1.1) 
* Fix: a bug where changes in `config` properties were not being detected

## [4.1.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/4.0.0...4.1.0) 
* Add: Support for inline mode
        
## [4.0.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/3.1.2...4.0.0) (breaking)
* Change:
    - Component now sets the v-model value in same format as specified in config, previously it was moment string `2017-10-02T06:14:35.665Z` but now it should follow the format; for example if format is `DD/MM/YYYY` then v-model will be like `22/10/2017`
    - `input-class` prop has been removed, you can always use Vue.js inbuilt [class](https://vuejs.org/v2/guide/class-and-style.html#With-Components) binding
    ```html
      <date-picker v-model="date" class="custom-input"></date-picker>
    ```   
    - Similarly `name`, `id`, `placeholder` and `required` props has been removed, you can still specify any number of attributes on component
    ```html
      <date-picker v-model="date" name="date-of-birth" id="js-date" placeholder="Select date" aria-required="true"></date-picker>
    ```
    
## [3.1.2](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/3.1.1...3.1.2)
* Revert: prevent double `dp-change` event
    - This was preventing date-picker to update DOM
* Fix: use as plugin
* Chore: generate two dist file.
* Change: `dist` folder is no longer part of repo. it means bower no longer supported.

## [3.1.1](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/3.1.0...3.1.1)
* Fix: prevent double `dp-change` event

## [3.1.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/3.0.0...3.1.0)
* Add: Emit all available [events](eonasdan.github.io/bootstrap-datetimepicker/Events/)
    - You can receive the events like this
    ```html
    <date-picker v-model="date" @dp-hide="onHide"></date-picker>
    ```

## [3.0.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.4.3...3.0.0)
* Change: `DatetimePicker.vue` file name to `component.vue`
    - This may be **breaking** for users who were directly importing `.vue` file
* Add: Ability to pass component name when used a plugin
* Fix: Handle `false` value and convert them to `null`, [#4](https://github.com/ankurk91/vue-bootstrap-datetimepicker/issues/4)

## [2.4.3](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.4.2...2.4.3)
- Fix: stopped working in non module environment, [#1](https://github.com/ankurk91/vue-bootstrap-datetimepicker/issues/1)

## [2.4.1](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.4.0...2.4.1)
- Fix: set `dp` to `null` upon destroy

## [2.4.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.3.0...2.4.0)
- Fix: UglifyJS issue 

## [2.3.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.2.0...2.3.0) 
- New way to use as plugin, old is deprecated, see updated [example](https://github.com/ankurk91/vue-bootstrap-datetimepicker#as-plugin)
- Add `id` prop
 
## [2.2.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.1.0...2.2.0)
- Rollback importing css, component is no longer importing any css
    - This also applies when using this package as plugin `Vue.use()`
 
## [2.1.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/2.0.0...2.1.0) 
* Expose `install` method, so that now you can use this package as a [plugin](https://vuejs.org/v2/guide/plugins.html)

## [2.0.0](https://github.com/ankurk91/vue-bootstrap-datetimepicker/compare/1.2.0...2.0.0) (breaking)
- Rename `input-name` prop to `name`

## 1.2.0
* Add validation on `value` prop

## 1.1.0
* Reactive configs 

## 1.0.1
* Specify ``eonasdan-bootstrap-datetimepicker`` as ``dependency`` rather than ``peerDependencies``

## 1.0.0
- Initial release
