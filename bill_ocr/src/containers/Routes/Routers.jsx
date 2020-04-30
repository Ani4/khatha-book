import React from "react";
import Gallery from "../InnerDashboard/Gallery";

import { Switch, Route, Link, NavLink } from "react-router-dom";
export default function Routers() {
    return (
        <Switch>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/">home</Route>
        </Switch>
    );
}
