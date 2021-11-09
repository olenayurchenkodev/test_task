// @ts-ignore
import React from 'react';
import './app.scss';
import Home from '../home/home';
import SignIn from '../signIn/signIn';
import CreateAcc from '../createAcc/createAcc';
import Welcome from '../welcome/welcome';
import {Redirect, Route, Switch } from 'react-router-dom';
import { useAuth} from '../../hooks/auth.hook';
import { AuthContext} from '../../context/AuthContext';
import Profiles from '../profiles/profiles';



function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuthenteficated = !!token

    if (isAuthenteficated){
        return (
            <AuthContext.Provider value={{
                token, login, logout, userId, isAuthenteficated
            }}>
                <Switch>
                    <Route path={"/home"}>
                        <Home/>
                    </Route>
                    <Redirect to={"/home"}/>

                </Switch>
            </AuthContext.Provider>
        );
    }
    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenteficated}}>
            <Route path={"/welcome"}>
                <Welcome/>
            </Route>
            <Redirect to={"/welcome"}/>
        </AuthContext.Provider>
    );
}

export default App;