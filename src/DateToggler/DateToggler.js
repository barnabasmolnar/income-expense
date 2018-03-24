import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changePeriod} from "../actions/index";
import classnames from "classnames";

const DateToggler = props => (
    <div className="toggle-date-view pt-2 bg-white">
        <div className="container">
            <ul className="nav text-uppercase justify-content-center">
                <li className="nav-item" onClick={() => props.changePeriod("week")}>
                    <span className={classnames("nav-link", {active: props.selectedPeriod === "week"})}>Weekly</span>
                </li>
                <li className="nav-item" onClick={() => props.changePeriod("month")}>
                    <span className={classnames("nav-link", {active: props.selectedPeriod === "month"})}>Monthly</span>
                </li>
                <li className="nav-item" onClick={() => props.changePeriod("year")}>
                    <span className={classnames("nav-link", {active: props.selectedPeriod === "year"})}>Yearly</span>
                </li>
            </ul>
        </div>
    </div>
)

// const mapDispatchToProps = (dispatch) => ({
//     changePeriod: (period) => dispatch(changePeriod(period))
// });

const mapDispatchToProps = dispatch => bindActionCreators({
    changePeriod
}, dispatch);

const mapStateToProps = state => ({
    selectedPeriod: state.date.period
});

export default connect(mapStateToProps, mapDispatchToProps)(DateToggler);