import React from 'react';
// import './MainSummary.css';

const MainSummary = () => (
    <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
            <div className="row mb-4">
                <div className="col d-flex justify-content-between">
                    <div className="col-2 d-flex justify-content-start align-items-center">
                        <i className="fas fa-angle-left h4"></i>
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center">
                        <span className="h5 text-uppercase">2018 Jan</span>
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <i className="fas fa-angle-right h4"></i>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="col-sm-4 mb-2 mb-sm-0">
                    <div className="card bg-info text-white h-100 soft-shadow">
                        <div className="card-body">
                            <span className="d-block">Balance</span>
                            <span className="d-block h5">1.852.120 HUF</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-2 mb-sm-0">
                    <div className="card bg-success text-white h-100 soft-shadow">
                        <div className="card-body">
                            <span className="d-block">Income</span>
                            <span className="d-block h5">266.000 HUF</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card bg-danger text-white h-100 soft-shadow">
                        <div className="card-body">
                            <span className="d-block">Expense</span>
                            <span className="d-block h5">181.590 HUF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MainSummary;