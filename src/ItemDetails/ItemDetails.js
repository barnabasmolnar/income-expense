import React, { Component } from 'react'
import classnames from "classnames";
import { connect } from "react-redux";
import moment from "moment";

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        
        const item = props.items.find(item => item._id === props.match.params._id);

        this.state = item;
    }

    render() {
        return (
            <div className="my-5 position-absolute to-be-transitioned add-item">
                <div className="container-fluid p-0">
                    <div className="row pt-4 pb-5">
                        <div className="col-sm-4 add-item__label">Type</div>
                        <div className="col-sm-8">
                            <div className="row mt-3 mt-sm-0 pl-3 pl-sm-0">
                                <div
                                    className={classnames("col-5 col-lg-3 text-center p-3 main-summary__type", {"main-summary__type--active border": this.state.type === "income"})}
                                >
                                    <div className="d-inline-block main-summary__icon main-summary__icon--default income-bg">
                                        <i className="material-icons" aria-hidden="true">trending_up</i>
                                    </div>
                                    <div className="main-summary__content">
                                        <div>Income</div>
                                    </div>
                                </div>
                                <div
                                    className={classnames("col-5 col-lg-3 text-center p-3 main-summary__type", {"main-summary__type--active border": this.state.type === "expense"})}
                                >
                                    <div className="d-inline-block main-summary__icon main-summary__icon--default expense-bg">
                                        <i className="material-icons" aria-hidden="true">trending_down</i>
                                    </div>
                                    <div className="main-summary__content">
                                        <div>Expense</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Category</div>
                        <div className="col-sm-6 pl-sm-0 mt-3 mt-sm-0">
                            <select
                                disabled
                                className="custom-select"
                                value={this.state.category}
                            >
                                <option value={this.state.category}>{this.state.category}</option>
                            </select>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Name</div>
                        <div className="col-sm-6 pl-sm-0 mt-3 mt-sm-0">
                            <input
                                readOnly
                                className="form-control"
                                type="text"
                                placeholder="Item name"
                                value={this.state.title}
                            />
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Amount</div>
                        <div className="col-sm-3 mt-3 mt-sm-0 col-lg-2 pl-sm-0">
                            <input
                                readOnly
                                className="form-control"
                                type="number"
                                min="0"
                                placeholder="0"
                                value={this.state.amount}
                            />
                        </div>
                        <div className="col-sm-5 mt-3 mt-sm-0 col-lg-6 d-flex align-items-center add-item__currencies">
                            <span className="active-currency">
                                HUF
                            </span>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Extra info</div>
                        <div className="col-sm-7 pl-sm-0 mt-3 mt-sm-0">
                            <textarea
                                readOnly
                                className="form-control"
                                rows="5"
                                value={this.state.extraInfo}
                            >
                            </textarea>
                        </div>
                    </div>

                    {/* Hide for now */}
                    <div className="d-none">
                        <div className="row pt-4 pb-5 border-top">
                            <div className="col-sm-4 add-item__label">Recurring?</div>

                            <div className="col-sm-8 pl-sm-0 mt-3 mt-sm-0">
                                { this.state.recurring }
                            </div>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm date-added">Added on: <b> {moment(this.state.dateAdded).format('MMMM Do YYYY, hh:mm:ss')} </b> </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps)(ItemDetails);

// could do it this way too:
// const mapStateToProps = (state, props) => ({ item: state.items.find(item => item._id == props.match.params._id) })
// this way, we'd use this.props.item.title instead of this.state.title for example
// the truth is, this component is purely presentational and should require no state
// but it was easier to just copy + paste the EditItem layout and make some small changes
// might refactor it to a presentational component later on