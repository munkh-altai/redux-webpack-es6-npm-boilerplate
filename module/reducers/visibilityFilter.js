'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

var _default = visibilityFilter;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(visibilityFilter, 'visibilityFilter', 'src/client/assets/javascripts/app/reducers/visibilityFilter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/assets/javascripts/app/reducers/visibilityFilter.js');
})();

;