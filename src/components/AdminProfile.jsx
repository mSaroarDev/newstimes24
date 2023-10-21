
import Image from "next/image"
import { UserInfo } from "@/utils/GetUserInfo";
import UserDetails from "./userinfo/userDetails";

export default async function AdminProfile({propData}){

    const userInfo = await UserInfo();

    return (
        <>
            <div className="profile__card p-10 rounded-xl shadow-md">
                <div className="flex items-start justify-start gap-6">
                    <Image className="rounded-full ring-2 mr-10 object-cover w-[150px] h-[150px]" src={propData.profile_pic} width={150} height={150} alt="Profile"/>

                    <div className="profile__details w-full">
                        <h2 className="text-xl font-semibold mb-3">{propData.full_name} #{propData.profile_id}</h2>
                        <hr className="mb-3" />
                        <p><span className="font-semibold py-5">Username</span>: {userInfo.username}</p>
                        <p><span className="font-semibold py-5">Email</span>: {userInfo.email}</p>
                        <UserDetails propData={propData}/>
                    </div>
                </div>
            </div>
        </>
    )
}