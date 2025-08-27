import { assert } from "node:console";
import Link from "next/link";

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
    <div className="mt-4 p-4  border-t text-sm">
      <div className="">
        <p className="font-bold">Author:</p>
        <p>{author.name}</p>
      </div>

      <Link
        href={`/parallel-side/${userId}`}
        className="flex justify-end w-full"
      >
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          view more
        </button>
      </Link>
    </div>
  );
}
