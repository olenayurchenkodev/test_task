// @ts-ignore
import React from 'react';
import UserCard from '../../components/userCard/userCard';
import './users.scss';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import UserProfile from '../userProfile/userProfile';

function Users(props) {
    let { path, url } = useRouteMatch();

    return (
        <div className={"user_screen"}>
            <Switch>
                <Route exact path={`${path}`}>
                    <h2>Users:</h2>
                    <div className={"users_set"}>
                        <Link to={`${url}/userProfile`} className={"userItem"}>
                            <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/></Link>
                        <Link to={`${url}/userProfile`} className={"userItem"}>
                            <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/></Link>
                        <Link to={`${url}/userProfile`} className={"userItem"}>
                            <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/></Link>
                        <Link to={`${url}/userProfile`} className={"userItem"}>
                            <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/></Link>
                        <Link to={`${url}/userProfile`} className={"userItem"}>
                            <UserCard userName={"1White"} email={"mail@mail.com"} profileNum={3}/></Link>
                    </div>
                </Route>
                <Route path={`${path}/userProfile`}>
                    <UserProfile username={"Sup3r_puper"} useremail={"usermail@outlook.com"}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;