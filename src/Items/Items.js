import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sortItem } from "../actions/index";
import Item from "./Item";
import { getWeek, inPeriod, hasType } from "../helpers";

const visibilityFilter = state => state.items.filter( item => inPeriod(state.date, item) && hasType(state.type, item) );
const sortFilter = (state, items) => {
    return state.order === "desc"
    ? items.sort((a,b) => b[state.prop] - a[state.prop])
    : items.sort((a,b) => a[state.prop] - b[state.prop]);
}

const Items = props => {
    return (
        <div>
            <div className="container bg-white p-sm-5 sort-items">
                <div className="row">
                    <div className="col-sm sort__by-price">
                        <div>Sort by price</div>
                        <div className="sort--desc" onClick={() => props.sortItem("amount", "desc")}>Descending</div>
                        <div className="sort--asc" onClick={() => props.sortItem("amount", "asc")}>Ascending</div>
                    </div>
                    <div className="col-sm sort__by-date">
                        <div>Sort by date added</div>
                        <div className="sort--desc" onClick={() => props.sortItem("dateAdded", "desc")}>Descending</div>
                        <div className="sort--asc" onClick={() => props.sortItem("dateAdded", "asc")}>Ascending</div>
                    </div>
                </div>
            </div>
            <div className="container items bg-white p-sm-5">
                {
                    props.items.map( item => <Item {...item} key={item.id} /> )
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    sortItem,
}, dispatch);

const mapStateToProps = state => ({
    items: sortFilter(state.sortItems, visibilityFilter(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);