import React from "react";
import MainSummary from "../MainSummary/MainSummary";
import DateSelection from "../DateSelection/DateSelection";
import Items from "../Items/Items";

const Main = () => (
    <div className="position-absolute to-be-transitioned">
        <div className="container my-5">
            <div className="row">
                <MainSummary />
                <DateSelection />
            </div>
        </div>
        <Items />
    </div>
)

export default Main;