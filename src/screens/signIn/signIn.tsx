// @ts-ignore
import React, {useContext, useEffect, useState } from 'react';
import {useHTTP} from '../../hooks/http.hook';
import {NavLink, useHistory} from 'react-router-dom';
import '../../less/style.scss';
import './signIn.scss';
import './submit.scss';
import '../../less/formComponent.scss';
import { AuthContext } from '../../context/AuthContext';

function SignIn() {
    let history = useHistory();
    const {loading, error, request} = useHTTP()
    const [errors, setErrors] = useState('')
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const auth = useContext(AuthContext)

    useEffect(()=>{
        if (error){
            setErrors('able')
        }
        setTimeout(()=>{
            setErrors('')
        }, 1000)
    }, [error])

    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('http://localhost:3001/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
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