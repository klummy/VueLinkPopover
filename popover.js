(function () {
  const methods = {
    hoverIn () {
      if (!this.click) {
        let vm = this
        this.timer = setTimeout(function () {
          vm.showPopover()
        }, 100)
      }
    },

    hoverOut () {
      if (!this.click) {
        let vm = this
        clearTimeout(vm.timer)
        this.timer = setTimeout(function () {
          if (!vm.isInInfo) {
            vm.closePopover()
          }
        }, 200)
      }
    },

    hoverInfo () {
      this.isInInfo = true
    },

    hoverOutInfo () {
      this.isInInfo = false
      this.hoverOut()
    },

    showPopover () {
      this.showpopover = true
    },

    closePopover () {
      this.showpopover = false
    },

    clickToOpen () {
      if (this.click) {
        this.showpopover = true
      }
    }
  }

  const template = `
    <div class="v-popover" :class="this.$popoverOpts ? this.$popoverOpts.theme : ''">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-cross" viewBox="0 0 32 32"><title>cross</title><path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path></symbol></defs></svg>


      <a href
        class="v-popover__text"
        v-on:click.prevent="clickToOpen"
        v-on:mouseover="hoverIn"
        v-on:mouseleave="hoverOut"
      >
        <slot></slot>
      </a>
      <transition :name="this.$popoverOpts ? this.$popoverOpts.transitionName : 'v-popover'">
        <div class="v-popover__content"
          v-if="showpopover"
          v-on:mouseover="hoverInfo"
          v-on:mouseout="hoverOutInfo"
          v-on:click.prevent="hoverInfo"
        >
          <svg class="v-popover__close-icon" @click.prevent="closePopover">
            <use xlink:href="#icon-cross"></use>
          </svg>
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
    methods,
    props: ['click'],
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
    module.exports = Component
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Component
    })
  } else if (window.Vue) {
    // Options object should take 'theme', transitionName, params
    Vue.use(Plugin)
  }
  /* eslint-enable */
})()
