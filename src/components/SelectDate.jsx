import React from "react";
import SelectBar from "./components/SelectBar.jsx";
import { dayData, monthData, yearData } from "./dateData.js";

const SelectDate = () => {
  return (
    <div className="myDateData">
      <SelectBar
        placeholder="01"
        data={dayData}
        item="day"
        customWidth="80px"
        zIndex1="50"
        zIndex2="40"
      />
      <SelectBar
        placeholder="Января"
        data={monthData}
        item="month"
        customWidth="150px"
        zIndex1="50"
        zIndex2="40"
      />
      <SelectBar
        placeholder="2005"
        data={yearData}
        item="year"
        customWidth="100px"
        zIndex1="50"
        zIndex2="40"
      />
    </div>
  );
};

export default SelectDate;
