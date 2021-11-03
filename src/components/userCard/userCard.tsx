// @ts-ignore
import React from 'react';
import './userCard.scss';

export interface StandardComponentProps{
    userName: string,
    email: string,
    profileNum: number
}

function UserCard({userName, email, profileNum}: StandardComponentProps) {
    return (
        <div className={"userCard"}>
            <p className={"title"}>{userName}</p>
            <p>{email}</p>
            <p>{profileNum} profiles</p>
        </div>
    );
}

export default UserCard;
//<UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>