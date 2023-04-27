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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/search-bar */ \"./components/search-bar.tsx\");\n/* harmony import */ var _components_movie_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/movie-list */ \"./components/movie-list.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst API_URL = \"https://movie-database-alternative.p.rapidapi.com/\";\nconst MovieContextProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookmarkedMovies, setBookmarkedMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const options = {\n        method: \"GET\",\n        url: API_URL,\n        params: {\n            s: search,\n            r: \"json\",\n            page: \"1\"\n        },\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": \"\".concat(\"c66a530934msh0750ff2e2debe17p1eb6bdjsnda6cfe0fca32\"),\n            \"X-RapidAPI-Host\": \"movie-database-alternative.p.rapidapi.com\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(options).then((response)=>{\n            console.log(response.data.Search, \"here\");\n            setMovies(response.data.Search);\n        });\n    };\n    const handleSearch = (e)=>{\n        setSearch(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_4__.MovieContext.Provider, {\n        value: {\n            movies,\n            bookmarkedMovies,\n            fetchMovies,\n            handleSearch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieContextProvider, \"UunvtuTnP0HYyOnP0uDu/Z/sQvA=\");\n_c = MovieContextProvider;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main), \" \").concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default().className)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_movie_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"MovieContextProvider\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWU1BO0FBVjJCO0FBRWE7QUFDRTtBQUNBO0FBRXRCO0FBQzRCO0FBS3RELE1BQU1PLFVBQWtCO0FBRXhCLE1BQU1DLHVCQUF1QixTQUFxQztRQUFwQyxFQUFFQyxTQUFRLEVBQXFCOztJQUMzRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQWMsRUFBRTtJQUNwRCxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDYSxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBSyxFQUFFO0lBRS9ELE1BQU1lLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxLQUFLWDtRQUNMWSxRQUFRO1lBQ05DLEdBQUdSO1lBQ0hTLEdBQUc7WUFDSEMsTUFBTTtRQUNSO1FBQ0FDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsa0JBQWtCLEdBQW1DLE9BQWhDQyxvREFBK0I7WUFDcEQsbUJBQW1CO1FBQ3JCO0lBQ0Y7SUFFQSxNQUFNRyxjQUFtQyxVQUFZO1FBQ25EdEIscURBQWEsQ0FBQ1csU0FBU2EsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDeENDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBU0csSUFBSSxDQUFDQyxNQUFNLEVBQUU7WUFDbEN2QixVQUFVbUIsU0FBU0csSUFBSSxDQUFDQyxNQUFNO1FBQ2hDO0lBQ0Y7SUFFQSxNQUFNQyxlQUFpRSxDQUNyRUMsSUFDRztRQUNIdkIsVUFBVXVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMxQjtJQUVBLHFCQUNFLDhEQUFDaEMsd0VBQXFCO1FBQ3BCZ0MsT0FBTztZQUFFNUI7WUFBUUk7WUFBa0JhO1lBQWFRO1FBQWE7a0JBRTVEMUI7Ozs7OztBQUdQO0dBeENNRDtLQUFBQTtBQTBDUyxTQUFTZ0MsT0FBTztJQUM3QixxQkFDRSw4REFBQ2hDO2tCQUNDLDRFQUFDaUM7WUFBS0MsV0FBVyxHQUFrQjFDLE9BQWZFLHFFQUFXLEVBQUMsS0FBbUIsT0FBaEJGLDRKQUFlOzs4QkFDaEQsOERBQUNHLDhEQUFTQTs7Ozs7OEJBQ1YsOERBQUNDLDhEQUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO01BVHVCb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJAL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL21vdmllLWxpc3RcIjtcbmltcG9ydCB7IE1vdmllVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBNb3ZpZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L01vdmllQ29udGV4dFwiO1xuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5jb25zdCBBUElfVVJMOiBzdHJpbmcgPSBcImh0dHBzOi8vbW92aWUtZGF0YWJhc2UtYWx0ZXJuYXRpdmUucC5yYXBpZGFwaS5jb20vXCI7XG5cbmNvbnN0IE1vdmllQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHNXaXRoQ2hpbGRyZW4pID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllVHlwZVtdPihbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbYm9va21hcmtlZE1vdmllcywgc2V0Qm9va21hcmtlZE1vdmllc10gPSB1c2VTdGF0ZTxbXT4oW10pO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHVybDogQVBJX1VSTCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIHM6IHNlYXJjaCxcbiAgICAgIHI6IFwianNvblwiLFxuICAgICAgcGFnZTogXCIxXCIsXG4gICAgfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZfWAsXG4gICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcIm1vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBmZXRjaE1vdmllczogKCkgPT4gUHJvbWlzZTx2b2lkPiA9IGFzeW5jICgpID0+IHtcbiAgICBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLlNlYXJjaCwgXCJoZXJlXCIpO1xuICAgICAgc2V0TW92aWVzKHJlc3BvbnNlLmRhdGEuU2VhcmNoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2g6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCA9IChcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vdmllQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgbW92aWVzLCBib29rbWFya2VkTW92aWVzLCBmZXRjaE1vdmllcywgaGFuZGxlU2VhcmNoIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTW92aWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TW92aWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2ludGVyLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8TW92aWVMaXN0IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9Nb3ZpZUNvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2VhcmNoQmFyIiwiTW92aWVMaXN0IiwiYXhpb3MiLCJNb3ZpZUNvbnRleHQiLCJBUElfVVJMIiwiTW92aWVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIm1vdmllcyIsInNldE1vdmllcyIsInNlYXJjaCIsInNldFNlYXJjaCIsImJvb2ttYXJrZWRNb3ZpZXMiLCJzZXRCb29rbWFya2VkTW92aWVzIiwib3B0aW9ucyIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsInMiLCJyIiwicGFnZSIsImhlYWRlcnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsImZldGNoTW92aWVzIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiU2VhcmNoIiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUHJvdmlkZXIiLCJIb21lIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});