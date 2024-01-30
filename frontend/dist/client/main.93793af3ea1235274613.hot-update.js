webpackHotUpdate("main",{

/***/ "./src/shared/Statistics/Test/BarChart.jsx":
/*!*************************************************!*\
  !*** ./src/shared/Statistics/Test/BarChart.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BarChart = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar react_chartjs_2_1 = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\nvar ________1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'срфкеюоы'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar react_chartjs_2_2 = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n________1.Chart.register(react_chartjs_2_2.CategoryScale, react_chartjs_2_2.LinearScale, react_chartjs_2_2.BarController, react_chartjs_2_2.BarElement);\nfunction BarChart(_a) {\n    var chartData = _a.chartData;\n    return react_1.default.createElement(react_chartjs_2_1.Bar, { data: chartData });\n}\nexports.BarChart = BarChart;\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Test/BarChart.jsx?");

/***/ }),

/***/ "./src/shared/Statistics/Test/index.js":
/*!*********************************************!*\
  !*** ./src/shared/Statistics/Test/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./BarChart */ \"./src/shared/Statistics/Test/BarChart.jsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/Test/index.js?");

/***/ })

})