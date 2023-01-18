import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
