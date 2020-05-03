import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Create from "./Create";

export default function Routers(props) {
    return (
        <Switch>
            <Route path="/login" render={() => <Login {...props} />} exact />
            <Route
                path="/create-account"
                render={() => <Create {...props} />}
                exact
            />
            <Redirect to="/login" />
        </Switch>
    );
}
