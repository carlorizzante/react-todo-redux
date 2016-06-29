var React = require("react");
var TodoItem = require("TodoItem");

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((item) => {
        return (
          <li><TodoItem key={item.id} {...item}/></li>
        );
      });
    }

    return (
      <div>
        <ol>
          {renderTodos()}
        </ol>
      </div>
    );
  }
});

module.exports = TodoList;
