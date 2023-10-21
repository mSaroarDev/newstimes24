import Image from "next/image";
import thumnail from "../../public/new-img.jpg";
import {ImBin} from 'react-icons/im'
import {FaPenToSquare} from 'react-icons/fa6'
import {BsArrowRightShort} from 'react-icons/bs'

export default function AdminNews(){
    return (
        <>
            <div className="sidebar__news__cards flex flex-col gap-5">
              <div className="sidebar__news__card rounded-md shadow-md gap-2 mb-3">
                <div className="flex">
                  <Image
                    className="rounded-l-md"
                    src={thumnail}
                    height={250}
                    width={200}
                    alt="Movie"
                  />

                  <div className="flex flex-col items-start justify-between p-4 w-full">
                  <h2 className="text-xl font-medium duration-300">
                    Feeding Our Future: Meeting The Food Waste Challenge
                  </h2>
                  <hr />
                  <div className="flex items-center justify-between w-full">
                  <div>
                   143 Comments • Bangladesh • 14 Oct, 2023 • 07:33 PM
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <button className="btn btn-sm"><FaPenToSquare /></button>
                    <button className="btn btn-sm"><ImBin /></button>
                    <button className="btn btn-sm flex items-center gap-1">Details <BsArrowRightShort /></button>
                  </div>
                </div>

                  </div>
                  
                </div>
                
              </div>
            </div>
        </>
    )
}