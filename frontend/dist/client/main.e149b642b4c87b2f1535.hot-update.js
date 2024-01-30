webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-thunk/es/index.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar reducers_1 = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\nvar reportWebVitals_1 = __importDefault(__webpack_require__(/*! ../reportWebVitals */ \"./src/reportWebVitals.js\"));\nwindow.addEventListener('load', function () {\n    ReactDom.hydrate(React.createElement(react_redux_1.Provider, { store: reducers_1.store },\n        React.createElement(App_1.App, null)), document.getElementById(\"react_root\"));\n});\n(0, reportWebVitals_1.default)();\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (16:0)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     files: fileReducer_1.default,\\n|     data: \\n> });\\n| exports.store = (0, redux_1.createStore)(rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\\n| \");\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ })

})