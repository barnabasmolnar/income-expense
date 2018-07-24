import React from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import AddItem from "./AddItem/AddItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import EditItem from "./EditItem/EditItem";
import ItemDetails from "./ItemDetails/ItemDetails";

const App = () => (
    <Router>
        <div>
            <NavBar />
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                            <Switch location={location}>
                                <Route exact path="/" component={Main} />
                                <Route path="/additem" component={AddItem} />
                                <Route path="/item/:id/edit" component={EditItem} />
                                <Route path="/item/:id/details" component={ItemDetails} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </div>
    </Router>
)

export default App;