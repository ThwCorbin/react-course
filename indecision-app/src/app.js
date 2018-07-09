class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Get on with it!";
    const options = ["Ting one", "Ting tow", "Ting tree"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} options={options} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  // class name must be Capitalized for React to work
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What to do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map(option => <Option key={option} optionText={option} />)
        }
          </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
      Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add Option</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
