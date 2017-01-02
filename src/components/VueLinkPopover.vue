<template lang="html">
  <div class="popover">
    <a href="https://vuejs.org/v2/guide/components.html#Named-Slots" v-on:click.prevent v-on:mouseover="hover" v-on:mouseleave="hoverOut" class="popover__title" v-on:focus="hover" v-on:blur="hoverOut">
      <slot></slot>
    </a>
    <transition name="fade">
      <div class="popover__content" v-if="showPopup" v-on:mouseover="hoverInfo" v-on:mouseout="hoverOutInfo" v-on:click.prevent="hoverInfo">
        <slot name="content">
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showPopup: false,
      timer: '',
      isInInfo: false
    }
  },

  methods: {
    hover: function () {
      let vm = this
      this.timer = setTimeout(function () {
        vm.showPopover()
      }, 100)
    },

    hoverOut: function () {
      let vm = this
      clearTimeout(vm.timer)
      this.timer = setTimeout(function () {
        if (!vm.isInInfo) {
          vm.closePopover()
        }
      }, 200)
    },

    hoverInfo: function () {
      this.isInInfo = true
      // console.log('Hovering on popover')
    },

    hoverOutInfo: function () {
      this.isInInfo = false
      this.hoverOut()
    },

    showPopover: function () {
      this.showPopup = true
    },

    closePopover: function () {
      this.showPopup = false
    }

    // Fallbacks for on active, focus and click
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: all .3s ease-in-out;
}

.fade-leave-active {
  transition: all .3s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.popover {
  display: inline-block;
  position: relative;

  &__title {

  }

  &__content {
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 6px 6px rgba(16, 16, 16, 0.04), 0 6px 6px rgba(0, 0, 0, 0.05);
    max-width: 70vw;
    padding: 10px;
    position: absolute;
    width: 200px;
    z-index: 999;

  }

}
</style>
