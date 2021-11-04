// @ts-ignore
import React from 'react';
import PassTypeComponent from '../../components/formComponents/passTypeComponent';
import SubmitTypeComponent from '../../components/formComponents/submitTypeComponent';
import TextTypeComponent from '../../components/formComponents/textTypeComponent';
import '../../less/style.scss';
import './signIn.scss';
import './submit.scss';

function SignIn() {
    return (
        <div>
            <div className={"signIn"}>
                <h2>Sign in</h2>
                <form>
                    <TextTypeComponent name={"email"} />
                    <PassTypeComponent />
                    <SubmitTypeComponent name={"Sign In"}/>
                </form>
            </div>
        </div>
    );
}

export default SignIn;