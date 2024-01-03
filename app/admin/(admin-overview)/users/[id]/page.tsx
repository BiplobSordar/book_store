import { Suspense } from "react";
import UserDetails from "./components/user-details";
import UserDetailsSkeleton from "./components/user-details-skeleton";

type Props = {};

const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full p-4   h-screen bg-white items-center flex flex-col gap-3">
      <div className="w-5/6 h-20 flex justify-evenly items-center bg-white m-2 rounded-lg">
        <p className="text-center text-xl text-gray-700">User Information</p>
      </div>
      <Suspense fallback={<UserDetailsSkeleton />}>
        <UserDetails id={params.id} />
      </Suspense>
    </div>
  );
};

export default UserPage;
