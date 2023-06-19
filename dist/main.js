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

eval("function createInitialWebpage() {\n\n    // Create container that stores ALL of the content\n    var container = document.createElement('div');\n    container.setAttribute(\"id\", \"container\");\n\n    var header = document.createElement(\"header\");\n    header.textContent = \"Header\";\n\n    var content = document.createElement(\"main\");\n    content.setAttribute(\"id\", \"content\");\n\n    var footer = document.createElement(\"footer\");\n    footer.textContent = \"Footer\";\n\n\n    var navbar = document.createElement(\"navbar\");\n    navbar.textContent = \"Navbar\";\n\n    var todoSection = document.createElement(\"article\");\n    todoSection.textContent = \"Article\";\n\n\n    content.appendChild(navbar);\n    content.appendChild(todoSection);\n    \n    container.appendChild(header);\n    container.appendChild(content);\n    container.appendChild(footer);\n\n    return container;\n}\n\n\n\nconst container = createInitialWebpage();\ndocument.body.appendChild(container);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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