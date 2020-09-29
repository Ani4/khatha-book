import React, { useState } from "react";
import { api } from "../../config/api";
import { baseUrl } from "../../config/config";
import Tesseract from "tesseract.js";
import { useToasts } from "react-toast-notifications";

export default function BillSubmission() {
    //    toaster
    const { addToast, updateToast } = useToasts();
    //    state
    const [billNumber, setBillNumber] = useState(null);
    const [billName, setBillName] = useState(null);
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState(null);
    const [sentence, setSentence] = useState(null);
    const [percentage, setPercentage] = useState(0);
    const [userID] = useState(
        JSON.parse(localStorage.getItem("user_for_bill_ocr"))._id
    );

    // Tesseract handle
    const TesseractProcess = (file) => {
        let toaster_id = addToast(
            "Wait for OCR process to done...Before Submission your bill",
            {
                appearance: "info",
                autoDismiss: true,
            }
        );

        Tesseract.recognize(file, "eng", {
            logger: (m) => {
                let n = m.progress * 100;
                console.log(m);
                updateToast(toaster_id, {
                    content: `${m.status} ${n}`,
                    appearance: "info",
                    autoDismiss: true,
                    autoDismissTimeout: 2000,
                });
                if (m.status === "recognizing text")
                    setPercentage(n.toFixed(2));
                else setPercentage(1);
            },
        }).then(({ data: { text } }) => {
            setSentence(text);
            console.log(text);
            addToast("OCR Process Done...Now you can Submit your bill ", {
                appearance: "success",
                autoDismiss: true,
            });
        });
    };

    // Handle form
    const handleSubmit = async () => {
        let id = null;
        // form submission without img
        if (billName && billNumber && sentence) {
            const result = await api.post(baseUrl + "create", {
                bill_no: billNumber,
                bill_name: billName,
                bill_raw_data: sentence,
                customer_id: userID,
            });
            console.log(result);
            id = result.data._id;
        } else
            addToast("Please fill your required fields", {
                appearance: "warning",
                autoDismiss: true,
            });
        addToast("Bill submission in Progress...", {
            appearance: "info",
            autoDismiss: true,
        });
        // form submission after ID generated by backend
        if (id) {
            let formData = new FormData();
            formData.append("file", file);
            const result = await api.post(
                baseUrl + `upload/bill/${id}`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log(result.statusText);
            if (result.statusText === "OK") {
                addToast("Bill Submitted", {
                    appearance: "success",
                    autoDismiss: true,
                });
                setBillNumber("");
                setBillName("");
                setPercentage(0);
                setSentence("");
                setFilePath("");
            }

            console.log(result);
        }
    };

    // returning
    return (
        <>
            {percentage === 0 ? null : (
                <div className="container-fluid mb-4">
                    <div className="progress my-8">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: percentage + "%" }}
                        >
                            <p style={{ margin: 0 }}>{percentage}%</p>
                        </div>
                    </div>
                </div>
            )}

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
                                type="number"
                                name="BillNumber"
                                value={billNumber || ""}
                                onChange={(e) => setBillNumber(e.target.value)}
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
                                type="text"
                                name="BillName"
                                value={billName || ""}
                                onChange={(e) => setBillName(e.target.value)}
                            />
                        </div>
                        {sentence && sentence.length > 0 ? (
                            <div className="form-group has-feedback">
                                <p className="text-primary m-0 font-weight-bold">
                                    Raw Data&nbsp;
                                </p>
                                <p
                                    className="form-control"
                                    style={{
                                        height: "auto",
                                        backgroundColor: "lightgrey",
                                        cursor: "not-allowed",
                                    }}
                                >
                                    {sentence}
                                </p>
                            </div>
                        ) : null}
                        <div
                            className="row justify-content-center"
                            style={{ paddingTop: 20 }}
                        >
                            <button
                                className="btn btn-primary btn-lg d-none d-sm-inline-block "
                                onClick={handleSubmit}
                                disabled={percentage < 100 ? true : false}
                            >
                                <i className="fas fa-upload fa-sm text-white-50"></i>
                                &nbsp;Submit
                            </button>
                        </div>
                    </div>

                    <div className="container col">
                        <div className="bootstrap_img_upload">
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col mx-auto">
                                        {/* Upload image input*/}
                                        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                                            <input
                                                id="upload"
                                                type="file"
                                                onChange={(e) => {
                                                    if (e.target.files[0]) {
                                                        setFile(
                                                            e.target.files[0]
                                                        );
                                                        console.log(
                                                            URL.createObjectURL(
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        );
                                                        setFilePath(
                                                            URL.createObjectURL(
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        );
                                                        TesseractProcess(
                                                            e.target.files[0]
                                                        );
                                                    }
                                                }}
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

                                        <div className="image-area mt-4">
                                            <img
                                                id="imageResult"
                                                src={filePath}
                                                alt=""
                                                className="img-fluid rounded shadow-sm mx-auto d-block"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="row justify-content-center dis-sm-none"
                    style={{ paddingTop: 20 }}
                >
                    <button
                        className="btn btn-primary btn-lg "
                        onClick={handleSubmit}
                        disabled={percentage < 100 ? true : false}
                    >
                        <i className="fas fa-upload fa-sm text-white-50"></i>
                        &nbsp;Submit
                    </button>
                </div>
                <hr />
            </div>
        </>
    );
}
