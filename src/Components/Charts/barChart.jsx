import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import LineChart from "./lineChart";

const chartData = {
  labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  datasets: [
    {
      label: 'Grade Point Average',
      data: [3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Average Test Scores',
      data: [1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Attendance Rate (%)',
      data: [90, 91, 92, 93, 94, 95, 96, 97, 98, 98.5, 99],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Dropout Rate (%)',
      data: [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const filteredData = selectedYear
    ? {
        labels: [selectedYear],
        datasets: chartData.datasets.map((dataset) => ({
          ...dataset,
          data: [dataset.data[chartData.labels.indexOf(Number(selectedYear))]],
        })),
      }
    : chartData;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">
                Illustrate trends in academic performance over multiple years.
              </h5>
              <div className="mt-3">
                <select
                  className="form-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="">All Years</option>
                  {chartData.labels.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-3 pb-2">
              <Bar
                data={filteredData}
                options={{
                  indexAxis: 'x',
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
