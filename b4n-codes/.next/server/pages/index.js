"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderElements */ "./pages/components/HeaderElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "I:\\Github\\Solo-Projects\\b4n-codes\\pages\\components\\Header.js";



const Header = () => {
  let elements = [['index.js', 'Frontpage'], ['uploadedFiles', 'Projects Uploaded'], ['uploadfiles', 'Upload Project'], ['cv', 'CV']];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
    className: "nav",
    children: elements.map(element => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_HeaderElements__WEBPACK_IMPORTED_MODULE_0__.default, {
      arr: element
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./pages/components/HeaderElements.js":
/*!********************************************!*\
  !*** ./pages/components/HeaderElements.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "I:\\Github\\Solo-Projects\\b4n-codes\\pages\\components\\HeaderElements.js";



const HeaderElements = ({
  arr
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: arr[0],
        children: arr[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderElements);

/***/ }),

/***/ "./pages/components/Main.js":
/*!**********************************!*\
  !*** ./pages/components/Main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "I:\\Github\\Solo-Projects\\b4n-codes\\pages\\components\\Main.js";


const Main = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ "./pages/components/Header.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main */ "./pages/components/Main.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "I:\\Github\\Solo-Projects\\b4n-codes\\pages\\index.js";





function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "HER ER MAIN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ3JCLE1BQUlDLFFBQVEsR0FBRyxDQUFDLENBQUMsVUFBRCxFQUFZLFdBQVosQ0FBRCxFQUEwQixDQUFDLGVBQUQsRUFBa0IsbUJBQWxCLENBQTFCLEVBQWtFLENBQUMsYUFBRCxFQUFnQixnQkFBaEIsQ0FBbEUsRUFBcUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFyRyxDQUFmO0FBRUUsc0JBQ0E7QUFBSSxhQUFTLEVBQUMsS0FBZDtBQUFBLGNBQ0dBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxPQUFELGlCQUNWLDhEQUFDLG9EQUFEO0FBQWdCLFNBQUcsRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQU9ELENBVkQ7O0FBWUEsaUVBQWVILE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsTUFBTUQsY0FBYyxHQUFHLENBQUM7QUFBQ0ssRUFBQUE7QUFBRCxDQUFELEtBQVc7QUFFOUIsc0JBQ0k7QUFBQSwyQkFDSjtBQUFBLDZCQUNFO0FBQUcsWUFBSSxFQUFFQSxHQUFHLENBQUMsQ0FBRCxDQUFaO0FBQUEsa0JBQWtCQSxHQUFHLENBQUMsQ0FBRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURJLG1CQURKO0FBT0gsQ0FURDs7QUFXQSxpRUFBZUwsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLE1BQU1NLElBQUksR0FBRyxDQUFDO0FBQUNDLEVBQUFBO0FBQUQsQ0FBRCxLQUFlO0FBRXhCLHNCQUNJO0FBQUEsY0FDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQVBEOztBQVNBLGlFQUFlRCxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7OztBQUtBLFNBQVNFLFFBQVQsR0FBb0I7QUFDaEIsc0JBQ0k7QUFBQSw0QkFDQSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQSw4REFBQyxxREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBO0FBQUEsa0JBREo7QUFRRDs7QUFFRCxpRUFBZUEsUUFBZjs7Ozs7Ozs7OztBQ2pCRiIsInNvdXJjZXMiOlsid2VicGFjazovL2I0bi1jb2Rlcy8uL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2I0bi1jb2Rlcy8uL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYjRuLWNvZGVzLy4vcGFnZXMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2I0bi1jb2Rlcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2I0bi1jb2Rlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXJFbGVtZW50cyBmcm9tIFwiLi9IZWFkZXJFbGVtZW50c1wiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxubGV0IGVsZW1lbnRzID0gW1snaW5kZXguanMnLCdGcm9udHBhZ2UnXSxbJ3VwbG9hZGVkRmlsZXMnLCAnUHJvamVjdHMgVXBsb2FkZWQnXSwgWyd1cGxvYWRmaWxlcycsICdVcGxvYWQgUHJvamVjdCddLCBbJ2N2JywgJ0NWJ11dO1xyXG5cclxuICByZXR1cm4gKCBcclxuICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICB7ZWxlbWVudHMubWFwKChlbGVtZW50KSA9PihcclxuICAgICAgICA8SGVhZGVyRWxlbWVudHMgYXJyPXtlbGVtZW50fS8+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiXHJcblxyXG5jb25zdCBIZWFkZXJFbGVtZW50cyA9ICh7YXJyfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgIDxsaT5cclxuICAgICAgPGEgaHJlZj17YXJyWzBdfT57YXJyWzFdfTwvYT5cclxuICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckVsZW1lbnRzOyIsIlxyXG5cclxuY29uc3QgTWFpbiA9ICh7Y2hpbGRyZW59KSA9PntcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluOyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vY29tcG9uZW50cy9NYWluJztcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8TWFpbj5cclxuICAgICAgICAgICAgPHA+SEVSIEVSIE1BSU48L3A+XHJcbiAgICAgICAgPC9NYWluPlxyXG4gICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiSGVhZGVyRWxlbWVudHMiLCJIZWFkZXIiLCJlbGVtZW50cyIsIm1hcCIsImVsZW1lbnQiLCJhcnIiLCJNYWluIiwiY2hpbGRyZW4iLCJIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=