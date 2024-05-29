import { useState } from "react";

import "./App.css";
import React from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { DisplayExpenses } from "./components/DisplayExpenses";

function App() {
  return (
    <>
      <ExpenseForm></ExpenseForm>
      <DisplayExpenses></DisplayExpenses>
    </>
  );
}

export default App;
