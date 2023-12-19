import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import {
  DeleteUser,
  PromoteUserToAdmin,
  demoteToUser,
} from "@/lib/actions/userActions";
import { getServerSession } from "next-auth";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface RoleChangeProps {
  id: string;
  role: string;
}
interface DeleteUserProps {
  id: string;
  role: string;
}

export const PromoteToAdmin = ({ id, role }: RoleChangeProps) => {
  const promoteUserById = PromoteUserToAdmin.bind(null, id);
  return (
    <form action={promoteUserById}>
      <button
        disabled={role === "ADMIN" || role === "SUPER_ADMIN" ? true : false}
        className={`flex m-1 px-2 justify-center items-center gap-2 ${
          role === "SUPER_ADMIN"
            ? "hover:bg-red-500 rounded-xl"
            : "hover:bg-green-400 rounded-xl"
        }`}
      >
        <GrUserAdmin size={15} />
        <p>{role === "ADMIN" ? "Active Admin" : "Promote Admin"}</p>
      </button>
    </form>
  );
};

export const DemoteToUser = ({ id, role }: RoleChangeProps) => {
  const demoteToUserById = demoteToUser.bind(null, id);
  return (
    <form action={demoteToUserById}>
      <button
        className={`flex m-1 px-2 justify-center items-center gap-2 ${
          role === "SUPER_ADMIN"
            ? "hover:bg-red-500 rounded-xl"
            : "hover:bg-green-400 rounded-xl"
        }`}
      >
        <GrUserAdmin size={15} />
        <p>{role === "ADMIN" ? "Demote Admin" : "Promote Admin"}</p>
      </button>
    </form>
  );
};

export const DeleteUserButton = async ({ id, role }: DeleteUserProps) => {
  const session = await getServerSession(authOptions);
  const deleteUserById = DeleteUser.bind(null, id);
  return (
    <form action={deleteUserById}>
      <button
        disabled={
          role === session?.user.role || role === "SUPER_ADMIN" ? true : false
        }
        className={`flex m-1 justify-center items-center gap-2 
       `}
      >
        <MdOutlineDeleteOutline
          size={20}
          color={
            role === session?.user.role || role === "SUPER_ADMIN"
              ? "red"
              : "green"
          }
        />
      </button>
    </form>
  );
};
