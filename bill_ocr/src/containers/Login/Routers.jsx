import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Create from "./Create";

export default function Routers() {
    return (
        <Switch>
            <Route path="/login" render={() => <Login />} exact />
            <Route path="/create-account" render={() => <Create />} exact />
            <Redirect to="/login" />
        </Switch>
    );
}
