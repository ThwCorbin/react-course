console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Get it done",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <h2>
        {app.options.length > 0 ? `Here are your options:` : "No options"}
      </h2>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
