import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeType, prevDate, nextDate } from "../actions/index";
import "./MainSummary.css";
import { getWeek, inPeriod, hasType } from "../helpers";
import classnames from "classnames";

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

const calcSums = (items, date) => {
    const filteredItems = items.filter(item => inPeriod(date, item));
    const income = filteredItems.filter(item => hasType("income", item));
    const expense = filteredItems.filter(item => hasType("expense", item));

    const incomeSum = income.map(item => item.amount).reduce((prevVal, currentVal) => prevVal + currentVal, 0);
    const expenseSum = expense.map(item => item.amount).reduce((prevVal, currentVal) => prevVal + currentVal, 0);

    return {
        balance: incomeSum - expenseSum,
        incomeSum,
        expenseSum
    }
}

const MainSummary = props => {
    return (
        <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container">
                <div className="row mb-4">
                    <div className="col d-flex justify-content-between">
                        <div 
                            className="col-2 d-flex justify-content-start align-items-center"
                            onClick={props.prevDate}
                        >
                            <i className="fas fa-angle-left h4"></i>
                        </div>

                        <div className="col-8 d-flex justify-content-center align-items-center">
                            {formatPeriod(props.currentDate)}
                        </div>

                        <div 
                            className="col-2 d-flex justify-content-end align-items-center"
                            onClick={props.nextDate}
                        >
                            <i className="fas fa-angle-right h4"></i>
                        </div>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-sm-4 mb-2 mb-sm-0">
                        <div
                            className={classnames("card bg-info text-white h-100 soft-shadow", {"selected-type": props.selectedType === null})}
                            onClick={() => props.changeType(null)}
                        >
                            <div className="card-body">
                                <span className="d-block">Balance</span>
                                <span className="d-block h5">{props.summary.balance.toLocaleString()} HUF</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-2 mb-sm-0">
                        <div
                            className={classnames("card bg-success text-white h-100 soft-shadow", {"selected-type": props.selectedType === "income"})}
                            onClick={() => props.changeType("income")}
                        >
                            <div className="card-body">
                                <span className="d-block">Income</span>
                                <span className="d-block h5">{props.summary.incomeSum.toLocaleString()} HUF</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div
                            className={classnames("card bg-danger text-white h-100 soft-shadow", {"selected-type": props.selectedType === "expense"})}
                            onClick={() => props.changeType("expense")}
                        >
                            <div className="card-body">
                                <span className="d-block">Expense</span>
                                <span className="d-block h5">{props.summary.expenseSum.toLocaleString()} HUF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     changeType: (newType) => dispatch(changeType(newType)),
//     prevDate: () => dispatch(prevDate()),
//     nextDate: () => dispatch(nextDate())
// });

const mapDispatchToProps = dispatch => bindActionCreators({
    changeType,
    prevDate,
    nextDate
}, dispatch);

const mapStateToProps = state => ({
    selectedType: state.type,
    currentDate: state.date,
    summary: calcSums(state.items, state.date)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSummary);