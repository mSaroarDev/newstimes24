import Image from "next/image";
import thumnail from "../../public/new-img.jpg";
import {ImBin} from 'react-icons/im'
import {FaPenToSquare} from 'react-icons/fa6'
import {BsArrowRightShort} from 'react-icons/bs'
import Link from "next/link";
import CategoriesById from "@/utils/categorybyid";

export default async function AdminNews({post}){

  const category = await CategoriesById(post.category_id);

  // post date format
  const date = post.created_at;
  const Localdate = new Date(date);
  const options = {
    year: "numeric",
    month: "short", // "short" gives you the abbreviated month name
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour time format
  };
  const formattedDate = Localdate.toLocaleString("en-US", options);


    return (
        <>
            <div className="sidebar__news__cards flex flex-col gap-5">
              <div className="sidebar__news__card rounded-md shadow-md gap-2 mb-3">
                <div className="flex">
                  <Image
                    className="rounded-l-md"
                    src={post.featured_image}
                    height={250}
                    width={200}
                    alt="Movie"
                  />

                  <div className="flex flex-col items-start justify-between p-4 w-full">
                  <h2 className="text-xl font-medium duration-300">
                    {post.post_title}
                  </h2>
                  <hr />
                  <div className="flex items-center justify-between w-full">
                  <div>
                    {category.category_name} • {formattedDate}
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <button className="btn btn-sm"><FaPenToSquare /></button>
                    <button className="btn btn-sm"><ImBin /></button>
                    <Link href={`http://localhost:3000/posts/${post.id}`}><button className="btn btn-sm flex items-center gap-1">Details <BsArrowRightShort /></button></Link>
                  </div>
                </div>

                  </div>
                  
                </div>
                
              </div>
            </div>
        </>
    )
}