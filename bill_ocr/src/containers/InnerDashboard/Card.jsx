import React from "react";

export default function Card(props) {
    return (
        <div
            className="col-md-6 mb-4 col-lg-3"
            onClick={() => {
                console.log(props.data);
                props.history.push(`/gallery/bill/${props.data._id}`);
            }}
            style={{ pointer: "cursor" }}
        >
            <div className="bg-white rounded shadow-sm">
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={props.data.bill_img || "assets/img/billImg.png"}
                        alt=""
                        className="img-fluid card-img-top"
                    />
                </div>
                <div className="p-4">
                    <h5>
                        <p className="text-dark">{props.data.bill_name}</p>
                    </h5>
                    <p className="small text-muted mb-0">
                        Bill Number : {props.data.bill_no}
                    </p>
                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                            <i className="fa fa-calculator mr-2" />
                            <span className="font-weight-bold">TOTAL</span>
                        </p>
                        <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                            &#8377; {props.data.total}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
