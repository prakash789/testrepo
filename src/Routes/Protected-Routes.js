import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Dashboard from "../Screens/Dashboard";
import DashboardHospitalWise from "../Screens/Dashboard/DashboardHospitalWise";
import LabOnboarding from "../Screens/LabOnboarding";
import Messanger from "../Screens/Messanger";
import MrOnboarding from "../Screens/MrOnboarding";
import Onboarding from "../Screens/Onboarding";
import PatientInformation from "../Screens/Patient-Information";
import PatientLeaflet from "../Screens/Patient-Leaflet";
import Webvitals from "../Screens/Webvitals";
const ProtectedRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route
          exact
          path="/hospital"
          component={DashboardHospitalWise}
        />
        <Route
          exact
          path="/patient-information"
          component={PatientInformation}
        />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/mr-onboarding" component={MrOnboarding} />
        <Route exact path="/webvitals" component={Webvitals} />
        <Route exact path="/patient-leaflet" component={PatientLeaflet} />
        <Route exact path="/messanger" component={Messanger} />
        <Route exact path="/lab-onboarding" component={LabOnboarding} />
        {/* <Redirect to="/Dashboard"/> */}
      </Switch>
    </Layout>
  );
};

export default ProtectedRoutes;
