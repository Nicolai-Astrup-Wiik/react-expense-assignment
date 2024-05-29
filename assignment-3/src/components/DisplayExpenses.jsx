import React, { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../js/localStorage";

export function DisplayExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = loadFromLocalStorage("expenseForm");
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
