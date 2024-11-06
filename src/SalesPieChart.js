import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary chart elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = ({ data, onSegmentClick }) => {
  // Calculate total sales across all companies
  const totalSales = data.reduce((acc, entry) => acc + entry.noOfCars, 0);

  // Aggregate sales by company
  const companies = [...new Set(data.map((entry) => entry.company))]; // Unique company names
  const companySales = companies.map((company) => {
    const companyTotal = data
      .filter((entry) => entry.company === company)
      .reduce((acc, entry) => acc + entry.noOfCars, 0);
    return companyTotal;
  });

  // Prepare chart data
  const chartData = {
    labels: companies, // Unique company names
    datasets: [
      {
        data: companySales, // Total sales for each company
        backgroundColor: [
          "#FF5733",
          "#33FF57",
          "#3357FF",
          "#FFD700",
          "#FF6347",
        ], // Colors for each segment
      },
    ],
  };

  // Pie chart options with tooltip displaying total sales and percentage
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const company = tooltipItem.label;
            const numberOfCars = tooltipItem.raw;
            const percentage = ((numberOfCars / totalSales) * 100).toFixed(2);
            return `${company}: ${numberOfCars} cars (${percentage}%)`;
          },
        },
      },
    },
    onClick: (e, elements) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index;
        const selectedCompany = companies[clickedIndex];
        onSegmentClick(selectedCompany); // Filter the table by selected company
      }
    },
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <Pie data={chartData} options={options} />
      {/* Display total sales in the center of the pie chart */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "40%",
          fontSize: "20px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        {totalSales} Cars
      </div>
    </div>
  );
};

export default SalesPieChart;
