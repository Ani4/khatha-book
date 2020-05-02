import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config/config";

export default function Home() {
  const [total, setTotal] = useState(0);
  const [numberOfBills, setNumberOfBills] = useState(0);
  useEffect(() => {
    axios.get(baseUrl + "total").then(({ data }) => {
      console.log(data);
      setTotal(data);
    });
    axios.get(baseUrl + "number_of_bills").then(({ data }) => {
      console.log(data);
      setNumberOfBills(data);
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark mb-0">Dashboard</h3>
        <a
          className="btn btn-primary btn-sm d-none d-sm-inline-block"
          role="button"
          href="#"
        >
          <i className="fas fa-upload fa-sm text-white-50" />
          &nbsp;Upload Bill
        </a>
      </div>
      <div className="row">
        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card shadow border-left-primary py-2">
            <div className="card-body">
              <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                  <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                    <span>Number of Bills</span>
                  </div>
                  <div className="text-dark font-weight-bold h5 mb-0">
                    <span>{numberOfBills + 0}</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 mb-4">
          <div className="card shadow border-left-success py-2">
            <div className="card-body">
              <div className="row align-items-center no-gutters">
                <div className="col mr-2">
                  <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                    <span>Total EXpenses</span>
                  </div>
                  <div className="text-dark font-weight-bold h5 mb-0">
                    <span>&#8377; {total + 0}</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="beautiful bs-callout bs-callout-info">
            <h4>How to use</h4>
            <ol>
              <li>Click upload button on top</li>
              <li>Fill-up the form and submit with Bill image</li>
              <li>Wait for to finish the process</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
