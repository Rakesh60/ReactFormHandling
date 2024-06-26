<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";

function ExpenseForm({ setExpense }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense={title,category,amount,id:crypto.randomUUID()}
    setExpense((previousExpense) => [
      ...previousExpense,
      {title:titleRef.current.value,
        category:categoryRef.current.value,
        amount:amountRef.current.value,
        id:crypto.randomUUID()
       },
    ]);
=======
import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

function ExpenseForm({
  setExpense,
  formData,
  setFormData,
  editingRowId,
  setEditingRowID,
}) {
  const [errors, setErrors] = useState({});
  //* Validation Function
  const ValidateRules = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 5, message: "Title Should be at least 5 character" },
    ],
    category: [{ required: true, message: "Please Select a category" }],
    amount: [
      { required: true, message: "Please enter an amount" },
      { isNumber: true, message: "Please enter only numbers" },
    ],
    // email: [
    //   { required: true, message: "Please enter an Email" },
    //   {
    //     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //     message: "Please enter a valid Email",
    //   },
    // ],
  };

  const validate = (validateForm) => {
    const errorData = {};
    Object.entries(validateForm).forEach(([key, value]) => {
      ValidateRules[key].some((rule) => {
        // console.log(rule);
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 5) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.isNumber && isNaN(value)) {
          errorData[key] = rule.message;
          return true;
        }
        // if (rule.pattern && !rule.pattern.test(value)) {
        //   errorData[key] = rule.message;
        //   return true;
        // }
      });
    });

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

    //? Updating logic ----
    if (editingRowId) {
      setExpense((previousState) =>
        previousState.map((singleExpense) => {
          if (singleExpense.id === editingRowId) {
            return { ...formData, id: editingRowId };
          }
          return singleExpense;
        })
      );
      setEditingRowID("");
      setFormData({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }

    setExpense((previousExpense) => [
      ...previousExpense,
      { ...formData, id: crypto.randomUUID() },
    ]);
    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  };

  //?When User type Input unidirectional data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
>>>>>>> branch5_hooks
  };
  const titleRef=useRef(null)
  const categoryRef=useRef(null)
  const amountRef=useRef(null)

  return (
   
      <form className="expense-form" onSubmit={handleSubmit}>
<<<<<<< HEAD
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            ref={titleRef}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            ref={categoryRef}
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
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            ref={amountRef}
          />
        </div>
        <button className="add-btn">Add</button>
=======
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
          label={"Category"}
          name={"category"}
          value={formData.category}
          onChange={handleChange}
          options={["grocery", "clothes", "bills", "education", "medicine"]}
          error={errors.category}
          defaultOption={"Select a Category"}
        />
        <Input
          label={"Amount"}
          id={"amount"}
          name={"amount"}
          value={formData.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        {/* <Input
          label={"Email"}
          id={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        /> */}
        <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
>>>>>>> branch5_hooks
      </form>
    
  );
}

export default ExpenseForm;
