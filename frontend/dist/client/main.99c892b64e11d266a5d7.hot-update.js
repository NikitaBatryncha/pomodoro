webpackHotUpdate("main",{

/***/ "./src/shared/errorBoundary.js":
/*!*************************************!*\
  !*** ./src/shared/errorBoundary.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ErrorBoundary = /** @class */ (function (_super) {\n    __extends(ErrorBoundary, _super);\n    function ErrorBoundary(props) {\n        var _this = _super.call(this, props) || this;\n        _this.state = { hasError: false };\n        return _this;\n    }\n    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {\n        this.setState({ hasError: true });\n        console.error(error, errorInfo);\n    };\n    ErrorBoundary.prototype.render = function () {\n        if (this.state.hasError) {\n            return React.createElement(\"h1\", null, \"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A.\");\n        }\n        return this.props.children;\n    };\n    return ErrorBoundary;\n}(React.Component));\nexports.default = {};\n\n\n//# sourceURL=webpack:///./src/shared/errorBoundary.js?");

/***/ })

})