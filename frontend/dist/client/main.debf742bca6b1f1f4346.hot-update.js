webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/rightSide/Timer/timer.css":
false,

/***/ "./src/shared/Content/rightSide/Timer/Timer.tsx":
/*!******************************************************!*\
  !*** ./src/shared/Content/rightSide/Timer/Timer.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Timer = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction Timer() {\n    var _a = (0, react_1.useState)(0.25), initialMinutes = _a[0], setInitialMinutes = _a[1];\n    var _b = (0, react_1.useState)(initialMinutes * 60), initialWorkTime = _b[0], setInitialWorkTime = _b[1];\n    var _c = (0, react_1.useState)(0.25 * 60), initialPauseTime = _c[0], setInitialPauseTime = _c[1];\n    var _d = (0, react_1.useState)(initialWorkTime), seconds = _d[0], setSeconds = _d[1];\n    var _e = (0, react_1.useState)(false), isActive = _e[0], setIsActive = _e[1];\n    var _f = (0, react_1.useState)(false), isCompleted = _f[0], setIsCompleted = _f[1];\n    var _g = (0, react_1.useState)('work'), timerToggle = _g[0], setTimerToggle = _g[1];\n    var _h = (0, react_1.useState)(''), id = _h[0], setId = _h[1];\n    var buttonData = (0, react_redux_1.useSelector)(function (state) { return state.data; });\n    (0, react_1.useEffect)(function () {\n        setId(buttonData.id);\n    }, [buttonData]);\n    (0, react_1.useEffect)(function () {\n        setInitialWorkTime(initialMinutes * 60);\n        setSeconds(initialMinutes * 60);\n    }, [initialMinutes]);\n    (0, react_1.useEffect)(function () {\n        if (isActive) {\n            var intervalId_1 = setInterval(function () {\n                setSeconds(function (prevSeconds) { return prevSeconds - 1; });\n            }, 1000);\n            return function () { return clearInterval(intervalId_1); };\n        }\n    }, [isActive]);\n    (0, react_1.useEffect)(function () {\n        if (seconds === 0 && timerToggle === 'work') {\n            setIsActive(false);\n            setIsCompleted(true);\n            setTimeout(function () {\n                setTimerToggle('pause');\n                setSeconds(initialPauseTime);\n                setIsCompleted(false);\n                setIsActive(true);\n            }, 3000);\n        }\n        else if (seconds === 0 && timerToggle === 'pause') {\n            setIsActive(false);\n            setTimeout(function () {\n                setIsCompleted(true);\n                setTimeout(function () {\n                    setTimerToggle('work');\n                    setSeconds(initialWorkTime);\n                    setIsCompleted(fal);\n                });\n            });\n        }\n    });\n}\nexports.Timer = Timer;\n\n\n//# sourceURL=webpack:///./src/shared/Content/rightSide/Timer/Timer.tsx?");

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
false

})