import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changePeriod} from "../actions/index";
import classnames from "classnames";

const PeriodSelection = props => (
    <div className="row text-center">
        <div
            onClick={() => props.changePeriod("week")}
            className={classnames("col p-2 border-right border-bottom date-selection__period", {"date-selection__period--active": props.selectedPeriod === "week"})}
        >
            Weekly
        </div>
        
        <div
            onClick={() => props.changePeriod("month")}
            className={classnames("col p-2 border-right border-bottom date-selection__period", {"date-selection__period--active": props.selectedPeriod === "month"})}
        >
            Monthly
        </div>
        
        <div
            onClick={() => props.changePeriod("year")}
            className={classnames("col p-2 border-bottom date-selection__period", {"date-selection__period--active": props.selectedPeriod === "year"})}
        >
            Yearly
        </div>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePeriod
}, dispatch);

const mapStateToProps = state => ({
    selectedPeriod: state.date.period
});

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSelection);