import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./containers/Dashboard/Dashboard";

export default function App() {
    return (
        <Router>
            <Dashboard />
        </Router>
    );
}
