webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoContainer = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar todocontainer_css_1 = __importDefault(__webpack_require__(/*! ./todocontainer.css */ \"./src/shared/Content/rightSide/ToDoContainer/todocontainer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ./ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar PomNum_1 = __webpack_require__(/*! ./PomNum */ \"./src/shared/Content/rightSide/ToDoContainer/PomNum/index.ts\");\nfunction ToDoContainer() {\n    var _a = (0, react_1.useState)(null), selectedTitle = _a[0], setSelectedTitle = _a[1];\n    var handleTitleClick = function (title) {\n        setSelectedTitle(title);\n    };\n    return (react_1.default.createElement(\"div\", { className: todocontainer_css_1.default.ToDoContainer },\n        react_1.default.createElement(\"div\", { className: todocontainer_css_1.default.ToDoTaskWrapper },\n            selectedTitle ? react_1.default.createElement(ToDoTask_1.ToDoTask, { title: selectedTitle }) : unkno,\n            react_1.default.createElement(PomNum_1.PomNum, null))));\n}\nexports.ToDoContainer = ToDoContainer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoContainer */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/index.ts?");

/***/ })

})