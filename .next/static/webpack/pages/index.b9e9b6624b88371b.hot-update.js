"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./context/MovieContext.ts":
/*!*********************************!*\
  !*** ./context/MovieContext.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieContext\": function() { return /* binding */ MovieContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    movies: [],\n    bookmarkedMovies: [],\n    search: \"\",\n    fetchMovies: ()=>null,\n    handleSearch: ()=>null,\n    handleBookmark: ()=>null,\n    handleWatched: ()=>null,\n    removeBookmark: ()=>null,\n    removeWatched: ()=>null\n};\nconst MovieContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L01vdmllQ29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUU7QUFlekUsTUFBTUUsZUFBZTtJQUNuQkMsUUFBUSxFQUFFO0lBQ1ZDLGtCQUFrQixFQUFFO0lBQ3BCQyxRQUFRO0lBQ1JDLGFBQWEsSUFBTSxJQUFJO0lBQ3ZCQyxjQUFjLElBQU0sSUFBSTtJQUN4QkMsZ0JBQWdCLElBQU0sSUFBSTtJQUMxQkMsZUFBZSxJQUFNLElBQUk7SUFDekJDLGdCQUFnQixJQUFNLElBQUk7SUFDMUJDLGVBQWUsSUFBTSxJQUFJO0FBQzNCO0FBRU8sTUFBTUMsZUFBZVgsb0RBQWFBLENBQW9CQyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvTW92aWVDb250ZXh0LnRzPzZiNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb3ZpZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG50eXBlIE1vdmllQ29udGV4dFR5cGVzID0ge1xuICBtb3ZpZXM6IE1vdmllVHlwZVtdIHwgbnVsbDtcbiAgYm9va21hcmtlZE1vdmllczogTW92aWVUeXBlW10gfCBudWxsO1xuICBzZWFyY2g6IHN0cmluZztcbiAgZmV0Y2hNb3ZpZXM6ICgpID0+IHZvaWQ7XG4gIGhhbmRsZVNlYXJjaDogKCkgPT4gdm9pZDtcbiAgaGFuZGxlQm9vbWFyazogKHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxbTW92aWVUeXBlXT4pID0+IHZvaWQ7XG4gIGhhbmRsZVdhdGNoZWQ6ICh2YWx1ZTogU2V0U3RhdGVBY3Rpb248W01vdmllVHlwZV0+KSA9PiB2b2lkO1xuICByZW1vdmVCb29rbWFyazogKCkgPT4gdm9pZDtcbiAgcmVtb3ZlV2F0Y2hlZDogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbW92aWVzOiBbXSxcbiAgYm9va21hcmtlZE1vdmllczogW10sXG4gIHNlYXJjaDogXCJcIixcbiAgZmV0Y2hNb3ZpZXM6ICgpID0+IG51bGwsXG4gIGhhbmRsZVNlYXJjaDogKCkgPT4gbnVsbCxcbiAgaGFuZGxlQm9va21hcms6ICgpID0+IG51bGwsXG4gIGhhbmRsZVdhdGNoZWQ6ICgpID0+IG51bGwsXG4gIHJlbW92ZUJvb2ttYXJrOiAoKSA9PiBudWxsLFxuICByZW1vdmVXYXRjaGVkOiAoKSA9PiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IE1vdmllQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TW92aWVDb250ZXh0VHlwZXM+KGluaXRpYWxTdGF0ZSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibW92aWVzIiwiYm9va21hcmtlZE1vdmllcyIsInNlYXJjaCIsImZldGNoTW92aWVzIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQm9va21hcmsiLCJoYW5kbGVXYXRjaGVkIiwicmVtb3ZlQm9va21hcmsiLCJyZW1vdmVXYXRjaGVkIiwiTW92aWVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/MovieContext.ts\n"));

/***/ })

});