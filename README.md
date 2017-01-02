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

---

## Customization
The styling of the popover is intentionally minimal and can easily be modified by manipulating CSS classes.

| Class                                                                 | Description                   |
| -------------                                                         |:-------------:                |
| .popover                                                              | Container for the entire popover                |
| .popover__title                                                       | The popover title shown to the user                      |
| .popover__content                                                     | The hidden content shown                      |
| .popover-enter, .popover-enter-active, .popover-leave-active          | Classes for the popover animation. See [the VueJS animation guide for how to use](https://vuejs.org/v2/guide/transitions.html)                      |

_NOTE: You may have to increase the specifity of the classes or use **!important** if the component isn't registered globally._
---

## Examples

### Example 1 - Basic popover
```html
![Example 1](/.github/images/example-1.png?raw=true "The popover can be used within text")

<link-popover>
  James Bond
  <div slot="content">
    <h1>James Bond</h1>
    <p>Royal Navy Commander James Bond, CMG, RNVR, is a fictional character created by British journalist and novelist Ian Fleming in 1953. He is the protagonist of the James Bond series of novels, films, comics and video games. Fleming wrote twelve Bond novels and two short story collections, although the last two books—The Man with the Golden Gun and Octopussy and The Living Daylights—were published posthumously.</p>
    <button>Read More</button>
  </div>
</link-popover>
```

### Example 2 - Popover within block of text
![Example 2](/.github/images/example-2.png?raw=true "The popover can be used within text")

```html
Royal Navy Commander James Bond, CMG, RNVR, is a fictional character created by British journalist and novelist <link-popover>Ian Fleming<p slot="content"><strong>Ian Lancaster Fleming</strong> (28 May 1908 – 12 August 1964) was an English author, journalist and naval intelligence officer who is best known for his James Bond series of spy novels. Fleming came from a wealthy family connected to the merchant bank Robert Fleming & Co., and his father was the Member of Parliament for Henley from 1910 until his death on the Western Front in 1917. Educated at Eton, Sandhurst and, briefly, the universities of Munich and Geneva, Fleming moved through several jobs before he started writing.</p></link-popover> in 1953. He is the protagonist of the James Bond series of novels, films, comics and video games. Fleming wrote twelve Bond novels and two short story collections, although the last two books—The Man with the Golden Gun and Octopussy and The Living Daylights—were published posthumously.
```

<!-- ### Example 3 - Customised popover
![Example 3](/.github/images/example-3.png?raw=true "The popover can be used within text")

```html

``` -->

---

## License

[MIT](http://opensource.org/licenses/MIT)
