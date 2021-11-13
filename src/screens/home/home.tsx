// @ts-ignore
import React, {Dispatch, SetStateAction, useCallback, useContext, useEffect, useState} from 'react';
import {Switch, Route, NavLink, useRouteMatch, Redirect} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useHTTP } from '../../hooks/http.hook';
import UserAvatar from '../../components/userAvatar/userAvatar';
import Users from './users/users';
import Dashboard from './dashboard/dashboard';
import Profiles from './profiles/profiles';
import './home.scss';
import './listLinks.scss';
import {PathContext} from "../../context/PathContext";


const Home = ()  =>{
    const auth = useContext(AuthContext)
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)
    let {path} = useContext(PathContext)
    const [username, setUsername] = useState('')
    let history = useHistory()
    let adminStyle = ''
    if (auth.isAdminAuthenticated){adminStyle = 'admin'}
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
                        <NavLink to={`/home/profiles`} onClick={()=>{path = '/home/profiles'}}><p>Profiles</p></NavLink>
                    </li>
                    {auth.isAdminAuthenticated && <>
                        <li className={"header_item dashboard"}>
                            <NavLink to={`/home/dashboard`}  onClick={()=>{path = '/home/dashboard'}}><p>Dashboard</p></NavLink>
                        </li>
                        <li className={"header_item users"}>
                            <NavLink to={`/home/users`}  onClick={()=>{path = '/home/users'}}><p>Users</p></NavLink>
                        </li>
                    </>}
                </ul>
                <p onClick={logoutHandler}>Log out</p>
            </header>
        </>
    );
}

export default Home;