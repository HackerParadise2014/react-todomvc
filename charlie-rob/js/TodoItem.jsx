/*
List items should get the class 'editing' when editing
and 'completed' when marked as completed (item.complete).

REMINDER:
- Use 'className' attribute in JSX instead of 'class'
- Use 'onDoubleClick' to attach double click listener.
*/

var TodoItem = React.createClass({
propTypes: {
item: React.PropTypes.object.isRequired
},

getInitialState: function() {
  return {text: ''};
},

render: function() {
  var cx = React.addons.classSet;
  var classes = cx({
    'completed': this.props.item.completed,
    'editing': this.props.item.editing
  });

  return(
    <li className={classes}
    onDoubleClick={this.onDoubleClick}>
    <div className="view">
    <input type="checkbox" className="toggle"
    onClick={this.completeCheckbox}
    checked={this.props.item.completed ? 'checked' : ''} />
    <label>{this.props.item.text}</label>
    <button className="destroy" onClick={this.deleteItem} />
    </div>
    <input className="edit" defaultValue={this.props.item.text}
      onKeyDown={this.onKeyDown} />
    </li>
  );
},

completeCheckbox: function() {
  var changes = {
    'completed': !this.props.item.completed,
    'id': this.props.item.id
  }
  this.props.onItemChange(changes);
},

onDoubleClick: function() {
  var changes = {
    'editing': true,
    'id': this.props.item.id
  }
  this.props.onItemChange(changes);
},

onKeyDown: function(event) {
  if (event.keyCode != 13) {
    return;
  }

  var changes = {
    'editing': false,
    'text': event.target.value,
    'id': this.props.item.id
  }
  this.props.onItemChange(changes);
},

deleteItem: function() {
  var changes = {
    'id': this.props.item.id,
    'delete': true
  }

  this.props.onItemChange(changes);
}

});
