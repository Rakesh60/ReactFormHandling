import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [editingRowId, setEditingRowID] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const [expenses, setExpense] = useState(expenseData);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpense={setExpense}
            formData={formData}
            setFormData={setFormData}
            editingRowId={editingRowId}
            setEditingRowID={setEditingRowID}
          />
          <ExpenseTable
            expenses={expenses}
            setExpense={setExpense}
            setFormData={setFormData}
            setEditingRowID={setEditingRowID}
          />
        </div>
      </main>
    </>
  );
}

export default App;
