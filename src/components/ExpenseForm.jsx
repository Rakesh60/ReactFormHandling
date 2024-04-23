import React, { useRef, useState } from "react";

function ExpenseForm({ setExpense }) {
  const [formData, setFormData] = useState({
    id:crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });
  const myRef=useRef(0)
  let myNum=0;
  console.log(myRef)

  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense={title,category,amount,id:crypto.randomUUID()}
    setExpense((previousExpense)=>[...previousExpense,{...formData,    id:crypto.randomUUID()
    }])
    console.log(formData)
  };

  return (
    <>
    <button onClick={()=>{
      myRef.current=myRef.current+1
      myNum=myNum+1
      console.log(myNum)
      console.log(myRef)
    }}>ABC</button>
    <h1>MyRef={myRef.current} and MyNum={myNum}</h1>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData((prevState)=>({...prevState,title:e.target.value}))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={(e) => setFormData((prevState)=>({...prevState,category:e.target.value}))}
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
            value={formData.amount}
            onChange={(e) => setFormData((prevState)=>({...prevState,amount:e.target.value}))}
          />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
