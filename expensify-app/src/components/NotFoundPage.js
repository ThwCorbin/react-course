import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  // <Link> provides client-side internal routing to="" or to={}
  <div>
    404 <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
