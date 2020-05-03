import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Create() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);

    //     Submission handle Function
    const handleSubmit = () => {
        console.log({ email, password });
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
