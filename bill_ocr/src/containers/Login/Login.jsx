import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

export default function Login(props) {
    // toaster
    const { addToast } = useToasts();
    // state
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    //     Submission handle Function
    const handleSubmit = () => {
        if (email && password) {
            addToast("Authenticating", {
                appearance: "info",
                autoDismiss: true,
            });
            axios
                .post(
                    baseUrl + "user/authenticate",
                    {
                        email,
                        password,
                    },
                    { withCredentials: true }
                )
                .then(({ data }) => {
                    localStorage.setItem(
                        "user_for_bill_ocr",
                        JSON.stringify(data)
                    );
                    addToast("Login Successfully", {
                        appearance: "success",
                        autoDismiss: true,
                    });
                    props.setLoginCheck(true);
                })
                .catch((err) =>
                    addToast(
                        "Your Credentials are wrong, pls come up with correct one",
                        {
                            appearance: "error",
                            autoDismiss: true,
                        }
                    )
                );
        } else
            addToast("Please enter Email & Password", {
                appearance: "warning",
                autoDismiss: true,
            });
    };

    //     Markup return
    return (
        <div className="p-5">
            <div className="text-center">
                <h4 className="text-dark mb-4">Welcome Back!</h4>
            </div>
            <div className="user">
                <div className="form-group">
                    <input
                        className="form-control form-control-user"
                        type="email"
                        id="exampleInputEmail"
                        placeholder="Enter Email Address..."
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control form-control-user"
                        type="password"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="4"
                    />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                        <div className="form-check">
                            <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                                defaultChecked={localStorage.getItem(
                                    "remember_me_for_bill_ocr"
                                )}
                                onChange={(e) =>
                                    localStorage.setItem(
                                        "remember_me_for_bill_ocr",
                                        e.target.checked
                                    )
                                }
                            />
                            <label
                                className="form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                            >
                                Remember Me
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    className="btn btn-primary btn-block text-white btn-user"
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
            <hr />
            <div className="text-center">
                <Link className="small" to="/create-account">
                    Create an Account!
                </Link>
            </div>
        </div>
    );
}
