(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _todo = require('./todo');

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./todo":2,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _todo_data = require('./todo_data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var TodoApp = _react2.default.createClass({
    displayName: 'TodoApp',

    getInitialState: function getInitialState() {
        return {
            displayedToDoList: _todo_data.todo_data
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(TodoAddTask, null),
            _react2.default.createElement(TodoTaskList, null)
        );
    }
});

var TodoAddTask = _react2.default.createClass({
    displayName: 'TodoAddTask',

    handleKeyDown: function handleKeyDown(event) {
        if (event.which === ESCAPE_KEY) {
            console.log('TodoAddTask: Escape button detected in add task text field');
        } else if (event.which === ENTER_KEY) {
            console.log('TodoAddTask: Enter button detected in add task text field');
            this.addTaskAction();
        }
    },
    addTaskAction: function addTaskAction() {
        console.log('TodoAddTask: addTaskAction action');

        // var todo_from_storage = localStorage["todo_list"]; // alternative localStorage.getItem('todo_list');
        // todo_from_storage.push({status: 0, title: 'How add title?'});
        // localStorage["todo_list"] = todo_from_storage; // alternative localStorage.setItem('todo_list', todo_from_storage)
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Add task'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                    type: 'text',
                    onKeyDown: this.handleKeyDown,
                    onBlur: this.addTaskAction
                }),
                _react2.default.createElement(
                    'button',
                    { onClick: this.addTaskAction },
                    'add'
                )
            )
        );
    }
});

var TodoTaskList = _react2.default.createClass({
    displayName: 'TodoTaskList',

    render: function render() {
        return _react2.default.createElement(
            'ul',
            null,
            _todo_data.todo_data.map(function (task, i) {
                return _react2.default.createElement(TodoTaskLine, { key: i, title: task.title });
            })
        );
    }
});

var TodoTaskLine = _react2.default.createClass({
    displayName: 'TodoTaskLine',

    handleKeyDown: function handleKeyDown(event) {
        if (event.which === ESCAPE_KEY) {
            console.log('TodoTaskLine: Escape button detected in add task text field');
        } else if (event.which === ENTER_KEY) {
            console.log('TodoTaskLine: Enter button detected in add task text field');
        }
    },
    handleEdit: function handleEdit(event) {
        console.log('TodoTaskLine: Double click event');
    },
    render: function render() {
        return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('input', {
                type: 'checkbox'
                // checked={}
                // onChange={}
            }),
            _react2.default.createElement(
                'span',
                { onDoubleClick: this.handleEdit },
                this.props.title
            ),
            _react2.default.createElement('input', {
                type: 'text',
                value: this.props.title,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleKeyDown
            })
        );
    }
});

_reactDom2.default.render(_react2.default.createElement(TodoApp, null), document.getElementById('app'));

},{"./todo_data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var todo_data = exports.todo_data = [{ id: 1, status: 0, title: 'Finish ToDo App' }, { id: 2, status: 0, title: 'Go to lunch' }, { id: 3, status: 0, title: 'Write email to Pavel' }];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcdG9kby5qcyIsImFwcFxcdG9kb19kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7QUNGQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJLGFBQWEsRUFBYjtBQUNKLElBQUksWUFBWSxFQUFaOztBQUVKLElBQUksVUFBVSxnQkFBTSxXQUFOLENBQWtCOzs7QUFDNUIscUJBQWlCLDJCQUFZO0FBQ3pCLGVBQU87QUFDSCxtREFERztTQUFQLENBRHlCO0tBQVo7QUFLakIsWUFBUSxrQkFBVztBQUNmLGVBQ0k7OztZQUNJLDhCQUFDLFdBQUQsT0FESjtZQUVJLDhCQUFDLFlBQUQsT0FGSjtTQURKLENBRGU7S0FBWDtDQU5FLENBQVY7O0FBZ0JKLElBQUksY0FBYyxnQkFBTSxXQUFOLENBQWtCOzs7QUFDaEMsbUJBQWUsdUJBQVUsS0FBVixFQUFpQjtBQUM1QixZQUFJLE1BQU0sS0FBTixLQUFnQixVQUFoQixFQUE0QjtBQUM1QixvQkFBUSxHQUFSLENBQVksNERBQVosRUFENEI7U0FBaEMsTUFFTyxJQUFJLE1BQU0sS0FBTixLQUFnQixTQUFoQixFQUEyQjtBQUNsQyxvQkFBUSxHQUFSLENBQVksMkRBQVosRUFEa0M7QUFFbEMsaUJBQUssYUFBTCxHQUZrQztTQUEvQjtLQUhJO0FBUWYsbUJBQWUseUJBQVc7QUFDdEIsZ0JBQVEsR0FBUixDQUFZLG1DQUFaOzs7OztLQURXO0FBQVcsQUFRMUIsWUFBUSxrQkFBVztBQUNmLGVBQ0k7OztZQUNJOzs7O2FBREo7WUFFSTs7O2dCQUNJO0FBQ0ksMEJBQUssTUFBTDtBQUNBLCtCQUFXLEtBQUssYUFBTDtBQUNYLDRCQUFRLEtBQUssYUFBTDtpQkFIWixDQURKO2dCQU9JOztzQkFBUSxTQUFTLEtBQUssYUFBTCxFQUFqQjs7aUJBUEo7YUFGSjtTQURKLENBRGU7S0FBWDtDQWpCTSxDQUFkOztBQW1DSixJQUFJLGVBQWUsZ0JBQU0sV0FBTixDQUFrQjs7O0FBQ2pDLFlBQVEsa0JBQVc7QUFDZixlQUNJOzs7WUFDSyxxQkFBVSxHQUFWLENBQWMsVUFBQyxJQUFELEVBQU8sQ0FBUDt1QkFBYSw4QkFBQyxZQUFELElBQWMsS0FBSyxDQUFMLEVBQVEsT0FBTyxLQUFLLEtBQUwsRUFBN0I7YUFBYixDQURuQjtTQURKLENBRGU7S0FBWDtDQURPLENBQWY7O0FBVUosSUFBSSxlQUFlLGdCQUFNLFdBQU4sQ0FBa0I7OztBQUNqQyxtQkFBZSx1QkFBVSxLQUFWLEVBQWlCO0FBQzVCLFlBQUksTUFBTSxLQUFOLEtBQWdCLFVBQWhCLEVBQTRCO0FBQzVCLG9CQUFRLEdBQVIsQ0FBWSw2REFBWixFQUQ0QjtTQUFoQyxNQUVPLElBQUksTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEVBQTJCO0FBQ2xDLG9CQUFRLEdBQVIsQ0FBWSw0REFBWixFQURrQztTQUEvQjtLQUhJO0FBT2YsZ0JBQVksb0JBQVUsS0FBVixFQUFpQjtBQUN6QixnQkFBUSxHQUFSLENBQVksa0NBQVosRUFEeUI7S0FBakI7QUFHWixZQUFRLGtCQUFXO0FBQ2YsZUFDSTs7O1lBQ0k7QUFDSSxzQkFBSyxVQUFMOzs7YUFESixDQURKO1lBT0k7O2tCQUFNLGVBQWUsS0FBSyxVQUFMLEVBQXJCO2dCQUF1QyxLQUFLLEtBQUwsQ0FBVyxLQUFYO2FBUDNDO1lBU0k7QUFDSSxzQkFBSyxNQUFMO0FBQ0EsdUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBWDtBQUNQLDJCQUFXLEtBQUssYUFBTDtBQUNYLDBCQUFVLEtBQUssYUFBTDthQUpkLENBVEo7U0FESixDQURlO0tBQVg7Q0FYTyxDQUFmOztBQWlDSixtQkFBUyxNQUFULENBQ0ksOEJBQUMsT0FBRCxPQURKLEVBRUksU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRko7Ozs7Ozs7O0FDdkdPLElBQU0sZ0NBQVksQ0FDckIsRUFBQyxJQUFJLENBQUosRUFBTyxRQUFRLENBQVIsRUFBVyxPQUFPLGlCQUFQLEVBREUsRUFFckIsRUFBQyxJQUFJLENBQUosRUFBTyxRQUFRLENBQVIsRUFBVyxPQUFPLGFBQVAsRUFGRSxFQUdyQixFQUFDLElBQUksQ0FBSixFQUFPLFFBQVEsQ0FBUixFQUFXLE9BQU8sc0JBQVAsRUFIRSxDQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHt0b2RvX2RhdGF9IGZyb20gJy4vdG9kb19kYXRhJztcblxudmFyIEVTQ0FQRV9LRVkgPSAyNztcbnZhciBFTlRFUl9LRVkgPSAxMztcblxudmFyIFRvZG9BcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRUb0RvTGlzdDogdG9kb19kYXRhXG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VG9kb0FkZFRhc2sgLz5cbiAgICAgICAgICAgICAgICA8VG9kb1Rhc2tMaXN0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxudmFyIFRvZG9BZGRUYXNrID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGhhbmRsZUtleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2RvQWRkVGFzazogRXNjYXBlIGJ1dHRvbiBkZXRlY3RlZCBpbiBhZGQgdGFzayB0ZXh0IGZpZWxkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IEVOVEVSX0tFWSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvZG9BZGRUYXNrOiBFbnRlciBidXR0b24gZGV0ZWN0ZWQgaW4gYWRkIHRhc2sgdGV4dCBmaWVsZCcpO1xuICAgICAgICAgICAgdGhpcy5hZGRUYXNrQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFkZFRhc2tBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVG9kb0FkZFRhc2s6IGFkZFRhc2tBY3Rpb24gYWN0aW9uJyk7XG5cbiAgICAgICAgLy8gdmFyIHRvZG9fZnJvbV9zdG9yYWdlID0gbG9jYWxTdG9yYWdlW1widG9kb19saXN0XCJdOyAvLyBhbHRlcm5hdGl2ZSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb19saXN0Jyk7XG4gICAgICAgIC8vIHRvZG9fZnJvbV9zdG9yYWdlLnB1c2goe3N0YXR1czogMCwgdGl0bGU6ICdIb3cgYWRkIHRpdGxlPyd9KTtcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlW1widG9kb19saXN0XCJdID0gdG9kb19mcm9tX3N0b3JhZ2U7IC8vIGFsdGVybmF0aXZlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvX2xpc3QnLCB0b2RvX2Zyb21fc3RvcmFnZSlcblxuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCB0YXNrPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmFkZFRhc2tBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFRhc2tBY3Rpb259PmFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbnZhciBUb2RvVGFza0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dG9kb19kYXRhLm1hcCgodGFzaywgaSkgPT4gPFRvZG9UYXNrTGluZSBrZXk9e2l9IHRpdGxlPXt0YXNrLnRpdGxlfSAvPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgVG9kb1Rhc2tMaW5lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGhhbmRsZUtleURvd246IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2RvVGFza0xpbmU6IEVzY2FwZSBidXR0b24gZGV0ZWN0ZWQgaW4gYWRkIHRhc2sgdGV4dCBmaWVsZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LndoaWNoID09PSBFTlRFUl9LRVkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2RvVGFza0xpbmU6IEVudGVyIGJ1dHRvbiBkZXRlY3RlZCBpbiBhZGQgdGFzayB0ZXh0IGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUVkaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVG9kb1Rhc2tMaW5lOiBEb3VibGUgY2xpY2sgZXZlbnQnKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrZWQ9e31cbiAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e31cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVFZGl0fT57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8VG9kb0FwcCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7IiwiZXhwb3J0IGNvbnN0IHRvZG9fZGF0YSA9IFtcclxuICAgIHtpZDogMSwgc3RhdHVzOiAwLCB0aXRsZTogJ0ZpbmlzaCBUb0RvIEFwcCd9LFxyXG4gICAge2lkOiAyLCBzdGF0dXM6IDAsIHRpdGxlOiAnR28gdG8gbHVuY2gnfSxcclxuICAgIHtpZDogMywgc3RhdHVzOiAwLCB0aXRsZTogJ1dyaXRlIGVtYWlsIHRvIFBhdmVsJ31cclxuXTsiXX0=
