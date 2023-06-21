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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddNewProject: () => (/* binding */ displayAddNewProject),\n/* harmony export */   displayAddNewTask: () => (/* binding */ displayAddNewTask),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   displayMonthsTask: () => (/* binding */ displayMonthsTask),\n/* harmony export */   displayTodaysTasks: () => (/* binding */ displayTodaysTasks)\n/* harmony export */ });\nfunction resetDiv() {\n    var content = document.querySelector(\"article\");\n    content.innerHTML = \"\";\n    content.setAttribute(\"id\", \"\");\n    content = null;\n}\n\nfunction displayAddNewTask() {\n    console.log(\"sadasdaasdasd\");\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewProject()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n    form.setAttribute(\"id\", \"task-form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Task\";\n    form.appendChild(formLegend);\n\n    var taskNameDiv = document.createElement(\"div\");\n    var taskNameLabel = document.createElement(\"label\");\n    taskNameLabel.textContent = \"Name of Task\\t\";\n    var taskNameInput = document.createElement(\"input\");\n    taskNameInput.required = true;\n    taskNameDiv.appendChild(taskNameLabel);\n    taskNameDiv.appendChild(taskNameInput);\n    form.appendChild(taskNameDiv);\n\n    var taskDescriptionDiv = document.createElement(\"div\");\n    var taskDescriptionLabel = document.createElement(\"label\");\n    taskDescriptionLabel.textContent = \"Task Description\\t\";\n    var taskDescriptionInput = document.createElement(\"input\");\n    taskDescriptionInput.required = true;\n    taskDescriptionDiv.appendChild(taskDescriptionLabel);\n    taskDescriptionDiv.appendChild(taskDescriptionInput);\n    form.appendChild(taskDescriptionDiv);\n\n    var taskDueDateDiv = document.createElement(\"div\");\n    var taskDueDateLabel = document.createElement(\"label\");\n    taskDueDateLabel.textContent = \"Task Due Date Month\\t\";\n    var taskDueDateInput = document.createElement(\"input\");\n    taskDueDateInput.required = true;\n    taskDueDateInput.setAttribute(\"type\", \"date\");\n    taskDueDateDiv.appendChild(taskDueDateLabel);\n    taskDueDateDiv.appendChild(taskDueDateInput);\n    form.appendChild(taskDueDateDiv);\n\n    var taskPriorityDiv = document.createElement(\"div\");\n    var taskPriorityLabel = document.createElement(\"label\");\n    taskPriorityLabel.textContent = \"Priority (1 - 3)\\t\";\n    var taskPriorityInput = document.createElement(\"input\");\n    taskPriorityInput.required = true;\n    taskPriorityInput.setAttribute(\"type\", \"number\");\n    taskPriorityInput.setAttribute(\"min\", \"1\");\n    taskPriorityInput.setAttribute(\"max\", \"3\");\n    taskPriorityDiv.appendChild(taskPriorityLabel);\n    taskPriorityDiv.appendChild(taskPriorityInput);\n    form.appendChild(taskPriorityDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    form.appendChild(submitBtn);\n\n    content.appendChild(form);\n}\n\nfunction displayAddNewProject() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewProject()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n    form.setAttribute(\"id\", \"project-form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Project\";\n    form.appendChild(formLegend);\n\n    var projectNameDiv = document.createElement(\"div\");\n    var projectNameLabel = document.createElement(\"label\");\n    projectNameLabel.textContent = \"Name of Project\\t\";\n    var projectNameInput = document.createElement(\"input\");\n    projectNameInput.required = true;\n    projectNameDiv.appendChild(projectNameLabel);\n    projectNameDiv.appendChild(projectNameInput);\n    form.appendChild(projectNameDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    form.appendChild(submitBtn);\n\n    content.appendChild(form);\n}\n\nfunction displayAllTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayAllTasks()`\");\n\n    var article = document.querySelector(\"article\");\n    article.setAttribute(\"id\", \"all-tasks\");\n\n    var contentGrid = document.createElement(\"div\");\n    contentGrid.setAttribute(\"id\", \"content-grid\");\n    \n\n    var contentGridTopSection = document.createElement(\"div\");\n    contentGrid.setAttribute(\"id\", \"contentGridTopSection\");\n\n    var allTasksHeader = document.createElement(\"h1\");\n    allTasksHeader.textContent = \"All Tasks\";\n\n    var addTaskBtn = document.createElement(\"button\");\n    addTaskBtn.textContent = \"Add Task\";\n    addTaskBtn.addEventListener(\"click\", () => {\n        displayAddNewTask();\n    })\n\n    contentGridTopSection.appendChild(allTasksHeader);\n    contentGridTopSection.appendChild(addTaskBtn);\n\n    contentGrid.appendChild(contentGridTopSection);\n\n    article.appendChild(contentGrid);\n}\n\nfunction displayTodaysTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayTodaysTasks()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For Today\";\n\n    content.appendChild(text);\n}\n\nfunction displayMonthsTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayMonthsTask()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For This Month\";\n\n    content.appendChild(text);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/contentTabs.js?");

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