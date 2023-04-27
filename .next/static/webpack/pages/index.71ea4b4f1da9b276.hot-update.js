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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/search-bar */ \"./components/search-bar.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _context_MovieContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/MovieContext */ \"./context/MovieContext.ts\");\n/* harmony import */ var _components_movie_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/movie-tabs */ \"./components/movie-tabs.tsx\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useDebounce */ \"./hooks/useDebounce.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst API_URL = \"https://movie-database-alternative.p.rapidapi.com/\";\nconst MovieContextProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const loadedBookmarks = localStorage.getItem(\"bookmarkedMovies\") ? JSON.parse(localStorage.getItem(\"bookmarkedMovies\")) : []; // new\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [bookmarkedMovies, setBookmarkedMovies] = useState<[]>([]);\n    const [bookmarkedMovies, setBookmarkedMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(bookmarkedMovies);\n    // useEffect(() => {\n    //   const storedArray = localStorage.getItem(\"bookmarkedMovies\");\n    //   console.log(storedArray, \"storedArray\");\n    //   if (storedArray) {\n    //     const parsedArray = JSON.parse(storedArray);\n    //     setBookmarkedMovies([...parsedArray]);\n    //   }\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"bookmarkedMovies\", JSON.stringify(bookmarkedMovies));\n    // const storedArray = localStorage.getItem('bookmarkedMovies')\n    // if (storedArray) {\n    // } else {\n    // }\n    // if (localStorage.getItem('bookmarkedMovies')) {\n    //         const storedArray = localStorage.setItem(\"bookmarkedMovies\")\n    //   const parsedArray = JSON.parse(storedArray)\n    // }\n    }, [\n        bookmarkedMovies\n    ]);\n    // useEffect(() => {\n    //   const onbeforeunloadFn = () => {\n    //     localStorage.setItem(\n    //       \"bookmarkedMovies\",\n    //       JSON.stringify(bookmarkedMovies)\n    //     );\n    //   };\n    //   window.addEventListener(\"beforeunload\", onbeforeunloadFn);\n    //   return () => {\n    //     window.removeEventListener(\"beforeunload\", onbeforeunloadFn);\n    //   };\n    // }, []);\n    const options = {\n        method: \"GET\",\n        url: API_URL,\n        params: {\n            s: search,\n            r: \"json\",\n            page: \"1\"\n        },\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": \"\".concat(\"c66a530934msh0750ff2e2debe17p1eb6bdjsnda6cfe0fca32\"),\n            \"X-RapidAPI-Host\": \"movie-database-alternative.p.rapidapi.com\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request(options).then((response)=>{\n            setMovies(response.data.Search);\n        });\n    };\n    const handleSearch = (e)=>{\n        setSearch(e.target.value);\n    // onSearchDebounced();\n    };\n    const handleBookmark = (movie)=>{\n        setBookmarkedMovies([\n            ...bookmarkedMovies,\n            movie\n        ]);\n    // localStorage.setItem(\"bookmarkedMovies\", JSON.stringify(bookmarkedMovies));\n    // if (!localStorage.getItem(\"bookmarkedMovies\")) {\n    //   localStorage.setItem(\"bookmarkedMovies\", JSON.stringify(bookmarkedMovies))\n    // } else {\n    //   const storedArray = localStorage.setItem(\"bookmarkedMovies\")\n    //   const parsedArray = JSON.parse(storedArray)\n    // }\n    };\n    const onSearchDebounced = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        func: fetchMovies,\n        wait: 1000\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MovieContext__WEBPACK_IMPORTED_MODULE_3__.MovieContext.Provider, {\n        value: {\n            movies,\n            bookmarkedMovies,\n            fetchMovies,\n            handleSearch,\n            handleBookmark\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MovieContextProvider, \"Asis+/11M3OcV04hbbPR25VWG6w=\", false, function() {\n    return [\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = MovieContextProvider;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main), \" \").concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default().className)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_movie_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n            lineNumber: 130,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidhan/Desktop/stonks-assignment/pages/index.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"MovieContextProvider\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJAL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuXG5pbXBvcnQgeyBNb3ZpZVR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9Nb3ZpZUNvbnRleHRcIjtcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW92aWVUYWJzIGZyb20gXCJAL2NvbXBvbmVudHMvbW92aWUtdGFic1wiO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCJAL2hvb2tzL3VzZURlYm91bmNlXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuY29uc3QgQVBJX1VSTDogc3RyaW5nID0gXCJodHRwczovL21vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tL1wiO1xuXG5jb25zdCBNb3ZpZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzV2l0aENoaWxkcmVuKSA9PiB7XG4gIGNvbnN0IGxvYWRlZEJvb2ttYXJrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9va21hcmtlZE1vdmllc1wiKVxuICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvb2ttYXJrZWRNb3ZpZXNcIikpXG4gICAgOiBbXTsgLy8gbmV3XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxNb3ZpZVR5cGVbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgLy8gY29uc3QgW2Jvb2ttYXJrZWRNb3ZpZXMsIHNldEJvb2ttYXJrZWRNb3ZpZXNdID0gdXNlU3RhdGU8W10+KFtdKTtcbiAgY29uc3QgW2Jvb2ttYXJrZWRNb3ZpZXMsIHNldEJvb2ttYXJrZWRNb3ZpZXNdID1cbiAgICB1c2VTdGF0ZTxbXT4oYm9va21hcmtlZE1vdmllcyk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBzdG9yZWRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9va21hcmtlZE1vdmllc1wiKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKHN0b3JlZEFycmF5LCBcInN0b3JlZEFycmF5XCIpO1xuICAvLyAgIGlmIChzdG9yZWRBcnJheSkge1xuICAvLyAgICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZEFycmF5KTtcbiAgLy8gICAgIHNldEJvb2ttYXJrZWRNb3ZpZXMoWy4uLnBhcnNlZEFycmF5XSk7XG4gIC8vICAgfVxuICAvLyB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJvb2ttYXJrZWRNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkoYm9va21hcmtlZE1vdmllcykpO1xuICAgIC8vIGNvbnN0IHN0b3JlZEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb2ttYXJrZWRNb3ZpZXMnKVxuXG4gICAgLy8gaWYgKHN0b3JlZEFycmF5KSB7XG5cbiAgICAvLyB9IGVsc2Uge1xuXG4gICAgLy8gfVxuICAgIC8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va21hcmtlZE1vdmllcycpKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBzdG9yZWRBcnJheSA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm9va21hcmtlZE1vdmllc1wiKVxuICAgIC8vICAgY29uc3QgcGFyc2VkQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZEFycmF5KVxuICAgIC8vIH1cbiAgfSwgW2Jvb2ttYXJrZWRNb3ZpZXNdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IG9uYmVmb3JldW5sb2FkRm4gPSAoKSA9PiB7XG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgLy8gICAgICAgXCJib29rbWFya2VkTW92aWVzXCIsXG4gIC8vICAgICAgIEpTT04uc3RyaW5naWZ5KGJvb2ttYXJrZWRNb3ZpZXMpXG4gIC8vICAgICApO1xuICAvLyAgIH07XG5cbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBvbmJlZm9yZXVubG9hZEZuKTtcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgb25iZWZvcmV1bmxvYWRGbik7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHVybDogQVBJX1VSTCxcbiAgICBwYXJhbXM6IHtcbiAgICAgIHM6IHNlYXJjaCxcbiAgICAgIHI6IFwianNvblwiLFxuICAgICAgcGFnZTogXCIxXCIsXG4gICAgfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZfWAsXG4gICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcIm1vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBmZXRjaE1vdmllczogKCkgPT4gUHJvbWlzZTx2b2lkPiA9IGFzeW5jICgpID0+IHtcbiAgICBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRNb3ZpZXMocmVzcG9uc2UuZGF0YS5TZWFyY2gpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaDogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkID0gKFxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XG4gICAgLy8gb25TZWFyY2hEZWJvdW5jZWQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCb29rbWFyayA9IChtb3ZpZTogTW92aWVUeXBlKSA9PiB7XG4gICAgc2V0Qm9va21hcmtlZE1vdmllcyhbLi4uYm9va21hcmtlZE1vdmllcywgbW92aWVdKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJvb2ttYXJrZWRNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkoYm9va21hcmtlZE1vdmllcykpO1xuICAgIC8vIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJib29rbWFya2VkTW92aWVzXCIpKSB7XG4gICAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJvb2ttYXJrZWRNb3ZpZXNcIiwgSlNPTi5zdHJpbmdpZnkoYm9va21hcmtlZE1vdmllcykpXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnN0IHN0b3JlZEFycmF5ID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJib29rbWFya2VkTW92aWVzXCIpXG4gICAgLy8gICBjb25zdCBwYXJzZWRBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkQXJyYXkpXG4gICAgLy8gfVxuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoRGVib3VuY2VkID0gdXNlRGVib3VuY2Uoe1xuICAgIGZ1bmM6IGZldGNoTW92aWVzLFxuICAgIHdhaXQ6IDEwMDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPE1vdmllQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbW92aWVzLFxuICAgICAgICBib29rbWFya2VkTW92aWVzLFxuICAgICAgICBmZXRjaE1vdmllcyxcbiAgICAgICAgaGFuZGxlU2VhcmNoLFxuICAgICAgICBoYW5kbGVCb29rbWFyayxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTW92aWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8TW92aWVDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tYWlufSAke2ludGVyLmNsYXNzTmFtZX1gfT5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8TW92aWVUYWJzIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9Nb3ZpZUNvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2VhcmNoQmFyIiwiYXhpb3MiLCJNb3ZpZUNvbnRleHQiLCJNb3ZpZVRhYnMiLCJ1c2VEZWJvdW5jZSIsIkFQSV9VUkwiLCJNb3ZpZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibG9hZGVkQm9va21hcmtzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIm1vdmllcyIsInNldE1vdmllcyIsInNlYXJjaCIsInNldFNlYXJjaCIsImJvb2ttYXJrZWRNb3ZpZXMiLCJzZXRCb29rbWFya2VkTW92aWVzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJzIiwiciIsInBhZ2UiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJmZXRjaE1vdmllcyIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiU2VhcmNoIiwiaGFuZGxlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQm9va21hcmsiLCJtb3ZpZSIsIm9uU2VhcmNoRGVib3VuY2VkIiwiZnVuYyIsIndhaXQiLCJQcm92aWRlciIsIkhvbWUiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});