import React, { SetStateAction, Dispatch} from "react";
import TextTypeComponent from "../../components/formComponents/textTypeComponent";
import RadioTypeComponent from '../../components/formComponents/radioTypeComponent';
import './popupProfile.scss';
import SubmitTypeComponent from "../formComponents/submitTypeComponent";

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
                        <TextTypeComponent name={"name"} />
                        <RadioTypeComponent type={"gender"}/>
                        <TextTypeComponent name={"birthdate"} />
                        <TextTypeComponent name={"city"} />
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