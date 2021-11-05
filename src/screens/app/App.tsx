// @ts-ignore
import React from 'react';
import './app.scss';
import Home from '../home/home';
import SignIn from '../signIn/signIn';
import CreateAcc from '../createAcc/createAcc';
import Welcome from '../welcome/welcome';
import {Redirect, Route, Switch } from 'react-router-dom';
import Profiles from '../profiles/profiles';

export interface StandardComponentProps{
    isAuthenteficated: boolean
}

function App({isAuthenteficated}: StandardComponentProps) {
    if (isAuthenteficated){
        return (
            <Switch>
                <Route path={"/home"}>
                    <Home/>
                </Route>
                <Redirect to={"/home"}/>
            </Switch>
        );
    }
    return (
        <div>
            <Route path={"/welcome"}>
                <Welcome/>
            </Route>
            <Redirect to={"/welcome"}/>
        </div>
    );
}

export default App;