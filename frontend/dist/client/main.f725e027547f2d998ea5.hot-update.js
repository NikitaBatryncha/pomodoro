webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/rightSide/ToDoContainer/ToDoTask/todotask.css":
false,

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
false,

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTask = void 0;\nexports.ToDoTask = observer(function () {\n    var _a = useState(''), title = _a[0], setTitle = _a[1];\n    var buttonValue = useSelector(function (state) { return state.data.buttonValue; });\n    useEffect(function () {\n        console.log('useEffect is called'); // Проверьте, вызывается ли useEffect\n        setTitle(buttonValue || myStore.value);\n    }, [buttonValue, myStore.value]);\n    return (React.createElement(\"div\", { className: styles.ToDoTask }, title));\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoTask/todotask.css":
false

})