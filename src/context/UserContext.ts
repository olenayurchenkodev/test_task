import {createContext} from 'react'


export const UserContext = createContext({
    userName: '',
    userEmail: '',
    user_id: ''
})