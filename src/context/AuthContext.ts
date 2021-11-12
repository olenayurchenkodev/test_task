import {createContext} from 'react'

const noop =  (...args: any[]): any => {};

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAdminAuthenticated: false,
    isUserAuthenticated: false
})