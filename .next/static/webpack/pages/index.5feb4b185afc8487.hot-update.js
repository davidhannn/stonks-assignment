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

/***/ "./components/movie-list.tsx":
/*!***********************************!*\
  !*** ./components/movie-list.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _movie_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-card */ \"./components/movie-card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// import { useFetchMovies } from \"@/hooks/useFetchMovies\";\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MovieList = (param)=>{\n    let { bookmarkList =false  } = param;\n    _s();\n    // const { movies } = useFetchMovies();\n    const { movies , bookmarkedMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__.MovieContext);\n    console.log(\"hey?\");\n    console.log(movies, \"movies\");\n    console.log(bookmarkedMovies, \"bookmarked\");\n    // if (!movies) {\n    //   return <h1>No Movies Displayed!</h1>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n        templateColumns: \"repeat(3, 1fr)\",\n        gap: 6,\n        children: bookmarkList ? bookmarkedMovies === null || bookmarkedMovies === void 0 ? void 0 : bookmarkedMovies.map((param)=>/*#__PURE__*/ {\n            let { Title , Year , imdbID , Type , Poster  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movie_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Title: Title,\n                Year: Year,\n                imdbID: imdbID,\n                Type: Type,\n                Poster: Poster\n            }, imdbID, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n                lineNumber: 28,\n                columnNumber: 15\n            }, undefined);\n        }) : movies === null || movies === void 0 ? void 0 : movies.map((param)=>// <GridItem w=\"100%\" h=\"100%\" bg=\"blue.500\">\n        /*#__PURE__*/ {\n            let { Title , Year , imdbID , Type , Poster  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movie_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Title: Title,\n                Year: Year,\n                imdbID: imdbID,\n                Type: Type,\n                Poster: Poster\n            }, imdbID, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieList, \"2zTvO4s0Ir2nkh3ONyEknCiKBgo=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkRBQTJEOzs7QUFDVDtBQUNJO0FBQ2pCO0FBQ0Y7QUFPbkMsTUFBTUksWUFBNkIsU0FBcUM7UUFBcEMsRUFBRUMsY0FBZSxLQUFLLEdBQVM7O0lBQ2pFLHVDQUF1QztJQUN2QyxNQUFNLEVBQUVDLE9BQU0sRUFBRUMsaUJBQWdCLEVBQUUsR0FBR0osaURBQVVBLENBQUNGLCtEQUFZQTtJQUU1RE8sUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0gsUUFBUTtJQUNwQkUsUUFBUUMsR0FBRyxDQUFDRixrQkFBa0I7SUFDOUIsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxJQUFJO0lBRUoscUJBQ0UsOERBQUNQLGtEQUFJQTtRQUFDVSxpQkFBZ0I7UUFBaUJDLEtBQUs7a0JBQ3pDTixlQUNHRSw2QkFBQUEsOEJBQUFBLEtBQUFBLElBQUFBLGlCQUFrQkssR0FBRyxDQUNuQix1QkFDRTtnQkFERCxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBYTttQkFDL0MsOERBQUNmLG1EQUFTQTtnQkFFUlcsT0FBT0E7Z0JBQ1BDLE1BQU1BO2dCQUNOQyxRQUFRQTtnQkFDUkMsTUFBTUE7Z0JBQ05DLFFBQVFBO2VBTEhGOzs7OztRQU1OLEtBR0xULG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUU0sR0FBRyxDQUFDLFNBQ1YsNkNBQTZDO3NCQUM3QztnQkFGVyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBYTttQkFFM0QsOERBQUNmLG1EQUFTQTtnQkFFUlcsT0FBT0E7Z0JBQ1BDLE1BQU1BO2dCQUNOQyxRQUFRQTtnQkFDUkMsTUFBTUE7Z0JBQ05DLFFBQVFBO2VBTEhGOzs7OztRQU1OLEVBRUQ7Ozs7OztBQUdaO0dBeENNWDtLQUFBQTtBQTBDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vdmllLWxpc3QudHN4PzQyM2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlRmV0Y2hNb3ZpZXMgfSBmcm9tIFwiQC9ob29rcy91c2VGZXRjaE1vdmllc1wiO1xuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Nb3ZpZUNvbnRleHRcIjtcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSBcIi4vbW92aWUtY2FyZFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW92aWVUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgYm9va21hcmtMaXN0PzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IE1vdmllTGlzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYm9va21hcmtMaXN0ID0gZmFsc2UgfTogUHJvcHMpID0+IHtcbiAgLy8gY29uc3QgeyBtb3ZpZXMgfSA9IHVzZUZldGNoTW92aWVzKCk7XG4gIGNvbnN0IHsgbW92aWVzLCBib29rbWFya2VkTW92aWVzIH0gPSB1c2VDb250ZXh0KE1vdmllQ29udGV4dCk7XG5cbiAgY29uc29sZS5sb2coXCJoZXk/XCIpO1xuICBjb25zb2xlLmxvZyhtb3ZpZXMsIFwibW92aWVzXCIpO1xuICBjb25zb2xlLmxvZyhib29rbWFya2VkTW92aWVzLCBcImJvb2ttYXJrZWRcIik7XG4gIC8vIGlmICghbW92aWVzKSB7XG4gIC8vICAgcmV0dXJuIDxoMT5ObyBNb3ZpZXMgRGlzcGxheWVkITwvaDE+O1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMywgMWZyKVwiIGdhcD17Nn0+XG4gICAgICB7Ym9va21hcmtMaXN0XG4gICAgICAgID8gYm9va21hcmtlZE1vdmllcz8ubWFwKFxuICAgICAgICAgICAgKHsgVGl0bGUsIFllYXIsIGltZGJJRCwgVHlwZSwgUG9zdGVyIH06IE1vdmllVHlwZSkgPT4gKFxuICAgICAgICAgICAgICA8TW92aWVDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpbWRiSUR9XG4gICAgICAgICAgICAgICAgVGl0bGU9e1RpdGxlfVxuICAgICAgICAgICAgICAgIFllYXI9e1llYXJ9XG4gICAgICAgICAgICAgICAgaW1kYklEPXtpbWRiSUR9XG4gICAgICAgICAgICAgICAgVHlwZT17VHlwZX1cbiAgICAgICAgICAgICAgICBQb3N0ZXI9e1Bvc3Rlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIDogbW92aWVzPy5tYXAoKHsgVGl0bGUsIFllYXIsIGltZGJJRCwgVHlwZSwgUG9zdGVyIH06IE1vdmllVHlwZSkgPT4gKFxuICAgICAgICAgICAgLy8gPEdyaWRJdGVtIHc9XCIxMDAlXCIgaD1cIjEwMCVcIiBiZz1cImJsdWUuNTAwXCI+XG4gICAgICAgICAgICA8TW92aWVDYXJkXG4gICAgICAgICAgICAgIGtleT17aW1kYklEfVxuICAgICAgICAgICAgICBUaXRsZT17VGl0bGV9XG4gICAgICAgICAgICAgIFllYXI9e1llYXJ9XG4gICAgICAgICAgICAgIGltZGJJRD17aW1kYklEfVxuICAgICAgICAgICAgICBUeXBlPXtUeXBlfVxuICAgICAgICAgICAgICBQb3N0ZXI9e1Bvc3Rlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAvLyA8L0dyaWRJdGVtPlxuICAgICAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdLCJuYW1lcyI6WyJHcmlkIiwiTW92aWVDb250ZXh0IiwiTW92aWVDYXJkIiwidXNlQ29udGV4dCIsIk1vdmllTGlzdCIsImJvb2ttYXJrTGlzdCIsIm1vdmllcyIsImJvb2ttYXJrZWRNb3ZpZXMiLCJjb25zb2xlIiwibG9nIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibWFwIiwiVGl0bGUiLCJZZWFyIiwiaW1kYklEIiwiVHlwZSIsIlBvc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/movie-list.tsx\n"));

/***/ })

});