import React from "react";
import Gallery from "../InnerDashboard/Gallery";
import Error from "../InnerDashboard/Error";
import Home from "../InnerDashboard/Home";
import BillSubmission from "../InnerDashboard/BillSubmission";
import SingleBill from "../InnerDashboard/SingleBill";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Routers() {
    return (
        <Switch>
            <Route
                path="/gallery/bill/:id"
                exact
                render={(propsHistory) => <SingleBill {...propsHistory} />}
            />

            <Route
                path="/gallery"
                exact
                render={(propsHistory) => <Gallery {...propsHistory} />}
            />

            <Route path="/bill-submission" exact>
                <BillSubmission />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
            <Redirect to="/" />
            {/* FIXME: Hide  */}
            {/* <Route>
                <Error />
            </Route> */}
        </Switch>
    );
}
