(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueLinkPopover"] = factory();
	else
		root["VueLinkPopover"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = {}\n\n/* styles */\n__webpack_require__(10)\n\n/* script */\n__vue_exports__ = __webpack_require__(3)\n\n/* template */\nvar __vue_template__ = __webpack_require__(7)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/mnt/GlobalFiles/Projects/Active/GithubProjects/vue-link-popover/src/components/VueLinkPopover.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-7b5a9d03\"\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-7b5a9d03\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-7b5a9d03\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] VueLinkPopover.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWU/NGU3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0Esc0JBQWtHOztBQUVsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNELGlDQUFpQzs7QUFFakMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MCxcXFwicmVtb3ZlXFxcIjp0cnVlfSFjc3MtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03YjVhOWQwMyZzY29wZWQ9dHJ1ZSFzYXNzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlTGlua1BvcG92ZXIudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVMaW5rUG9wb3Zlci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdiNWE5ZDAzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvbW50L0dsb2JhbEZpbGVzL1Byb2plY3RzL0FjdGl2ZS9HaXRodWJQcm9qZWN0cy92dWUtbGluay1wb3BvdmVyL3NyYy9jb21wb25lbnRzL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtN2I1YTlkMDNcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2I1YTlkMDNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2I1YTlkMDNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBWdWVMaW5rUG9wb3Zlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ exports[\"default\"] = {\n  data: function data() {\n    return {\n      showPopup: false,\n      timer: '',\n      isInInfo: false\n    };\n  },\n\n  methods: {\n    hover: function hover() {\n      var vm = this;\n      this.timer = setTimeout(function () {\n        vm.showPopover();\n      }, 100);\n    },\n\n    hoverOut: function hoverOut() {\n      var vm = this;\n      clearTimeout(vm.timer);\n      this.timer = setTimeout(function () {\n        if (!vm.isInInfo) {\n          vm.closePopover();\n        }\n      }, 200);\n    },\n\n    hoverInfo: function hoverInfo() {\n      this.isInInfo = true;\n      // console.log('Hovering on popover')\n    },\n\n    hoverOutInfo: function hoverOutInfo() {\n      this.isInInfo = false;\n      this.hoverOut();\n    },\n\n    showPopover: function showPopover() {\n      this.showPopup = true;\n    },\n\n    closePopover: function closePopover() {\n      this.showPopup = false;\n    }\n\n    // Fallbacks for on active, focus and click\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVnVlTGlua1BvcG92ZXIudnVlPzY2ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO3dCQUVBOztpQkFFQTthQUNBO2dCQUVBO0FBSkE7QUFNQTs7OzRCQUVBO2VBQ0E7MENBQ0E7V0FDQTtTQUNBO0FBRUE7O2tDQUNBO2VBQ0E7c0JBQ0E7MENBQ0E7MEJBQ0E7YUFDQTtBQUNBO1NBQ0E7QUFFQTs7b0NBQ0E7c0JBQ0E7QUFDQTtBQUVBOzswQ0FDQTtzQkFDQTtXQUNBO0FBRUE7O3dDQUNBO3VCQUNBO0FBRUE7OzBDQUNBO3VCQUNBO0FBRUE7O0FBRUE7QUFyQ0E7QUFUQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3BvdmVyXCI+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNOYW1lZC1TbG90c1wiIHYtb246Y2xpY2sucHJldmVudCB2LW9uOm1vdXNlb3Zlcj1cImhvdmVyXCIgdi1vbjptb3VzZWxlYXZlPVwiaG92ZXJPdXRcIiBjbGFzcz1cInBvcG92ZXJfX3RpdGxlXCIgdi1vbjpmb2N1cz1cImhvdmVyXCIgdi1vbjpibHVyPVwiaG92ZXJPdXRcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2E+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cInBvcG92ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyX19jb250ZW50XCIgdi1pZj1cInNob3dQb3B1cFwiIHYtb246bW91c2VvdmVyPVwiaG92ZXJJbmZvXCIgdi1vbjptb3VzZW91dD1cImhvdmVyT3V0SW5mb1wiIHYtb246Y2xpY2sucHJldmVudD1cImhvdmVySW5mb1wiPlxuICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgdGltZXI6ICcnLFxuICAgICAgaXNJbkluZm86IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBob3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2bS5zaG93UG9wb3ZlcigpXG4gICAgICB9LCAxMDApXG4gICAgfSxcblxuICAgIGhvdmVyT3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICBjbGVhclRpbWVvdXQodm0udGltZXIpXG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdm0uaXNJbkluZm8pIHtcbiAgICAgICAgICB2bS5jbG9zZVBvcG92ZXIoKVxuICAgICAgICB9XG4gICAgICB9LCAyMDApXG4gICAgfSxcblxuICAgIGhvdmVySW5mbzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5pc0luSW5mbyA9IHRydWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdIb3ZlcmluZyBvbiBwb3BvdmVyJylcbiAgICB9LFxuXG4gICAgaG92ZXJPdXRJbmZvOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzSW5JbmZvID0gZmFsc2VcbiAgICAgIHRoaXMuaG92ZXJPdXQoKVxuICAgIH0sXG5cbiAgICBzaG93UG9wb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93UG9wdXAgPSB0cnVlXG4gICAgfSxcblxuICAgIGNsb3NlUG9wb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93UG9wdXAgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrcyBmb3Igb24gYWN0aXZlLCBmb2N1cyBhbmQgY2xpY2tcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5wb3BvdmVyLWVudGVyLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3BvdmVyLWxlYXZlLWFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3BvdmVyLWVudGVyLFxuLnBvcG92ZXItbGVhdmUtYWN0aXZlIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xufVxuXG4ucG9wb3ZlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICZfX3RpdGxlIHtcblxuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDZweCByZ2JhKDE2LCAxNiwgMTYsIDAuMDQpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAvLyByaWdodDogLTgwcHg7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAzMHZ3O1xuICAgIG1heC13aWR0aDogNzB2dztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgei1pbmRleDogOTk5O1xuXG4gIH1cblxufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWdWVMaW5rUG9wb3Zlci52dWU/MTdjNGY0N2EiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"popover\"\n  }, [_c('a', {\n    staticClass: \"popover__title\",\n    attrs: {\n      \"href\": \"https://vuejs.org/v2/guide/components.html#Named-Slots\"\n    },\n    on: {\n      \"click\": function($event) {\n        $event.preventDefault();\n      },\n      \"mouseover\": _vm.hover,\n      \"mouseleave\": _vm.hoverOut,\n      \"focus\": _vm.hover,\n      \"blur\": _vm.hoverOut\n    }\n  }, [_vm._t(\"default\")], 2), _vm._v(\" \"), _c('transition', {\n    attrs: {\n      \"name\": \"popover\"\n    }\n  }, [(_vm.showPopup) ? _c('div', {\n    staticClass: \"popover__content\",\n    on: {\n      \"mouseover\": _vm.hoverInfo,\n      \"mouseout\": _vm.hoverOutInfo,\n      \"click\": function($event) {\n        $event.preventDefault();\n        _vm.hoverInfo($event)\n      }\n    }\n  }, [_vm._t(\"content\")], 2) : _vm._e()])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-7b5a9d03\", module.exports)\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWU/MjJjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwb3BvdmVyXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBvcG92ZXJfX3RpdGxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNOYW1lZC1TbG90c1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJtb3VzZW92ZXJcIjogX3ZtLmhvdmVyLFxuICAgICAgXCJtb3VzZWxlYXZlXCI6IF92bS5ob3Zlck91dCxcbiAgICAgIFwiZm9jdXNcIjogX3ZtLmhvdmVyLFxuICAgICAgXCJibHVyXCI6IF92bS5ob3Zlck91dFxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcInBvcG92ZXJcIlxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1BvcHVwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicG9wb3Zlcl9fY29udGVudFwiLFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlb3ZlclwiOiBfdm0uaG92ZXJJbmZvLFxuICAgICAgXCJtb3VzZW91dFwiOiBfdm0uaG92ZXJPdXRJbmZvLFxuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5ob3ZlckluZm8oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdChcImNvbnRlbnRcIildLCAyKSA6IF92bS5fZSgpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjVhOWQwM1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2I1YTlkMDMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue__);\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* harmony export (immutable) */ exports[\"install\"] = install;\n/* harmony export (binding) */ __webpack_require__.d(exports, \"VueLinkPopover\", function() { return VueLinkPopover; });\n\n\nfunction install(Vue) {\n  Vue.component('link-popover', VueLinkPopover);\n}\n\nvar VueLinkPopover = __WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue___default.a;\n\n/* harmony default export */ exports[\"default\"] = {\n  /* eslint-disable no-undef */\n  version: \"1.0.0\",\n  install: install\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwiVnVlTGlua1BvcG92ZXIiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVPLFNBQVNBLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzVCQSxNQUFJQyxTQUFKLENBQWMsY0FBZCxFQUE4QkMsY0FBOUI7QUFDRDs7QUFFTSxJQUFNQSxpQkFBaUIsc0VBQXZCOztBQUVQLGtEQUFlO0FBQ2I7QUFDQUMsV0FBUyxPQUZJO0FBR2JKO0FBSGEsQ0FBZiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9WdWVMaW5rUG9wb3ZlciBmcm9tICcuL2NvbXBvbmVudHMvVnVlTGlua1BvcG92ZXIudnVlJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIFZ1ZS5jb21wb25lbnQoJ2xpbmstcG9wb3ZlcicsIFZ1ZUxpbmtQb3BvdmVyKVxufVxuXG5leHBvcnQgY29uc3QgVnVlTGlua1BvcG92ZXIgPSBfVnVlTGlua1BvcG92ZXJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICB2ZXJzaW9uOiBWRVJTSU9OLFxuICBpbnN0YWxsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWU/YTk1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/e1wib21pdFwiOjAsXCJyZW1vdmVcIjp0cnVlfSEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdiNWE5ZDAzJnNjb3BlZD10cnVlIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);
});