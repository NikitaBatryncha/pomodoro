webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Content/rightSide/Timer/timer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ../ToDoContainer/ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction Timer() {\n    var initialMinutes = 0.25;\n    var initialPauseMinutes = 0.25;\n    var buttonData = (0, react_redux_1.useSelector)(function (state) { return state.data; });\n    // const {\n    //   seconds,\n    //   isActive,\n    //   isCompleted,\n    //   timerToggle,\n    //   id,\n    //   handlePlusMinutesClick,\n    //   toggleTimer,\n    //   resetTimer,\n    //   formatTime,\n    // } = useTimerLogic(initialMinutes, initialPauseMinutes, buttonData);\n    return (react_1.default.createElement(\"div\", { className: timer_css_1.default.Timer },\n        react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCountContainer },\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCount },\n                formatTime(seconds),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.TimerButton, onClick: handlePlusMinutesClick },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\n                        react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\n                react_1.default.createElement(\"div\", { className: timer_css_1.default.TaskWrapper },\n                    react_1.default.createElement(\"span\", { className: timer_css_1.default.TaskNumber },\n                        \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \",\n                        Number(id) + 1,\n                        \" -\"),\n                    react_1.default.createElement(ToDoTask_1.ToDoTask, null))),\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.buttonWrapper },\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StartButton, onClick: toggleTimer }, isActive ? 'Пауза' : 'Старт'),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StopButton, onClick: resetTimer }, \"\\u0421\\u0442\\u043E\\u043F\")))));\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

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

/***/ "./src/shared/Content/rightSide/timerLogic.js":
false

})