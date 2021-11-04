import React from 'react';
import './formComponent.scss';

function CheckTypeComponent() {
    return (
        <div className={"isAdmin"}>
            <input type={"checkbox"} id={"isAdmin"} name={"isAdmin"}/>
            <label htmlFor={"isAdmin"}>is admin</label>
        </div>
    );
}

export default CheckTypeComponent;