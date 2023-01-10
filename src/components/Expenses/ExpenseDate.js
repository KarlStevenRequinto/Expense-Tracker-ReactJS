import React from "react";
import "./ExpenseDate.css";

function ExpenseDate({ expenseDate }) {
  const month = expenseDate.toLocaleString("en-Us", { month: "long" });
  const day = expenseDate.toLocaleString("en-Us", { day: "2-digit" });
  const year = expenseDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;