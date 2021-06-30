(self["webpackChunkproject_2021_a"] = self["webpackChunkproject_2021_a"] || []).push([["async_components_vendors"],{

/***/ "./src/client/asyncComponents/Countdown/AsyncCountdown.js":
/*!****************************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/AsyncCountdown.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
 // Countdown component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
  return __webpack_require__.e(/*! import() | countdown */ "async_components_vendors").then(__webpack_require__.bind(__webpack_require__, /*! ./Countdown */ "./src/client/asyncComponents/Countdown/Countdown.js"));
}, {
  noSsr: true
}));

/***/ }),

/***/ "./src/client/asyncComponents/Countdown/Countdown.js":
/*!***********************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/Countdown.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Headline/Headline */ "./src/client/shared/Headline/Headline.js");



function getDateDifference(date2, date1) {
  var _MS_PER_DAY = 1000 * 60 * 60 * 24; // Discard the time and time-zone information.


  var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

var todayDate = new Date();
var nextYear = todayDate.getFullYear() + 1;
var nextYearDate = new Date("".concat(nextYear, "-01-01"));
var dateDifference = getDateDifference(nextYearDate, todayDate);

function Countdown() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Headline_Headline__WEBPACK_IMPORTED_MODULE_1__.default, null, "Count down to ".concat(nextYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "".concat(dateDifference, " days")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);

/***/ }),

/***/ "./src/client/asyncComponents/Countdown/index.js":
/*!*******************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncCountdown */ "./src/client/asyncComponents/Countdown/AsyncCountdown.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ })

}]);
//# sourceMappingURL=async_components_vendors.20374df816ee0a2d8527.js.map