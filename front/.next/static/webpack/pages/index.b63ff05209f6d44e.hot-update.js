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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Upload */ \"./components/Upload.js\");\n/* harmony import */ var _components_Mint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Mint */ \"./components/Mint.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Cryptokey DApp : Home\"\n                    }, void 0, false, {\n                        fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by cryptokey app\"\n                    }, void 0, false, {\n                        fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    width: \"800\",\n                    height: \"315\",\n                    src: \"https://www.youtube.com/embed/omwPuLRim0U?autoplay=1&mute=1\"\n                }, void 0, false, {\n                    fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n                    status: \"warning\",\n                    width: \"50%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AlertIcon, {}, void 0, false, {\n                            fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        \"Please, connect your Wallet!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/fab/COURSALYRA/Cryptokey/front/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"zfhL8yMEhsc9LbuqnTKJ2EdeNdk=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDbUI7QUFDYjtBQUNhO0FBSXRCO0FBQ2U7QUFDSjtBQUVyQixTQUFTUSxPQUFPOztJQUU3QixNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHUCxpREFBVUE7SUFFbEMscUJBQ0U7OzBCQUNFLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDVTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDZixpRUFBTUE7MEJBQ0pRLDRCQUNHLDhEQUFDUTtvQkFBT0MsT0FBTTtvQkFBTUMsUUFBTztvQkFDM0JDLEtBQUk7Ozs7O3lDQUdOLDhEQUFDaEIsbURBQUtBO29CQUFDaUIsUUFBTztvQkFBVUgsT0FBTTs7c0NBQzVCLDhEQUFDYix1REFBU0E7Ozs7O3dCQUFHOzs7Ozs7d0JBR2hCOzs7Ozs7OztBQUlULENBQUM7R0ExQnVCRzs7UUFFRU4sNkNBQVVBOzs7S0FGWk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgQXNwZWN0UmF0aW8gIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgVXBsb2FkIGZyb20gJ0AvY29tcG9uZW50cy9VcGxvYWQnXG5pbXBvcnQgTWludCBmcm9tICdAL2NvbXBvbmVudHMvTWludCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCB7IGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KClcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3J5cHRva2V5IERBcHAgOiBIb21lPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcnlwdG9rZXkgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjMxNVwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9vbXdQdUxSaW0wVT9hdXRvcGxheT0xJm11dGU9MVwiPlxuICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEFsZXJ0IHN0YXR1cz0nd2FybmluZycgd2lkdGg9XCI1MCVcIj5cbiAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgIFBsZWFzZSwgY29ubmVjdCB5b3VyIFdhbGxldCFcbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkxheW91dCIsInVzZUFjY291bnQiLCJBc3BlY3RSYXRpbyIsIkFsZXJ0IiwiQWxlcnRJY29uIiwiVXBsb2FkIiwiTWludCIsIkhvbWUiLCJpc0Nvbm5lY3RlZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});