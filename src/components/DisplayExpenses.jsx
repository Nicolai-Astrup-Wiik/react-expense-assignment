import React from "react";
import styles from "../styles/DisplayExpenses.module.css"; 

export function DisplayExpenses({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => deleteExpense(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
