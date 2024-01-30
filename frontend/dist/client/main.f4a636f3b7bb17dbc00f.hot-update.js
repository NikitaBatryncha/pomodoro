webpackHotUpdate("main",{

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar reducers_1 = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\nvar reportWebVitals_1 = __importDefault(__webpack_require__(/*! ../reportWebVitals */ \"./src/reportWebVitals.js\"));\nwindow.addEventListener('load', function () {\n    ReactDom.hydrate(React.createElement(react_redux_1.Provider, { store: reducers_1.store },\n        React.createElement(App_1.App, null)), document.getElementById(\"react_root\"));\n});\n(0, reportWebVitals_1.default)();\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar styles = __importStar(__webpack_require__(/*! ../main.global.css */ \"./src/main.global.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nvar Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\nvar Registration_1 = __webpack_require__(/*! ./Registration */ \"./src/shared/Registration/index.ts\");\nvar Login_1 = __webpack_require__(/*! ./Login */ \"./src/shared/Login/index.ts\");\nvar Statistics_1 = __webpack_require__(/*! ./Statistics */ \"./src/shared/Statistics/index.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar index_1 = __webpack_require__(/*! ../reducers/index */ \"./src/reducers/index.js\");\nvar user_1 = __webpack_require__(/*! ../actions/user */ \"./src/actions/user.js\");\nvar Placeholder_1 = __webpack_require__(/*! ./Placeholder */ \"./src/shared/Placeholder/index.ts\");\nvar dataContext_1 = __webpack_require__(/*! ../context/dataContext */ \"./src/context/dataContext.js\");\nvar errorBoundary_1 = __webpack_require__(/*! ./errorBoundary */ \"./src/shared/errorBoundary.js\");\nfunction AppComponent() {\n    var isAuth = (0, react_redux_1.useSelector)(function (state) { return state.user.isAuth; });\n    var signedUp = (0, react_redux_1.useSelector)(function (state) { return state.user.signedUp; });\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        dispatch((0, user_1.auth)());\n        dispatch((0, user_1.registration)());\n        setMounted(true);\n    }, []);\n    return (react_1.default.createElement(react_redux_1.Provider, { store: index_1.store }, mounted && (react_1.default.createElement(react_router_dom_1.MemoryRouter, null,\n        react_1.default.createElement(\"div\", { className: styles.App },\n            react_1.default.createElement(Header_1.Header, { ContainerStyle: styles.MainContainer }),\n            !isAuth &&\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/main\", element: react_1.default.createElement(Placeholder_1.Placeholder, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/registration\", element: react_1.default.createElement(Registration_1.Registration, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/login\", element: react_1.default.createElement(Login_1.Login, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/*\", element: react_1.default.createElement(Placeholder_1.Placeholder, null) })),\n            isAuth &&\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/main\", element: react_1.default.createElement(Content_1.Content, null) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/statistics\", element: react_1.default.createElement(dataContext_1.DataProvider, null,\n                            react_1.default.createElement(Statistics_1.Statistics, null)) }),\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/*\", element: react_1.default.createElement(Content_1.Content, null) })),\n            signedUp &&\n                react_1.default.createElement(react_router_dom_1.Routes, null,\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/registration\", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: \"/login\" }) })))))));\n}\nexports.App = (0, root_1.hot)(function () {\n    return react_1.default.createElement(errorBoundary_1.ErrorBoundary, null,\n        react_1.default.createElement(react_redux_1.Provider, { store: index_1.store },\n            react_1.default.createElement(AppComponent, null)));\n});\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ })

})