var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },

  render: function() {
    var items = this.state.items;

    return (
      <div>
      <header id="header">
      <h1>todos</h1>
      <input
      id="new-todo"
      placeholder="Let's do this."
      value={this.state.text}
      onChange={this.onChange}
      onKeyDown={this.onKeyDown}
      autoFocus={true}
      />
      </header>
      <TodoList items={items} onItemChange={this.onItemChange}/>
      <TodoFooter items={items} onItemChange={this.onItemChange}/>
      </div>
    );
  },

  onChange: function(event) {
    this.setState({
      text: event.target.value
    });
  },

  onKeyDown: function(event) {
    // Check if this event was triggered by the Enter key.
    if (event.keyCode != 13) {
      return;
    }

    var text = this.state.text.trim();

    // Don't create an item if nothing was entered in.
    if (!text) {
      return;
    }

    // Create a new list of items to follow best practices.
    var items = this.state.items.concat({
      id: 'todo-' + Math.floor(Math.random() * 1e16),
      text: text,
      completed: false,
      editing: false,
    });

    this.setState({
      items: items,
      text: ''
    });
  },

  onItemChange: function(changes) {
    var prevItem = this.state.items.filter(function(element, index, array) {
      return element.id === changes.id;
    })[0];

    var prevIndex = this.state.items.indexOf(prevItem);

    if (changes.delete != true)
    {
      for (var change in changes) { prevItem[change] = changes[change]; }

      var items = this.state.items;
      items[prevIndex] = prevItem;

      this.setState({
        items: items,
      });
    }
    else
    {
      // delete this mofo
      var items = this.state.items;
      items.splice(prevIndex, 1);
      this.setState({
        items: items,
      });
    }

  }

});

React.render(<TodoApp />, document.getElementById('todoapp'));
