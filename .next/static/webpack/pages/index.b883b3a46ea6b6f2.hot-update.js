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

/***/ "./hooks/useFetchMovies.ts":
/*!*********************************!*\
  !*** ./hooks/useFetchMovies.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useFetchMovies = ()=>{\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const options = {\n        method: \"GET\",\n        url: \"https://movie-database-alternative.p.rapidapi.com/\",\n        params: {\n            s: \"Avengers Endgame\",\n            r: \"json\",\n            page: \"1\"\n        },\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": \"c66a530934msh0750ff2e2debe17p1eb6bdjsnda6cfe0fca32\",\n            \"X-RapidAPI-Host\": \"movie-database-alternative.p.rapidapi.com\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(options).then((response)=>{\n            setMovie(response.data);\n        });\n        console.log(\"does it come here\");\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(options);\n        console.log(response.data, \"response\");\n        return response;\n    };\n    console.log(\"??\");\n    // try {\n    // \tconsole.log(response.data);\n    // } catch (error) {\n    // \tconsole.error(error);\n    // }\n    return {\n        fetchMovies\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFetchMovies);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VGZXRjaE1vdmllcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQTBCO0FBQ087QUFFakMsTUFBTUUsaUJBQWlCLElBQU07SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQTtJQUNsQyxNQUFNSSxVQUFVO1FBQ2RDLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxRQUFRO1lBQ05DLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxNQUFNO1FBQ1I7UUFDQUMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsbUJBQW1CO1FBQ3JCO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLFVBQVk7UUFDOUJiLHFEQUFhLENBQUNLLFNBQVNVLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ3hDWixTQUFTWSxTQUFTQyxJQUFJO1FBQ3hCO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1ILFdBQVcsTUFBTWhCLHFEQUFhLENBQUNLO1FBRXJDYSxRQUFRQyxHQUFHLENBQUNILFNBQVNDLElBQUksRUFBRTtRQUMzQixPQUFPRDtJQUNUO0lBRUFFLFFBQVFDLEdBQUcsQ0FBQztJQUNaLFFBQVE7SUFFUiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixJQUFJO0lBRUosT0FBTztRQUNMTjtJQUNGO0FBQ0Y7QUFFQSwrREFBZVgsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VGZXRjaE1vdmllcy50cz8wYjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZUZldGNoTW92aWVzID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIHVybDogXCJodHRwczovL21vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tL1wiLFxuICAgIHBhcmFtczoge1xuICAgICAgczogXCJBdmVuZ2VycyBFbmRnYW1lXCIsXG4gICAgICByOiBcImpzb25cIixcbiAgICAgIHBhZ2U6IFwiMVwiLFxuICAgIH0sXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCJjNjZhNTMwOTM0bXNoMDc1MGZmMmUyZGViZTE3cDFlYjZiZGpzbmRhNmNmZTBmY2EzMlwiLFxuICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJtb3ZpZS1kYXRhYmFzZS1hbHRlcm5hdGl2ZS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXhpb3MucmVxdWVzdChvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0TW92aWUocmVzcG9uc2UuZGF0YSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJkb2VzIGl0IGNvbWUgaGVyZVwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qob3B0aW9ucyk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLCBcInJlc3BvbnNlXCIpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhcIj8/XCIpO1xuICAvLyB0cnkge1xuXG4gIC8vIFx0Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vIFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG4gIC8vIH1cblxuICByZXR1cm4ge1xuICAgIGZldGNoTW92aWVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hNb3ZpZXM7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUZldGNoTW92aWVzIiwibW92aWUiLCJzZXRNb3ZpZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJzIiwiciIsInBhZ2UiLCJoZWFkZXJzIiwiZmV0Y2hNb3ZpZXMiLCJyZXF1ZXN0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useFetchMovies.ts\n"));

/***/ })

});