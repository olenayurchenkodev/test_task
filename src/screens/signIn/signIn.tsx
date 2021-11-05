// @ts-ignore
import React, { useState } from 'react';
import {useHTTP} from '../../hooks/http.hook';
import '../../less/style.scss';
import './signIn.scss';
import './submit.scss';
import '../../less/formComponent.scss';

function SignIn() {
    const {loading, error, request} =useHTTP()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
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
                    <button className={"submit"} disabled={loading}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;