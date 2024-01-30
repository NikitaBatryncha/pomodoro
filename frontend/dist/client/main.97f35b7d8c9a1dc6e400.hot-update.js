webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTask = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar mobx_react_1 = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\nvar todotask_css_1 = __importDefault(__webpack_require__(/*! ./todotask.css */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/todotask.css\"));\nvar ToDoForm_1 = __webpack_require__(/*! ../../../leftSide/ToDoForm */ \"./src/shared/Content/leftSide/ToDoForm/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nexports.ToDoTask = (0, mobx_react_1.observer)(function () {\n    var _a = (0, react_1.useState)(''), title = _a[0], setTitle = _a[1];\n    var buttonValue = (0, react_redux_1.useSelector)(function (state) { return state.data.buttonValue; });\n    (0, react_1.useEffect)(function () {\n        setTitle(buttonValue || ToDoForm_1.myStore.value);\n    }, [buttonValue, ToDoForm_1.myStore.value]);\n    return (react_1.default.createElement(\"div\", { className: todotask_css_1.default.ToDoTask },\n        title,\n        \" \\u0401\\u0401}\"));\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts?");

/***/ })

})