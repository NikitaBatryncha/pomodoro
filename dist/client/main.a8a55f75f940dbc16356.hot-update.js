webpackHotUpdate("main",{

/***/ "./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoForm = exports.myStore = exports.form = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\nvar todoform_css_1 = __importDefault(__webpack_require__(/*! ./todoform.css */ \"./src/shared/Content/leftSide/ToDoForm/todoform.css\"));\nvar mobx_1 = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\nvar mobx_react_lite_1 = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\nvar form = /** @class */ (function () {\n    function form() {\n        this.value = '';\n        (0, mobx_1.makeAutoObservable)(this);\n    }\n    form.prototype.updateValue = function (newValue) {\n        this.value = newValue;\n    };\n    return form;\n}());\nexports.form = form;\nvar store = /** @class */ (function () {\n    function store() {\n        this.item = {\n            value: String\n        };\n    }\n    return store;\n}());\nexports.myStore = new form;\nexports.ToDoForm = (0, mobx_react_lite_1.observer)(function () {\n    var ref = (0, react_1.useRef)(null);\n    function createData(a) {\n        return __awaiter(this, void 0, void 0, function () {\n            var response;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetch('http://localhost:3000/api/storage', {\n                            method: 'POST',\n                            headers: { 'Content-Type': 'application/json' },\n                            body: JSON.stringify({\n                                data: a.value\n                            })\n                        })];\n                    case 1:\n                        response = _a.sent();\n                        return [4 /*yield*/, response.json()];\n                    case 2:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    }\n    return (react_1.default.createElement(\"div\", { ref: ref },\n        react_1.default.createElement(formik_1.Formik, { initialValues: {\n                text: exports.myStore.value\n            }, onSubmit: function (values) { return __awaiter(void 0, void 0, void 0, function () {\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            exports.myStore.updateValue(values.text);\n                            return [4 /*yield*/, createData(exports.myStore)];\n                        case 1:\n                            _a.sent();\n                            return [2 /*return*/];\n                    }\n                });\n            }); } },\n            react_1.default.createElement(formik_1.Form, { className: todoform_css_1.default.Form },\n                react_1.default.createElement(formik_1.Field, { as: 'textarea', name: 'text', className: todoform_css_1.default.FormInput, placeholder: \"Название задачи\" }),\n                react_1.default.createElement(\"button\", { type: \"submit\", className: todoform_css_1.default.FormSubmit }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\")))));\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx?");

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