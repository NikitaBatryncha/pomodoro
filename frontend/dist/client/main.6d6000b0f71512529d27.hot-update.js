webpackHotUpdate("main",{

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar todotitle_css_1 = __importDefault(__webpack_require__(/*! ./todotitle.css */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css\"));\nfunction ToDoTitle(_a) {\n    var title = _a.title;\n    return (react_1.default.createElement(\"li\", { className: todotitle_css_1.default.TitleContainer },\n        react_1.default.createElement(\"h2\", { className: todotitle_css_1.default.Title },\n            react_1.default.createElement(\"button\", { className: todotitle_css_1.default.TitleBtn, onClick: function () { console.log(); } }, title))));\n}\nexports.ToDoTitle = ToDoTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoTitle */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts?");

/***/ })

})