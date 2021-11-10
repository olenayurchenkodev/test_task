import React, { SetStateAction, Dispatch, useState, useContext} from "react";
import { useHTTP } from "../../hooks/http.hook";
import './popupProfile.scss';
import { AuthContext } from "../../context/AuthContext";

let click = false;

export interface StandardComponentProps{
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
}

const PopupProfile = ({state, setState}: StandardComponentProps) => {
    const auth = useContext(AuthContext)
    const {request} =useHTTP()
    const [gender, setGender] = useState('')
    const [form, setForm] = useState({
        name: '', gender: '', birthdate: '', city: ''
    })


    const closePopup = () => {
        if (!click){
            setState(prev => ! prev);
        }click = false;
    }
    const catchClick = () => {click = true;}

    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    // const submit = event =>{
    // }

    const profileHandler = async () => {
        // console.log('form',form)
        try {
            const data = await request(`http://localhost:3001/profile/generate`, 'POST', {...form}, {
                Authorization: `Bearer ${auth.token}`
            })
            if (!data){
                
            }
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
                                <input type={"text"} id={"name"} name={"name"} onChange={changeHandler}/>
                            </div>
                            <div className={"formElem"}>
                                <h4>gender:</h4>
                                <div className={"radio"}>
                                    <div>
                                        <input
                                            type={"radio"}
                                            id={"male"}
                                            name={"gender"}
                                            onClick={()=>{setGender('male')}}
                                        />
                                        <label htmlFor={"male"}>male</label>
                                    </div>
                                    <div className={"secondVar"}>
                                        <input
                                            type={"radio"}
                                            id={"female"}
                                            name={"gender"}
                                            onClick={()=>{setGender('female')}}
                                        />
                                        <label htmlFor={"female"}>female</label>
                                    </div>
                                </div>
                            </div>
                            <div className={"formElem"}>
                                <label htmlFor={"birthdate"}>birthdate:</label>
                                <input type={"text"} id={"birthdate"} name={"birthdate"} onChange={changeHandler}/>
                            </div>
                            <div className={"formElem"}>
                                <label htmlFor={"city"}>city:</label>
                                <input type={"text"} id={"city"} name={"city"} onChange={changeHandler} />
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