import React from 'react';
import UserCard from '../../components/userCard/userCard';
import './users.scss';

function Users(props) {
    return (
        <div className={"user_screen"}>
            <h2>Users:</h2>
            <div className={"users_set"}>
                <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>
                <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>
                <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>
                <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>
                <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/>
            </div>
        </div>
    );
}

export default Users;