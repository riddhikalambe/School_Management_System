import React from 'react';
import NavBar from '../Navbar/navbar';
import Results from '../Results/results';
import BarChart from '../Charts/barChart';
import LineChart from '../Charts/lineChart';
import PieChart from '../Charts/pieChart';
import Counter from '../Counter/counter';
import EventTracker from '../Calender/EventTracker';

const Dashboard = () => {
  return (
    <div className=" container-fluid ">
      <NavBar />
      <div>
        <Counter />
        <EventTracker />
        <BarChart />
        <Results />
      </div>
      {/* <div>
       
      <BarChart />
      <LineChart />
      <Results />
      </div> */}
    </div>
  );
};

export default Dashboard;
