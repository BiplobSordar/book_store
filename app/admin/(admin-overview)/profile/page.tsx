import { Suspense } from "react";
import ProfileDetails from "./components/profile-details";
import ProfileDetailsSkeleton from "./components/profile-details-skeleton";

type Props = {};

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full p-4   h-screen bg-white items-center flex flex-col gap-3">
      <div className="w-5/6 h-20 flex justify-evenly items-center bg-white m-2 rounded-lg">
        <p className="text-center text-xl text-gray-700">My Profile</p>
      </div>
      <Suspense fallback={<ProfileDetailsSkeleton />}>
        <ProfileDetails />
      </Suspense>
    </div>
  );
};

export default ProfilePage;
