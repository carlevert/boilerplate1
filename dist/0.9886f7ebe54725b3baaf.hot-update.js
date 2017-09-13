webpackHotUpdate(0,{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(50), __webpack_require__(186), __webpack_require__(190)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, react_1, css, classnames_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MyComponent extends react_1.default.Component {
        constructor(props) {
            super(props);
            this.styles = {
                component: {}
            };
            console.log(classnames_1.default(css.ababab, css.test));
        }
        render() {
            return react_1.default.createElement("div", { className: classnames_1.default(css.ababab, css.test) }, "hello world");
        }
    }
    exports.default = MyComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(50), __webpack_require__(99), __webpack_require__(185)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ReactDOM, TestComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.addEventListener("DOMContentLoaded", function (event) {
        const root = document.createElement("div");
        const body = document.querySelector("body");
        if (body == null)
            return;
        body.appendChild(root);
        ReactDOM.render(React.createElement(TestComponent_1.default, null), root);
    });
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

})
//# sourceMappingURL=0.9886f7ebe54725b3baaf.hot-update.js.map