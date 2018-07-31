import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeItem } from "../actions/index";
import { Link } from "react-router-dom";
import { categoryIcons } from "../categories";

const formatAmount = (num, currency) => {
    return `${num.toLocaleString()} ${currency}`
}

const Item = props => {
    return (

        <div className={`row align-items-center py-3 items__row items__row--${props.type}`}>
            <div className="col-icon items__icon">
                <i className={categoryIcons[props.category]} aria-hidden="true"></i>
            </div>
            <div className="col items__content">
                <div className="items__content-category">{props.category}</div>
                <div className="items__content-title">{props.title}</div>
            </div>
            <div className="col-auto items__amount income-colour">{formatAmount(props.amount, "HUF")}</div>
            <div className="col-auto d-flex items__actions">
                <div className="items__action-elem">
                    <Link to={`/item/${props.id}/details`}>Details</Link>
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