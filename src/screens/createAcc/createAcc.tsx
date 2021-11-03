// @ts-ignore
import React from 'react';
import './createAcc.scss';
import './formElem.scss';
import './isAdmin.scss';
import './submit.scss';

function CreateAcc() {
    return (
        <div className={"createAcc"}>
            <h2>Create your account</h2>
            <form>
                <div className={"formElem"}>
                    <label htmlFor={"userName"}>Username</label>
                    <input type={"text"} id={"userName"} name={"userName"}/>
                </div>
                <div className={"formElem"}>
                    <label htmlFor={"email"}>Email</label>
                    <input type={"text"} id={"email"} name={"email"}/>
                </div>
                <div className={"formElem"}>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"} name={"password"}/>
                </div>
                <div className={"isAdmin"}>
                    <input type={"checkbox"} id={"isAdmin"} name={"isAdmin"}/>
                    <label htmlFor={"isAdmin"}>is admin</label>
                </div>
                <input type={"submit"} id={"submit"} value={"Sign Up"}/>
            </form>
        </div>
    );
}

export default CreateAcc;