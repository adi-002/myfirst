import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="container-fluid "> {/*container-fluid : to make the container align with pg border */}
                <div className="row">
                    <div className="col-11 max auto">

                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <NavLink
                                className="navbar-brand"
                                to="#">
                                @d! Technical
                            </NavLink>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink
                                            activeClassName="menu_active"
                                            exact
                                            className="nav-link active"
                                            aria-current="page"
                                            to="/">
                                            Home
                                          </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            activeClassName="menu_active"
                                            className="nav-link"
                                            to="/service">
                                            Service
                                         </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            activeClassName="menu_active"
                                            className="nav-link"
                                            to="/about">
                                            About
                                         </NavLink>
                                    </li>
                                    <li className="nav-item float-end">
                                        <NavLink
                                            activeClassName="menu_active"
                                            className="nav-link"
                                            to="/contact">
                                            Contact
                                        </NavLink>
                                    </li>


                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
