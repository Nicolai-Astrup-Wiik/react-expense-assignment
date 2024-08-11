import React from 'react'

export const ExpenseCounter = ({ expenses }) => {
	let totalAmount = 0;

	for (let i = 0; i < expenses.length; i++) {
		totalAmount += Number(expenses[i].amount);
	 }

  return (
    <div>
      <h2>Total Expenses</h2>
      <p>kr{totalAmount.toFixed(2)}</p>
    </div>
  );
}


