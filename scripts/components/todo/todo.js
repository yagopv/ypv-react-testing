var TodoList =  React.createClass({
    render: function() {
        var items = this.props.data.map(function(item) {
            return (
              <p>{ item }</p>
            );
        });

        return (
            <div>
                { items }
            </div>
        )
    }
});

var TodoForm =  React.createClass({
    addItem: function(e) {
        e.preventDefault();
        var itemText = React.findDOMNode(this.refs.itemText).value.trim();
        if (itemText) {
            this.props.addItem(itemText)
        }
    },
    tryAddItem: function(e) {
        e.preventDefault();
    },
    render: function() {
        return (
            <form role="form">
                <legend>Add new items</legend>
                <div className="form-group col-xs-8">
                    <input type="text" className="form-control" placeholder="Enter todo ..." ref="itemText" onKeyPress={ this.tryAddItem } />
                </div>
                <div className="form-group col-xs-4">
                    <button type="submit" className="btn btn-primary" onClick={ this.addItem }>Add</button>
                </div>
            </form>
        )
    }
});

var Todo =  React.createClass({
    getInitialState: function() {
        return {
            items: []
        }
    },
    addItem: function(item) {
        this.state.items.push(item);
        this.setState();
    },
    render: function() {
        return (
            <div>
                <TodoList data={ this.state.items }  />
                <TodoForm addItem={ this.addItem } />
            </div>
        )
    }
});