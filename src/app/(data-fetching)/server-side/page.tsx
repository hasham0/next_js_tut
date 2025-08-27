import { assert } from "node:console";

import UserCard from "@/components/user-card";
import { User } from "@/types";

type Props = {};

async function validateUser(userData: User[]): Promise<User[]> {
  userData.map((user) => {
    assert(user.id !== undefined, "ID is required");
    assert(user.name !== undefined, "Name is required");
    assert(user.email !== undefined, "Email is required");
    assert(user.username !== undefined, "Username is required");
    assert(user.phone !== undefined, "Phone is required");
  });
  return userData;
}
export default async function ServerSide({}: Props) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const users = await validateUser(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
