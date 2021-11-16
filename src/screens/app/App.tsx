// @ts-ignore
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthContext} from '../../context/AuthContext'
import { useAuth} from '../../hooks/auth.hook'
import Home from '../home/home'
import React from 'react'
import './app.scss'
import {useRoutes} from "../../router/routes";


function App() {
    const {login, logout, token, userId, isAdmin} = useAuth()
    const isUserAuthenticated = !!token
    let isAdminAuthenticated = false
    const routes = useRoutes(isUserAuthenticated)
    if (isAdmin !== 'off'){
        isAdminAuthenticated = true
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAdminAuthenticated, isUserAuthenticated
        }}>
                <Router>
                    { isUserAuthenticated && <Home /> }
                    <div>
                        {routes}
                    </div>
                </Router>
        </AuthContext.Provider>
    );
}

export default App;