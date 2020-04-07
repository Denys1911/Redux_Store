import React from "react";

import "./ErrorIndicator.css";

export const ErrorIndicator = () => (
    <div className="error-indicator">
        <i className="fa fa-exclamation-triangle"/>
        Error occurred, please try again later
    </div>
);