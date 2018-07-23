import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component!</div>
);

const AddExpensePage = () => <div>This is from my add expense component!</div>;
const EditExpensePage = () => (
  <div>This is from my edit expense component!</div>
);
const HelpPage = () => <div>This is from my help component!</div>;

const NotFoundPage = () => (
  // <Link> provides client-side internal routing to="" or to={}
  <div>
    404 <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  // <NavLink> version of <Link> that adds attributes to the rendered element
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const AppRouter = () => (
  // BrowserRouter api only allows one child, thus put routes, etc. in a <div>
  // Renders the first child <Route> or <Redirect> that matches the location
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
