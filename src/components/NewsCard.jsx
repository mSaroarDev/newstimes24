import Image from "next/image";
import thumnail from '../../public/new-img.jpg'

export default function NewsCard({data}) {
  return (
    <>
      <div className="card w-96 md:w-80 bg-base-100 shadow-xl">
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
          <div className="post__meta text-sm card-actions justify-end">Bangladesh • 14 Oct, 2023</div>
        </div>
      </div>
    </>
  );
}
