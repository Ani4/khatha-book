import React, { useState, useEffect } from "react";
import Routers from "../Routes/Routers";
import SideBar from "./SideBar";
export default function Dashboard() {
    return (
        <>
            <div id="wrapper">
                {/* Side Bar : START*/}
                <SideBar />
                {/* END */}
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                            <div className="container-fluid">
                                <button
                                    className="btn btn-link d-md-none rounded-circle mr-3"
                                    id="sidebarToggleTop"
                                    type="button"
                                >
                                    <i className="fas fa-bars" />
                                </button>
                                <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input
                                            className="bg-light form-control border-0 small"
                                            type="text"
                                            placeholder="Search for ..."
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-primary py-0"
                                                type="button"
                                            >
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <ul className="nav navbar-nav flex-nowrap ml-auto">
                                    <li className="nav-item dropdown d-sm-none no-arrow">
                                        <a
                                            className="dropdown-toggle nav-link"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            href="#"
                                        >
                                            <i className="fas fa-search" />
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                                            role="menu"
                                            aria-labelledby="searchDropdown"
                                        >
                                            <form className="form-inline mr-auto navbar-search w-100">
                                                <div className="input-group">
                                                    <input
                                                        className="bg-light form-control border-0 small"
                                                        type="text"
                                                        placeholder="Search for ..."
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-primary py-0"
                                                            type="button"
                                                        >
                                                            <i className="fas fa-search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <div className="d-none d-sm-block topbar-divider" />
                                    <li
                                        className="nav-item dropdown no-arrow"
                                        role="presentation"
                                    >
                                        <div className="nav-item dropdown no-arrow">
                                            <a
                                                className="dropdown-toggle nav-link"
                                                data-toggle="dropdown"
                                                aria-expanded="false"
                                                href="#"
                                            >
                                                <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                                                    User Name
                                                </span>
                                                <img
                                                    className="border rounded-circle img-profile"
                                                    src="assets/img/avatars/avatar5.jpeg"
                                                />
                                            </a>
                                            <div
                                                className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                                                role="menu"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    role="presentation"
                                                    href="#"
                                                >
                                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                                    &nbsp;Profile
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    role="presentation"
                                                    href="#"
                                                >
                                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                                    &nbsp;Settings
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    role="presentation"
                                                    href="#"
                                                >
                                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                                    &nbsp;Activity log
                                                </a>
                                                <div className="dropdown-divider" />
                                                <a
                                                    className="dropdown-item"
                                                    role="presentation"
                                                    href="#"
                                                >
                                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                                    &nbsp;Logout
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* FIXME: here we r going to add */}
                        <Routers />
                    </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright">
                                <div className="d-flex flex-row align-items-center index-top-info">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col social-links">
                                                <div className="float-left">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-github" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-instagram" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-linkedin" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col contact-information">
                                                <div className="float-right">
                                                    <span />
                                                    <span>
                                                        Build during Major
                                                        Project
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span>Copyright © Brand 2020</span>
                            </div>
                        </div>
                    </footer>
                </div>
                <a
                    className="border rounded d-inline scroll-to-top"
                    href="#page-top"
                >
                    <i className="fas fa-angle-up" />
                </a>
            </div>
        </>
    );
}
