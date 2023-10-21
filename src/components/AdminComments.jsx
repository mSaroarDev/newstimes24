import {ImBin} from 'react-icons/im'
import {FaPenToSquare} from 'react-icons/fa6'
import {BsArrowRightShort} from 'react-icons/bs'
import {FaComments} from 'react-icons/fa'

export default function AdminComments(){
    return (
        <>
            <div className="sidebar__news__cards flex flex-col gap-5">
              <div className="sidebar__news__card rounded-md shadow-md gap-2 mb-3">
                <div className="flex">
                  
                  <div className="h-24 w-24 grid place-items-center">
                  <FaComments className="text-2xl"/>
                  </div>

                  <div className="flex flex-col items-start justify-between p-4 w-full">
                  <h2 className="text-base font-medium duration-300">
                    The tigers have own the match. Great plays
                  </h2>
                  <hr />
                  <div className="flex items-center justify-between w-full">
                  <div>
                   by Mahtim Sakib • on Post • 15 Oct, 2023 • 07:40 PM
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    {/* <button className="btn btn-sm"><FaPenToSquare /></button> */}
                    <button className="btn btn-sm"><ImBin /></button>
                    <button className="btn btn-sm flex items-center gap-1">See Post <BsArrowRightShort /></button>
                  </div>
                </div>

                  </div>
                  
                </div>
                
              </div>
            </div>
        </>
    )
}