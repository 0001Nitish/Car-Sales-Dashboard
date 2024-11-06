import React from "react";

const SalesTable = ({ salesData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Model</th>
          <th>No. of Cars Sold</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((entry, index) => (
          <tr key={index}>
            <td>{entry.company}</td>
            <td>{entry.model}</td>
            <td>{entry.noOfCars}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
