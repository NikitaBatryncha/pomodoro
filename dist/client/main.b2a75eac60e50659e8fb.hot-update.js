webpackHotUpdate("main",{

/***/ "./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoForm = exports.StoreArray = exports.myStore = exports.form = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\nvar todoform_css_1 = __importDefault(__webpack_require__(/*! ./todoform.css */ \"./src/shared/Content/leftSide/ToDoForm/todoform.css\"));\nvar mobx_1 = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\nvar mobx_react_lite_1 = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\nvar form = /** @class */ (function () {\n    function form() {\n        this.value = '';\n        (0, mobx_1.makeAutoObservable)(this);\n    }\n    form.prototype.updateValue = function (newValue) {\n        this.value = newValue;\n    };\n    return form;\n}());\nexports.form = form;\nvar store = /** @class */ (function () {\n    function store() {\n        this.item = {\n            value: String\n        };\n    }\n    return store;\n}());\nexports.myStore = new form;\nexports.StoreArray = [];\nuseEffect(function () {\n    // Trigger re-render when StoreArray changes\n}, [exports.StoreArray]);\nexports.ToDoForm = (0, mobx_react_lite_1.observer)(function () {\n    var ref = (0, react_1.useRef)(null);\n    return (react_1.default.createElement(\"div\", { ref: ref },\n        react_1.default.createElement(formik_1.Formik, { initialValues: {\n                text: exports.myStore.value\n            }, onSubmit: function (values) {\n                exports.myStore.updateValue(values.text);\n                exports.StoreArray.push(values.text);\n                // console.log(StoreArray);\n            } },\n            react_1.default.createElement(formik_1.Form, { className: todoform_css_1.default.Form },\n                react_1.default.createElement(formik_1.Field, { as: 'textarea', name: 'text', className: todoform_css_1.default.FormInput, placeholder: \"Название задачи\" }),\n                react_1.default.createElement(\"button\", { type: \"submit\", className: todoform_css_1.default.FormSubmit }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\")))));\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoForm/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoForm/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoForm */ \"./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoForm/index.ts?");

/***/ })

})