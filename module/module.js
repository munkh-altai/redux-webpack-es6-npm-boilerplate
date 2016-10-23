'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleName = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

var ModuleName = exports.ModuleName = function ModuleName() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
  );
};

var _default = ModuleName;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, 'store', 'src/client/assets/javascripts/app/module.js');

  __REACT_HOT_LOADER__.register(ModuleName, 'ModuleName', 'src/client/assets/javascripts/app/module.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/assets/javascripts/app/module.js');
})();

;