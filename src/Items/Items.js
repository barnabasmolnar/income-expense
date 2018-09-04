import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sortItem } from "../actions/index";
import Item from "./Item";
// import { getWeek, inPeriod, hasType, isDefaultOrEqual } from "../helpers";
import { inPeriod, isDefaultOrEqual } from "../helpers";
import classnames from "classnames";

// const visibilityFilter = state => state.items.filter( item => inPeriod(state.date, item) && hasType(state.type, item) );

// Just trying out stuff
// const visibilityFilter = state => state.items.filter(
//     item =>
//         inPeriod(state.date, item)
//         &&
//         hasType(state.type, item)
//         &&
//         state.filterByCateg === "all" ? true : item.category === state.filterByCateg
// )

const visibilityFilter = state => state.items.filter(
    item =>
        inPeriod(state.date, item)
        &&
        isDefaultOrEqual(state.type, item.type, null)
        &&
        isDefaultOrEqual(state.filterByCateg, item.category, "all")
)

const sortFilter = (state, items) => {
    return state.order === "desc"
        ? items.sort((a,b) => b[state.prop] - a[state.prop])
        : items.sort((a,b) => a[state.prop] - b[state.prop]);
}

const Items = props => {
    return (
        <div>
            <div className="container bg-white sort-items">
                <div className="row pb-4">
                    <div className="col-md d-flex align-items-center border-bottom py-1 py-md-3 sort__by-price">
                        <div className="d-inline-flex"><i className="mr-2 material-icons">attach_money</i> Sort by price</div>
                        <div className="d-inline-flex ml-auto ml-md-3 sort--asc" onClick={() => props.sortItem("amount", "asc")}>
                            <i 
                                className=
                                    {
                                        classnames(
                                            "material-icons sort-icon sort--asc-icon",
                                            {"sort-icon--active": props.activeSort.prop === "amount" && props.activeSort.order === "asc"}
                                        )
                                    }
                            >
                                sort
                            </i>
                        </div>
                        <div className="d-inline-flex sort--desc" onClick={() => props.sortItem("amount", "desc")}>
                            <i 
                                className=
                                {
                                    classnames(
                                        "material-icons sort-icon sort--desc-icon",
                                        {"sort-icon--active": props.activeSort.prop === "amount" && props.activeSort.order === "desc"}
                                    )
                                }
                            >
                                sort
                            </i>
                        </div>
                    </div>
                    <div className="col-md d-flex align-items-center border-bottom py-1 py-md-3 justify-content-md-end sort__by-date">
                        <div className="d-inline-flex"><i className="mr-2 material-icons">calendar_today</i> Sort by date added</div>
                        <div className="d-inline-flex ml-auto ml-md-3 sort--desc" onClick={() => props.sortItem("dateAdded", "asc")}>
                            <i 
                                className=
                                {
                                    classnames(
                                        "material-icons sort-icon sort--asc-icon",
                                        {"sort-icon--active": props.activeSort.prop === "dateAdded" && props.activeSort.order === "asc"}
                                    )
                                }
                            >
                                sort
                            </i>
                        </div>
                        <div className="d-inline-flex sort--desc" onClick={() => props.sortItem("dateAdded", "desc")}>
                            <i 
                                className=
                                {
                                    classnames(
                                        "material-icons sort-icon sort--desc-icon",
                                        {"sort-icon--active": props.activeSort.prop === "dateAdded" && props.activeSort.order === "desc"}
                                    )
                                }
                            >
                                sort
                            </i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container items pb-4 bg-white">
                {
                    props.items.length < 1
                    ? <div className="text-center">No items in this range</div>
                    : props.items.map( item => <Item {...item} key={item._id} /> )
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    sortItem,
}, dispatch);

const mapStateToProps = state => ({
    items: sortFilter(state.sortItems, visibilityFilter(state)),
    activeSort: state.sortItems
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);