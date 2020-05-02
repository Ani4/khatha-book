import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="container-fluid">
            <div className="text-center mt-5">
                <div className="error mx-auto" data-text={404}>
                    <p className="m-0">404</p>
                </div>
                <p className="text-dark mb-5 lead">Page Not Found</p>
                <p className="text-black-50 mb-0">
                    It looks like you lost somewhere...
                </p>
                <Link to="/">← Back to Dashboard</Link>
            </div>
        </div>
    );
}
