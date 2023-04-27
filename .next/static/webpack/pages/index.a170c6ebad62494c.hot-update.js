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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/search-bar */ \"./components/search-bar.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _components_movie_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/movie-tabs */ \"./components/movie-tabs.tsx\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useDebounce */ \"./hooks/useDebounce.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst API_URL = \"https://movie-database-alternative.p.rapidapi.com/\";\nconst MovieContextProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookmarkedMovies, setBookmarkedMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            const storedArray = localStorage.getItem(\"bookmarkedMovies\");\n            if (storedArray) {\n                const parsedArray = JSON.parse(storedArray);\n                setBookmarkedMovies([\n                    ...parsedArray\n                ]);\n            }\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (bookmarkedMovies.length !== 0) {\n            localStorage.setItem(\"bookmarkedMovies\", JSON.stringify(bookmarkedMovies));\n        }\n    }, [\n        bookmarkedMovies\n    ]);\n    const options = {\n        method: \"GET\",\n        url: API_URL,\n        params: {\n            s: search,\n            r: \"json\",\n            page: \"1\"\n        },\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": \"\".concat(\"c66a530934msh0750ff2e2debe17p1eb6bdjsnda6cfe0fca32\"),\n            \"X-RapidAPI-Host\": \"movie-database-alternative.p.rapidapi.com\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(options).then((response)=>{\n            setMovies(response.data.Search);\n        });\n    };\n    const handleSearch = (e)=>{\n        setSearch(e.target.value);\n    // onSearchDebounced();\n    };\n    const handleBookmark = (movie)=>{\n        setBookmarkedMovies([\n            ...bookmarkedMovies,\n            movie\n        ]);\n    };\n    const onSearchDebounced = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        func: fetchMovies,\n        wait: 1000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext.Provider, {\n        value: {\n            movies,\n            bookmarkedMovies,\n            fetchMovies,\n            handleSearch,\n            handleBookmark\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieContextProvider, \"7HHpKodUdAamJ4YyU5As8DE6gH8=\", false, function() {\n    return [\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = MovieContextProvider;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main), \" \").concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default().className)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_movie_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"MovieContextProvider\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNNQTtBQVpzQztBQUVFO0FBQ0U7QUFHdEI7QUFDNEI7QUFFTjtBQUNGO0FBSTlDLE1BQU1TLFVBQWtCO0FBRXhCLE1BQU1DLHVCQUF1QixTQUFxQztRQUFwQyxFQUFFQyxTQUFRLEVBQXFCOztJQUMzRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQWMsRUFBRTtJQUNwRCxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDYyxrQkFBa0JDLG9CQUFvQixHQUFHZiwrQ0FBUUEsQ0FBSyxFQUFFO0lBRS9ERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxJQUEyQmlCLEVBQUU7WUFDL0IsTUFBTUMsY0FBY0MsYUFBYUMsT0FBTyxDQUFDO1lBRXpDLElBQUlGLGFBQWE7Z0JBQ2YsTUFBTUcsY0FBY0MsS0FBS0MsS0FBSyxDQUFDTDtnQkFDL0JGLG9CQUFvQjt1QkFBSUs7aUJBQVk7WUFDdEMsQ0FBQztRQUNILENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTHJCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJZSxpQkFBaUJTLE1BQU0sS0FBSyxHQUFHO1lBQ2pDTCxhQUFhTSxPQUFPLENBQ2xCLG9CQUNBSCxLQUFLSSxTQUFTLENBQUNYO1FBRW5CLENBQUM7SUFDSCxHQUFHO1FBQUNBO0tBQWlCO0lBRXJCLE1BQU1ZLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxLQUFLckI7UUFDTHNCLFFBQVE7WUFDTkMsR0FBR2xCO1lBQ0htQixHQUFHO1lBQ0hDLE1BQU07UUFDUjtRQUNBQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGtCQUFrQixHQUFtQyxPQUFoQ0Msb0RBQStCO1lBQ3BELG1CQUFtQjtRQUNyQjtJQUNGO0lBRUEsTUFBTUcsY0FBbUMsVUFBWTtRQUNuRGxDLHFEQUFhLENBQUN1QixTQUFTYSxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUN4QzdCLFVBQVU2QixTQUFTQyxJQUFJLENBQUNDLE1BQU07UUFDaEM7SUFDRjtJQUVBLE1BQU1DLGVBQWlFLENBQ3JFQyxJQUNHO1FBQ0gvQixVQUFVK0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3hCLHVCQUF1QjtJQUN6QjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDQyxRQUFxQjtRQUMzQ2pDLG9CQUFvQjtlQUFJRDtZQUFrQmtDO1NBQU07SUFDbEQ7SUFFQSxNQUFNQyxvQkFBb0IzQyw4REFBV0EsQ0FBQztRQUNwQzRDLE1BQU1iO1FBQ05jLE1BQU07SUFDUjtJQUVBLHFCQUNFLDhEQUFDL0Msd0VBQXFCO1FBQ3BCMEMsT0FBTztZQUNMcEM7WUFDQUk7WUFDQXVCO1lBQ0FNO1lBQ0FJO1FBQ0Y7a0JBRUN0Qzs7Ozs7O0FBR1A7R0EzRU1EOztRQXlEc0JGLDBEQUFXQTs7O0tBekRqQ0U7QUE2RVMsU0FBUzZDLE9BQU87SUFDN0IscUJBQ0UsOERBQUM3QztrQkFDQyw0RUFBQzhDO1lBQUtDLFdBQVcsR0FBa0J6RCxPQUFmRyxxRUFBVyxFQUFDLEtBQW1CLE9BQWhCSCw0SkFBZTs7OEJBQ2hELDhEQUFDSSw4REFBU0E7Ozs7OzhCQUNWLDhEQUFDRyw4REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEIsQ0FBQztNQVR1QmdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJAL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuXG5pbXBvcnQgeyBNb3ZpZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Nb3ZpZUNvbnRleHRcIjtcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW92aWVUYWJzIGZyb20gXCJAL2NvbXBvbmVudHMvbW92aWUtdGFic1wiO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCJAL2hvb2tzL3VzZURlYm91bmNlXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuY29uc3QgQVBJX1VSTDogc3RyaW5nID0gXCJodHRwczovL21vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tL1wiO1xuXG5jb25zdCBNb3ZpZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNb3ZpZVR5cGVbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2Jvb2ttYXJrZWRNb3ZpZXMsIHNldEJvb2ttYXJrZWRNb3ZpZXNdID0gdXNlU3RhdGU8W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHN0b3JlZEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJib29rbWFya2VkTW92aWVzXCIpO1xuXG4gICAgICBpZiAoc3RvcmVkQXJyYXkpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZEFycmF5KTtcbiAgICAgICAgc2V0Qm9va21hcmtlZE1vdmllcyhbLi4ucGFyc2VkQXJyYXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChib29rbWFya2VkTW92aWVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwiYm9va21hcmtlZE1vdmllc1wiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShib29rbWFya2VkTW92aWVzKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtib29rbWFya2VkTW92aWVzXSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgdXJsOiBBUElfVVJMLFxuICAgIHBhcmFtczoge1xuICAgICAgczogc2VhcmNoLFxuICAgICAgcjogXCJqc29uXCIsXG4gICAgICBwYWdlOiBcIjFcIixcbiAgICB9LFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXG4gICAgICBcIlgtUmFwaWRBUEktS2V5XCI6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVl9YCxcbiAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwibW92aWUtZGF0YWJhc2UtYWx0ZXJuYXRpdmUucC5yYXBpZGFwaS5jb21cIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGZldGNoTW92aWVzOiAoKSA9PiBQcm9taXNlPHZvaWQ+ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF4aW9zLnJlcXVlc3Qob3B0aW9ucykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldE1vdmllcyhyZXNwb25zZS5kYXRhLlNlYXJjaCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQgPSAoXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyBvblNlYXJjaERlYm91bmNlZCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJvb2ttYXJrID0gKG1vdmllOiBNb3ZpZVR5cGUpID0+IHtcbiAgICBzZXRCb29rbWFya2VkTW92aWVzKFsuLi5ib29rbWFya2VkTW92aWVzLCBtb3ZpZV0pO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoRGVib3VuY2VkID0gdXNlRGVib3VuY2Uoe1xuICAgIGZ1bmM6IGZldGNoTW92aWVzLFxuICAgIHdhaXQ6IDEwMDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPE1vdmllQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbW92aWVzLFxuICAgICAgICBib29rbWFya2VkTW92aWVzLFxuICAgICAgICBmZXRjaE1vdmllcyxcbiAgICAgICAgaGFuZGxlU2VhcmNoLFxuICAgICAgICBoYW5kbGVCb29rbWFyayxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTW92aWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TW92aWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2ludGVyLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8TW92aWVUYWJzIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9Nb3ZpZUNvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2VhcmNoQmFyIiwiYXhpb3MiLCJNb3ZpZUNvbnRleHQiLCJNb3ZpZVRhYnMiLCJ1c2VEZWJvdW5jZSIsIkFQSV9VUkwiLCJNb3ZpZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibW92aWVzIiwic2V0TW92aWVzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiYm9va21hcmtlZE1vdmllcyIsInNldEJvb2ttYXJrZWRNb3ZpZXMiLCJ1bmRlZmluZWQiLCJzdG9yZWRBcnJheSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZWRBcnJheSIsIkpTT04iLCJwYXJzZSIsImxlbmd0aCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwicyIsInIiLCJwYWdlIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiZmV0Y2hNb3ZpZXMiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIlNlYXJjaCIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUJvb2ttYXJrIiwibW92aWUiLCJvblNlYXJjaERlYm91bmNlZCIsImZ1bmMiLCJ3YWl0IiwiUHJvdmlkZXIiLCJIb21lIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});