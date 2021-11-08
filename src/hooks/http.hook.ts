import {useState, useCallback} from 'react'

export const useHTTP = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'POST', body = null, headers = {}) =>{
        setLoading(true)
        try{
            if (body){
                body = JSON.stringify(body)
                headers['Content-Type'] ='application/json'
            }

            const response = await fetch(url, { method, body , headers })
            const data = await response.json()

            if (!response.ok){
                throw new Error(data.method || "Incorrect data")
            }
            setLoading(false)
            return data
        } catch(e: any){
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = () =>setError(null)

    return {loading, request, error, clearError}
}