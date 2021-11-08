// @ts-ignore
import React, { useContext } from 'react';
import UserAvatar from '../../components/userAvatar/userAvatar';
import {NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
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
import Welcome from '../welcome/welcome';

function Home() {
    let { path, url } = useRouteMatch();
    let able: string = "nonactive";
    let history = useHistory();
    const auth = useContext(AuthContext)

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
                <UserAvatar status={"admin"} name={"1White"}/>
                <ul>
                    <li className={"profiles"}>
                        <HighlightLink to={`${url}/profiles`} label={"Profiles"} active={true}/>
                    </li>
                    <li className={"dashboard"}>
                        <HighlightLink to={`${url}/dashboard`} label={"Dashboard"} active={true}/>
                    </li>
                    <li className={"users"}>
                        <HighlightLink to={`${url}/users`} label={"Users"} active={true}/>
                    </li>
                </ul>
                <p onClick={logoutHandler}>Log out</p>
            </header>
            <Switch>
                <Route path={`${path}/profiles`}>
                    <Profiles />
                </Route>
                <Route path={`${path}/users`}>
                    <Users />
                </Route>
                <Route path={`${path}/dashboard`}>
                    <Dashboard />
                </Route>
                <Redirect to={`${path}/profiles`}/>
            </Switch>
        </>
    );
}

export default Home;