import { assert } from "node:console";

import { Author } from "@/types";

type Props = {
  userId: string;
};
async function validateAuthor(author: Author): Promise<Author> {
  assert(author.id !== undefined, "ID is required");
  assert(author.name !== undefined, "Name is required");
  return author;
}
export default async function AuthorSection({ userId }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data: Author = await response.json();
  const author = await validateAuthor(data);
  return (
    <div className="mt-4 p-4 border-t text-sm">
      <p className="font-bold">Author:</p>
      <p>{author.name}</p>
    </div>
  );
}
