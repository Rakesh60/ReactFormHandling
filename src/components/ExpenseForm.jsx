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
  };
  const titleRef=useRef(null)
  const categoryRef=useRef(null)
  const amountRef=useRef(null)

  return (
   
      <form className="expense-form" onSubmit={handleSubmit}>
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
      </form>
    
  );
}

export default ExpenseForm;
