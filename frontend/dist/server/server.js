/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/Data.js":
/*!*********************!*\
  !*** ./src/Data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserData = void 0;\nexports.UserData = [\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 25,\n        day: 'Mon',\n    },\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 480,\n        day: 'Tue',\n    },\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 56,\n        day: 'Wed',\n    },\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 12,\n        day: 'Thr',\n    },\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 90,\n        day: 'Fri',\n    },\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 60,\n        day: 'Sat',\n    },\n    {\n        id: Math.floor(Math.random() * 900000) + 100000,\n        time: 0,\n        day: 'Sun',\n    },\n];\n\n\n//# sourceURL=webpack:///./src/Data.js?");

/***/ }),

/***/ "./src/actions/file.js":
/*!*****************************!*\
  !*** ./src/actions/file.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createDir = exports.getFiles = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar fileReducer_1 = __webpack_require__(/*! ../reducers/fileReducer */ \"./src/reducers/fileReducer.js\");\nfunction getFiles(dirId) {\n    var _this = this;\n    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {\n        var response, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, axios_1.default.get(\"http://localhost:5000/api/files\".concat(dirId ? '?parent=' + dirId : ''), {\n                            headers: { Authorization: \"Bearer \".concat(localStorage.getItem('token')) }\n                        })];\n                case 1:\n                    response = _a.sent();\n                    dispatch((0, fileReducer_1.setFiles)(response.data));\n                    return [3 /*break*/, 3];\n                case 2:\n                    e_1 = _a.sent();\n                    console.error(e_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n}\nexports.getFiles = getFiles;\nfunction createDir(dirId, name) {\n    var _this = this;\n    return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {\n        var response, e_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, axios_1.default.post(\"http://localhost:5000/api/files\", {\n                            name: name,\n                            parent: dirId,\n                            type: 'dir'\n                        }, {\n                            headers: { Authorization: \"Bearer \".concat(localStorage.getItem('token')) }\n                        })];\n                case 1:\n                    response = _a.sent();\n                    dispatch((0, fileReducer_1.addFile)(response.data));\n                    return [3 /*break*/, 3];\n                case 2:\n                    e_2 = _a.sent();\n                    console.error(e_2);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n}\nexports.createDir = createDir;\n\n\n//# sourceURL=webpack:///./src/actions/file.js?");

/***/ }),

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.auth = exports.login = exports.registration = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar userReducer_1 = __webpack_require__(/*! ../reducers/userReducer */ \"./src/reducers/userReducer.js\");\nvar registration = function (name, surname, email, password) {\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\n        var response, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, axios_1.default.post(\"http://localhost:5000/api/auth/registration\", {\n                            name: name,\n                            surname: surname,\n                            email: email,\n                            password: password\n                        })];\n                case 1:\n                    response = _a.sent();\n                    dispatch((0, userReducer_1.signUp)(true));\n                    return [2 /*return*/, { success: true, message: response.data.message }];\n                case 2:\n                    e_1 = _a.sent();\n                    return [2 /*return*/, { success: false, message: e_1.response.data.message }];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n};\nexports.registration = registration;\nvar login = function (email, password) {\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\n        var response, error, e_2;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, axios_1.default.post(\"http://localhost:5000/api/auth/login\", {\n                            email: email,\n                            password: password\n                        })];\n                case 1:\n                    response = _a.sent();\n                    if (response.status === 200) {\n                        dispatch((0, userReducer_1.setUser)(response.data.user));\n                        localStorage.setItem('token', response.data.token);\n                        return [2 /*return*/, { success: true, message: 'Вход выполнен успешно' }];\n                    }\n                    else {\n                        error = response.statusText;\n                        return [2 /*return*/, { success: false, message: error }];\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    e_2 = _a.sent();\n                    return [2 /*return*/, { success: false, message: e_2.response.data.message }];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n};\nexports.login = login;\nvar auth = function () {\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\n        var response, e_3;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, axios_1.default.get(\"http://localhost:5000/api/auth/auth\", { headers: { Authorization: \"Bearer \".concat(localStorage.getItem('token')) } })];\n                case 1:\n                    response = _a.sent();\n                    dispatch((0, userReducer_1.setUser)(response.data.user));\n                    localStorage.setItem('token', response.data.token);\n                    return [3 /*break*/, 3];\n                case 2:\n                    e_3 = _a.sent();\n                    localStorage.removeItem('token');\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n};\nexports.auth = auth;\n\n\n//# sourceURL=webpack:///./src/actions/user.js?");

/***/ }),

/***/ "./src/context/dataContext.js":
/*!************************************!*\
  !*** ./src/context/dataContext.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useData = exports.DataProvider = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Data_1 = __webpack_require__(/*! ../Data */ \"./src/Data.js\");\nvar DataContext = (0, react_1.createContext)();\nfunction DataProvider(_a) {\n    var children = _a.children;\n    var _b = (0, react_1.useState)(Data_1.UserData), userData = _b[0], setUserData = _b[1];\n    return (react_1.default.createElement(DataContext.Provider, { value: { userData: userData } }, children));\n}\nexports.DataProvider = DataProvider;\nfunction useData() {\n    var context = (0, react_1.useContext)(DataContext);\n    if (!context) {\n        throw new Error('useData must be used within a DataProvider');\n    }\n    return context;\n}\nexports.useData = useData;\n\n\n//# sourceURL=webpack:///./src/context/dataContext.js?");

/***/ }),

/***/ "./src/hooks/useNow.js":
/*!*****************************!*\
  !*** ./src/hooks/useNow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useNow = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useNow(interval, enabled, cb) {\n    var cbRef = (0, react_1.useRef)(cb);\n    cbRef.current = cb;\n    var _a = (0, react_1.useState)(Date.now()), now = _a[0], setNow = _a[1];\n    (0, react_1.useLayoutEffect)(function () {\n        var _a;\n        if (!enabled) {\n            return;\n        }\n        setNow(Date.now());\n        (_a = cbRef.current) === null || _a === void 0 ? void 0 : _a.call(cbRef, Date.now());\n        var int = setInterval(function () {\n            var _a;\n            setNow(Date.now());\n            (_a = cbRef.current) === null || _a === void 0 ? void 0 : _a.call(cbRef, Date.now());\n        }, interval);\n        return function () {\n            clearInterval(int);\n        };\n    }, [interval, enabled]);\n    return now;\n}\nexports.useNow = useNow;\n\n\n//# sourceURL=webpack:///./src/hooks/useNow.js?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.cdnfonts.com/css/sf-ui-display);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black: #333;\\n  --red: #DC3E22;\\n  --redB7: #B7280F;\\n  --green: #A8B64F;\\n  --green89: #899441;\\n  --white: #FFF;\\n  --whiteFD: #FDFDFD;\\n  --grayF4: #F4F4F4;\\n  --grayC4: #C4C4C4;\\n  --gray99: #999;\\n  --grayE4: #e4e4e4;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: #fff;\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'SF UI Display', sans-serif;\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  font-family: 'SF UI Display', sans-serif;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton, select, textarea {\\n  padding: 0;\\n  border: none;\\n  outline: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n  font-family: 'SF UI Display';\\n}\\n\\nbody::-webkit-scrollbar {\\n  display: none;\\n  width: 0;\\n}\\n\\n.MainContainer {\\n  margin: 0 auto;\\n  padding: 0 80px;\\n  width: 1440px;\\n  height: auto;\\n}\\n\\n@media all and (min-width: 1540px) {\\n  body::-webkit-scrollbar {\\n    width: 7px;\\n    height: 341px;\\n    border-radius: 30px;\\n  }\\n\\n  body::-webkit-scrollbar-thumb {\\n    background-color: var(--red);\\n  }\\n\\n  body::-webkit-scrollbar-track {\\n    background-color: transparent;\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/reducers/buttonReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/buttonReducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setButtonValue = void 0;\nvar SET_BUTTON_VALUE = 'SET_BUTTON_VALUE';\nvar defaultState = {\n    buttonValue: '',\n    id: ''\n};\nfunction buttonReducer(state, action) {\n    if (state === void 0) { state = defaultState; }\n    switch (action.type) {\n        case SET_BUTTON_VALUE:\n            return __assign(__assign({}, state), { buttonValue: action.payload, id: action.id });\n        default:\n            return state;\n    }\n}\nexports.default = buttonReducer;\nvar setButtonValue = function (value, id) { return ({ type: SET_BUTTON_VALUE, payload: value, id: id }); };\nexports.setButtonValue = setButtonValue;\n\n\n//# sourceURL=webpack:///./src/reducers/buttonReducer.js?");

/***/ }),

/***/ "./src/reducers/fileReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/fileReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.addFile = exports.setCurrentDir = exports.setFiles = void 0;\nvar SET_FILES = \"SET_FILES\";\nvar SET_CURRENT_DIR = \"SET_CURRENT_DIR\";\nvar ADD_FILE = \"ADD_FILE\";\nvar defaultState = {\n    files: [],\n    currentDir: null,\n};\nfunction fileReducer(state, action) {\n    if (state === void 0) { state = defaultState; }\n    switch (action.type) {\n        case SET_FILES:\n            return __assign(__assign({}, state), { files: action.payload });\n        case SET_CURRENT_DIR:\n            return __assign(__assign({}, state), { currentDir: action.payload });\n        case ADD_FILE:\n            return __assign(__assign({}, state), { files: __spreadArray(__spreadArray([], state.files, true), [action.payload], false) });\n        default:\n            return state;\n    }\n}\nexports.default = fileReducer;\nvar setFiles = function (files) { return ({ type: SET_FILES, payload: files }); };\nexports.setFiles = setFiles;\nvar setCurrentDir = function (dir) { return ({ type: SET_CURRENT_DIR, payload: dir }); };\nexports.setCurrentDir = setCurrentDir;\nvar addFile = function (file) { return ({ type: ADD_FILE, payload: file }); };\nexports.addFile = addFile;\n\n\n//# sourceURL=webpack:///./src/reducers/fileReducer.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.store = void 0;\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nvar userReducer_1 = __importDefault(__webpack_require__(/*! ./userReducer */ \"./src/reducers/userReducer.js\"));\nvar fileReducer_1 = __importDefault(__webpack_require__(/*! ./fileReducer */ \"./src/reducers/fileReducer.js\"));\nvar buttonReducer_1 = __importDefault(__webpack_require__(/*! ./buttonReducer */ \"./src/reducers/buttonReducer.js\"));\nvar rootReducer = (0, redux_1.combineReducers)({\n    user: userReducer_1.default,\n    files: fileReducer_1.default,\n    data: buttonReducer_1.default\n});\nexports.store = (0, redux_1.createStore)(rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\n\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.signUp = exports.logout = exports.setUser = void 0;\nvar SET_USER = \"SET_USER\";\nvar LOGOUT = \"LOGOUT\";\nvar SIGNUP = \"SIGNUP\";\nvar defaultState = {\n    currentUser: {},\n    isAuth: false,\n    signedUp: false\n};\nfunction userReducer(state, action) {\n    if (state === void 0) { state = defaultState; }\n    switch (action.type) {\n        case SET_USER:\n            return __assign(__assign({}, state), { currentUser: action.payload, isAuth: true });\n        case LOGOUT:\n            localStorage.removeItem('token');\n            return __assign(__assign({}, state), { currentUser: {}, isAuth: false });\n        case SIGNUP:\n            return __assign(__assign({}, state), { signedUp: action.payload });\n        default:\n            return state;\n    }\n}\nexports.default = userReducer;\nvar setUser = function (user) { return ({ type: SET_USER, payload: user }); };\nexports.setUser = setUser;\nvar logout = function () { return ({ type: LOGOUT }); };\nexports.logout = logout;\nvar signUp = function (sign) { return ({ type: SIGNUP, payload: sign }); };\nexports.signUp = signUp;\n\n\n//# sourceURL=webpack:///./src/reducers/userReducer.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <link rel=\\\"shortcut icon\\\" type=\\\"image/png\\\" href=\\\"../../img/tomato1.png\\\">\\n  <title>pomodoro_box</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = '\".concat(token, \"'\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n</body>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = (0, express_1.default)();\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get(\"*\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(3000, function () {\n    console.log(\"server started on port http://localhost:3000/main\");\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar styles = __importStar(__webpack_require__(/*! ../main.global.css */ \"./src/main.global.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\nvar Registration_1 = __webpack_require__(/*! ./Registration */ \"./src/shared/Registration/index.ts\");\nvar Login_1 = __webpack_require__(/*! ./Login */ \"./src/shared/Login/index.ts\");\nvar Statistics_1 = __webpack_require__(/*! ./Statistics */ \"./src/shared/Statistics/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar index_1 = __webpack_require__(/*! ../reducers/index */ \"./src/reducers/index.js\");\nvar user_1 = __webpack_require__(/*! ../actions/user */ \"./src/actions/user.js\");\nvar Placeholder_1 = __webpack_require__(/*! ./Placeholder */ \"./src/shared/Placeholder/index.ts\");\nvar dataContext_1 = __webpack_require__(/*! ../context/dataContext */ \"./src/context/dataContext.js\");\nfunction AppComponent() {\n    var isAuth = (0, react_redux_1.useSelector)(function (state) { return state.user.isAuth; });\n    var signedUp = (0, react_redux_1.useSelector)(function (state) { return state.user.signedUp; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        dispatch((0, user_1.auth)());\n        dispatch((0, user_1.registration)());\n        setMounted(true);\n    }, []);\n    return (react_1.default.createElement(react_redux_1.Provider, { store: index_1.store }, mounted && (react_1.default.createElement(react_router_dom_1.MemoryRouter, null,\n        react_1.default.createElement(\"div\", { className: styles.App },\n            react_1.default.createElement(Header_1.Header, { ContainerStyle: styles.MainContainer }),\n            !isAuth &&\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/main\", element: react_1.default.createElement(Placeholder_1.Placeholder, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/registration\", element: react_1.default.createElement(Registration_1.Registration, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/login\", element: react_1.default.createElement(Login_1.Login, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/*\", element: react_1.default.createElement(Placeholder_1.Placeholder, null) })),\n            isAuth &&\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/main\", element: react_1.default.createElement(Content_1.Content, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/statistics\", element: react_1.default.createElement(dataContext_1.DataProvider, null,\n                            react_1.default.createElement(Statistics_1.Statistics, null)) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/*\", element: react_1.default.createElement(Content_1.Content, null) })),\n            signedUp &&\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/registration\", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: \"/login\" }) })))))));\n}\nexports.App = (0, root_1.hot)(function () {\n    return react_1.default.createElement(react_redux_1.Provider, { store: index_1.store },\n        react_1.default.createElement(AppComponent, null));\n});\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nvar InfoList_1 = __webpack_require__(/*! ./leftSide/InfoList */ \"./src/shared/Content/leftSide/InfoList/index.ts\");\nvar ToDoForm_1 = __webpack_require__(/*! ./leftSide/ToDoForm */ \"./src/shared/Content/leftSide/ToDoForm/index.ts\");\nvar ToDoList_1 = __webpack_require__(/*! ./leftSide/ToDoList */ \"./src/shared/Content/leftSide/ToDoList/index.ts\");\nvar Timer_1 = __webpack_require__(/*! ./rightSide/Timer */ \"./src/shared/Content/rightSide/Timer/index.ts\");\nvar ToDoContainer_1 = __webpack_require__(/*! ./rightSide/ToDoContainer */ \"./src/shared/Content/rightSide/ToDoContainer/index.ts\");\nfunction Content() {\n    return (react_1.default.createElement(\"div\", { className: content_css_1.default.MainContainer },\n        react_1.default.createElement(\"div\", { className: content_css_1.default.ContentContainer },\n            react_1.default.createElement(\"div\", { className: content_css_1.default.LeftContainer },\n                react_1.default.createElement(InfoList_1.InfoList, null),\n                react_1.default.createElement(ToDoForm_1.ToDoForm, null),\n                react_1.default.createElement(ToDoList_1.ToDoList, null)),\n            react_1.default.createElement(\"div\", { className: content_css_1.default.RightContainer },\n                react_1.default.createElement(ToDoContainer_1.ToDoContainer, null),\n                react_1.default.createElement(Timer_1.Timer, null)))));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"MainContainer\": \"content__MainContainer--kutQM\",\n\t\"ContentContainer\": \"content__ContentContainer--1dVWT\",\n\t\"LeftContainer\": \"content__LeftContainer--3mpPd\",\n\t\"RightContainer\": \"content__RightContainer--ZQBpw\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Content/leftSide/InfoList/InfoList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/InfoList/InfoList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.InfoList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar infolist_css_1 = __importDefault(__webpack_require__(/*! ./infolist.css */ \"./src/shared/Content/leftSide/InfoList/infolist.css\"));\nfunction InfoList() {\n    return (react_1.default.createElement(\"div\", { className: infolist_css_1.default.ToDoList },\n        react_1.default.createElement(\"h2\", { className: infolist_css_1.default.ContentTitle }, \"\\u0423\\u0440\\u0430! \\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u043C\\u043E\\u0436\\u043D\\u043E \\u043D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C:\"),\n        react_1.default.createElement(\"ul\", { className: infolist_css_1.default.ContentList },\n            react_1.default.createElement(\"li\", { className: infolist_css_1.default.ContentListItem },\n                react_1.default.createElement(\"div\", { className: infolist_css_1.default.ListItemDist }),\n                \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044E \\u0438 \\u043D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435 \\u043D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u0442\\u0435\\u043A\\u0443\\u0449\\u0435\\u0439 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438\"),\n            react_1.default.createElement(\"li\", { className: infolist_css_1.default.ContentListItem },\n                react_1.default.createElement(\"div\", { className: infolist_css_1.default.ListItemDist }),\n                \"\\u0417\\u0430\\u043F\\u0443\\u0441\\u0442\\u0438\\u0442\\u0435 \\u0442\\u0430\\u0439\\u043C\\u0435\\u0440 (\\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB)\"),\n            react_1.default.createElement(\"li\", { className: infolist_css_1.default.ContentListItem },\n                react_1.default.createElement(\"div\", { className: infolist_css_1.default.ListItemDist }),\n                \"\\u0420\\u0430\\u0431\\u043E\\u0442\\u0430\\u0439\\u0442\\u0435 \\u043F\\u043E\\u043A\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u043D\\u0435 \\u043F\\u0440\\u043E\\u0437\\u0432\\u043E\\u043D\\u0438\\u0442\"),\n            react_1.default.createElement(\"li\", { className: infolist_css_1.default.ContentListItem },\n                react_1.default.createElement(\"div\", { className: infolist_css_1.default.ListItemDist }),\n                \"\\u0421\\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u043A\\u043E\\u0440\\u043E\\u0442\\u043A\\u0438\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (3-5 \\u043C\\u0438\\u043D\\u0443\\u0442)\"),\n            react_1.default.createElement(\"li\", { className: infolist_css_1.default.ContentListItem },\n                react_1.default.createElement(\"div\", { className: infolist_css_1.default.ListItemDist }),\n                \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0430\\u0439\\u0442\\u0435 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0442\\u044C \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u00BB \\u0437\\u0430 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u043E\\u043C\\u00BB, \\u043F\\u043E\\u043A\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430 \\u043D\\u0435 \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0432\\u044B\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0430. \\u041A\\u0430\\u0436\\u0434\\u044B\\u0435 4 \\u00AB\\u043F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440\\u0430\\u00BB \\u0434\\u0435\\u043B\\u0430\\u0439\\u0442\\u0435 \\u0434\\u043B\\u0438\\u043D\\u043D\\u044B\\u0439 \\u043F\\u0435\\u0440\\u0435\\u0440\\u044B\\u0432 (15-30 \\u043C\\u0438\\u043D\\u0443\\u0442).\"))));\n}\nexports.InfoList = InfoList;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/InfoList/InfoList.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/InfoList/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Content/leftSide/InfoList/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./InfoList */ \"./src/shared/Content/leftSide/InfoList/InfoList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/InfoList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/leftSide/InfoList/infolist.css":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/InfoList/infolist.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ContentList\": \"infolist__ContentList--1dC0s\",\n\t\"ContentListItem\": \"infolist__ContentListItem--1gLmF\",\n\t\"ListItemDist\": \"infolist__ListItemDist--1oHEH\",\n\t\"ContentTitle\": \"infolist__ContentTitle--au7F8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/InfoList/infolist.css?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoForm = exports.myStore = exports.form = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\nvar todoform_css_1 = __importDefault(__webpack_require__(/*! ./todoform.css */ \"./src/shared/Content/leftSide/ToDoForm/todoform.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar mobx_1 = __webpack_require__(/*! mobx */ \"mobx\");\nvar mobx_react_lite_1 = __webpack_require__(/*! mobx-react-lite */ \"mobx-react-lite\");\nvar file_1 = __webpack_require__(/*! ../../../../actions/file */ \"./src/actions/file.js\");\nvar form = /** @class */ (function () {\n    function form() {\n        this.value = '';\n        (0, mobx_1.makeAutoObservable)(this);\n    }\n    form.prototype.updateValue = function (newValue) {\n        this.value = newValue;\n    };\n    return form;\n}());\nexports.form = form;\nvar store = /** @class */ (function () {\n    function store() {\n        this.item = {\n            value: String\n        };\n    }\n    return store;\n}());\nexports.myStore = new form;\nexports.ToDoForm = (0, mobx_react_lite_1.observer)(function () {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var ref = (0, react_1.useRef)(null);\n    var currentDir = (0, react_redux_1.useSelector)(function (state) { return state.files.currentDir; });\n    function createHandler(dir, name) {\n        dispatch((0, file_1.createDir)(dir, name));\n    }\n    return (react_1.default.createElement(\"div\", { ref: ref },\n        react_1.default.createElement(formik_1.Formik, { initialValues: {\n                text: exports.myStore.value\n            }, onSubmit: function (values) { return __awaiter(void 0, void 0, void 0, function () {\n                return __generator(this, function (_a) {\n                    exports.myStore.updateValue(values.text);\n                    createHandler(currentDir, exports.myStore.value);\n                    return [2 /*return*/];\n                });\n            }); } },\n            react_1.default.createElement(formik_1.Form, { className: todoform_css_1.default.Form },\n                react_1.default.createElement(formik_1.Field, { as: 'textarea', name: 'text', className: todoform_css_1.default.FormInput, placeholder: \"Название задачи\" }),\n                react_1.default.createElement(\"button\", { type: \"submit\", className: todoform_css_1.default.FormSubmit }, \"\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C\")))));\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoForm/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoForm/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoForm */ \"./src/shared/Content/leftSide/ToDoForm/ToDoForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoForm/index.ts?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoForm/todoform.css":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoForm/todoform.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Form\": \"todoform__Form--3KIIk\",\n\t\"FormInput\": \"todoform__FormInput--3aD2S\",\n\t\"FormSubmit\": \"todoform__FormSubmit--3E3tv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoForm/todoform.css?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar todolist_css_1 = __importDefault(__webpack_require__(/*! ./todolist.css */ \"./src/shared/Content/leftSide/ToDoList/todolist.css\"));\nvar ToDoTitle_1 = __webpack_require__(/*! ./ToDoTitle */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar file_1 = __webpack_require__(/*! ../../../../actions/file */ \"./src/actions/file.js\");\nfunction ToDoList() {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var currentDir = (0, react_redux_1.useSelector)(function (state) { return state.files.currentDir; });\n    (0, react_1.useEffect)(function () {\n        dispatch((0, file_1.getFiles)(currentDir));\n    }, [currentDir]);\n    var items = (0, react_redux_1.useSelector)(function (state) { return state.files.files; });\n    return (react_1.default.createElement(\"div\", { className: todolist_css_1.default.ToDoListContainer },\n        react_1.default.createElement(\"ul\", { className: todolist_css_1.default.ToDoList }, items.map(function (a, index) { return (react_1.default.createElement(ToDoTitle_1.ToDoTitle, { key: index, id: index, title: a.name })); })),\n        react_1.default.createElement(\"div\", { className: todolist_css_1.default.TimeSummary }, \"1 \\u0447\\u0430\\u0441 15 \\u043C\\u0438\\u043D\\u0443\\u0442\")));\n}\nexports.ToDoList = ToDoList;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoList.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar todotitle_css_1 = __importDefault(__webpack_require__(/*! ./todotitle.css */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar buttonReducer_1 = __webpack_require__(/*! ../../../../../reducers/buttonReducer */ \"./src/reducers/buttonReducer.js\");\nfunction ToDoTitle(_a) {\n    var title = _a.title, id = _a.id;\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var handleButtonClick = function () {\n        dispatch((0, buttonReducer_1.setButtonValue)(title, id));\n    };\n    return (react_1.default.createElement(\"li\", { className: todotitle_css_1.default.TitleContainer },\n        react_1.default.createElement(\"h2\", { className: todotitle_css_1.default.Title },\n            react_1.default.createElement(\"button\", { className: todotitle_css_1.default.TitleBtn, id: id, onClick: handleButtonClick }, title))));\n}\nexports.ToDoTitle = ToDoTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoTitle */ \"./src/shared/Content/leftSide/ToDoList/ToDoTitle/ToDoTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"TitleContainer\": \"todotitle__TitleContainer--1BeCV\",\n\t\"Title\": \"todotitle__Title--3JzYJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/ToDoTitle/todotitle.css?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoList */ \"./src/shared/Content/leftSide/ToDoList/ToDoList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/leftSide/ToDoList/todolist.css":
/*!***********************************************************!*\
  !*** ./src/shared/Content/leftSide/ToDoList/todolist.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ToDoListContainer\": \"todolist__ToDoListContainer--Lg18K\",\n\t\"ToDoList\": \"todolist__ToDoList--18Y3n\",\n\t\"TimeSummary\": \"todolist__TimeSummary--3Ohfl\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/leftSide/ToDoList/todolist.css?");

/***/ }),

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Content/rightSide/Timer/timer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ../ToDoContainer/ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar timerLogic_1 = __webpack_require__(/*! ../timerLogic */ \"./src/shared/Content/rightSide/timerLogic.js\");\nfunction Timer() {\n    var initialMinutes = 15000;\n    var initialPauseMinutes = 5000;\n    var buttonData = (0, react_redux_1.useSelector)(function (state) { return state.data; });\n    var _a = (0, react_1.useState)(''), id = _a[0], setId = _a[1];\n    (0, react_1.useEffect)(function () {\n        setId(buttonData.id);\n    }, [buttonData]);\n    var _b = (0, timerLogic_1.useTimerLogic)(initialMinutes, initialPauseMinutes), formatTime = _b.formatTime, countDown = _b.countDown, handlePlusMinutesClick = _b.handlePlusMinutesClick, toggleTimer = _b.toggleTimer, isActive = _b.isActive;\n    return (react_1.default.createElement(\"div\", { className: timer_css_1.default.Timer },\n        react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCountContainer },\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCount },\n                isNaN(countDown) ? \"00:00\" : formatTime(Math.ceil(countDown / 1000)),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.TimerButton, onClick: handlePlusMinutesClick },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\n                        react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\n                react_1.default.createElement(\"div\", { className: timer_css_1.default.TaskWrapper },\n                    react_1.default.createElement(\"span\", { className: timer_css_1.default.TaskNumber },\n                        \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \",\n                        Number(id) + 1,\n                        \" -\"),\n                    react_1.default.createElement(ToDoTask_1.ToDoTask, null))),\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.buttonWrapper },\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StartButton, onClick: toggleTimer }, !isActive ? 'Старт' : 'Пауза')))));\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/Timer/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Timer */ \"./src/shared/Content/rightSide/Timer/Timer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/index.ts?");

/***/ }),

/***/ "./src/shared/Content/rightSide/Timer/timer.css":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/timer.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Timer\": \"timer__Timer--tY8Q2\",\n\t\"buttonWrapper\": \"timer__buttonWrapper--EyDNF\",\n\t\"StartButton\": \"timer__StartButton--1beNK\",\n\t\"StopButton\": \"timer__StopButton--2rRy0\",\n\t\"TimerCount\": \"timer__TimerCount--2O9QO\",\n\t\"TimerButton\": \"timer__TimerButton--3KyzP\",\n\t\"TimerButtonStyles\": \"timer__TimerButtonStyles--I-HYd\",\n\t\"TaskWrapper\": \"timer__TaskWrapper--LQqI5\",\n\t\"TaskNumber\": \"timer__TaskNumber--1EhdE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/timer.css?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/PomNum/PomNum.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/PomNum/PomNum.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PomNum = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar pomnum_css_1 = __importDefault(__webpack_require__(/*! ./pomnum.css */ \"./src/shared/Content/rightSide/ToDoContainer/PomNum/pomnum.css\"));\nfunction PomNum() {\n    return (react_1.default.createElement(\"span\", { className: pomnum_css_1.default.PomodoroNumber }, \"\\u041F\\u043E\\u043C\\u0438\\u0434\\u043E\\u0440 1\"));\n}\nexports.PomNum = PomNum;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/PomNum/PomNum.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/PomNum/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/PomNum/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PomNum */ \"./src/shared/Content/rightSide/ToDoContainer/PomNum/PomNum.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/PomNum/index.ts?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/PomNum/pomnum.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/PomNum/pomnum.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/PomNum/pomnum.css?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar todocontainer_css_1 = __importDefault(__webpack_require__(/*! ./todocontainer.css */ \"./src/shared/Content/rightSide/ToDoContainer/todocontainer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ./ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar PomNum_1 = __webpack_require__(/*! ./PomNum */ \"./src/shared/Content/rightSide/ToDoContainer/PomNum/index.ts\");\nfunction ToDoContainer() {\n    return (react_1.default.createElement(\"div\", { className: todocontainer_css_1.default.ToDoContainer },\n        react_1.default.createElement(\"div\", { className: todocontainer_css_1.default.ToDoTaskWrapper },\n            react_1.default.createElement(ToDoTask_1.ToDoTask, null),\n            react_1.default.createElement(PomNum_1.PomNum, null))));\n}\nexports.ToDoContainer = ToDoContainer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ToDoTask = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar mobx_react_1 = __webpack_require__(/*! mobx-react */ \"mobx-react\");\nvar todotask_css_1 = __importDefault(__webpack_require__(/*! ./todotask.css */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/todotask.css\"));\nvar ToDoForm_1 = __webpack_require__(/*! ../../../leftSide/ToDoForm */ \"./src/shared/Content/leftSide/ToDoForm/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nexports.ToDoTask = (0, mobx_react_1.observer)(function () {\n    var _a = (0, react_1.useState)(''), title = _a[0], setTitle = _a[1];\n    var buttonValue = (0, react_redux_1.useSelector)(function (state) { return state.data.buttonValue; });\n    (0, react_1.useEffect)(function () {\n        setTitle(buttonValue);\n    }, [buttonValue, ToDoForm_1.myStore.value]);\n    return (react_1.default.createElement(\"div\", { className: todotask_css_1.default.ToDoTask }, title || ToDoForm_1.myStore.value));\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoTask/ToDoTask.tsx?");

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
/*!**************************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/ToDoTask/todotask.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ToDoTask\": \"todotask__ToDoTask--2smur\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/ToDoTask/todotask.css?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ToDoContainer */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoContainer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Content/rightSide/ToDoContainer/todocontainer.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Content/rightSide/ToDoContainer/todocontainer.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ToDoContainer\": \"todocontainer__ToDoContainer--3qafO\",\n\t\"ToDoTaskWrapper\": \"todocontainer__ToDoTaskWrapper--Ne8Fx\",\n\t\"PomodoroNumber\": \"todocontainer__PomodoroNumber--29yBD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/ToDoContainer/todocontainer.css?");

/***/ }),

/***/ "./src/shared/Content/rightSide/timerLogic.js":
/*!****************************************************!*\
  !*** ./src/shared/Content/rightSide/timerLogic.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useTimerLogic = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar useNow_1 = __webpack_require__(/*! ../../../hooks/useNow */ \"./src/hooks/useNow.js\");\nfunction useTimerLogic(initialMinutes, initialPauseMinutes) {\n    var _a = (0, react_1.useState)(null), startAt = _a[0], setStartAt = _a[1];\n    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];\n    var _c = (0, react_1.useState)(false), isCompleted = _c[0], setIsCompleted = _c[1];\n    var _d = (0, react_1.useState)('work'), timerToggleValue = _d[0], setTimerToggleValue = _d[1];\n    var _e = (0, react_1.useState)(0), initialTimer = _e[0], setInitialTimer = _e[1];\n    var initialTime = timerToggleValue === 'work' ? initialMinutes : initialPauseMinutes;\n    var now = (0, useNow_1.useNow)(1000, startAt);\n    var fromStart = now - (startAt !== null && startAt !== void 0 ? startAt : now);\n    var timer = fromStart + initialTimer;\n    var countDown = Number(initialMinutes - timer);\n    var toggleTimer = function () {\n        if (startAt) {\n            setIsActive(!startAt);\n            setInitialTimer(timer);\n            setStartAt();\n            setIsCompleted(false);\n        }\n        else {\n            setStartAt(Date.now());\n        }\n    };\n    var formatTime = function (time) {\n        if (time < 0) {\n            return \"00:00\";\n        }\n        else if (typeof time !== 'number' || isNaN(time)) {\n            return countDown;\n        }\n        var minutes = Math.floor(time / 60);\n        var remainingMilliseconds = time % 60;\n        return \"\".concat(minutes < 10 ? \"0\".concat(minutes) : minutes, \":\").concat(remainingMilliseconds < 10 ? '0' : '').concat(remainingMilliseconds);\n    };\n    var isCountEnd = countDown === 0;\n    (0, react_1.useEffect)(function () {\n        if (isCountEnd) {\n            console.log('count down');\n        }\n    }, [isCountEnd]);\n    function plusMinutes() {\n        if (!isActive) {\n            setStartAt(function (prevStartAt) {\n                var newStartAt = prevStartAt !== null && prevStartAt !== void 0 ? prevStartAt : Date.now();\n                var newTime = newStartAt + 60000;\n                return newTime;\n            });\n        }\n    }\n    var handlePlusMinutesClick = function () {\n        plusMinutes();\n    };\n    return {\n        formatTime: formatTime,\n        countDown: countDown,\n        handlePlusMinutesClick: handlePlusMinutesClick,\n        toggleTimer: toggleTimer,\n        isActive: isActive\n    };\n}\nexports.useTimerLogic = useTimerLogic;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/timerLogic.js?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar userReducer_1 = __webpack_require__(/*! ../../reducers/userReducer */ \"./src/reducers/userReducer.js\");\nfunction Header(_a) {\n    var ContainerStyle = _a.ContainerStyle;\n    var isAuth = (0, react_redux_1.useSelector)(function (state) { return state.user.isAuth; });\n    var userData = (0, react_redux_1.useSelector)(function (data) { return data.user.currentUser; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var handleSignedUp = function () {\n        dispatch((0, userReducer_1.signUp)(false));\n    };\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.Header },\n        react_1.default.createElement(\"div\", { className: header_css_1.default.MainContainer },\n            react_1.default.createElement(\"div\", { className: header_css_1.default.HeaderContainer },\n                react_1.default.createElement(react_router_dom_1.NavLink, { to: '/main' },\n                    react_1.default.createElement(\"div\", { className: header_css_1.default.LogoContainer },\n                        react_1.default.createElement(\"span\", { className: header_css_1.default.LogoWrapper },\n                            react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"40\", height: \"40\", viewBox: \"0 0 40 40\", fill: \"none\" },\n                                react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_21502_116)\" },\n                                    react_1.default.createElement(\"path\", { d: \"M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z\", fill: \"#DC3E22\" }),\n                                    react_1.default.createElement(\"path\", { d: \"M28.238 12.6065C27.3211 11.6729 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99491 26.2227 9.61813C28.1713 8.65362 31.0576 8.56482 31.0576 8.56482C31.0576 8.56482 27.6509 6.80417 25.1601 6.91465C24.5259 6.94254 23.8571 7.16655 23.2118 7.484C23.5757 6.97051 23.9205 6.45995 24.1409 6.0764C24.8152 4.90365 25.524 3.42624 25.524 3.42624C25.524 3.42624 22.9122 3.5657 21.7008 5.01562C21.2407 5.56642 20.8934 6.26622 20.6392 6.92272C20.1878 6.40416 19.6896 5.94239 19.1913 5.58192C16.6999 3.77893 12.7192 4.169 12.7192 4.169C12.7192 4.169 15.7263 5.87482 17.0793 7.57653C17.6076 8.24107 18.1437 8.54839 18.4642 9.29349C17.3564 9.05364 14.8569 9.13562 13.63 9.59054C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3442 16.3813 11.8565C17.3017 11.5295 18.2748 11.4428 19.1229 11.4577C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1646 21.403 15.6156C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.0059 28.238 12.6065Z\", fill: \"#899441\" }),\n                                    react_1.default.createElement(\"path\", { d: \"M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z\", fill: \"#A8B64F\" })),\n                                react_1.default.createElement(\"defs\", null,\n                                    react_1.default.createElement(\"clipPath\", { id: \"clip0_21502_116\" },\n                                        react_1.default.createElement(\"rect\", { width: \"40\", height: \"40\", fill: \"white\" }))))),\n                        react_1.default.createElement(\"span\", { className: header_css_1.default.LogoText }, \"pomodoro_box\"))),\n                react_1.default.createElement(\"div\", { className: header_css_1.default.HeaderWrapper },\n                    isAuth &&\n                        react_1.default.createElement(\"div\", { className: header_css_1.default.UserName }, userData && \"\".concat(userData.name, \" \").concat(userData.surname)),\n                    isAuth &&\n                        react_1.default.createElement(react_router_dom_1.NavLink, { to: '/statistics' },\n                            react_1.default.createElement(\"div\", { className: header_css_1.default.HeaderButton },\n                                react_1.default.createElement(\"svg\", { className: header_css_1.default.HeaderButtonIcon, xmlns: \"http://www.w3.org/2000/svg\", width: \"24\", height: \"24\", viewBox: \"0 0 24 24\", fill: \"none\" },\n                                    react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_21502_122)\" },\n                                        react_1.default.createElement(\"path\", { d: \"M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z\" })),\n                                    react_1.default.createElement(\"defs\", null,\n                                        react_1.default.createElement(\"clipPath\", { id: \"clip0_21502_122\" },\n                                            react_1.default.createElement(\"rect\", { width: \"24\", height: \"24\", fill: \"white\" })))),\n                                \"\\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430\")),\n                    !isAuth &&\n                        react_1.default.createElement(react_router_dom_1.NavLink, { to: '/login' },\n                            react_1.default.createElement(\"div\", { className: header_css_1.default.HeaderLoginButton }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\")),\n                    !isAuth &&\n                        react_1.default.createElement(react_router_dom_1.NavLink, { to: '/registration' },\n                            react_1.default.createElement(\"div\", { className: header_css_1.default.HeaderLoginButton, onClick: handleSignedUp }, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")),\n                    isAuth && react_1.default.createElement(\"div\", { className: header_css_1.default.HeaderLoginButton, onClick: function () { return dispatch((0, userReducer_1.logout)()); } }, \"\\u0412\\u044B\\u0445\\u043E\\u0434\"))))));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Header\": \"header__Header--1G647\",\n\t\"MainContainer\": \"header__MainContainer--ZNm0x\",\n\t\"HeaderContainer\": \"header__HeaderContainer--2-43q\",\n\t\"LogoContainer\": \"header__LogoContainer--3MtOl\",\n\t\"LogoText\": \"header__LogoText--1_Tsj\",\n\t\"HeaderWrapper\": \"header__HeaderWrapper--3pwQN\",\n\t\"HeaderButton\": \"header__HeaderButton--2ZBPG\",\n\t\"HeaderLoginButton\": \"header__HeaderLoginButton--3CkfB\",\n\t\"LogoWrapper\": \"header__LogoWrapper--MJSH3\",\n\t\"HeaderButtonIcon\": \"header__HeaderButtonIcon--11668\",\n\t\"UserName\": \"header__UserName--23zTC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Input/Input.tsx":
/*!************************************!*\
  !*** ./src/shared/Input/Input.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Input = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar input_css_1 = __importDefault(__webpack_require__(/*! ./input.css */ \"./src/shared/Input/input.css\"));\nfunction Input(props) {\n    return (react_1.default.createElement(\"input\", { className: input_css_1.default.Input, onChange: function (e) { return props.setValue(e.target.value); }, type: props.type, placeholder: props.placeholder }));\n}\nexports.Input = Input;\n\n\n//# sourceURL=webpack:///./src/shared/Input/Input.tsx?");

/***/ }),

/***/ "./src/shared/Input/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Input/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Input */ \"./src/shared/Input/Input.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Input/index.ts?");

/***/ }),

/***/ "./src/shared/Input/input.css":
/*!************************************!*\
  !*** ./src/shared/Input/input.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Input\": \"input__Input--1KIxk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Input/input.css?");

/***/ }),

/***/ "./src/shared/Login/Login.tsx":
/*!************************************!*\
  !*** ./src/shared/Login/Login.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Login = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar login_css_1 = __importDefault(__webpack_require__(/*! ./login.css */ \"./src/shared/Login/login.css\"));\nvar Input_1 = __webpack_require__(/*! ../Input */ \"./src/shared/Input/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar user_1 = __webpack_require__(/*! ../../actions/user */ \"./src/actions/user.js\");\nfunction Login() {\n    var _this = this;\n    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];\n    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];\n    var _c = (0, react_1.useState)(null), message = _c[0], setMessage = _c[1];\n    var _d = (0, react_1.useState)(''), error = _d[0], setError = _d[1];\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var userData = (0, react_redux_1.useSelector)(function (state) { return state.user.currentUser; });\n    var errorTranslator = function (a) {\n        if (a === 'User not found') {\n            return a = 'Пользователь с таким email не найден';\n        }\n        else if (a === 'Invalid password') {\n            return a = 'Неверный пароль';\n        }\n        else {\n            return a = 'Неизвестная ошибка. Попробуйте еще раз';\n        }\n    };\n    (0, react_1.useEffect)(function () {\n        dispatch((0, user_1.login)(email, password));\n    }, []);\n    var handleLogin = function () { return __awaiter(_this, void 0, void 0, function () {\n        var data, error_2, error_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, dispatch((0, user_1.login)(email, password))];\n                case 1:\n                    data = _a.sent();\n                    if (data.success) {\n                        setError('');\n                        setMessage(data.message);\n                    }\n                    else {\n                        error_2 = errorTranslator(data.message);\n                        setError(error_2);\n                        setMessage(null);\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    error_1 = _a.sent();\n                    console.error('Произошла ошибка при входе в систему:', error_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n    return (react_1.default.createElement(\"div\", { className: login_css_1.default.Login },\n        react_1.default.createElement(\"div\", { className: login_css_1.default.LoginWrapper },\n            react_1.default.createElement(\"h2\", { className: login_css_1.default.LoginTitle }, \"\\u0412\\u0445\\u043E\\u0434\"),\n            react_1.default.createElement(Input_1.Input, { type: 'email', setValue: setEmail, placeholder: 'Email' }),\n            react_1.default.createElement(Input_1.Input, { type: 'password', setValue: setPassword, placeholder: 'Пароль' }),\n            error ? react_1.default.createElement(\"div\", { className: login_css_1.default.LoginError }, error) : react_1.default.createElement(\"div\", { className: login_css_1.default.LoginMessage }, message),\n            react_1.default.createElement(\"button\", { className: login_css_1.default.LoginBtn, onClick: function () { return handleLogin(); } }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"))));\n}\nexports.Login = Login;\n\n\n//# sourceURL=webpack:///./src/shared/Login/Login.tsx?");

/***/ }),

/***/ "./src/shared/Login/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Login/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Login */ \"./src/shared/Login/Login.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Login/index.ts?");

/***/ }),

/***/ "./src/shared/Login/login.css":
/*!************************************!*\
  !*** ./src/shared/Login/login.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Login\": \"login__Login--3n7br\",\n\t\"LoginWrapper\": \"login__LoginWrapper--3vtXS\",\n\t\"LoginTitle\": \"login__LoginTitle--bIEId\",\n\t\"LoginBtn\": \"login__LoginBtn--1Oaka\",\n\t\"LoginMessage\": \"login__LoginMessage--CzBEm\",\n\t\"LoginError\": \"login__LoginError--3GbSh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Login/login.css?");

/***/ }),

/***/ "./src/shared/Placeholder/Placeholder.tsx":
/*!************************************************!*\
  !*** ./src/shared/Placeholder/Placeholder.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Placeholder = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar placeholder_css_1 = __importDefault(__webpack_require__(/*! ./placeholder.css */ \"./src/shared/Placeholder/placeholder.css\"));\nfunction Placeholder() {\n    return (react_1.default.createElement(\"div\", { className: placeholder_css_1.default.Placeholder },\n        react_1.default.createElement(\"div\", { className: placeholder_css_1.default.MainContainer },\n            react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"215\", height: \"215\", viewBox: \"0 0 115 115\", fill: \"none\" },\n                react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_16_527)\" },\n                    react_1.default.createElement(\"path\", { d: \"M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z\", fill: \"#DC3E22\" }),\n                    react_1.default.createElement(\"path\", { d: \"M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z\", fill: \"#899441\" }),\n                    react_1.default.createElement(\"path\", { d: \"M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z\", fill: \"#A8B64F\" }),\n                    react_1.default.createElement(\"circle\", { cx: \"41.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }),\n                    react_1.default.createElement(\"g\", { filter: \"url(#filter0_f_16_527)\" },\n                        react_1.default.createElement(\"circle\", { cx: \"29.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" })),\n                    react_1.default.createElement(\"g\", { filter: \"url(#filter1_f_16_527)\" },\n                        react_1.default.createElement(\"circle\", { cx: \"85.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" })),\n                    react_1.default.createElement(\"circle\", { cx: \"73.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }),\n                    react_1.default.createElement(\"path\", { d: \"M46 78C50 82 64.5 83 68.5 78\", stroke: \"black\" })),\n                react_1.default.createElement(\"defs\", null,\n                    react_1.default.createElement(\"filter\", { id: \"filter0_f_16_527\", x: \"20\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" },\n                        react_1.default.createElement(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }),\n                        react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }),\n                        react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })),\n                    react_1.default.createElement(\"filter\", { id: \"filter1_f_16_527\", x: \"76\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" },\n                        react_1.default.createElement(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }),\n                        react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }),\n                        react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })),\n                    react_1.default.createElement(\"clipPath\", { id: \"clip0_16_527\" },\n                        react_1.default.createElement(\"rect\", { width: \"115\", height: \"115\", fill: \"white\" })))),\n            react_1.default.createElement(\"div\", { className: placeholder_css_1.default.Wrapper },\n                react_1.default.createElement(\"div\", { className: placeholder_css_1.default.PlaceholderPretitle }, \"\\u0412\\u044B \\u043F\\u043E\\u043A\\u0430 \\u043D\\u0435 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u043E\\u0432\\u0430\\u043D\\u044B\"),\n                react_1.default.createElement(\"div\", { className: placeholder_css_1.default.PlaceholderTitle }, \"\\u0412\\u043E\\u0439\\u0434\\u0438\\u0442\\u0435 \\u0438\\u043B\\u0438 \\u0437\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u0443\\u0439\\u0442\\u0435\\u0441\\u044C, \\u0447\\u0442\\u043E\\u0431\\u044B \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F Pomodoro\")))));\n}\nexports.Placeholder = Placeholder;\n\n\n//# sourceURL=webpack:///./src/shared/Placeholder/Placeholder.tsx?");

/***/ }),

/***/ "./src/shared/Placeholder/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/Placeholder/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Placeholder */ \"./src/shared/Placeholder/Placeholder.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Placeholder/index.ts?");

/***/ }),

/***/ "./src/shared/Placeholder/placeholder.css":
/*!************************************************!*\
  !*** ./src/shared/Placeholder/placeholder.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Placeholder\": \"placeholder__Placeholder--2HZbb\",\n\t\"MainContainer\": \"placeholder__MainContainer--2jQIC\",\n\t\"PlaceholderImg\": \"placeholder__PlaceholderImg--1Qcwj\",\n\t\"PlaceholderPretitle\": \"placeholder__PlaceholderPretitle--3C4k6\",\n\t\"PlaceholderTitle\": \"placeholder__PlaceholderTitle--3hpDe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Placeholder/placeholder.css?");

/***/ }),

/***/ "./src/shared/Registration/Registration.tsx":
/*!**************************************************!*\
  !*** ./src/shared/Registration/Registration.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Registration = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar registration_css_1 = __importDefault(__webpack_require__(/*! ./registration.css */ \"./src/shared/Registration/registration.css\"));\nvar Input_1 = __webpack_require__(/*! ../Input */ \"./src/shared/Input/index.ts\");\nvar user_1 = __webpack_require__(/*! ../../actions/user */ \"./src/actions/user.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction Registration() {\n    var _this = this;\n    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];\n    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];\n    var _c = (0, react_1.useState)(''), name = _c[0], setName = _c[1];\n    var _d = (0, react_1.useState)(''), surname = _d[0], setSurname = _d[1];\n    var _e = (0, react_1.useState)(null), message = _e[0], setMessage = _e[1];\n    var _f = (0, react_1.useState)(null), error = _f[0], setError = _f[1];\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        dispatch((0, user_1.registration)(name, surname, email, password));\n    }, []);\n    var handleRegistration = function (name, surname, email, password) { return __awaiter(_this, void 0, void 0, function () {\n        var res, e_1;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    _a.trys.push([0, 2, , 3]);\n                    return [4 /*yield*/, dispatch((0, user_1.registration)(name, surname, email, password))];\n                case 1:\n                    res = _a.sent();\n                    if (res.success) {\n                        setError(null);\n                        setMessage(res.message);\n                    }\n                    else {\n                        setError(res.message);\n                        setMessage(null);\n                    }\n                    return [3 /*break*/, 3];\n                case 2:\n                    e_1 = _a.sent();\n                    console.log('Ошибка в обработке результата регистрации:', e_1);\n                    return [3 /*break*/, 3];\n                case 3: return [2 /*return*/];\n            }\n        });\n    }); };\n    return (react_1.default.createElement(\"div\", { className: registration_css_1.default.Registration },\n        react_1.default.createElement(\"div\", { className: registration_css_1.default.RegistrationWrapper },\n            react_1.default.createElement(\"h2\", { className: registration_css_1.default.RegistrationTitle }, \"\\u0420\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0430\\u0446\\u0438\\u044F\"),\n            react_1.default.createElement(Input_1.Input, { type: 'test', setValue: setName, placeholder: 'Имя' }),\n            react_1.default.createElement(Input_1.Input, { type: 'test', setValue: setSurname, placeholder: 'Фамилия' }),\n            react_1.default.createElement(Input_1.Input, { type: 'email', setValue: setEmail, placeholder: 'Email' }),\n            react_1.default.createElement(Input_1.Input, { type: 'password', setValue: setPassword, placeholder: 'Пароль' }),\n            error ? react_1.default.createElement(\"div\", { className: registration_css_1.default.RegistrationError }, error) : react_1.default.createElement(\"div\", { className: registration_css_1.default.RegistrationMessage }, message),\n            react_1.default.createElement(\"button\", { onClick: function () { return handleRegistration(name, surname, email, password); }, className: registration_css_1.default.RegistrationBtn }, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\n}\nexports.Registration = Registration;\n\n\n//# sourceURL=webpack:///./src/shared/Registration/Registration.tsx?");

/***/ }),

/***/ "./src/shared/Registration/index.ts":
/*!******************************************!*\
  !*** ./src/shared/Registration/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Registration */ \"./src/shared/Registration/Registration.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Registration/index.ts?");

/***/ }),

/***/ "./src/shared/Registration/registration.css":
/*!**************************************************!*\
  !*** ./src/shared/Registration/registration.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Registration\": \"registration__Registration--3MbOh\",\n\t\"RegistrationWrapper\": \"registration__RegistrationWrapper--3JHlB\",\n\t\"RegistrationTitle\": \"registration__RegistrationTitle--263lW\",\n\t\"RegistrationBtn\": \"registration__RegistrationBtn--2TPkK\",\n\t\"RegistrationMessage\": \"registration__RegistrationMessage--3kx_2\",\n\t\"RegistrationError\": \"registration__RegistrationError--2ROBB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Registration/registration.css?");

/***/ }),

/***/ "./src/shared/Statistics/Statistics.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Statistics/Statistics.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Statistics = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar statistics_css_1 = __importDefault(__webpack_require__(/*! ./statistics.css */ \"./src/shared/Statistics/statistics.css\"));\nvar dataContext_1 = __webpack_require__(/*! ../../context/dataContext */ \"./src/context/dataContext.js\");\nfunction Statistics() {\n    var userData = (0, dataContext_1.useData)().userData;\n    return (react_1.default.createElement(\"div\", { className: statistics_css_1.default.Statistics },\n        react_1.default.createElement(\"div\", { className: statistics_css_1.default.StatisticsHeaderWrapper },\n            react_1.default.createElement(\"h3\", { className: statistics_css_1.default.StatisticsTitle }, \"\\u0412\\u0430\\u0448\\u0430 \\u0430\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E\\u0441\\u0442\\u044C\"),\n            react_1.default.createElement(\"div\", { className: statistics_css_1.default.StatisticsDropdown })),\n        react_1.default.createElement(\"div\", { className: statistics_css_1.default.StatisticsContainer },\n            react_1.default.createElement(\"div\", { className: statistics_css_1.default.col },\n                react_1.default.createElement(\"div\", { className: statistics_css_1.default.card1 }),\n                react_1.default.createElement(\"div\", { className: statistics_css_1.default.card2 },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"115\", height: \"115\", viewBox: \"0 0 115 115\", fill: \"none\" },\n                        react_1.default.createElement(\"g\", { clipPath: \"url(#clip0_16_527)\" },\n                            react_1.default.createElement(\"path\", { d: \"M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z\", fill: \"#DC3E22\" }),\n                            react_1.default.createElement(\"path\", { d: \"M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z\", fill: \"#899441\" }),\n                            react_1.default.createElement(\"path\", { d: \"M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z\", fill: \"#A8B64F\" }),\n                            react_1.default.createElement(\"circle\", { cx: \"41.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }),\n                            react_1.default.createElement(\"g\", { filter: \"url(#filter0_f_16_527)\" },\n                                react_1.default.createElement(\"circle\", { cx: \"29.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" })),\n                            react_1.default.createElement(\"g\", { filter: \"url(#filter1_f_16_527)\" },\n                                react_1.default.createElement(\"circle\", { cx: \"85.5\", cy: \"75.5\", r: \"5.5\", fill: \"#EA8979\" })),\n                            react_1.default.createElement(\"circle\", { cx: \"73.5\", cy: \"64.5\", r: \"2.5\", fill: \"black\" }),\n                            react_1.default.createElement(\"path\", { d: \"M46 78C50 82 64.5 83 68.5 78\", stroke: \"black\" })),\n                        react_1.default.createElement(\"defs\", null,\n                            react_1.default.createElement(\"filter\", { id: \"filter0_f_16_527\", x: \"20\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" },\n                                react_1.default.createElement(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }),\n                                react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }),\n                                react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })),\n                            react_1.default.createElement(\"filter\", { id: \"filter1_f_16_527\", x: \"76\", y: \"66\", width: \"19\", height: \"19\", filterUnits: \"userSpaceOnUse\", colorInterpolationFilters: \"sRGB\" },\n                                react_1.default.createElement(\"feFlood\", { floodOpacity: \"0\", result: \"BackgroundImageFix\" }),\n                                react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"BackgroundImageFix\", result: \"shape\" }),\n                                react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"2\", result: \"effect1_foregroundBlur_16_527\" })),\n                            react_1.default.createElement(\"clipPath\", { id: \"clip0_16_527\" },\n                                react_1.default.createElement(\"rect\", { width: \"115\", height: \"115\", fill: \"white\" })))))),\n            react_1.default.createElement(\"div\", { className: statistics_css_1.default.StatisticsChart })),\n        react_1.default.createElement(\"div\", { className: statistics_css_1.default.StatisticsGrid },\n            react_1.default.createElement(\"div\", { className: statistics_css_1.default.GridItem }),\n            react_1.default.createElement(\"div\", { className: statistics_css_1.default.GridItem }),\n            react_1.default.createElement(\"div\", { className: statistics_css_1.default.GridItem }))));\n}\nexports.Statistics = Statistics;\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Statistics.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/index.ts":
/*!****************************************!*\
  !*** ./src/shared/Statistics/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Statistics */ \"./src/shared/Statistics/Statistics.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/index.ts?");

/***/ }),

/***/ "./src/shared/Statistics/statistics.css":
/*!**********************************************!*\
  !*** ./src/shared/Statistics/statistics.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Statistics\": \"statistics__Statistics--AfRtF\",\n\t\"StatisticsHeaderWrapper\": \"statistics__StatisticsHeaderWrapper--3rdYj\",\n\t\"StatisticsTitle\": \"statistics__StatisticsTitle--2wIN4\",\n\t\"StatisticsDropdown\": \"statistics__StatisticsDropdown--3QAPQ\",\n\t\"StatisticsContainer\": \"statistics__StatisticsContainer--npF_k\",\n\t\"col\": \"statistics__col--1QuIX\",\n\t\"card1\": \"statistics__card1--7YdAM\",\n\t\"card2\": \"statistics__card2--3ZtJH\",\n\t\"StatisticsChart\": \"statistics__StatisticsChart--1UhrW\",\n\t\"StatisticsGrid\": \"statistics__StatisticsGrid--1SWce\",\n\t\"GridItem\": \"statistics__GridItem--3pLWa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/statistics.css?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");\n\n//# sourceURL=webpack:///external_%22mobx%22?");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");\n\n//# sourceURL=webpack:///external_%22mobx-react%22?");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react-lite\");\n\n//# sourceURL=webpack:///external_%22mobx-react-lite%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });