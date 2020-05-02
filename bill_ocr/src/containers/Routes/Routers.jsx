import React from "react";
import Gallery from "../InnerDashboard/Gallery";
import Error from "../InnerDashboard/Error";
import Home from "../InnerDashboard/Home";
import BillSubmission from "../InnerDashboard/BillSubmission";
import BillTable from "../InnerDashboard/BillTable";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
export default function Routers() {
  return (
    <Switch>
      <Route path="/gallery/bill/:id">
        <BillTable />
      </Route>
      <Route
        path="/gallery"
        exact
        render={(propsHistory) => <Gallery {...propsHistory} />}
      />

      <Route path="/bill-submission">
        <BillSubmission />
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
