import React from 'react';
import PropTypes from "prop-types";
import avatar from './img/avatar.png';
import './userAvatar.scss';

function UserAvatar(props) {
    return (
        <div className={"avatar"}>
            <img className={`${props.status}_avatar`} src={avatar} alt={"user"}/>
            <p>{props.name}</p>
        </div>
    );
}

UserAvatar.propTypes={
    status: PropTypes.string,
    name: PropTypes.string
}

export default UserAvatar;