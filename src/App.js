import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import MainSummary from "./MainSummary/MainSummary";
import DateSelection from "./DateSelection/DateSelection";
import Items from "./Items/Items";
import AddItem from "./AddItem/AddItem";

const App = () => (
    <div>
        <AddItem />
        <NavBar />
        <div className="container my-5">
            <div className="row">
                <MainSummary />
                <DateSelection />
            </div>
        </div>
        <Items />
    </div>
)

export default App;