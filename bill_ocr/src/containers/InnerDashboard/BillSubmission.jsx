import React from "react";
export default function BillSubmission() {
    return (
        <>
            <div className="container-fluid">
                <h3 className="text-dark mb-4">Bill Submission</h3>
                <p className="text-primary m-0 font-weight-bold">Form&nbsp;</p>
                <div className="card shadow" />
            </div>

            <div className="container" style={{ paddingTop: 20 }}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group has-feedback">
                            <p className="text-primary m-0 font-weight-bold">
                                Bill Number&nbsp;
                            </p>
                            <input
                                className="form-control"
                                data-container=".row"
                                placeholder="Bill Number"
                                data-toggle="popover"
                                data-trigger="hover"
                                data-placement="right"
                                data-content="Must be at least 5 characters long, and must only contain letters."
                                type="text"
                            />
                        </div>
                        <div className="form-group has-feedback">
                            <p className="text-primary m-0 font-weight-bold">
                                Bill Name&nbsp;
                            </p>
                            <input
                                className="form-control"
                                data-container=".row"
                                placeholder="Bill Name"
                                data-toggle="popover"
                                data-trigger="hover"
                                data-placement="right"
                                data-content="Must be at least 5 characters long, and must only contain letters."
                                type="text"
                            />
                        </div>
                        <div
                            className="row justify-content-md-center"
                            style={{ paddingTop: 20 }}
                        >
                            <a
                                class="btn btn-primary btn-lg d-none d-sm-inline-block "
                                role="button"
                                href="#"
                            >
                                <i class="fas fa-upload fa-sm text-white-50"></i>
                                &nbsp;Submit
                            </a>
                        </div>
                    </div>

                    <div className="container col">
                        <div className="bootstrap_img_upload">
                            <div className="container py-5">
                                <div className="row py-4">
                                    <div className="col-lg-6 mx-auto">
                                        {/* Upload image input*/}
                                        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                            <input
                                                id="upload"
                                                type="file"
                                                onchange="readURL(this);"
                                                className="form-control border-0"
                                            />
                                            <label
                                                id="upload-label"
                                                htmlFor="upload"
                                                className="font-weight-light text-muted"
                                            >
                                                Choose file
                                            </label>
                                            <div className="input-group-append">
                                                <label
                                                    htmlFor="upload"
                                                    className="btn btn-light m-0 rounded-pill px-4"
                                                >
                                                    {" "}
                                                    <i className="fa fa-cloud-upload mr-2 text-muted" />
                                                    <small className="text-uppercase font-weight-bold text-muted">
                                                        Choose file
                                                    </small>
                                                </label>
                                            </div>
                                        </div>
                                        {/* Uploaded image area*/}
                                        <p className="font-italic text-white text-center">
                                            The image uploaded will be rendered
                                            inside the box below.
                                        </p>
                                        <div className="image-area mt-4">
                                            <img
                                                id="imageResult"
                                                src="#"
                                                alt
                                                className="img-fluid rounded shadow-sm mx-auto d-block"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}
