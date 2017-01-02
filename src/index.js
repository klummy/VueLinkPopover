import _VueLinkPopover from './components/VueLinkPopover.vue'

export function install (Vue) {
  Vue.component('link-popover', VueLinkPopover)
}

export const VueLinkPopover = _VueLinkPopover

export default {
  /* eslint-disable no-undef */
  version: VERSION,
  install
}
