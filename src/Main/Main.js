import React from "react";
import MainSummary from "../MainSummary/MainSummary";
import DateSelection from "../DateSelection/DateSelection";
import Items from "../Items/Items";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const Main = () => (
    <div className="position-absolute to-be-transitioned">
        <div className="container my-5">
            <div className="row pb-5">
                <CategoryFilter />
            </div>
            <div className="row">
                <MainSummary />
                <DateSelection />
            </div>
        </div>
        <Items />
    </div>
)

export default Main;