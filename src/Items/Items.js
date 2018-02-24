import React from 'react';
import { connect } from "react-redux";
import Item from "./Item";
// import './Items.css';

const Items = (props) => (
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

const mapStateToProps = state => {
    return {
        items: state
    }
}

export default connect(mapStateToProps)(Items);