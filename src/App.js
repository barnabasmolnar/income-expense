import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import DateToggler from "./DateToggler/DateToggler";
import MainSummary from "./MainSummary/MainSummary";
import Items from "./Items/Items";

const App = () => (
    <div>
        <NavBar />
        <DateToggler />
        <MainSummary />
        <Items />
    </div>
)

export default App;