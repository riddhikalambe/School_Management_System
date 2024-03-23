import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';  
import { dataSet } from "../../utils/Constants";

const PieChart = () => {
  const [selectedFilter, setSelectedFilter] = useState('attendance');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
 
  const filteredData = selectedFilter === 'attendance' ? dataSet[0].attendanceData : dataSet[0].gradesData;

  const chartConfig = {
    labels: filteredData.labels,
    datasets: [
      {
        data: filteredData.data,
        backgroundColor: filteredData.backgroundColors,
      },
    ],
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Represent the distribution of {selectedFilter === 'attendance' ? 'attendance' : 'grades'} percentages.
        </h5>
        <div className="mb-3">
          <select
            id="filterSelect"
            className="form-select"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="attendance">Attendance</option>
            <option value="grades">Grades</option>
          </select>
        </div>
        <Pie data={chartConfig} />
      </div>
    </div>
  );
};

export default PieChart;