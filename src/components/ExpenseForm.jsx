import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

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
      errorData.title = "title is Required";
    }
    if (!validateForm.category) {
      errorData.category = "please select a category";
    }
    if (!validateForm.amount) {
      errorData.amount = "amount is Required";
    }
    setErrors(errorData);
    return errorData;
  };



  //?Submitting Form Data
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
    setFormData({
      title: "",
      category: "",
      amount: "",
    })
  };


  //?When User type Input unidirectional data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };




  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        {/* //!Custom Input */}
        <Input
          label={"Title"}
          name={"title"}
          id={"title"}
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
        />

        <Select
          id={"category"}
          label={'Category'}
          name={"category"}
          value={formData.category}
          onChange={handleChange}
          options={["grocery", "clothes", "bills", "education", "medicine"]}
          error={errors.category}
          defaultOption={'Select a Category'}
        />
        <Input
          label={"Amount"}
          id={"amount"}
          name={"amount"}
          value={formData.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
