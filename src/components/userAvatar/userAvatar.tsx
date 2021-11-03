// @ts-ignore
import React from 'react';
import avatar from './img/avatar.png';
import './userAvatar.scss';

export interface StandardComponentProps{
    status: string,
    name: string
}

function UserAvatar({status, name}: StandardComponentProps) {
    return (
        <div className={"avatar"}>
            <img src={avatar} className={`${status}_avatar`}  alt={"user"}/>
            <p>{name}</p>
        </div>
    );
}

export default UserAvatar;