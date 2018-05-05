import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import AddItem from "./AddItem/AddItem";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={Main} />
            <Route path="/additem" component={AddItem} />
        </div>
    </Router>
)

export default App;