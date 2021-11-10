// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import ProfileCard from '../../components/profileCard/profileCard';
import './profiles.scss';
import new_profile from './img/new_profile.svg';
import PopupProfile from '../../components/popupProfile/popupProfile';
import { AuthContext } from '../../context/AuthContext';
import {useHTTP} from '../../hooks/http.hook'

function Profiles() {
    const [state, setState] = useState(false)
    const [profiles, setProfiles] = useState([])
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)
    

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('http://localhost:3001/profile', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setProfiles(fetched)
        } catch (e) {}
    }, [token, request])

    const openPopup = () =>{
        setState(prev => ! prev);
    }

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    return (
        <div className={"profile_screen"}>
            <h2>Profiles:</h2>
            <div className={"profiles_set"}>
                {profiles.map((profile: any) => {
                    return (
                       <ProfileCard
                           key={profile._id}
                           profile_id={profile._id}
                           name={profile.name}
                           sex={profile.gender}
                           birthdate={profile.birthdate}
                           location={profile.city}/>
                   )
                })}
                <div className={`add_profile`} onClick={openPopup}>
                    <img src={new_profile} alt={"Create profile"}/>
                    <p>Crearte new profile</p>
                </div>
                <PopupProfile state={state} setState={setState}/>
            </div>
        </div>
    );
}

export default Profiles;