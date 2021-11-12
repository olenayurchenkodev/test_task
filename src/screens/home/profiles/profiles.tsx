// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import {useHTTP} from '../../../hooks/http.hook'
import PopupProfile from '../../../components/popups/popupProfile/popupProfile'
import ProfileCard from '../../../components/cards/profileCard/profileCard'
import new_profile from '../../../less/img/new_profile.svg'
import Home from '../home'
import './profiles.scss'
import './addProfile.scss'
import {PathContext} from "../../../context/PathContext";


function Profiles() {
    const {token, userId} = useContext(AuthContext)
    let {path} = useContext(PathContext)
    const {request} = useHTTP()
    const [state, setState] = useState(false)
    const [profiles, setProfiles] = useState([])
    const [form, setForm] = useState({
        name: '', gender: '', birthdate: '', city: '', userId: userId
    })

    // get profiles from db
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('http://localhost:3001/profile/', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setProfiles(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    // popup open
    const openPopup = () =>{
        setState(prev => ! prev);
    }

    return (
        <>
            <div className={"profile_screen"}>
                <h2>Profiles:</h2>
                <div className={"profiles_set"}>
                    {profiles.map((profile: any) => {
                        return (
                            <div key={profile._id}
                                 onClick={()=>{
                                     setForm({
                                         name: profile.name,
                                         gender: profile.gender,
                                         birthdate: profile.birthdate,
                                         city: profile.city,
                                         userId: userId
                                     })
                                 }}>
                               <ProfileCard
                                   profile_id={profile._id}
                                   name={profile.name}
                                   sex={profile.gender}
                                   birthdate={profile.birthdate}
                                   location={profile.city}
                                   owner={profile.owner}
                               />
                            </div>
                       )
                    })}
                    <div className={`add_profile`} onClick={openPopup}>
                        <img src={new_profile} alt={"Create profile"}/>
                        <p>Crearte new profile</p>
                    </div>
                    <PopupProfile form={form} setForm={setForm} state={state} setState={setState}/>
                </div>
            </div>
        </>
    );
}

export default Profiles;