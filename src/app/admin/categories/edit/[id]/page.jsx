import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {IoCreateOutline} from 'react-icons/io5';
import EditCategory from "@/components/EditCategory";
import singleCategoryData from "@/utils/editcategory";

export default async function CreateCategoryPage({params}) {

  const categoryId = params.id;
  const category = await singleCategoryData(categoryId);
  // console.log(category);

  return (
    <>
      <div className="site__summary">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
            <IoCreateOutline /> Edit Category
          </h2>
          <Link href={"/"}>
            <h2 className="text-base font-medium mb-5 flex gap-2 items-center hover:text-brandColor hover:underline">
              <AiOutlineArrowLeft /> Back to Homepage
            </h2>
          </Link>
        </div>
        <hr />

        <EditCategory data={category} />
      </div>
    </>
  );
}
