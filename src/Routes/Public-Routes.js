import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ForgotPassword from "../Screens/ForgotPassword/ForgotPassword";
import Login from "../Screens/Login";

const PublicRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default PublicRoutes;
