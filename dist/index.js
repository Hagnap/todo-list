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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddNewProject: () => (/* binding */ displayAddNewProject),\n/* harmony export */   displayAddNewTask: () => (/* binding */ displayAddNewTask),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   displayMonthsTask: () => (/* binding */ displayMonthsTask),\n/* harmony export */   displayTodaysTasks: () => (/* binding */ displayTodaysTasks)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nfunction saveFormData() {\n\n\n    var newTask = _task__WEBPACK_IMPORTED_MODULE_1__.Task(\n        document.getElementById(\"task-name\").value,\n        document.getElementById(\"task-description\").value,\n        document.getElementById(\"task-duedate\").value,\n        document.getElementById(\"task-priority\").value\n    );\n\n    _task__WEBPACK_IMPORTED_MODULE_1__.addTask(newTask);\n}\n\nfunction resetDiv() {\n    var content = document.querySelector(\"article\");\n    content.innerHTML = \"\";\n    content.setAttribute(\"id\", \"\");\n    content = null;\n}\n\nfunction displayAddNewTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewTask()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n    form.setAttribute(\"id\", \"task-form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Task\";\n    form.appendChild(formLegend);\n\n    var taskNameDiv = document.createElement(\"div\");\n    var taskNameLabel = document.createElement(\"label\");\n    taskNameLabel.textContent = \"Name of Task\\t\";\n    var taskNameInput = document.createElement(\"input\");\n    taskNameInput.setAttribute(\"id\", \"task-name\");\n    taskNameInput.required = true;\n    taskNameDiv.appendChild(taskNameLabel);\n    taskNameDiv.appendChild(taskNameInput);\n    form.appendChild(taskNameDiv);\n\n    var taskDescriptionDiv = document.createElement(\"div\");\n    var taskDescriptionLabel = document.createElement(\"label\");\n    taskDescriptionLabel.textContent = \"Task Description\\t\";\n    var taskDescriptionInput = document.createElement(\"input\");\n    taskDescriptionInput.setAttribute(\"id\", \"task-description\");\n    taskDescriptionInput.required = true;\n    taskDescriptionDiv.appendChild(taskDescriptionLabel);\n    taskDescriptionDiv.appendChild(taskDescriptionInput);\n    form.appendChild(taskDescriptionDiv);\n\n    var taskDueDateDiv = document.createElement(\"div\");\n    var taskDueDateLabel = document.createElement(\"label\");\n    taskDueDateLabel.textContent = \"Task Due Date Month\\t\";\n    var taskDueDateInput = document.createElement(\"input\");\n    taskDueDateInput.setAttribute(\"id\", \"task-duedate\");\n    taskDueDateInput.required = true;\n    taskDueDateInput.setAttribute(\"type\", \"date\");\n    taskDueDateDiv.appendChild(taskDueDateLabel);\n    taskDueDateDiv.appendChild(taskDueDateInput);\n    form.appendChild(taskDueDateDiv);\n\n    var taskPriorityDiv = document.createElement(\"div\");\n    var taskPriorityLabel = document.createElement(\"label\");\n    taskPriorityLabel.textContent = \"Priority (1 - 3)\\t\";\n    var taskPriorityInput = document.createElement(\"input\");\n    taskPriorityInput.setAttribute(\"id\", \"task-priority\");\n    taskPriorityInput.required = true;\n    taskPriorityInput.setAttribute(\"type\", \"number\");\n    taskPriorityInput.setAttribute(\"min\", \"1\");\n    taskPriorityInput.setAttribute(\"max\", \"3\");\n    taskPriorityDiv.appendChild(taskPriorityLabel);\n    taskPriorityDiv.appendChild(taskPriorityInput);\n    form.appendChild(taskPriorityDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    //submitBtn.addEventListener(\"submit\", saveFormData);\n    //submitBtn.onclick = saveFormData;\n    form.appendChild(submitBtn);\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n\n        var newTask = _task__WEBPACK_IMPORTED_MODULE_1__.Task(\n            document.getElementById(\"task-name\").value,\n            document.getElementById(\"task-description\").value,\n            document.getElementById(\"task-duedate\").value,\n            document.getElementById(\"task-priority\").value\n        );\n    \n        console.log(newTask);\n        _task__WEBPACK_IMPORTED_MODULE_1__.addTask(newTask);\n        form.reset();\n    \n    });\n\n    content.appendChild(form);\n}\n\nfunction displayAddNewProject() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewProject()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n    form.setAttribute(\"id\", \"project-form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Project\";\n    form.appendChild(formLegend);\n\n    var projectNameDiv = document.createElement(\"div\");\n    var projectNameLabel = document.createElement(\"label\");\n    projectNameLabel.textContent = \"Name of Project\\t\";\n    var projectNameInput = document.createElement(\"input\");\n    projectNameInput.required = true;\n    projectNameDiv.appendChild(projectNameLabel);\n    projectNameDiv.appendChild(projectNameInput);\n    form.appendChild(projectNameDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    form.appendChild(submitBtn);\n\n    content.appendChild(form);\n}\n\nfunction displayAllTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayAllTasks()`\");\n\n    var article = document.querySelector(\"article\");\n    article.setAttribute(\"id\", \"all-tasks\");\n\n    var contentGrid = document.createElement(\"div\");\n    contentGrid.setAttribute(\"id\", \"content-grid\");\n\n    var contentGridTopSection = document.createElement(\"div\");\n    contentGridTopSection.setAttribute(\"id\", \"contentGridTopSection\");\n\n    var allTasksHeader = document.createElement(\"h1\");\n    allTasksHeader.textContent = \"All Tasks\";\n\n    var addTaskBtn = document.createElement(\"button\");\n    addTaskBtn.textContent = \"Add Task\";\n    addTaskBtn.setAttribute(\"id\", \"add-task-btn\");\n    addTaskBtn.addEventListener(\"click\", () => {\n        displayAddNewTask();\n    });\n\n    contentGridTopSection.appendChild(allTasksHeader);\n    contentGridTopSection.appendChild(addTaskBtn);\n\n    contentGrid.appendChild(contentGridTopSection);\n\n    article.appendChild(contentGrid);\n}\n\nfunction displayTodaysTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayTodaysTasks()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For Today\";\n\n    content.appendChild(text);\n}\n\nfunction displayMonthsTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayMonthsTask()`\");\n\n    var content = document.querySelector(\"article\");\n    var text = document.createElement(\"p\");\n    text.textContent = \"Tasks For This Month\";\n\n    content.appendChild(text);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/contentTabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contentTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentTabs */ \"./src/contentTabs.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\nfunction createInitialWebpage() {\n\n    // Create container that stores ALL of the content\n    var container = document.createElement('div');\n    container.setAttribute(\"id\", \"container\");\n\n    var header = document.createElement(\"header\");\n    header.textContent = \"✔ To-Do List\";\n\n    var content = document.createElement(\"main\");\n    content.setAttribute(\"id\", \"content\");\n\n    var navbar = document.createElement(\"navbar\");\n\n    var todoSection = document.createElement(\"article\");\n    todoSection.textContent = \"To Do\";\n\n    var footer = document.createElement(\"footer\");\n    footer.textContent = \"Copyright © 2023 jhagg26\";\n\n\n    content.appendChild(navbar);\n    content.appendChild(todoSection);\n    \n    container.appendChild(header);\n    container.appendChild(content);\n    container.appendChild(footer);\n\n    document.body.appendChild(container);\n}\n\nfunction populateNavbar() {\n    var navbar = document.querySelector(\"navbar\");\n\n    var tasksSection = document.createElement('div');\n    tasksSection.setAttribute(\"id\", \"tasksSection\");\n\n    var tasks = document.createElement('div');\n    tasks.setAttribute(\"id\", \"tasks\");\n    var tasksImg = document.createElement('img');\n    tasksImg.src = \"../images/tasks.svg\";\n    tasks.appendChild(tasksImg);\n    var tasksText = document.createElement('p');\n    tasksText.textContent = \"Tasks\";\n    tasks.appendChild(tasksText);\n\n    var today = document.createElement('div');\n    today.setAttribute(\"id\", \"today\");\n    var todayImg = document.createElement('img');\n    todayImg.src = \"../images/today.svg\";\n    today.appendChild(todayImg);\n    var tasksText = document.createElement('p');\n    tasksText.textContent = \"Today\";\n    today.appendChild(tasksText);\n\n    var month = document.createElement('div');\n    month.setAttribute(\"id\", \"month\");\n    var monthImg = document.createElement('img');\n    monthImg.src = \"../images/month.svg\";\n    month.appendChild(monthImg);\n    var monthText = document.createElement('p');\n    monthText.textContent = \"Month\";\n    month.appendChild(monthText);\n\n    tasksSection.appendChild(tasks);\n    tasksSection.appendChild(today);\n    tasksSection.appendChild(month);\n\n    var projectsSection = document.createElement('div');\n    projectsSection.setAttribute(\"id\", \"projectsSection\");\n\n    var projectsText = document.createElement(\"h1\");\n    projectsText.textContent = \"Projects\";\n\n    var addProjects = document.createElement('div');\n    addProjects.setAttribute(\"id\", \"addProject\");\n    addProjects.textContent = \"+ Add Project\";\n    \n    projectsSection.appendChild(projectsText);\n    projectsSection.appendChild(addProjects);\n\n    navbar.appendChild(tasksSection);\n    navbar.appendChild(projectsSection);\n}\n\nfunction addEventLisiteners() {\n    var divs = document.querySelectorAll(\"navbar > div > div\");\n    divs.forEach(item => {\n\n        item.addEventListener(\"click\", () => {\n            \n            switch(item.getAttribute(\"id\")) {\n                case \"tasks\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n                    break;\n            \n                case \"today\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayTodaysTasks();\n                    break;\n                    \n                case \"month\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayMonthsTask();\n                    break;\n            \n                case \"addProject\":\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAddNewProject();\n                    break;\n    \n                default:\n                    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n            }\n        })\n    }) \n}\n\n// MAIN CODE\n\ncreateInitialWebpage();\npopulateNavbar();\naddEventLisiteners();\n_contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n\n/*\nvar taskOne = task.Task(\"Task One\", \"An easy task\", new Date(\"2002-02-02\"), 1);\ntask.addTask(taskOne);\nvar taskTwo = task.Task(\"Task Two\", \"An easy-ish task\", new Date(\"2022-02-02\"), 1);\ntask.addTask(taskTwo);\nvar taskThree = task.Task(\"Task Three\", \"An easy task\", new Date(\"2002-02-02\"), 1);\ntask.addTask(taskThree);\nvar taskFour = task.Task(\"Task Four\", \"An easy-ish task\", new Date(\"2022-02-02\"), 1);\ntask.addTask(taskFour);\nvar taskFive = task.Task(\"Task Five\", \"An easy task\", new Date(\"2002-02-02\"), 1);\ntask.addTask(taskFive);\nvar taskSix = task.Task(\"Task Six\", \"An easy-ish task\", new Date(\"2022-02-02\"), 1);\ntask.addTask(taskSix);\nvar taskSeven = task.Task(\"Task Seven\", \"An easy task\", new Date(\"2002-02-02\"), 1);\ntask.addTask(taskSeven);\nvar taskEight = task.Task(\"Task Eight\", \"An easy-ish task\", new Date(\"2022-02-02\"), 1);\ntask.addTask(taskEight);\n\n\n\nif(tasks.allTasks.length > 0)\n{\n    tasks.allTasks.forEach(task => {\n\n        //if(!task == null)\n        //console.log(task);\n        displayTask(task);\n    })\n}\n*/\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project() {\n    tasks = [];\n\n    const addTask = (task) => {\n        tasks.push(task);\n    }\n\n    return { tasks, addTask };\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   displayTask: () => (/* binding */ displayTask)\n/* harmony export */ });\n/* harmony import */ var _contentTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentTabs */ \"./src/contentTabs.js\");\n\n\nfunction Task(name, description, dueDate, priority) {\n\n    dueDate = dueDate.toLocaleString().split(',')[0];\n    dueDate = `Due: ${dueDate}`;\n    priority = `Priority: ${priority}`;\n    \n    return { name, description, dueDate, priority };\n}\n\n/*\nfunction addTask(task) {\n\n    content.displayAllTasks();\n\n    var contentGrid = document.querySelector(\"#content-grid\");\n    console.log(contentGrid);\n    var taskDiv = document.createElement(\"div\");\n    taskDiv.setAttribute(\"class\", \"task-div\");\n    var taskDivRight = document.createElement(\"div\");\n    taskDivRight.setAttribute(\"class\", \"task-div-right\");\n    var taskDivLeft = document.createElement(\"div\");\n    taskDivLeft.setAttribute(\"class\", \"task-div-left\");\n\n    for(var property in task) {\n        var propertyElement = document.createElement(\"p\");\n        propertyElement.textContent = `${task[property]}`;\n        propertyElement.setAttribute(\"class\", `task-div-${property}`);\n\n        if(property == \"description\") { \n            taskDivRight.appendChild(propertyElement);\n        }\n        else {\n            taskDivLeft.appendChild(propertyElement);\n        }\n    }\n\n    taskDiv.appendChild(taskDivLeft);\n    taskDiv.appendChild(taskDivRight);\n\n    contentGrid.appendChild(taskDiv);\n\n    allTasks.push(task);\n\n    console.log(allTasks);\n    window.localStorage.setItem(\"all-tasks\", JSON.stringify(allTasks));\n}\n\nfunction displayTask(task) {\n\n    var contentGrid = document.querySelector(\"#content-grid\");\n    //console.log(contentGrid);\n    var taskDiv = document.createElement(\"div\");\n    taskDiv.setAttribute(\"class\", \"task-div\");\n    var taskDivRight = document.createElement(\"div\");\n    taskDivRight.setAttribute(\"class\", \"task-div-right\");\n    var taskDivLeft = document.createElement(\"div\");\n    taskDivLeft.setAttribute(\"class\", \"task-div-left\");\n\n    for(var property in task) {\n        var propertyElement = document.createElement(\"p\");\n        propertyElement.textContent = `${task[property]}`;\n        propertyElement.setAttribute(\"class\", `task-div-${property}`);\n\n        if(property == \"description\") { \n            taskDivRight.appendChild(propertyElement);\n        }\n        else {\n            taskDivLeft.appendChild(propertyElement);\n        }\n    }\n\n    taskDiv.appendChild(taskDivLeft);\n    taskDiv.appendChild(taskDivRight);\n\n    contentGrid.appendChild(taskDiv);\n}\n*/\n\nconst taskCollection = (() => {\n    let tasks = [];\n    const addTask = (task) => {\n\n    }\n\n    return { tasks, addTask };\n})();\n\nfunction addTask(task) {\n\n}\n\nfunction displayTask(task) {\n\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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