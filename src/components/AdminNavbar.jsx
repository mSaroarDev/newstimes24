import Link from "next/link";
import { BiHome, BiMessageSquareDetail, BiUserCircle } from "react-icons/bi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { PiFolderNotchOpenDuotone } from "react-icons/pi";
import { ImExit } from "react-icons/im";
import LogoutButton from "./LogoutButton";

export default function AdminNavbar() {
  return (
    <>
      <div className="w-[250px] h-screen bg-[#292929] py-10 pt-[100px] fixed bottom-0 left-0 top-0">
        <div className="__heading p-3 mb-7">
          <h2 className="text-white font-semibold text-xl">
            NewsTimes24 Admin
          </h2>
        </div>
        <div className="__links text-white">
          <Link href={"/"} className="admin__links">
            <BiHome /> Homepage
          </Link>
          <Link href={"/admin/profile"} className="admin__links">
            <BiUserCircle /> Profile
          </Link>
          <Link href={"/admin/posts"} className="admin__links">
            <HiOutlineDocumentDuplicate /> All Posts
          </Link>
          <Link href={"/admin/categories"} className="admin__links">
            <PiFolderNotchOpenDuotone /> All Categories
          </Link>
          {/* <Link href={"/admin/comments"} className="admin__links">
            <BiMessageSquareDetail /> All Comments
          </Link> */}
          <LogoutButton />
          {/* <Link href={"/admin/new-post"} className="admin__links">
            <HiOutlineDocumentPlus /> Create New Post
          </Link>
          <Link href={"/new-category"} className="admin__links">
            <PiFolderNotchPlusDuotone /> Create Category
          </Link> */}
          {/* <Link href={"/"} className="admin__links">
            <ImExit /> Sign Out
          </Link> */}
        </div>
      </div>
    </>
  );
}
