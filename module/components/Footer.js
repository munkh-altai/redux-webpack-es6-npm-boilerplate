'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterLink = require('../containers/FilterLink');

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'p',
    null,
    'Show:',
    " ",
    _react2.default.createElement(
      _FilterLink2.default,
      { filter: 'SHOW_ALL' },
      'All'
    ),
    ", ",
    _react2.default.createElement(
      _FilterLink2.default,
      { filter: 'SHOW_ACTIVE' },
      'Active'
    ),
    ", ",
    _react2.default.createElement(
      _FilterLink2.default,
      { filter: 'SHOW_COMPLETED' },
      'Completed'
    )
  );
};

var _default = Footer;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, 'Footer', 'src/client/assets/javascripts/app/components/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/assets/javascripts/app/components/Footer.js');
})();

;