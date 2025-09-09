/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/_js/modal.js":
/*!*****************************!*\
  !*** ./source/_js/modal.js ***!
  \*****************************/
/***/ ((module) => {

eval("var Modal = {\n  openModal: function openModal() {\n    $('.js-open-modal').click(function (e) {\n      $(e.currentTarget).parent().find('.js-target-modal').addClass('js-active');\n      $('#overlay').addClass('js-active');\n      $('body').addClass('js-body-modal-active');\n    });\n  },\n  closeModal: function closeModal() {\n    $('body').on('click', '.js-close-modal', function () {\n      $('.js-target-modal').removeClass('js-active');\n      $('#overlay').removeClass('js-active');\n      $('body').removeClass('js-body-modal-active');\n    });\n  },\n  clickOverlayCloseModal: function clickOverlayCloseModal() {\n    $('#overlay').click(function () {\n      $('body').removeClass('js-body-modal-active');\n    });\n  },\n  init: function init() {\n    this.openModal();\n    this.closeModal();\n    this.clickOverlayCloseModal();\n  }\n};\nmodule.exports = Modal;\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/modal.js?");

/***/ }),

/***/ "./source/_js/nav.js":
/*!***************************!*\
  !*** ./source/_js/nav.js ***!
  \***************************/
/***/ ((module) => {

eval("var Nav = {\n  mainMenu: function mainMenu() {\n    // Main Menu Click Behavior\n    $('.js-trigger-menu').click(function (e) {\n      $(e.currentTarget).next().addClass('js-active-menu');\n      $('#overlay').addClass('js-active');\n    });\n  },\n  init: function init() {\n    this.mainMenu();\n  }\n};\nmodule.exports = Nav;\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/nav.js?");

/***/ }),

/***/ "./source/_js/overlay.js":
/*!*******************************!*\
  !*** ./source/_js/overlay.js ***!
  \*******************************/
/***/ ((module) => {

eval("var Overlay = {\n  onClickOverlay: function onClickOverlay() {\n    $('#overlay').click(function () {\n      $('.js-active').removeClass('js-active');\n      $('.js-active-menu').removeClass('js-active-menu');\n    });\n  },\n  init: function init() {\n    this.onClickOverlay();\n  }\n};\nmodule.exports = Overlay;\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/overlay.js?");

/***/ }),

/***/ "./source/_js/scripts.js":
/*!*******************************!*\
  !*** ./source/_js/scripts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ \"./source/_js/overlay.js\");\n/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_overlay__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./source/_js/modal.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./source/_js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll */ \"./source/_js/scroll.js\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scroll__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./source/_js/search.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./source/_js/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n_modal__WEBPACK_IMPORTED_MODULE_1___default().init();\n_nav__WEBPACK_IMPORTED_MODULE_2___default().init();\n_overlay__WEBPACK_IMPORTED_MODULE_0___default().init();\n_scroll__WEBPACK_IMPORTED_MODULE_3___default().init();\n_search__WEBPACK_IMPORTED_MODULE_4___default().init();\n_utils__WEBPACK_IMPORTED_MODULE_5___default().markdownLinksNewPage();\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/scripts.js?");

/***/ }),

/***/ "./source/_js/scroll.js":
/*!******************************!*\
  !*** ./source/_js/scroll.js ***!
  \******************************/
/***/ ((module) => {

eval("var Scroll = {\n  smoothScrolling: function smoothScrolling() {\n    // Smooth Scrolling Function\n    $('a[href*=\\\\#]:not([href=\\\\#])').on('click', function (e) {\n      var $targ = $(e.currentTarget.hash);\n      var host1 = e.currentTarget.hostname;\n      var host2 = window.location.hostname;\n      var path1 = e.currentTarget.pathname.replace(/^\\//, '');\n      var path2 = window.location.pathname.replace(/^\\//, '');\n      if (!$targ.length) {\n        $targ = $(\"[name=\".concat(e.currentTarget.hash.slice(1), \"]\"));\n      }\n      if ($targ.length && (host1 === host2 || path1 === path2)) {\n        $('html, body').animate({\n          scrollTop: $targ.offset().top\n        }, 1000);\n        return false;\n      }\n      return true;\n    });\n  },\n  init: function init() {\n    this.smoothScrolling();\n  }\n};\nmodule.exports = Scroll;\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/scroll.js?");

/***/ }),

/***/ "./source/_js/search.js":
/*!******************************!*\
  !*** ./source/_js/search.js ***!
  \******************************/
/***/ ((module) => {

eval("var Search = {\n  fixedSearchTrigger: function fixedSearchTrigger() {\n    // Search Click Behavior\n    $('.js-trigger-search').on('click', function (e) {\n      e.preventDefault();\n      $(e.currentTarget).parent().addClass('js-active');\n      $('#overlay').addClass('js-active');\n    });\n  },\n  init: function init() {\n    this.fixedSearchTrigger();\n  }\n};\nmodule.exports = Search;\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/search.js?");

/***/ }),

/***/ "./source/_js/utils.js":
/*!*****************************!*\
  !*** ./source/_js/utils.js ***!
  \*****************************/
/***/ ((module) => {

eval("var Utils = {\n  markdownLinksNewPage: function markdownLinksNewPage() {\n    $('.markdown a').map(function (idx, link) {\n      return link.setAttribute('target', '_blank');\n    });\n  }\n};\nmodule.exports = Utils;\n\n//# sourceURL=webpack://objectively-boilerplate/./source/_js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/_js/scripts.js");
/******/ 	
/******/ })()
;