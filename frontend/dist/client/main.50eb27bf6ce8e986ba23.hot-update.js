webpackHotUpdate("main",{

/***/ "./src/reducers/buttonReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/buttonReducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setButtonValue = void 0;\nvar SET_BUTTON_VALUE = 'SET_BUTTON_VALUE';\nvar defaultState = {\n    buttonValue: '',\n    id: ''\n};\nfunction buttonReducer(state, action) {\n    if (state === void 0) { state = defaultState; }\n    switch (action.type) {\n        case SET_BUTTON_VALUE:\n            return __assign(__assign({}, state), { buttonValue: action.payload });\n        default:\n            return state;\n    }\n}\nexports.default = buttonReducer;\n;\nvar setButtonValue = function (value) { return ({ type: SET_BUTTON_VALUE, payload: value, }); };\nexports.setButtonValue = setButtonValue;\n\n\n//# sourceURL=webpack:///./src/reducers/buttonReducer.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.store = void 0;\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\nvar userReducer_1 = __importDefault(__webpack_require__(/*! ./userReducer */ \"./src/reducers/userReducer.js\"));\nvar fileReducer_1 = __importDefault(__webpack_require__(/*! ./fileReducer */ \"./src/reducers/fileReducer.js\"));\nvar buttonReducer_1 = __importDefault(__webpack_require__(/*! ./buttonReducer */ \"./src/reducers/buttonReducer.js\"));\nvar rootReducer = (0, redux_1.combineReducers)({\n    user: userReducer_1.default,\n    files: fileReducer_1.default,\n    data: buttonReducer_1.default\n});\nexports.store = (0, redux_1.createStore)(rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\n\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar todotitle_css_1 = __importDefault(__webpack_require__(/*! ./todotitle.css */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar buttonReducer_1 = __webpack_require__(/*! ../../../../../reducers/buttonReducer */ \"./src/reducers/buttonReducer.js\");\nfunction ToDoTitle(_a) {\n    var title = _a.title, id = _a.id;\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var handleButtonClick = function () {\n        dispatch((0, buttonReducer_1.setButtonValue)(title, id));\n    };\n    return (react_1.default.createElement(\"li\", { className: todotitle_css_1.default.TitleContainer },\n        react_1.default.createElement(\"h2\", { className: todotitle_css_1.default.Title },\n            react_1.default.createElement(\"button\", { className: todotitle_css_1.default.TitleBtn, id: id, onClick: handleButtonClick }, title))));\n}\nexports.ToDoTitle = ToDoTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx?");

/***/ })

})