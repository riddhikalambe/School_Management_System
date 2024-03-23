import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { comparisonData } from '../../utils/Constants';
Chart.register(CategoryScale);

const LineChart = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const transformData = (chartData) => {
    const labels = chartData.categories;
    let datasets = [];

    if (selectedSubject) {
      const subjectIndex = chartData.metrics.indexOf(selectedSubject);
      datasets.push({
        label: selectedSubject,
        data: chartData.data.map((dataSet) => dataSet[subjectIndex].score),
        fill: false,
        borderColor: getRandomColor(),
        borderWidth: 1,
      });
    } else {
      chartData.metrics.forEach((metric, index) => {
        datasets.push({
          label: metric,
          data: chartData.data.map((dataSet) => dataSet[index].score),
          fill: false,
          borderColor: getRandomColor(), // Call getRandomColor to get a random color
          borderWidth: 1,
        });
      });
    }

    return { labels, datasets };
  };

  const getRandomColor = () => ["#FF6384", "#36A2EB", "#FFCE56"][Math.floor(Math.random() * 3)]; // Define getRandomColor as a function

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const transformedData = transformData(comparisonData);

  return (
    <div className="fluid-container">
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Displaying comparisons between student groups and subjects.
            </h5>
            <select
              className="form-select mb-3"
              value={selectedSubject}
              onChange={handleSubjectChange}
            >
              <option value="">All Subjects</option>
              {comparisonData.metrics.map((metric) => (
                <option key={metric} value={metric}>
                  {metric}
                </option>
              ))}
            </select>
            <div className="p-4 mb-2">
              <Line data={transformedData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
