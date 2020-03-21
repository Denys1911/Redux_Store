import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {BookstoreServiceProvider} from "./components/BookStoreServiceContext";
import {BookStoreService} from "./services/BookStoreService";
import {HashRouter} from "react-router-dom";
import {App} from "./components/App";
import {ErrorBoundary} from "./components/ErrorBoundary/ErrorBoundary";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookStoreService}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));