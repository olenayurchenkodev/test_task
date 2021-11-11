// @ts-ignore
import React from 'react';
import './userCard.scss';

// props interface
export interface StandardComponentProps{
    username: string,
    email: string,
    isAdmin: string,
    profileNum: number
}

function UserCard({username, email, profileNum}: StandardComponentProps) {
    return (
        <div className={"userCard"}>
            <p className={"title"}>{username}</p>
            <p>{email}</p>
            <p>{profileNum} profiles</p>
        </div>
    );
}

export default UserCard;