import SummaryCard from '@/components/SummaryCard';
import {HiOutlineDocumentDuplicate} from 'react-icons/hi2'
import { BiMessageSquareDetail } from "react-icons/bi";
import {PiFolderNotchOpenDuotone} from "react-icons/pi";
import {VscLayersActive} from "react-icons/vsc";
import { UserProfileInfo } from '@/utils/GetUserInfo';
import {ImStatsBars} from 'react-icons/im';
import Link from 'next/link';


export default async function Dashboard() {

  const userName = await UserProfileInfo()
  // console.log(userName)

  return (
    <>
      <div className="site__summary">
        <h2 className="text-xl font-medium mb-5 flex gap-2 items-center">
          <ImStatsBars /> Welcome: {userName.full_name} 
          {userName.full_name === "" ? (
            <Link className="underline text-xs text-red-500" href="/admin/profile/edit">Edit your profile to proceed...!</Link>
          ) : null}
        </h2>


      <div className='summary__boxes flex items-center justify-start gap-5'>
        <SummaryCard name="All Posts" icon={<HiOutlineDocumentDuplicate />}/>
        <SummaryCard name="All Categories" icon={<PiFolderNotchOpenDuotone />}/>
        <SummaryCard name="All Comments" icon={<BiMessageSquareDetail />}/>
        <SummaryCard name="New Comments" icon={<VscLayersActive/>}/>
      </div>

      
      </div>
    </>
  );
}
