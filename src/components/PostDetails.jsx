import { BiUserCircle } from "react-icons/bi";
import Image from "next/image";
import thumnail from "../../public/new-img.jpg";
import AuthorsById from "@/utils/author";

export default async function PostDetails({postData, category}){

  const {post_title, post_content, featured_image, created_at, created_by} = postData;
  const author = await AuthorsById(created_by);

  // post date format
  const date = created_at;
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
            <div className="post__content w-full lg:w-3/4 shadow-md rounded-2xl bg-white p-4 lg:p-10 mb-10">
            <h2 className="text-3xl mb-4 font-bold">
              {post_title}
            </h2>
            <div className="post__meta flex flex-wrap items-center justify-start gap-x-10 mb-10">
              <div className="author__name flex gap-3 items-center">
                <BiUserCircle />  {author.full_name}
              </div>
              <h3>{category.category_name} • {formattedDate} </h3>
            </div>
            <div>
              <Image
                className="w-full rounded-2xl"
                src={featured_image}
                height={300}
                width={500}
                alt="thumbnail"
              />

              <p className="post__content py-10">
              <div
                dangerouslySetInnerHTML={{__html: post_content}}
              />
              </p>
            </div>
          </div>
        </>
    )
}