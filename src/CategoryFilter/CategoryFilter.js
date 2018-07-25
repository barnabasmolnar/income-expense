import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categFilter } from "../actions/index";

const CategoryFilter = props => (
    <div className="category-filter">
        <ul>
            <li onClick={() => props.categFilter("all")}>All</li>
            <li onClick={() => props.categFilter("food")}>Food</li>
            <li onClick={() => props.categFilter("wage")}>Wage</li>
            <li onClick={() => props.categFilter("travel")}>Travel</li>
            <li onClick={() => props.categFilter("repairs")}>Repairs</li>
            <li onClick={() => props.categFilter("entertainment")}>Entertainment</li>
        </ul>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    categFilter,
}, dispatch);

export default connect(null, mapDispatchToProps)(CategoryFilter);