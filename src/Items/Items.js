import React from 'react';
import { connect } from "react-redux";
import Item from "./Item";
import { getWeek, inPeriod, hasType } from "../helpers";

const visibilityFilter = state => state.items.filter( item => inPeriod(state.date, item) && hasType(state.type, item) );

const Items = props => {
    return (
        <div className="container items bg-white p-sm-5">
            {
                props.items.map( item => <Item {...item} key={item.id} /> )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    items: visibilityFilter(state)
});

export default connect(mapStateToProps)(Items);