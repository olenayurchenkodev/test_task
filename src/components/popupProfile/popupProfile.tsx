import React, { SetStateAction, Dispatch} from "react";
import './popupProfile.scss';

let click = false;

export interface StandardComponentProps{
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
}

const PopupProfile = ({state, setState}: StandardComponentProps) => {
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
                            <h4>gender:</h4>
                            <div className={"radio"}>
                                <div>
                                    <input type={"radio"} id={"male"} name={"male"}/>
                                    <label htmlFor={"male"}>male</label>
                                </div>
                                <div className={"secondVar"}>
                                    <input type={"radio"} id={"female"} name={"female"}/>
                                    <label htmlFor={"female"}>female</label>
                                </div>
                            </div>
                        </div>
                        <div className={"formElem"}>
                            <label htmlFor={"userName"}>birthdate:</label>
                            <input type={"text"} id={"birthdate"} name={"birthdate"} />
                        </div>
                        <div className={"formElem"}>
                            <label htmlFor={"userName"}>city:</label>
                            <input type={"text"} id={"city"} name={"city"} />
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

export default PopupProfile;