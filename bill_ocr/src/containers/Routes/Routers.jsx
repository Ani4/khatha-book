import React from "react";
import Gallery from "../InnerDashboard/Gallery";
import Error from "../InnerDashboard/Error";
import Home from "../InnerDashboard/Home";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
export default function Routers() {
    return (
        <Switch>
            <Route path="/gallery">
                <Gallery />
            </Route>

            <Route path="/" exact>
                <Home />
            </Route>
            <Route>
                <Error />
            </Route>
        </Switch>
    );
}
