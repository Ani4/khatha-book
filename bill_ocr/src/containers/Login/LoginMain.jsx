import React, { useEffect } from "react";
import Routers from "./Routers";

export default function LoginMain(props) {
    useEffect(() => {
        let body = document.getElementsByTagName("body");
        body[0].className = "bg-gradient-primary";
        console.log(body[0].classList);
        return () => {
            body[0].className = null;
        };
    }, []);
    return (
        <>
            <div className="container">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-flex">
                                <div
                                    className="flex-grow-1 bg-register-image"
                                    style={{
                                        backgroundImage:
                                            'url("assets/img/Login.jpg")',
                                    }}
                                />
                            </div>
                            <div className="col-lg-7">
                                <Routers {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        border: "1px dashed black",
                        padding: 10,
                    }}
                >
                    <h4 style={{ borderBottom: "1px dashed black" }}>
                        Build by
                    </h4>

                    <p style={{ margin: 0 }}>
                        <strong>Amit Kumar Singh</strong> : <em>01015602716</em>
                    </p>
                    <p style={{ margin: 0 }}>
                        <strong>Aniket Kumar Sharma</strong> :
                        <em> 01115602716</em>
                    </p>
                    <p style={{ margin: 0 }}>
                        <strong>Anuj Kumar</strong> : <em>01415602716</em>
                    </p>
                    <p style={{ margin: 0 }}>
                        <strong>Jagdish Mishra</strong> : <em>03015602716</em>
                    </p>
                </div>
            </div>
        </>
    );
}
