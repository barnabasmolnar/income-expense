import React from 'react';
// import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => (
    <div className="container-fluid navbar bg-dark text-white py-3">
        <div className="container">
            <div className="row">
                <div className="col pl-0 d-flex align-items-center">
                    <Link to="/" className="navbar__title">Income & Expense</Link>
                </div>
                <div className="col-auto pr-0 text-right">
                    <Link to="/additem" className="text-white text-uppercase d-inline-flex align-items-center bg-primary navbar__add-item">
                        <i className="material-icons mr-sm-2 navbar__add-item-icon">library_add</i>
                        <span className="d-none d-sm-inline-block">Add Item</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default NavBar;