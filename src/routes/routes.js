import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes_data";
import PrivateRoute from "./private";
import PublicRoute from "./public";

const basename = "/";

const Routes = () => (
  <Router basename={basename}>
    <Switch>
      {routes.map((route, i) => {
        if (route.auth) {
          return <PrivateRoute key={i} {...route} />;
        } else {
          return <PublicRoute key={i} {...route} />;
        }
      })}
    </Switch>
  </Router>
);
export default Routes;
