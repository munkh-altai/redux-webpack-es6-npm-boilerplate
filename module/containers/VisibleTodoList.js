'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _TodoList = require('../components/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.completed;
      });
    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: function onTodoClick(id) {
      dispatch((0, _actions.toggleTodo)(id));
    }
  };
};

var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);

var _default = VisibleTodoList;
exports.default = _default;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getVisibleTodos, 'getVisibleTodos', 'src/client/assets/javascripts/app/containers/VisibleTodoList.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/client/assets/javascripts/app/containers/VisibleTodoList.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/client/assets/javascripts/app/containers/VisibleTodoList.js');

  __REACT_HOT_LOADER__.register(VisibleTodoList, 'VisibleTodoList', 'src/client/assets/javascripts/app/containers/VisibleTodoList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/client/assets/javascripts/app/containers/VisibleTodoList.js');
})();

;