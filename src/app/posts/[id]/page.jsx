
import PostDetails from "@/components/PostDetails";
import PostSidebarItems from "@/components/PostSidebarItems";
import ReadMorePosts from "@/components/ReadMore";

export default function Posts() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="post__container w-full px-5 flex mt-[80px] gap-7">
          <PostDetails />
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
