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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _movie_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-card */ \"./components/movie-card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"./constants/index.ts\");\n// import { useFetchMovies } from \"@/hooks/useFetchMovies\";\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MovieList = (param)=>{\n    let { status =_constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.NONE  } = param;\n    _s();\n    // const { movies } = useFetchMovies();\n    const { movies , bookmarkedMovies , watchedMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_1__.MovieContext);\n    if (!movies) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"No Movies Displayed!\"\n        }, void 0, false, {\n            fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n        templateColumns: \"repeat(3, 1fr)\",\n        gap: 6,\n        children: status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.NONE ? movies === null || movies === void 0 ? void 0 : movies.map((param)=>/*#__PURE__*/ {\n            let { Title , Year , imdbID , Type , Poster  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movie_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Title: Title,\n                Year: Year,\n                imdbID: imdbID,\n                Type: Type,\n                Poster: Poster,\n                status: _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.NONE\n            }, imdbID, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined);\n        }) : status === _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.BOOKMARKED ? bookmarkedMovies === null || bookmarkedMovies === void 0 ? void 0 : bookmarkedMovies.map((param)=>// <GridItem w=\"100%\" h=\"100%\" bg=\"blue.500\">\n        /*#__PURE__*/ {\n            let { Title , Year , imdbID , Type , Poster  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movie_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Title: Title,\n                Year: Year,\n                imdbID: imdbID,\n                Type: Type,\n                Poster: Poster,\n                status: _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.BOOKMARKED\n            }, imdbID, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n                lineNumber: 40,\n                columnNumber: 15\n            }, undefined);\n        }) : watchedMovies.map((param)=>/*#__PURE__*/ {\n            let { Title , Year , imdbID , Type , Poster  } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movie_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                Title: Title,\n                Year: Year,\n                imdbID: imdbID,\n                Type: Type,\n                Poster: Poster,\n                status: _constants__WEBPACK_IMPORTED_MODULE_4__.STATUS.NONE\n            }, imdbID, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n                lineNumber: 54,\n                columnNumber: 15\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/movie-list.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieList, \"uIF+U5VhwPYKe56ZyFdCVU+Agvg=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vdmllLWxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJEQUEyRDs7O0FBQ1Q7QUFDSTtBQUNqQjtBQUNGO0FBQ0U7QUFRckMsTUFBTUssWUFBNkIsU0FBcUM7UUFBcEMsRUFBRUMsUUFBU0YsbURBQVcsR0FBUzs7SUFDakUsdUNBQXVDO0lBQ3ZDLE1BQU0sRUFBRUksT0FBTSxFQUFFQyxpQkFBZ0IsRUFBRUMsY0FBYSxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRiwrREFBWUE7SUFFM0UsSUFBSSxDQUFDTyxRQUFRO1FBQ1gscUJBQU8sOERBQUNHO3NCQUFHOzs7Ozs7SUFDYixDQUFDO0lBRUQscUJBQ0UsOERBQUNYLGtEQUFJQTtRQUFDWSxpQkFBZ0I7UUFBaUJDLEtBQUs7a0JBQ3pDUCxXQUFXRixtREFBVyxHQUNuQkksbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRTSxHQUFHLENBQUMsdUJBQ1Y7Z0JBRFcsRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQWE7bUJBQzNELDhEQUFDakIsbURBQVNBO2dCQUVSYSxPQUFPQTtnQkFDUEMsTUFBTUE7Z0JBQ05DLFFBQVFBO2dCQUNSQyxNQUFNQTtnQkFDTkMsUUFBUUE7Z0JBQ1JiLFFBQVFGLG1EQUFXO2VBTmRhOzs7OztRQU9OLEtBRUhYLFdBQVdGLHlEQUFpQixHQUM1QkssNkJBQUFBLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JLLEdBQUcsQ0FDbkIsU0FDRSw2Q0FBNkM7c0JBQzdDO2dCQUZELEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFhO21CQUUvQyw4REFBQ2pCLG1EQUFTQTtnQkFFUmEsT0FBT0E7Z0JBQ1BDLE1BQU1BO2dCQUNOQyxRQUFRQTtnQkFDUkMsTUFBTUE7Z0JBQ05DLFFBQVFBO2dCQUNSYixRQUFRRix5REFBaUI7ZUFOcEJhOzs7OztRQU9OLEtBSUxQLGNBQWNJLEdBQUcsQ0FDZix1QkFDRTtnQkFERCxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBYTttQkFDL0MsOERBQUNqQixtREFBU0E7Z0JBRVJhLE9BQU9BO2dCQUNQQyxNQUFNQTtnQkFDTkMsUUFBUUE7Z0JBQ1JDLE1BQU1BO2dCQUNOQyxRQUFRQTtnQkFDUmIsUUFBUUYsbURBQVc7ZUFOZGE7Ozs7O1FBT04sRUFFSjs7Ozs7O0FBR1g7R0FyRE1aO0tBQUFBO0FBdUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW92aWUtbGlzdC50c3g/NDIzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VGZXRjaE1vdmllcyB9IGZyb20gXCJAL2hvb2tzL3VzZUZldGNoTW92aWVzXCI7XG5pbXBvcnQgeyBHcmlkLCBHcmlkSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L01vdmllQ29udGV4dFwiO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tIFwiLi9tb3ZpZS1jYXJkXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcbmltcG9ydCB7IE1vdmllVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyB3YXRjaCB9IGZyb20gXCJmc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM/OiBcIm5vbmVcIiB8IFwiYm9va21hcmtlZFwiIHwgXCJ3YXRjaGVkXCI7XG59O1xuXG5jb25zdCBNb3ZpZUxpc3Q6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHN0YXR1cyA9IFNUQVRVUy5OT05FIH06IFByb3BzKSA9PiB7XG4gIC8vIGNvbnN0IHsgbW92aWVzIH0gPSB1c2VGZXRjaE1vdmllcygpO1xuICBjb25zdCB7IG1vdmllcywgYm9va21hcmtlZE1vdmllcywgd2F0Y2hlZE1vdmllcyB9ID0gdXNlQ29udGV4dChNb3ZpZUNvbnRleHQpO1xuXG4gIGlmICghbW92aWVzKSB7XG4gICAgcmV0dXJuIDxoMT5ObyBNb3ZpZXMgRGlzcGxheWVkITwvaDE+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMywgMWZyKVwiIGdhcD17Nn0+XG4gICAgICB7c3RhdHVzID09PSBTVEFUVVMuTk9ORVxuICAgICAgICA/IG1vdmllcz8ubWFwKCh7IFRpdGxlLCBZZWFyLCBpbWRiSUQsIFR5cGUsIFBvc3RlciB9OiBNb3ZpZVR5cGUpID0+IChcbiAgICAgICAgICAgIDxNb3ZpZUNhcmRcbiAgICAgICAgICAgICAga2V5PXtpbWRiSUR9XG4gICAgICAgICAgICAgIFRpdGxlPXtUaXRsZX1cbiAgICAgICAgICAgICAgWWVhcj17WWVhcn1cbiAgICAgICAgICAgICAgaW1kYklEPXtpbWRiSUR9XG4gICAgICAgICAgICAgIFR5cGU9e1R5cGV9XG4gICAgICAgICAgICAgIFBvc3Rlcj17UG9zdGVyfVxuICAgICAgICAgICAgICBzdGF0dXM9e1NUQVRVUy5OT05FfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICA6IHN0YXR1cyA9PT0gU1RBVFVTLkJPT0tNQVJLRURcbiAgICAgICAgPyBib29rbWFya2VkTW92aWVzPy5tYXAoXG4gICAgICAgICAgICAoeyBUaXRsZSwgWWVhciwgaW1kYklELCBUeXBlLCBQb3N0ZXIgfTogTW92aWVUeXBlKSA9PiAoXG4gICAgICAgICAgICAgIC8vIDxHcmlkSXRlbSB3PVwiMTAwJVwiIGg9XCIxMDAlXCIgYmc9XCJibHVlLjUwMFwiPlxuICAgICAgICAgICAgICA8TW92aWVDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpbWRiSUR9XG4gICAgICAgICAgICAgICAgVGl0bGU9e1RpdGxlfVxuICAgICAgICAgICAgICAgIFllYXI9e1llYXJ9XG4gICAgICAgICAgICAgICAgaW1kYklEPXtpbWRiSUR9XG4gICAgICAgICAgICAgICAgVHlwZT17VHlwZX1cbiAgICAgICAgICAgICAgICBQb3N0ZXI9e1Bvc3Rlcn1cbiAgICAgICAgICAgICAgICBzdGF0dXM9e1NUQVRVUy5CT09LTUFSS0VEfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAvLyA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgOiB3YXRjaGVkTW92aWVzLm1hcChcbiAgICAgICAgICAgICh7IFRpdGxlLCBZZWFyLCBpbWRiSUQsIFR5cGUsIFBvc3RlciB9OiBNb3ZpZVR5cGUpID0+IChcbiAgICAgICAgICAgICAgPE1vdmllQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW1kYklEfVxuICAgICAgICAgICAgICAgIFRpdGxlPXtUaXRsZX1cbiAgICAgICAgICAgICAgICBZZWFyPXtZZWFyfVxuICAgICAgICAgICAgICAgIGltZGJJRD17aW1kYklEfVxuICAgICAgICAgICAgICAgIFR5cGU9e1R5cGV9XG4gICAgICAgICAgICAgICAgUG9zdGVyPXtQb3N0ZXJ9XG4gICAgICAgICAgICAgICAgc3RhdHVzPXtTVEFUVVMuTk9ORX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdLCJuYW1lcyI6WyJHcmlkIiwiTW92aWVDb250ZXh0IiwiTW92aWVDYXJkIiwidXNlQ29udGV4dCIsIlNUQVRVUyIsIk1vdmllTGlzdCIsInN0YXR1cyIsIk5PTkUiLCJtb3ZpZXMiLCJib29rbWFya2VkTW92aWVzIiwid2F0Y2hlZE1vdmllcyIsImgxIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibWFwIiwiVGl0bGUiLCJZZWFyIiwiaW1kYklEIiwiVHlwZSIsIlBvc3RlciIsIkJPT0tNQVJLRUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/movie-list.tsx\n"));

/***/ })

});