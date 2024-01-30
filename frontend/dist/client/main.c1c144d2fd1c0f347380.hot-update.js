webpackHotUpdate("main",{

/***/ "./src/reducers/dataReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/dataReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: ENOENT: no such file or directory, open '/Users/nikitabatryncha/Desktop/pomtemp/frontend/src/reducers/dataReducer.js'\");\n\n//# sourceURL=webpack:///./src/reducers/dataReducer.js?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar todotitle_css_1 = __importDefault(__webpack_require__(/*! ./todotitle.css */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar dataReducer_1 = __webpack_require__(/*! ../../../../../reducers/dataReducer */ \"./src/reducers/dataReducer.js\");\nfunction ToDoTitle(_a) {\n    var title = _a.title, id = _a.id;\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var handleButtonClick = function () {\n        dispatch((0, dataReducer_1.setButtonValue)(title));\n    };\n    return (react_1.default.createElement(\"li\", { className: todotitle_css_1.default.TitleContainer },\n        react_1.default.createElement(\"h2\", { className: todotitle_css_1.default.Title },\n            react_1.default.createElement(\"button\", { className: todotitle_css_1.default.TitleBtn, id: id, onClick: handleButtonClick }, title))));\n}\nexports.ToDoTitle = ToDoTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx?");

/***/ })

})