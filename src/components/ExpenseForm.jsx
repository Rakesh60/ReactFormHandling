import React, { useState } from "react";

function ExpenseForm({ setExpense }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const validate = (validateForm) => {
    const errorData = {};
    if (!validateForm.title) {
      errorData.title = "Title is Required";
    }
    if (!validateForm.category) {
      errorData.category = "category is Required";
    }
    if (!validateForm.amount) {
      errorData.amount = "amount is Required";
    }
    setErrors(errorData);
    return errorData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense={title,category,amount,id:crypto.randomUUID()}
    const validateRes = validate(formData);


    //*Agar Error me ek bhi length hai toh submit nhi hoga
    if (Object.keys(validateRes).length) return;
    setExpense((previousExpense) => [
      ...previousExpense,
      { ...formData, id: crypto.randomUUID() },
    ]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
          <p className="error">{errors.title}</p>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>{" "}
          <p className="error">{errors.category}</p>

        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
           <p className="error">{errors.amount}</p>

        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
