import React from 'react';
import { connect } from "react-redux";
import Item from "./Item";
import moment from "moment";

// Helper functions for filtering
const getWeek = date =>	`${date.isoWeekYear()}W${date.isoWeek()}`; //e.g 2018W9
const inPeriod = (date, item) => {
    const dateAdded = moment(item.dateAdded);
    return date.period === "week" ?
        getWeek(date.timestamp) === getWeek(dateAdded)
        : date.timestamp.isSame(dateAdded, date.period);
};
const hasType = (type, item) => type === null ? true : type === item.type;

const visibilityFilter = (state) => state.items.filter( item => inPeriod(state.date, item) && hasType(state.type, item) );

const Items = (props) => {
    return (
        <div className="container pt-3">
            <div className="row mb-4 align-items-center">
                <div className="col-lg-9 col-xl-8 mx-auto text-center">
                    <div className="btn-group sort-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn bg-white default-sort">
                            Price
                            <i className="fas fa-angle-up sort-icon sort-icon-asc"></i>
                            <i className="fas fa-angle-down sort-icon sort-icon-desc"></i>
                        </button>
                        <button type="button" className="btn bg-white">Date</button>
                        <button type="button" className="btn bg-white">Type</button>
                    </div>
                </div>
            </div>

            {
                props.items.map( (item) => <Item {...item} key={item.id} /> )
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    items: visibilityFilter(state)
})

export default connect(mapStateToProps)(Items);