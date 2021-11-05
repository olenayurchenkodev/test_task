import React, { SetStateAction, Dispatch} from "react";
import './popupUser.scss';

let click = false;

export interface StandardComponentProps{
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
}

function PopupUser({state, setState}: StandardComponentProps) {
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
        <>
            {state?
                <div className={"popupBack"} onClick={closePopup}>
                    <div  className={`ModalContent`} onClick={catchClick}>
                        <div className={"formElem"}>
                            <label htmlFor={"name"}>name:</label>
                            <input type={"text"} id={"name"} name={"name"} />
                        </div>
                        <div className={"formElem"}>
                            <label htmlFor={"email"}>email:</label>
                            <input type={"text"} id={"email"} name={"email"} />
                        </div>
                        <div className={"formElem"}>
                            <h4>role:</h4>
                            <div className={"radio"}>
                                <div>
                                    <input type={"radio"} id={"admin"} name={"role"}/>
                                    <label htmlFor={"admin"}>male</label>
                                </div>
                                <div className={"secondVar"}>
                                    <input type={"radio"} id={"user"} name={"role"}/>
                                    <label htmlFor={"user"}>user</label>
                                </div>
                            </div>
                        </div>
                        <div className={"formButtons"}>
                            <button className={"button"}>✔</button>
                            <button className={"button"}>🞫</button>
                        </div>
                    </div>
                </div>
                : null}
        </>
    );
}

export default PopupUser;