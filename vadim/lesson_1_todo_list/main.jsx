'use strict';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var tasks = [
    {id: 1, status: 0, name: 'Finish ToDo App'},
    {id: 2, status: 0, name: 'Go to lunch'},
    {id: 3, status: 0, name: 'Write email to Pavel'}
];

var TodoApp = React.createClass({
    render: function() {
        return (
            <div>
                <TodoAddTask />
                <TodoTaskList />
            </div>
        );
    }
});

var TodoAddTask = React.createClass({
    handleKeyDown: function (event) {
        if (event.which === ESCAPE_KEY) {
            console.log('TodoAddTask: Escape button detected in add task text field');
        } else if (event.which === ENTER_KEY) {
            console.log('TodoAddTask: Enter button detected in add task text field');
            this.addTaskAction();
        }
    },
    addTaskAction: function() {
        console.log('TodoAddTask: addTaskAction action');
    },
    render: function() {
        return (
            <div>
                <h1>Add task</h1>
                <div>
                    <input
                        type="text"
                        onKeyDown={this.handleKeyDown}
                        onBlur={this.addTaskAction}
                    />

                    <button onClick={this.addTaskAction}>add</button>
                </div>
            </div>
        );
    }
});

var TodoTaskList = React.createClass({
    render: function() {
        return (
            <ul>
                {tasks.map((task, i) => <TodoTaskLine id={i} name={task.name} />)}
            </ul>
        );
    }
});

var TodoTaskLine = React.createClass({
    handleKeyDown: function (event) {
        if (event.which === ESCAPE_KEY) {
            console.log('TodoTaskLine: Escape button detected in add task text field');
        } else if (event.which === ENTER_KEY) {
            console.log('TodoTaskLine: Enter button detected in add task text field');
        }
    },
    handleEdit: function (event) {
        console.log('TodoTaskLine: Double click event');
    },
    render: function() {
        return (
            <li key="{this.props.id}">
                <input
                    type="checkbox"
                    checked=""
                    onChange=""
                />

                <span onDoubleClick={this.handleEdit}>{this.props.name}</span>

                <input
                    value={this.props.name}
                    onKeyDown={this.handleKeyDown}
                />
            </li>
        );
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);