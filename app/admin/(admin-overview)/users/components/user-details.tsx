import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { DeleteUserButton, DemoteToUser, PromoteToAdmin } from "./buttons";
interface UserDetailsProps {
  id: string;
  email: string;
  role: string;
}
const UserDetails = async ({ id, email, role }: UserDetailsProps) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="mt-3 h-8 w-full flex justify-center items-center bg-gray-200 rounded-lg">
      <h1 className="w-1/3 text-center">{email}</h1>
      <h1 className="w-1/3 text-center">{role}</h1>
      <div className="w-1/3 flex items-center justify-center">
        {session?.user.role === "SUPER_ADMIN" && role === "ADMIN" ? (
          <DemoteToUser id={id} role={role} />
        ) : (
          <PromoteToAdmin id={id} role={role} />
        )}

        <DeleteUserButton id={id} role={role} />
      </div>
    </div>
  );
};

export default UserDetails;
