webpackHotUpdate("main",{

/***/ "./src/hooks/useNow.js":
/*!*****************************!*\
  !*** ./src/hooks/useNow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (6:40)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| var react_1 = require(\\\"react\\\");\\n| function useNow(interval, enabled, cb) {\\n>     var _a = (0, react_1.useState)(Date.), now = _a[0], setNow = _a[1];\\n|     (0, react_1.useEffect)(function () {\\n|         if (!enabled) {\");\n\n//# sourceURL=webpack:///./src/hooks/useNow.js?");

/***/ }),

/***/ "./src/shared/Content/rightSide/timerLogic.js":
/*!****************************************************!*\
  !*** ./src/shared/Content/rightSide/timerLogic.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useTimerLogic = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar useNow_1 = __webpack_require__(/*! ../../../hooks/useNow */ \"./src/hooks/useNow.js\");\nfunction useTimerLogic(initialMinutes, initialPauseMinutes) {\n    var _a = (0, react_1.useState)(null), startAt = _a[0], setStartAt = _a[1];\n    var _b = (0, react_1.useState)(false), isActive = _b[0], setIsActive = _b[1];\n    var _c = (0, react_1.useState)(false), isCompleted = _c[0], setIsCompleted = _c[1];\n    var _d = (0, react_1.useState)('work'), timerToggleValue = _d[0], setTimerToggleValue = _d[1];\n    var _e = (0, react_1.useState)(0), initialTimer = _e[0], setInitialTimer = _e[1];\n    var initialTime = timerToggleValue === 'work' ? initialMinutes : initialPauseMinutes;\n    var now = (0, useNow_1.useNow)(1000, startAt);\n    var fromStart = now - (startAt !== null && startAt !== void 0 ? startAt : now);\n    var timer = fromStart + initialTimer;\n    var countDown = Number(initialMinutes - timer);\n    var toggleTimer = function () {\n        if (startAt) {\n            setIsActive(!startAt);\n            setInitialTimer(timer);\n            setStartAt();\n            setIsCompleted(false);\n        }\n        else {\n            setStartAt(Date.now());\n        }\n    };\n    var formatTime = function (time) {\n        if (time < 0) {\n            return \"00:00\";\n        }\n        else if (typeof time !== 'number' || isNaN(time)) {\n            return countDown;\n        }\n        var minutes = Math.floor(time / 60);\n        var remainingMilliseconds = time % 60;\n        return \"\".concat(minutes < 10 ? \"0\".concat(minutes) : minutes, \":\").concat(remainingMilliseconds < 10 ? '0' : '').concat(remainingMilliseconds);\n    };\n    var isCountEnd = countDown === 0;\n    (0, react_1.useEffect)(function () {\n        if (isCountEnd) {\n            console.log('count down');\n        }\n    }, [isCountEnd]);\n    function plusMinutes() {\n        if (!isActive) {\n            setStartAt(function (prevStartAt) {\n                var newStartAt = prevStartAt !== null && prevStartAt !== void 0 ? prevStartAt : Date.now();\n                var newTime = newStartAt + 60000;\n                return newTime;\n            });\n        }\n    }\n    var handlePlusMinutesClick = function () {\n        plusMinutes();\n    };\n    return {\n        formatTime: formatTime,\n        countDown: countDown,\n        handlePlusMinutesClick: handlePlusMinutesClick,\n        toggleTimer: toggleTimer,\n        isActive: isActive\n    };\n}\nexports.useTimerLogic = useTimerLogic;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/timerLogic.js?");

/***/ })

})