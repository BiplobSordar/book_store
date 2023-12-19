import UserDetailsSkeleton from "./user-details-skeleton";

const UserListSkeleton = () => {
  return (
    <div className="w-2/3 m-5 animate-pulse flex flex-col justify-center items-center bg-gray-100">
      <h1 className="h-10 flex items-center">User List</h1>
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
      <UserDetailsSkeleton />
    </div>
  );
};

export default UserListSkeleton;
