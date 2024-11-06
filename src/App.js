import React, { useState } from "react";
import "./App.css";
import SalesTable from "./SalesTable";
import SalesPieChart from "./SalesPieChart";

// Dummy sales data with multiple companies
const salesData = [
  { company: "Toyota", model: "Camry", noOfCars: 150 },
  { company: "Ford", model: "F-150", noOfCars: 120 },
  { company: "Honda", model: "Accord", noOfCars: 90 },
  { company: "Toyota", model: "Corolla", noOfCars: 80 },
  { company: "Ford", model: "Mustang", noOfCars: 70 },
  { company: "Honda", model: "Civic", noOfCars: 60 },
  { company: "Toyota", model: "Highlander", noOfCars: 110 },
  { company: "Ford", model: "Explorer", noOfCars: 95 },
  { company: "Honda", model: "Pilot", noOfCars: 50 },
  { company: "Ford", model: "Ranger", noOfCars: 40 },
];

const App = () => {
  const [filteredData, setFilteredData] = useState(salesData);

  // Function to filter data by the selected company
  const filterDataByCompany = (company) => {
    if (company === "All") {
      setFilteredData(salesData); // Reset the filter to show all data
    } else {
      setFilteredData(salesData.filter((item) => item.company === company)); // Filter by selected company
    }
  };

  return (
    <div className="App">
      <h1>Car Sales Dashboard 2024</h1>
      <div className="dashboard">
        {/* Render the SalesPieChart and pass filtered data and the filter function */}
        <SalesPieChart data={salesData} onSegmentClick={filterDataByCompany} />
        {/* Render the filtered sales table */}
        <SalesTable salesData={filteredData} />
      </div>
    </div>
  );
};

export default App;
