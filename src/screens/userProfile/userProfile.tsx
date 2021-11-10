// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Edit from './img/Edit.svg';
import Delete from './img/Delete.svg';
import ProfileCard from '../../components/profileCard/profileCard';
import './userProfile.scss';
import PopupUser from '../../components/popupUser/popupUser';
import { useHTTP } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

export interface StandardComponentProps{
    username: string,
    useremail: string,
    userid: string
}

function UserProfile({username, useremail, userid}: StandardComponentProps) {
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)
    const [state, setState] = useState(false);
    const [profiles, setProfiles] = useState([])

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

    return (
        <div className={"user_profiles"}>
            <div className={"user_info"}>
                <h3>{username}</h3>
                <h3>{useremail}</h3>
                <p>user</p>
                <div className={"imgs"}>
                    <img src={Edit} alt={"edit"} onClick={openPopup}/><img src={Delete} alt={"delete"}/>
                </div>
            </div>
            <h2>Profiles:</h2>
            <div className={"profile_set"}>
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
            </div>
            <PopupUser state={state} setState={setState}/>
        </div>
    );
}

export default UserProfile;

//<UserProfile username={"Sup3r_puper"} useremail={"usermail@outlook.com"}/>