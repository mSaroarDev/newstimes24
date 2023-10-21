import AdminComments from "@/components/AdminComments";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {LiaComment} from 'react-icons/lia';

export default function Posts() {
  return (
    <>
      <div className="site__summary">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
            <LiaComment /> All Comments
          </h2>
          {/* <Link href={"/admin/create-post"}>
            <h2 className="text-base font-medium mb-5 flex gap-2 items-center hover:text-brandColor hover:underline">
              <AiOutlinePlusCircle /> New Category
            </h2>
          </Link> */}
        </div>
        <hr />

        <div className="admin__news__cards gap-5 w-full mt-10">
          <AdminComments />
          <AdminComments />
          <AdminComments />
          <AdminComments />
        </div>
      </div>
    </>
  );
}
