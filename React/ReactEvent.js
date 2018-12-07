// Click event example 

class ClickExample extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "tim"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState((prevState, props) => {
            name: prevState.name.toUpperCase()
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <button type="button" onClick={this.handleClick}>
                UPPERCASE
                </button>
            </div>
        );
    }
}

// Common Mistake 
//   <button type="button" onClick={this.handleClick()}> // '()' will invoke the function immediately, not wait until the event is triggered
// UPPERCASE
// </button>


// Inline arrow functions vs Bind 
// No noticeable performance benefits of using bind in the constructor