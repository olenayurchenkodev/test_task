import React from 'react';
import Edit from './img/Edit.svg';
import Delete from './img/Delete.svg';
import PropTypes from "prop-types";
import ProfileCard from '../../components/profileCard/profileCard';
import './userProfile.scss';

function UserProfile(props) {
    return (
        <div className={"user_profiles"}>
            <div className={"user_info"}>
                <h3>{props.username}</h3>
                <h3>{props.useremail}</h3>
                <p>user</p>
                <img src={Edit} alt={"edit"}/><img src={Delete} alt={"delete"}/>
            </div>
            <h2>Profiles:</h2>
            <div className={"profile_set"}>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
                <ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>
            </div>
        </div>
    );
}

UserProfile.propTypes={
    usernsme: PropTypes.string,
    useremail: PropTypes.string
}

export default UserProfile;

//<UserProfile username={"Sup3r_puper"} useremail={"usermail@outlook.com"}/>