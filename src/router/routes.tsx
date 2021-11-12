import React, {useContext, useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Profiles from '../screens/home/profiles/profiles'
import Dashboard from '../screens/home/dashboard/dashboard'
import Users from '../screens/home/users/users'
import Welcome from "../screens/welcome/welcome";

export const useRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={'/home'}>
                    <Route path="/home/profiles">
                        <Profiles />
                    </Route>
                    <Route path="/home/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/home/users">
                        <Users />
                    </Route>
                </Route>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/welcome">
                <Welcome />
            </Route>
        </Switch>
    )
}