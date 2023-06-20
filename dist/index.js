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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddNewProject: () => (/* binding */ displayAddNewProject),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   displayMonthsTask: () => (/* binding */ displayMonthsTask),\n/* harmony export */   displayTodaysTasks: () => (/* binding */ displayTodaysTasks)\n/* harmony export */ });\nfunction resetDiv() {\n    var content = document.querySelector(\"article\");\n    content.innerHTML = \"\";\n}\n\nfunction displayAddNewProject() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewProject()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Project\";\n    form.appendChild(formLegend);\n\n    var taskNameDiv = document.createElement(\"div\");\n    var taskNameLabel = document.createElement(\"label\");\n    taskNameLabel.textContent = \"Name of Task\\t\";\n    var taskNameInput = document.createElement(\"input\");\n    taskNameInput.required = true;\n    taskNameDiv.appendChild(taskNameLabel);\n    taskNameDiv.appendChild(taskNameInput);\n    form.appendChild(taskNameDiv);\n\n    var taskDescriptionDiv = document.createElement(\"div\");\n    var taskDescriptionLabel = document.createElement(\"label\");\n    taskDescriptionLabel.textContent = \"Task Description\\t\";\n    var taskDescriptionInput = document.createElement(\"input\");\n    taskDescriptionInput.required = true;\n    taskDescriptionDiv.appendChild(taskDescriptionLabel);\n    taskDescriptionDiv.appendChild(taskDescriptionInput);\n    form.appendChild(taskDescriptionDiv);\n\n    var taskDueDateDiv = document.createElement(\"div\");\n    var taskDueDateLabel = document.createElement(\"label\");\n    taskDueDateLabel.textContent = \"Task Due Date Month\\t\";\n    var taskDueDateInput = document.createElement(\"input\");\n    taskDueDateInput.required = true;\n    taskDueDateInput.setAttribute(\"type\", \"date\");\n    taskDueDateDiv.appendChild(taskDueDateLabel);\n    taskDueDateDiv.appendChild(taskDueDateInput);\n    form.appendChild(taskDueDateDiv);\n\n    var taskPriorityDiv = document.createElement(\"div\");\n    var taskPriorityLabel = document.createElement(\"label\");\n    taskPriorityLabel.textContent = \"Priority (1 - 3)\\t\";\n    var taskPriorityInput = document.createElement(\"input\");\n    taskPriorityInput.required = true;\n    taskPriorityInput.setAttribute(\"type\", \"number\");\n    taskPriorityInput.setAttribute(\"min\", \"1\");\n    taskPriorityInput.setAttribute(\"max\", \"3\");\n    taskPriorityDiv.appendChild(taskPriorityLabel);\n    taskPriorityDiv.appendChild(taskPriorityInput);\n    form.appendChild(taskPriorityDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    form.appendChild(submitBtn);\n\n    content.appendChild(form);\n}\n\nfunction displayAllTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayAllTasks()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"All Tasks\";\n\n    content.appendChild(text);\n}\n\nfunction displayTodaysTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayTodaysTasks()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For Today\";\n\n    content.appendChild(text);\n}\n\nfunction displayMonthsTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayMonthsTask()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For This Month\";\n\n    content.appendChild(text);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/contentTabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contentTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentTabs */ \"./src/contentTabs.js\");\n\n\nfunction createInitialWebpage() {\n\n    // Create container that stores ALL of the content\n    var container = document.createElement('div');\n    container.setAttribute(\"id\", \"container\");\n\n    var header = document.createElement(\"header\");\n    header.textContent = \"✔ To-Do List\";\n\n    var content = document.createElement(\"main\");\n    content.setAttribute(\"id\", \"content\");\n\n    var navbar = document.createElement(\"navbar\");\n\n    var todoSection = document.createElement(\"article\");\n    todoSection.textContent = \"To Do\";\n\n    var footer = document.createElement(\"footer\");\n    footer.textContent = \"Copyright © 2023 jhagg26\";\n\n\n    content.appendChild(navbar);\n    content.appendChild(todoSection);\n    \n    container.appendChild(header);\n    container.appendChild(content);\n    container.appendChild(footer);\n\n    document.body.appendChild(container);\n}\n\nfunction populateNavbar() {\n    var navbar = document.querySelector(\"navbar\");\n\n    var tasksSection = document.createElement('div');\n    tasksSection.setAttribute(\"id\", \"tasksSection\");\n\n    var tasks = document.createElement('div');\n    tasks.setAttribute(\"id\", \"tasks\");\n    var tasksImg = document.createElement('img');\n    tasksImg.src = \"../images/tasks.svg\";\n    tasks.appendChild(tasksImg);\n    var tasksText = document.createElement('p');\n    tasksText.textContent = \"Tasks\";\n    tasks.appendChild(tasksText);\n\n    var today = document.createElement('div');\n    today.setAttribute(\"id\", \"today\");\n    var todayImg = document.createElement('img');\n    todayImg.src = \"../images/today.svg\";\n    today.appendChild(todayImg);\n    var tasksText = document.createElement('p');\n    tasksText.textContent = \"Today\";\n    today.appendChild(tasksText);\n\n    var month = document.createElement('div');\n    month.setAttribute(\"id\", \"month\");\n    var monthImg = document.createElement('img');\n    monthImg.src = \"../images/month.svg\";\n    month.appendChild(monthImg);\n    var monthText = document.createElement('p');\n    monthText.textContent = \"Month\";\n    month.appendChild(monthText);\n\n    tasksSection.appendChild(tasks);\n    tasksSection.appendChild(today);\n    tasksSection.appendChild(month);\n\n    var projectsSection = document.createElement('div');\n    projectsSection.setAttribute(\"id\", \"projectsSection\");\n\n    var projectsText = document.createElement(\"h1\");\n    projectsText.textContent = \"Projects\";\n\n    var addProjects = document.createElement('div');\n    addProjects.setAttribute(\"id\", \"addProject\");\n    addProjects.textContent = \"+ Add Project\";\n    \n    projectsSection.appendChild(projectsText);\n    projectsSection.appendChild(addProjects);\n\n    navbar.appendChild(tasksSection);\n    navbar.appendChild(projectsSection);\n}\n\nfunction addEventLisiteners() {\n    var divs = document.querySelectorAll(\"navbar > div > div\");\n    divs.forEach(item => {\n\n        item.addEventListener(\"click\", () => {\n            \n            switch(item.getAttribute(\"id\")) {\n                case \"tasks\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n                    break;\n            \n                case \"today\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayTodaysTasks();\n                    break;\n                    \n                case \"month\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayMonthsTask();\n                    break;\n            \n                case \"addProject\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAddNewProject();\n                    break;\n    \n                default:\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n            }\n        })\n    }) \n}\n\n// MAIN CODE\ncreateInitialWebpage();\npopulateNavbar();\naddEventLisiteners();\n\n_contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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