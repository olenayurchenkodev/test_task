import React from 'react';
import PropTypes from "prop-types";
import './userCard.scss';

function UserCard(props) {
    return (
        <div className={"userCard"}>
            <p className={"title"}>{props.userName}</p>
            <p>{props.email}</p>
            <p>{props.profileNum} profiles</p>
        </div>
    );
}

UserCard.propTypes={
    userName: PropTypes.string,
    email: PropTypes.string,
    profileNum: PropTypes.number
};

export default UserCard;
//<UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>