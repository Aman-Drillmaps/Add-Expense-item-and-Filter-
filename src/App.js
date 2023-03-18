import React, { useState } from "react";
import Card from "./Component/UI/Card";
import { expenses } from "./Data";
import ExpenseItem from "./Component/Expenses/ExpenseItem";
import "./Component/Expenses/Expense.css";
import NewExpenses from "./Component/NewExpenses/NewExpenses";
import Chart from './Component/Chart/Chart'

function App() {
  
  const [expensesData, setExpensesData] = useState(expenses);
  const saveDataHandler = (Data) => {
    setExpensesData((preExpenseData) => {
      return [Data, ...preExpenseData];
    });
  };

 
  const chart = [
    {value: '0', maxValue: '', label:'Jan'},
    {value: '0', maxValue: '', label:'Feb'},
    {value: '0', maxValue: '', label:'Mar'},
    {value: '0', maxValue: '', label:'Apr'},
    {value: '0', maxValue: '', label:'May'},
    {value: '0', maxValue: '', label:'Jun'},
    {value: '0', maxValue: '', label:'Jul'},
    {value: '0', maxValue: '', label:'Aug'},
    {value: '0', maxValue: '', label:'Sep'},
    {value: '0', maxValue: '', label:'Oct'},
    {value: '0', maxValue: '', label:'Nov'},
    {value: '0', maxValue: '', label:'Dec'},
  ]

  const [filter, setFilter] = useState()


  const filterDataHandler =(filterData)=> {
    setFilter(filterData)
  }

  console.log(filter);
  
  return (
    <>
      <NewExpenses onNewExpenseData={saveDataHandler} />
      <Card className="expenses">
      <Chart chart={chart}   />
        <ExpenseItem  expense={expensesData} filter={filterDataHandler}/>
      </Card>
    </>
  );
}

export default App;
