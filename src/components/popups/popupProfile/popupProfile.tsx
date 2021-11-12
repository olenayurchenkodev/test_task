import React, { SetStateAction, Dispatch, useContext} from "react";
import { useHTTP } from "../../../hooks/http.hook";
import './popupProfile.scss';
import '../../../less/typedInputs.scss';
import { AuthContext } from "../../../context/AuthContext";

let click = false;

export interface StandardComponentProps{
    form: any,
    setForm: Dispatch<SetStateAction<any>>,
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>

}

const PopupProfile = ({form, setForm, state, setState}: StandardComponentProps) => {
    const auth = useContext(AuthContext)
    const {request} =useHTTP()

    const closePopup = () => {
        if (!click){
            setState(prev => ! prev);
        }click = false;
    }
    const catchClick = () => {click = true}
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const profileHandler = async () => {
        try {
            if (form.profile_id){
                await request(`http://localhost:3001/profile/`, 'DELETE', form.profile_id, {
                    Authorization: `Bearer ${auth.token}`
                } )
            }
            await request(`http://localhost:3001/profile/generate`, 'POST', {...form}, {
                Authorization: `Bearer ${auth.token}`
            })

        } catch (e) {}
    }

    return (
        <>
        {state?
            <div className={"popupBack"} onClick={closePopup}>
                <div  className={`ModalContent`} onClick={catchClick}>
                    <form>
                        <div className={"formElem"}>
                            <label htmlFor={"name"}>name:</label>
                            <input
                                type={"text"}
                                id={"name"}
                                name={"name"}
                                defaultValue={form.name}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={"formElem"}>
                            <h4>gender:</h4>
                            <div className={"radio"}>
                                <div>
                                    <input
                                        type={"radio"}
                                        id={"male"}
                                        value={'male'}
                                        name={"gender"}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor={"male"}>male</label>
                                </div>
                                <div className={"secondVar"}>
                                    <input
                                        type={"radio"}
                                        id={"female"}
                                        name={"gender"}
                                        value={'female'}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor={"female"}>female</label>
                                </div>
                            </div>
                        </div>
                        <div className={"formElem"}>
                            <label htmlFor={"birthdate"}>birthdate:</label>
                            <input
                                type="date"
                                name="birthdate"
                                defaultValue={form.birthdate}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={"formElem"}>
                            <label htmlFor={"city"}>city:</label>
                            <input
                                type={"text"}
                                id={"city"}
                                name={"city"}
                                defaultValue={form.city}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={"formButtons"}>
                            <button className={"button"} onClick={profileHandler}>✔</button>
                            <button className={"button"} onClick={closePopup}>🞫</button>
                        </div>
                    </form>
                </div>
            </div>
            : null}
        </>
    );
}

export default PopupProfile;