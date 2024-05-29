import React, { useEffect, useState } from "react";
import { validateForm } from "../js/validate";
import { loadFromLocalStorage, saveToLocalStorage } from "../js/localStorage";
import { DisplayExpenses } from "./DisplayExpenses";

export function ExpenseForm() {
  const [values, setValues] = useState({
    title: "",
    amount: 0,
    date: "",
    category: "select",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedExpenses = loadFromLocalStorage("expenseForm");
    if (storedExpenses) {
      setValues({
        title: "",
        amount: 0,
        date: "",
        category: "select",
      });
    }
  }, []);

  const onChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);

      const existingExpenses = loadFromLocalStorage("expenseForm") || [];
      const updatedExpenses = [...existingExpenses, values];

      saveToLocalStorage("expenseForm", updatedExpenses);
      DisplayExpenses();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={values.title}
          onChange={onChange}
        />
        {errors.title && <span>{errors.title}</span>}

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={values.amount}
          onChange={onChange}
        />
        {errors.amount && <span>{errors.amount}</span>}

        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={values.date} onChange={onChange} />
        {errors.date && <span>{errors.date}</span>}

        <label htmlFor="category">Category</label>
        <select id="category" value={values.category} onChange={onChange}>
          <option value="select">Select</option>
          <option value="housing">Housing</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <span>{errors.category}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
