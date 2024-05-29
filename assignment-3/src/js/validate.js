export const validateForm = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.amount || values.amount <= 0) {
    errors.amount = "Amount must be greater than 0";
  }

  if (!values.date) {
    errors.date = "Date is required";
  }

  if (values.category === "select") {
    errors.category = "Category is required";
  }

  return errors;
};
