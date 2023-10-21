import Link from "next/link";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AllCategories from "@/components/AllCategories";
import {FaFolderTree} from 'react-icons/fa6';
import getAllCategories from "@/utils/categories";

export default async function Posts() {

  const categories = await getAllCategories()

  return (
    <>
      <div className="site__summary">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
            <FaFolderTree /> All Categories
          </h2>
          <Link href={"/admin/create-category"}>
            <h2 className="text-base font-medium mb-5 flex gap-2 items-center hover:text-brandColor hover:underline">
              <AiOutlinePlusCircle /> New Category
            </h2>
          </Link>
        </div>
        <hr />

        <div className="admin__news__cards gap-5 w-full mt-10">

          <AllCategories data={categories}/>

        </div>
      </div>
    </>
  );
}
