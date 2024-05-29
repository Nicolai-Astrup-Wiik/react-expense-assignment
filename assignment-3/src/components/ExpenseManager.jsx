import React, { useState, useEffect } from "react";
import { ExpenseForm } from "./ExpenseForm";
import { DisplayExpenses } from "./DisplayExpenses";
import { loadFromLocalStorage, saveToLocalStorage } from "../js/localStorage";

export function ExpenseManager() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = loadFromLocalStorage("expenseForm");
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const addExpense = (newExpense) => {
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    saveToLocalStorage("expenseForm", updatedExpenses);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    saveToLocalStorage("expenseForm", updatedExpenses);
  };

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <DisplayExpenses expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}
