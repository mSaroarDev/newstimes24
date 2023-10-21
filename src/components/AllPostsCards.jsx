"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function AllPostsCards({ postsData }) {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    setPosts(postsData);
  }, [postsData]);

  return (
    <div className="all-news flex flex-wrap items-start justify-center grid-flow-row-dense gap-10">
      {posts &&
        posts.map((post) => {
          return <NewsCard key={post.id} data={post} />;
        })}
    </div>
  );
}
