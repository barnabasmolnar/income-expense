import React from 'react'

const AddItem = () => {
    return (
        <div className="modal fade" id="add-item-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header align-items-center">
                        <h5 className="modal-title display-3">Add item</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid p-0">
                            <div className="row pt-4 pb-5">
                                <div className="col-sm-4 add-item__label">Type</div>
                                <div className="col-sm-8">
                                    <div className="row mt-3 mt-sm-0 pl-3 pl-sm-0">
                                        <div className="col-5 col-lg-3 text-center p-3 border main-summary__type main-summary__type--active">
                                            <div className="d-inline-block main-summary__icon main-summary__icon--default income-bg">
                                                <i className="material-icons" aria-hidden="true">trending_up</i>
                                            </div>
                                            <div className="main-summary__content">
                                                <div>Income</div>
                                            </div>
                                        </div>
                                        <div className="col-5 col-lg-3 text-center p-3 main-summary__type">
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
                                    <select className="custom-select">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row pt-4 pb-5 border-top">
                                <div className="col-sm-4 add-item__label">Name</div>
                                <div className="col-sm-6 pl-sm-0 mt-3 mt-sm-0">
                                    <input className="form-control" type="text" placeholder="Default input" />
                                </div>
                            </div>

                            <div className="row pt-4 pb-5 border-top">
                                <div className="col-sm-4 add-item__label">Amount</div>
                                <div className="col-sm-3 mt-3 mt-sm-0 col-lg-2 pl-sm-0">
                                    <input className="form-control" type="number" min="0" placeholder="0" />
                                </div>
                                <div className="col-sm-5 mt-3 mt-sm-0 col-lg-6 d-flex align-items-center">HUF | EUR | GBP | USD</div>
                            </div>

                            <div className="row pt-4 pb-5 border-top">
                                <div className="col-sm-4 add-item__label">Extra info</div>
                                <div className="col-sm-7 pl-sm-0 mt-3 mt-sm-0">
                                    <textarea className="form-control" name="" id="" rows="5"></textarea>
                                </div>
                            </div>

                            <div className="row pt-4 pb-5 border-top">
                                <div className="col-sm-4 add-item__label">Recurring?</div>
                                <div className="col-sm-8 pl-sm-0 mt-3 mt-sm-0">
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadioInline1">No</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadioInline2">Weekly</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadioInline3">Monthly</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline4" name="customRadioInline1" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customRadioInline4">Yearly</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem;