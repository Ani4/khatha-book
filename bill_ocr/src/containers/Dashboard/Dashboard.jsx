import React, { useState, useEffect, createContext, useContext } from "react";
import Routers from "../Routes/Routers";
import SideBar from "./SideBar";
import Profile from "./Profile";

export default function Dashboard(props) {
    // context creator
    const UserContext = createContext({
        user: JSON.parse(localStorage.getItem("user_for_bill_ocr")),
    });
    const user = useContext(UserContext);
    const [width, setWidth] = useState(window.innerWidth);

    const [, setHeight] = useState(window.innerHeight);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        if (width > 768)
            document.querySelector(".sidebar").style.display = "block";
        else if (width < 768)
            document.querySelector(".sidebar").style.display = "none";
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
        };
    });
    const toggleSideBarDisplay = () => {
        let SB = document.querySelector(".sidebar").style.display;

        if (SB === "block")
            document.querySelector(".sidebar").style.display = "none";
        else document.querySelector(".sidebar").style.display = "block";

        console.log(document.querySelector(".sidebar").style.display);
    };
    return (
        <UserContext.Provider>
            <div id="wrapper">
                {/* Side Bar : START*/}
                <SideBar />
                {/* END */}
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <nav
                            className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
                            id="#to-top"
                        >
                            <div className="container-fluid">
                                <button
                                    className="btn btn-link d-md-none rounded-circle mr-3"
                                    id="sidebarToggleTop"
                                    type="button"
                                    onClick={() => {
                                        toggleSideBarDisplay();
                                    }}
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
                                            {/* TODO:  */}
                                            <Profile
                                                user={user.user}
                                                handleLogout={
                                                    props.handleLogout
                                                }
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* FIXME: here we r going to add */}
                        <Routers />
                    </div>
                    <footer className="sticky-footer pt-0 pb-0">
                        <div
                            className="d-flex flex-row align-items-center index-top-info"
                            style={{ display: "block" }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col social-links">
                                        <div className="float-left">
                                            <ul>
                                                <li>
                                                    <a href="https://github.com/Ani4/Bill-OCR">
                                                        <i className="fa fa-github" />
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="https://www.linkedin.com/in/ani4/">
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
                                                Build during Major Project @
                                                2016-2020
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* FIXME: button to top */}
                <button
                    onClick={() => {
                        window.scroll(0, 0);
                    }}
                    className="border rounded d-inline scroll-to-top"
                >
                    <i className="fas fa-angle-up" />
                </button>
            </div>
        </UserContext.Provider>
    );
}
