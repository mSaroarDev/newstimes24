"use client"
import { UserProfileInfo } from '@/utils/GetUserInfo';
import {useState} from 'react';
import {ImStatsBars} from 'react-icons/im'

export default function WelcomeUser(){

    const [userName, setUserName] = useState("")

    useEffect(()=> {
        async function getUserInfo(){
            const userInfo = await UserProfileInfo()
            setUserName(userInfo.full_name)
        }
        getUserInfo()
    }, [])


    return (
        <>
            <h2 className="text-xl font-medium mb-5 flex gap-2 items-center"><ImStatsBars /> Welcome: {userName}</h2>
        </>
    )
}