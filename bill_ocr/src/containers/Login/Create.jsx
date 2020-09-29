import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { useToasts } from "react-toast-notifications";

export default function Create() {
    //    toaster
    const { addToast } = useToasts();
    //    history
    const history = useHistory();
    //    state
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [shopCheck, setShopCheck] = useState(false);

    //     Submission handle Function
    const handleSubmit = () => {
        if (
            firstName &&
            lastName &&
            password &&
            email &&
            password === repeatPassword
        ) {
            addToast("Creating Account", {
                appearance: "info",
                autoDismiss: true,
            });
            axios
                .post(baseUrl + "user/create", {
                    email,
                    password,
                    firstName,
                    lastName,
                    user_type: shopCheck ? "SHOPKEEPER" : "CUSTOMER",
                })
                .then((result) => {
                    console.log(result);
                    addToast("Account Created ", {
                        appearance: "success",
                        autoDismiss: true,
                    });
                })
                .then(() => history.replace("login"));
        } else if (password === repeatPassword)
            addToast("Please enter each and every field", {
                appearance: "error",
                autoDismiss: true,
            });
        else
            addToast("Password doesn't match ", {
                appearance: "error",
                autoDismiss: true,
            });
    };

    //     return
    return (
        <div className="p-5">
            <div className="text-center">
                <h4 className="text-dark mb-4">Create an Account!</h4>
            </div>
            <div className="user">
                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                            className="form-control form-control-user"
                            type="text"
                            id="exampleFirstName"
                            placeholder="First Name"
                            name="first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-sm-6">
                        <input
                            className="form-control form-control-user"
                            type="text"
                            id="exampleFirstName"
                            placeholder="Last Name"
                            name="last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <input
                        className="form-control form-control-user"
                        type="email"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                            className="form-control form-control-user"
                            type="password"
                            id="examplePasswordInput"
                            placeholder="Password(min length is 4)"
                            name="password"
                            value={password}
                            required
                            minLength="4"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <input
                            className="form-control form-control-user"
                            type="password"
                            id="exampleRepeatPasswordInput"
                            placeholder="Repeat Password"
                            name="password_repeat"
                            value={repeatPassword}
                            minLength="4"
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="custom-control custom-checkbox small mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input custom-control-input"
                            type="checkbox"
                            id="formCheck-1"
                            value={shopCheck}
                            onChange={(e) => setShopCheck(e.target.checked)}
                        />
                        <label
                            className="form-check-label custom-control-label"
                            htmlFor="formCheck-1"
                        >
                            Shopkeeper(only for shopkeeper owner)
                        </label>
                    </div>
                </div>
                <button
                    className="btn btn-primary btn-block text-white btn-user"
                    onClick={handleSubmit}
                >
                    Register Account
                </button>
                <hr />
            </div>

            <div className="text-center">
                <Link className="small" to="/login">
                    Already have an account? Login!
                </Link>
            </div>
        </div>
    );
}
