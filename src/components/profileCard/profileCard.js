import React from 'react';
import PropTypes from "prop-types";
import './profileCard.scss';
import  './buttons.scss';
import './editButt.scss';
import './deleteButt.scss';

function ProfileCard(props) {
    return (
        <div className={"profile_card"}>
            <div className={"info"}>
                <p className={"title"}>{props.name}</p>
                <p>{props.sex}</p>
                <p>{props.birthdate}</p>
                <p>{props.location}</p>
            </div>
            <div className={"space"}/>
            <div className={"buttons"}>
                <button className={"edit"}>edit</button>
                <button className={"delete"}>delete</button>
            </div>
        </div>
    );
}

ProfileCard.propTypes={
    name: PropTypes.string,
    sex: PropTypes.string,
    birthdate: PropTypes.string,
    location: PropTypes.string
};

export default ProfileCard;
//<ProfileCard name={"Danylo Bilyi"} sex={"male"} birthdate={"25.03.2003"} location={"Kyiv"}/>