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
                        <HighlightLink to={"/profiles"} label={"Profiles"} active={true}/>
                    </li>
                    <li className={"dashboard"}>
                        <HighlightLink to={"/dashboard"} label={"Dashboard"} active={true}/>
                    </li>
                    <li className={"users"}>
                        <HighlightLink to={"/users"} label={"Users"} active={true}/>
                    </li>
                </ul>
                <p>Log out</p>
            </header>
            <Switch>
                <Route exact path={`/profiles`}>
                    <Profiles />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </>
    );
}

export default Home;