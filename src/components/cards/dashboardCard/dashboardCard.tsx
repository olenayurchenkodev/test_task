// @ts-ignore
import React from 'react';
import './dashboardCard.scss';

// props interface
export interface StandardComponentProps {
    dataType: string,
    data: number
}

function DashboardCard({dataType, data}: StandardComponentProps) {
    return (
        <div className={"dashboardCard"}>
            <p>{dataType}:</p>
            <p className={"number"}>{data}</p>
        </div>
    );
}

export default DashboardCard;