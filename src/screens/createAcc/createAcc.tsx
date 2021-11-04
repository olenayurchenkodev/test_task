// @ts-ignore
import React from 'react';
import './createAcc.scss';
import '../../less/style.scss';
import TextTypeComponent from '../../components/formComponents/textTypeComponent';
import PassTypeComponent from '../../components/formComponents/passTypeComponent';
import CheckTypeComponent from '../../components/formComponents/checkTypeComponent';
import SubmitTypeComponent from '../../components/formComponents/submitTypeComponent';

function CreateAcc() {
    return (
        <div className={"createAcc"}>
            <h2>Create your account</h2>
            <form>
                <TextTypeComponent name={"Username"} />
                <TextTypeComponent name={"email"} />
                <PassTypeComponent />
                <CheckTypeComponent/>
                <SubmitTypeComponent name={"Sign Up"}/>
            </form>
        </div>
    );
}

export default CreateAcc;