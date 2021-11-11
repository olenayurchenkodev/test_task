// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import {Switch, Route, Link, useRouteMatch, Redirect} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHTTP } from '../../hooks/http.hook';
import UserAvatar from '../../components/userAvatar/userAvatar';
import Users from './users/users';
import Dashboard from './dashboard/dashboard';
import Profiles from './profiles/profiles';
import './home.scss';
import './listLinks.scss';


function Home() {
    const auth = useContext(AuthContext)
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)
    const [username, setUsername] = useState('')
    let { path, url } = useRouteMatch()
    let history = useHistory()
    let adminStyle = ''
    if (auth.isAdminAuthenteficated){adminStyle = 'admin'}

    // get user from db
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(`http://localhost:3001/auth/home`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsername(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    // user logout
    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/welcome')
    }

    return (
        <>
            <header>
                <UserAvatar status={adminStyle} name={username}/>
                <ul>
                    <li className={"header_item profiles"}>
                        <Link to={`${url}/profiles`}><p>Profiles</p></Link>
                    </li>
                    {auth.isAdminAuthenteficated && <>
                        <li className={"header_item dashboard"}>
                            <Link to={`${url}/dashboard`}><p>Dashboard</p></Link>
                        </li>
                        <li className={"header_item users"}>
                            <Link to={`${url}/users`}><p>Users</p></Link>
                        </li>
                    </>}
                </ul>
                <p onClick={logoutHandler}>Log out</p>
            </header>
            <Switch>
                <Route path={`${path}/profiles`}>
                    <Profiles />
                </Route>
                {auth.isAdminAuthenteficated && <>
                    <Route path={`${path}/users`}>
                        <Users />
                    </Route>
                    <Route path={`${path}/dashboard`}>
                        <Dashboard />
                    </Route>
                </>}
                <Redirect to={`${path}/profiles`}/>
            </Switch>
        </>
    );
}

export default Home;