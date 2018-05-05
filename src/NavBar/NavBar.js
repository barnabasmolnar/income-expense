import React from 'react';
// import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => (
    <div className="container-fluid navbar bg-dark text-white py-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/">Income & Expense</Link>
                </div>
                <div className="col-2 text-right">
                    <Link to="/additem">Add Item</Link>
                </div>
            </div>
        </div>
    </div>
)

export default NavBar;