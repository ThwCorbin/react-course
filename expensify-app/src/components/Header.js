import React from "react";
import { NavLink } from "react-router-dom";

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

export default Header;
