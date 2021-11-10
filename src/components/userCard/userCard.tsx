// @ts-ignore
import React from 'react';
import './userCard.scss';

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
//<UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>