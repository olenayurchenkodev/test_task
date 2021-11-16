import React, { SetStateAction, Dispatch, useContext} from "react"
import { useHistory} from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { UserContext } from "../../../context/UserContext"
import { useHTTP } from "../../../hooks/http.hook"
import './popupUser.scss'
import '../popupProfile/modal.scss'

export interface StandardComponentProps{
    form: any,
    setForm: Dispatch<SetStateAction<any>>
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
}

function PopupUser({form, setForm, state, setState}: StandardComponentProps) {
    const user = useContext(UserContext)
    const {request} = useHTTP()
    const auth = useContext(AuthContext)
    let click = false;
    let history = useHistory()

    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    // update user
    const userHandler = async () => {
        try {
            await request(`http://localhost:3001/users/update`, 'POST', {...form}, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push(`/home/users/userProfile/${user.user_id}`)
        } catch (e) {}
    }

    // close popup
    const closePopup = () => {
        if (!click){
            setState(prev => ! prev);
        }
        click = false;
    }
    const catchClick = () => {
        click = true;
    }

    return (
        <form>
            {state?
                <div className={"popupBack"} onClick={closePopup}>
                    <div  className={`ModalContent`} onClick={catchClick}>
                        <div className={"formElem"}>
                            <label htmlFor={"username"}>username:</label>
                            <input
                                type={"text"}
                                id={"username"}
                                name={"username"}
                                defaultValue={form.username}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={"formElem"}>
                            <label htmlFor={"email"}>email:</label>
                            <input
                                type={"text"}
                                id={"email"}
                                name={"email"}
                                defaultValue={form.email}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={"isAdmin"}>
                            <input
                                type={"checkbox"}
                                id={"isAdmin"}
                                name={"isAdmin"}
                                defaultValue={form.isAdmin}
                                onChange={changeHandler}
                            />
                            <label htmlFor={"isAdmin"}>is admin</label>
                        </div>
                        <div className={"formButtons"}>
                            <button className={"button"} onClick={userHandler}>✔</button>
                            <button className={"button"} onClick={closePopup}>🞫</button>
                        </div>
                    </div>
                </div>
                : null}
        </form>
    );
}

export default PopupUser;