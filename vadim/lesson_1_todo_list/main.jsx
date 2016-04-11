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
    render: function() {
        return (
            <div>
                <h1>Add task</h1>
                <div>
                    <input type="text" /><button>add</button>
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
    render: function() {
        return (
            <li key="{this.props.id}"><input type="checkbox" /><span>{this.props.name}</span></li>
        );
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);