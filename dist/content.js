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

/***/ "./src/contentTabs.js":
/*!****************************!*\
  !*** ./src/contentTabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddNewProject: () => (/* binding */ displayAddNewProject),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   displayMonthsTask: () => (/* binding */ displayMonthsTask),\n/* harmony export */   displayTodaysTasks: () => (/* binding */ displayTodaysTasks)\n/* harmony export */ });\nfunction resetDiv() {\n    var content = document.querySelector(\"article\");\n    content.innerHTML = \"\";\n}\n\nfunction displayAddNewProject() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewProject()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"New Project\";\n\n    content.appendChild(text);\n}\n\nfunction displayAllTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayAllTasks()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"All Tasks\";\n\n    content.appendChild(text);\n}\n\nfunction displayTodaysTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayTodaysTasks()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For Today\";\n\n    content.appendChild(text);\n}\n\nfunction displayMonthsTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayMonthsTask()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For This Month\";\n\n    content.appendChild(text);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/contentTabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/contentTabs.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;