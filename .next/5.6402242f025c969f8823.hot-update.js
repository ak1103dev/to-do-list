webpackHotUpdate(5,{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(545);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(546);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ak1103/to-do-list/pages/index.js?entry';


var Error = function (_Component) {
  (0, _inherits3.default)(Error, _Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).call(this));

    _this.add = function () {
      var currText = _this.state.currText;

      var list = _lodash2.default.cloneDeep(_this.state.list);
      if (!_lodash2.default.isEmpty(currText)) {
        list.push({ text: currText, status: 'unachieved' });
        _this.setState({ list: list, currText: '' });
      }
    };

    _this.state = {
      currText: '',
      list: []
    };
    return _this;
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          list = _state.list,
          currText = _state.currText;

      return _react2.default.createElement('div', { className: 'container', 'data-jsx': 1445209341,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 1445209341,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'To Do List'), _react2.default.createElement('input', { value: currText, onChange: function onChange(event) {
          return _this2.setState({ currText: event.target.value });
        }, 'data-jsx': 1445209341,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('button', { onClick: this.add, 'data-jsx': 1445209341,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Add'), list.map(function (item, i) {
        return _react2.default.createElement('p', { key: i, 'data-jsx': 1445209341,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, item.text);
      }), _react2.default.createElement(_style2.default, {
        styleId: 1445209341,
        css: '.container[data-jsx="1445209341"]{-webkit-text-align:center;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHK0IsOENBQVciLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWsxMTAzL3RvLWRvLWxpc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJUZXh0OiAnJyxcbiAgICAgIGxpc3Q6IFtdLFxuICAgIH07XG4gIH1cblxuICBhZGQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyVGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsaXN0ID0gXy5jbG9uZURlZXAodGhpcy5zdGF0ZS5saXN0KTtcbiAgICBpZiAoIV8uaXNFbXB0eShjdXJyVGV4dCkpIHtcbiAgICAgIGxpc3QucHVzaCh7IHRleHQ6IGN1cnJUZXh0LCBzdGF0dXM6ICd1bmFjaGlldmVkJyB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3QsIGN1cnJUZXh0OiAnJyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgY3VyclRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5UbyBEbyBMaXN0PC9oMT5cbiAgICAgICAgPGlucHV0IHZhbHVlPXtjdXJyVGV4dH0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJUZXh0OiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGR9PkFkZDwvYnV0dG9uPlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgPHAga2V5PXtpfT57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Error;
}(_react.Component);

exports.default = Error;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/ak1103/to-do-list/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/ak1103/to-do-list/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42NDAyMjQyZjAyNWM5NjlmODgyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJUZXh0OiAnJyxcbiAgICAgIGxpc3Q6IFtdLFxuICAgIH07XG4gIH1cblxuICBhZGQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyVGV4dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsaXN0ID0gXy5jbG9uZURlZXAodGhpcy5zdGF0ZS5saXN0KTtcbiAgICBpZiAoIV8uaXNFbXB0eShjdXJyVGV4dCkpIHtcbiAgICAgIGxpc3QucHVzaCh7IHRleHQ6IGN1cnJUZXh0LCBzdGF0dXM6ICd1bmFjaGlldmVkJyB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3QsIGN1cnJUZXh0OiAnJyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgY3VyclRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5UbyBEbyBMaXN0PC9oMT5cbiAgICAgICAgPGlucHV0IHZhbHVlPXtjdXJyVGV4dH0gb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJUZXh0OiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGR9PkFkZDwvYnV0dG9uPlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgPHAga2V5PXtpfT57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYkE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7Ozs7O0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFKQTtBQWNBO0FBZEE7Ozs7O0FBckJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9