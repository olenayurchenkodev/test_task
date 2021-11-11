// @ts-ignore
import React, { useCallback, useContext, useEffect, useState } from 'react';
import DashboardCard from '../../../components/dashboardCard/dashboardCard';
import { AuthContext } from '../../../context/AuthContext';
import { useHTTP } from '../../../hooks/http.hook';
import './dashboard.scss';

function Dashboard() {
    const [usersNumber, setUsersNumber] = useState(0)
    const [profilesNumber, setProfilesNumber] = useState(0)
    const [profilesOverNumber, setProfilesOverNumber] = useState(0)
    const {request} = useHTTP()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const users = await request(`http://localhost:3001/users/statistic`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            // console.log(users)
            setUsersNumber(users.length)
            let temp = 0;
            let temp1 = 0;
            for (let user of users) {
                // console.log(user._id)
                temp = temp + user.profileNum
                const profiles = await request(`http://localhost:3001/profile/${user._id}`, 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                for (let profile of profiles){
                    if (profile.birthdate != '' && +profile.birthdate.split('-')[0]<= 2003){
                        temp1++
                    }
                }
                // console.log('fatched',fetched)
            }
            setProfilesNumber(temp)
            setProfilesOverNumber(temp1)

        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    return (
        <div className={"dashboard_screen"}>
            <h2>Dashboard:</h2>
            <div className={"dashboard_set"}>
                <DashboardCard dataType={"Users"} data={usersNumber}/>
                <DashboardCard dataType={"Profiles"} data={profilesNumber}/>
                <DashboardCard dataType={"Profiles over 18 years old"} data={profilesOverNumber}/>
            </div>
        </div>
    );
}

export default Dashboard;