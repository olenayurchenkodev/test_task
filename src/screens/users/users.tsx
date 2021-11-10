// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import UserCard from '../../components/userCard/userCard';
import './users.scss';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import UserProfile from '../userProfile/userProfile';
import { AuthContext } from '../../context/AuthContext';
import { useHTTP } from '../../hooks/http.hook';

function Users(props) {
    const {request} = useHTTP()
    const [users, setUsers] = useState([])
    const {token} = useContext(AuthContext)
    let { path, url } = useRouteMatch()
    let userid = ''
    let usermail = ''
    let username = ''

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('http://localhost:3001/users', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    return (
        <div className={"user_screen"}>
            <Switch>
                <Route exact path={`${path}`}>
                    <h2>Users:</h2>
                    <div className={"users_set"}>
                        {users.map((user: any) => {
                            userid = user._id
                            usermail = user.email
                            username = user.username
                            return (
                                <Link to={`${url}/userProfile/${user._id}`} className={"userItem"} key={user._id}>
                                <UserCard
                                    username={user.username}
                                    email={user.email}
                                    isAdmin={user.isAdmin}
                                    profileNum={user.profileNum}
                                />
                                </Link>
                            )
                        })}
                    </div>
                </Route>
                <Route path={`${path}/userProfile/${userid}`}>
                    <UserProfile username={username} useremail={usermail} userid={userid}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;