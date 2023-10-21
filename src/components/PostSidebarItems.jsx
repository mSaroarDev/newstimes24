import Image from "next/image";
import thumnail from "../../public/new-img.jpg";

export default function PostSidebarItems(){
    return (
        <>
            <div className="sidebar__news__cards flex flex-col gap-5">
              <div className="sidebar__news__card rounded-md shadow-md flex gap-2 mb-3">
                <Image
                  className="rounded-l-md"
                  src={thumnail}
                  height={100}
                  width={80}
                  alt="Movie"
                />
                <h2 className="text-xs font-medium p-2 hover:underline cursor-pointer duration-300">
                  Feeding Our Future: Meeting The Food Waste Challenge
                </h2>
              </div>
            </div>
        </>
    )
}