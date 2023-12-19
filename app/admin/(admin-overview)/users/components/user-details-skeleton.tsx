type Props = {};

const UserDetailsSkeleton = (props: Props) => {
  return (
    <div className="mt-3 h-8 w-full flex justify-center items-center gap-4 bg-gray-400 rounded-lg">
      <h1 className="w-1/4 h-5 text-center bg-gray-200  rounded-xl" />
      <h1 className="w-1/4  h-5 text-center bg-gray-200  rounded-xl" />
      <div className="w-1/4 h-5 flex items-center justify-center bg-gray-200  rounded-xl" />
    </div>
  );
};

export default UserDetailsSkeleton;
