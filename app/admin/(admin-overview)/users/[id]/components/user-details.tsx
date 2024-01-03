import prismadb from "@/lib/prismadb";
import Image from "next/image";

type Props = {};

const UserDetails = async ({ id }: { id: string }) => {
  const user = await prismadb.user.findUnique({
    where: { id },
    include: { profile: true },
  });

  if (!user?.profile) {
    return (
      <div className="w-full flex justify-center items-center gap-2">
        <div className="w-4/6 h-60 bg-gray-200 rounded-lg shadow-xl ">
          <div className="w-full h-44 flex justify-center items-center">
            <h1 className="text-lg text-red-500">{`User Don't Have Any Profile,,,`}</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center gap-2">
      <div className="w-96 h-96 bg-gray-200 rounded-lg shadow-xl ">
        <div className="w-full h-44 flex justify-center items-center">
          <div className="w-36 h-36">
            <Image
              alt="user-Image"
              src={"/images/default-user.png"}
              height={144}
              width={144}
              className="w-full border border-gray-300 h-full rounded-full object-cover"
            />
          </div>
        </div>
        <hr />

        <div className="w-full my-5 pl-10 flex flex-col gap-5 justify-center items-start">
          <div className="w-full flex justify-between">
            <h1 className="text-lg">{user?.profile?.name}</h1>
            <span className="w-fit px-3 py-1 mr-5 text-white rounded-md bg-green-400">
              {user?.role}
            </span>
          </div>
          <h1>{user?.email}</h1>
        </div>
      </div>
      <div className="w-3/6 h-96 bg-gray-200 rounded-lg shadow-lg"></div>
    </div>
  );
};

export default UserDetails;
