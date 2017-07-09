# Changelog

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
