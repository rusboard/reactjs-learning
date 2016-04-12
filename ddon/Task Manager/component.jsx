const items = ["Item 1", "Item 2", "Item 5"];

const Component2 = React.createClass({
    render: function() {
        return (
            <div>
            <h1>Hello!</h1>
            <ul>
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            </div>
        );
    }
});

ReactDOM.render(<Component2 />, document.getElementById("app"));