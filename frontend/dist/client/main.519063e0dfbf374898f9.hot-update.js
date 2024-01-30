webpackHotUpdate("main",{

/***/ "./src/reducers/fileReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/fileReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.pushToStack = exports.setPopupDisplay = exports.addFile = exports.setCurrentDir = exports.setFiles = void 0;\nvar SET_FILES = \"SET_FILES\";\nvar SET_CURRENT_DIR = \"SET_CURRENT_DIR\";\nvar ADD_FILE = \"ADD_FILE\";\nvar SET_POPUP_DISPLAY = \"SET_POPUP_DISPLAY\";\nvar PUSH_TO_STACK = \"PUSH_TO_STACK\";\nvar defaultState = {\n    files: [],\n    currentDir: null,\n    popupDisplay: 'none',\n    dirStack: []\n};\nfunction fileReducer(state, action) {\n    if (state === void 0) { state = defaultState; }\n    switch (action.type) {\n        case SET_FILES: return __assign(__assign({}, state), { files: action.payload });\n        case SET_CURRENT_DIR: return __assign(__assign({}, state), { currentDir: action.payload });\n        case ADD_FILE: return __assign(__assign({}, state), { files: __spreadArray(__spreadArray([], state.files, true), [action.payload], false) });\n        case SET_POPUP_DISPLAY: return __assign(__assign({}, state), { popupDisplay: action.payload });\n        case PUSH_TO_STACK: return __assign(__assign({}, state), { dirStack: __spreadArray(__spreadArray([], state.dirStack, true), [action.payload], false) });\n        default:\n            return state;\n    }\n}\nexports.default = fileReducer;\nvar setFiles = function (files) { return ({ type: SET_FILES, payload: files }); };\nexports.setFiles = setFiles;\nvar setCurrentDir = function (dir) { return ({ type: SET_CURRENT_DIR, payload: dir }); };\nexports.setCurrentDir = setCurrentDir;\nvar addFile = function (file) { return ({ type: ADD_FILE, payload: file }); };\nexports.addFile = addFile;\nvar setPopupDisplay = function (display) { return ({ type: SET_POPUP_DISPLAY, payload: display }); };\nexports.setPopupDisplay = setPopupDisplay;\nvar pushToStack = function (dir) { return ({ type: PUSH_TO_STACK, payload: dir }); };\nexports.pushToStack = pushToStack;\nvar setFiles = function (files) { return ({ type: SET_FILES, payload: files }); };\nexports.setFiles = setFiles;\nvar setCurrentDir = function (dir) { return ({ type: SET_CURRENT_DIR, payload: dir }); };\nexports.setCurrentDir = setCurrentDir;\nvar addFile = function (file) { return ({ type: ADD_FILE, payload: file }); };\nexports.addFile = addFile;\n\n\n//# sourceURL=webpack:///./src/reducers/fileReducer.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.store = void 0;\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\nvar userReducer_1 = __importDefault(__webpack_require__(/*! ./userReducer */ \"./src/reducers/userReducer.js\"));\nvar fileReducer_1 = __importDefault(__webpack_require__(/*! ./fileReducer */ \"./src/reducers/fileReducer.js\"));\nvar rootReducer = (0, redux_1.combineReducers)({\n    user: userReducer_1.default,\n    files: fileReducer_1.default,\n});\nexports.store = (0, redux_1.createStore)(rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\n\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ })

})