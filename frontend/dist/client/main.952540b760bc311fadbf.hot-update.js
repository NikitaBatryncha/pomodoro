webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Content/rightSide/Timer/timer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ../ToDoContainer/ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar timerLogic_1 = __webpack_require__(/*! ../timerLogic */ \"./src/shared/Content/rightSide/timerLogic.js\");\nfunction Timer() {\n    var initialMinutes = 0.25;\n    var initialPauseMinutes = 0.25;\n    var buttonData = (0, react_redux_1.useSelector)(function (state) { return state.data; });\n    var _a = (0, timerLogic_1.useTimerLogic)(), id = _a.id, toggleTimer = _a.toggleTimer, startAt = _a.startAt, handlePlusMinutesClick = _a.handlePlusMinutesClick;\n    return (react_1.default.createElement(\"div\", { className: timer_css_1.default.Timer },\n        react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCountContainer },\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCount },\n                formatTime(seconds),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.TimerButton, onClick: handlePlusMinutesClick },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\n                        react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\n                react_1.default.createElement(\"div\", { className: timer_css_1.default.TaskWrapper },\n                    react_1.default.createElement(\"span\", { className: timer_css_1.default.TaskNumber },\n                        \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \",\n                        Number(id) + 1,\n                        \" -\"),\n                    react_1.default.createElement(ToDoTask_1.ToDoTask, null))),\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.buttonWrapper },\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StartButton, onClick: toggleTimer }, startAt ? 'Пауза' : 'Старт'),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StopButton, onClick: resetTimer }, \"\\u0421\\u0442\\u043E\\u043F\")))));\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/timerLogic.js":
/*!****************************************************!*\
  !*** ./src/shared/Content/rightSide/timerLogic.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (51:39)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|         }\\n|     }, [isCountEnd]);\\n>     var timer = Math.floor(fromStart / );\\n|     return {\\n|         toggleTimer: toggleTimer,\");\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/timerLogic.js?");

/***/ })

})