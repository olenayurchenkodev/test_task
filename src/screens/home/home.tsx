// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import UserAvatar from '../../components/userAvatar/userAvatar';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/auth.hook';
import { useHTTP } from '../../hooks/http.hook';
import './home.scss';
import './listLinks.scss';
import Users from './users/users';
import Dashboard from './dashboard/dashboard';
import Profiles from './profiles/profiles';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect
} from "react-router-dom";


function Home() {
    const [username, setUsername] = useState('')
    let { path, url } = useRouteMatch()
    let able = ""
    let history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHTTP()
    let adminStyle = ''
    // console.log('isAfmin on page', auth.isAdminAuthenteficated)

    if (auth.isAdminAuthenteficated){adminStyle = 'admin'}
    const {token, userId} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            // console.log('userId is', userId)
            const fetched = await request(`http://localhost:3001/auth/home`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsername(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])


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