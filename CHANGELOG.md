# Changelog

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
