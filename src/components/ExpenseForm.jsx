import React from "react";

function ExpenseForm({setExpense}) {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const expense={...getFormdata(e.target),id:crypto.randomUUID()}
        setExpense((previous)=>[...previous,expense])
        e.target.reset()
        
    }
    const getFormdata=(form)=>{
        const formData=new FormData(form)
        const data={};
        for(const [key,values] of formData.entries()){
            data[key]=values
        }
        return data
    }
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input name="title" id="title" />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
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
          <input  id="amount" name="amount" />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
