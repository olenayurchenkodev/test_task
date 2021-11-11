// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import {Redirect, useHistory, useParams } from 'react-router-dom';
import Edit from '../../../../less/img/Edit.svg';
import Delete from '../../../../less/img/Delete.svg';
import ProfileCard from '../../../../components/profileCard/profileCard';
import './userProfile.scss';
import PopupUser from '../../../../components/popupUser/popupUser';
import { useHTTP } from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';

export interface StandardComponentProps{
    username: string,
    useremail: string,
    userid: string
}

function UserProfile({username, useremail, userid}: StandardComponentProps) {
    const {request} = useHTTP()
    let history = useHistory()
    const {token} = useContext(AuthContext)
    const [state, setState] = useState(false);
    const [profiles, setProfiles] = useState([])
    const [profilesUserId, setProfilesUserId] = useState(''||null)
    const [isAdmin, setIsAdmin] = useState('off')
    const [form, setForm] = useState({
        id: userid, username: username, email: useremail, isAdmin: isAdmin
    })

    const openPopup = () =>{
        setState(prev => ! prev);
    }

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(`http://localhost:3001/profile/${userid}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setProfiles(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    const deleteUser = async () => {
        try {
            const data = await request(`http://localhost:3001/users/`, 'DELETE', {key: userid}, {
                Authorization: `Bearer ${token}`
            } )
            if(data){
                history.go(0)
            }
            // console.log(data)
        } catch (e) {}
    }

    return (
        <div className={"user_profiles"}>
            <div className={"user_info"}>
                <h3>{username}</h3>
                <h3>{useremail}</h3>
                <p>user</p>
                <div className={"imgs"}>
                    <img src={Edit} alt={"edit"} onClick={openPopup}/>
                    <img src={Delete} alt={"delete"} onClick={deleteUser}/>
                </div>
            </div>
            <h2>Profiles:</h2>
            <div className={"profile_set"}>
                {profiles.map((profile: any) => {
                    {console.log(profile.owner)}
                    return (
                        <ProfileCard
                            key={profile._id}
                            profile_id={profile._id}
                            name={profile.name}
                            sex={profile.gender}
                            birthdate={profile.birthdate}
                            location={profile.city}
                            owner={profile.owner}
                        />
                    )
                })}
            </div>
            <PopupUser form={form} setForm={setForm} state={state} setState={setState}/>
        </div>
    );
}

export default UserProfile;
