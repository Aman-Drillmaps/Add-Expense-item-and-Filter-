import React, { useState } from "react";
import Card from "../UI/Card";
import Chart from '../Chart/Chart'
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {

  const [filter, setFilter] = useState("2020");
  const saveFilterDataHandler = (filterData) => {
    setFilter(filterData);
    data()
  };

  const filterData = props.expense.filter((data)=>{
    return data.date.getFullYear().toString() === filter
})

const data = ()=>{
  props.filter(filterData)
}

let expenseItemContain = <p className="NoDataFound">No Date Fount on This Filter</p>

if(filterData.length > 0){
  expenseItemContain = filterData.map((data, index) => {
    return (
      <Card className="expense-item" key={index}>
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
          <div className="expense-item__price">Rs. {data.amount}</div>
        </div>
      </Card>
    );
  })
}
  return (
    <div>
      <ExpenseFilter
        selected={filter}
        onExpenseFilter={saveFilterDataHandler}
      />
      {expenseItemContain}
    </div>
  );
};

export default ExpenseItem;
