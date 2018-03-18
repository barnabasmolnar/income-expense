import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changePeriod} from "../actions/index";

const DateToggler = (props) => (
    <div className="toggle-date-view pt-2 bg-white">
        <div className="container">
            <ul className="nav text-uppercase justify-content-center">
                <li className="nav-item" onClick={() => props.changePeriod("week")}>
                    <span className={props.selectedPeriod === "week" ? "nav-link active" : "nav-link"}>Weekly</span>
                </li>
                <li className="nav-item" onClick={() => props.changePeriod("month")}>
                    <span className={props.selectedPeriod === "month" ? "nav-link active" : "nav-link"}>Monthly</span>
                </li>
                <li className="nav-item" onClick={() => props.changePeriod("year")}>
                    <span className={props.selectedPeriod === "year" ? "nav-link active" : "nav-link"}>Yearly</span>
                </li>
            </ul>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    changePeriod: (period) => dispatch(changePeriod(period))
});

const mapStateToProps = (state) => ({
    selectedPeriod: state.date.period
});

export default connect(mapStateToProps, mapDispatchToProps)(DateToggler);