import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
    return (
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
                <a
                    className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                    href="#"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-money-check-alt" />
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        <span>BILL Manager</span>
                    </div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item" role="presentation">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/"
                            exact
                        >
                            <i className="fas fa-home" />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/gallery"
                        >
                            <i className="fas fa-file-image" />
                            <span>Bill Gallery</span>
                        </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                        <NavLink
                            activeClassName="active"
                            className="nav-link"
                            to="/bill-submission"
                        >
                            <i className="fas fa-table" />
                            <span>Bill Submission&nbsp;</span>
                        </NavLink>
                    </li>
                    <li className="nav-item" role="presentation" />
                    <li className="nav-item" role="presentation" />
                </ul>

                <div className="text-center d-none d-md-inline">
                    <button
                        className="btn rounded-circle border-0"
                        id="sidebarToggle"
                        type="button"
                    />
                </div>
            </div>
        </nav>
    );
}
