import React, { useState, useEffect } from "react";
import { baseUrl } from "../../config/config";
import { api } from "../../config/api";

export default function SingleBill(props) {
    console.log(props.match.params.id);
    const [data, setData] = useState(null);
    useEffect(() => {
        api.post(baseUrl + props.match.params.id).then(({ data }) => {
            setData(data[0]);
        });
        return () => {
            setData(null);
        };
    }, [props.match.params.id]);
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
                                    {data.bill_content.map((items, i) => (
                                        <tr>
                                            {Object.entries(items).map(
                                                (item, value) => (
                                                    <>
                                                        <td>{item[0]}</td>
                                                        <td>
                                                            &#8377;{item[1] + 0}
                                                        </td>
                                                    </>
                                                )
                                            )}
                                        </tr>
                                    ))}

                                    {console.log(data.bill_content)}
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>TOTAL</th>
                                        <th>&#8377; {data.total}</th>
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
                                        alt=""
                                        className="img-fluid rounded shadow-sm mx-auto d-block"
                                    />
                                </div>
                            </div>
                            <div
                                className="container-fluid"
                                style={{ marginTop: 30 }}
                            >
                                <h3
                                    className="text-dark "
                                    style={{ marginBottom: 0 }}
                                >
                                    Raw Data
                                </h3>
                                <p>{data.bill_raw_data}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    else return <></>;
}
