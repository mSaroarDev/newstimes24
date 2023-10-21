
import { BiUserCircle } from "react-icons/bi";
import AdminProfileEdit from "@/components/AdminProfileEdit";
import { UserProfileInfo } from "@/utils/GetUserInfo";

export default async function EditProfile() {

  const userInfo = await UserProfileInfo()

  return (
    <>
      <div className="site__summary">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
            <BiUserCircle /> Admin Profile Edit
          </h2>
        </div>
        <hr />

        <div className="admin__news__cards gap-5 w-full mt-10">
          <AdminProfileEdit propData={userInfo} />
        </div>
      </div>
    </>
  );
}
