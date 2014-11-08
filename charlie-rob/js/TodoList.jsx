var TodoList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var items = this.props.items;

    // This should not render if there are no todo items.
    if (items.length == 0) {
      return null;
    }

    var onItemChange = this.props.onItemChange;

    var todos = items.map(function(item) {
      return <TodoItem item={item} onItemChange={onItemChange}/>;
    });

    // TODO: Add onChange listener and checked attribute to checkbox.
    return (
      <section id="main">
      <input id="toggle-all" type="checkbox" onClick={this.completeAll} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul id="todo-list">{todos}</ul>
      </section>
    );
  },

  completeAll: function() {
    for (var i = 0; i < this.props.items.length; i++) {
      var changes = {
        'completed': !this.props.items[i].completed,
        'id': this.props.items[i].id,
      };
      this.props.onItemChange(changes);
    }
  }
});
