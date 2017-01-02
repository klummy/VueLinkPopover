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

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = {}\n\n/* styles */\n__webpack_require__(5)\n\n/* script */\n__vue_exports__ = __webpack_require__(3)\n\n/* template */\nvar __vue_template__ = __webpack_require__(7)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/mnt/GlobalFiles/Projects/Active/GithubProjects/vue-link-popover/src/components/VueLinkPopover.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-7b5a9d03\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-7b5a9d03\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] VueLinkPopover.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWU/NGU3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0EscUJBQWtHOztBQUVsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRCxpQ0FBaUM7O0FBRWpDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjAsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hY3NzLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2I1YTlkMDMhc2Fzcy1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlTGlua1BvcG92ZXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YjVhOWQwMyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVMaW5rUG9wb3Zlci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL21udC9HbG9iYWxGaWxlcy9Qcm9qZWN0cy9BY3RpdmUvR2l0aHViUHJvamVjdHMvdnVlLWxpbmstcG9wb3Zlci9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdiNWE5ZDAzXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiNWE5ZDAzXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVnVlTGlua1BvcG92ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWVcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ exports[\"default\"] = {\n  data: function data() {\n    return {\n      showPopup: false,\n      timer: '',\n      isInInfo: false\n    };\n  },\n\n  methods: {\n    hover: function hover() {\n      var vm = this;\n      this.timer = setTimeout(function () {\n        vm.showPopover();\n      }, 100);\n    },\n\n    hoverOut: function hoverOut() {\n      var vm = this;\n      clearTimeout(vm.timer);\n      this.timer = setTimeout(function () {\n        if (!vm.isInInfo) {\n          vm.closePopover();\n        }\n      }, 200);\n    },\n\n    hoverInfo: function hoverInfo() {\n      this.isInInfo = true;\n      // console.log('Hovering on popover')\n    },\n\n    hoverOutInfo: function hoverOutInfo() {\n      this.isInInfo = false;\n      this.hoverOut();\n    },\n\n    showPopover: function showPopover() {\n      this.showPopup = true;\n    },\n\n    closePopover: function closePopover() {\n      this.showPopup = false;\n    }\n\n    // Fallbacks for on active, focus and click\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVnVlTGlua1BvcG92ZXIudnVlPzJjNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO3dCQUVBOztpQkFFQTthQUNBO2dCQUVBO0FBSkE7QUFNQTs7OzRCQUVBO2VBQ0E7MENBQ0E7V0FDQTtTQUNBO0FBRUE7O2tDQUNBO2VBQ0E7c0JBQ0E7MENBQ0E7MEJBQ0E7YUFDQTtBQUNBO1NBQ0E7QUFFQTs7b0NBQ0E7c0JBQ0E7QUFDQTtBQUVBOzswQ0FDQTtzQkFDQTtXQUNBO0FBRUE7O3dDQUNBO3VCQUNBO0FBRUE7OzBDQUNBO3VCQUNBO0FBRUE7O0FBRUE7QUFyQ0E7QUFUQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3BvdmVyXCI+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNOYW1lZC1TbG90c1wiIHYtb246Y2xpY2sucHJldmVudCB2LW9uOm1vdXNlb3Zlcj1cImhvdmVyXCIgdi1vbjptb3VzZWxlYXZlPVwiaG92ZXJPdXRcIiBjbGFzcz1cInBvcG92ZXJfX3RpdGxlXCIgdi1vbjpmb2N1cz1cImhvdmVyXCIgdi1vbjpibHVyPVwiaG92ZXJPdXRcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2E+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyX19jb250ZW50XCIgdi1pZj1cInNob3dQb3B1cFwiIHYtb246bW91c2VvdmVyPVwiaG92ZXJJbmZvXCIgdi1vbjptb3VzZW91dD1cImhvdmVyT3V0SW5mb1wiIHYtb246Y2xpY2sucHJldmVudD1cImhvdmVySW5mb1wiPlxuICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgdGltZXI6ICcnLFxuICAgICAgaXNJbkluZm86IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBob3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2bS5zaG93UG9wb3ZlcigpXG4gICAgICB9LCAxMDApXG4gICAgfSxcblxuICAgIGhvdmVyT3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICBjbGVhclRpbWVvdXQodm0udGltZXIpXG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdm0uaXNJbkluZm8pIHtcbiAgICAgICAgICB2bS5jbG9zZVBvcG92ZXIoKVxuICAgICAgICB9XG4gICAgICB9LCAyMDApXG4gICAgfSxcblxuICAgIGhvdmVySW5mbzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5pc0luSW5mbyA9IHRydWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdIb3ZlcmluZyBvbiBwb3BvdmVyJylcbiAgICB9LFxuXG4gICAgaG92ZXJPdXRJbmZvOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzSW5JbmZvID0gZmFsc2VcbiAgICAgIHRoaXMuaG92ZXJPdXQoKVxuICAgIH0sXG5cbiAgICBzaG93UG9wb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93UG9wdXAgPSB0cnVlXG4gICAgfSxcblxuICAgIGNsb3NlUG9wb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zaG93UG9wdXAgPSBmYWxzZVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrcyBmb3Igb24gYWN0aXZlLCBmb2N1cyBhbmQgY2xpY2tcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmZhZGUtZW50ZXItYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmZhZGUtbGVhdmUtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmZhZGUtZW50ZXIsXG4uZmFkZS1sZWF2ZS1hY3RpdmUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG59XG5cbi5wb3BvdmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9fdGl0bGUge1xuXG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgYm94LXNoYWRvdzogMCA2cHggNnB4IHJnYmEoMTYsIDE2LCAxNiwgMC4wNCksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIC8vIGxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgfVxuXG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFZ1ZUxpbmtQb3BvdmVyLnZ1ZT8yYjcwNGU5OCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWU/ZDljMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz97XCJvbWl0XCI6MCxcInJlbW92ZVwiOnRydWV9IS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2I1YTlkMDMhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVnVlTGlua1BvcG92ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"popover\"\n  }, [_c('a', {\n    staticClass: \"popover__title\",\n    attrs: {\n      \"href\": \"https://vuejs.org/v2/guide/components.html#Named-Slots\"\n    },\n    on: {\n      \"click\": function($event) {\n        $event.preventDefault();\n      },\n      \"mouseover\": _vm.hover,\n      \"mouseleave\": _vm.hoverOut,\n      \"focus\": _vm.hover,\n      \"blur\": _vm.hoverOut\n    }\n  }, [_vm._t(\"default\")], 2), _vm._v(\" \"), _c('transition', {\n    attrs: {\n      \"name\": \"fade\"\n    }\n  }, [(_vm.showPopup) ? _c('div', {\n    staticClass: \"popover__content\",\n    on: {\n      \"mouseover\": _vm.hoverInfo,\n      \"mouseout\": _vm.hoverOutInfo,\n      \"click\": function($event) {\n        $event.preventDefault();\n        _vm.hoverInfo($event)\n      }\n    }\n  }, [_vm._t(\"content\")], 2) : _vm._e()])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-7b5a9d03\", module.exports)\n  }\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WdWVMaW5rUG9wb3Zlci52dWU/MjJjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwb3BvdmVyXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBvcG92ZXJfX3RpdGxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNOYW1lZC1TbG90c1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgXCJtb3VzZW92ZXJcIjogX3ZtLmhvdmVyLFxuICAgICAgXCJtb3VzZWxlYXZlXCI6IF92bS5ob3Zlck91dCxcbiAgICAgIFwiZm9jdXNcIjogX3ZtLmhvdmVyLFxuICAgICAgXCJibHVyXCI6IF92bS5ob3Zlck91dFxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhZGVcIlxuICAgIH1cbiAgfSwgWyhfdm0uc2hvd1BvcHVwKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicG9wb3Zlcl9fY29udGVudFwiLFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlb3ZlclwiOiBfdm0uaG92ZXJJbmZvLFxuICAgICAgXCJtb3VzZW91dFwiOiBfdm0uaG92ZXJPdXRJbmZvLFxuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5ob3ZlckluZm8oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdChcImNvbnRlbnRcIildLCAyKSA6IF92bS5fZSgpXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YjVhOWQwM1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2I1YTlkMDMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1Z1ZUxpbmtQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue__);\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* harmony export (immutable) */ exports[\"install\"] = install;\n/* harmony export (binding) */ __webpack_require__.d(exports, \"VueLinkPopover\", function() { return VueLinkPopover; });\n\n\nfunction install(Vue) {\n  Vue.component('link-popover', VueLinkPopover);\n}\n\nvar VueLinkPopover = __WEBPACK_IMPORTED_MODULE_0__components_VueLinkPopover_vue___default.a;\n\n/* harmony default export */ exports[\"default\"] = {\n  /* eslint-disable no-undef */\n  version: \"1.0.0\",\n  install: install\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwiVnVlTGlua1BvcG92ZXIiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVPLFNBQVNBLE9BQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzVCQSxNQUFJQyxTQUFKLENBQWMsY0FBZCxFQUE4QkMsY0FBOUI7QUFDRDs7QUFFTSxJQUFNQSxpQkFBaUIsc0VBQXZCOztBQUVQLGtEQUFlO0FBQ2I7QUFDQUMsV0FBUyxPQUZJO0FBR2JKO0FBSGEsQ0FBZiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9WdWVMaW5rUG9wb3ZlciBmcm9tICcuL2NvbXBvbmVudHMvVnVlTGlua1BvcG92ZXIudnVlJ1xuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIFZ1ZS5jb21wb25lbnQoJ2xpbmstcG9wb3ZlcicsIFZ1ZUxpbmtQb3BvdmVyKVxufVxuXG5leHBvcnQgY29uc3QgVnVlTGlua1BvcG92ZXIgPSBfVnVlTGlua1BvcG92ZXJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICB2ZXJzaW9uOiBWRVJTSU9OLFxuICBpbnN0YWxsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);
});