type Props = {};

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full items-center flex flex-col gap-3">
      <div className="w-5/6 h-20 flex justify-center items-center bg-white m-2 rounded-lg">
        <p className="text-center text-xl text-gray-700">User Information</p>
      </div>
      <div className="">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
