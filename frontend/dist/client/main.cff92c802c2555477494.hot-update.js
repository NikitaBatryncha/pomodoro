webpackHotUpdate("main",{

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar timer_css_1 = __importDefault(__webpack_require__(/*! ./timer.css */ \"./src/shared/Content/rightSide/Timer/timer.css\"));\nvar ToDoTask_1 = __webpack_require__(/*! ../ToDoContainer/ToDoTask */ \"./src/shared/Content/rightSide/ToDoContainer/ToDoTask/index.ts\");\nfunction Timer() {\n    var _a = (0, react_1.useState)(0.25), initialMinutes = _a[0], setInitialMinutes = _a[1];\n    var _b = (0, react_1.useState)(initialMinutes * 60), initialWorkTime = _b[0], setInitialWorkTime = _b[1];\n    var _c = (0, react_1.useState)(0.25 * 60), initialPauseTime = _c[0], setInitialPauseTime = _c[1];\n    var _d = (0, react_1.useState)(initialWorkTime), seconds = _d[0], setSeconds = _d[1];\n    var _e = (0, react_1.useState)(false), isActive = _e[0], setIsActive = _e[1];\n    var _f = (0, react_1.useState)(false), isCompleted = _f[0], setIsCompleted = _f[1];\n    var _g = (0, react_1.useState)('work'), timerToggle = _g[0], setTimerToggle = _g[1];\n    (0, react_1.useEffect)(function () {\n        setInitialWorkTime(initialMinutes * 60);\n        setSeconds(initialMinutes * 60);\n    }, [initialMinutes]);\n    (0, react_1.useEffect)(function () {\n        if (isActive) {\n            var intervalId_1 = setInterval(function () {\n                setSeconds(function (prevSeconds) { return prevSeconds - 1; });\n            }, 1000);\n            return function () { return clearInterval(intervalId_1); };\n        }\n    }, [isActive]);\n    (0, react_1.useEffect)(function () {\n        if (seconds === 0 && timerToggle === 'work') {\n            setIsActive(false);\n            setIsCompleted(true);\n            setTimeout(function () {\n                setTimerToggle('pause');\n                setSeconds(initialPauseTime);\n                setIsCompleted(false);\n                setIsActive(true);\n            }, 3000);\n        }\n        else if (seconds === 0 && timerToggle === 'pause') {\n            setIsActive(false);\n            setTimeout(function () {\n                setIsCompleted(true);\n                setTimeout(function () {\n                    setTimerToggle('work');\n                    setSeconds(initialWorkTime);\n                    setIsCompleted(false);\n                    setIsActive(true);\n                }, 3000);\n            }, 4000);\n        }\n    }, [seconds, timerToggle, initialPauseTime, initialWorkTime]);\n    function plusMinutes() {\n        requestAnimationFrame(function () {\n            setInitialMinutes(function (prevMinutes) { return prevMinutes + 1; });\n            var newInitialMinutes = initialMinutes + 1;\n            setInitialWorkTime(newInitialMinutes * 60);\n            setSeconds(newInitialMinutes * 60);\n        });\n    }\n    function handlePlusMinutesClick() {\n        plusMinutes();\n    }\n    var toggleTimer = function () {\n        setIsActive(!isActive);\n    };\n    var resetTimer = function () {\n        setIsActive(false);\n        setIsCompleted(false);\n        setSeconds(initialWorkTime);\n    };\n    var formatTime = function (time) {\n        var minutes = Math.floor(time / 60);\n        var remainingSeconds = time % 60;\n        return \"\".concat(minutes, \":\").concat(remainingSeconds < 10 ? '0' : '').concat(remainingSeconds);\n    };\n    return (react_1.default.createElement(\"div\", { className: timer_css_1.default.Timer },\n        react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCountContainer },\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.TimerCount },\n                formatTime(seconds),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.TimerButton, onClick: handlePlusMinutesClick },\n                    react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\n                        react_1.default.createElement(\"circle\", { cx: \"25\", cy: \"25\", r: \"25\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z\", fill: \"white\" }))),\n                react_1.default.createElement(\"div\", { className: timer_css_1.default.TaskWrapper },\n                    react_1.default.createElement(\"span\", { className: timer_css_1.default.TaskNumber }, \"\\u0417\\u0430\\u0434\\u0430\\u0447\\u0430 1 -\"),\n                    react_1.default.createElement(ToDoTask_1.ToDoTask, null))),\n            react_1.default.createElement(\"div\", { className: timer_css_1.default.buttonWrapper },\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StartButton, onClick: toggleTimer }, isActive ? 'Пауза' : 'Старт'),\n                react_1.default.createElement(\"button\", { className: timer_css_1.default.StopButton, onClick: resetTimer }, \"\\u0421\\u0442\\u043E\\u043F\")))));\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

/***/ }),

/***/ "./src/shared/Content/rightSide/Timer/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Timer */ \"./src/shared/Content/rightSide/Timer/Timer.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/index.ts?");

/***/ })

})