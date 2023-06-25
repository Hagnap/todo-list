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

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\nfunction Task(name, description, dueDate, priority) {\n\n    dueDate = dueDate.toLocaleString().split(',')[0];\n    dueDate = `Due: ${dueDate}`;\n    priority = `Priority: ${priority}`;\n    \n    return { name, description, dueDate, priority };\n}\n\nfunction addTask(task) {\n\n    var contentGrid = document.querySelector(\"#content-grid\");\n    console.log(contentGrid);\n    var taskDiv = document.createElement(\"div\");\n    taskDiv.setAttribute(\"class\", \"task-div\");\n    var taskDivRight = document.createElement(\"div\");\n    taskDivRight.setAttribute(\"class\", \"task-div-right\");\n    var taskDivLeft = document.createElement(\"div\");\n    taskDivLeft.setAttribute(\"class\", \"task-div-left\");\n\n    for(var property in task) {\n        var propertyElement = document.createElement(\"p\");\n        propertyElement.textContent = `${task[property]}`;\n        propertyElement.setAttribute(\"class\", `task-div-${property}`);\n\n        if(property == \"description\") { \n            taskDivRight.appendChild(propertyElement);\n        }\n        else {\n            taskDivLeft.appendChild(propertyElement);\n        }\n    }\n\n    taskDiv.appendChild(taskDivLeft);\n    taskDiv.appendChild(taskDivRight);\n\n    contentGrid.appendChild(taskDiv);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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
/******/ 	__webpack_modules__["./src/task.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;