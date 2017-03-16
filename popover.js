(function () {
  const Component = {
    name: 'link-popover'
  }

  let linkPopover = 'Yellow'

  linkPopover.install = function (Vue, options) {
    Vue.component(Component.name, Component)
  }

  /* eslint-disable */
  if (typeof exports === 'object') {
    module.exports = linkPopover
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return linkPopover
    })
  } else if (window.Vue) {
    Vue.use(linkPopover)
  }
  /* eslint-enable */
})()
