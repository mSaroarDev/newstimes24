"use client"
import { successToast } from "@/libs/ToastFunctions"
import { useRouter } from "next/navigation"
import {ImExit} from 'react-icons/im'
import Toast from "./Toast"


export default function LogoutButton(){

    const router = useRouter()

    const showSuccess = (message) => successToast(message);

    const handleLogout = async () => {
        const res = await fetch("/api/logout", {
            method: "GET",
        })

        if(res.status === 200){
            showSuccess("Logout success")

            setTimeout(()=>{
                router.replace("/login")
            }, 1000)
        }

    }


    return (
        <>
            <span onClick={()=> handleLogout()} className="admin__links cursor-pointer"> <ImExit /> Sign Out</span>
            <Toast />
        </>
    )
}