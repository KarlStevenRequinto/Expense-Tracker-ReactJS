import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
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
}

export default Expenses;