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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function createInitialWebpage() {\n\n    // Create container that stores ALL of the content\n    var container = document.createElement('div');\n    container.setAttribute(\"id\", \"container\");\n\n    var header = document.createElement(\"header\");\n    header.textContent = \"Header\";\n\n    var content = document.createElement(\"main\");\n    content.setAttribute(\"id\", \"content\");\n\n    var navbar = document.createElement(\"navbar\");\n\n    var todoSection = document.createElement(\"article\");\n    todoSection.textContent = \"To Do\";\n\n    var footer = document.createElement(\"footer\");\n    footer.textContent = \"Footer\";\n\n\n    content.appendChild(navbar);\n    content.appendChild(todoSection);\n    \n    container.appendChild(header);\n    container.appendChild(content);\n    container.appendChild(footer);\n\n    return container;\n}\n\nfunction populateNavbar() {\n    var navbar = document.querySelector(\"navbar\");\n\n    var tasksSection = document.createElement('div');\n    tasksSection.setAttribute(\"id\", \"tasksSection\");\n\n    var tasks = document.createElement('div');\n    tasks.setAttribute(\"id\", \"tasks\");\n    tasks.textContent = \"Tasks\";\n\n    var today = document.createElement('div');\n    today.setAttribute(\"id\", \"today\");\n    today.textContent = \"Today\";\n\n    var month = document.createElement('div');\n    month.setAttribute(\"id\", \"month\");\n    month.textContent = \"Month\";\n\n    tasksSection.appendChild(tasks);\n    tasksSection.appendChild(today);\n    tasksSection.appendChild(month);\n\n    var projectsSection = document.createElement('div');\n    projectsSection.setAttribute(\"id\", \"projectsSection\");\n\n    var projectsText = document.createElement(\"h1\");\n    projectsText.textContent = \"Projects\";\n\n    var addProjects = document.createElement('div');\n    addProjects.textContent = \"+ Add Project\";\n    \n    projectsSection.appendChild(projectsText);\n    projectsSection.appendChild(addProjects);\n\n    navbar.appendChild(tasksSection);\n    navbar.appendChild(projectsSection);\n}\n\n\n\nconst container = createInitialWebpage();\ndocument.body.appendChild(container);\n\n\npopulateNavbar();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;