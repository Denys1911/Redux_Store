import React from "react";
import {Switch, Route} from "react-router-dom";
import {ShopHeader} from "../ShopHeader";
import {HomePage, CartPage} from "../pages";

import "./App.css";

export const App = () => {
    return (
        <main className="app">
            <ShopHeader itemsAmount={3} totalPrice={500}/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cart" exact component={CartPage}/>
            </Switch>
        </main>
    )
};