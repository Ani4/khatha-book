import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../config/api";
import { baseUrl } from "../../config/config";
import Report from "./Report";

export default function Home() {
    const [total, setTotal] = useState(0);
    const [numberOfBills, setNumberOfBills] = useState(0);
    const [userID] = useState(
        JSON.parse(localStorage.getItem("user_for_bill_ocr"))._id
    );
    const [user_type] = useState(
        JSON.parse(localStorage.getItem("user_for_bill_ocr")).user_type
    );
    useEffect(() => {
        api.get(baseUrl + `totals/${userID}`).then(({ data }) => {
            setTotal(data);
        });
        api.get(baseUrl + `number_of_bills/${userID}`).then(({ data }) => {
            setNumberOfBills(data);
        });
    }, [userID]);
    return (
        <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3>
                <Link
                    className="btn btn-primary btn-sm d-none d-sm-inline-block"
                    role="button"
                    to="/bill-submission"
                >
                    <i className="fas fa-upload fa-sm text-white-50" />
                    &nbsp;Upload Bill
                </Link>
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
                                        <span>Total Expenses</span>
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
            {user_type === "CUSTOMER" ? <></> : <Report />}
            <div className="row">
                <div className="col">
                    <div className="beautiful bs-callout bs-callout-info">
                        <h3 className="text-dark mb-0">How to use</h3>
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
