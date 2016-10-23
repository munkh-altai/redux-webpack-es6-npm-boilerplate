"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var active = _ref.active;
  var children = _ref.children;
  var _onClick = _ref.onClick;

  if (active) {
    return _react2.default.createElement(
      "span",
      null,
      children
    );
  }

  return _react2.default.createElement(
    "a",
    { href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        _onClick();
      }
    },
    children
  );
};

Link.propTypes = {
  active: _react.PropTypes.bool.isRequired,
  children: _react.PropTypes.node.isRequired,
  onClick: _react.PropTypes.func.isRequired
};

var _default = Link;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Link, "Link", "src/client/assets/javascripts/app/components/Link.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/client/assets/javascripts/app/components/Link.js");
})();

;