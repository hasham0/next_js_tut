import { assert } from "node:console";

import { User } from "@/types";

async function getUserData(userData: User[]): Promise<User[]> {
  userData.forEach((user) => {
    assert(user.id !== undefined, "ID is required");
    assert(user.name !== undefined, "Name is required");
    assert(user.email !== undefined, "Email is required");
    assert(user.username !== undefined, "Username is required");
    assert(user.phone !== undefined, "Phone is required");
  });
  return userData;
}

export { getUserData };
