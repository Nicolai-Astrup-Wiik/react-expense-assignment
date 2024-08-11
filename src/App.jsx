import { useState } from "react";


import React from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { DisplayExpenses } from "./components/DisplayExpenses";
import { ExpenseManager } from "./components/ExpenseManager";
import styles from "./styles/ExpenseManager.module.css";

function App() {
  return (
    <>
      <ExpenseManager></ExpenseManager>
    </>
  );
}

export default App;
