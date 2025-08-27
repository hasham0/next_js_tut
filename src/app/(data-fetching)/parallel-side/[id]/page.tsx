import { assert } from "node:console";
import React from "react";

import { Album, Post } from "@/types";

type Props = {
  params: Promise<{ id: string }>;
};

const getUserPosts = async (userId: string): Promise<Post[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const data: Post[] = await response.json();
  data.map((post) => {
    assert(post.id !== undefined, "ID is required");
    assert(post.title !== undefined, "Title is required");
    assert(post.body !== undefined, "Body is required");
    assert(post.userId !== undefined, "User ID is required");
  });
  return data;
};
const getUserAlbums = async (userId: string): Promise<Album[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  const data: Album[] = await response.json();
  data.map((album) => {
    assert(album.id !== undefined, "ID is required");
    assert(album.title !== undefined, "Title is required");
    assert(album.userId !== undefined, "User ID is required");
  });
  return data;
};
export default async function ParallelSide({ params }: Props) {
  const { id } = await params;
  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);
  const [posts, albums] = await Promise.all([postsData, albumsData]);
  return (
    <div className="container mx-auto p-6 space-y-12">
      {/* Posts Section */}
      <section>
        <h1 className="text-2xl font-bold mb-6">📝 Posts</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white"
            >
              <h2 className="text-lg font-semibold mb-2 line-clamp-1 text-black capitalize">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Albums Section */}
      <section>
        <h1 className="text-2xl font-bold mb-6">📸 Albums</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <div
              key={album.id}
              className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white"
            >
              <h2 className="text-lg font-semibold line-clamp-1 text-black capitalize">
                {album.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Album ID: {album.id} • User ID: {album.userId}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
