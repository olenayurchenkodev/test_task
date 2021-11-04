import React from 'react';
import './formComponent.scss';

export interface StandardComponentProps{
    name: string
}

function TextTypeComponent({name}:StandardComponentProps) {
    return (
        <div className={"formElem"}>
            <label htmlFor={"userName"}>{name}</label>
            <input type={"text"} id={name} name={name}/>
        </div>
    );
}

export default TextTypeComponent;