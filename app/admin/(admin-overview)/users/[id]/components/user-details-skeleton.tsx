import Image from "next/image";

type Props = {};

const UserDetailsSkeleton = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center gap-2 animate-pulse">
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

        <div
          className="w-full my-5 pl-10 flex flex-col gap-5 justify-center items-start
  "
        >
          <div className="w-full flex justify-between">
            <h1 className="text-lg w-52 h-5 bg-gray-300 rounded-md"></h1>
            <span className="w-14  h-5 px-3 py-1 mr-5 text-white rounded-md bg-gray-300"></span>
          </div>
          <h1 className="text-lg w-52 h-5 bg-gray-300 rounded-md"></h1>
        </div>
      </div>
      <div className="w-3/6 h-96 bg-gray-200 rounded-lg shadow-lg"></div>
    </div>
  );
};

export default UserDetailsSkeleton;
