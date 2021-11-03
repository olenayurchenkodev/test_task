// @ts-ignore
import React from 'react';
import './formElem.scss';
import './signIn.scss';
import './submit.scss';

function SignIn() {
    return (
        <div>
            <div className={"signIn"}>
                <h2>Sign in</h2>
                <form>
                    <div className={"formElem"}>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"text"} id={"email"} name={"email"}/>
                    </div>
                    <div className={"formElem"}>
                        <label htmlFor={"password"}>Password</label>
                        <input type={"password"} id={"password"} name={"password"}/>
                    </div>
                    <input type={"submit"} id={"submit"} value={"Sign Up"}/>
                </form>
            </div>
        </div>
    );
}

export default SignIn;