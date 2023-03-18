import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {



  return (
    <div className="chart">
      {props.chart.map((data, index) => {
        return <ChartBar data={data} expenses={props.expense} key={index} />;
      })}
    </div>
  );
};

export default Chart;
