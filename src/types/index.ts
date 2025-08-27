type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type Author = Pick<User, "id" | "name">;

type Album = Pick<Post, "id" | "title" | "userId">;

export type { User, Post, Author, Album };
