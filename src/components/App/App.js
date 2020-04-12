import React from "react";
import {Switch, Route} from "react-router-dom";
import {ShopHeader} from "../ShopHeader";
import {HomePage, CartPage, NotFoundPage} from "../pages";

import "./App.css";

export const App = () => (
    <div className="app">
        <ShopHeader/>
        <main>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cart" exact component={CartPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </main>
    </div>
);