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
  handlePick() {
    alert("hi");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What to do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    alert("hiyaFlyah");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    // ... to avoid full page refresh
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
      // this.props.options.push(option);
      // e.target.elements.option.value = "";
      // render();
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
