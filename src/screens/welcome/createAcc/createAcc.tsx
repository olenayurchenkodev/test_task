// @ts-ignore
import React, { useEffect, useState} from 'react';
import { useHTTP } from '../../../hooks/http.hook';
import '../../../less/formComponent.scss';
import '../../../less/style.scss';
import './createAcc.scss';


function CreateAcc() {
    const {error, request} =useHTTP()
    const [errors, setErrors] = useState('')
    const [isAdmin] = useState('off')
    const [form, setForm] = useState({
        username: '', email: '', password: '', isAdmin: isAdmin
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

    // form fiald change
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    
    const registerHandler = async () => {
        try {
            await request(`http://localhost:3001/auth/register`, 'POST', {...form})
            // console.log('data', data)
        } catch (e) {}
    }

    return (
        <div className={"createAcc"}>
            <h2>Create your account</h2>
            <form>
                <div className={`formElem`}>
                    <label htmlFor={"username"}>Usernsme</label>
                    <input type={"text"} id={`username`} name={`username`} onChange={changeHandler}/>
                </div>
                <div className={`formElem`}>
                    <label htmlFor={"email"}>Email</label>
                    <input type={"text"} id={`email`} name={"email"} value={form.email} onChange={changeHandler}/>
                </div>
                <div className={`formElem`}>
                    <label htmlFor={"password"}>password</label>
                    <input type={"password"} id={"password"} name={"password"} value={form.password} onChange={changeHandler}/>
                </div>
                <div className={"isAdmin"}>
                    <input type={"checkbox"} id={"isAdmin"} name={"isAdmin"} onChange={changeHandler}/>
                    <label htmlFor={"isAdmin"}>is admin</label>
                </div>
                <button className={"submit"} onClick={registerHandler}>Sign Up</button>
            </form>
            <div className={`${errors} errorMessage`}>
                {error}
            </div>
        </div>
    );
}

export default CreateAcc;