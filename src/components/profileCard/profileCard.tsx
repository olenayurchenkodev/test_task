// @ts-ignore
import React, {useContext, useState } from 'react';
import './profileCard.scss';
import  './buttons.scss';
import './editButt.scss';
import './deleteButt.scss';
import PopupProfile from '../popupProfile/popupProfile';
import { useHTTP } from '../../hooks/http.hook';
import {Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export interface StandardComponentProps{
    profile_id: string,
    name: string,
    sex: string,
    birthdate: string,
    location: string
}

function ProfileCard({profile_id, name, sex, birthdate, location}: StandardComponentProps) {
    const auth = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const {request} =useHTTP()
    const [state, setState] = useState(false)

    const updateProfile = async () => {
        await request(`http://localhost:3001/profile/`, 'DELETE', {key: profile_id}, {
            Authorization: `Bearer ${token}`
        } )
        openPopup()
    }
    
    const openPopup = () =>{
        setState(prev => ! prev);
    }
    
    const deleteProfile = async () => {
        try {
            const data = await request(`http://localhost:3001/profile/`, 'DELETE', {key: profile_id}, {
                Authorization: `Bearer ${token}`
            } )
            console.log(data)
            return <Redirect to={'/home/profiles'}/>
        } catch (e) {}
    }

    return (
        <>
            <div className={"profile_card"}>
                <div className={"info"}>
                    <p className={"title"}>{name}</p>
                    <p>{sex}</p>
                    <p>{birthdate}</p>
                    <p>{location}</p>
                </div>
                <div className={"space"}/>
                <div className={"buttons"}>
                    <button className={"edit"} onClick={updateProfile}>edit</button>
                    <button className={"delete"} onClick={deleteProfile}>delete</button>
                </div>
            </div>
            <PopupProfile state={state} setState={setState}/>
        </>
    );
}

export default ProfileCard;
//<ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>