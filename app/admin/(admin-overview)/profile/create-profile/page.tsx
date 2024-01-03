import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prismadb from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CreateProfileForm from "../components/create-profile-form";

type Props = {};

const CreateProfilePage = async (props: Props) => {
  const session = await getServerSession(authOptions);
  (await prismadb.profile.findUnique({ where: { userId: session?.user.id } }))
    ? redirect("/admin/profile")
    : "";

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/5 h-110 flex items-center flex-col bg-white rounded-lg shadow-lg">
        <div className="h-28 w-full flex justify-center items-center">
          <h2 className="text-gray-600 text-lg">Create Your Profile</h2>
        </div>
        <CreateProfileForm />
      </div>
    </div>
  );
};

export default CreateProfilePage;
