import React from 'react';
// import './Items.css';

const Items = () => (
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

        <div className="row mb-2">
            <div className="col-lg-9 col-xl-8 mx-auto">
                <div className="income-expense-item d-flex soft-shadow">
                    <div className="bg-danger text-white py-3 rounded-left d-flex justify-content-center align-items-center">
                        <i className="fas fa-utensils h2 m-0"></i>
                    </div>
                    <div className="bg-white w-100 px-4 py-3 rounded-right d-flex-column justify-content-left align-items-center">
                        <span className="d-block h5">2.820 HUF</span>
                        <span className="d-block small">Pizza from Pizza Forte</span>
                    </div>
                </div>
                <div className="mt-1 hidden-actions bg-white card">
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <i className="fas fa-pen-square text-primary h5 my-0 mx-4"></i>
                            <i className="fas fa-trash text-danger h5 my-0 mx-4"></i>
                            <i className="fas fa-info-circle text-info h5 my-0 mx-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="row mb-2">
            <div className="col-lg-9 col-xl-8 mx-auto">
                <div className="income-expense-item d-flex soft-shadow">
                    <div className="bg-danger text-white py-3 rounded-left d-flex justify-content-center align-items-center">
                        <i className="fas fa-ticket-alt h2 m-0"></i>
                    </div>
                    <div className="bg-white w-100 px-4 py-3 rounded-right d-flex-column justify-content-left align-items-center">
                        <span className="d-block h5">7.650 HUF</span>
                        <span className="d-block small">Monthly pass</span>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="row">
            <div className="col-lg-9 col-xl-8 mx-auto">
                <div className="income-expense-item d-flex soft-shadow">
                    <div className="bg-success text-white py-3 rounded-left d-flex justify-content-center align-items-center">
                        <i className="fas fa-money-bill-alt h2 m-0"></i>
                    </div>
                    <div className="bg-white w-100 px-4 py-3 rounded-right d-flex-column justify-content-left align-items-center">
                        <span className="d-block h5">266.000 HUF</span>
                        <span className="d-block small">Monthly wage</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Items;