webpackHotUpdate("main",{

/***/ "./node_modules/chart.js/auto/auto.mjs":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/auto/auto.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_chart_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/chart.mjs */ \"./node_modules/chart.js/dist/chart.mjs\");\n\n\n_dist_chart_mjs__WEBPACK_IMPORTED_MODULE_0__[\"Chart\"].register(..._dist_chart_mjs__WEBPACK_IMPORTED_MODULE_0__[\"registerables\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_dist_chart_mjs__WEBPACK_IMPORTED_MODULE_0__[\"Chart\"]);\n\n\n//# sourceURL=webpack:///./node_modules/chart.js/auto/auto.mjs?");

/***/ }),

/***/ "./src/shared/Statistics/TestChart/TestChart.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Statistics/TestChart/TestChart.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TestChart = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar auto_1 = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\nvar react_chartjs_2_1 = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\nvar UserData = [\n    {\n        id: 1,\n        year: 2016,\n        userGain: 80000,\n        userLost: 823,\n    },\n    {\n        id: 2,\n        year: 2017,\n        userGain: 45677,\n        userLost: 345,\n    },\n    {\n        id: 3,\n        year: 2018,\n        userGain: 78888,\n        userLost: 555,\n    },\n    {\n        id: 4,\n        year: 2019,\n        userGain: 90000,\n        userLost: 4555,\n    },\n    {\n        id: 5,\n        year: 2020,\n        userGain: 4300,\n        userLost: 234,\n    },\n];\nfunction TestChart() {\n    auto_1.Chart.register(auto_1.ArcElement, auto_1.Tooltip, auto_1.Legend);\n    var _a = (0, react_1.useState)({\n        labels: UserData.map(function (data) { return data.year; }),\n        datasets: [\n            {\n                label: \"Users Gained\",\n                data: UserData.map(function (data) { return data.userGain; }),\n                backgroundColor: [\n                    \"rgba(75,192,192,1)\",\n                    \"#ecf0f1\",\n                    \"#50AF95\",\n                    \"#f3ba2f\",\n                    \"#2a71d0\",\n                ],\n                borderColor: \"black\",\n                borderWidth: 2,\n            },\n        ],\n    }), userData = _a[0], setUserData = _a[1];\n    return (react_1.default.createElement(react_chartjs_2_1.Doughnut, { data: userData }));\n}\nexports.TestChart = TestChart;\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/TestChart/TestChart.tsx?");

/***/ }),

/***/ "./src/shared/Statistics/TestChart/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/Statistics/TestChart/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./TestChart */ \"./src/shared/Statistics/TestChart/TestChart.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Statistics/TestChart/index.ts?");

/***/ })

})