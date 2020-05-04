import React, { useState } from "react";

export default function Profile({ user, handleLogout }) {
    const [loginShow, setLoginShow] = useState(false);
    return (
        <div
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
            style={{
                cursor: "pointer",
            }}
            onMouseEnter={(e) => setLoginShow(true)}
            onMouseLeave={(e) => setLoginShow(false)}
        >
            {loginShow ? (
                <div
                    className="alert alert-danger alert-link"
                    role="alert"
                    style={{ marginTop: "10px" }}
                    onClick={() => handleLogout()}
                >
                    <i className="fa fa-sign-out"></i> Logout
                </div>
            ) : (
                <>
                    <span className=" d-lg-inline mr-2 text-gray-600 small">
                        hi! {user.first_name + " " + user.last_name}
                    </span>
                    <img
                        className="border rounded-circle img-profile"
                        src="assets/img/avatars/avatar5.jpeg"
                        onClick={() => handleLogout()}
                        alt=""
                    />
                </>
            )}
        </div>
    );
}
