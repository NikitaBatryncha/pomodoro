webpackHotUpdate("main",{

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoList = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction ToDoList() { }\nexports.ToDoList = ToDoList;\n{\n    var _a = (0, react_1.useState)([]), storeArray = _a[0], setStoreArray_1 = _a[1];\n    (0, react_1.useEffect)(function () {\n        function loadData() {\n            return __awaiter(this, void 0, void 0, function () {\n                var response, result, error_1;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            _a.trys.push([0, 4, , 5]);\n                            return [4 /*yield*/, fetch('http://localhost:3003/api/storage')];\n                        case 1:\n                            response = _a.sent();\n                            if (!response.ok) return [3 /*break*/, 3];\n                            return [4 /*yield*/, response.json()];\n                        case 2:\n                            result = _a.sent();\n                            setStoreArray_1(result);\n                            _a.label = 3;\n                        case 3: return [3 /*break*/, 5];\n                        case 4:\n                            error_1 = _a.sent();\n                            console.error('Ошибка получения данных');\n                            return [3 /*break*/, 5];\n                        case 5: return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        loadData();\n    }, []);\n    console.log(storeArray);\n    return (react_1.default.createElement(\"div\", { className: todolist_css_1.default.ToDoListContainer },\n        react_1.default.createElement(\"ul\", { className: todolist_css_1.default.ToDoList }, storeArray.map(function (a, index) { return (a !== '' ? react_1.default.createElement(ToDoTitle_1.ToDoTitle, { key: index, title: a }) : null); })),\n        react_1.default.createElement(\"div\", { className: todolist_css_1.default.TimeSummary }, \"1 \\u0447\\u0430\\u0441 15 \\u043C\\u0438\\u043D\\u0443\\u0442\")));\n}\n;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoList.tsx?");

/***/ }),

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