import Image from "next/image";
import thumnail from '../../public/new-img.jpg'
import Link from "next/link";
import CategoriesById from "@/utils/categorybyid";

export default async function NewsCard({data}) {
  
  const category = await CategoriesById(data.category_id);

  // post date format
  const date = data.created_at;
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
      <div className="card w-96 md:w-80 bg-base-100 shadow-xl overflow-hidden">
        <Link href={`/posts/${data.id}`}>
        <figure>
          <Image className="w-full md:w-80"
            src={data.featured_image}
            height={200}
            width={320}
            alt="thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.post_title}
          </h2>
          <p className="text-sm mb-2">
            {data.post_excerpt}
          </p>
          <hr />
          <div className="post__meta text-sm card-actions justify-end">{category.category_name} • {formattedDate}</div>
        </div>
        </Link>
      </div>
    </>
  );
}
