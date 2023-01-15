import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState();

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((item) => (
        <div key={item.id}>
          <ExpenseItem
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}
          />
        </div>
      ))}
    </Card>
  );
};

export default Expenses;
