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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MovieCard = (param)=>{\n    let { Title , Year , imdbID , Type , Poster , status =_constants__WEBPACK_IMPORTED_MODULE_1__.STATUS.NONE  } = param;\n    _s();\n    const { handleBookmark  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_2__.MovieContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        maxW: \"sm\",\n        maxH: \"sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                        src: Poster,\n                        objectFit: \"contain\",\n                        maxH: \"100px\",\n                        maxW: \"sm\",\n                        alt: \"Green double couch with wooden legs\",\n                        borderRadius: \"lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        mt: \"6\",\n                        spacing: \"3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                                size: \"md\",\n                                children: Title\n                            }, void 0, false, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                children: [\n                                    \"Year: \",\n                                    Year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CardFooter, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {\n                    spacing: \"2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"solid\",\n                        colorScheme: \"blue\",\n                        onClick: ()=>handleBookmark({\n                                Title,\n                                Year,\n                                imdbID,\n                                Type,\n                                Poster\n                            }),\n                        children: status === \"none\" ? \"Bookmark\" : \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-card.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieCard, \"eOEDqGRiIAI7stPs8KTar6Pq+kg=\");\n_c = MovieCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieCard);\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDaUI7QUFhNUI7QUFDUztBQUVuQyxNQUFNYSxZQUFpQyxTQU90QjtRQVB1QixFQUN0Q0MsTUFBSyxFQUNMQyxLQUFJLEVBQ0pDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxPQUFNLEVBQ05DLFFBQVNuQixtREFBVyxHQUNWOztJQUNWLE1BQU0sRUFBRXFCLGVBQWMsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ1gsK0RBQVlBO0lBQ2xELHFCQUNFLDhEQUFDQyxrREFBSUE7UUFBQ29CLE1BQUs7UUFBS0MsTUFBSzs7MEJBQ25CLDhEQUFDaEIsc0RBQVFBOztrQ0FDUCw4REFBQ0osbURBQUtBO3dCQUNKcUIsS0FBS047d0JBQ0xPLFdBQVU7d0JBQ1ZGLE1BQUs7d0JBQ0xELE1BQUs7d0JBQ0xJLEtBQUk7d0JBQ0pDLGNBQWE7Ozs7OztrQ0FFZiw4REFBQ3ZCLG1EQUFLQTt3QkFBQ3dCLElBQUc7d0JBQUlDLFNBQVE7OzBDQUNwQiw4REFBQ3hCLHFEQUFPQTtnQ0FBQ3lCLE1BQUs7MENBQU1oQjs7Ozs7OzBDQUNwQiw4REFBQ1Isa0RBQUlBOztvQ0FBQztvQ0FBT1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWpCLDhEQUFDUCxxREFBT0E7Ozs7OzBCQUNSLDhEQUFDQyx3REFBVUE7MEJBQ1QsNEVBQUNDLHlEQUFXQTtvQkFBQ21CLFNBQVE7OEJBQ25CLDRFQUFDbEIsb0RBQU1BO3dCQUNMb0IsU0FBUTt3QkFDUkMsYUFBWTt3QkFDWkMsU0FBUyxJQUNQWixlQUFlO2dDQUFFUDtnQ0FBT0M7Z0NBQU1DO2dDQUFRQztnQ0FBTUM7NEJBQU87a0NBR3BEQyxXQUFXLFNBQVMsYUFBYSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3REO0dBL0NNTjtLQUFBQTtBQWlETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vdmllLWNhcmQudHN4P2I3ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1RBVFVTIH0gZnJvbSBcIkAvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L01vdmllQ29udGV4dFwiO1xuaW1wb3J0IHsgTW92aWVUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIEltYWdlLFxuICBTdGFjayxcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgQ2FyZEJvZHksXG4gIERpdmlkZXIsXG4gIENhcmRGb290ZXIsXG4gIEJ1dHRvbkdyb3VwLFxuICBCdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1vdmllQ2FyZDogUmVhY3QuRkM8TW92aWVUeXBlPiA9ICh7XG4gIFRpdGxlLFxuICBZZWFyLFxuICBpbWRiSUQsXG4gIFR5cGUsXG4gIFBvc3RlcixcbiAgc3RhdHVzID0gU1RBVFVTLk5PTkUsXG59OiBNb3ZpZVR5cGUpID0+IHtcbiAgY29uc3QgeyBoYW5kbGVCb29rbWFyayB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkIG1heFc9XCJzbVwiIG1heEg9XCJzbVwiPlxuICAgICAgPENhcmRCb2R5PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e1Bvc3Rlcn1cbiAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICBtYXhIPVwiMTAwcHhcIlxuICAgICAgICAgIG1heFc9XCJzbVwiXG4gICAgICAgICAgYWx0PVwiR3JlZW4gZG91YmxlIGNvdWNoIHdpdGggd29vZGVuIGxlZ3NcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFN0YWNrIG10PVwiNlwiIHNwYWNpbmc9XCIzXCI+XG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e1RpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dD5ZZWFyOiB7WWVhcn08L1RleHQ+XG4gICAgICAgICAgey8qIDxUZXh0IGNvbG9yPVwiYmx1ZS42MDBcIiBmb250U2l6ZT1cIjJ4bFwiPlxuICAgICAgICAgICAgJDQ1MFxuICAgICAgICAgIDwvVGV4dD4gKi99XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0NhcmRCb2R5PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICA8QnV0dG9uR3JvdXAgc3BhY2luZz1cIjJcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgIGhhbmRsZUJvb2ttYXJrKHsgVGl0bGUsIFllYXIsIGltZGJJRCwgVHlwZSwgUG9zdGVyIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N0YXR1cyA9PT0gXCJub25lXCIgPyBcIkJvb2ttYXJrXCIgOiBcIlJlbW92ZVwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlxuICAgICAgICAgICAgV2F0Y2hlZFxuICAgICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iXSwibmFtZXMiOlsiU1RBVFVTIiwiTW92aWVDb250ZXh0IiwiQ2FyZCIsIkltYWdlIiwiU3RhY2siLCJIZWFkaW5nIiwiVGV4dCIsIkNhcmRCb2R5IiwiRGl2aWRlciIsIkNhcmRGb290ZXIiLCJCdXR0b25Hcm91cCIsIkJ1dHRvbiIsInVzZUNvbnRleHQiLCJNb3ZpZUNhcmQiLCJUaXRsZSIsIlllYXIiLCJpbWRiSUQiLCJUeXBlIiwiUG9zdGVyIiwic3RhdHVzIiwiTk9ORSIsImhhbmRsZUJvb2ttYXJrIiwibWF4VyIsIm1heEgiLCJzcmMiLCJvYmplY3RGaXQiLCJhbHQiLCJib3JkZXJSYWRpdXMiLCJtdCIsInNwYWNpbmciLCJzaXplIiwidmFyaWFudCIsImNvbG9yU2NoZW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/movie-card.tsx\n"));

/***/ })

});