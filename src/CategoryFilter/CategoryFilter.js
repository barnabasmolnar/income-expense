import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categFilter } from "../actions/index";
import { categories } from "../categories";

const CategoryFilter = props => (
    // <div className="category-filter">
    //     <ul>
    //         <li onClick={() => props.categFilter("all")}>All</li>
    //         <li onClick={() => props.categFilter("food")}>Food</li>
    //         <li onClick={() => props.categFilter("wage")}>Wage</li>
    //         <li onClick={() => props.categFilter("travel")}>Travel</li>
    //         <li onClick={() => props.categFilter("repairs")}>Repairs</li>
    //         <li onClick={() => props.categFilter("entertainment")}>Entertainment</li>
    //     </ul>
    // </div>

    <div className="col p-3 bg-white border category-filter">
        <span className="d-inline-block align-middle category-filter__title">Filter by category:</span>
        <div className="d-inline-block align-middle pl-3">
            <select className="custom-select" onChange={event => props.categFilter(event.target.value)}>
                <option key="all" value="all">all</option>
                { categories.map(category => <option key={category} value={category}>{category}</option>) }
            </select>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    categFilter,
}, dispatch);

export default connect(null, mapDispatchToProps)(CategoryFilter);