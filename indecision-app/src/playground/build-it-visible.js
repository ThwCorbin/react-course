class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <h3>Try it today!</h3>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Me" : "Show Me"}
        </button>
        {this.state.visibility && (
          <div>
            <h6>I'm a monkey cat robot with boots on</h6>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

