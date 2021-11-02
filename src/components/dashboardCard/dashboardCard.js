import React from 'react';
import PropTypes from "prop-types";
import './dashboardCard.scss';

function DashboardCard(props) {
    return (
        <div className={"dashboardCard"}>
            <p>{props.dataType}:</p>
            <p className={"number"}>{props.data}</p>
        </div>
    );
}

DashboardCard.propTypes={
    dataType: PropTypes.string,
    data: PropTypes.number
};

export default DashboardCard;
//<DashboardCard dataType={"Profiles over 18 years old"} data={29}/>