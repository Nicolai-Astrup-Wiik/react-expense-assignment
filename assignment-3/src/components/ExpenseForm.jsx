import React, { useState } from "react";
import { validateForm } from "../js/validate";
import styles from "../styles/ExpenseForm.module.css";

export function ExpenseForm({ addExpense }) {
  const [values, setValues] = useState({
    title: "",
    amount: 0,
    date: "",
    category: "select",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onFocusAmount = (e) => {
    if (e.target.value === "0") {
      setValues((prev) => ({
        ...prev,
        amount: "",
      }));
    }
  };

  const onBlurAmount = (e) => {
    if (e.target.value === "") {
      setValues((prev) => ({
        ...prev,
        amount: 0,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      addExpense(values);
      setValues({
        title: "",
        amount: 0,
        date: "",
        category: "select",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={values.title}
            onChange={onChange}
          />
          <div className={styles.error}>
            {errors.title && <span>{errors.title}</span>}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>Amount</label>
          <input
            type="number"
            id="amount"
            className={styles.input}
            value={values.amount}
            onChange={onChange}
            onFocus={onFocusAmount}
            onBlur={onBlurAmount}
          />
          <div className={styles.error}>
            {errors.amount && <span>{errors.amount}</span>}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            type="date"
            id="date"
            className={styles.input}
            value={values.date}
            onChange={onChange}
          />
          <div className={styles.error}>
            {errors.date && <span>{errors.date}</span>}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category" className={styles.label}>Category</label>
          <select
            id="category"
            className={styles.select}
            value={values.category}
            onChange={onChange}
          >
            <option value="select">Select</option>
            <option value="housing">Housing</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
          <div className={styles.error}>
            {errors.category && <span>{errors.category}</span>}
          </div>
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
