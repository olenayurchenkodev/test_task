import React from 'react';
import './formComponent.scss';

let firstVar: string, secondVar: string;

export interface StandardComponentProps{
    type: string
}

function RadioTypeComponent({type}:StandardComponentProps) {
    if (type === "gender"){
        firstVar = "male";
        secondVar = "female";
    }
    else{
        firstVar = "user";
        secondVar = "admin";
    }

    return (
        <div className={"formElem"}>
            <h4>{type}</h4>
            <div className={"radio"}>
                <div>
                <input type={"radio"} id={firstVar} name={type}/>
                <label htmlFor={firstVar}>{firstVar}</label>
                </div>
                <div className={"secondVar"}>
                    <input type={"radio"} id={secondVar} name={type}/>
                    <label htmlFor={secondVar}>{secondVar}</label>
                </div>
            </div>
        </div>
    );
}

export default RadioTypeComponent;