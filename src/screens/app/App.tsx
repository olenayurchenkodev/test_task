// @ts-ignore
import React from 'react';
import './app.scss';
import Home from '../home/home';
import Welcome from '../welcome/welcome';
import {Redirect, Route, Switch } from 'react-router-dom';
import { useAuth} from '../../hooks/auth.hook';
import { AuthContext} from '../../context/AuthContext';



function App() {
    const {login, logout, token, userId, isAdmin} = useAuth()
    const isUserAuthenteficated = !!token
    console.log('isAdmin status', isAdmin)
    let isAdminAuthenteficated = false
    if (isAdmin !== 'off'){
        isAdminAuthenteficated = true
    }
     console.log('Admin',isAdminAuthenteficated)
    console.log('User',isUserAuthenteficated)
    if (isUserAuthenteficated){
        return (
            <AuthContext.Provider value={{
                token, login, logout, userId, isAdminAuthenteficated, isUserAuthenteficated
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
        <AuthContext.Provider value={{
            token, login, logout, userId, isAdminAuthenteficated, isUserAuthenteficated
        }}>
            <Route path={"/welcome"}>
                <Welcome/>
            </Route>
            <Redirect to={"/welcome"}/>
        </AuthContext.Provider>
    );
}

export default App;