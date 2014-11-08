var TodoFooter = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var items = this.props.items;
    var count = items.length;

    // This should not render if there are no todo items.
    if (count == 0) {
      return null;
    }

    var completed = 0;
    var clearButton;

    for (var i = 0; i < count; i++) {
      if (items[i].completed) {
        completed++;
      }
    }

    if (completed > 0) {
      clearButton = (
        // TODO: Attach onClick listener.
        <button id="clear-completed" onClick={this.clearCompleted}>
        Clear completed ({completed})
        </button>
      );
    }

    var remaining = count - completed;

    return (
      <footer id="footer">
      <span id="todo-count">
      <strong>{remaining}</strong>
      {remaining == 1 ? 'item' : 'items'} left
      </span>
      {clearButton}
      </footer>
    );
  },

  clearCompleted: function() {
    var onItemChange = this.props.onItemChange;
    this.props.items.forEach(function(element, index, array) {
      if (element.completed === true)
      {
        var changes = {
          'id': element.id,
          'delete': true
        }

        onItemChange(changes);
      }
    })

  }
});
