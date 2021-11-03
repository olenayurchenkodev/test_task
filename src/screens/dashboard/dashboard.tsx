// @ts-ignore
import React from 'react';
import DashboardCard from '../../components/dashboardCard/dashboardCard';
import './dashboard.scss';

function Dashboard() {
    return (
        <div className={"dashboard_screen"}>
            <h2>Dashboard:</h2>
            <div className={"dashboard_set"}>
                <DashboardCard dataType={"Users"} data={100}/>
                <DashboardCard dataType={"Profiles"} data={4}/>
                <DashboardCard dataType={"Profiles over 18 years old"} data={29}/>
            </div>
        </div>
    );
}

export default Dashboard;