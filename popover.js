(function () {
  const Component = {
    name: 'link-popover'
  }

  let Plugin = 'Yellow'

  Plugin.install = function (Vue, options) {
    Vue.component(Component.name, Component)
  }

  /* eslint-disable */
  if (typeof exports === 'object') {
    module.exports = Plugin
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Plugin
    })
  } else if (window.Vue) {
    Vue.use(Plugin)
  }
  /* eslint-enable */
})()
