import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Dogs",
    note: "this is a note",
    amount: 35000,
    createdAt: 10000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

test("should setup remove expense action object", () => {
  const expenseData = {
    id: "abc123"
  };
  const action = removeExpense(expenseData);
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("abc123", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      note: "New note value"
    }
  });
});
