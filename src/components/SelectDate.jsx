import React from "react";
import SelectBar from "./SelectBar.jsx";
import "../styles/SelectDate.css";
import { dayData, monthData, yearData } from "../data/dateData.js";

const SelectDate = () => {
  return (
    <div className="myDateData">
      <SelectBar
        placeholder="01"
        data={dayData}
        item="day"
        customWidth="70px"
        zIndex1="780"
        zIndex2="750"
      />
      <SelectBar
        placeholder="Января"
        data={monthData}
        item="month"
        customWidth="110px"
        zIndex1="780"
        zIndex2="750"
      />
      <SelectBar
        placeholder="2005"
        data={yearData}
        item="year"
        customWidth="80px"
        zIndex1="780"
        zIndex2="750"
      />
    </div>
  );
};

export default SelectDate;
