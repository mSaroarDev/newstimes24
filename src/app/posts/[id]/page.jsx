
import PostDetails from "@/components/PostDetails";
import PostSidebarItems from "@/components/PostSidebarItems";
import ReadMorePosts from "@/components/ReadMore";
import CategoriesById from "@/utils/categorybyid";
import PostById from "@/utils/postbyid";

export default async function Posts({params}) {

  const postId = params.id;
  const postData = await PostById(postId);
  const category = await CategoriesById(postData.category_id);

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="post__container w-full px-5 flex mt-[80px] gap-7">
          <PostDetails postData={postData} category={category}/>
          <div className="post__sidebar hidden lg:block w-full lg:w-1/4 shadow-md rounded-2xl bg-white p-5 mb-10">
            <h3 className="text-base font-semibold mb-7">Latest News</h3>
            <PostSidebarItems />
            <PostSidebarItems />
            <PostSidebarItems />
            <PostSidebarItems />
          </div>
        </div>
        {/* read more post cards */}
        <h2 className="text-lg font-semibold my-4 text-center">Related Posts</h2>
        <div className="read__more">
          <ReadMorePosts />
        </div>
      </div>
    </>
  );
}
