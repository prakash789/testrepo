import React from "react";
import DashboardHeaderTabs from "../../Components/DashboardTabs";
import DashboardAnalytics from "./DashboardAnalytics";

const Dashboard = (props) => {
  return (
    <DashboardHeaderTabs
      tab1={<DashboardAnalytics />}
      tab2={<DashboardAnalytics />}
      tab3={<DashboardAnalytics />}
      tab4={<DashboardAnalytics />}
      tab5={<DashboardAnalytics />}
    />
  );
};

export default Dashboard;
