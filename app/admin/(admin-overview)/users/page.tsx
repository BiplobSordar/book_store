import { Suspense } from "react";
import SearchBar from "./components/search-bar";
import UserList from "./components/user-list";
import UserListSkeleton from "./components/user-list-skeleton";

const Users = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <SearchBar />
      <Suspense fallback={<UserListSkeleton />}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default Users;
