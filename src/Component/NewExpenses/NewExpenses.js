import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const SaveExpenseData = (ExpenseData) => {
    const Data = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseData(Data);
  };
  const [form, setForm] = useState(false);

  return (
    <div className="new-expense">
      {form == true ? (
        <ExpenseForm onSaveExpenseData={SaveExpenseData} />
      ) : (
        <button
          onClick={() => {
            setForm(true);
          }}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpenses;
