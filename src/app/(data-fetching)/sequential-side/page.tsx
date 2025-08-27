import { assert } from "node:console";
import { Suspense } from "react";

import AuthorSection from "@/app/(data-fetching)/sequential-side/auther";
import { Post } from "@/types";

type Props = {};
async function validatePost(posts: Post[]): Promise<Post[]> {
  posts.map((post) => {
    assert(post.id !== undefined, "ID is required");
    assert(post.title !== undefined, "Title is required");
    assert(post.body !== undefined, "Body is required");
    assert(post.userId !== undefined, "User ID is required");
  });
  return posts;
}
export default async function SequentialSide({}: Props) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const posts: Post[] = await validatePost(data);
  const filterPosts = posts.filter((post) => post.userId % 10 === 1);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold my-2">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {filterPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded p-8 text-black flex  flex-col justify-between"
          >
            <div className="">
              <h2 className="text-2xl font-black capitalize">{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <Suspense fallback={<div>Loading author...</div>}>
              <AuthorSection userId={post.userId.toString()} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
