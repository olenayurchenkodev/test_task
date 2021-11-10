import {useState, useCallback, useEffect} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isAdmin, setIsAdmin] = useState(null)

    const login = useCallback((jwtToken, id, status) => {
        setToken(jwtToken)
        setUserId(id)
        setIsAdmin(status)
        // console.log('during login status',status)
        localStorage.setItem('userData', JSON.stringify({
            userId: id, token: jwtToken, isAdmin: status
        }))
    }, [])

    const logout = useCallback(()=>{
        setToken(null)
        setUserId(null)
        setIsAdmin(null)
        localStorage.removeItem('userData')
    }, [])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userData')!)
        if(data && data.token){
            login(data.token, data.userId, data.isAdmin)
            // console.log('data.Admin',data.isAdmin)
        }

    }, [login])

    return {login, logout, token, userId, isAdmin}
}