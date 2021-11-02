import React from 'react';
import DashboardCard from '../../components/dashboardCard/dashboardCard.js';
import './dashboard.scss';

function Dashboard(props) {
    return (
        <div className={"dashboard_screen"}>
            <h2>Dashboard:</h2>
            <div className={"dashboard_set"}>
                <DashboardCard dataType={"Users"} data={13}/>
                <DashboardCard dataType={"Profiles"} data={100}/>
                <DashboardCard dataType={"Profiles over 18 years old"} data={26}/>
            </div>
        </div>
    );
}

export default Dashboard;