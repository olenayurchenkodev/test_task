// @ts-ignore
import {useHistory, useRouteMatch} from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import React, {useContext, useState } from 'react';
import { useHTTP } from '../../../hooks/http.hook';
import PopupProfile from '../../popups/popupProfile/popupProfile';
import Loader from '../../loader/loader'
import './profileCard.scss';
import  './buttons.scss';
import './editButt.scss';
import './deleteButt.scss';

// props interface
export interface StandardComponentProps{
    profile_id: string,
    name: string,
    sex: string,
    birthdate: string,
    location: string,
    owner: string
}

function ProfileCard({profile_id, name, sex, birthdate, location, owner}: StandardComponentProps) {
    const {token} = useContext(AuthContext)
    const {loading, request} =useHTTP()
    let { path, url} = useRouteMatch()
    const [state, setState] = useState(false)
    const [form, setForm] = useState({
        name: name, gender: sex, birthdate: birthdate, city: location, userId: owner, profile_id: profile_id
    })
    let history = useHistory()

    // update profile
    const updateProfile = async () => {
        openPopup()
    }
    
    // delete profile
    const deleteProfile = async () => {
        try {
            const data = await request(`http://localhost:3001/profile/`, 'DELETE', {key: profile_id}, {
                Authorization: `Bearer ${token}`
            } )
            // console.log(data)
            if (!loading) {
                if (url === '/home/profiles'){
                    history.go(0)
                }
                else{ history.go(-1) }


            }
        } catch (e) {}
    }

    // open popup
    const openPopup = () =>{
        setState(prev => ! prev);
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
            <PopupProfile form={form} setForm={setForm} state={state} setState={setState}/>
        </>
    );
}

export default ProfileCard;