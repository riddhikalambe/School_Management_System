import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import PieChart from '../Charts/pieChart';

const EventTracker = () => {
  return (
    <div className="container-fluid">
      <div>
        <div className="col-md-12 pt-5">
          <div className="row gx-3">
            <div className="col-md-4 col-sm-4">
              <div>
                <PieChart />
              </div>
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div>
                      <h5>Notice Board</h5>
                    </div>
                    <div className="mt-4">
                      <div className="mb-5">
                        <h6>Eid al-Fitr</h6>
                        <p class="card-text">
                          <span className="text-primary">
                            Thus, 11 Apr, 2024
                          </span>
                          Eid al-Fitr is one of two major holidays celebrated by
                          Muslims and commemorates the end of the holy month of
                          Ramadan, in which Muslims fast daily from before dawn
                          until sunset.
                        </p>
                      </div>
                      <div className="mb-5">
                        <h6>Maharashtra Day</h6>
                        <p class="card-text">
                          <span className="text-primary">Wed, 1 May, 2024</span>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                      <div className="mb-5">
                        <h6>Maha Shivratri</h6>
                        <p class="card-text">
                          <span className="text-primary">Fri, 8 Mar, 2024</span>{' '}
                          Maha Shivratri, also known as the Great Night of
                          Shiva, holds immense importance among Hindus globally.
                        </p>
                      </div>
                      <div className="mb-5">
                        <h6>Ambedkar Jayanti</h6>
                        <p class="card-text">
                          <span className="text-primary">Sun, 14 Apr, 202</span>{' '}
                          4 R. Ambedkar, Indian politician and social reformer.
                          It marks Ambedkar's birthday who was born on 14 April
                          1891.
                        </p>
                      </div>
                      <div className="mb-">
                        <h6>Vesak</h6>
                        <p class="card-text">
                          <span className="text-primary">Thu, 23 May, 2024</span>{' '}
                          Vesak, also known as Buddha Jayanti, Buddha Purnima,
                          and Buddha Day, is a Buddhist holiday that
                          commemorates the birth, enlightenment, and death of
                          Siddhartha Gautama, also known as Buddha.
                        </p>
                      </div>
                    </div>
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

export default EventTracker;
