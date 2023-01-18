import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ expenseDate, expenseTitle, expenseAmount }) {
  const [title, setTitle] = useState(expenseTitle);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expenseDate} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
