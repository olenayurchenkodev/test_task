// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'
import { useHTTP } from '../../../../hooks/http.hook'
import ProfileCard from '../../../../components/cards/profileCard/profileCard'
import PopupUser from '../../../../components/popups/popupUser/popupUser'
import Delete from '../../../../less/img/Delete.svg'
import Edit from '../../../../less/img/Edit.svg'
import './userProfile.scss'
import './userInfo.scss'

// props interface
export interface StandardComponentProps{
    username: string,
    useremail: string,
    userid: string
}

function UserProfile({username, useremail, userid}: StandardComponentProps) {
    const {token} = useContext(AuthContext)
    const { request} = useHTTP()
    const [state, setState] = useState(false);
    const [profiles, setProfiles] = useState([])
    const [isAdmin] = useState('off')
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [form, setForm] = useState({
        id: userid, username: username, email: useremail, isAdmin: isAdmin
    })
    let history = useHistory()

    // get profiles of user from db
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(`http://localhost:3001/profile`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setProfiles(fetched)

        } catch (e) {}
    }, [token, request])


    const userInfo = useCallback(async () => {
        try {
            const user = await request(
                `http://localhost:3001/users/${window.location.href.split('/').reverse()[0]}`,
                'GET', null, {
                Authorization: `Bearer ${token}`
            })
            console.log('user is ',user)
            setUserName(user.username)
            setUserEmail(user.email)
            setUserId(user._id)
            fetchLinks()

        } catch (e) {}
    }, [fetchLinks, request, token])

    useEffect(() => {
        userInfo()
    }, [userInfo])


    // delete user
    const deleteUser = async () => {
        try {
            const data = await request(`http://localhost:3001/users/`, 'DELETE', {key: userId}, {
                Authorization: `Bearer ${token}`
            } )
            if(data){
                history.push(`/home/users/userProfile/${userId}`)
            }
        } catch (e) {}
    }

    // open popup user redaction
    const openPopup = () =>{
        setState(prev => ! prev);
    }

    return (
        <div className={"user_profiles"}>
            <div className={"user_info"}>
                <h3>{userName}</h3>
                <h3>{userEmail}</h3>
                <p>user</p>
                <div className={"imgs"}>
                    <img src={Edit} alt={"edit"} onClick={openPopup}/>
                    <img src={Delete} alt={"delete"} onClick={deleteUser}/>
                </div>
            </div>
            <h2>Profiles:</h2>
            <div className={"profile_set"}>
                {profiles.map((profile: any) => {
                    if (userId === profile.owner){
                        return (
                            <ProfileCard
                                key={profile._id}
                                profile_id={profile._id}
                                name={profile.name}
                                sex={profile.gender}
                                birthdate={profile.birthdate}
                                location={profile.city}
                                owner={profile.owner}
                            />
                        )
                    }
                })}
            </div>
            <PopupUser form={form} setForm={setForm} state={state} setState={setState}/>
        </div>
    );
}

export default UserProfile;
