import type { Users } from "../../types/user";
type usersItemProps = {
  users: Users[];
};
export default function UsersItem({ users }: usersItemProps) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
