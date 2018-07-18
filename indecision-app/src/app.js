import React from "react";
import ReactDOM from "react-dom";

const template = React.createElement("p", {}, "testing 123");
ReactDOM.render(template, document.getElementById("app"));

// Named vs. default imports
// Named must match name from other file
// Default can be named anything
// import defaultExport, { square, add } from "./utils.js";
// import isSenior, { isAdult, canDrink } from "./person.js";

// console.log("app.js is running!!");
// console.log(square(4));
// console.log(add(2, 3));
// console.log(defaultExport(12, 4));

// console.log(isAdult(16));
// console.log(canDrink(22));
// console.log(isSenior(74));
