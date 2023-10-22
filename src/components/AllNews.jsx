import { FetchAllPosts } from "@/utils/posts";
import NewsCard from "./NewsCard";
import AllPostsCards from "./AllPostsCards";

export default async function AllPosts() {
  const posts = await FetchAllPosts();

  return (
    <>
      <div className="all-news flex flex-wrap items-start justify-center grid-flow-row-dense gap-10">
        {posts &&
          posts.map((post) => {
            return <NewsCard key={post.id} data={post} />
          })}
      </div>


    </>
  );
}
