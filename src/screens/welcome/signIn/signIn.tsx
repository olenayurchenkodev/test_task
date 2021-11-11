// @ts-ignore
import React, {useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import {useHTTP} from '../../../hooks/http.hook';
import '../../../less/formComponent.scss';
import '../../../less/style.scss';
import './signIn.scss';
import './submit.scss';


function SignIn() {
    const {loading, error, request} = useHTTP()
    const auth = useContext(AuthContext)
    const [errors, setErrors] = useState('')
    const [form, setForm] = useState({
        email: '', password: ''
    })

    // error message
    useEffect(()=>{
        if (error){
            setErrors('able')
        }
        setTimeout(()=>{
            setErrors('')
        }, 1000)
    }, [error])

    // change form fields
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    // login
    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:3001/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.isAdmin)
        } catch (e) {}
    }

    return (
        <div>
            <div className={"signIn"}>
                <h2>Sign in</h2>
                <form>
                    <div className={"formElem"}>
                        <label htmlFor={"userName"}>Email</label>
                        <input type={"text"} id={'email'} name={'email'} onChange={changeHandler}/>
                    </div>
                    <div className={"formElem"}>
                        <label htmlFor={"password"}>password</label>
                        <input type={"password"} id={"password"} name={"password"} onChange={changeHandler}/>
                    </div>
                    <button className={"submit"} disabled={loading} onClick={loginHandler}>Sign In</button>
                </form>
            </div>
            <div className={`${errors} errorMessage`}>
                {error}
            </div>
        </div>
    );
}

export default SignIn;