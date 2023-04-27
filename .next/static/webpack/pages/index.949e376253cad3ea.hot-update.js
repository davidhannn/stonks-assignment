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

/***/ "./components/movie-card.tsx":
/*!***********************************!*\
  !*** ./components/movie-card.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\nconst MovieCard = (param)=>{\n    let { Title , Year , imdbID , Type , Poster  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        maxW: \"sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: Poster,\n                        alt: \"Green double couch with wooden legs\",\n                        borderRadius: \"lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                        mt: \"6\",\n                        spacing: \"3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                size: \"md\",\n                                children: Title\n                            }, void 0, false, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                children: [\n                                    \"Year: \",\n                                    Year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                color: \"blue.600\",\n                                fontSize: \"2xl\",\n                                children: \"$450\"\n                            }, void 0, false, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardFooter, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {\n                    spacing: \"2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            variant: \"solid\",\n                            colorScheme: \"blue\",\n                            children: \"Bookmark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            variant: \"ghost\",\n                            colorScheme: \"blue\",\n                            children: \"Add to cart\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBWTBCO0FBRTFCLE1BQU1VLFlBQWlDLFNBTXRCO1FBTnVCLEVBQ3RDQyxNQUFLLEVBQ0xDLEtBQUksRUFDSkMsT0FBTSxFQUNOQyxLQUFJLEVBQ0pDLE9BQU0sRUFDSTtJQUNWLHFCQUNFLDhEQUFDZixrREFBSUE7UUFBQ2dCLE1BQUs7OzBCQUNULDhEQUFDWCxzREFBUUE7O2tDQUNQLDhEQUFDSixtREFBS0E7d0JBQ0pnQixLQUFLRjt3QkFDTEcsS0FBSTt3QkFDSkMsY0FBYTs7Ozs7O2tDQUVmLDhEQUFDakIsbURBQUtBO3dCQUFDa0IsSUFBRzt3QkFBSUMsU0FBUTs7MENBQ3BCLDhEQUFDbEIscURBQU9BO2dDQUFDbUIsTUFBSzswQ0FBTVg7Ozs7OzswQ0FDcEIsOERBQUNQLGtEQUFJQTs7b0NBQUM7b0NBQU9ROzs7Ozs7OzBDQUNiLDhEQUFDUixrREFBSUE7Z0NBQUNtQixPQUFNO2dDQUFXQyxVQUFTOzBDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzFDLDhEQUFDbEIscURBQU9BOzs7OzswQkFDUiw4REFBQ0Msd0RBQVVBOzBCQUNULDRFQUFDQyx5REFBV0E7b0JBQUNhLFNBQVE7O3NDQUNuQiw4REFBQ1osb0RBQU1BOzRCQUFDZ0IsU0FBUTs0QkFBUUMsYUFBWTtzQ0FBTzs7Ozs7O3NDQUczQyw4REFBQ2pCLG9EQUFNQTs0QkFBQ2dCLFNBQVE7NEJBQVFDLGFBQVk7c0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JEO0tBcENNaEI7QUFzQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb3ZpZS1jYXJkLnRzeD9iN2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdmllVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBJbWFnZSxcbiAgU3RhY2ssXG4gIEhlYWRpbmcsXG4gIFRleHQsXG4gIENhcmRCb2R5LFxuICBEaXZpZGVyLFxuICBDYXJkRm9vdGVyLFxuICBCdXR0b25Hcm91cCxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBNb3ZpZUNhcmQ6IFJlYWN0LkZDPE1vdmllVHlwZT4gPSAoe1xuICBUaXRsZSxcbiAgWWVhcixcbiAgaW1kYklELFxuICBUeXBlLFxuICBQb3N0ZXIsXG59OiBNb3ZpZVR5cGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBtYXhXPVwic21cIj5cbiAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtQb3N0ZXJ9XG4gICAgICAgICAgYWx0PVwiR3JlZW4gZG91YmxlIGNvdWNoIHdpdGggd29vZGVuIGxlZ3NcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrIG10PVwiNlwiIHNwYWNpbmc9XCIzXCI+XG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e1RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dD5ZZWFyOiB7WWVhcn08L1RleHQ+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJibHVlLjYwMFwiIGZvbnRTaXplPVwiMnhsXCI+XG4gICAgICAgICAgICAkNDUwXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbkdyb3VwIHNwYWNpbmc9XCIyXCI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic29saWRcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cbiAgICAgICAgICAgIEJvb2ttYXJrXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cbiAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICA8L0NhcmRGb290ZXI+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJJbWFnZSIsIlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJDYXJkQm9keSIsIkRpdmlkZXIiLCJDYXJkRm9vdGVyIiwiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJNb3ZpZUNhcmQiLCJUaXRsZSIsIlllYXIiLCJpbWRiSUQiLCJUeXBlIiwiUG9zdGVyIiwibWF4VyIsInNyYyIsImFsdCIsImJvcmRlclJhZGl1cyIsIm10Iiwic3BhY2luZyIsInNpemUiLCJjb2xvciIsImZvbnRTaXplIiwidmFyaWFudCIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/movie-card.tsx\n"));

/***/ })

});