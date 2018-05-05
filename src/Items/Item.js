import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeItem } from "../actions/index";
import { Link } from "react-router-dom";

const formatAmount = (num, currency) => {
    return `${num.toLocaleString()} ${currency}`
}

const iconMapping = {
    "food": "fa-cutlery",
    "travel": "fa-bus",
    "wage": "fa-money",
    "repairs": "fa-wrench"
}

const Item = props => {
    const iconClassName = `fa ${iconMapping[props.category]}`;

    return (

        <div className={`row align-items-center py-3 items__row items__row--${props.type}`}>
            <div className="col-icon items__icon">
                <i className={iconClassName} aria-hidden="true"></i>
            </div>
            <div className="col items__content">
                <div className="items__content-category">{props.category}</div>
                <div className="items__content-title">{props.title}</div>
            </div>
            <div className="col-auto items__amount income-colour">{formatAmount(props.amount, props.currency)}</div>
            <div className="col-auto d-flex items__actions">
                <div className="items__action-elem">
                    Details
                </div>
                <div className="items__action-elem">
                    <Link to={`/item/${props.id}/edit`}>Edit</Link>
                </div>
                <div
                    className="items__action-elem"
                    onClick={() => props.removeItem(props.id)}
                >
                    Delete
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeItem,
}, dispatch);

export default connect(null, mapDispatchToProps)(Item);