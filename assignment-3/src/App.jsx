import { useState } from "react";

import "./App.css";
import React from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { DisplayExpenses } from "./components/DisplayExpenses";
import { ExpenseManager } from "./components/ExpenseManager";

function App() {
  return (
    <>
      <ExpenseManager></ExpenseManager>
    </>
  );
}

export default App;
