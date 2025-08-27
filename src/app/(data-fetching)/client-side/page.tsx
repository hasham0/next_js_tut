"use client";

// import { assert } from "node:console";
import { useEffect, useState } from "react";

import UserCard from "@/components/user-card";
import { User } from "@/types";

type Props = {};
// function getUserData(userData: User[]): User[] {
//   userData.map((user) => {
//     assert(user.id !== undefined, "ID is required");
//     assert(user.name !== undefined, "Name is required");
//     assert(user.email !== undefined, "Email is required");
//     assert(user.username !== undefined, "Username is required");
//     assert(user.phone !== undefined, "Phone is required");
//   });
//   return userData;
// }

export default function ClientSide({}: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
