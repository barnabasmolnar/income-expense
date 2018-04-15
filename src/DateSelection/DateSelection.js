import React from "react";
import PeriodSelection from "./PeriodSelection";
import DateToggler from "./DateToggler"

const DateSelection = props => (
    <div className="col-12 col-md ml-md-5 mb-5 mb-md-0 order-1 order-md-2 d-flex flex-column date-selection">
        <PeriodSelection />
        <DateToggler />
    </div>
)

export default DateSelection;