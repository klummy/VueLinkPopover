(function () {
  const methods = {
    hoverIn () {
      let vm = this
      this.timer = setTimeout(function () {
        vm.showPopover()
      }, 100)
    },

    hoverOut () {
      let vm = this
      clearTimeout(vm.timer)
      this.timer = setTimeout(function () {
        if (!vm.isInInfo) {
          vm.closePopover()
        }
      }, 200)
    },

    hoverInfo () {
      this.isInInfo = true
    },

    hoverOutInfo () {
      this.isInInfo = false
      this.hoverOut()
    },

    showPopover: function () {
      this.showpopover = true
    },

    closePopover: function () {
      this.showpopover = false
    }
  }

  const template = `
    <div class="popover" :class="this.$popoverOpts.theme">
      <a href
        class="popover__text"
        :class="this.$popoverOpts.theme"
        v-on:click.prevent
        v-on:mouseover="hoverIn"
        v-on:mouseleave="hoverOut"
      >
        <slot></slot>
      </a>
      <transition :name="this.$popoverOpts.transitionName ? this.$popoverOpts.transitionName : 'popover'">
        <div class="popover__content"
          v-if="showpopover"
          v-on:mouseover="hoverInfo"
          v-on:mouseout="hoverOutInfo"
          v-on:click.prevent="hoverInfo"
        >
          <slot name="content"></slot>
        </div>
      </transition>
    </div>
  `

  const Component = {
    name: 'link-popover',
    data () {
      return {
        showpopover: false,
        isInInfo: false
      }
    },
    // props: ['theme', 'rootClass'],
    methods,
    template
  }

  let Plugin = {}

  Plugin.install = function (Vue, options) {
    if (options) {
      Vue.prototype.$popoverOpts = options
    }
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
    // Options object should take 'theme', transitionName, params
    Vue.use(Plugin, { theme: 'test' })
  }
  /* eslint-enable */
})()
