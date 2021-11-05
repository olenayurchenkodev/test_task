// @ts-ignore
import React, { useState } from 'react';
import './createAcc.scss';
import '../../less/style.scss';
import '../../less/formComponent.scss';
import { useHTTP } from '../../hooks/http.hook';

function CreateAcc() {
    const {loading, error, request} =useHTTP()

    const [form, setForm] = useState({
        username: '', mail: '', password: '', iaAdmin: false
    })

    return (
        <div className={"createAcc"}>
            <h2>Create your account</h2>
            <form>
                <div className={"formElem"}>
                    <label htmlFor={"userName"}>Usernsme</label>
                    <input type={"text"} id={`username`} name={`username`} />
                </div>
                <div className={"formElem"}>
                    <label htmlFor={"email"}>Email</label>
                    <input type={"text"} id={`email`} name={"email"} />
                </div>
                <div className={"formElem"}>
                    <label htmlFor={"password"}>password</label>
                    <input type={"password"} id={"password"} name={"password"}/>
                </div>
                <div className={"isAdmin"}>
                    <input type={"checkbox"} id={"isAdmin"} name={"isAdmin"}/>
                    <label htmlFor={"isAdmin"}>is admin</label>
                </div>
                <button className={"submit"} >Sign Up</button>
            </form>
        </div>
    );
}

export default CreateAcc;