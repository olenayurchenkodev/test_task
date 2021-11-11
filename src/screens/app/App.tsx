// @ts-ignore
import {Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext} from '../../context/AuthContext'
import { useAuth} from '../../hooks/auth.hook'
import Welcome from '../welcome/welcome'
import Home from '../home/home'
import React from 'react'
import './app.scss'


function App() {
    const {login, logout, token, userId, isAdmin} = useAuth()
    const isUserAuthenteficated = !!token
    let isAdminAuthenteficated = false
    if (isAdmin !== 'off'){
        isAdminAuthenteficated = true
    }
    
    // Authenteficated
    if (isUserAuthenteficated){
        return (
            <AuthContext.Provider value={{
                token, login, logout, userId, isAdminAuthenteficated, isUserAuthenteficated
            }}>
                <Switch>
                    <Route path={"/home"}>
                        <Home/>
                    </Route>
                    <Redirect to={"/home/profiles"}/>
                </Switch>
            </AuthContext.Provider>
        );
    }

    // not Authenteficated
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