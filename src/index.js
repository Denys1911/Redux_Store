import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";
import {BookStoreServiceContext} from "./components/BookStoreServiceContext";
import {BookStoreService} from "./services/BookStoreService";
import {HashRouter} from "react-router-dom";
import {App} from "./components/App";

import 'bootstrap/dist/css/bootstrap.min.css';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceContext.Provider value={bookStoreService}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </BookStoreServiceContext.Provider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));