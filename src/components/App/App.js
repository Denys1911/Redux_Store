import React from "react";
import {ErrorBoundary} from "../ErrorBoundary/ErrorBoundary";

import "./App.css";

export const App = () => {
    return (
        <ErrorBoundary>
            <div className="app">
                App
            </div>
        </ErrorBoundary>
    )
};