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

export type { User, Post, Author };
