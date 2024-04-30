import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [editingRowId, setEditingRowID] = useLocalStorage('editing','');
  const [formData, setFormData] = useLocalStorage('formData',{
    title: "",
    category: "",
    amount: "",
    // email: "",
  });
  const [expenses, setExpense] = useLocalStorage('expenseData',expenseData);

  return (
    <>
      <main>
        
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
