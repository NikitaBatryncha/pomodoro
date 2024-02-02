webpackHotUpdate("main",{

/***/ "./src/hooks/useNow.js":
/*!*****************************!*\
  !*** ./src/hooks/useNow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useNow = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction useNow(interval, enabled, cb) {\n    var cbRef = (0, react_1.useRef)(cb);\n    cbRef.current = cb;\n    var _a = (0, react_1.useState)(Date.now()), now = _a[0], setNow = _a[1];\n    (0, react_1.useLayoutEffect)(function () {\n        var _a;\n        if (!enabled) {\n            return;\n        }\n        setNow(Date.now());\n        (_a = cbRef.current) === null || _a === void 0 ? void 0 : _a.call(cbRef, Date.now());\n        var int = setInterval(function () {\n            var _a;\n            setNow(Date.now());\n            (_a = cbRef.current) === null || _a === void 0 ? void 0 : _a.call(cbRef, Date.now());\n        }, interval);\n        return function () {\n            clearInterval(int);\n        };\n    }, [interval, enabled]);\n    return now;\n}\nexports.useNow = useNow;\n\n\n//# sourceURL=webpack:///./src/hooks/useNow.js?");

/***/ })

})