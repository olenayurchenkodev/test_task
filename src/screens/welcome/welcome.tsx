// @ts-ignore
import React from 'react';
import './welcome.scss';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import CreateAcc from '../createAcc/createAcc';
import SignIn from '../signIn/signIn';

function Welcome() {
    return (
        <>
            <div className={"links"}>
                <Link className={"welcomeItem"} to={`/welcome/register`}><h3>New User</h3></Link>
                <Link className={"welcomeItem"} to={`/welcome/login`}><h3>Sign In</h3></Link>
            </div>
            <Switch>
                <Route path={`/welcome/register`}><CreateAcc/></Route>
                <Route path={`/welcome/login`}><SignIn/></Route>
            </Switch>
        </>
    );
}

export default Welcome;