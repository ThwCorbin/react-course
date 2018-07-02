console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Get it done",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  // e.preventDefault();
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <h2>{app.options.length > 0 ? `Here are your options:` : "No options"}</h2>
    <p>{app.options.length}</p>
    <button onClick={removeAll}>Remove All</button>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>Add Option</button>
    </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

render();