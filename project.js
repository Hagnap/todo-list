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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAddNewProject: () => (/* binding */ displayAddNewProject),\n/* harmony export */   displayAddNewTask: () => (/* binding */ displayAddNewTask),\n/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),\n/* harmony export */   displayMonthsTask: () => (/* binding */ displayMonthsTask),\n/* harmony export */   displayTodaysTasks: () => (/* binding */ displayTodaysTasks)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nlet date = new Date();\n\nfunction saveFormData() {\n\n\n    var newTask = _task__WEBPACK_IMPORTED_MODULE_1__.Task(\n        document.getElementById(\"task-name\").value,\n        document.getElementById(\"task-description\").value,\n        document.getElementById(\"task-duedate\").value,\n        document.getElementById(\"task-priority\").value\n    );\n\n    _task__WEBPACK_IMPORTED_MODULE_1__.addTask(newTask);\n}\n\nfunction resetDiv() {\n    var content = document.querySelector(\"article\");\n    content.innerHTML = \"\";\n    content.setAttribute(\"id\", \"\");\n    content = null;\n}\n\nfunction displayAddNewTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewTask()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n    form.setAttribute(\"id\", \"task-form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Task\";\n    form.appendChild(formLegend);\n\n    var taskNameDiv = document.createElement(\"div\");\n    var taskNameLabel = document.createElement(\"label\");\n    taskNameLabel.textContent = \"Name of Task\\t\";\n    var taskNameInput = document.createElement(\"input\");\n    taskNameInput.setAttribute(\"id\", \"task-name\");\n    taskNameInput.required = true;\n    taskNameDiv.appendChild(taskNameLabel);\n    taskNameDiv.appendChild(taskNameInput);\n    form.appendChild(taskNameDiv);\n\n    var taskDescriptionDiv = document.createElement(\"div\");\n    var taskDescriptionLabel = document.createElement(\"label\");\n    taskDescriptionLabel.textContent = \"Task Description\\t\";\n    var taskDescriptionInput = document.createElement(\"input\");\n    taskDescriptionInput.setAttribute(\"id\", \"task-description\");\n    taskDescriptionInput.required = true;\n    taskDescriptionDiv.appendChild(taskDescriptionLabel);\n    taskDescriptionDiv.appendChild(taskDescriptionInput);\n    form.appendChild(taskDescriptionDiv);\n\n    var taskDueDateDiv = document.createElement(\"div\");\n    var taskDueDateLabel = document.createElement(\"label\");\n    taskDueDateLabel.textContent = \"Task Due Date Month\\t\";\n    var taskDueDateInput = document.createElement(\"input\");\n    taskDueDateInput.setAttribute(\"id\", \"task-duedate\");\n    taskDueDateInput.required = true;\n    taskDueDateInput.setAttribute(\"type\", \"date\");\n    taskDueDateDiv.appendChild(taskDueDateLabel);\n    taskDueDateDiv.appendChild(taskDueDateInput);\n    form.appendChild(taskDueDateDiv);\n\n    var taskPriorityDiv = document.createElement(\"div\");\n    var taskPriorityLabel = document.createElement(\"label\");\n    taskPriorityLabel.textContent = \"Priority (1 - 3)\\t\";\n    var taskPriorityInput = document.createElement(\"input\");\n    taskPriorityInput.setAttribute(\"id\", \"task-priority\");\n    taskPriorityInput.required = true;\n    taskPriorityInput.setAttribute(\"type\", \"number\");\n    taskPriorityInput.setAttribute(\"min\", \"1\");\n    taskPriorityInput.setAttribute(\"max\", \"3\");\n    taskPriorityDiv.appendChild(taskPriorityLabel);\n    taskPriorityDiv.appendChild(taskPriorityInput);\n    form.appendChild(taskPriorityDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    form.appendChild(submitBtn);\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n\n        var newTask = _task__WEBPACK_IMPORTED_MODULE_1__.Task(\n            document.getElementById(\"task-name\").value,\n            document.getElementById(\"task-description\").value,\n            document.getElementById(\"task-duedate\").value,\n            document.getElementById(\"task-priority\").value\n        );\n\n        _task__WEBPACK_IMPORTED_MODULE_1__.addTask(newTask);\n        form.reset();\n    \n    });\n\n    content.appendChild(form);\n}\n\nfunction displayAddNewProject() {\n\n    resetDiv();\n\n    console.log(\"In `displayAddNewProject()`\");\n\n    var content = document.querySelector(\"article\");\n\n    var form = document.createElement(\"form\");\n    form.setAttribute(\"id\", \"project-form\");\n\n    var formLegend = document.createElement(\"legend\");\n    formLegend.textContent = \"Add New Project\";\n    form.appendChild(formLegend);\n\n    var projectNameDiv = document.createElement(\"div\");\n    var projectNameLabel = document.createElement(\"label\");\n    projectNameLabel.textContent = \"Name of Project (24 char limit)\\t\";\n    var projectNameInput = document.createElement(\"input\");\n    projectNameInput.setAttribute(\"id\", \"project-name\");\n    projectNameInput.required = true;\n    projectNameInput.maxLength = 24;\n    projectNameDiv.appendChild(projectNameLabel);\n    projectNameDiv.appendChild(projectNameInput);\n    form.appendChild(projectNameDiv);\n\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"type\", \"submit\");\n    submitBtn.textContent = \"Submit\";\n    form.appendChild(submitBtn);\n    form.addEventListener(\"submit\",(e) => {\n        e.preventDefault();\n\n        if(_project__WEBPACK_IMPORTED_MODULE_0__.projectCollection.projects.length >= 10 ) {\n            alert(\"ERROR: Reached project limit (10)\");\n        }\n        else {\n\n            var newProject = _project__WEBPACK_IMPORTED_MODULE_0__.Project(document.getElementById(\"project-name\").value);\n\n            _project__WEBPACK_IMPORTED_MODULE_0__.addProject(newProject);\n        }\n\n        form.reset();\n    });\n\n    content.appendChild(form);\n}\n\nfunction displayAllTasks() {\n\n    resetDiv();\n    var contentGrid = document.querySelector(\"#content-grid\");\n\n    console.log(\"In `displayAllTasks()`\");\n\n    var article = document.querySelector(\"article\");\n    article.setAttribute(\"id\", \"all-tasks\");\n\n    var contentGrid = document.createElement(\"div\");\n    contentGrid.setAttribute(\"id\", \"content-grid\");\n\n    var contentGridTopSection = document.createElement(\"div\");\n    contentGridTopSection.setAttribute(\"id\", \"contentGridTopSection\");\n\n    var allTasksHeader = document.createElement(\"h1\");\n    allTasksHeader.textContent = \"All Tasks\";\n\n    var addTaskBtn = document.createElement(\"button\");\n    addTaskBtn.textContent = \"Add Task\";\n    addTaskBtn.setAttribute(\"id\", \"add-task-btn\");\n    addTaskBtn.addEventListener(\"click\", () => {\n        displayAddNewTask();\n    });\n\n    contentGridTopSection.appendChild(allTasksHeader);\n    contentGridTopSection.appendChild(addTaskBtn);\n\n    contentGrid.appendChild(contentGridTopSection);\n\n    article.appendChild(contentGrid);\n\n    _task__WEBPACK_IMPORTED_MODULE_1__.taskCollection.tasks.forEach(element => {\n        _task__WEBPACK_IMPORTED_MODULE_1__.displayTask(element);\n    });\n}\n\nfunction displayTodaysTasks() {\n\n    resetDiv();\n\n    console.log(\"In `displayTodaysTasks()`\");\n\n    var article = document.querySelector(\"article\");\n    article.setAttribute(\"id\", \"todays-tasks\");\n\n    var contentGrid = document.createElement(\"div\");\n    contentGrid.setAttribute(\"id\", \"content-grid\");\n\n    var contentGridTopSection = document.createElement(\"div\");\n    contentGridTopSection.setAttribute(\"id\", \"contentGridTopSection\");\n\n    var allTasksHeader = document.createElement(\"h1\");\n    allTasksHeader.textContent = \"Today's Tasks\";\n\n    contentGridTopSection.appendChild(allTasksHeader);\n\n    contentGrid.appendChild(contentGridTopSection);\n\n    article.appendChild(contentGrid);\n\n    var todaysTask = _task__WEBPACK_IMPORTED_MODULE_1__.taskCollection.tasks.filter(t => t.dueDate.split(\" \")[1] == date.toISOString().split(\"T\")[0]);\n\n    todaysTask.forEach((t) => {\n        _task__WEBPACK_IMPORTED_MODULE_1__.displayTask(t);\n    });\n}\n\nfunction displayMonthsTask() {\n\n    resetDiv();\n\n    console.log(\"In `displayTodaysTasks()`\");\n\n    var article = document.querySelector(\"article\");\n    article.setAttribute(\"id\", \"todays-tasks\");\n\n    var contentGrid = document.createElement(\"div\");\n    contentGrid.setAttribute(\"id\", \"content-grid\");\n\n    var contentGridTopSection = document.createElement(\"div\");\n    contentGridTopSection.setAttribute(\"id\", \"contentGridTopSection\");\n\n    var allTasksHeader = document.createElement(\"h1\");\n    allTasksHeader.textContent = \"This Month's Tasks\";\n\n    contentGridTopSection.appendChild(allTasksHeader);\n\n    contentGrid.appendChild(contentGridTopSection);\n\n    article.appendChild(contentGrid);\n\n    var monthsTask = _task__WEBPACK_IMPORTED_MODULE_1__.taskCollection.tasks.filter(t => new Date(t.dueDate.split(\" \")[1]).getMonth() == date.getMonth());\n\n    monthsTask.forEach((t) => {\n        _task__WEBPACK_IMPORTED_MODULE_1__.displayTask(t);\n    });\n    \n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/contentTabs.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   displayProject: () => (/* binding */ displayProject),\n/* harmony export */   projectCollection: () => (/* binding */ projectCollection)\n/* harmony export */ });\n/* harmony import */ var _contentTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentTabs */ \"./src/contentTabs.js\");\n\n\nconst Project = (projectName) => {\n    let tasks = [];\n\n    /*\n    const addTask = (task) => {\n        tasks.push(task);\n    }\n    */\n\n    return { projectName, tasks /*,  addTask */ };\n}\n\nconst projectCollection = (() => {\n    let projects = []\n    let storedProjects = JSON.parse(window.localStorage.getItem(\"allProjects\"));\n    \n    if(storedProjects) {\n        console.log(\"Projects are present\");\n        for(let index in storedProjects.projects) {\n            projects.push(storedProjects.projects[index]);\n        }\n    }\n    else {\n        console.log(\"No projects are present\");\n    }\n\n    return { projects };\n})();\n\nfunction addProject(project) {\n    projectCollection.projects.push(project);\n    console.table(projectCollection.projects);\n    window.localStorage.setItem(\"allProjects\", JSON.stringify(projectCollection));\n\n    displayProject(project);\n\n    //location.reload();\n    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n}\n\nfunction displayProject(project) {\n    var allProjectsDiv = document.querySelector(\"#projects-div\");\n\n    var projectDiv = document.createElement(\"div\");\n    projectDiv.setAttribute(\"class\", \"project-div\");\n    projectDiv.textContent = project.projectName;\n\n    allProjectsDiv.appendChild(projectDiv);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   displayTask: () => (/* binding */ displayTask),\n/* harmony export */   taskCollection: () => (/* binding */ taskCollection)\n/* harmony export */ });\n/* harmony import */ var _contentTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentTabs */ \"./src/contentTabs.js\");\n\n\nconst Task = (name, description, dueDate, priority) => {\n\n    dueDate = dueDate.toLocaleString().split(',')[0];\n    dueDate = `Due: ${dueDate}`;\n    priority = `Priority: ${priority}`;\n    \n    return { name, description, dueDate, priority };\n}\n\nconst taskCollection = (() => {\n    let tasks = [];\n    let storedTasks = JSON.parse(window.localStorage.getItem(\"allTasks\"));\n    \n    if(storedTasks) {\n        console.log(\"Tasks are present\");\n        for(let index in storedTasks.tasks) {\n            tasks.push(storedTasks.tasks[index]);\n        }\n    }\n    else {\n        console.log(\"No tasks are present\");\n    }\n\n    return { tasks };\n})();\n\nfunction displayTask(task) {\n    var contentGrid = document.querySelector(\"#content-grid\");\n    //console.log(contentGrid);\n    var taskDiv = document.createElement(\"div\");\n    taskDiv.setAttribute(\"class\", \"task-div\");\n    var taskDivRight = document.createElement(\"div\");\n    taskDivRight.setAttribute(\"class\", \"task-div-right\");\n    var taskDivLeft = document.createElement(\"div\");\n    taskDivLeft.setAttribute(\"class\", \"task-div-left\");\n\n    for(var property in task) {\n        var propertyElement = document.createElement(\"p\");\n        propertyElement.textContent = `${task[property]}`;\n        propertyElement.setAttribute(\"class\", `task-div-${property}`);\n\n        if(property == \"description\") { \n            taskDivRight.appendChild(propertyElement);\n        }\n        else {\n            taskDivLeft.appendChild(propertyElement);\n        }\n    }\n\n    var removeBtn = document.createElement(\"button\");\n    removeBtn.setAttribute(\"class\", \"remove-task-btn\");\n    removeBtn.setAttribute(\"data-index\", `${document.querySelectorAll(\".remove-task-btn\").length}`);\n    removeBtn.textContent = \"Remove Task\";\n    taskDivLeft.appendChild(removeBtn);\n\n    removeBtn.addEventListener(\"click\", (e) => {\n\n        taskCollection.tasks = (taskCollection.tasks.slice(0, Number(removeBtn.getAttribute(\"data-index\"))).concat(taskCollection.tasks.slice(Number(removeBtn.getAttribute(\"data-index\"))+1, taskCollection.tasks.length)));\n        window.localStorage.setItem(\"allTasks\", JSON.stringify(taskCollection));\n        _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n    });\n\n    taskDiv.appendChild(taskDivLeft);\n    taskDiv.appendChild(taskDivRight);\n\n    contentGrid.appendChild(taskDiv);\n}\n\nfunction addTask(task) {\n    taskCollection.tasks.push(task);\n    console.table(taskCollection.tasks);\n\n    window.localStorage.setItem(\"allTasks\", JSON.stringify(taskCollection));\n\n    //location.reload();\n    _contentTabs__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;