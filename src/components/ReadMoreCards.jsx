import Image from "next/image";
import thumnail from '../../public/new-img.jpg'

export default function ReadMoreCards() {
  return (
    <>
      <div className="card w-96 md:w-80 bg-base-100 shadow-xl">
        <figure>
          <Image className="w-full md:w-80"
            src={thumnail}
            height={200}
            width={320}
            alt="thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">
            Feeding Our Future: Meeting The Food Waste Challenge
          </h2>
          <hr />
          <div className="post__meta text-sm card-actions justify-end">Bangladesh • 14 Oct, 2023</div>
        </div>
      </div>
    </>
  );
}
