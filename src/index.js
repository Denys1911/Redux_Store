import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";
import {BookStoreServiceProvider} from "./components/BookStoreServiceContext";
import {BookStoreService} from "./services/BookStoreService";
import {HashRouter} from "react-router-dom";
import {App} from "./components/App";

import 'bootstrap/dist/css/bootstrap.min.css';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookStoreService}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));