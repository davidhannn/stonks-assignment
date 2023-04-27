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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MovieCard = (param)=>{\n    let { Title , Year , imdbID , Type , Poster , status =_constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.NONE  } = param;\n    _s();\n    const { handleBookmark  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_2__.MovieContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        maxW: \"sm\",\n        maxH: \"sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                        src: Poster,\n                        objectFit: \"contain\",\n                        maxH: \"100px\",\n                        maxW: \"sm\",\n                        alt: \"Green double couch with wooden legs\",\n                        borderRadius: \"lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        mt: \"6\",\n                        spacing: \"3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                                size: \"md\",\n                                children: Title\n                            }, void 0, false, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                children: [\n                                    \"Year: \",\n                                    Year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardFooter, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {\n                    spacing: \"2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            variant: \"solid\",\n                            colorScheme: \"blue\",\n                            onClick: ()=>handleBookmark({\n                                    Title,\n                                    Year,\n                                    imdbID,\n                                    Type,\n                                    Poster\n                                }),\n                            children: status === _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.NONE ? \"Bookmark\" : \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        status === _constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.BOOKMARKED && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            variant: \"ghost\",\n                            colorScheme: \"blue\",\n                            onClick: ()=>handleWatched({\n                                    Title,\n                                    Year,\n                                    imdbID,\n                                    Type,\n                                    Poster\n                                }),\n                            children: \"Watched\"\n                        }, void 0, false, {\n                            fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieCard, \"eOEDqGRiIAI7stPs8KTar6Pq+kg=\");\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDaUI7QUFhNUI7QUFDUztBQUVuQyxNQUFNYSxZQUFpQyxTQU90QjtRQVB1QixFQUN0Q0MsTUFBSyxFQUNMQyxLQUFJLEVBQ0pDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxPQUFNLEVBQ05DLFFBQVNuQixtREFBVyxHQUNWOztJQUNWLE1BQU0sRUFBRXFCLGVBQWMsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ1gsK0RBQVlBO0lBQ2xELHFCQUNFLDhEQUFDQyxrREFBSUE7UUFBQ29CLE1BQUs7UUFBS0MsTUFBSzs7MEJBQ25CLDhEQUFDaEIsc0RBQVFBOztrQ0FDUCw4REFBQ0osbURBQUtBO3dCQUNKcUIsS0FBS047d0JBQ0xPLFdBQVU7d0JBQ1ZGLE1BQUs7d0JBQ0xELE1BQUs7d0JBQ0xJLEtBQUk7d0JBQ0pDLGNBQWE7Ozs7OztrQ0FFZiw4REFBQ3ZCLG1EQUFLQTt3QkFBQ3dCLElBQUc7d0JBQUlDLFNBQVE7OzBDQUNwQiw4REFBQ3hCLHFEQUFPQTtnQ0FBQ3lCLE1BQUs7MENBQU1oQjs7Ozs7OzBDQUNwQiw4REFBQ1Isa0RBQUlBOztvQ0FBQztvQ0FBT1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWpCLDhEQUFDUCxxREFBT0E7Ozs7OzBCQUNSLDhEQUFDQyx3REFBVUE7MEJBQ1QsNEVBQUNDLHlEQUFXQTtvQkFBQ21CLFNBQVE7O3NDQUNuQiw4REFBQ2xCLG9EQUFNQTs0QkFDTG9CLFNBQVE7NEJBQ1JDLGFBQVk7NEJBQ1pDLFNBQVMsSUFDUFosZUFBZTtvQ0FBRVA7b0NBQU9DO29DQUFNQztvQ0FBUUM7b0NBQU1DO2dDQUFPO3NDQUdwREMsV0FBV25CLG1EQUFXLEdBQUcsYUFBYSxRQUFROzs7Ozs7d0JBRWhEbUIsV0FBV25CLHlEQUFpQixrQkFDM0IsOERBQUNXLG9EQUFNQTs0QkFDTG9CLFNBQVE7NEJBQ1JDLGFBQVk7NEJBQ1pDLFNBQVMsSUFDUEUsY0FBYztvQ0FBRXJCO29DQUFPQztvQ0FBTUM7b0NBQVFDO29DQUFNQztnQ0FBTztzQ0FFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0F2RE1MO0tBQUFBO0FBeUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW92aWUtY2FyZC50c3g/YjdmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVEFUVVMgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcbmltcG9ydCB7IE1vdmllQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvTW92aWVDb250ZXh0XCI7XG5pbXBvcnQgeyBNb3ZpZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgSW1hZ2UsXG4gIFN0YWNrLFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBDYXJkQm9keSxcbiAgRGl2aWRlcixcbiAgQ2FyZEZvb3RlcixcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTW92aWVDYXJkOiBSZWFjdC5GQzxNb3ZpZVR5cGU+ID0gKHtcbiAgVGl0bGUsXG4gIFllYXIsXG4gIGltZGJJRCxcbiAgVHlwZSxcbiAgUG9zdGVyLFxuICBzdGF0dXMgPSBTVEFUVVMuTk9ORSxcbn06IE1vdmllVHlwZSkgPT4ge1xuICBjb25zdCB7IGhhbmRsZUJvb2ttYXJrIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPENhcmQgbWF4Vz1cInNtXCIgbWF4SD1cInNtXCI+XG4gICAgICA8Q2FyZEJvZHk+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17UG9zdGVyfVxuICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIG1heEg9XCIxMDBweFwiXG4gICAgICAgICAgbWF4Vz1cInNtXCJcbiAgICAgICAgICBhbHQ9XCJHcmVlbiBkb3VibGUgY291Y2ggd2l0aCB3b29kZW4gbGVnc1wiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2sgbXQ9XCI2XCIgc3BhY2luZz1cIjNcIj5cbiAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj57VGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0PlllYXI6IHtZZWFyfTwvVGV4dD5cbiAgICAgICAgICB7LyogPFRleHQgY29sb3I9XCJibHVlLjYwMFwiIGZvbnRTaXplPVwiMnhsXCI+XG4gICAgICAgICAgICAkNDUwXG4gICAgICAgICAgPC9UZXh0PiAqL31cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiMlwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzb2xpZFwiXG4gICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgaGFuZGxlQm9va21hcmsoeyBUaXRsZSwgWWVhciwgaW1kYklELCBUeXBlLCBQb3N0ZXIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3RhdHVzID09PSBTVEFUVVMuTk9ORSA/IFwiQm9va21hcmtcIiA6IFwiUmVtb3ZlXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3N0YXR1cyA9PT0gU1RBVFVTLkJPT0tNQVJLRUQgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZVdhdGNoZWQoeyBUaXRsZSwgWWVhciwgaW1kYklELCBUeXBlLCBQb3N0ZXIgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBXYXRjaGVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgPC9DYXJkRm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiJdLCJuYW1lcyI6WyJTVEFUVVMiLCJNb3ZpZUNvbnRleHQiLCJDYXJkIiwiSW1hZ2UiLCJTdGFjayIsIkhlYWRpbmciLCJUZXh0IiwiQ2FyZEJvZHkiLCJEaXZpZGVyIiwiQ2FyZEZvb3RlciIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwidXNlQ29udGV4dCIsIk1vdmllQ2FyZCIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsIlR5cGUiLCJQb3N0ZXIiLCJzdGF0dXMiLCJOT05FIiwiaGFuZGxlQm9va21hcmsiLCJtYXhXIiwibWF4SCIsInNyYyIsIm9iamVjdEZpdCIsImFsdCIsImJvcmRlclJhZGl1cyIsIm10Iiwic3BhY2luZyIsInNpemUiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJvbkNsaWNrIiwiQk9PS01BUktFRCIsImhhbmRsZVdhdGNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/movie-card.tsx\n"));

/***/ })

});