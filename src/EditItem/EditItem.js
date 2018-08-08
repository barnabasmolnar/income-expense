import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editItemAsync } from "../actions/index";
import classnames from "classnames";
import { categories } from "../categories";

class EditItem extends Component {
    constructor(props) {
        super(props);
        
        const item = props.items.find(item => item._id === props.match.params._id);

        this.state = item;

        this.handleEditItem = this.handleEditItem.bind(this);
    }

    render() {
        return (
            <div className="my-5 position-absolute to-be-transitioned add-item">
                <div className="container-fluid p-0">

                {
                    this.state.error
                        ?
                        <div className="alert alert-danger my-3" role="alert" id="add-item__error">
                            Be sure to include a name and an amount. 
                        </div>
                        : null
                }

                    <div className="row pt-4 pb-5">
                        <div className="col-sm-4 add-item__label">Type</div>
                        <div className="col-sm-8">
                            <div className="row mt-3 mt-sm-0 pl-3 pl-sm-0">
                                <div
                                    className={classnames("col-5 col-lg-3 text-center p-3 main-summary__type", {"main-summary__type--active border": this.state.type === "income"})}
                                    onClick={() => this.setType("income")}
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
                                    onClick={() => this.setType("expense")}
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
                                className="custom-select"
                                onChange={this.changeProperties("category")}
                                value={this.state.category}
                            >
                                { categories.map(category => <option key={category} value={category}>{category}</option>) }
                            </select>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Name</div>
                        <div className="col-sm-6 pl-sm-0 mt-3 mt-sm-0">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Item name"
                                onChange={this.changeProperties("title")}
                                value={this.state.title}
                            />
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Amount</div>
                        <div className="col-sm-3 mt-3 mt-sm-0 col-lg-2 pl-sm-0">
                            <input
                                className="form-control"
                                type="number"
                                min="0"
                                placeholder="0"
                                onChange={this.changeProperties("amount")}
                                value={this.state.amount}
                            />
                        </div>
                        <div className="col-sm-5 mt-3 mt-sm-0 col-lg-6 d-flex align-items-center add-item__currencies">
                            <span 
                                className={classnames({"active-currency": this.state.currency === "HUF"})} 
                                onClick={() => this.changeCurrency("HUF")}
                            >
                                HUF
                            </span>
                            <span 
                                className={classnames({"active-currency": this.state.currency === "EUR"})} 
                                onClick={() => this.changeCurrency("EUR")}
                            >
                                EUR
                            </span>
                            <span 
                                className={classnames({"active-currency": this.state.currency === "GBP"})} 
                                onClick={() => this.changeCurrency("GBP")}
                            >
                                GBP
                            </span>
                            <span 
                                className={classnames({"active-currency": this.state.currency === "USD"})} 
                                onClick={() => this.changeCurrency("USD")}
                            >
                                USD
                            </span>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Extra info</div>
                        <div className="col-sm-7 pl-sm-0 mt-3 mt-sm-0">
                            <textarea
                                className="form-control"
                                rows="5"
                                onChange={this.changeProperties("extraInfo")}
                                value={this.state.changeExtraInfo}
                            >
                            </textarea>
                        </div>
                    </div>

                    <div className="row pt-4 pb-5 border-top">
                        <div className="col-sm-4 add-item__label">Recurring?</div>

                        <div className="col-sm-8 pl-sm-0 mt-3 mt-sm-0">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="recurring-no"
                                    name="recurring-no"
                                    className="custom-control-input"
                                    value="no"
                                    onChange={this.changeProperties("recurring")}
                                    checked={this.state.recurring === "no"}
                                />
                                <label className="custom-control-label" htmlFor="recurring-no">No</label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="recurring-weekly"
                                    name="recurring-weekly"
                                    className="custom-control-input"
                                    value="weekly"
                                    onChange={this.changeProperties("recurring")}
                                    checked={this.state.recurring === "weekly"}
                                />
                                <label className="custom-control-label" htmlFor="recurring-weekly">Weekly</label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="recurring-monthly"
                                    name="recurring-monthly"
                                    className="custom-control-input"
                                    value="monthly"
                                    onChange={this.changeProperties("recurring")}
                                    checked={this.state.recurring === "monthly"}
                                />
                                <label className="custom-control-label" htmlFor="recurring-monthly">Monthly</label>
                            </div>

                            <div className="custom-control custom-radio custom-control-inline">
                                <input
                                    type="radio"
                                    id="recurring-yearly"
                                    name="recurring-yearly"
                                    className="custom-control-input"
                                    value="yearly"
                                    onChange={this.changeProperties("recurring")}
                                    checked={this.state.recurring === "yearly"}
                                />
                                <label className="custom-control-label" htmlFor="recurring-yearly">Yearly</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col text-right">
                            <button
                                className="bg-secondary text-white text-uppercase add-item__btn"
                                onClick={this.handleEditItem}
                            >
                                Edit Item
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setType(type) {
        this.setState({ type });
    }
    
    changeProperties(prop) {
        return e => this.setState({ [prop]: e.target.value });
    }

    changeCurrency(currency) {
        this.setState({ currency });
    }

    handleEditItem() {
        if (this.state.title && this.state.amount > 0) {
            let { _id, type, category, title, amount, currency, extraInfo, recurring } = this.state;

            switch (currency) {
                case "EUR":
                    amount *= 313;
                    break;
                case "USD":
                    amount *= 258;
                    break;
                case "GBP":
                    amount *= 355;
                    break;
                default:
                    amount *= 1;
            }

            this.props.editItem({ _id, type, category, title, amount, extraInfo, recurring });
            
            // send me back to root
            this.props.history.push("/");
        } else {
            this.setState({ error: true }, () => window.location.hash = "add-item__error");
        }
    }
}


const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = dispatch => bindActionCreators({
    editItem: editItemAsync
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);