import React from "react";
import { prevDate, nextDate } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const formatPeriod = date => {
    switch (date.period) {
        case "year":
            return date.timestamp.format("YYYY")
        case "month":
            return date.timestamp.format("MMMM YYYY")
        case "week":
            const start = date.timestamp.clone().isoWeekday(1)
            const end = date.timestamp.clone().isoWeekday(7)
            return [start, end]
                .map(d => d.format("MMMM Do, YYYY"))
                .join(" - ")
    }
}

const DateToggler = props => (
    <div className="row py-3 py-md-0 date-selection__toggler">
        <div className="col-auto text-left date-toggler__toggle" onClick={props.prevDate}>
            <i className="fa fa-chevron-left"></i>
        </div>

        <div className="col text-center date-toggler__date">{formatPeriod(props.currentDate)}</div>

        <div className="col-auto text-right date-toggler__toggle" onClick={props.nextDate}>
            <i className="fa fa-chevron-right"></i>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    prevDate,
    nextDate
}, dispatch);

const mapStateToProps = state => ({
    currentDate: state.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(DateToggler);