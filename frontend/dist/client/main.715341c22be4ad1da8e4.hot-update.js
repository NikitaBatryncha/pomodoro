webpackHotUpdate("main",{

/***/ "./src/reducers/fileReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/fileReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.addFiles = exports.setCurrentDir = exports.setFiles = void 0;\nvar SET_FILES = \"SET_FILES\";\nvar SET_CURRENT_DIR = \"SET_CURRENT_DIR\";\nvar ADD_FILE = \"ADD_FILE\";\nvar defaultState = {\n    files: [],\n    currentDir: null,\n};\nfunction fileReducer(state, action) {\n    if (state === void 0) { state = defaultState; }\n    switch (action.type) {\n        case SET_FILES:\n            return __assign(__assign({}, state), { files: action.payload });\n        case SET_CURRENT_DIR:\n            return __assign(__assign({}, state), { currentDir: action.payload });\n        case ADD_FILE:\n            return {\n                case: ADD_FILE, return: __assign(__assign({}, state), { files: __spreadArray(__spreadArray([], state.files, true), [action.payload], false) })\n            };\n        default:\n            return state;\n    }\n}\nexports.default = fileReducer;\nvar setFiles = function (files) { return ({ type: SET_FILES, payload: files }); };\nexports.setFiles = setFiles;\nvar setCurrentDir = function (dir) { return ({ type: SET_CURRENT_DIR, payload: dir }); };\nexports.setCurrentDir = setCurrentDir;\nvar addFiles = function (file) { return ({ type: ADD_FILE, payload: file }); };\nexports.addFiles = addFiles;\n\n\n//# sourceURL=webpack:///./src/reducers/fileReducer.js?");

/***/ })

})