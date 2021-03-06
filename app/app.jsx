var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var {Router, Route, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require("TodoApp");
var actions = require("actions");
var store = require("configureStore").configure();
var TodoAPI = require("TodoAPI");

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  // console.log("New state:", state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo("Clean the yard"));
// store.dispatch(actions.setSearchText("yard"));
// store.dispatch(actions.toggleShowCompleted());

// Wire up Foundation
$(document).foundation();

// Load style
require("style!css!sass!./style/app.scss");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
