"use client";
import { ImBin } from "react-icons/im";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidFolderOpen } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { postsByCategories } from "@/utils/count";

export default function AdminCategoryCard({ data }) {

  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(()=>{
    const postCount = async () => {
      const totalPosts = await postsByCategories(data.id);
      setTotalPosts(totalPosts);
    }

    postCount();
  }, [])

  return (
    <>
      <div className="sidebar__news__cards flex flex-col gap-5">
        <div className="sidebar__news__card rounded-md shadow-md gap-2 mb-3">
          <div className="flex">
            <div className="h-24 w-24 grid place-items-center">
              <BiSolidFolderOpen className="text-4xl" />
            </div>

            <div className="flex flex-col items-start justify-between p-4 w-full">
              <h2 className="text-xl font-medium duration-300">
                {data.category_name}
              </h2>
              <hr />
              <div className="flex items-center justify-between w-full">
                <div>{totalPosts} Posts</div>
                <div className="flex items-center justify-end gap-3">
                  <Link href={`/admin/categories/edit/${data.id}`}>
                    <button className="btn btn-sm">
                      <FaPenToSquare />
                    </button>
                  </Link>
                  <button className="btn btn-sm">
                    <ImBin />
                  </button>
                  <Link href={`http://localhost:3000/posts/category/${data.id}`}>
                  <button className="btn btn-sm flex items-center gap-1">
                    Details <BsArrowRightShort />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
