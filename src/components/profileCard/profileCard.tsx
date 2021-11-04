// @ts-ignore
import React, {useState, useEffect, MouseEvent } from 'react';
import './profileCard.scss';
import  './buttons.scss';
import './editButt.scss';
import './deleteButt.scss';
import PopupProfile from '../popupProfile/popupProfile';

export interface StandardComponentProps{
    name: string,
    sex: string,
    birthdate: string,
    location: string
}

function ProfileCard({name, sex, birthdate, location}: StandardComponentProps) {
    return (
        <div className={"profile_card"}>
            <div className={"info"}>
                <p className={"title"}>{name}</p>
                <p>{sex}</p>
                <p>{birthdate}</p>
                <p>{location}</p>
            </div>
            <div className={"space"}/>
            <div className={"buttons"}>
                <button className={"edit"}>edit</button>
                <button className={"delete"}>delete</button>
            </div>
        </div>
    );
}

export default ProfileCard;
//<ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>