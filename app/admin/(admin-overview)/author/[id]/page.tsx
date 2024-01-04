import { Suspense } from "react";
import AuthorDetails from "./components/author-details";
import AuthorDetailsSkeleton from "./components/author-details-skeleton";

const AuthroPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full p-4   h-screen bg-white items-center flex flex-col gap-3">
      <div className="w-5/6 h-20 flex justify-evenly items-center bg-white m-2 rounded-lg">
        <p className="text-center text-xl text-gray-700">Author Details</p>
      </div>

      <Suspense fallback={<AuthorDetailsSkeleton />}>
        <AuthorDetails id={params.id} />
      </Suspense>
    </div>
  );
};

export default AuthroPage;
