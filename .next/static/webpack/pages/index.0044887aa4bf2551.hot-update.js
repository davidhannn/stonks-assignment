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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useFetchMovies\": function() { return /* binding */ useFetchMovies; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useFetchMovies = ()=>{\n    const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const options = {\n        method: \"GET\",\n        url: \"https://movie-database-alternative.p.rapidapi.com/\",\n        params: {\n            s: \"Avengers Endgame\",\n            r: \"json\",\n            page: \"1\"\n        },\n        headers: {\n            \"content-type\": \"application/octet-stream\",\n            \"X-RapidAPI-Key\": \"c66a530934msh0750ff2e2debe17p1eb6bdjsnda6cfe0fca32\",\n            \"X-RapidAPI-Host\": \"movie-database-alternative.p.rapidapi.com\"\n        }\n    };\n    const fetchMovies = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(options).then((response)=>{\n            setMovie(response.data);\n        });\n        console.log(\"does it come here\");\n    // const response = await axios.request(options);\n    // console.log(response.data, \"response\");\n    // return response;\n    };\n    return {\n        movie,\n        fetchMovies\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VGZXRjaE1vdmllcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ087QUFFMUIsTUFBTUUsaUJBQWlCLElBQU07SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQTtJQUNsQyxNQUFNSSxVQUFVO1FBQ2RDLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxRQUFRO1lBQ05DLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxNQUFNO1FBQ1I7UUFDQUMsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsbUJBQW1CO1FBQ3JCO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLFVBQVk7UUFDOUJiLHFEQUFhLENBQUNLLFNBQVNVLElBQUksQ0FBQyxDQUFDQyxXQUFhO1lBQ3hDWixTQUFTWSxTQUFTQyxJQUFJO1FBQ3hCO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLGlEQUFpRDtJQUVqRCwwQ0FBMEM7SUFDMUMsbUJBQW1CO0lBQ3JCO0lBRUEsT0FBTztRQUNMaEI7UUFDQVU7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRmV0Y2hNb3ZpZXMudHM/MGI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hNb3ZpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbW92aWUtZGF0YWJhc2UtYWx0ZXJuYXRpdmUucC5yYXBpZGFwaS5jb20vXCIsXG4gICAgcGFyYW1zOiB7XG4gICAgICBzOiBcIkF2ZW5nZXJzIEVuZGdhbWVcIixcbiAgICAgIHI6IFwianNvblwiLFxuICAgICAgcGFnZTogXCIxXCIsXG4gICAgfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFxuICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcImM2NmE1MzA5MzRtc2gwNzUwZmYyZTJkZWJlMTdwMWViNmJkanNuZGE2Y2ZlMGZjYTMyXCIsXG4gICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcIm1vdmllLWRhdGFiYXNlLWFsdGVybmF0aXZlLnAucmFwaWRhcGkuY29tXCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBmZXRjaE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRNb3ZpZShyZXNwb25zZS5kYXRhKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImRvZXMgaXQgY29tZSBoZXJlXCIpO1xuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucmVxdWVzdChvcHRpb25zKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEsIFwicmVzcG9uc2VcIik7XG4gICAgLy8gcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbW92aWUsXG4gICAgZmV0Y2hNb3ZpZXMsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VGZXRjaE1vdmllcyIsIm1vdmllIiwic2V0TW92aWUiLCJvcHRpb25zIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwicyIsInIiLCJwYWdlIiwiaGVhZGVycyIsImZldGNoTW92aWVzIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useFetchMovies.ts\n"));

/***/ })

});