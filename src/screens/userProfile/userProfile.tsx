// @ts-ignore
import React, { useState } from 'react';
import Edit from './img/Edit.svg';
import Delete from './img/Delete.svg';
import ProfileCard from '../../components/profileCard/profileCard';
import './userProfile.scss';
import PopupUser from '../../components/popupUser/popupUser';

export interface StandardComponentProps{
    username: string,
    useremail: string
}

function UserProfile({username, useremail}: StandardComponentProps) {
    const [state, setState] = useState(false);

    const openPopup = () =>{
        setState(prev => ! prev);
    }

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
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
            </div>
            <PopupUser state={state} setState={setState}/>
        </div>
    );
}

export default UserProfile;

//<UserProfile username={"Sup3r_puper"} useremail={"usermail@outlook.com"}/>