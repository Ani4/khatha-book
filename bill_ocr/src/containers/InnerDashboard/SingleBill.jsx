import React, { useState, useEffect } from "react";
import { baseUrl } from "../../config/config";
import axios from "axios";
export default function SingleBill(props) {
    console.log(props.match.params.id);
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.post(baseUrl + props.match.params.id).then(({ data }) => {
            console.log(data);
            setData(data[0]);
        });
        return () => {
            setData(null);
        };
    }, []);
    if (data)
        return (
            <>
                <div className="container">
                    <h3 className="text-dark mb-4">
                        {data.bill_name} : #{data.bill_no}
                    </h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <table
                                id="example"
                                className="table table-striped table-bordered"
                                cellSpacing={0}
                                width="100%"
                            >
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>300</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>TOTAL</th>
                                        <th>{data.total}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="col-sm-6">
                            <div className="bootstrap_img_upload">
                                <p className="font-italic text-white text-center"></p>
                                <div className="image-area mt-4">
                                    <img
                                        id="imageResult"
                                        src={data.bill_img}
                                        alt
                                        className="img-fluid rounded shadow-sm mx-auto d-block"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    else return <></>;
}
