webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide sync recursive":
/*!*******************************************!*\
  !*** ./src/shared/Content/rightSide sync ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/shared/Content/rightSide sync recursive\";\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide_sync?");

/***/ }),

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Content/rightSide/Timer/timer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ../ToDoContainer/ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar timerLogic_1 = __webpack_require__(/*! ../timerLogic */ \"./src/shared/Content/rightSide/timerLogic.js\");\nfunction Timer() {\n    var initialMinutes = 0.25;\n    var initialPauseMinutes = 0.25;\n    var buttonData = (0, react_redux_1.useSelector)(function (state) { return state.data; });\n    var _a = (0, timerLogic_1.useTimerLogic)(), id = _a.id, toggleTimer = _a.toggleTimer, formatTime = _a.formatTime, startAt = _a.startAt, handlePlusMinutesClick = _a.handlePlusMinutesClick, timer = _a.timer, isActive = _a.isActive, isCompleted = _a.isCompleted, resetTimer = _a.resetTimer;\n    return (react_1.default.createElement(\"div\", { className: timer_css_1.default.Timer },\n        react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCountContainer },\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCount },\n                formatTime(timer),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.TimerButton, onClick: handlePlusMinutesClick },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\n                        react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\n                react_1.default.createElement(\"div\", { className: timer_css_1.default.TaskWrapper },\n                    react_1.default.createElement(\"span\", { className: timer_css_1.default.TaskNumber },\n                        \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \",\n                        Number(id) + 1,\n                        \" -\"),\n                    react_1.default.createElement(ToDoTask_1.ToDoTask, null))),\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.buttonWrapper },\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StartButton, onClick: toggleTimer }, !isActive ? 'Пауза' : 'Старт'),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StopButton, onClick: resetTimer }, \"\\u0421\\u0442\\u043E\\u043F\")))));\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/timerLogic.js":
/*!****************************************************!*\
  !*** ./src/shared/Content/rightSide/timerLogic.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useTimerLogic = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar module_1 = __webpack_require__(\"./src/shared/Content/rightSide sync recursive\")();\nfunction useTimerLogic(initialTime, buttonData) {\n    var _a = (0, react_1.useState)(), startAt = _a[0], setStartAt = _a[1];\n    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];\n    var _c = (0, react_1.useState)(false), isCompleted = _c[0], setIsCompleted = _c[1];\n    var _d = (0, react_1.useState)('work'), timerToggleValue = _d[0], setTimerToggleValue = _d[1];\n    var _e = (0, react_1.useState)(''), id = _e[0], setId = _e[1];\n    (0, react_1.useEffect)(function () {\n        setId(buttonData.id);\n    }, [buttonData]);\n    var now = (0, module_1.useNow)(1000, startAt);\n    var fromStart = now - (startAt !== null && startAt !== void 0 ? startAt : now);\n    var countDoun = Math.max(0, initialTime - fromStart);\n    var toggleTimer = function () {\n        if (startAt) {\n            setStartAt();\n        }\n        else {\n            setStartAt(Date.now());\n        }\n    };\n    var isCountEnd = countDoun === 0;\n    var toggleWork = function (value) {\n        setIsActive(false);\n        setIsCompleted(true);\n        setTimerToggleValue(value);\n    };\n    function plusMinutes() {\n        setStartAt(now); // Обновляем startAt, чтобы обновить countDoun\n    }\n    var handlePlusMinutesClick = function () {\n        plusMinutes();\n    };\n    var formatTime = function (time) {\n        if (time < 0) {\n            return \"00:00\";\n        }\n        var minutes = Math.floor(time / 60000);\n        var remainingMilliseconds = time % 60000;\n        return \"\".concat(minutes, \":\").concat(remainingMilliseconds < 10000 ? '0' : '').concat(remainingMilliseconds);\n    };\n    var resetTimer = function () {\n        setIsActive(false);\n        setIsCompleted(false);\n        setStartAt(); // Сбрасываем startAt\n    };\n    (0, react_1.useEffect)(function () {\n        if (isCountEnd && timerToggleValue === 'work') {\n            console.log(\"let's get some rest\");\n            toggleWork('pause');\n        }\n        else if (countDoun === 0 && timerToggleValue === 'pause') {\n            console.log(\"let's work\");\n            toggleWork('work');\n        }\n    }, [isCountEnd, timerToggleValue, countDoun]);\n    var timer = Math.ceil(countDoun / 1000);\n    return {\n        id: id,\n        toggleTimer: toggleTimer,\n        formatTime: formatTime,\n        startAt: startAt,\n        handlePlusMinutesClick: handlePlusMinutesClick,\n        timer: timer,\n        isActive: isActive,\n        isCompleted: isCompleted,\n        resetTimer: resetTimer\n    };\n}\nexports.useTimerLogic = useTimerLogic;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/timerLogic.js?");

/***/ })

})