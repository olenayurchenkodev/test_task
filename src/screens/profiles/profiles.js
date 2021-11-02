import React from 'react';
import ProfileCard from '../../components/profileCard/profileCard';
import './profiles.scss';

function Profiles(props) {
    return (
        <div className={"profile_screen"}>
            <h2>Profiles:</h2>
            <div className={"profiles_set"}>
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

export default Profiles;