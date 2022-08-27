import React from 'react'
import DashboardHeaderTabs from "../../Components/DashboardTabs";
import DashboardAnalyticsHospitalWise from './DashboardAnalyticsHospitalWise';


const DashboardHospitalWise = () => {
    return (
        <DashboardHeaderTabs tab1={<DashboardAnalyticsHospitalWise/>}/>
    )
}

export default DashboardHospitalWise
