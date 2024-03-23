import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BadgeIcon from '@mui/icons-material/Badge';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { blue } from "@mui/material/colors";

const Counter = () => {
  return (
    <div className="container-fluid">
      <div className="col-md-12 pt-5">
        <div className="row gx-3">
          <div className="col-md-3 mt-4 col-sm-6">
            <div className="card p-3">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <SchoolIcon sx={{ fontSize: 80, color: blue[500] }} />
                  </div>
                  <div className="col">
                    <h5 className="card-title">Students</h5>
                    <h2 className="card-subtitle mb-2 text-muted">2500</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 col-sm-6">
            <div className="card p-3">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <PeopleIcon sx={{ fontSize: 80, color: blue[500] }} />
                  </div>
                  <div className="col">
                    <h5 className="card-title">Teachers</h5>
                    <h2 className="card-subtitle mb-2 text-muted">150</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 col-sm-6">
            <div className="card p-3">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <BadgeIcon sx={{ fontSize: 80, color: blue[500] }} />
                  </div>
                  <div className="col">
                    <h5 className="card-title">Employees</h5>
                    <h2 className="card-subtitle mb-2 text-muted">300</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 col-sm-6">
            <div className="card p-3">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <CurrencyRupeeIcon sx={{ fontSize: 80, color: blue[500] }} />
                  </div>
                  <div className="col">
                    <h5 className="card-title">Earnings</h5>
                    <h2 className="card-subtitle mb-2 text-muted">150</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
