import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component!</div>
);

const AddExpensePage = () => <div>This is from my add expense component!</div>;
const EditExpensePage = () => (
  <div>This is from my edit expense component!</div>
);
const HelpPage = () => <div>This is from my help component!</div>;

const NotFoundPage = () => <div>404!</div>;

const routes = (
  // BrowserRouter api only allows one child, thus puts routes in <div> or <switch>
  // Switch component will try to match each route until reaches NotFoundPage
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
