// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import UserAvatar from '../../components/userAvatar/userAvatar';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/auth.hook';
import { useHTTP } from '../../hooks/http.hook';
import './home.scss';
import './listLinks.scss';
import Users from '../users/users';
import Dashboard from '../dashboard/dashboard';
import Profiles from '../profiles/profiles';
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
    let able: string = "nonactive"
    let history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHTTP()
    let adminStyle = ''
    // console.log('isAfmin on page', auth.isAdminAuthenteficated)

    if (auth.isAdminAuthenteficated){adminStyle = 'admin'}
    const {token, userId} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            console.log('userId is', userId)
            const fetched = await request(`http://localhost:3001/auth/home`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsername(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    function HighlightLink({ label, to, active }) {
        let match = useRouteMatch({
            path: to,
            exact: active
        });

        return (
            <div className={match ? "active" : ""}>
                <Link className={`menuItem ${able}`} to={to}>{label}</Link>
            </div>
        );
    }

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
                    <li className={"profiles"}>
                        <HighlightLink to={`${url}/profiles`} label={"Profiles"} active={true}/>
                    </li>
                    {auth.isAdminAuthenteficated && <>
                        <li className={"dashboard"}>
                            <HighlightLink to={`${url}/dashboard`} label={"Dashboard"} active={true}/>
                        </li>
                        <li className={"users"}>
                            <HighlightLink to={`${url}/users`} label={"Users"} active={true}/>
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