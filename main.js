/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHeader = () => {\n\n    const headerElem = document.createElement('header');\n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n\n    homeBtn.classList.add('header-btn');\n    menuBtn.classList.add('header-btn');\n    contactBtn.classList.add('header-btn');\n\n    homeBtn.textContent = 'HOME';\n    menuBtn.textContent = 'MENU';\n    contactBtn.textContent = 'CONTACT';\n\n    headerElem.appendChild(homeBtn);\n    headerElem.appendChild(menuBtn);\n    headerElem.appendChild(contactBtn);\n\n    return headerElem;\n}\n\nconst createSection1 = () => {\n    const section1Elem = document.createElement('section');\n    section1Elem.classList.add('logo');\n\n    const img = document.createElement('img');\n    img.setAttribute('src', './images/logo.png');\n    img.classList.add('main');\n\n    const logoText = document.createElement('h3');\n    logoText.classList.add('main');\n    logoText.textContent = 'OH LA LA CAFÉ';\n\n    section1Elem.appendChild(img);\n    section1Elem.appendChild(logoText);\n\n    return section1Elem;\n}\n\nconst createSection2 = () => {\n    const section2Elem = document.createElement('section');\n    const header = document.createElement('h1');\n    header.classList.add('main');\n    header.textContent = 'A TASTE OF PARIS'\n\n    section2Elem.appendChild(header);\n\n    return section2Elem; \n}\n\nconst createSection3 = () => {\n    const section3Elem = document.createElement('section');\n    const paragraph = document.createElement('p');\n    paragraph.classList.add('main');\n    paragraph.textContent = 'Welcome to the best taste of Paris in Colorado! Check our menu, see you soon !';\n\n    section3Elem.appendChild(paragraph);\n\n    return section3Elem; \n}\n\nconst createMain = () => {\n    const mainElem = document.createElement('main');\n\n    mainElem.appendChild(createSection1());\n    mainElem.appendChild(createSection2());\n    mainElem.appendChild(createSection3());\n\n    return mainElem;\n}\n\nconst createFooter = () => {\n    const footer = document.createElement('footer');\n    footer.textContent = 'Copyright &copy Agata Deter 2023';\n\n    return footer;\n}\n\nfunction createHomepage() {\n    const divContent = document.getElementById('content');\n\n    divContent.appendChild(createHeader());\n    divContent.appendChild(createMain());\n    divContent.appendChild(createFooter());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nfunction createWebsite() {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\ncreateWebsite();\nconsole.log(\"hello\")\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;