import React from 'react';
import UserAvatar from '../../components/userAvatar/userAvatar';
import './home.scss';
import './listLinks.scss';
import UserProfile from '../userProfile/userProfile';

function Home(props) {
    return (
        <>
            <header>
                <UserAvatar status={"admin"} name={"1White"}/>
                <ul>
                    <li className={"profiles"}>Profiles</li>
                    <li className={"dashboard active"}>Dashboard</li>
                    <li className={"users"}>Users</li>
                </ul>
                <p>Log out</p>
            </header>
            <div>
                <UserProfile/>
            </div>
        </>
    );
}

export default Home;