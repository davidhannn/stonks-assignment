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

/***/ "./components/search-bar.tsx":
/*!***********************************!*\
  !*** ./components/search-bar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst SearchBar = ()=>{\n    _s();\n    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const handleChange = (event)=>setValue(event.target.value);\n    // useFetchMovies();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                mb: \"8px\",\n                children: [\n                    \"Value: \",\n                    value\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/search-bar.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                value: value,\n                onChange: handleChange,\n                placeholder: \"Here is a sample placeholder\",\n                size: \"sm\"\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/search-bar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                // isLoading\n                loadingText: \"Submitting\",\n                colorScheme: \"teal\",\n                variant: \"outline\",\n                onClick: useFetchMovies,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/search-bar.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchBar, \"dBtK6I2q1m3rcfzPBa0nrbv/iCI=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaC1iYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQzdCO0FBRzFCLE1BQU1JLFlBQVksSUFBTTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILHFEQUFjLENBQUM7SUFDekMsTUFBTUssZUFBZSxDQUFDQyxRQUFVSCxTQUFTRyxNQUFNQyxNQUFNLENBQUNMLEtBQUs7SUFFM0Qsb0JBQW9CO0lBQ3BCLHFCQUNFOzswQkFDRSw4REFBQ0wsa0RBQUlBO2dCQUFDVyxJQUFHOztvQkFBTTtvQkFBUU47Ozs7Ozs7MEJBQ3ZCLDhEQUFDSixtREFBS0E7Z0JBQ0pJLE9BQU9BO2dCQUNQTyxVQUFVSjtnQkFDVkssYUFBWTtnQkFDWkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDWixvREFBTUE7Z0JBQ0wsWUFBWTtnQkFDWmEsYUFBWTtnQkFDWkMsYUFBWTtnQkFDWkMsU0FBUTtnQkFDUkMsU0FBU0M7MEJBQ1Y7Ozs7Ozs7O0FBS1A7R0F6Qk1mO0tBQUFBO0FBMkJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VhcmNoLWJhci50c3g/ZDUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaE1vdmllcyBmcm9tIFwiQC9ob29rcy91c2VGZXRjaE1vdmllc1wiO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4gc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAvLyB1c2VGZXRjaE1vdmllcygpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGV4dCBtYj1cIjhweFwiPlZhbHVlOiB7dmFsdWV9PC9UZXh0PlxuICAgICAgPElucHV0XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJIZXJlIGlzIGEgc2FtcGxlIHBsYWNlaG9sZGVyXCJcbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgIC8+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIC8vIGlzTG9hZGluZ1xuICAgICAgICBsb2FkaW5nVGV4dD1cIlN1Ym1pdHRpbmdcIlxuICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxuICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgIG9uQ2xpY2s9e3VzZUZldGNoTW92aWVzfVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sIm5hbWVzIjpbIlRleHQiLCJJbnB1dCIsIkJ1dHRvbiIsIlJlYWN0IiwiU2VhcmNoQmFyIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYiIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzaXplIiwibG9hZGluZ1RleHQiLCJjb2xvclNjaGVtZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwidXNlRmV0Y2hNb3ZpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/search-bar.tsx\n"));

/***/ })

});