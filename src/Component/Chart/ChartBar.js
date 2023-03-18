import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {

  let barFillNumber = '0%'
   if(props.value > 0) {
      // barFillNumber = Math.random((props.value / props.maxValue * 100).toString() + "%") 
   }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: 500}}></div>
      </div>
        <div className="chart-bar__label">{props.data.label}</div>
    </div>
  );
};

export default ChartBar;
