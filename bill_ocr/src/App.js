import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import LoginMain from "./containers/Login/LoginMain";

export default function App() {
    const [loginCheck, setLoginCheck] = useState(true);

    return <Router>{loginCheck ? <Dashboard /> : <LoginMain />}</Router>;
}
