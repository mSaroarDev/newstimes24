import { FetchAllPosts } from "@/utils/posts";
import NewsCard from "./NewsCard";
import AllPostsCards from "./AllPostsCards";

export default async function AllPosts(){

    const posts = await FetchAllPosts()

    return (
        <>
            <AllPostsCards postsData={posts} />
        </>
    )
}