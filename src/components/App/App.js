import React from "react";
import {Switch, Route} from "react-router-dom";
import {HomePage, CartPage} from "../pages";

import "./App.css";

export const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cart" exact component={CartPage}/>
            </Switch>
        </div>
    )
};