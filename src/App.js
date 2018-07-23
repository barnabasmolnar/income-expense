import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import AddItem from "./AddItem/AddItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import EditItem from "./EditItem/EditItem";
import ItemDetails from "./ItemDetails/ItemDetails";

const App = () => (
    <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={Main} />
            <Route path="/additem" component={AddItem} />
            <Route path="/item/:id/edit" component={EditItem} />
            <Route path="/item/:id/details" component={ItemDetails} />
        </div>
    </Router>
)

export default App;