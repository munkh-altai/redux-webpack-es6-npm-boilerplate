'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Link = require('../components/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));
    }
  };
};

var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);

var _default = FilterLink;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/client/assets/javascripts/app/containers/FilterLink.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/client/assets/javascripts/app/containers/FilterLink.js');

  __REACT_HOT_LOADER__.register(FilterLink, 'FilterLink', 'src/client/assets/javascripts/app/containers/FilterLink.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/assets/javascripts/app/containers/FilterLink.js');
})();

;