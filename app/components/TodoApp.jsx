var React = require("react");
var TodoList = require("TodoList");
var TodoSearch = require("TodoSearch");
var AddTodo = require("AddTodo");

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: null,
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "Water flowers"
        },
        {
          id: 3,
          text: "Go to the Moon"
        },
        {
          id: 4,
          text: "Ask funny questions"
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert("New todo: " + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
