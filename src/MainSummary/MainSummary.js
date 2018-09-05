import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeType } from "../actions/index";
import { inPeriod, hasType, isDefaultOrEqual } from "../helpers";
import classnames from "classnames";

const calcSums = (items, date, activeCateg) => {
    const filteredItems = items.filter(
        item =>
            inPeriod(date, item)
            &&
            isDefaultOrEqual(activeCateg, item.category, "all")
    );

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
        <div className="col-12 col-md-7 order-2 order-md-1 main-summary">
            <div className="row">
                <div 
                    className={classnames("col text-center p-1 p-sm-3 border-right main-summary__type", {"main-summary__type--active": props.selectedType === null})}
                    onClick={() => props.changeType(null)}
                >
                    <div className="d-inline-block main-summary__icon main-summary__icon--active">
                        <i className="material-icons" aria-hidden="true">account_balance_wallet</i>
                    </div>
                    <div className="main-summary__content">
                        <div>Balance</div>
                        <div>{props.summary.balance.toLocaleString()} HUF</div>
                    </div>
                </div>

                <div 
                    className={classnames("col text-center p-1 p-sm-3 border-right main-summary__type", {"main-summary__type--active": props.selectedType === "income"})}
                    onClick={() => props.changeType("income")}
                >
                    <div className="d-inline-block main-summary__icon income-bg">
                        <i className="material-icons" aria-hidden="true">trending_up</i>
                    </div>
                    <div className="main-summary__content">
                        <div>Income</div>
                        <div>{props.summary.incomeSum.toLocaleString()} HUF</div>
                    </div>
                </div>

                <div
                    className={classnames("col text-center p-1 p-sm-3 main-summary__type", {"main-summary__type--active": props.selectedType === "expense"})}
                    onClick={() => props.changeType("expense")}
                >
                    <div className="d-inline-block main-summary__icon expense-bg">
                        <i className="material-icons" aria-hidden="true">trending_down</i>
                    </div>
                    <div className="main-summary__content">
                        <div>Expense</div>
                        <div>{props.summary.expenseSum.toLocaleString()} HUF</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changeType
}, dispatch);

const mapStateToProps = state => ({
    selectedType: state.type,
    summary: calcSums(state.items, state.date, state.filterByCateg)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSummary);