// @ts-ignore
import React, {useEffect, useState, useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './createAcc.scss';
import '../../less/style.scss';
import '../../less/formComponent.scss';
import { useHTTP } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

function CreateAcc() {
    let history = useHistory();
    const {loading, error, request} =useHTTP()
    const [errors, setErrors] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [form, setForm] = useState({
        username: '', email: '', password: '', iaAdmin: isAdmin
    })
    const auth = useContext(AuthContext)

    useEffect(()=>{
        if (error){
            setErrors('able')
        }
    }, [error])

    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const isAdminFunc = () => {
        setIsAdmin(!isAdmin)
        console.log(isAdmin)
    }

    const registerHandler = async () => {
        try {
            const data = await request(`http://localhost:3001/auth/register`, 'POST', {...form})
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
                    <input type={"text"} id={`email`} name={"email"} onChange={changeHandler}/>
                </div>
                <div className={`formElem`}>
                    <label htmlFor={"password"}>password</label>
                    <input type={"password"} id={"password"} name={"password"} onChange={changeHandler}/>
                </div>
                <div className={"isAdmin"}>
                    <input type={"checkbox"} id={"isAdmin"} name={"isAdmin"} onClick={isAdminFunc} onChange={changeHandler}/>
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