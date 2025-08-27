import { User } from "@/types";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>@{user.username}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
