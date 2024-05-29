import React, { useState, useEffect } from "react";
import { ExpenseForm } from "./ExpenseForm";
import { DisplayExpenses } from "./DisplayExpenses";
import { loadFromLocalStorage, saveToLocalStorage } from "../js/localStorage";
import styles from "../styles/ExpenseManager.module.css"; 
import { ExpenseCounter } from "./ExpenseCounter";


export function ExpenseManager() {
  const [expenses, setExpenses] = useState([]);

  useEffect(function loadExpensesFromLocalstorage() {
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
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <ExpenseForm addExpense={addExpense} />
      </div>
      <div className={styles.listContainer}>
      <ExpenseCounter expenses={expenses} />
        <DisplayExpenses expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
}
