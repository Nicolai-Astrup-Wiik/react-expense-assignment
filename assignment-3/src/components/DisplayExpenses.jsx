import React from "react";

export function DisplayExpenses({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <p>
                <strong>Title:</strong> {expense.title}
              </p>
              <p>
                <strong>Amount:</strong> {expense.amount}
              </p>
              <p>
                <strong>Date:</strong> {expense.date}
              </p>
              <p>
                <strong>Category:</strong> {expense.category}
              </p>
              <button onClick={() => deleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
