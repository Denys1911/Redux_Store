import React, {Component} from "react";
import {ErrorIndicator} from "../ErrorIndicator";

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    };

    render() {
        return this.state.hasError ? <ErrorIndicator/> : this.props.children;
    }
}