webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css":
false,

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar todolist_css_1 = __importDefault(__webpack_require__(/*! ./todolist.css */ \"./src/shared/Content/leftSide/ToDoList/todolist.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar file_1 = __webpack_require__(/*! ../../../../actions/file */ \"./src/actions/file.js\");\nfunction ToDoList() {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var currentDir = (0, react_redux_1.useSelector)(function (state) { return state.files.currentDir; });\n    (0, react_1.useEffect)(function () {\n        dispatch((0, file_1.getFiles)(currentDir));\n    }, [currentDir]);\n    var items = (0, react_redux_1.useSelector)(function (state) { return state.files.files; });\n    return (react_1.default.createElement(\"div\", { className: todolist_css_1.default.ToDoListContainer },\n        react_1.default.createElement(\"ul\", { className: todolist_css_1.default.ToDoList }, items.reverse().map(function (a, index) { return (react_1.default.createElement(ToDoTit, { le: true, key: index, title: a.name })); })),\n        react_1.default.createElement(\"div\", { className: todolist_css_1.default.TimeSummary }, \"1 \\u0447\\u0430\\u0441 15 \\u043C\\u0438\\u043D\\u0443\\u0442\")));\n}\nexports.ToDoList = ToDoList;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoList.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx":
false,

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts":
false,

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css":
false,

/***/ "./src/shared/Content/leftSide/ToDoList/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoList */ \"./src/shared/Content/leftSide/ToDoList/ToDoList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/index.ts?");

/***/ })

})