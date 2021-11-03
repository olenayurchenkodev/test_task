// @ts-ignore
import React from 'react';
import './welcome.scss';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import CreateAcc from '../createAcc/createAcc';
import SignIn from '../signIn/signIn';

function Welcome(props) {
    let { path, url } = useRouteMatch();

    return (
        <>
            <div className={"links"}>
                <Link className={"welcomeItem"} to={`${url}/createAcc`}><h3>New User</h3></Link>
                <Link className={"welcomeItem"} to={`${url}/signIn`}><h3>Sign In</h3></Link>
            </div>
            <Switch>
                <Route path={`${path}/createAcc`}><CreateAcc/></Route>
                <Route path={`${path}/signIn`}><SignIn/></Route>
            </Switch>
        </>
    );
}

export default Welcome;