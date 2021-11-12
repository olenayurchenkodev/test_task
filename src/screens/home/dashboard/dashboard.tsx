// @ts-ignore
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHTTP } from '../../../hooks/http.hook';
import DashboardCard from '../../../components/cards/dashboardCard/dashboardCard';
import './dashboard.scss';


function Dashboard() {
    const [usersNumber, setUsersNumber] = useState(0)
    const [profilesNumber, setProfilesNumber] = useState(0)
    const [profilesOverNumber, setProfilesOverNumber] = useState(0)
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)

    // get statistic from db
    const fetchLinks = useCallback(async () => {
        try {
            const users = await request(`http://localhost:3001/statistic`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setUsersNumber(users.length)
            let temp = 0;
            let temp1 = 0;
            for (let user of users) {
                temp = temp + user.profileNum
                const profiles = await request(`http://localhost:3001/profile/${user._id}`, 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                for (let profile of profiles){
                    if (profile.birthdate !== '' && +profile.birthdate.split('-')[0]<= 2003){
                        temp1++
                    }
                }
            }
            setProfilesNumber(temp)
            setProfilesOverNumber(temp1)

        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    // rendering
    return (
        <>
            <div className={"dashboard_screen"}>
                <h2>Dashboard:</h2>
                <div className={"dashboard_set"}>
                    <DashboardCard dataType={"Users"} data={usersNumber}/>
                    <DashboardCard dataType={"Profiles"} data={profilesNumber}/>
                    <DashboardCard dataType={"Profiles over 18 years old"} data={profilesOverNumber}/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;