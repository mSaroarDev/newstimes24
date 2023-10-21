
import AdminProfile from "@/components/AdminProfile";
import { IoCreateOutline } from "react-icons/io5";
import Link from "next/link";
import { UserProfileInfo } from "@/utils/GetUserInfo";


export default async function AdminProfilePage() {

  const userData = await UserProfileInfo()
  // console.log([userData])

  return (
    <>
      <div className="site__summary">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
            Admin Profile:
          </h2>
          <Link href={"/admin/profile/edit"}>
            <h2 className="text-base font-medium mb-5 flex gap-2 items-center hover:text-brandColor hover:underline">
              <IoCreateOutline /> Edit Profile
            </h2>
          </Link>
        </div>
        <hr />
        <AdminProfile propData={userData}/>
      </div>
    </>
  );
}
