import React from "react";

const formatAmount = (num, currency) => {
    return `${num.toLocaleString()} ${currency}`
}

const iconMapping = {
    "food": "fa-utensils",
    "travel": "fa-ticket-alt",
    "wage": "fa-money-bill-alt"
}

const Item = props => {
    const typeClassName = `text-white py-3 rounded-left d-flex justify-content-center align-items-center ${props.type === "income" ? "bg-success" : "bg-danger"}`;
    const iconClassName = `fas ${iconMapping[props.category]} h2 m-0`;

    return (
        <div className="row mb-2">
            <div className="col-lg-9 col-xl-8 mx-auto">
                <div className="income-expense-item d-flex soft-shadow">
                    <div className={typeClassName}>
                        <i className={iconClassName}></i>
                    </div>
                    <div className="bg-white w-100 px-4 py-3 rounded-right d-flex-column justify-content-left align-items-center">
                        <span className="d-block h5">{formatAmount(props.amount, props.currency)}</span>
                        <span className="d-block small">{props.title}</span>
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
    )
}

export default Item;