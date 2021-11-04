import React from 'react';

export interface StandardComponentProps{
    name: string
}

function SubmitTypeComponent({name}:StandardComponentProps) {
    return (
        <input type={"submit"} id={"submit"} value={name}/>
    );
}

export default SubmitTypeComponent;