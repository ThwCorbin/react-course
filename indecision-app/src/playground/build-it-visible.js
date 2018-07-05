const app = {
  title: "Visibility App",
  subtitle: "Try it today!"
};

let visible = false;

const appRoot = document.querySelector("#app");

const changeMessage = () => {
  visible = !visible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <h3>{app.subtitle}</h3>
      <button onClick={changeMessage}>{visible ? "Hide Me" : "Show Me"}</button>
      {visible && <h6>"I'm a monkey cat robot with boots on"</h6>}
      </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
