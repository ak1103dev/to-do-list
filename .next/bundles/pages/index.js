
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

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

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzAwMjY3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyVGV4dDogJycsXG4gICAgICBsaXN0OiBbXSxcbiAgICB9O1xuICB9XG5cbiAgYWRkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VyclRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbGlzdCA9IF8uY2xvbmVEZWVwKHRoaXMuc3RhdGUubGlzdCk7XG4gICAgaWYgKCFfLmlzRW1wdHkoY3VyclRleHQpKSB7XG4gICAgICBsaXN0LnB1c2goeyB0ZXh0OiBjdXJyVGV4dCwgc3RhdHVzOiAndW5hY2hpZXZlZCcgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0LCBjdXJyVGV4dDogJycgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGxpc3QsIGN1cnJUZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+VG8gRG8gTGlzdDwvaDE+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17Y3VyclRleHR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkfT5BZGQ8L2J1dHRvbj5cbiAgICAgICAge2xpc3QubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgIDxwIGtleT17aX0+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFiQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUpBO0FBY0E7QUFkQTs7Ozs7QUFyQkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        