'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {todo_data} from './todo_data';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            displayedToDoList: todo_data
        };
    },
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

        // var todo_from_storage = localStorage["todo_list"]; // alternative localStorage.getItem('todo_list');
        // todo_from_storage.push({status: 0, title: 'How add title?'});
        // localStorage["todo_list"] = todo_from_storage; // alternative localStorage.setItem('todo_list', todo_from_storage)

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
                {todo_data.map((task, i) => <TodoTaskLine key={i} title={task.title} />)}
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
            <li>
                <input
                    type="checkbox"
                    // checked={}
                    // onChange={}
                />

                <span onDoubleClick={this.handleEdit}>{this.props.title}</span>

                <input
                    type="text"
                    value={this.props.title}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleKeyDown}
                />
            </li>
        );
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
);