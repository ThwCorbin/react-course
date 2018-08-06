import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

// presentational component
const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

// function that defines what store information
// you want the component to be able to access
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// connect() returns a function that you call with
// the presentational component that you want to
// connect to the store
export default connect(mapStateToProps)(ExpenseList);
