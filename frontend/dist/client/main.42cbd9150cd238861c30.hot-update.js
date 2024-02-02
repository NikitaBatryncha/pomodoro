webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Content/rightSide/Timer/timer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ../ToDoContainer/ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar timerLogic_1 = __webpack_require__(/*! ../timerLogic */ \"./src/shared/Content/rightSide/timerLogic.js\");\nfunction Timer() {\n    var initialMinutes = 0.25;\n    var initialPauseMinutes = 0.25;\n    var buttonData = (0, react_redux_1.useSelector)(function (state) { return state.data; });\n    var _a = (0, timerLogic_1.useTimerLogic)(initialMinutes, initialPauseMinutes, buttonData), seconds = _a.seconds, isActive = _a.isActive, isCompleted = _a.isCompleted, timerToggle = _a.timerToggle, id = _a.id, handlePlusMinutesClick = _a.handlePlusMinutesClick, toggleTimer = _a.toggleTimer, resetTimer = _a.resetTimer, formatTime = _a.formatTime;\n    return (react_1.default.createElement(\"div\", { className: timer_css_1.default.Timer },\n        react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCountContainer },\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCount },\n                formatTime(seconds),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.TimerButton, onClick: handlePlusMinutesClick },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\n                        react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\n                react_1.default.createElement(\"div\", { className: timer_css_1.default.TaskWrapper },\n                    react_1.default.createElement(\"span\", { className: timer_css_1.default.TaskNumber },\n                        \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 \",\n                        Number(id) + 1,\n                        \" -\"),\n                    react_1.default.createElement(ToDoTask_1.ToDoTask, null))),\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.buttonWrapper },\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StartButton, onClick: toggleTimer }, isActive ? 'Пауза' : 'Старт'),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StopButton, onClick: resetTimer }, \"\\u0421\\u0442\\u043E\\u043F\")))));\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/timerLogic.js":
/*!****************************************************!*\
  !*** ./src/shared/Content/rightSide/timerLogic.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useTimerLogic = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useTimerLogic() {\n    var _a = (0, react_1.useState)(), startAt = _a[0], setStartAt = _a[1];\n    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];\n    var _c = (0, react_1.useState)(false), isCompleted = _c[0], setIsCompleted = _c[1];\n    var _d = (0, react_1.useState)('work'), timerToggleValue = _d[0], setTimerToggleValue = _d[1];\n    //определяю now\n    var now = useNow(1000, startAt);\n    var fromStart = now - (startAt !== null && startAt !== void 0 ? startAt : now);\n    var countDoun = Math.max(0, 60000 - fromStart);\n    // ставлю выключатель\n    var toggleTimer = function () {\n        if (startAt) {\n            setStartAt();\n        }\n        else {\n            setStartAt(Date.now());\n        }\n    };\n    //определяю окончание таймера\n    var isCountEnd = countDoun === 0;\n    (0, react_1.useEffect)(function () {\n        if (isCountEnd && timerToggleValue === 'work') {\n            console.log(\"let's get some rest nigga\");\n            setIsActive(false);\n            setIsCompleted(true);\n            setTimerToggleValue('pause');\n        }\n        else if (seconds === 0 && timerToggleValue === 'pause') {\n            setIsActive(false);\n            setIsCompleted(true);\n            setTimerToggleValue('pause');\n        }\n    }, [isCountEnd]);\n    // const [initialWorkTime, setInitialWorkTime] = useState(initialMinutes * 60);\n    // const [initialPauseTime, setInitialPauseTime] = useState(initialPauseMinutes * 60);\n    // const [seconds, setSeconds] = useState(initialWorkTime);\n    // const [isActive, setIsActive] = useState(false);\n    // const [isCompleted, setIsCompleted] = useState(false);\n    // const [timerToggle, setTimerToggle] = useState('work');\n    // const [id, setId] = useState('');\n    // useEffect(() => {\n    //   setId(buttonData.id);\n    // }, [buttonData]);\n    // useEffect(() => {\n    //   setInitialWorkTime(initialMinutes * 60);\n    //   setSeconds(initialMinutes * 60);\n    // }, [initialMinutes]);\n    // useEffect(() => {\n    //   if (isActive) {\n    //     const intervalId = setInterval(() => {\n    //       setSeconds((prevSeconds) => prevSeconds - 1);\n    //     }, 1000);\n    //     return () => clearInterval(intervalId);\n    //   }\n    // }, [isActive]);\n    // useEffect(() => {\n    //   if (seconds === 0 && timerToggle === 'work') {\n    //     setIsActive(false);\n    //     setIsCompleted(true);\n    //     setTimeout(() => {\n    //       setTimerToggle('pause');\n    //       setSeconds(initialPauseTime);\n    //       setIsCompleted(false);\n    //       setIsActive(true);\n    //     }, 3000);\n    //   } else if (seconds === 0 && timerToggle === 'pause') {\n    //     setIsActive(false);\n    //     setTimeout(() => {\n    //       setIsCompleted(true);\n    //       setTimeout(() => {\n    //         setTimerToggle('work');\n    //         setSeconds(initialWorkTime);\n    //         setIsCompleted(false);\n    //         setIsActive(true);\n    //       }, 3000);\n    //     }, 4000);\n    //   }\n    // }, [seconds, timerToggle, initialPauseTime, initialWorkTime]);\n    // function plusMinutes() {\n    //   requestAnimationFrame(() => {\n    //     setInitialWorkTime((prevWorkTime) => prevWorkTime + 60);\n    //     setSeconds((prevSeconds) => prevSeconds + 60);\n    //   });\n    // }\n    // function handlePlusMinutesClick() {\n    //   plusMinutes();\n    // }\n    // const toggleTimer = () => {\n    //   setIsActive(!isActive);\n    // };\n    // const resetTimer = () => {\n    //   setIsActive(false);\n    //   setIsCompleted(false);\n    //   setSeconds(initialWorkTime);\n    // };\n    // const formatTime = (time) => {\n    //   if (time < 0) {\n    //     return \"00:00\";\n    //   }\n    //   const minutes = Math.floor(time / 60);\n    //   const remainingSeconds = time % 60;\n    //   return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;\n    // };\n    // return {\n    //   seconds,\n    //   isActive,\n    //   isCompleted,\n    //   timerToggle,\n    //   id,\n    //   handlePlusMinutesClick,\n    //   toggleTimer,\n    //   resetTimer,\n    //   formatTime,\n    // };\n}\nexports.useTimerLogic = useTimerLogic;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/timerLogic.js?");

/***/ })

})