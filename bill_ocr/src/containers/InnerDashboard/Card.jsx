import React from "react";

export default function Card() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
                <img
                    src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg"
                    alt
                    className="img-fluid card-img-top"
                />
                <div className="p-4">
                    <h5>
                        {" "}
                        <a href="#" className="text-dark">
                            Blorange
                        </a>
                    </h5>
                    <p className="small text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                    <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0">
                            <i className="fa fa-picture-o mr-2" />
                            <span className="font-weight-bold">PNG</span>
                        </p>
                        <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                            Trend
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
