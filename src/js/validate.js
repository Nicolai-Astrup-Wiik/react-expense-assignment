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
  }else {
    const today = new Date();
    const inputDate = new Date(values.date);
    if (inputDate > today) {
      errors.date = "Cannot add expenses from future";
    }
  }
  if (values.category === "select") {
    errors.category = "Category is required";
  }

  return errors;
}
