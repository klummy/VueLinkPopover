# vue-link-popover

[![npm](https://img.shields.io/npm/v/vue-link-popover.svg) ![npm](https://img.shields.io/npm/dm/vue-link-popover.svg)](https://www.npmjs.com/package/vue-link-popover)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Similar to the A reusable link popover component for VueJS

*Inspired by [this Jilson Thomas's post](https://medium.com/@jilsonthomas/reusable-user-link-popover-component-using-vue-js-d37e525a8d27#.mxkgxtwj3)*

## Installation

```
npm install --save vue-link-popover
```

## Usage

You can then use the component **globally** in your Vue.js project with:

```javascript
import Vue from 'vue'

import 'vue-link-popover/dist/vue-link-popover.css'
import VueLinkPopover from 'vue-link-popover'

Vue.use(VueLinkPopover)
```

Or import it into a component with:
```javascript
import 'vue-link-popover/dist/vue-link-popover.css'
import { VueLinkPopover } from 'vue-link-popover/dist/vue-link-popover'

// And then, register the component with:
// ...
components: {
  'link-popover': VueLinkPopover
},
// ...
```

To use it in a template/component, you use the ```<link-popover>``` tag to wrap the link element and then provide the content slot. The content slot is any single HTML element which has the ```slot="content"``` property and can contain child elements.
```html
<link-popover>
  James Bond
  <div slot="content">
    <h1>James Bond</h1>
    <p>Royal Navy Commander James Bond, CMG, RNVR, is a fictional character created by British journalist and novelist Ian Fleming in 1953. He is the protagonist of the James Bond series of novels, films, comics and video games. Fleming wrote twelve Bond novels and two short story collections, although the last two books—The Man with the Golden Gun and Octopussy and The Living Daylights—were published posthumously.</p>
    <button>Read More</button>
  </div>
</link-popover>
```

![Example 2](/.github/images/example-2.png?raw=true "The popover can be used within text")

---

## Customization
The styling of the popover is intentionally minimal and can easily be modified by manipulating the CSS classes of the

---

## Plugin Development & Deployment

### Installation

```
npm install
```

### Watch and compile

```
npm run dev
```

### Publish to npm

```
npm publish
```

### Manual build

```
npm run build
```

## TODO
- [x] Bug: When the popover content child is clicked/hovered, hovering out of the popover doesn't close it.
- [x] Support for clicking on trigger
- [x] Support for other CSS states: active, focus

---

## License

[MIT](http://opensource.org/licenses/MIT)
