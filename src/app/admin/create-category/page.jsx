import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {IoCreateOutline} from 'react-icons/io5';
import CreateCategory from "@/components/CreateCategory";
import { useFormik } from "formik";
import { GetUserId } from "@/utils/GetUserInfo";

export default async function CreateCategoryPage() {

  const userId = await GetUserId();

  return (
    <>
      <div className="site__summary">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
            <IoCreateOutline /> Create Category
          </h2>
          <Link href={"/"}>
            <h2 className="text-base font-medium mb-5 flex gap-2 items-center hover:text-brandColor hover:underline">
              <AiOutlineArrowLeft /> Back to Homepage
            </h2>
          </Link>
        </div>
        <hr />

        <CreateCategory props={userId}/>
      </div>
    </>
  );
}
