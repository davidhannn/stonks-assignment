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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetchMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useFetchMovies */ \"./hooks/useFetchMovies.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SearchBar = ()=>{\n    _s();\n    const [value, setValue] = useState(\"\");\n    const { movies , fetchMovies  } = (0,_hooks_useFetchMovies__WEBPACK_IMPORTED_MODULE_2__.useFetchMovies)();\n    const handleChange = (event)=>setValue(event.target.value);\n    // useFetchMovies();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                mb: \"8px\",\n                children: [\n                    \"Value: \",\n                    value\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/search-bar.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                value: value,\n                onChange: handleChange,\n                placeholder: \"Here is a sample placeholder\",\n                size: \"sm\"\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/search-bar.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                // isLoading\n                loadingText: \"Submitting\",\n                colorScheme: \"teal\",\n                variant: \"outline\",\n                onClick: fetchMovies,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/davidhan/Desktop/stonks-assignment/components/search-bar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchBar, \"+XWhR5xuxGWopvDB1TjjnmcVR3E=\", false, function() {\n    return [\n        _hooks_useFetchMovies__WEBPACK_IMPORTED_MODULE_2__.useFetchMovies\n    ];\n});\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaC1iYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUM3QjtBQUM4QjtBQUV4RCxNQUFNSyxZQUFZLElBQU07O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHQyxTQUFTO0lBQ25DLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxZQUFXLEVBQUUsR0FBR04scUVBQWNBO0lBQzlDLE1BQU1PLGVBQWUsQ0FBQ0MsUUFBVUwsU0FBU0ssTUFBTUMsTUFBTSxDQUFDUCxLQUFLO0lBRTNELG9CQUFvQjtJQUNwQixxQkFDRTs7MEJBQ0UsOERBQUNOLGtEQUFJQTtnQkFBQ2MsSUFBRzs7b0JBQU07b0JBQVFSOzs7Ozs7OzBCQUN2Qiw4REFBQ0wsbURBQUtBO2dCQUNKSyxPQUFPQTtnQkFDUFMsVUFBVUo7Z0JBQ1ZLLGFBQVk7Z0JBQ1pDLE1BQUs7Ozs7OzswQkFFUCw4REFBQ2Ysb0RBQU1BO2dCQUNMLFlBQVk7Z0JBQ1pnQixhQUFZO2dCQUNaQyxhQUFZO2dCQUNaQyxTQUFRO2dCQUNSQyxTQUFTWDswQkFDVjs7Ozs7Ozs7QUFLUDtHQTFCTUw7O1FBRTRCRCxpRUFBY0E7OztLQUYxQ0M7QUE0Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2gtYmFyLnRzeD9kNTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQsIElucHV0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRmV0Y2hNb3ZpZXMgfSBmcm9tIFwiQC9ob29rcy91c2VGZXRjaE1vdmllc1wiO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgbW92aWVzLCBmZXRjaE1vdmllcyB9ID0gdXNlRmV0Y2hNb3ZpZXMoKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuXG4gIC8vIHVzZUZldGNoTW92aWVzKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUZXh0IG1iPVwiOHB4XCI+VmFsdWU6IHt2YWx1ZX08L1RleHQ+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkhlcmUgaXMgYSBzYW1wbGUgcGxhY2Vob2xkZXJcIlxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgLz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgLy8gaXNMb2FkaW5nXG4gICAgICAgIGxvYWRpbmdUZXh0PVwiU3VibWl0dGluZ1wiXG4gICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgb25DbGljaz17ZmV0Y2hNb3ZpZXN9XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iXSwibmFtZXMiOlsiVGV4dCIsIklucHV0IiwiQnV0dG9uIiwiUmVhY3QiLCJ1c2VGZXRjaE1vdmllcyIsIlNlYXJjaEJhciIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsIm1vdmllcyIsImZldGNoTW92aWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYiIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzaXplIiwibG9hZGluZ1RleHQiLCJjb2xvclNjaGVtZSIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/search-bar.tsx\n"));

/***/ })

});