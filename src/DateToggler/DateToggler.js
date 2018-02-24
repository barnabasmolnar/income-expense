import React from 'react';
// import './DateToggler.css';

const DateToggler = () => (
    <div className="toggle-date-view pt-2 bg-white">
        <div className="container">
            <ul className="nav text-uppercase justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Weekly</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Monthly</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Yearly</a>
                </li>
            </ul>
        </div>
    </div>
)

export default DateToggler;