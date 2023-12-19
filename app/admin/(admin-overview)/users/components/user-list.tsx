import { getUsers } from "@/server-calls/user";
import UserDetails from "./user-details";

type Props = {};

const UserList = async () => {
  const users = await getUsers();

  return (
    <div className="w-2/3 m-5 flex flex-col justify-center items-center bg-gray-100">
      <h1 className="h-10 flex items-center">User List</h1>
      {users.length > 0 ? (
        users.map((user) => (
          <UserDetails
            key={user.id}
            id={user.id}
            email={user.email}
            role={user.role}
          />
        ))
      ) : (
        <h1>No User Exist</h1>
      )}
    </div>
  );
};

export default UserList;
