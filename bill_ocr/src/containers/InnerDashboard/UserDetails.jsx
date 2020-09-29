import React from "react";

export default function UserDetails() {
    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Profile</h3>
            <div className="row mb-3">
                <div className="col-lg-4">
                    <div className="card mb-3">
                        <div className="card-body text-center shadow">
                            <img
                                className="rounded-circle mb-3 mt-4"
                                src="dogs/image2.jpeg"
                                width={160}
                                height={160}
                            />
                            <div className="mb-3">
                                <button
                                    className="btn btn-primary btn-sm"
                                    type="button"
                                >
                                    Change Photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row mb-3 d-none">
                        <div className="col">
                            <div className="card text-white bg-primary shadow">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col">
                                            <p className="m-0">Peformance</p>
                                            <p className="m-0">
                                                <strong>65.2%</strong>
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-rocket fa-2x" />
                                        </div>
                                    </div>
                                    <p className="text-white-50 small m-0">
                                        <i className="fas fa-arrow-up" />
                                        &nbsp;5% since last month
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-white bg-success shadow">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col">
                                            <p className="m-0">Peformance</p>
                                            <p className="m-0">
                                                <strong>65.2%</strong>
                                            </p>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-rocket fa-2x" />
                                        </div>
                                    </div>
                                    <p className="text-white-50 small m-0">
                                        <i className="fas fa-arrow-up" />
                                        &nbsp;5% since last month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 font-weight-bold">
                                        User Settings
                                    </p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="username">
                                                        <strong>
                                                            Username
                                                        </strong>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="user.name"
                                                        name="username"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="email">
                                                        <strong>
                                                            Email Address
                                                        </strong>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="user@example.com"
                                                        name="email"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="first_name">
                                                        <strong>
                                                            First Name
                                                        </strong>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="John"
                                                        name="first_name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="last_name">
                                                        <strong>
                                                            Last Name
                                                        </strong>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Doe"
                                                        name="last_name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-primary btn-sm"
                                                type="submit"
                                            >
                                                Save Settings
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card shadow">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 font-weight-bold">
                                        Contact Settings
                                    </p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="address">
                                                <strong>Address</strong>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Sunset Blvd, 38"
                                                name="address"
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="city">
                                                        <strong>City</strong>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Los Angeles"
                                                        name="city"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="country">
                                                        <strong>Country</strong>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="USA"
                                                        name="country"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-primary btn-sm"
                                                type="submit"
                                            >
                                                Save&nbsp;Settings
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card shadow mb-5">
                <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">
                        Forum Settings
                    </p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="signature">
                                        <strong>Signature</strong>
                                        <br />
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows={4}
                                        name="signature"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-switch">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            id="formCheck-1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="formCheck-1"
                                        >
                                            <strong>
                                                Notify me about new replies
                                            </strong>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button
                                        className="btn btn-primary btn-sm"
                                        type="submit"
                                    >
                                        Save Settings
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
