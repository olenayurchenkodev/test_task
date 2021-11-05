// @ts-ignore
import React from 'react';
import UserAvatar from '../../components/userAvatar/userAvatar';
import './home.scss';
import './listLinks.scss';
import Users from '../users/users';
import Dashboard from '../dashboard/dashboard';
import Profiles from '../profiles/profiles';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

function Home() {
    let { path, url } = useRouteMatch();
    let able: string = "nonactive";

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
                <p>Log out</p>
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
            </Switch>
        </>
    );
}

export default Home;