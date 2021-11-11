// @ts-ignore
import React, {useCallback, useContext, useEffect, useState } from 'react';
import {Switch, Route, Link, useRouteMatch} from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext';
import { useHTTP } from '../../../hooks/http.hook';
import UserCard from '../../../components/cards/userCard/userCard';
import UserProfile from './userProfile/userProfile';
import './users.scss';


function Users(props) {
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    let { path, url } = useRouteMatch()

    // get users from db
    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('http://localhost:3001/users', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsers(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    return (
        <div className={"user_screen"}>
            <Switch>
                <Route exact path={`${path}`}>
                    <h2>Users:</h2>
                    <div className={"users_set"}>
                        {users.map((user: any) => {
                            return (
                                <Link
                                    to={`${url}/userProfile/${user._id}`}
                                    className={"userItem"}
                                    key={user._id}
                                    onClick={()=>{
                                        setUserId(user._id)
                                        setUserName(user.username)
                                        setUserEmail(user.email)
                                    }}
                                >
                                    <UserCard
                                        username={user.username}
                                        email={user.email}
                                        isAdmin={user.isAdmin}
                                        profileNum={user.profileNum}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </Route>
                <Route path={`${path}/userProfile/${userId}`}>
                    <UserProfile 
                        username={userName} 
                        useremail={userEmail} 
                        userid={userId}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;