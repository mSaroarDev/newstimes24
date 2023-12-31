import Link from 'next/link';
import {HiOutlineDocumentDuplicate} from 'react-icons/hi2';
import { AiOutlinePlusCircle } from "react-icons/ai";
import AdminNews from '@/components/AdminNews';
import AllPosts from '@/components/AllNews';
import { FetchAllPosts } from '@/utils/posts';

export default async function Posts() {

  const posts = await FetchAllPosts()

  return (
    <>
      <div className="site__summary">
        <div  className="flex items-center justify-between">
          <h2 className="text-xl font-medium mb-5 flex gap-2 items-center"><HiOutlineDocumentDuplicate /> All Posts</h2>
          <Link href={"/admin/create-post"}><h2 className="text-base font-medium mb-5 flex gap-2 items-center hover:text-brandColor hover:underline"><AiOutlinePlusCircle /> New Post</h2></Link>
        </div>
        <hr />

        <div className="admin__news__cards gap-5 w-full mt-10">

          {
            posts && posts.map((post) => {
              return <AdminNews key={posts.id} post={post}/>
            })
          }

      </div>
      </div>
    </>
  );
}
