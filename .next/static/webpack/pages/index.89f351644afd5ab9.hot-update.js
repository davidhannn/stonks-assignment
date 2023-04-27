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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/search-bar */ \"./components/search-bar.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _components_movie_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/movie-tabs */ \"./components/movie-tabs.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst API_URL = \"https://movie-database-alternative.p.rapidapi.com/\";\nconst MovieContextProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookmarkedMovies, setBookmarkedMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const options = {\n        method: \"GET\",\n        url: API_URL,\n        params: {\n            s: search,\n            r: \"json\",\n            page: \"1\"\n        },\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": \"\".concat(\"c66a530934msh0750ff2e2debe17p1eb6bdjsnda6cfe0fca32\"),\n            \"X-RapidAPI-Host\": \"movie-database-alternative.p.rapidapi.com\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].request(options).then((response)=>{\n            console.log(response.data.Search, \"here\");\n            setMovies(response.data.Search);\n        });\n    };\n    const handleSearch = (e)=>{\n        setSearch(e.target.value);\n    // onSearchDebounced(e.target.value);\n    };\n    const handleBookmark = (movie)=>{\n        setBookmarkedMovies([\n            ...bookmarkedMovies,\n            movie\n        ]);\n        localStorage.setItem(\"bookmarkedMovies\", JSON.stringify(bookmarkedMovies));\n    // if (!localStorage.getItem(\"bookmarkedMovies\")) {\n    //   localStorage.setItem(\"bookmarkedMovies\", JSON.stringify(bookmarkedMovies))\n    // } else {\n    //   const storedArray = localStorage.setItem(\"bookmarkedMovies\")\n    //   const parsedArray = JSON.parse(storedArray)\n    // }\n    };\n    // const onSearchDebounced = useDebounce({\n    //   func: async (value) => {\n    //     await fetchMovies();\n    //   },\n    //   wait: 1000,\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext.Provider, {\n        value: {\n            movies,\n            bookmarkedMovies,\n            fetchMovies,\n            handleSearch,\n            handleBookmark\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieContextProvider, \"UunvtuTnP0HYyOnP0uDu/Z/sQvA=\");\n_c = MovieContextProvider;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main), \" \").concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default().className)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_movie_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"MovieContextProvider\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY01BO0FBWjJCO0FBRWE7QUFDRTtBQUd0QjtBQUM0QjtBQUVOO0FBS2hELE1BQU1PLFVBQWtCO0FBRXhCLE1BQU1DLHVCQUF1QixTQUFxQztRQUFwQyxFQUFFQyxTQUFRLEVBQXFCOztJQUMzRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQWMsRUFBRTtJQUNwRCxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQVM7SUFDN0MsTUFBTSxDQUFDYSxrQkFBa0JDLG9CQUFvQixHQUFHZCwrQ0FBUUEsQ0FBSyxFQUFFO0lBRS9ELE1BQU1lLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxLQUFLWDtRQUNMWSxRQUFRO1lBQ05DLEdBQUdSO1lBQ0hTLEdBQUc7WUFDSEMsTUFBTTtRQUNSO1FBQ0FDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsa0JBQWtCLEdBQW1DLE9BQWhDQyxvREFBK0I7WUFDcEQsbUJBQW1CO1FBQ3JCO0lBQ0Y7SUFFQSxNQUFNRyxjQUFtQyxVQUFZO1FBQ25EdkIscURBQWEsQ0FBQ1ksU0FBU2EsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDeENDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBU0csSUFBSSxDQUFDQyxNQUFNLEVBQUU7WUFDbEN2QixVQUFVbUIsU0FBU0csSUFBSSxDQUFDQyxNQUFNO1FBQ2hDO0lBQ0Y7SUFFQSxNQUFNQyxlQUFpRSxDQUNyRUMsSUFDRztRQUNIdkIsVUFBVXVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QixxQ0FBcUM7SUFDdkM7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0MsUUFBcUI7UUFDM0N6QixvQkFBb0I7ZUFBSUQ7WUFBa0IwQjtTQUFNO1FBQ2hEQyxhQUFhQyxPQUFPLENBQUMsb0JBQW9CQyxLQUFLQyxTQUFTLENBQUM5QjtJQUN4RCxtREFBbUQ7SUFDbkQsK0VBQStFO0lBQy9FLFdBQVc7SUFDWCxpRUFBaUU7SUFDakUsZ0RBQWdEO0lBQ2hELElBQUk7SUFDTjtJQUVBLDBDQUEwQztJQUMxQyw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsTUFBTTtJQUVOLHFCQUNFLDhEQUFDVCx3RUFBcUI7UUFDcEJpQyxPQUFPO1lBQ0w1QjtZQUNBSTtZQUNBYTtZQUNBUTtZQUNBSTtRQUNGO2tCQUVDOUI7Ozs7OztBQUdQO0dBakVNRDtLQUFBQTtBQW1FUyxTQUFTc0MsT0FBTztJQUM3QixxQkFDRSw4REFBQ3RDO2tCQUNDLDRFQUFDdUM7WUFBS0MsV0FBVyxHQUFrQmhELE9BQWZFLHFFQUFXLEVBQUMsS0FBbUIsT0FBaEJGLDRKQUFlOzs4QkFDaEQsOERBQUNHLDhEQUFTQTs7Ozs7OEJBQ1YsOERBQUNHLDhEQUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO01BVHVCd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJAL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuXG5pbXBvcnQgeyBNb3ZpZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Nb3ZpZUNvbnRleHRcIjtcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW92aWVUYWJzIGZyb20gXCJAL2NvbXBvbmVudHMvbW92aWUtdGFic1wiO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCJAL2hvb2tzL3VzZURlYm91bmNlXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuY29uc3QgQVBJX1VSTDogc3RyaW5nID0gXCJodHRwczovL21vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tL1wiO1xuXG5jb25zdCBNb3ZpZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNb3ZpZVR5cGVbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2Jvb2ttYXJrZWRNb3ZpZXMsIHNldEJvb2ttYXJrZWRNb3ZpZXNdID0gdXNlU3RhdGU8W10+KFtdKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB1cmw6IEFQSV9VUkwsXG4gICAgcGFyYW1zOiB7XG4gICAgICBzOiBzZWFyY2gsXG4gICAgICByOiBcImpzb25cIixcbiAgICAgIHBhZ2U6IFwiMVwiLFxuICAgIH0sXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWX1gLFxuICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJtb3ZpZS1kYXRhYmFzZS1hbHRlcm5hdGl2ZS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZmV0Y2hNb3ZpZXM6ICgpID0+IFByb21pc2U8dm9pZD4gPSBhc3luYyAoKSA9PiB7XG4gICAgYXhpb3MucmVxdWVzdChvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5TZWFyY2gsIFwiaGVyZVwiKTtcbiAgICAgIHNldE1vdmllcyhyZXNwb25zZS5kYXRhLlNlYXJjaCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQgPSAoXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyBvblNlYXJjaERlYm91bmNlZChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQm9va21hcmsgPSAobW92aWU6IE1vdmllVHlwZSkgPT4ge1xuICAgIHNldEJvb2ttYXJrZWRNb3ZpZXMoWy4uLmJvb2ttYXJrZWRNb3ZpZXMsIG1vdmllXSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJib29rbWFya2VkTW92aWVzXCIsIEpTT04uc3RyaW5naWZ5KGJvb2ttYXJrZWRNb3ZpZXMpKTtcbiAgICAvLyBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9va21hcmtlZE1vdmllc1wiKSkge1xuICAgIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJib29rbWFya2VkTW92aWVzXCIsIEpTT04uc3RyaW5naWZ5KGJvb2ttYXJrZWRNb3ZpZXMpKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zdCBzdG9yZWRBcnJheSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm9va21hcmtlZE1vdmllc1wiKVxuICAgIC8vICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZEFycmF5KVxuICAgIC8vIH1cbiAgfTtcblxuICAvLyBjb25zdCBvblNlYXJjaERlYm91bmNlZCA9IHVzZURlYm91bmNlKHtcbiAgLy8gICBmdW5jOiBhc3luYyAodmFsdWUpID0+IHtcbiAgLy8gICAgIGF3YWl0IGZldGNoTW92aWVzKCk7XG4gIC8vICAgfSxcbiAgLy8gICB3YWl0OiAxMDAwLFxuICAvLyB9KTtcblxuICByZXR1cm4gKFxuICAgIDxNb3ZpZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIG1vdmllcyxcbiAgICAgICAgYm9va21hcmtlZE1vdmllcyxcbiAgICAgICAgZmV0Y2hNb3ZpZXMsXG4gICAgICAgIGhhbmRsZVNlYXJjaCxcbiAgICAgICAgaGFuZGxlQm9va21hcmssXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01vdmllQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPE1vdmllQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpbn0gJHtpbnRlci5jbGFzc05hbWV9YH0+XG4gICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgPE1vdmllVGFicyAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvTW92aWVDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNlYXJjaEJhciIsImF4aW9zIiwiTW92aWVDb250ZXh0IiwiTW92aWVUYWJzIiwiQVBJX1VSTCIsIk1vdmllQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJib29rbWFya2VkTW92aWVzIiwic2V0Qm9va21hcmtlZE1vdmllcyIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJzIiwiciIsInBhZ2UiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJmZXRjaE1vdmllcyIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIlNlYXJjaCIsImhhbmRsZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUJvb2ttYXJrIiwibW92aWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwiSG9tZSIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});