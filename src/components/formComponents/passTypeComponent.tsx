import React from 'react';

function PassTypeComponent(props) {
    return (
        <div className={"formElem"}>
            <label htmlFor={"password"}>password</label>
            <input type={"password"} id={"password"} name={"password"}/>
        </div>
    );
}

export default PassTypeComponent;